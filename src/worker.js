/* Psotek English: the small server behind psotnyjez.com.
   Everything that isn't /api/* is a plain file (index.html, app.js, vocab.json …) served straight from the assets.
   /api/* handles Google sign-in, saving each student's progress, the teacher dashboard and the privacy rights
   (download my data, delete my account, contact the teacher). Data lives in the D1 database "psotek". */

const SESSION_DAYS = 180;            // how long a sign-in lasts on a device
const INACTIVE_DAYS = 183;           // accounts unused for ~6 months are deleted (see privacy notice)
const MAX_ITEM = 600 * 1024, MAX_TOTAL = 2.5 * 1024 * 1024, MAX_SUMMARY = 96 * 1024;
const ALLOWED_KEY = /^(vocab5-|psotek-|ee-)[a-z0-9-]{1,40}$/;
const DAY = 864e5;
/* personal keys for students without Google: PSO-XXXXX-XXXXX, letters and digits that can't be mixed up (no 0/O, 1/I/L, U) */
const KEY_ABC = "23456789ABCDEFGHJKMNPQRSTVWXYZ";
const normKey = k => { const c = String(k || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); return c.length === 13 && c.startsWith("PSO") ? c.slice(3) : c; };
function newKey() { const r = crypto.getRandomValues(new Uint8Array(10)); const c = [...r].map(b => KEY_ABC[b % KEY_ABC.length]).join(""); return { show: `PSO-${c.slice(0, 5)}-${c.slice(5)}`, norm: c }; }
const keyHash = async norm => sha256("psotek-key:" + norm);
const KEY_TRIES = 8, KEY_WINDOW = 15 * 60e3;   // wrong keys allowed per address every 15 minutes

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (url.hostname === "www.psotnyjez.com") return Response.redirect("https://psotnyjez.com" + url.pathname + url.search, 301);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(req);
    try { return await api(req, env, url, ctx); }
    catch (e) { console.error(e); return json({ error: "server" }, 500); }
  },
  async scheduled(_ev, env) { await cleanup(env); }
};

