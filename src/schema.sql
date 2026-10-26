-- Psotek English database (D1 "psotek"). Run once: npx wrangler d1 execute psotek --remote --file src/schema.sql
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,          -- random id
  sub TEXT UNIQUE NOT NULL,     -- Google account id
  email TEXT NOT NULL,
  name TEXT,
  nick TEXT,                    -- the name the teacher sees
  role TEXT NOT NULL DEFAULT 'student',
  created INTEGER NOT NULL,
  last_seen INTEGER NOT NULL,   -- accounts unused for 6 months are deleted
  rev INTEGER NOT NULL DEFAULT 0 -- time of the last progress save
);
CREATE INDEX IF NOT EXISTS users_last_seen ON users(last_seen);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,  -- only a hash of the sign-in cookie is stored
  user_id TEXT NOT NULL,
  created INTEGER NOT NULL,
  expires INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id);
CREATE TABLE IF NOT EXISTS progress (
  user_id TEXT NOT NULL,
  k TEXT NOT NULL,              -- the app's saved-data key, e.g. vocab5-progress-v1
  v TEXT NOT NULL,
  updated INTEGER NOT NULL,
  PRIMARY KEY (user_id, k)
);
CREATE TABLE IF NOT EXISTS summary (
  user_id TEXT PRIMARY KEY,     -- what the teacher dashboard shows: minutes, words, video work, badges
  json TEXT NOT NULL,
  updated INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT,
  body TEXT NOT NULL,
  created INTEGER NOT NULL,
  done INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS messages_user ON messages(user_id);
-- personal keys for students without Google (added Oct 2026). Only a hash of the key is stored.
ALTER TABLE users ADD COLUMN key_hash TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS users_key ON users(key_hash);
CREATE TABLE IF NOT EXISTS key_fails (
  ip_hash TEXT NOT NULL,        -- hash of the address that typed a wrong key (to slow down guessing)
  at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS key_fails_ip ON key_fails(ip_hash, at);