/* ---------- helpers ---------- */
const json = (o, status = 200, headers = {}) => new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers } });
const now = () => Date.now();
const b64u = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const fromB64u = s => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4)), c => c.charCodeAt(0));
const sha256 = async s => b64u(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)));
const sha256hex = async s => [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)))].map(b => b.toString(16).padStart(2, "0")).join("");
const randomId = (n = 16) => b64u(crypto.getRandomValues(new Uint8Array(n)));
function cookie(req, name) { const m = (req.headers.get("cookie") || "").match(new RegExp("(?:^|;\\s*)" + name + "=([^;]+)")); return m ? m[1] : null; }
const sessionCookie = (token, maxAge) => `psotek_s=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;

/* ---------- Google ID token check ---------- */
let jwks = null, jwksAt = 0;
async function googleKeys(force) {
  if (!force && jwks && now() - jwksAt < 3600e3) return jwks;
  const r = await fetch("https://www.googleapis.com/oauth2/v3/certs"); if (!r.ok) throw new Error("certs");
  jwks = (await r.json()).keys; jwksAt = now(); return jwks;
}
async function verifyGoogle(token, env) {
  if (env.DEV_FAKE === "1" && token.startsWith("fake:")) { const [, email, name] = token.split(":"); return { sub: "fake-" + email, email, email_verified: true, name, given_name: (name || "").split(" ")[0] }; }
  const parts = token.split("."); if (parts.length !== 3) return null;
  const head = JSON.parse(new TextDecoder().decode(fromB64u(parts[0])));
  const body = JSON.parse(new TextDecoder().decode(fromB64u(parts[1])));
  if (head.alg !== "RS256") return null;
  let key = (await googleKeys()).find(k => k.kid === head.kid) || (await googleKeys(true)).find(k => k.kid === head.kid);
  if (!key) return null;
  const ck = await crypto.subtle.importKey("jwk", key, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", ck, fromB64u(parts[2]), new TextEncoder().encode(parts[0] + "." + parts[1]));
  if (!ok) return null;
  if (!["accounts.google.com", "https://accounts.google.com"].includes(body.iss)) return null;
  if (body.aud !== env.GOOGLE_CLIENT_ID) return null;
  if (!body.exp || body.exp * 1000 < now() - 60e3) return null;
  if (!body.email || body.email_verified !== true) return null;
  return body;
}

/* ---------- sessions ---------- */
async function currentUser(req, env) {
  const t = cookie(req, "psotek_s"); if (!t) return null;
  const h = await sha256(t);
  const row = await env.DB.prepare("SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires > ?").bind(h, now()).first();
  return row || null;
}
const publicUser = u => ({ id: u.id, nick: u.nick || u.name || "", name: u.name || "", email: u.email || "", viaKey: !!u.key_hash, role: u.role, rev: u.rev || 0, created: u.created });

/* ---------- API ---------- */
async function api(req, env, url, ctx) {
  const p = url.pathname, m = req.method;
  if (m !== "GET" && req.headers.get("x-psotek") !== "1") return json({ error: "bad request" }, 400);   // blocks other sites posting here

  if (p === "/api/config") return json({ clientId: env.GOOGLE_CLIENT_ID || "" });

  if (p === "/api/login" && m === "POST") {
    const { credential } = await req.json().catch(() => ({}));
    if (!credential || typeof credential !== "string" || credential.length > 8000) return json({ error: "no credential" }, 400);
    const g = await verifyGoogle(credential, env); if (!g) return json({ error: "sign-in failed" }, 401);
    const teacher = env.TEACHER_EMAIL_SHA256 && (await sha256hex(String(g.email).toLowerCase())) === env.TEACHER_EMAIL_SHA256;
    let u = await env.DB.prepare("SELECT * FROM users WHERE sub = ?").bind(g.sub).first();
    if (!u) {
      u = { id: randomId(9), sub: g.sub, email: g.email, name: g.name || "", nick: (g.given_name || g.name || "").slice(0, 24), role: teacher ? "teacher" : "student", created: now(), last_seen: now(), rev: 0 };
      await env.DB.prepare("INSERT INTO users (id, sub, email, name, nick, role, created, last_seen, rev) VALUES (?,?,?,?,?,?,?,?,0)").bind(u.id, u.sub, u.email, u.name, u.nick, u.role, u.created, u.last_seen).run();
    } else {
      await env.DB.prepare("UPDATE users SET email = ?, name = ?, last_seen = ?, role = ? WHERE id = ?").bind(g.email, g.name || u.name, now(), teacher ? "teacher" : (u.role === "teacher" ? "student" : u.role), u.id).run();
      u.email = g.email; u.role = teacher ? "teacher" : (u.role === "teacher" ? "student" : u.role);
    }
    return startSession(env, u);
  }

  if (p === "/api/key-login" && m === "POST") {
    const ip = req.headers.get("cf-connecting-ip") || "?", ipH = await sha256("ip:" + ip);
    const fails = await env.DB.prepare("SELECT COUNT(*) n FROM key_fails WHERE ip_hash = ? AND at > ?").bind(ipH, now() - KEY_WINDOW).first();
    if ((fails?.n || 0) >= KEY_TRIES) return json({ error: "too many" }, 429);
    const { key } = await req.json().catch(() => ({}));
    const norm = normKey(key);
    const ku = norm.length === 10 ? await env.DB.prepare("SELECT * FROM users WHERE key_hash = ?").bind(await keyHash(norm)).first() : null;
    if (!ku) {
      await env.DB.batch([env.DB.prepare("INSERT INTO key_fails (ip_hash, at) VALUES (?,?)").bind(ipH, now()), env.DB.prepare("DELETE FROM key_fails WHERE at < ?").bind(now() - KEY_WINDOW)]);
      return json({ error: "wrong key" }, 401);
    }
    await env.DB.prepare("UPDATE users SET last_seen = ? WHERE id = ?").bind(now(), ku.id).run();
    return startSession(env, ku);
  }

  const u = await currentUser(req, env);
  if (!u) return json({ error: "signed out" }, 401);

  if (p === "/api/me" && m === "GET") {
    if (now() - (u.last_seen || 0) > 6 * 3600e3) ctx.waitUntil(env.DB.prepare("UPDATE users SET last_seen = ? WHERE id = ?").bind(now(), u.id).run());
    return json({ user: publicUser(u) });
  }
  if (p === "/api/logout" && m === "POST") {
    const t = cookie(req, "psotek_s"); if (t) await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(await sha256(t)).run();
    return json({ ok: true }, 200, { "set-cookie": sessionCookie("", 0) });
  }
  if (p === "/api/progress" && m === "GET") return json({ progress: await loadProgress(env, u.id), rev: u.rev || 0 });
  if (p === "/api/progress" && m === "PUT") {
    const body = await req.json().catch(() => null);
    if (!body || typeof body.items !== "object") return json({ error: "bad body" }, 400);
    const entries = Object.entries(body.items).filter(([k, v]) => ALLOWED_KEY.test(k) && (typeof v === "string" || v === null));
    let total = 0; for (const [, v] of entries) { if (v && v.length > MAX_ITEM) return json({ error: "too big" }, 413); total += v ? v.length : 0; }
    if (total > MAX_TOTAL) return json({ error: "too big" }, 413);
    const t = now(), stmts = [];
    for (const [k, v] of entries) stmts.push(v === null ? env.DB.prepare("DELETE FROM progress WHERE user_id = ? AND k = ?").bind(u.id, k)
      : env.DB.prepare("INSERT INTO progress (user_id, k, v, updated) VALUES (?,?,?,?) ON CONFLICT(user_id, k) DO UPDATE SET v = excluded.v, updated = excluded.updated").bind(u.id, k, v, t));
    if (body.summary && typeof body.summary === "object") { const s = JSON.stringify(body.summary); if (s.length <= MAX_SUMMARY) stmts.push(env.DB.prepare("INSERT INTO summary (user_id, json, updated) VALUES (?,?,?) ON CONFLICT(user_id) DO UPDATE SET json = excluded.json, updated = excluded.updated").bind(u.id, s, t)); }
    const nick = typeof body.nick === "string" ? body.nick.replace(/\s+/g, " ").trim().slice(0, 24) : null;
    stmts.push(env.DB.prepare("UPDATE users SET rev = ?, last_seen = ?" + (nick && nick.length >= 2 ? ", nick = ?" : "") + " WHERE id = ?").bind(...(nick && nick.length >= 2 ? [t, t, nick, u.id] : [t, t, u.id])));
    await env.DB.batch(stmts);
    return json({ ok: true, rev: t });
  }
  if (p === "/api/export" && m === "GET") {
    const progress = await loadProgress(env, u.id);
    const s = await env.DB.prepare("SELECT json, updated FROM summary WHERE user_id = ?").bind(u.id).first();
    const msgs = (await env.DB.prepare("SELECT body, created FROM messages WHERE user_id = ? ORDER BY created").bind(u.id).all()).results;
    return new Response(JSON.stringify({ account: { email: u.email || null, signIn: u.key_hash ? "personal key" : "Google", name: u.name, nick: u.nick, created: new Date(u.created).toISOString(), lastSeen: new Date(u.last_seen).toISOString() }, progress, summaryForTeacher: s ? JSON.parse(s.json) : null, messages: msgs }, null, 1),
      { headers: { "content-type": "application/json; charset=utf-8", "content-disposition": `attachment; filename="psotek-my-data.json"`, "cache-control": "no-store" } });
  }
  if (p === "/api/account" && m === "DELETE") { await deleteUser(env, u.id); return json({ ok: true }, 200, { "set-cookie": sessionCookie("", 0) }); }
  if (p === "/api/contact" && m === "POST") {
    const { body } = await req.json().catch(() => ({}));
    const text = String(body || "").trim().slice(0, 2000); if (text.length < 2) return json({ error: "empty" }, 400);
    const recent = await env.DB.prepare("SELECT COUNT(*) n FROM messages WHERE user_id = ? AND created > ?").bind(u.id, now() - DAY).first();
    if ((recent?.n || 0) >= 10) return json({ error: "too many" }, 429);
    await env.DB.prepare("INSERT INTO messages (user_id, body, created) VALUES (?,?,?)").bind(u.id, text, now()).run();
    return json({ ok: true });
  }

  /* ----- teacher only ----- */
  if (p.startsWith("/api/teacher/")) {
    if (u.role !== "teacher") return json({ error: "teachers only" }, 403);
    if (p === "/api/teacher/students" && m === "GET") {
      const rows = (await env.DB.prepare("SELECT u.id, u.nick, u.name, u.email, u.key_hash IS NOT NULL AS via_key, u.created, u.last_seen, s.json, s.updated FROM users u LEFT JOIN summary s ON s.user_id = u.id WHERE u.role = 'student' ORDER BY u.last_seen DESC").all()).results;
      return json({ students: rows.map(r => ({ id: r.id, nick: r.nick, name: r.name, email: r.email, viaKey: !!r.via_key, created: r.created, lastSeen: r.last_seen, updated: r.updated, summary: r.json ? JSON.parse(r.json) : null })) });
    }
    if (p === "/api/teacher/messages" && m === "GET") {
      const rows = (await env.DB.prepare("SELECT m.id, m.body, m.created, m.done, u.nick, u.name, u.email FROM messages m LEFT JOIN users u ON u.id = m.user_id ORDER BY m.created DESC LIMIT 200").all()).results;
      return json({ messages: rows });
    }
    if (p === "/api/teacher/students" && m === "POST") {   // add a student who has no Google account
      const { nick } = await req.json().catch(() => ({}));
      const n = String(nick || "").replace(/\s+/g, " ").trim().slice(0, 24); if (n.length < 2) return json({ error: "name" }, 400);
      const k = newKey(), id = randomId(9), t = now();
      await env.DB.prepare("INSERT INTO users (id, sub, email, name, nick, role, created, last_seen, rev, key_hash) VALUES (?,?,?,?,?,'student',?,?,0,?)").bind(id, "key-" + id, "", n, n, t, t, await keyHash(k.norm)).run();
      return json({ id, nick: n, key: k.show });
    }
    let mm;
    if ((mm = p.match(/^\/api\/teacher\/students\/([A-Za-z0-9_-]+)\/key$/)) && m === "POST") {   // new key; the old one and its sign-ins stop working
      const s2 = await env.DB.prepare("SELECT id, key_hash FROM users WHERE id = ? AND role = 'student'").bind(mm[1]).first();
      if (!s2 || !s2.key_hash) return json({ error: "not a key account" }, 400);
      const k = newKey();
      await env.DB.batch([env.DB.prepare("UPDATE users SET key_hash = ? WHERE id = ?").bind(await keyHash(k.norm), s2.id), env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(s2.id)]);
      return json({ key: k.show });
    }
    if ((mm = p.match(/^\/api\/teacher\/messages\/(\d+)$/)) && m === "POST") { await env.DB.prepare("UPDATE messages SET done = 1 WHERE id = ?").bind(+mm[1]).run(); return json({ ok: true }); }
    if ((mm = p.match(/^\/api\/teacher\/students\/([A-Za-z0-9_-]+)$/)) && m === "DELETE") { await deleteUser(env, mm[1]); return json({ ok: true }); }
  }
  return json({ error: "not found" }, 404);
}

async function startSession(env, u) {
  const token = randomId(32);
  await env.DB.prepare("INSERT INTO sessions (token_hash, user_id, created, expires) VALUES (?,?,?,?)").bind(await sha256(token), u.id, now(), now() + SESSION_DAYS * DAY).run();
  const progress = await loadProgress(env, u.id);
  return json({ user: publicUser(u), progress }, 200, { "set-cookie": sessionCookie(token, SESSION_DAYS * 86400) });
}
async function loadProgress(env, id) {
  const rows = (await env.DB.prepare("SELECT k, v FROM progress WHERE user_id = ?").bind(id).all()).results;
  return Object.fromEntries(rows.map(r => [r.k, r.v]));
}
async function deleteUser(env, id) {
  await env.DB.batch(["sessions", "progress", "summary", "messages"].map(t => env.DB.prepare(`DELETE FROM ${t} WHERE user_id = ?`).bind(id))
    .concat(env.DB.prepare("DELETE FROM users WHERE id = ?").bind(id)));
}
async function cleanup(env) {
  const old = (await env.DB.prepare("SELECT id FROM users WHERE last_seen < ? AND role = 'student'").bind(now() - INACTIVE_DAYS * DAY).all()).results;
  for (const r of old) await deleteUser(env, r.id);
  await env.DB.prepare("DELETE FROM sessions WHERE expires < ?").bind(now()).run();
  await env.DB.prepare("DELETE FROM key_fails WHERE at < ?").bind(now() - KEY_WINDOW).run();
}
