const TENSES = [
  {name:"Present simple",form:"I work / she works",re:null},
  {name:"Present continuous",form:"am / is / are + -ing",re:/\b(am|is|are|'m|'re|'s)\s+(\w+\s+)?\w+ing\b/i},
  {name:"Past simple",form:"worked / made / was",re:/\b(was|were|did|\w+ed|made|had|became|seemed|went|took|gave|saw|found|got|said|came|knew|thought|felt|left|lost|paid|spent|bought|told|chose)\b/i},
  {name:"Past continuous",form:"was / were + -ing",re:/\b(was|were)\s+(\w+\s+)?\w+ing\b/i},
  {name:"Present perfect",form:"have / has + past participle",re:/\b(have|has|'ve)\s+(\w+\s+)?(been|\w+ed|\w+en|made|had|become|done|found|got|gone|seen|lost|paid|spent|bought|told|felt)\b/i},
  {name:"Past perfect",form:"had + past participle",re:/\b(had|'d)\s+(\w+\s+)?(been|\w+ed|\w+en|made|had|become|done|found|got|gone|seen|lost|paid|spent|bought|told|felt)\b/i},
  {name:"Future (will / going to)",form:"will + verb / be going to + verb",re:/\b(will|'ll|going to)\b/i}
];
const UPGRADE = [
  {w:"inevitable",plain:"Mistakes are certain to happen when you learn something new.",model:"Mistakes are inevitable when you learn something new."},
  {w:"inherent",plain:"Danger is a natural part of mountain climbing.",model:"Danger is inherent in mountain climbing."},
  {w:"arbitrary",plain:"The manager chose the date for no reason at all.",model:"The manager chose an arbitrary date."},
  {w:"plausible",plain:"Her reason for being late sounded believable.",model:"Her reason for being late sounded plausible."},
  {w:"coherent",plain:"His talk was clear and easy to follow.",model:"His talk was coherent and easy to follow."},
  {w:"prevalent",plain:"This habit is very common among teenagers.",model:"This habit is prevalent among teenagers."},
  {w:"vulnerable",plain:"Old computers can easily be attacked by viruses.",model:"Old computers are vulnerable to viruses."},
  {w:"deliberate",plain:"She broke the glass on purpose.",model:"She broke the glass deliberately."},
  {w:"ambiguous",plain:"The message could mean two different things.",model:"The message was ambiguous."},
  {w:"feasible",plain:"Finishing the project by Friday is possible in practice.",model:"Finishing the project by Friday is feasible."},
  {w:"reluctant",plain:"He didn't really want to lend me his car.",model:"He was reluctant to lend me his car."}
];
async function loadArchiveIndex(){
  if(VARCH) return VARCH;
  try{ const r=await fetch("vocab-archive/index.json",{cache:"no-cache"}); if(!r.ok) throw 0; const j=await r.json(); VARCH=Array.isArray(j.sets)?j.sets:[]; }
  catch(e){ VARCH=[]; }
  return VARCH;
}
function addUse(id){ state.uses[id]=(state.uses[id]||0)+1; touchWord(id); markDay(); save(); }
async function aiFeedback(word, sentence, tense, out, btn){
  if(!sample) return;
  btn.disabled=true; out.hidden=false; out.textContent="Thinking…";
  const prompt = `You are a friendly English teacher giving feedback to a learner (around B1–B2 level).
Target word: "${word}"${tense?`\nRequired tense: ${tense}`:""}
Learner's sentence: """${sentence}"""
Check: 1) is the target word (or a form of it) used with the correct meaning and grammar, 2) ${tense?"is the required tense used correctly, 3) ":""}any other grammar or spelling errors.
Reply ONLY with JSON, no markdown: {"verdict":"correct"|"almost"|"needs work","meaning":"one short sentence","${tense?"tense":"grammar"}":"one short sentence","corrected":"the corrected sentence (same as original if already correct)","tip":"one short, encouraging tip"}`;
  try{
    const r = await sample.json(prompt,{modelTier:"quick"});
    const verdict = {correct:"Correct",almost:"Almost there","needs work":"Needs some work"}[r.verdict]||r.verdict;
    out.textContent = `${verdict}\n\nMeaning: ${r.meaning||""}\n${tense?"Tense: "+(r.tense||""):"Grammar: "+(r.grammar||"")}\nBetter version: ${r.corrected||""}\nTip: ${r.tip||""}`;
    if(r.verdict==="correct") record(W[Object.keys(W).find(k=>W[k].word===word)].id,true);
  }catch(e){
    out.textContent = e && e.code==="not_granted" ? "Claude feedback wasn't allowed, so only the automatic checks are available."
      : e && e.code==="rate_limited" ? "Too many requests at once. Wait a minute and try again."
      : "Feedback couldn't load this time. The automatic checks above still work.";
    if(e && e.code==="not_granted"){ sample=null; document.querySelectorAll(".needs-ai").forEach(b=>b.hidden=true); }
  }finally{ btn.disabled=false; }
}
const SND_CATS = [
  { id:"ii", t:"ship or sheep?", lv:0, tip:"Short i is quick and relaxed; long ee is longer, with a smile.",
    pl:"Po polsku jest jedno „i”. Angielski ma krótkie /ɪ/ (ship) i długie /iː/ (sheep). Pomyl je, a „sheet” brzmi jak coś zupełnie innego.",
    ro:"Româna are un singur „i”. Engleza are /ɪ/ scurt (ship) și /iː/ lung (sheep). Dacă le confunzi, se schimbă cuvântul.",
    en:"Polish and Romanian have one i sound; English has two.",
    pairs:[["ship","sheep"],["live","leave"],["fill","feel"],["bit","beat"],["sit","seat"],["hit","heat"],["chip","cheap"],["slip","sleep"],["fit","feet"],["still","steal"]] },
  { id:"th", t:"th: think, this", lv:0, tip:"Put your tongue between your teeth and blow gently. Don't touch the roof of your mouth.",
    pl:"Polacy często mówią „f”, „s” albo „t” zamiast th. Język lekko między zębami: think, nie „fink” ani „sink”.",
    ro:"Românii spun adesea „s”, „t” sau „d” în loc de th. Pune limba ușor între dinți: think, nu „sink”.",
    en:"Neither Polish nor Romanian has th, so it often becomes f, s, t or d.",
    pairs:[["think","sink"],["thin","tin"],["three","free"],["thank","tank"],["thought","taught"],["mouth","mouse"],["path","pass"],["they","day"],["then","den"],["though","dough"]] },
  { id:"fv", t:"bed or bet? Final sounds", lv:1, tip:"Keep the voice on at the end of the word, and make the vowel before it a little longer: bed is longer than bet.",
    pl:"Po polsku końcowe dźwięki się ubezdźwięczniają (chleb brzmi jak „chlep”). Po angielsku bed i bet to różne słowa, więc trzymaj głos do końca.",
    ro:"Ține vocea până la capăt: bed și bet sunt cuvinte diferite. Vocala dinaintea unui sunet sonor e puțin mai lungă.",
    en:"Polish speakers devoice final consonants, so bed sounds like bet.",
    pairs:[["bed","bet"],["bag","back"],["card","cart"],["prize","price"],["eyes","ice"],["leave","leaf"],["dog","dock"],["rib","rip"],["peas","peace"],["his","hiss"]] },
  { id:"wv", t:"west or vest?", lv:1, tip:"For w, round your lips like a kiss and don't touch your teeth. For v, top teeth touch your bottom lip.",
    pl:"Polskie „w” to angielskie v. Angielskie w (west, wine) wymawiasz z zaokrąglonymi ustami, bez zębów: „ł”.",
    ro:"Pentru w rotunjește buzele, fără să atingi dinții (ca „u” scurt). Pentru v, dinții de sus ating buza de jos.",
    en:"Polish w is English v, so west can sound like vest.",
    pairs:[["west","vest"],["wine","vine"],["wet","vet"],["while","vile"],["worse","verse"],["wheel","veal"],["wary","very"]] },
  { id:"h", t:"hat or at?", lv:1, tip:"English h is just a soft breath, like fogging a mirror. Don't drop it, and don't make it rough.",
    pl:"Polskie „h” jest twarde, z gardła. Angielskie h to tylko lekki wydech: hat, hello.",
    ro:"Românescul „h” e mai aspru. În engleză h e doar o respirație ușoară: hat, hello.",
    en:"Polish and Romanian h is rough; English h is just breath.",
    pairs:[["hat","at"],["hair","air"],["hold","old"],["heat","eat"],["hear","ear"],["high","eye"],["hate","eight"]] },
  { id:"ae", t:"bad or bed?", lv:2, tip:"For the a in bad, open your mouth wide and spread your lips. Bed is smaller; cut is short and relaxed.",
    pl:"Po polsku nie ma dźwięku /æ/ (cat, bad). Otwórz szeroko usta, jak między „a” i „e”.",
    ro:"Româna nu are sunetul /æ/ (cat, bad). Deschide gura larg, între „a” și „e”.",
    en:"Neither language has the æ in cat, so bad, bed and bud blur together.",
    pairs:[["bad","bed"],["man","men"],["cat","cut"],["hat","hut"],["ran","run"],["bag","bug"],["pan","pen"],["sat","set"]] },
  { id:"ng", t:"thing or think?", lv:2, tip:"End -ng in the nose, with no k or g sound after it: sing, not singk.",
    pl:"Polacy często dodają „k” lub „g” na końcu: „singk”. Zakończ -ng nosowo, bez dodatkowego dźwięku.",
    ro:"Nu adăuga „g” sau „c” după -ng: sing, nu „sing-g”. Sunetul se termină în nas.",
    en:"Learners add a k or g after ng.",
    pairs:[["thing","think"],["sing","sink"],["wing","wink"],["rang","rank"],["sung","sunk"],["bang","bank"]] },
  { id:"sh", t:"sip or ship?", lv:2, tip:"For sh, round your lips and push them forward a little. For s, smile.",
    pl:"Uważaj na sh: ship, she. To dźwięk bliski polskiemu „sz”, ale z zaokrąglonymi ustami.",
    ro:"Sh seamănă cu „ș” din română: ship, she. Nu-l confunda cu s.",
    en:"Mixing s and sh changes the word.",
    pairs:[["sip","ship"],["sea","she"],["sort","short"],["save","shave"],["sell","shell"],["sour","shower"]] },
  { id:"uu", t:"full or fool?", lv:3, tip:"Full is short and relaxed; fool is long, with rounded lips.",
    pl:"Jak przy i: krótkie /ʊ/ (full, look) i długie /uː/ (fool, Luke).",
    ro:"Ca la i: /ʊ/ scurt (full, look) și /uː/ lung (fool, Luke).",
    en:"Short and long u, like short and long i.",
    pairs:[["full","fool"],["pull","pool"],["look","Luke"],["could","cooed"]] },
  { id:"oa", t:"coat or caught?", lv:3, tip:"Coat glides from o to u; caught is one long, round sound.",
    pl:"„Coat” to dwugłoska (o-u), a „caught” to jedno długie, okrągłe „o”.",
    ro:"„Coat” e un diftong (o-u), iar „caught” e un singur „o” lung și rotunjit.",
    en:"Coat has two sounds; caught has one.",
    pairs:[["coat","caught"],["low","law"],["boat","bought"],["so","saw"],["woke","walk"]] }
];
const SND_STRESS = [
  [0,["teach","er"],0],[0,["ho","tel"],1],[0,["ba","na","na"],1],[0,["com","pu","ter"],1],[0,["wa","ter"],0],[0,["to","ma","to"],1],[0,["break","fast"],0],[0,["a","gain"],1],
  [1,["veg","e","ta","ble"],0],[1,["com","for","ta","ble"],0],[1,["in","ter","est","ing"],0],[1,["choc","o","late"],0],[1,["Wed","nes","day"],0],[1,["re","mem","ber"],1],[1,["de","li","cious"],1],[1,["fa","mi","ly"],0],
  [2,["pho","to","graph"],0],[2,["pho","to","gra","phy"],1],[2,["pho","to","gra","phic"],2],[2,["e","co","no","my"],1],[2,["e","co","nom","ic"],2],[2,["de","vel","op"],1],[2,["ad","ver","tise","ment"],1],[2,["in","for","ma","tion"],2],
  [3,["a","ca","de","my"],1],[3,["a","ca","dem","ic"],2],[3,["de","ter","mine"],1],[3,["in","ter","na","tion","al"],2],[3,["ca","te","go","ry"],0],[3,["con","trib","ute"],1],[3,["e","vent","u","al","ly"],1],[3,["ne","ces","sa","ry"],0],
  [4,["pho","to","gra","pher"],1],[4,["ca","the","dral"],1],[4,["hy","po","the","sis"],1],[4,["sig","ni","fi","cant"],1],[4,["e","pi","to","me"],1],[4,["ar","chi","tec","ture"],0],
  [5,["he","te","ro","ge","ne","ous"],3],[5,["sub","sid","ia","ry"],1],[5,["ad","mi","ra","ble"],0],[5,["mis","chie","vous"],0],[5,["par","tic","u","lar","ly"],1]
].map(([lv,syl,st])=>({lv,syl,st}));
const SND_WEAK = [
  [0,"I want *to go *to *the shop.","To and the are quick and small: “tuh”, “thuh”."],
  [0,"*Can I have *a cup *of tea?","At the start of a question, can is weak: “kn”. A and of shrink to “uh” and “uv”."],
  [0,"Fish *and chips, please.","And shrinks to “n”: fish ’n’ chips."],
  [1,"~He *was *at *the station.","Was, at and the are all weak in the middle of a sentence."],
  [1,"Where *are ~you from?","Are is weak, but from is STRONG at the end of a sentence."],
  [1,"I’m waiting *for *a bus.","For becomes “fuh” and a becomes “uh”."],
  [1,"There’s *some milk in *the fridge.","Some is weak (“sum”) when it means an amount."],
  [2,"~We *have *been *to London.","Have, been and to are weak: “wiv bin tuh London”."],
  [2,"Who *are ~you waiting for?","For is strong at the end; are is weak."],
  [2,"I *can swim, *but she can’t.","Can is weak (“kn”), but can’t is always strong."],
  [2,"It’s *from *a friend *of mine.","From, a and of are all weak here."],
  [3,"What *do ~you think *of ~it?","Do you often becomes “d’you”; of is weak."],
  [3,"I *should *have told you earlier.","Should have becomes “shuduv”: never “should of” in writing."],
  [3,"*There *are *a lot *of people here.","There are a lot of → “thruh lot uv”."],
  [4,"*As far *as I know, *the meeting’s *at ten.","As, the and at all shrink. Content words carry the beat."],
  [4,"~You *must *have *been tired.","Must have been → “mustuv bin”."],
  [5,"~It *was *the best thing *that *could *have happened.","Function words shrink so the content words stand out: best, thing, happened."]
].map(([lv,s,why])=>{ const toks=s.split(" "); return {lv, why, toks:toks.map(t=>t.replace(/^[*~]/,"")), weak:toks.map((t,i)=>t.startsWith("*")?i:-1).filter(i=>i>=0), opt:toks.map((t,i)=>t.startsWith("~")?i:-1).filter(i=>i>=0)}; });
const saveSnd = () => { try{ localStorage.setItem("vocab5-sounds", JSON.stringify({lv:snd.lv,cat:snd.cat,mode:snd.mode})); }catch(e){} };
const sndLv = () => (snd.lv==null ? state.vlv : snd.lv);
function sndNext(kind, list){ const L=sndLv(); let pool=list.filter(x=>x.lv<=L+1); if(pool.length<6) pool=list.slice();
  let q=snd.queue[kind]; const key=kind+L+snd.cat; if(!q||!q.length||q.key!==key){ q=shuffle(pool.slice()); q.key=key; snd.queue[kind]=q; } return q.pop(); }
function sndNote(c){ const lg=typeof helpLang==="function"?helpLang():""; if(lg==="pl") return `<span class="l1flag">PL</span>${esc(c.pl)}`; if(lg==="ro") return `<span class="l1flag">RO</span>${esc(c.ro)}`; return esc(c.en); }
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let srBlocked = !SR, srBusy=false;
function viewSounds(){
  const L=sndLv();
  const modes=[["hear","Which word?"],["dict","Listen and type"],["stress","Word stress"],["weak","Weak forms"],["say","Say it"]];
  $("#view").innerHTML=`
  <header class="pagehead"><p class="eyebrow">Pronunciation</p><h1>Sounds</h1>
    <p class="lede">Train your ear first, then your mouth. These are the sounds that Polish and Romanian speakers find hardest in English. Use headphones if you can.</p></header>
  <div class="levels"><span class="lvlabel">Level</span>
    <div class="lvbtns" role="radiogroup" aria-label="Pronunciation level">${LV.map((l,i)=>`<button class="lvb" type="button" role="radio" data-slv="${i}" aria-checked="${i===L}">${l}</button>`).join("")}</div></div>
  <div class="picks" style="margin:0 0 16px" role="group" aria-label="Pronunciation practice">${modes.map(([m,l])=>`<button class="pick" type="button" data-sm="${m}" aria-pressed="${snd.mode===m}">${l}</button>`).join("")}</div>
  ${canSpeak?"":`<div class="feedback no">Your browser can't play English speech. Try Chrome, Edge or Safari.</div>`}
  <div id="sroom"></div>`;
  $$("[data-slv]").forEach(b=>b.onclick=()=>{ snd.lv=+b.dataset.slv; snd.q=null; snd.done=false; saveSnd(); viewSounds(); });
  $$("[data-sm]").forEach(b=>b.onclick=()=>{ if(snd.mode===b.dataset.sm) return; snd.mode=b.dataset.sm; snd.q=null; snd.done=false; saveSnd(); viewSounds(); });
  ({hear:sndHear,dict:sndDict,stress:sndStress,weak:sndWeak,say:sndSay})[snd.mode]();
}
function sndHud(){ return `<div class="hud"><span>${snd.seen?`${snd.right} of ${snd.seen} right`:"Your score starts with the first answer"}</span><span class="streak">${snd.streak>=2?`Streak ${snd.streak}`:""}</span></div>`; }
function sndScore(ok,btn){ snd.seen++; track(ok); if(ok){ snd.right++; snd.streak++; if(btn) burst(btn,5); } else snd.streak=0; }
function sndCats(){ const L=sndLv(); return SND_CATS.filter(c=>c.lv<=L+1); }
const dictNorm = s => s.toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim();
const dictTok = s => dictNorm(s).split(" ").filter(Boolean);
function dictPool(){ const L=sndLv(); const max=[8,10,14,18,24,30][L];
  const all=Object.values(W).filter(w=>!w.old && w.lv===L).flatMap(w=>[w.ex,w.ex2]).filter(s=>s && dictTok(s).length<=max && dictTok(s).length>=3);
  return [...new Set(all)]; }
function dictDiff(target, typed){ /* longest common subsequence over words */
  const a=dictTok(target), b=dictTok(typed), n=a.length, m=b.length, T=Array.from({length:n+1},()=>new Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--) for(let j=m-1;j>=0;j--) T[i][j]= a[i]===b[j] ? T[i+1][j+1]+1 : Math.max(T[i+1][j],T[i][j+1]);
  const hit=new Array(n).fill(false), extra=[]; let i=0,j=0;
  while(i<n && j<m){ if(a[i]===b[j]){ hit[i]=true; i++; j++; } else if(T[i+1][j]>=T[i][j+1]) i++; else { extra.push(b[j]); j++; } }
  while(j<m) extra.push(b[j++]);
  return {hit, extra, right:hit.filter(Boolean).length, total:n}; }
function sndDict(){
  if(!snd.q || snd.q.kind!=="dict"){ const pool=dictPool(); if(!pool.length){ $("#sroom").innerHTML=`<div class="panel"><p>No sentences at this level yet.</p></div>`; return; }
    let s; do{ s=pool[rnd0(pool.length)]; } while(pool.length>1 && s===snd.lastDict); snd.lastDict=s;
    snd.q={kind:"dict", s, plays:0, typed:""}; snd.done=false; }
  const q=snd.q, words=dictTok(q.s).length;
  $("#sroom").innerHTML=`<div class="panel" id="sPanel">
    ${sndHud()}
    <p class="counter" style="margin:0">Listen and type what you hear. ${words} words. Play it as many times as you need.</p>
    <div class="row" style="margin:10px 0 14px"><button class="btn" type="button" id="dPlay">${ico("sound")} Play</button><button class="btn ghost" type="button" id="dSlow">Slower</button>
      <button class="btn ghost" type="button" id="dHint">Hint</button><span class="counter" id="dPlays" style="align-self:center">${q.plays?`Played ${q.plays}×`:""}</span></div>
    <label class="sr" for="dIn">What you heard</label>
    <textarea id="dIn" class="tin" rows="2" style="width:100%;max-width:none;font-size:1.1rem" placeholder="Type the sentence here…" spellcheck="false" autocapitalize="sentences" ${snd.done?"readonly":""}>${esc(q.typed)}</textarea>
    <div id="dHintOut"></div>
    <div class="row"><button class="btn" type="button" id="dChk" ${snd.done?"disabled":""}>Check</button></div>
    <div id="sFb"></div>
    <p class="sndtip">Spelling counts, but capital letters and punctuation don't. Contractions count as written: I'm and I am are different.</p></div>`;
  const inp=$("#dIn"), play=r=>{ q.plays++; $("#dPlays").textContent=`Played ${q.plays}×`; sayEn(q.s,r); };
  $("#dPlay").onclick=()=>play(0.85); $("#dSlow").onclick=()=>play(0.55);
  $("#dHint").onclick=()=>{ $("#dHintOut").innerHTML=`<p class="hintline">${q.s.split(/\s+/).map(w=>esc(w.replace(/^([^A-Za-z0-9]*[A-Za-z0-9])[A-Za-z0-9'’-]*/,(m,a)=>a+"…"))).join(" ")}</p>`; q.hint=true; };
  inp.addEventListener("input",()=>{ q.typed=inp.value; });
  inp.addEventListener("keydown",e=>{ if(e.key==="Enter" && !e.shiftKey){ e.preventDefault(); $("#dChk").click(); } });
  $("#dChk").onclick=()=>{ if(snd.done) return; if(!inp.value.trim()){ inp.focus(); return; }
    const d=dictDiff(q.s, inp.value), pct=Math.round(d.right/d.total*100), ok=d.right===d.total && !d.extra.length;
    snd.done=true; sndScore(ok,$("#dChk")); inp.readOnly=true; $("#dChk").disabled=true;
    let k=0; const marked=q.s.split(/\s+/).map(w=>{ if(!dictTok(w).length) return esc(w); const h=d.hit[k++]; return `<span class="${h?"dok":"dmiss"}">${esc(w)}</span>`; }).join(" ");
    $("#sFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}"><b>${ok?"Perfect!":`${d.right} of ${d.total} words right (${pct}%).`}</b>
        <p class="dictline">${marked}</p>${d.extra.length?`<p class="hintline" style="margin:4px 0 0">Not in the sentence: ${d.extra.map(x=>`<s>${esc(x)}</s>`).join(" ")}</p>`:""}</div>
      <div class="row"><button class="btn ghost" type="button" id="dAgain">${ico("sound")} Hear it again</button><button class="btn" type="button" id="sNext">Next sentence</button></div>`;
    $("#dAgain").onclick=()=>sayEn(q.s,0.85);
    $("#sNext").onclick=()=>{ snd.q=null; snd.done=false; sndDict(); setTimeout(()=>{ const p=$("#dPlay"); if(p) p.click(); },150); };
    $("#sNext").focus({preventScroll:true}); };
  if(!snd.done) inp.focus({preventScroll:true});
}
function sndHear(){
  const cats=sndCats(); if(snd.cat!=="all" && !cats.some(c=>c.id===snd.cat)) snd.cat="all";
  if(!snd.q){ const pool=(snd.cat==="all"?cats:cats.filter(c=>c.id===snd.cat)).flatMap(c=>c.pairs.map(p=>({c,p})));
    const it=pool[rnd0(pool.length)]; const words=shuffle(it.p.slice()); snd.q={c:it.c, words, target:words[rnd0(words.length)]}; snd.done=false; snd.auto=true; }
  const q=snd.q;
  $("#sroom").innerHTML=`<div class="panel" id="sPanel">
    <div class="sndcats" role="group" aria-label="Sound groups"><button class="chipbtn" type="button" data-sc="all" aria-pressed="${snd.cat==="all"}">Mixed</button>${cats.map(c=>`<button class="chipbtn" type="button" data-sc="${c.id}" aria-pressed="${snd.cat===c.id}">${esc(c.t)}</button>`).join("")}</div>
    ${sndHud()}
    <p class="counter" style="margin:0">Listen. Which word do you hear?</p>
    <div class="row" style="margin:10px 0 14px"><button class="btn sage" type="button" id="sPlay">${ico("sound")} Play</button><button class="btn ghost" type="button" id="sSlow">Slower</button></div>
    <div class="bigopts">${q.words.map(w=>`<button class="opt sndword" type="button" data-w="${esc(w)}">${esc(w)}</button>`).join("")}</div>
    <div id="sFb"></div>
    <p class="sndtip"><b>${esc(q.c.t)}.</b> ${esc(q.c.tip)}</p>
    <p class="artnote" style="margin:0">${sndNote(q.c)}</p></div>`;
  $$("[data-sc]").forEach(b=>b.onclick=()=>{ snd.cat=b.dataset.sc; snd.q=null; saveSnd(); sndHear(); });
  $("#sPlay").onclick=()=>sayEn(q.target); $("#sSlow").onclick=()=>sayEn(q.target,0.6);
  if(snd.auto && snd.played){ setTimeout(()=>sayEn(q.target),150); } snd.auto=false;
  $$("#sPanel .sndword").forEach(b=>b.onclick=()=>{
    if(snd.done) return; snd.done=true; snd.played=true; const ok=b.dataset.w===q.target; sndScore(ok,b);
    $$("#sPanel .sndword").forEach(x=>{ x.disabled=true; if(x.dataset.w===q.target) x.classList.add("right"); }); if(!ok) b.classList.add("wrong");
    $("#sFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Right, ":"Not quite. It was "}<b>${esc(q.target)}</b>. Listen to the difference.</div>
      <div class="row"><button class="btn ghost" type="button" id="sBoth">${ico("sound")} Hear ${esc(q.words.join(" · "))}</button><button class="btn" type="button" id="sNext">Next</button></div>`;
    $("#sBoth").onclick=()=>sayEn(q.words.join(". "),0.7);
    $("#sNext").onclick=()=>{ snd.q=null; sndHear(); }; $("#sNext").focus({preventScroll:true});
  });
}
function rnd0(n){ return Math.floor(Math.random()*n); }
function sndStress(){
  if(!snd.q){ snd.q=sndNext("stress",SND_STRESS); snd.done=false; }
  const q=snd.q, word=q.syl.join("");
  $("#sroom").innerHTML=`<div class="panel" id="sPanel">${sndHud()}
    <p class="counter" style="margin:0">Listen, then tap the syllable with the strongest beat.</p>
    <div class="row" style="margin:10px 0 14px"><button class="btn sage" type="button" id="sPlay">${ico("sound")} Hear “${esc(word)}”</button></div>
    <div class="sylrow">${q.syl.map((s,i)=>`<button class="opt sylbtn" type="button" data-i="${i}">${esc(s)}</button>`).join("")}</div>
    <div id="sFb"></div>
    <p class="artnote" style="margin-top:14px">${(()=>{ const lg=typeof helpLang==="function"?helpLang():""; return lg==="pl"?`<span class="l1flag">PL</span>Po polsku akcent pada prawie zawsze na przedostatnią sylabę. Po angielsku nie ma jednej zasady: comFORtable to błąd, poprawnie COMfortable.`:lg==="ro"?`<span class="l1flag">RO</span>Accentul în engleză nu urmează româna: comfortabil → COMfortable, nu comFORtable. Învață accentul odată cu cuvântul.`:"Polish stress almost always falls on the second-last syllable, so Polish speakers often say comFORtable or vegeTAble. Learn the stress with every new word."; })()}</p></div>`;
  $("#sPlay").onclick=()=>sayEn(word,0.75);
  $$("#sPanel .sylbtn").forEach(b=>b.onclick=()=>{
    if(snd.done) return; snd.done=true; const ok=+b.dataset.i===q.st; sndScore(ok,b);
    $$("#sPanel .sylbtn").forEach(x=>{ x.disabled=true; if(+x.dataset.i===q.st) x.classList.add("right"); }); if(!ok) b.classList.add("wrong");
    const shown=q.syl.map((s,i)=>i===q.st?`<b>${esc(s.toUpperCase())}</b>`:esc(s)).join("·");
    $("#sFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Right: ":"Not quite: "}<span class="stressword">${shown}</span></div>
      <div class="row"><button class="btn ghost" type="button" id="sAgain">${ico("sound")} Hear it again</button><button class="btn" type="button" id="sNext">Next word</button></div>`;
    $("#sAgain").onclick=()=>sayEn(word,0.75); $("#sNext").onclick=()=>{ snd.q=null; sndStress(); }; $("#sNext").focus({preventScroll:true});
  });
}
function sndWeak(){
  if(!snd.q){ snd.q=sndNext("weak",SND_WEAK); snd.done=false; snd.sel=new Set(); }
  const q=snd.q, text=q.toks.join(" ");
  $("#sroom").innerHTML=`<div class="panel" id="sPanel">${sndHud()}
    <p class="counter" style="margin:0">English shrinks small words like to, of, a and the. Listen, then tap every word that is said weakly.</p>
    <div class="row" style="margin:10px 0 14px"><button class="btn sage" type="button" id="sPlay">${ico("sound")} Natural speed</button><button class="btn ghost" type="button" id="sSlow">Slower</button></div>
    <div class="weakrow">${q.toks.map((t,i)=>`<button class="weaktok${snd.sel.has(i)?" on":""}" type="button" data-i="${i}" aria-pressed="${snd.sel.has(i)}">${esc(t)}</button>`).join("")}</div>
    <div class="row" style="margin-top:12px"><button class="btn" type="button" id="sChk">Check</button></div>
    <div id="sFb"></div>
    <p class="artnote" style="margin-top:14px">${(()=>{ const lg=typeof helpLang==="function"?helpLang():""; return lg==="pl"?`<span class="l1flag">PL</span>Po polsku każdą sylabę wymawiamy wyraźnie. Po angielsku małe słowa się „kurczą”, a mocne są tylko słowa z treścią. Bez tego angielski brzmi ciężko i za wolno.`:lg==="ro"?`<span class="l1flag">RO</span>În română fiecare silabă e pronunțată clar. În engleză cuvintele mici se „micșorează”, iar accentul cade pe cuvintele importante.`:"Polish and Romanian give every syllable equal weight. English squeezes the small words so the important ones stand out."; })()}</p></div>`;
  $("#sPlay").onclick=()=>sayEn(text,1); $("#sSlow").onclick=()=>sayEn(text,0.7);
  $$("#sPanel .weaktok").forEach(b=>b.onclick=()=>{ if(snd.done) return; const i=+b.dataset.i; snd.sel.has(i)?snd.sel.delete(i):snd.sel.add(i); b.classList.toggle("on"); b.setAttribute("aria-pressed",snd.sel.has(i)); });
  $("#sChk").onclick=()=>{
    if(snd.done) return; snd.done=true; const W2=new Set(q.weak), O2=new Set(q.opt); const picked=[...snd.sel].filter(i=>!O2.has(i)); const ok=q.weak.every(i=>snd.sel.has(i)) && picked.every(i=>W2.has(i)); sndScore(ok,$("#sChk"));
    $$("#sPanel .weaktok").forEach(b=>{ const i=+b.dataset.i; b.disabled=true; if(W2.has(i)) b.classList.add(snd.sel.has(i)?"good":"miss"); else if(O2.has(i)) b.classList.add("optw"); else if(snd.sel.has(i)) b.classList.add("bad"); });
    $("#sChk").hidden=true;
    $("#sFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Spot on. ":"Not quite. The weak words are underlined. "}${esc(q.why)}${q.opt.length?" Words in grey can be weak or strong, so they don't count.":""}</div>
      <div class="row"><button class="btn ghost" type="button" id="sAgain">${ico("sound")} Hear it again</button><button class="btn" type="button" id="sNext">Next sentence</button></div>`;
    $("#sAgain").onclick=()=>sayEn(text,1); $("#sNext").onclick=()=>{ snd.q=null; sndWeak(); }; $("#sNext").focus({preventScroll:true});
  };
}
function sndSay(){
  if(!snd.q){ const cats=sndCats(); const c=cats[rnd0(cats.length)]; const p=c.pairs[rnd0(c.pairs.length)]; snd.q={c, word:p[rnd0(p.length)], other:p}; snd.done=false; snd.heard=""; }
  const q=snd.q;
  const live = !srBlocked;
  $("#sroom").innerHTML=`<div class="panel" id="sPanel">${sndHud()}
    <p class="counter" style="margin:0">${live?"Listen, then press Record and say the word clearly.":"Listen, say the word aloud three times, then compare."}</p>
    <p class="gamebig" style="margin:10px 0">${esc(q.word)}</p>
    <div class="row" style="margin:0 0 12px"><button class="btn ghost" type="button" id="sPlay">${ico("sound")} Listen</button>${live?`<button class="btn sage" type="button" id="sRec">● Record</button>`:""}</div>
    <div id="sFb">${live?"":`<div class="row"><button class="btn" type="button" id="sOk">I said it right</button><button class="btn ghost" type="button" id="sNo">I need more practice</button></div>`}</div>
    <p class="sndtip"><b>${esc(q.c.t)}.</b> ${esc(q.c.tip)}</p>
    <p class="artnote" style="margin:0">${live?"Your browser checks what it heard. In Chrome, the recording is sent to Google to be recognised and isn't kept here.":"Speech checking needs Chrome or Edge on the Psotek website. Here, be your own judge."}</p></div>`;
  $("#sPlay").onclick=()=>sayEn(q.word,0.8);
  const nextBtn=()=>`<button class="btn" type="button" id="sNext">Next word</button>`;
  const wireNext=()=>{ $("#sNext").onclick=()=>{ snd.q=null; sndSay(); }; };
  if(!live){
    $("#sOk").onclick=()=>{ if(snd.done) return; snd.done=true; sndScore(true,$("#sOk")); $("#sFb").innerHTML=`<div class="feedback ok">Great. Try the word in a sentence too.</div><div class="row">${nextBtn()}</div>`; wireNext(); };
    $("#sNo").onclick=()=>{ if(snd.done) return; snd.done=true; snd.seen++; snd.streak=0; $("#sFb").innerHTML=`<div class="feedback no">Listen again slowly and copy the mouth position in the tip.</div><div class="row"><button class="btn ghost" type="button" id="sSlow">${ico("sound")} Slow</button>${nextBtn()}</div>`; $("#sSlow").onclick=()=>sayEn(q.word,0.55); wireNext(); };
    return;
  }
  $("#sRec").onclick=()=>{
    if(srBusy) return; let rec; try{ rec=new SR(); }catch(e){ srBlocked=true; return sndSay(); }
    rec.lang="en-GB"; rec.maxAlternatives=5; rec.interimResults=false; srBusy=true; const btn=$("#sRec"); btn.textContent="Listening…"; btn.disabled=true;
    rec.onresult=e=>{ const alts=[...e.results[0]].map(a=>a.transcript.toLowerCase().replace(/[.,!?]/g,"").trim()); const target=q.word.toLowerCase();
      const ok=alts.some(a=>a===target||a.split(/\s+/).includes(target)); const heard=alts[0]||"";
      if(!snd.done){ snd.done=true; sndScore(ok,btn); }
      const conf=q.other.filter(w=>w.toLowerCase()!==target).find(w=>alts.some(a=>a.split(/\s+/).includes(w.toLowerCase())));
      $("#sFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?`Clear! I heard “${esc(heard)}”.`:conf?`That sounded like <b>${esc(conf)}</b>. Check the tip below and try again.`:`I heard “${esc(heard||"nothing")}”. Try again a little slower.`}</div><div class="row"><button class="btn ghost" type="button" id="sRe">Try again</button>${nextBtn()}</div>`;
      $("#sRe").onclick=()=>{ snd.done=false; sndSay(); }; wireNext(); };
    rec.onerror=e=>{ srBusy=false; if(e.error==="not-allowed"||e.error==="service-not-allowed"||e.error==="audio-capture"){ srBlocked=true; sndSay(); return; }
      $("#sFb").innerHTML=`<div class="feedback no">I didn't catch that. Press Record and speak a bit louder.</div>`; btn.textContent="● Record"; btn.disabled=false; };
    rec.onend=()=>{ srBusy=false; const b=$("#sRec"); if(b){ b.textContent="● Record"; b.disabled=false; } };
    try{ rec.start(); }catch(e){ srBusy=false; srBlocked=true; sndSay(); }
  };
}
function isoWeekOf(d){ const t=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())); const day=t.getUTCDay()||7; t.setUTCDate(t.getUTCDate()+4-day); const y=new Date(Date.UTC(t.getUTCFullYear(),0,1)); return Math.ceil(((t-y)/864e5+1)/7); }
function setWeeks(s){ try{ const a=new Date(s.start+"T12:00"), b=new Date(s.end+"T12:00"); const wa=isoWeekOf(a), wb=isoWeekOf(b);
  const f=d=>d.toLocaleDateString("en-GB",{day:"numeric",month:"short"}); return `Weeks ${wa}–${wb} · ${f(a)} – ${f(b)} ${b.getFullYear()}`; }catch(e){ return ""; } }
function prevChip(id,word,lv){ const s=state.stats[id], a=s&&s.a?Math.round(s.c/s.a*100):null;
  const cls = a===null ? "" : a>=80 ? " good" : a>=50 ? " mid" : " low";
  return `<span class="pchip${cls}" title="${a===null?"Practised":a+"% right"}">${esc(word)}${lv!=null&&lv!==state.vlv?`<i class="plv">${LV[lv]}</i>`:""}${a===null?"":`<small>${a}%</small>`}</span>`; }
function prevMineHTML(){
  const nowIds=new Set(VSET.archived?[]:[0,1,2,3,4,5].flatMap(L=>dayIds(L,dayNum())));
  const rows=Object.entries(prevW).filter(([id])=>!nowIds.has(id));
  if(!rows.length) return `<section class="panel prevmine"><h2 class="h3">Your previous words</h2><p class="hintline" style="margin:0">Words you practise will collect here when a new batch arrives.</p></section>`;
  const groups={}; rows.forEach(([id,e])=>{ const g=(e.set||"")+"|"+String(1000+(e.k??-1)).padStart(5,"0")+"|"+e.p; (groups[g]=groups[g]||[]).push([id,e]); });
  const keys=Object.keys(groups).sort().reverse();
  return `<section class="panel prevmine"><div class="prevtop"><div><h2 class="h3" style="margin:0">Your previous words</h2>
      <p class="hintline" style="margin:4px 0 0">${rows.length} ${rows.length===1?"word":"words"} you've practised. The % shows how often you got it right.</p></div>
      <button class="btn" type="button" data-go="practise">Practise them</button></div>
    ${keys.map(g=>{ const list=groups[g].sort((a,b)=>a[1].lv-b[1].lv||a[1].word.localeCompare(b[1].word)); const e=list[0][1];
      return `<div class="prevgrp"><b>${esc(e.p)}</b>${e.set!==VSET.set?`<small>${esc(e.month||"")}</small>`:""}
        <div class="pchips">${list.map(([id,x])=>prevChip(id,x.word,x.lv)).join("")}</div></div>`; }).join("")}
  </section>`; }
function prevBatchesHTML(){ if(VSET.archived) return ""; const L=state.vlv, list=batchList().slice(0,-1).reverse(); if(!list.length) return "";
  return `<details class="panel archset prevbatches"><summary><span><b class="archname">Every batch so far in ${esc(VSET.label)}</b><small>${list.length} ${list.length===1?"batch":"batches"} at ${LV[L]} · ✓ = you've practised it</small></span></summary>
    <div class="archbody">${list.map(b=>`<div class="archlv"><b>${esc(batchLabel(b))}</b><span>${dayIds(L,b.i).map(id=>W[id]?`${esc(W[id].word)}${practisedId(id)?" ✓":""}`:"").filter(Boolean).join(" · ")}</span></div>`).join("")}</div></details>`; }
async function viewArchive(){
  prevSync();
  $("#view").innerHTML = `<header class="pagehead"><p class="eyebrow">Vocabulary</p><h1>Previous vocabulary</h1>
    <p class="lede">New words arrive every 48 hours. When they change, the old ones move here straight away, and they keep coming back in your practice rounds and reviews.</p></header>
    ${VSET.archived?setNote():""}${prevMineHTML()}${prevBatchesHTML()}
    <h2 class="h3 prevh">Previous months</h2><div id="archList"><p class="hintline">Loading…</p></div>`;
  const sets = await loadArchiveIndex(); if(route!=="archive") return;
  const el=$("#archList"); if(!el) return;
  const now=VCURRENT.meta||VSET_INLINE;
  if(!sets.length){ el.innerHTML=`<div class="panel archempty"><h2 class="h3">No previous sets yet</h2><p>This month's words are <b>${esc(now.label)}</b>. On the last day of the month at 11 pm they move here, sorted by month and week, and a brand-new set starts the next morning.</p><button class="btn" type="button" data-go="words">Practise this month's words</button></div>`; return; }
  el.innerHTML = sets.map(s=>{ const active=VSET.archived && VSET.set===s.set;
    const lv=(s.levels||[]).map((x,i)=>`<div class="archlv"><b>${LV[i]}</b><span><i class="tag reg-f">Formal</i> ${esc((x.formal||[]).join(", "))}</span><span><i class="tag reg-i">Informal</i> ${esc((x.informal||[]).join(", "))}</span></div>`).join("");
    return `<details class="panel archset" ${active?"open":""}><summary><span><b class="archname">${esc(s.label)}</b><small>${esc(setWeeks(s))} · ${s.count||""} words</small></span>${active?'<span class="tag">Practising now</span>':""}</summary>
      <div class="archbody">${lv}<div class="row" style="margin-top:12px">${active?`<button class="btn ghost" type="button" data-setnow>Back to this month's words</button>`:`<button class="btn" type="button" data-arch="${esc(s.set)}">Practise these words</button>`}</div></div></details>`; }).join("");
  $$("[data-arch]").forEach(b=>b.onclick=async()=>{ b.disabled=true; b.textContent="Loading…"; const ok=await useArchivedSet(b.dataset.arch); if(ok) go("words"); else { b.disabled=false; b.textContent="Couldn't load. Try again"; } });
}
const GAMES = [
  {id:"grove", title:"Word Grove", file:"word-grove.html", tall:true, sub:"Word search · Tile Rush · Crossplay", blurb:"Three word games: find hidden words from A1 to C2, swipe tiles against the clock, or build a crossword against Moss, the computer."},
  {id:"racer", title:"Vacuum Racer", file:"vacuum-racer.html", sub:"3D racing", blurb:"Pick Dave, Rosie or Dasz, race to the finish and suck up every ball on the way. Click the game first so the keys work."}];
let gamePick = (()=>{ try{ return localStorage.getItem("ee-game")||"grove"; }catch(e){ return "grove"; } })();
let gameSrc = {}, breakStart = 0, breakTimer = 0;
function viewGame(){
  const g = GAMES.find(x=>x.id===gamePick) || GAMES[0];
  $("#view").innerHTML = `
  <header class="pagehead">
    <p class="eyebrow">Coffee break</p>
    <h1>Game</h1>
    <p class="lede">Pick a game for a short break. Time spent here doesn't count as practice time.</p>
  </header>
  ${psoOn()?`<div class="psoend" aria-hidden="true">${psotek("race")}<p class="psobub">Gaz do dechy! Ten minutes, then back to English.</p></div>`:""}
  <div class="gamepicks" role="group" aria-label="Choose a game">${GAMES.map(x=>`<button type="button" class="gamepick" data-game="${x.id}" aria-pressed="${x.id===g.id}"><b>${esc(x.title)}</b><small>${esc(x.sub)}</small></button>`).join("")}</div>
  <p class="gameblurb">${esc(g.blurb)}</p>
  <div class="gamebar">
    <span class="breakpill">${ico("game")}<span id="brk">Break 0:00</span></span>
    <span class="grow"></span>
    <button class="btn ghost" type="button" id="gFull" hidden>Full screen</button>
    <button class="btn ghost" type="button" data-go="today">Back to practice</button>
  </div>
  <div class="gamewrap${g.tall?" tall":""}" id="gWrap"><div class="gmsg" id="gMsg">Loading the game…</div></div>
  <div id="brkNote"></div>`;
  breakStart = Date.now(); clearInterval(breakTimer);
  breakTimer = setInterval(()=>{ const el=$("#brk"); if(route!=="game"||!el){ clearInterval(breakTimer); return; }
    const sec=Math.floor((Date.now()-breakStart)/1000); el.textContent=`Break ${Math.floor(sec/60)}:${String(sec%60).padStart(2,"0")}`;
    if(sec===600){ $("#brkNote").innerHTML=`<div class="breaknote"><span>That's a ten-minute break. Ready to get back to English?</span><button class="btn" type="button" data-go="today">Back to Today</button></div>`; } },1000);
  $$(".gamepick").forEach(b=>b.onclick=()=>{ if(b.dataset.game===gamePick) return; gamePick=b.dataset.game; try{ localStorage.setItem("ee-game",gamePick); }catch(e){} viewGame(); });
  const wrap=$("#gWrap"), fb=$("#gFull");
  try{ if(document.fullscreenEnabled && wrap.requestFullscreen){ fb.hidden=false; fb.onclick=()=>{ try{ wrap.requestFullscreen().catch(()=>{}); }catch(e){} }; } }catch(e){}
  const mount = html => { if(route!=="game"||!$("#gWrap")) return; const f=document.createElement("iframe"); f.title=g.title; f.setAttribute("allow","fullscreen; autoplay"); f.srcdoc=html; wrap.innerHTML=""; wrap.appendChild(f); f.addEventListener("load",()=>{ try{ f.contentWindow.focus(); }catch(e){} }); };
  if(gameSrc[g.id]) mount(gameSrc[g.id]);
  else fetch(g.file,{cache:"no-cache"}).then(r=>{ if(!r.ok) throw 0; return r.text(); }).then(t=>{ gameSrc[g.id]=t; mount(t); })
    .catch(()=>{ const m=$("#gMsg"); if(m) m.textContent="The game couldn't load just now. Check your connection and open this page again."; });
}
const USE = {
  "use:conv":{t:"Conversations", d:"Role-play real situations: a café, a hotel, a job interview. Choose the best reply each time.", min:4},
  "use:write":{t:"Writing studio", d:"Emails, essays and articles with a plan, useful phrases, a model answer and checks.", min:20},
  "use:ask":{t:"Answer questions", d:"Real questions you can only answer well with the word. Three for every word.", min:5},
  "use:upgrade":{t:"Change the style", d:"Rewrite a sentence so it uses the word, making it more formal or more informal.", min:3},
  "use:studio":{t:"Sentence studio", d:"Choose a word and a tense, write a sentence and get it checked.", min:5},
  "use:story":{t:"Story builder", d:"Write a short paragraph that uses three words together.", min:8},
  "use:speak":{t:"Speak for a minute", d:"Talk about a question for one minute. Aim to say the word twice.", min:2}
};
function viewUse(){
  const total=WORDS.reduce((s,w)=>s+Math.min(USE_GOAL,state.uses[w.id]),0);
  $("#view").innerHTML = `
  <header class="pagehead"><h1>Use it</h1>
    <p class="lede">Recognising a word is the first step. Writing and saying it yourself is what makes it yours. Aim to use each word ${USE_GOAL} times.</p></header>
  <section class="panel usage">
    <div class="usagehead"><h2>Your sentences so far</h2><span class="counter">${total} of ${WORDS.length*USE_GOAL}</span></div>
    <div class="bar"><i style="width:${total/(WORDS.length*USE_GOAL)*100}%"></i></div>
    <div class="usechips">${WORDS.map(w=>`<button class="uchip ${state.uses[w.id]>=USE_GOAL?"full":""}" type="button" data-uw="${w.id}"><span>${esc(w.word)}</span><b>${Math.min(state.uses[w.id],99)}</b></button>`).join("")}</div>
    <p class="hintline">Tap a word to write with it.</p>
  </section>
  <div class="cards">${Object.entries(USE).map(([k,u])=>`<button class="card" type="button" data-go="${k}"><h3>${u.t}</h3><p>${u.d}</p><span class="meta2"><span>About ${u.min} min</span></span></button>`).join("")}</div>`;
  $$("[data-uw]").forEach(b=>b.onclick=()=>{ studio.w=b.dataset.uw; studio.p=0; state.cur=b.dataset.uw; go("use:studio"); });
}
function checkUse(text, w, tense, ul){ const ok=runChecks(text, w, tense, ul); if(ok){ addUse(w.id); burst(ul,6); } return ok; }
function newAsk(){ let qs=WORDS.flatMap(w=>[w.prompt,...w.qs].map(q=>({w:w.id,q})));
  qs=shuffle(qs); if(askFocus){ const f=qs.filter(x=>x.w===askFocus); qs=[...f,...qs.filter(x=>x.w!==askFocus)]; }
  askState={qs,i:0}; askFocus=null; }
function viewAsk(){
  if(!askState) newAsk();
  const it=askState.qs[askState.i % askState.qs.length]; const w=W[it.w];
  $("#view").innerHTML = `
  ${backBtn("use","Use it")}
  <header class="pagehead tight"><h1>Answer questions</h1><p class="lede">Answer in one or two full sentences and use the word in the box.</p></header>
  <div class="panel">
    <div class="qtop"><span>Question ${askState.i+1}</span><span class="usew">Use: <b>${esc(w.word)}</b> · used ${state.uses[w.id]}×</span></div>
    <p class="qtext">${esc(it.q)}</p>
    <details class="partners"><summary>Words that go with “${esc(w.word)}”</summary><ul>${w.coll.map(c=>`<li>${esc(c)}</li>`).join("")}</ul></details>
    <label class="sr" for="aIn">Your answer</label>
    <textarea id="aIn" placeholder="Write your answer…"></textarea>
    <div class="row">
      <button class="btn" type="button" id="aChk">Check my answer</button>
      ${aiBtn("aAI")}
      <button class="btn ghost" type="button" id="aNext">Next question →</button>
    </div>
    <ul class="checks" id="aChecks" hidden></ul>
    <div class="ai" id="aOut" hidden></div>
    ${it.q===w.prompt?`<button class="linkbtn" type="button" id="aModel">See an example answer</button><p class="model" id="aModelT" hidden>${esc(w.model)}</p>`:""}
  </div>`;
  $("#aChk").onclick=()=>{ if(checkUse($("#aIn").value, w, null, $("#aChecks")) && askPlan){ planDone("u"); askPlan=false; const pn=planNextHTML(); if(pn){ $("#aChecks").insertAdjacentHTML("afterend",`<div id="aPlan">${pn}</div>`); $("#aPlan").scrollIntoView({behavior:"smooth",block:"nearest"}); if(!planSteps().some(s=>!isPlanDone(s.k))) burst($("#aPlan"),12); } } };
  $("#aAI").onclick=()=>{ const v=$("#aIn").value.trim(); if(!v){ $("#aIn").focus(); return; } checkUse(v,w,null,$("#aChecks")); aiFeedback(w.word, v, null, $("#aOut"), $("#aAI")); };
  $("#aNext").onclick=()=>{ askState.i++; viewAsk(); };
  const m=$("#aModel"); if(m) m.onclick=()=>{ $("#aModelT").hidden=!$("#aModelT").hidden; };
}
function viewStudio(){
  if(!studio.w) studio.w=state.cur; const w=W[studio.w]; const prompts=[w.prompt,...w.qs]; const T=TENSES.find(x=>x.name===studio.tense);
  $("#view").innerHTML = `
  ${backBtn("use","Use it")}
  <header class="pagehead tight"><h1>Sentence studio</h1><p class="lede">Pick a word, pick a tense if you want a challenge, then write.</p></header>
  <div class="panel">
    <div class="ctl"><h2 class="mini">Word</h2><div class="picks">${WORDS.map(x=>`<button class="pick" type="button" data-sw="${x.id}" aria-pressed="${x.id===studio.w}">${esc(x.word)}</button>`).join("")}</div></div>
    <div class="ctl"><h2 class="mini">Tense</h2><div class="picks"><button class="pick" type="button" data-st="" aria-pressed="${!studio.tense}">Any tense</button>${TENSES.map(t=>`<button class="pick" type="button" data-st="${esc(t.name)}" aria-pressed="${t.name===studio.tense}">${esc(t.name)}</button>`).join("")}</div></div>
    <div class="prompt"><p class="qtext" style="margin:0">${esc(prompts[studio.p%prompts.length])}</p>
      ${T?`<p class="hintline">Write it in the <b>${esc(T.name.toLowerCase())}</b>: ${esc(T.form)}</p>`:""}
      <button class="linkbtn" type="button" id="sP">Give me a different question</button></div>
    <label class="sr" for="sIn">Your sentence</label>
    <textarea id="sIn" placeholder="Write one full sentence with ${esc(w.word)}…"></textarea>
    <div class="row">
      <button class="btn" type="button" id="sChk">Check my sentence</button>
      ${aiBtn("sAI")}
      <button class="linkbtn" type="button" id="sModel">See an example answer</button>
    </div>
    <ul class="checks" id="sChecks" hidden></ul>
    <div class="ai" id="sOut" hidden></div>
    <p class="model" id="sModelT" hidden>${esc(w.model)}</p>
  </div>`;
  $$("[data-sw]").forEach(b=>b.onclick=()=>{ studio.w=b.dataset.sw; studio.p=0; state.cur=studio.w; save(); viewStudio(); });
  $$("[data-st]").forEach(b=>b.onclick=()=>{ studio.tense=b.dataset.st; viewStudio(); });
  $("#sP").onclick=()=>{ studio.p++; viewStudio(); };
  $("#sChk").onclick=()=>checkUse($("#sIn").value, w, studio.tense||null, $("#sChecks"));
  $("#sAI").onclick=()=>{ const v=$("#sIn").value.trim(); if(!v){ $("#sIn").focus(); return; } checkUse(v,w,studio.tense||null,$("#sChecks")); aiFeedback(w.word, v, studio.tense||null, $("#sOut"), $("#sAI")); };
  $("#sModel").onclick=()=>{ $("#sModelT").hidden=!$("#sModelT").hidden; };
}
function viewUpgrade(){
  const ids=new Set(WORDS.map(w=>w.id));
  const UL=[...UPGRADE.filter(u=>ids.has(u.w)), ...WORDS.filter(w=>w.up).map(w=>({w:w.id,plain:w.up.plain,model:w.up.model,style:true}))];
  if(!up.order || up.order.length!==UL.length) up.order=shuffle(UL.map((_,i)=>i));
  const it=UL[up.order[up.i%up.order.length]]; const w=W[it.w];
  $("#view").innerHTML = `
  ${backBtn("use","Use it")}
  <header class="pagehead tight"><h1>Change the style</h1><p class="lede">Say the same thing, but use the word in the box. Keep the meaning, and match the style: formal or informal.</p></header>
  <div class="panel">
    <div class="qtop"><span>Sentence ${up.i+1}${it.style?` · <span class="tag ${w.reg==="formal"?"reg-f":"reg-i"}">Make it ${w.reg}</span>`:""}</span><span class="usew">Use: <b>${esc(w.word)}</b></span></div>
    <p class="qtext plainline">${esc(it.plain)}</p>
    <label class="sr" for="uIn">Your new sentence</label>
    <textarea id="uIn" placeholder="Rewrite it with ${esc(w.word)}…"></textarea>
    <div class="row"><button class="btn" type="button" id="uChk">Check</button><button class="btn ghost" type="button" id="uNext">Next sentence →</button></div>
    <ul class="checks" id="uChecks" hidden></ul>
    <p class="model" id="uModel" hidden>One good version: ${esc(it.model)}</p>
  </div>`;
  $("#uChk").onclick=()=>{ const t=$("#uIn").value.trim(); const ul=$("#uChecks");
    const items=[{ok:w.stem.test(t),txt:`Uses “${w.word}” or a form of it`},{ok:norm(t)!==norm(it.plain),txt:"Changes the original sentence"},{ok:/^[A-Z"'“]/.test(t),txt:"Starts with a capital letter"},{ok:/[.!?]["'”]?$/.test(t),txt:"Ends with . ! or ?"}];
    (PITFALLS[w.id]||[]).forEach(p=>{ if(p.re.test(t)) items.push({ok:false,warn:true,txt:p.msg}); });
    ul.hidden=false; ul.innerHTML=items.map(i=>`<li class="${i.warn?'warn':i.ok?'pass':'fail'}">${esc(i.txt)}</li>`).join("");
    const ok=items.every(i=>i.ok); if(t){ record(w.id, ok); if(ok){ addUse(w.id); burst(ul,6); } } $("#uModel").hidden=false; };
  $("#uNext").onclick=()=>{ up.i++; viewUpgrade(); };
}
function newStory(){ story={ws:shuffle(WORDS.map(w=>w.id)).slice(0,3), text:""}; }
function viewStory(){
  if(!story) newStory();
  $("#view").innerHTML = `
  ${backBtn("use","Use it")}
  <header class="pagehead tight"><h1>Story builder</h1><p class="lede">Write a short story or message, at least three sentences, that uses all three words. The list ticks itself as you write.</p></header>
  <div class="panel">
    <div class="storyws">${story.ws.map(id=>`<span class="sw" data-sw="${id}">${esc(W[id].word)}</span>`).join("")}<button class="linkbtn" type="button" id="stNew">Different words</button></div>
    <p class="hintline">Idea: a day at work that went wrong, a plan with friends, or a news story.</p>
    <label class="sr" for="stIn">Your story</label>
    <textarea id="stIn" class="tall" placeholder="Start your story…">${esc(story.text)}</textarea>
    <ul class="checks" id="stLive"></ul>
    <div class="row"><button class="btn" type="button" id="stChk">I've finished</button><span class="mark" id="stMark" aria-live="polite"></span></div>
  </div>`;
  const live=()=>{ const t=$("#stIn").value; story.text=t; const sents=t.split(/[.!?]+/).filter(s=>s.trim().split(/\s+/).length>=3).length;
    const items=[...story.ws.map(id=>({ok:W[id].stem.test(t),txt:`Uses “${W[id].word}”`})),{ok:sents>=3,txt:`At least 3 sentences (you have ${sents})`}];
    $("#stLive").innerHTML=items.map(i=>`<li class="${i.ok?'pass':''}">${esc(i.txt)}</li>`).join("");
    $$(".sw").forEach(s=>s.classList.toggle("on", W[s.dataset.sw].stem.test(t))); return items; };
  live(); $("#stIn").addEventListener("input",live);
  $("#stNew").onclick=()=>{ const t=story.text; newStory(); story.text=t; viewStory(); };
  $("#stChk").onclick=()=>{ const items=live(); const t=$("#stIn").value;
    const warns=story.ws.flatMap(id=>(PITFALLS[id]||[]).filter(p=>p.re.test(t)).map(p=>p.msg));
    if(!t.trim()) return;
    story.ws.forEach(id=>{ const ok=W[id].stem.test(t); record(id, ok && !warns.length); if(ok) addUse(id); });
    const all=items.every(i=>i.ok);
    $("#stMark").className="mark "+(all&&!warns.length?"ok":"no");
    $("#stMark").textContent = all&&!warns.length ? "✓ Great story. All three words used." : warns.length ? "! "+warns.join(" ") : "Almost. Check the list above.";
    if(all) burst($("#stMark"),10);
  };
}
function stopSpk(){ if(spk.timer){ clearInterval(spk.timer); spk.timer=null; } }
function viewSpeak(){
  if(!spk.w) spk.w=leastUsed().id; const w=W[spk.w]; const prompts=[w.prompt,...w.qs];
  $("#view").innerHTML = `
  ${backBtn("use","Use it")}
  <header class="pagehead tight"><h1>Speak for a minute</h1><p class="lede">Read the question, press Start, and talk out loud until the timer ends. Try to say the word at least twice.</p></header>
  <div class="panel">
    <div class="qtop"><span class="usew">Say: <b>${esc(w.word)}</b> · ${esc(w.ipa)}</span><button class="iconbtn" type="button" id="kSay">${ico("sound")}<span>Hear it</span></button></div>
    <p class="qtext">${esc(prompts[spk.p%prompts.length])}</p>
    <p class="hintline">Useful partners: ${w.coll.map(esc).join(" · ")}</p>
    <div class="timer big" id="kT"><i style="width:${spk.left/60*100}%"></i></div>
    <p class="clock" id="kLeft">${spk.left}s</p>
    <div class="row">
      <button class="btn" type="button" id="kGo">${spk.timer?"Pause":spk.left<60&&spk.left>0?"Continue":"Start"}</button>
      ${spk.left===0||spk.done?`<button class="btn" type="button" id="kUsed">✓ I said the word</button>`:""}
      <button class="btn ghost" type="button" id="kNew">Another question</button>
      <button class="btn ghost" type="button" id="kWord">Another word</button>
    </div>
    <p class="mark" id="kMark" aria-live="polite"></p>
  </div>`;
  $("#kSay").onclick=()=>speak(w.word+". "+w.ex);
  $("#kGo").onclick=()=>{ if(spk.timer){ stopSpk(); viewSpeak(); return; } if(spk.left===0) spk.left=60;
    spk.timer=setInterval(()=>{ if(route!=="use:speak"){ stopSpk(); return; } spk.left--; const t=$("#kT"); if(t){ t.querySelector("i").style.width=(spk.left/60*100)+"%"; t.classList.toggle("low",spk.left<=10); $("#kLeft").textContent=spk.left+"s"; }
      if(spk.left<=0){ stopSpk(); spk.done=true; viewSpeak(); } },1000); viewSpeak(); };
  const u=$("#kUsed"); if(u) u.onclick=()=>{ addUse(w.id); markDay(); save(); burst(u,10); $("#kMark").className="mark ok"; $("#kMark").textContent=`✓ Counted. You've used “${w.word}” ${state.uses[w.id]} times.`; u.disabled=true; };
  $("#kNew").onclick=()=>{ stopSpk(); spk.p++; spk.left=60; spk.done=false; viewSpeak(); };
  $("#kWord").onclick=()=>{ stopSpk(); const others=WORDS.filter(x=>x.id!==spk.w); spk.w=pick(others).id; spk.p=0; spk.left=60; spk.done=false; viewSpeak(); };
}
function runChecks(text, w, tense, ul){
  const t=text.trim(); const items=[];
  items.push({ok: w.stem.test(t), txt:`Uses “${w.word}” or a form of it`});
  const n = t.split(/\s+/).filter(Boolean).length;
  items.push({ok: n>=6, txt:`At least 6 words (you have ${n})`});
  items.push({ok: /^[A-Z"'“]/.test(t), txt:"Starts with a capital letter"});
  items.push({ok: /[.!?]["'”]?$/.test(t), txt:"Ends with . ! or ?"});
  if(tense){ const T=TENSES.find(x=>x.name===tense); if(T && T.re) items.push({ok:T.re.test(t), txt: T.re.test(t)?`Looks like ${tense.toLowerCase()}`:`Couldn't spot the ${tense.toLowerCase()} form (${T.form})`}); }
  (PITFALLS[w.id]||[]).forEach(p=>{ if(p.re.test(t)) items.push({ok:false,warn:true,txt:p.msg}); });
  ul.hidden=false;
  ul.innerHTML = items.map(i=>`<li class="${i.warn?'warn':i.ok?'pass':'fail'}">${esc(i.txt)}</li>`).join("");
  const allOk = items.every(i=>i.ok);
  if(t) record(w.id, allOk);
  return allOk;
}
const PSO_HEAD_VB="4 -14 192 192";
const tierDots=(b,t)=>b.t.length===1?`<span class="bgtiers" aria-hidden="true"><i class="${t>=0?"g":""}"></i></span>`:`<span class="bgtiers" aria-hidden="true">${b.t.map((x,i)=>`<i class="${i<=t?["b","s","g"][i]:""}"></i>`).join("")}</span>`;
function bgDesc(b,t){
  if(b.secret) return t>=0 ? "You found Psotek's secret." : "A secret. Psotek won't tell.";
  const nx=b.t[t+1]; return nx!=null ? `${TIERS[tierIdx(b,t+1)][1]}: ${b.d(nx)}.` : `Gold for ${b.d(b.t[b.t.length-1])}. The top!`;
}
const bgTotal=BADGES.reduce((n,b)=>n+b.t.length,0);
function viewBadges(){
  medalN=0;
  const rows=BADGES.map(b=>({b,t:tierOf(b),v:b.v()||0}));
  const got=rows.filter(r=>r.t>=0).length;
  $("#view").innerHTML=`<header class="pagehead"><p class="eyebrow">Odznaki</p><h1>Badges</h1>
    <p class="lede">Practise and collect Psotek's badges. Each one has bronze, silver and gold. One is a secret.</p>
    <div class="bgsum"><span class="pill"><b>${got}</b> of ${BADGES.length} badges</span><span class="pill"><b>${bgEarned()}</b> of ${bgTotal} medals</span><span class="pill"><b>${bg.n.best}</b> best streak</span></div></header>
  <div class="bggrid">${rows.map(({b,t,v})=>{ const sec=b.secret&&t<0; const nx=b.t[t+1]; const prev=t>=0?b.t[t]:0; const pct=nx!=null?Math.max(0,Math.min(100,Math.round((v-prev)/(nx-prev)*100))):100;
    return `<article class="bgcard${t<0?" locked":""}">${medal(b,t)}
      <h2 class="bgname">${sec?"???":esc(b.pl)}</h2><p class="bgen">${sec?"Secret badge":esc(b.en)}</p>${tierDots(b,t)}
      <p class="bgdesc">${esc(bgDesc(b,t))}</p>
      ${!b.secret&&nx!=null?`<div class="bgbar" role="progressbar" aria-valuemin="0" aria-valuemax="${nx}" aria-valuenow="${Math.min(v,nx)}" aria-label="${esc(b.en)} progress"><i style="width:${pct}%"></i></div><p class="bgnext">${Math.min(v,nx)} / ${nx}</p>`:""}
    </article>`; }).join("")}</div>
  <p class="hintline" style="margin-top:18px">Your badges go into your progress code, so your teacher can see them too.</p>`;
}
const TIMES=["past","present","future"];
const ASPECTS=["simple","continuous","perfect","perfect continuous"];
const EXAMPLE={
  "present|simple":"She usually takes the bus to work.",
  "present|continuous":"I'm studying for an exam this week.",
  "present|perfect":"They have already made a plan.",
  "present|perfect continuous":"He has been working here since 2022.",
  "past|simple":"We watched the news yesterday.",
  "past|continuous":"I was eating breakfast when you called.",
  "past|perfect":"The film had started before we arrived.",
  "past|perfect continuous":"She had been swimming for an hour when it started to rain.",
  "future|simple":"I think it will rain tomorrow.",
  "future|continuous":"This time tomorrow, we'll be flying to Rome.",
  "future|perfect":"By Friday, I will have finished the report.",
  "future|perfect continuous":"By June, he will have been studying English for ten years."
};
const LVDESC=[
  "Starter: present simple and present continuous, with the basics of do and does.",
  "Adds the past simple and continuous, will, and the present perfect.",
  "Adds the present perfect continuous and the past perfect.",
  "Every tense but one, with tricky subjects like 'the news' and 'the police'.",
  "All 12 tenses, advanced verbs, question tags and negative questions.",
  "All 12 tenses, plus inversion, emphasis and 'so / neither' traps."
];
const okTense=k=>LVTENSES[lvl()].includes(k);
const tenseLv=k=>LVTENSES.findIndex(a=>a.includes(k));
function resetLevelState(){ hunt=null; det.q=null; det.answered=false; stopRush(); trip=null; vbReset(); }
const painted = P => P.map(p=>p.k==="end"?esc(p.t):` <span class="p-${p.k}">${esc(p.t)}</span>`).join("").trim();
const verbPhrase = P => P.filter(p=>["aux","auxneg","neg","main"].includes(p.k)).map(p=>p.t).join(" ");
const LEGEND = `<div class="legend"><span class="p-subj">subject</span><span class="p-aux">helping verb</span><span class="p-auxneg">not / n't</span><span class="p-main">main verb</span></div>`;
const GR_F = {"articles.0": "a / an + one countable thing", "articles.1": "a + consonant sound · an + vowel sound", "articles.2": "the + the one we both know", "articles.3": "no article + plural / uncountable", "articles.4": "be + a / an + job", "articles.5": "go to school · in the morning", "articles.6": "Paris · the Thames · the USA", "modals.0": "must / have to + {1}", "modals.1": "mustn't / don't have to + {1}", "modals.2": "should / had better + {1}", "modals.3": "might / must / can't + {1}", "modals.4": "can / will be able to + {1}", "modals.5": "should / must / could + have + {3}", "cond.0": "if + present → present", "cond.1": "if + present → will + {1}", "cond.2": "if + {2} → would + {1}", "cond.3": "if + had + {3} → would have + {3}", "cond.4": "I wish + {2} · I wish + had + {3}", "passive.0": "be + {3}", "passive.1": "is / was / has been / will be + {3}", "passive.2": "be + {3} + by …", "passive.3": "modal + be + {3}", "passive.4": "have + thing + {3}", "questions.0": "wh- + helper + subject + {1} ?", "questions.1": "do / does / did + subject + {1} ?", "questions.2": "Who + {1s} ?", "questions.3": "Do you know + wh- + subject + verb", "questions.4": "…, isn't it? · Who … to?", "patterns.0": "enjoy + {ing}", "patterns.1": "want + to + {1}", "patterns.2": "preposition + {ing}", "patterns.3": "remember to + {1} ≠ remember + {ing}", "patterns.4": "tell someone to + {1} · let someone + {1}", "preps.0": "at 7:00 · on Monday · in May", "preps.1": "in the box · on the table · at the door", "preps.2": "go to · get into · arrive in / at", "preps.3": "good at · afraid of · proud of", "preps.4": "listen to · wait for · depend on"};
const G_TINT={table:"blue",map:"sky",machine:"sun",hunt:"coral",detective:"plum",time:"leaf",articles:"sky",modals:"plum",cond:"sun",passive:"coral",questions:"blue",patterns:"leaf",preps:"sky",verbs:"coral"};
const ROOM_GLYPH={table:"V1 V2 V3",map:"12",machine:"+ing",hunt:"do?",detective:"?!",time:"→",articles:"a · the",modals:"must",cond:"if…",passive:"by",questions:"?",patterns:"to / -ing",preps:"in on at",verbs:"go went"};
const G_HERO={
  articles:{art:"quill",say:"Tiny words, big trouble. Let's tame a, an and the!"},
  modals:{art:"cap",say:"Must I? Should I? Might I? Yes, you can!"},
  cond:{art:"sun",say:"If you practise, you'll win. If I were you, I'd start now!"},
  passive:{art:"beret",say:"Mistakes were made… but not by me!"},
  questions:{art:"target",say:"Do you know where the do goes? Let's find out!"},
  patterns:{art:"chef",say:"I enjoy cooking and I want to help. -ing or to? Easy!"},
  preps:{art:"race",say:"In the morning, on Monday, at eight. Always on time!"},
  verbs:{art:"flame",say:"Go, went, gone. Where did my verbs go?",t:"Irregular verbs",intro:"The verbs that break the rules. Learn them in threes: go, went, gone."}};
const G_KEYS={
  articles:/\b(a|an|the)\b/gi,
  modals:/(\b(?:mustn't|must|have to|has to|had to|needn't|shouldn't|should|ought to|had better|might|may|couldn't|could|can't|can|be able to)\b|'d better)/gi,
  cond:/(\b(?:if|unless|in case|wish|would|wouldn't|will|won't)\b|'d\b|'ll\b)/gi,
  passive:/\b(?:is|are|was|were|be|been|being|get|got|had|have)\s+(?:\w+ed|made|built|written|done|given|taken|seen|known|said|told|sold|found|stolen|cut|born|eaten|spoken|sent|held|paid|shown|thought|bought|grown|driven|broken)\b|\bby\b/gi,
  questions:/\b(do|does|did|don't|doesn't|didn't|who|what|where|when|why|how|which|whose|isn't|aren't|wasn't|haven't|won't)\b/gi,
  patterns:/\b\w{2,}ing\b|\bto\s+[a-z]+/gi,
  preps:/\b(in|on|at|to|into|for|of|with|from|by|off)\b/gi};
const hl=(s,re)=>{ if(!re) return esc(s); let out="",i=0; String(s).replace(re,(m,...a)=>{ const off=a[a.length-2]; if(off<i) return m; out+=esc(s.slice(i,off))+`<mark>${esc(m)}</mark>`; i=off+m.length; return m; }); return out+esc(s.slice(i)); };
const trLangs=()=>{ const h=typeof helpLang==="function"?helpLang():""; return h==="pl"||h==="ro"?[h]:["pl","ro"]; };
function trBar(){ return `<div class="trbar" role="radiogroup" aria-label="Translate the rules"><span class="trlabel">Translate the rules</span>${[["","English only"],["pl","Polski"],["ro","Română"]].map(([v,l])=>`<button type="button" role="radio" class="trb" data-trl="${v}" aria-checked="${trLang===v}" ${v?`lang="${v}"`:""}>${l}</button>`).join("")}</div>`; }
const trAsk=k=>TRX[k]?`<span class="trask">${trLangs().map(l=>`<button class="linkbtn" type="button" data-trask="${k}" data-l="${l}" lang="${l}">${l==="pl"?"Wyjaśnij po polsku":"Explică în română"}</button>`).join("")}</span>`:"";
function ruleCard(key,i,r,focus,note,id){ const k=key+"."+i, f=GR_F[k];
  return `<article class="rcard${focus?" focus":""}" id="${id}"><span class="rnum" aria-hidden="true">${i+1}</span>
    <h3><span class="sr">Rule ${i+1}: </span>${esc(r.t)}</h3>
    ${f?`<p class="ttform rform">${ttForm(f)}</p>`:""}
    <p class="rrule">${esc(r.rule)}</p>${trBox(k)}
    <ul class="rex">${r.ex.map(e=>`<li>${hl(e,G_KEYS[key])}</li>`).join("")}</ul>${note}</article>`; }
function gHero(key){ const H=G_HERO[key]; if(!H) return ""; const G=GR[key];
  const t=H.t||(G?G.t:key==="articles"?"Articles":key), intro=H.intro||(G?G.intro:key==="articles"?"Seven rules cover almost every use of a, an and the. Read one, then practise it.":"");
  return `<div class="ghero"><div><p class="eyebrow">Grammar</p><h2>${esc(t)}</h2><p>${esc(intro)}</p>${trBox("intro."+key)}</div>
    <div class="ghpso"><p class="bubble">${esc(H.say)}</p><svg viewBox="${PSO_HEAD_VB}" aria-hidden="true">${psoHead(H.art)}</svg></div></div>`; }
const ROOMS=[["table","Tense table","All tenses on one page"],["map","Tense map","Explore all 12"],["machine","Sentence machine","Build any sentence"],["hunt","Do or does?","A 10-round game"],["detective","Tense detective","Name the tense"],["time","Time machine","Change the tense"],["articles","Articles","a, an, the or nothing"],["modals","Modals","must, should, might"],["cond","Conditionals","if… would…"],["passive","The passive","is made, was built"],["questions","Questions","word order and do"],["patterns","Verb patterns","doing or to do?"],["preps","Prepositions","in, on, at and more"],["verbs","Irregular verbs","8 ways to practise"]];
function viewLab(){
  const isT=TENSE_ROOMS.includes(lab.room); const rooms=ROOMS.filter(([id])=>TENSE_ROOMS.includes(id)===isT);
  $("#view").innerHTML=`
  <div class="labhead">
    <div><p class="eyebrow">${isT?"Tenses":"Grammar"}</p><h1 class="labh1">${isT?"All 12 tenses: explore, build and play":"Pick a topic, read the cheat cards, then play"}</h1></div>
    <div class="xp" id="xp" aria-live="polite"></div>
  </div>
  <p class="lede">Explore, build and play. Every right answer earns XP. Use the menu to go back to your words at any time.</p>
  <div class="levels"><span class="lvlabel">Level</span>
    <div class="lvbtns" role="radiogroup" aria-label="Practice level">${LV.map((l,i)=>`<button class="lvb" type="button" role="radio" data-lv="${i}" aria-checked="${i===lvl()}">${l}</button>`).join("")}</div>
    <span class="lvdesc">${esc(LVDESC[lvl()])}</span></div>
  <div class="rooms" role="tablist">${rooms.map(([id,t,s])=>`<button class="room tint-${G_TINT[id]||"blue"}" role="tab" type="button" data-r="${id}" aria-selected="${lab.room===id}"><i class="rglyph" aria-hidden="true">${esc(ROOM_GLYPH[id]||"")}</i><b>${t}</b><span>${s}</span></button>`).join("")}</div>
  ${isT?"":`<div class="tint-${G_TINT[lab.room]||"blue"}">${gHero(lab.room)}</div>`}
  <div id="room" class="${isT?"":"tint-"+(G_TINT[lab.room]||"blue")}"></div>`;
  paintXP();
  document.querySelectorAll(".lvb").forEach(b=>b.onclick=()=>{ if(+b.dataset.lv===lvl()) return; lab.level=+b.dataset.lv; saveLab(); resetLevelState(); viewLab(); burst($(`.lvb[data-lv="${lab.level}"]`),6); });
  document.querySelectorAll(".room").forEach(b=>b.onclick=()=>{ lab.room=b.dataset.r; if(TENSE_ROOMS.includes(lab.room)) lab.troom=lab.room; else lab.groom=lab.room; state.route=section("lab"); save(); saveLab(); stopRush(); paintNav(); viewLab(); });
  (({table:roomTable,map:roomMap,machine:roomMachine,hunt:roomHunt,detective:roomDetective,time:roomTime,articles:roomArticles,modals:()=>roomGram("modals"),cond:()=>roomGram("cond"),passive:()=>roomGram("passive"),questions:()=>roomGram("questions"),patterns:()=>roomGram("patterns"),preps:()=>roomGram("preps"),verbs:roomVerbs})[lab.room]||roomMap)();
}
const ART_RULES = [
  { id:"r1", t:"a / an: one of many", rule:"Use a or an with ONE countable thing when it is new or it doesn't matter which one.", ex:["I've got a brother.","Is there a bank near here?","What a beautiful day!"],
    en:{pl:"Polish has no articles, so “I have car” sounds natural to Poles. In English a single countable noun almost never stands alone: a car, a job, a dog.",ro:"Romanian uses un / o in the same way (o carte = a book), so this rule usually feels natural."},
    pl:"Po polsku nie ma przedimków, więc „I have car” brzmi naturalnie, ale to błąd. Rzeczownik policzalny w liczbie pojedynczej prawie zawsze potrzebuje a/an albo the: a car, a job.",
    ro:"În română folosești un / o la fel: o carte = a book. Regula aceasta e de obicei ușoară pentru vorbitorii de română." },
  { id:"r2", t:"a or an? Listen to the sound", rule:"Use an before a vowel SOUND and a before a consonant SOUND. The first sound decides, not the first letter.", ex:["an apple, an hour (h is silent), an MP3","a university (“you”), a European, a one-way ticket"],
    en:{pl:"Say the word aloud: if it starts with a “you” or “w” sound, use a; if the h is silent, use an.",ro:"Say the word aloud: if it starts with a “you” or “w” sound, use a; if the h is silent, use an."},
    pl:"Decyduje pierwszy dźwięk, nie litera: an hour (h jest nieme), a university (wymawiane „ju”).",
    ro:"Contează primul sunet, nu litera: an hour (h nu se pronunță), a university (se pronunță „iu”)." },
  { id:"r3", t:"the: we both know which one", rule:"Use the when the listener knows exactly which thing you mean: you mentioned it before, there is only one, or it's the best, the first or the same.", ex:["I bought a car and a bike. The car is red.","The sun is hot today.","It's the best film of the year."],
    en:{pl:"Think of the as “ten konkretny”: the one we both know.",ro:"The is like the Romanian definite ending -ul / -a: băiatul = the boy, when we know which boy."},
    pl:"„The” to mniej więcej „ten konkretny”, o którym obaj wiemy: the door (te drzwi tutaj), the sun (jedyne słońce).",
    ro:"„The” seamănă cu articolul hotărât (-ul, -a): băiatul = the boy, când știm despre care băiat e vorba." },
  { id:"r4", t:"No article: things in general", rule:"Talk about things in general with plural or uncountable nouns and NO article. Exception: the + adjective for a group of people (the rich, the elderly).", ex:["Dogs are loyal.","Life is short.","Money isn't everything.","He gave me good advice."],
    en:{pl:"Polish speakers usually get this right. Just don't add the to sound “more English”.",ro:"Watch out: Romanian says “Viața e scurtă” with an article, but English says “Life is short” with none."},
    pl:"Polakom zwykle idzie tu dobrze. Nie dodawaj „the” na siłę: Life is short, Dogs are loyal. Uwaga na rzeczowniki niepoliczalne: advice, information, news (bez a).",
    ro:"Atenție: în română spui „Viața e scurtă”, cu articol, dar în engleză spui „Life is short”, fără the. Ideile generale nu au articol." },
  { id:"r5", t:"Jobs and descriptions take a / an", rule:"Say what someone is or does with a / an.", ex:["She's a doctor.","He's an engineer.","As a child, I lived by the sea."],
    en:{pl:"Polish says “Jest lekarką” with nothing before the job. English needs a: She's a doctor.",ro:"Romanian says “E medic” with nothing before the job. English needs a: She's a doctor."},
    pl:"Po polsku mówisz „Jest lekarką”, ale po angielsku potrzebne jest a/an: She's a doctor, He's an engineer.",
    ro:"În română spui „E medic”, dar în engleză ai nevoie de a/an: She's a doctor, He's an engineer." },
  { id:"r6", t:"Places, routines and time phrases", rule:"Many fixed phrases have no article: go to school / work / bed, at home, by bus, have lunch, in prison. Others always take one: in the morning, go to the cinema, twice a week.", ex:["I go to work by bus.","We have breakfast at seven.","I'll call you in the morning."],
    en:{pl:"Learn these as ready-made chunks rather than rules.",ro:"Learn these as ready-made chunks rather than rules."},
    pl:"Ucz się ich jako gotowych zwrotów: go to school, at home, by bus, in the morning, twice a week.",
    ro:"Învață-le ca expresii fixe: go to school, at home, by bus, in the morning, twice a week." },
  { id:"r7", t:"Names: usually no article", rule:"Most names have no article: people, cities, most countries, languages, sports, meals. Use the with rivers, seas, mountain ranges, plural countries (the USA, the Netherlands) and musical instruments.", ex:["I live in Poland and speak English.","The Danube flows into the Black Sea.","She plays the piano."],
    en:{pl:"Rivers, seas and mountain ranges need the: the Vistula, the Baltic, the Tatras.",ro:"Romanian puts the article on countries and languages (România, româna), but English doesn't: I live in Romania, I speak Romanian."},
    pl:"Większość nazw nie ma przedimka (Poland, Kraków, English), ale rzeki, morza i łańcuchy górskie mają: the Vistula, the Baltic, the Tatras.",
    ro:"În engleză spui fără articol: I live in Romania, I speak Romanian. Dar: the Danube, the Black Sea, the Carpathians." }
];
const ART_R = Object.fromEntries(ART_RULES.map(r=>[r.id,r]));
const ART_CHOOSE = [
  [0,"I've got ___ brother and two sisters.","a","r1","One brother out of many: a."],
  [0,"She eats ___ apple every day.","an","r2","Apple starts with a vowel sound."],
  [0,"Can you close ___ door, please?","the","r3","We both know which door: the one in this room."],
  [0,"___ sun is very hot today.","the","r3","There is only one sun."],
  [0,"My mum is ___ teacher.","a","r5","Jobs take a / an."],
  [0,"I go to ___ school by bus.","–","r6","Go to school is a fixed phrase with no article."],
  [0,"We live in ___ Poland.","–","r7","Most countries have no article."],
  [0,"I like ___ cats.","–","r4","Cats in general: no article."],
  [0,"Is there ___ bank near here?","a","r1","Any bank, not a specific one."],
  [0,"He's ___ engineer.","an","r5","A job, and engineer starts with a vowel sound."],
  [0,"I play ___ guitar in a band.","the","r7","Musical instruments take the."],
  [0,"We have ___ breakfast at seven.","–","r6","Meals have no article."],
  [1,"I waited for ___ hour.","an","r2","The h in hour is silent, so it starts with a vowel sound."],
  [1,"She studies at ___ university in Kraków.","a","r2","University starts with a “you” sound."],
  [1,"I saw a film last night. ___ film was really funny.","the","r3","Second mention: now we know which film."],
  [1,"What's ___ best restaurant in your town?","the","r3","Superlatives take the."],
  [1,"___ money can't buy happiness.","–","r4","Money in general: no article."],
  [1,"We went to ___ cinema on Saturday.","the","r6","Go to the cinema is fixed with the."],
  [1,"He goes to ___ bed at eleven.","–","r6","Go to bed has no article."],
  [1,"They live in ___ United States.","the","r7","Countries with plural or “united” names take the."],
  [1,"My sister is ___ honest person.","an","r2","The h in honest is silent."],
  [1,"I usually go to work by ___ car.","–","r6","By car, by bus, by train: no article."],
  [1,"Can you play ___ piano?","the","r7","Musical instruments take the."],
  [2,"___ life is too short to drink bad coffee.","–","r4","Life in general: no article (Romanian speakers often add one)."],
  [2,"I don't like ___ music they play in this café.","the","r3","Not music in general, but this specific music."],
  [2,"He wants to be ___ actor.","an","r5","A job, and actor starts with a vowel sound."],
  [2,"We stayed at ___ hotel near the beach.","a","r1","One hotel, mentioned for the first time."],
  [2,"It's ___ European company.","a","r2","European starts with a “you” sound."],
  [2,"The Danube flows into ___ Black Sea.","the","r7","Seas take the."],
  [2,"She's in ___ hospital with a broken leg.","–","r6","In hospital (as a patient) has no article in British English."],
  [2,"I'll call you in ___ morning.","the","r6","In the morning is a fixed phrase."],
  [2,"I go to the gym twice ___ week.","a","r6","Twice a week, three times a month: a means “per”."],
  [2,"___ children need a lot of sleep.","–","r4","Children in general: no article."],
  [2,"Who is ___ woman in the red coat?","the","r3","The phrase “in the red coat” tells us exactly which woman."],
  [3,"It was ___ unusual decision.","an","r2","Unusual starts with a vowel sound."],
  [3,"___ unemployment is rising in many regions.","–","r4","Unemployment in general: uncountable, no article."],
  [3,"She's ___ only person who knows the answer.","the","r3","The only, the same, the first: always the."],
  [3,"We're meeting at ___ same place as last time.","the","r3","The same is always the."],
  [3,"I read ___ interesting article about sleep.","an","r2","One article, and interesting starts with a vowel sound."],
  [3,"___ Netherlands is famous for its bicycles.","the","r7","Plural country names take the."],
  [3,"___ honesty is the best policy.","–","r4","An abstract idea in general: no article."],
  [3,"What ___ beautiful day!","a","r1","What + a + adjective + singular noun."],
  [4,"He was sent to ___ prison for five years.","–","r6","In prison / to prison as an inmate: no article."],
  [4,"___ rich should pay more tax, some argue.","the","r4","The + adjective for a group of people."],
  [4,"___ Carpathians stretch across Romania.","the","r7","Mountain ranges take the."],
  [4,"It's ___ one-way street.","a","r2","One starts with a “w” sound."],
  [4,"I'm studying ___ history of the Roman Empire.","the","r3","A specific history: of the Roman Empire."],
  [4,"___ history was my favourite subject at school.","–","r4","History as a subject in general: no article."],
  [4,"Prices have gone up by ten per cent ___ year.","a","r6","A year = per year."],
  [5,"The theory was later confirmed by ___ Einstein himself.","–","r7","People's names have no article."],
  [5,"He plays ___ violin in the national orchestra.","the","r7","Musical instruments take the."],
  [5,"___ elderly are often the most vulnerable in a heatwave.","the","r4","The + adjective for a group of people."],
  [5,"She has ___ MA in linguistics.","an","r2","MA is said “em-ay”: a vowel sound."],
  [5,"As ___ child, I lived in Constanța.","a","r5","As a child, as a teacher: a / an."],
  [5,"___ society expects too much from young people.","–","r4","Society in general: no article."]
].map(([lv,s,a,r,why])=>({lv,s,a,r,why}));
const ART_AAN = [
  [0,"apple","an"],[0,"egg","an"],[0,"year","a"],[0,"idea","an"],[0,"orange","an"],[0,"island","an","The s is silent: “eye-land”."],[0,"hamburger","a"],[0,"umbrella","an"],
  [1,"hour","an","The h is silent."],[1,"university","a","Starts with a “you” sound."],[1,"European","a","Starts with a “you” sound."],[1,"honest","an","The h is silent."],[1,"uniform","a","Starts with a “you” sound."],[1,"euro","a","Starts with a “you” sound."],[1,"useful","a","Starts with a “you” sound."],[1,"unusual","an","Starts with an “uh” vowel sound."],[1,"user","a","Starts with a “you” sound."],
  [3,"MP3","an","Said “em-pee-three”."],[3,"one-way ticket","a","One starts with a “w” sound."],[3,"X-ray","an","Said “ex-ray”."],[3,"heir","an","The h is silent: “air”."],[3,"SUV","an","Said “es-you-vee”."],[3,"FBI agent","an","Said “ef-bee-eye”."],[3,"MBA","an","Said “em-bee-ay”."],[3,"honour","an","The h is silent."],[3,"UFO","a","Said “you-ef-oh”."],[3,"one-hour meeting","a","One starts with a “w” sound."],[3,"Hungarian","a","The h is pronounced."]
].map(([lv,w,a,why])=>({lv,w,a,why:why||(a==="an"?"Starts with a vowel sound.":"Starts with a consonant sound.")}));
const ART_FIX = [
  [0,"I have dog.",["I have a dog."],"r1","One dog: a dog."],
  [0,"She is doctor.",["She is a doctor.","She's a doctor."],"r5","Jobs need a / an."],
  [0,"I go to the school every day.",["I go to school every day."],"r6","Go to school (as a student) has no article."],
  [0,"The cats are cute.",["Cats are cute."],"r4","Cats in general: no article."],
  [0,"Sun is shining.",["The sun is shining."],"r3","There is only one sun."],
  [1,"I waited a hour.",["I waited an hour.","I waited for an hour."],"r2","Hour starts with a vowel sound."],
  [1,"The life is beautiful.",["Life is beautiful."],"r4","Life in general: no article."],
  [1,"My brother is engineer.",["My brother is an engineer.","My brother's an engineer."],"r5","Jobs need a / an."],
  [1,"We visited the London last year.",["We visited London last year."],"r7","Cities have no article."],
  [1,"I play piano.",["I play the piano."],"r7","Musical instruments take the."],
  [2,"It's best film of the year.",["It's the best film of the year.","It is the best film of the year."],"r3","Superlatives take the."],
  [2,"She studies at an university.",["She studies at a university."],"r2","University starts with a “you” sound."],
  [2,"I live in the Romania.",["I live in Romania."],"r7","Most countries have no article."],
  [2,"The money isn't everything.",["Money isn't everything.","Money is not everything."],"r4","Money in general: no article."],
  [2,"Can you pass me salt?",["Can you pass me the salt?"],"r3","The salt on this table: we both know which."],
  [3,"He gave me a good advice.",["He gave me good advice.","He gave me some good advice.","He gave me a good piece of advice.","He gave me a piece of good advice."],"r4","Advice is uncountable: no a."],
  [3,"We need an information about the course.",["We need information about the course.","We need some information about the course."],"r4","Information is uncountable: no an."],
  [3,"I'm looking for job in marketing.",["I'm looking for a job in marketing.","I am looking for a job in marketing."],"r1","One job: a job."],
  [3,"Many people think the English is difficult.",["Many people think English is difficult."],"r7","Languages have no article."],
  [3,"She lives in USA.",["She lives in the USA.","She lives in the US."],"r7","The USA takes the."],
  [4,"The unemployment has risen sharply.",["Unemployment has risen sharply."],"r4","Unemployment in general: no article."],
  [4,"Danube is the second longest river in Europe.",["The Danube is the second longest river in Europe.","The Danube is the second-longest river in Europe."],"r7","Rivers take the."],
  [4,"He's in the prison for fraud.",["He's in prison for fraud.","He is in prison for fraud."],"r6","In prison (as an inmate): no article."],
  [4,"What a terrible weather!",["What terrible weather!"],"r4","Weather is uncountable: no a."],
  [5,"The society should protect the vulnerable.",["Society should protect the vulnerable."],"r4","Society in general: no article."],
  [5,"I've got an MA and a MBA.",["I've got an MA and an MBA.","I have got an MA and an MBA.","I have an MA and an MBA."],"r2","MBA is said “em-bee-ay”: a vowel sound."]
].map(([lv,s,ok,r,why])=>({lv,s,ok,r,why}));
function artPool(list){ const L=lvl(); let p=list.filter(x=>x.lv<=L+1); if(p.length<8) p=list.slice(); return p; }
function artNext(kind, list){
  const pool=artPool(list); let qu=art.queue[kind];
  if(!qu || !qu.length || qu.lvl!==lvl()){ qu=shuffle(pool.slice()); qu.lvl=lvl(); art.queue[kind]=qu; }
  return qu.pop();
}
const artNorm = s => s.toLowerCase().replace(/[’‘]/g,"'").replace(/\s+/g," ").replace(/[.!?]+$/,"").trim();
function artNote(r){
  const lg = typeof helpLang==="function" ? helpLang() : "";
  if(lg==="pl") return `<p class="artnote" lang="pl"><span class="l1flag">PL</span>${esc(r.pl)}</p>`;
  if(lg==="ro") return `<p class="artnote" lang="ro"><span class="l1flag">RO</span>${esc(r.ro)}</p>`;
  return `<p class="artnote"><b>Polish speakers:</b> ${esc(r.en.pl)}</p>${r.en.ro!==r.en.pl?`<p class="artnote"><b>Romanian speakers:</b> ${esc(r.en.ro)}</p>`:""}`;
}
function roomArticles(){
  const modes=[["rules","Rules"],["choose","a, an, the or –?"],["aan","a or an?"],["fix","Fix the sentence"]];
  const bar=`<div class="picks" style="margin-bottom:16px" role="group" aria-label="Articles practice">${modes.map(([m,l])=>`<button class="pick" type="button" data-am="${m}" aria-pressed="${art.mode===m}">${l}</button>`).join("")}</div>`;
  const hud=()=>`<div class="hud"><span>${art.seen?`${art.right} of ${art.seen} right`:"Answer to start your score"}</span><span class="streak">${art.streak>=2?`Streak ${art.streak}`:""}</span></div>`;
  const wire=()=>$$("[data-am]").forEach(b=>b.onclick=()=>{ if(art.mode===b.dataset.am) return; art.mode=b.dataset.am; art.q=null; art.done=false; roomArticles(); });
  const score=(ok,btn)=>{ art.seen++; track(ok); if(ok){ art.right++; art.streak++; addXP(2); if(btn) burst(btn,5); } else art.streak=0; };
  const ruleLink=r=>`<button class="linkbtn" type="button" data-artrule="${r.id}">Rule: ${esc(r.t)}</button>${trAsk("articles."+ART_RULES.indexOf(r))}`;
  const wireRule=()=>$$("[data-artrule]").forEach(b=>b.onclick=()=>{ art.mode="rules"; art.focus=b.dataset.artrule; art.q=null; roomArticles(); });

  if(art.mode==="rules"){
    $("#room").innerHTML=`<div class="panel">${bar}
      ${trBar()}
      <div class="rcards">${ART_RULES.map((r,i)=>ruleCard("articles",i,r,art.focus===r.id,artNote(r),"art-"+r.id)).join("")}</div>
      <div class="row" style="margin-top:14px"><button class="btn sage" type="button" id="artGo">Start practising</button></div></div>`;
    wire(); $("#artGo").onclick=()=>{ art.mode="choose"; art.q=null; roomArticles(); };
    if(art.focus){ const el=$(`#art-${art.focus}`); if(el) el.scrollIntoView({block:"center",behavior:"smooth"}); art.focus=null; }
    return;
  }
  if(art.mode==="choose"){
    if(!art.q){ art.q=artNext("choose",ART_CHOOSE); art.done=false; }
    const q=art.q, r=ART_R[q.r];
    const [pre,post]=q.s.split("___"); const cap1=!pre.trim();
    const shown=a=>a==="–"?"–":(cap1? a[0].toUpperCase()+a.slice(1) : a);
    $("#room").innerHTML=`<div class="panel" id="artPanel">${bar}${hud()}
      <p class="gamebig">${esc(pre)}<span class="artgap" id="artGap">${art.done?esc(shown(q.a)):"___"}</span>${esc(post)}</p>
      <div class="bigopts">${["a","an","the","–"].map(o=>`<button class="opt" type="button" data-o="${o}">${o==="–"?"no article (–)":o}</button>`).join("")}</div>
      <div id="artFb"></div></div>`;
    wire();
    $$("#artPanel .opt").forEach(b=>b.onclick=()=>{
      if(art.done) return; art.done=true; const ok=b.dataset.o===q.a; score(ok,b);
      $$("#artPanel .opt").forEach(x=>{ x.disabled=true; if(x.dataset.o===q.a) x.classList.add("right"); });
      if(!ok) b.classList.add("wrong");
      $("#artGap").textContent=shown(q.a); $("#artGap").classList.add(ok?"ok":"no");
      $("#artFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Right. ":"Not quite. "}${esc(q.why)} ${ruleLink(r)}</div>
        <div class="row"><button class="btn" type="button" id="artNext">Next sentence</button></div>`;
      wireRule(); $("#artNext").onclick=()=>{ art.q=null; roomArticles(); }; $("#artNext").focus({preventScroll:true});
    });
    return;
  }
  if(art.mode==="aan"){
    if(!art.q){ art.q=artNext("aan",ART_AAN); art.done=false; }
    const q=art.q;
    $("#room").innerHTML=`<div class="panel" id="artPanel">${bar}${hud()}
      <p class="counter" style="margin:0">Say it aloud. Which one sounds right?</p>
      <p class="gamebig"><span class="artgap" id="artGap">${art.done?q.a:"___"}</span> ${esc(q.w)}</p>
      <div class="row">${canSpeak?`<button class="iconbtn" type="button" id="artSay">${ico("sound")}<span>Hear the word</span></button>`:""}</div>
      <div class="bigopts">${["a","an"].map(o=>`<button class="opt" type="button" data-o="${o}">${o}</button>`).join("")}</div>
      <div id="artFb"></div></div>`;
    wire(); const sb=$("#artSay"); if(sb) sb.onclick=()=>speakSlow(q.w);
    $$("#artPanel .opt").forEach(b=>b.onclick=()=>{
      if(art.done) return; art.done=true; const ok=b.dataset.o===q.a; score(ok,b);
      $$("#artPanel .opt").forEach(x=>{ x.disabled=true; if(x.dataset.o===q.a) x.classList.add("right"); });
      if(!ok) b.classList.add("wrong");
      $("#artGap").textContent=q.a; $("#artGap").classList.add(ok?"ok":"no"); if(canSpeak) speakSlow(`${q.a} ${q.w}`);
      $("#artFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Right. ":"Not quite. "}<b>${esc(q.a)} ${esc(q.w)}</b>: ${esc(q.why)}</div>
        <div class="row"><button class="btn" type="button" id="artNext">Next word</button></div>`;
      $("#artNext").onclick=()=>{ art.q=null; roomArticles(); }; $("#artNext").focus({preventScroll:true});
    });
    return;
  }
  // fix
  if(!art.q){ art.q=artNext("fix",ART_FIX); art.done=false; art.tries=0; art.typed=""; }
  const q=art.q, r=ART_R[q.r];
  $("#room").innerHTML=`<div class="panel" id="artPanel">${bar}${hud()}
    <p class="counter" style="margin:0">This sentence has an article mistake. Type the correct sentence.</p>
    <p class="gamebig artwrong">${esc(q.s)}</p>
    <label class="sr" for="artIn">Correct sentence</label>
    <input class="tin" id="artIn" autocomplete="off" autocapitalize="sentences" spellcheck="false" value="${esc(art.typed||q.s)}">
    <div class="row" style="margin-top:10px"><button class="btn" type="button" id="artChk">Check</button><button class="linkbtn" type="button" id="artShow">Show the answer</button></div>
    <div id="artFb"></div></div>`;
  wire(); const inp=$("#artIn"); inp.focus({preventScroll:true}); inp.setSelectionRange(inp.value.length,inp.value.length);
  const finish=(ok,shown)=>{ art.done=true; art.typed=""; if(!shown) score(ok,$("#artChk")); else { art.seen++; art.streak=0; track(false); }
    $("#artFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Fixed! ":""}<b>${esc(q.ok[0])}</b> ${esc(q.why)} ${ruleLink(r)}</div>
      <div class="row"><button class="btn" type="button" id="artNext">Next sentence</button></div>`;
    $("#artChk").disabled=true; $("#artShow").hidden=true; inp.readOnly=true; wireRule();
    $("#artNext").onclick=()=>{ art.q=null; roomArticles(); }; $("#artNext").focus({preventScroll:true}); };
  const check=()=>{ if(art.done) return; const v=artNorm(inp.value);
    if(q.ok.some(a=>artNorm(a)===v)) return finish(true,false);
    art.tries=(art.tries||0)+1;
    if(v===artNorm(q.s)){ $("#artFb").innerHTML=`<div class="feedback no">You haven't changed anything yet. Look at the nouns: does each one need a, an, the or nothing?</div>`; return; }
    if(art.tries>=2) return finish(false,false);
    $("#artFb").innerHTML=`<div class="feedback no">Not quite. Hint: ${esc(r.t)}. Try once more.</div>`; };
  $("#artChk").onclick=check; inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); check(); } });
  inp.addEventListener("input",()=>{ art.typed=inp.value; });
  $("#artShow").onclick=()=>finish(false,true);
}
const TT_V = { b:"write", p:"wrote", pp:"written", ing:"writing" };
const ttTok = {
  "1":`<span class="vf v1" title="V1: base form">${TT_V.b}</span>`,
  "1s":`<span class="vf v1" title="V1 + s">${TT_V.b}<i>s</i></span>`,
  "2":`<span class="vf v2" title="V2: past simple form">${TT_V.p}</span>`,
  "3":`<span class="vf v3" title="V3: past participle">${TT_V.pp}</span>`,
  "ing":`<span class="vf v1 ing" title="V1 + ing">writ<i>ing</i></span>`
};
const ttForm = f => esc(f).replace(/ \+ /g,' <b class="plus">+</b> ').replace(/\{(1s|1|2|3|ing)\}/g,(m,k)=>ttTok[k]);
const TT = [
  { k:"present|simple", f:"{1} · he / she / it {1s}", ex:"I <mark>write</mark> every day.", pl:"Piszę codziennie.", ro:"Scriu în fiecare zi.", stamp:"DO / DOES",
    note:"Questions and negatives need do / does + V1: Does she write? (Not with be or can: Is she…? Can you…?)",
    l1:{pl:"Polski „piszę” to i „zwykle piszę”, i „piszę teraz”. Angielski je rozdziela: I write / I'm writing.",ro:"„Scriu” în română înseamnă și „de obicei”, și „acum”. Engleza le separă: I write / I'm writing."} },
  { k:"present|continuous", f:"am / is / are + {ing}", ex:"I<mark>'m writing</mark> an email now.", pl:"Teraz piszę maila.", ro:"Acum scriu un e-mail.",
    note:"Stative verbs (know, like, want, need…) don't usually take -ing: I know, not I'm knowing." },
  { k:"present|perfect", f:"have / has + {3}", ex:"I<mark>'ve</mark> already <mark>written</mark> it.", pl:"Już to napisałem.", ro:"L-am scris deja.",
    note:"Not with a finished time (yesterday, in 2020): then use the past simple.",
    l1:{pl:"Po polsku mówisz w czasie przeszłym, ale gdy liczy się skutek teraz, angielski chce have + V3.",ro:"În română spui „am scris”, dar în engleză present perfect apare doar când rezultatul contează acum. Cu „ieri” → past simple."} },
  { k:"present|perfect continuous", f:"have / has been + {ing}", ex:"I<mark>'ve been writing</mark> for two hours.", pl:"Piszę od dwóch godzin.", ro:"Scriu de două ore.",
    note:"With stative verbs use the present perfect: I've known her for years.",
    l1:{pl:"„Piszę od dwóch godzin” to po polsku czas teraźniejszy, a po angielsku have been writing.",ro:"„Scriu de două ore” e prezent în română, dar în engleză e have been writing."} },
  { k:"past|simple", f:"{2}", ex:"I <mark>wrote</mark> it yesterday.", pl:"Napisałem to wczoraj.", ro:"L-am scris ieri.", stamp:"DID",
    note:"Questions and negatives need did + V1: Did you write? I didn't write. (Not with be: Was it…?)" },
  { k:"past|continuous", f:"was / were + {ing}", ex:"I <mark>was writing</mark> when you called.", pl:"Pisałem, kiedy zadzwoniłeś.", ro:"Scriam când ai sunat.",
    note:"Often interrupted by a past simple action: was writing … called." },
  { k:"past|perfect", f:"had + {3}", ex:"I <mark>had written</mark> it before the meeting.", pl:"Napisałem to przed spotkaniem.", ro:"O scrisesem înainte de ședință.",
    note:"The earlier of two past actions.",
    l1:{pl:"Polski nie ma tego czasu, więc używasz zwykłego przeszłego. Po angielsku had + V3 pokazuje, co było wcześniej.",ro:"Seamănă cu mai-mult-ca-perfectul: scrisesem = I had written."} },
  { k:"past|perfect continuous", f:"had been + {ing}", ex:"I <mark>had been writing</mark> for an hour when you arrived.", pl:"Pisałem już od godziny, kiedy przyszedłeś.", ro:"Scriam de o oră când ai ajuns.",
    note:"How long, up to a moment in the past. Stative verbs: I had known her for years." },
  { k:"future|simple", f:"will + {1}", ex:"I<mark>'ll write</mark> to you tomorrow.", pl:"Napiszę do ciebie jutro.", ro:"Îți voi scrie mâine. / O să-ți scriu mâine.",
    note:"After if, when, before, as soon as use the present simple: When I finish, I'll call you.",
    l1:{pl:"Po if / when nie ma will, choć po polsku mówisz „jeśli będzie padać”: if it rains.",ro:"După if / when nu folosești will, deși în română spui „dacă va ploua”: if it rains."} },
  { k:"future|continuous", f:"will be + {ing}", ex:"This time tomorrow I<mark>'ll be writing</mark> my exam.", pl:"Jutro o tej porze będę pisać egzamin.", ro:"Mâine la ora asta voi scrie la examen.",
    note:"In progress at a moment in the future. Stative verbs: I'll know, not I'll be knowing." },
  { k:"future|perfect", f:"will have + {3}", ex:"I<mark>'ll have written</mark> it by Friday.", pl:"Napiszę to do piątku.", ro:"Îl voi fi scris până vineri.",
    note:"Usually with by: by Friday, by the time you come." },
  { k:"future|perfect continuous", f:"will have been + {ing}", ex:"By June I<mark>'ll have been writing</mark> for a year.", pl:"W czerwcu minie rok, odkąd piszę.", ro:"În iunie se va face un an de când scriu.",
    note:"How long, up to a moment in the future." }
];
const TT_EXTRA = {
  cond:[
    { t:"Present conditional", lv:1, f:"would + {1}", ex:"I <mark>would write</mark> more if I had time.", pl:"Pisałbym więcej, gdybym miał czas.", ro:"Aș scrie mai mult dacă aș avea timp.",
      sig:["if + past simple","could","might","should"], note:"If + past simple, would + V1. Never would in the if part.",
      l1:{pl:"Tryb przypuszczający: napisałbym = I would write. Gdybym miał = if I had (bez would).",ro:"Condiționalul: aș scrie = I would write. Dacă aș avea = if I had (fără would)."} },
    { t:"Perfect conditional", lv:3, f:"would have + {3}", ex:"I <mark>would have written</mark> if I'd known.", pl:"Napisałbym, gdybym wiedział.", ro:"Aș fi scris dacă aș fi știut.",
      sig:["if + had + V3","could have","might have","should have"], note:"If + had + V3, would have + V3. It's about a past that didn't happen." }
  ],
  imp:{ t:"Imperative", f:"{1}! · Don't + {1}! · Let's + {1}!", ex:"<mark>Write</mark> it down! <mark>Let's write</mark> together!", pl:"Zapisz to! Napiszmy razem!", ro:"Scrie asta! Hai să scriem împreună!",
    sig:["please","don't","let's"], note:"No subject: Write!, not You write! Negative: Don't write." }
};
const STATIVE = ["be","have (own)","know","like","love","hate","want","need","understand","believe","seem","prefer","remember","forget","belong","own","mean","agree"];
const TT_TIMES = [["present","Present","now"],["past","Past","then"],["future","Future","later"]];
function ttCard(o, opts={}){
  const lg = typeof helpLang==="function" ? helpLang() : "";
  const T = o.k ? TINFO[o.k] : null; const [time,asp] = o.k ? o.k.split("|") : [null,null];
  const lock = o.k ? !okTense(o.k) : (o.lv>lvl());
  const lvTag = lock ? `<em class="from">${LV[o.k?tenseLv(o.k):o.lv]}</em>` : "";
  const sig = (T?T.sig:o.sig)||[];
  return `<article class="ttcard${lock?" locked":""}" ${o.k?`data-tk="${o.k}"`:""}>
    ${o.stamp?`<span class="ttstamp" aria-hidden="true">${o.stamp}</span>`:""}
    <header><h3>${esc(T?T.name:o.t)}</h3>${lvTag}</header>
    <p class="ttform">${ttForm(o.f)}</p>
    <p class="ttex">${o.ex}</p>
    ${lg && o[lg] ? `<p class="ttl1" lang="${lg}"><span class="l1flag">${lg.toUpperCase()}</span>${esc(o[lg])}</p>` : ""}
    ${o.k?`<div class="tttl">${timeline(time,asp)}</div>`:""}
    <div class="ttsig">${sig.map(x=>`<span>${esc(x)}</span>`).join("")}</div>
    <p class="ttnote"><b aria-hidden="true">!</b>${esc(o.note)}</p>${trBox("note."+(o.k||o.t))}
    ${lg && o.l1 && o.l1[lg] ? `<p class="ttl1n" lang="${lg}">${esc(o.l1[lg])}</p>` : ""}
    ${o.k?`<button class="linkbtn" type="button" data-explore="${o.k}">Explore with the Sentence machine →</button>`:""}
  </article>`;
}
function roomTable(){
  $("#room").innerHTML=`<div id="ttable">
    <div class="ttintro panel">
      <div><h2 class="h3" style="margin:0 0 4px">Every tense on one page</h2>
        <p style="margin:0;color:var(--muted)">Each colour is a time. Each card shows the recipe, an example with <em>write</em>, signal words and one thing to watch out for. Tenses above your level are faded.</p></div>
      <div class="ttlegend" aria-label="Verb forms">
        <span>${ttTok["1"]} <small>V1 · base</small></span><span>${ttTok["2"]} <small>V2 · past</small></span><span>${ttTok["3"]} <small>V3 · participle</small></span><span>${ttTok["ing"]} <small>V1 + ing</small></span>
      </div>
      ${trBar()}
      <div class="row" style="margin:0"><button class="btn ghost" type="button" id="ttPrint">${ico("archive")} Print the table</button></div>
    </div>
    ${TT_TIMES.map(([t,label,sub])=>`<section class="ttblock tt-${t}" aria-label="${label}">
      <h2 class="ttband"><span>${label}</span><small>${sub}</small></h2>
      <div class="ttgrid">${TT.filter(o=>o.k.startsWith(t+"|")).map(o=>ttCard(o)).join("")}</div></section>`).join("")}
    <section class="ttblock tt-cond" aria-label="Conditional"><h2 class="ttband"><span>Conditional</span><small>would</small></h2>
      <div class="ttgrid">${TT_EXTRA.cond.map(o=>ttCard(o)).join("")}</div></section>
    <div class="ttgrid two">
      <section class="ttblock tt-imp" aria-label="Imperative"><h2 class="ttband"><span>Imperative</span><small>do it!</small></h2>${ttCard(TT_EXTRA.imp)}</section>
      <section class="ttblock tt-stat" aria-label="Stative verbs"><h2 class="ttband"><span>Stative verbs</span><small>no -ing</small></h2>
        <article class="ttcard"><p style="margin:0 0 10px">These verbs describe states, not actions, so they don't usually take -ing in continuous tenses.</p>
        <div class="ttsig big">${STATIVE.map(v=>`<span>${esc(v)}</span>`).join("")}</div>
        <p class="ttnote"><b aria-hidden="true">!</b>I know the answer, not I'm knowing. I've known her for years, not I've been knowing.</p>${trBox("note.stative")}</article></section>
    </div></div>`;
  $("#ttPrint").onclick=()=>{ try{ window.print(); }catch(e){} };
  $$("[data-explore]").forEach(b=>b.onclick=()=>{ const [t,a]=b.dataset.explore.split("|"); mac={...mac,time:t,asp:a}; lab.room="machine"; lab.troom="machine"; saveLab(); viewLab(); });
  if(!lab.seen.table){ lab.seen.table=1; saveLab(); }
}
let mapSel="present|simple", mapSubj=3;
function roomMap(){
  const [time,asp]=mapSel.split("|"); const T=TINFO[mapSel];
  const vi=VERBS.findIndex(v=>v.b==="work");
  let firstVisit=false; if(!lab.seen[mapSel]){ lab.seen[mapSel]=1; saveLab(); firstVisit=true; }
  const seenN=Object.keys(lab.seen).length;
  $("#room").innerHTML=`
  <div class="panel">
    <div class="hud"><span>Tap a tense to explore it. Faded ones come at a higher level, but you can still peek.</span><span class="counter">${LVTENSES[lvl()].filter(k=>lab.seen[k]).length} of ${LVTENSES[lvl()].length} at ${LV[lvl()]} explored</span></div>
    <div class="tscroll"><div class="tgrid">
      <span></span>${ASPECTS.map(a=>`<span class="hd">${cap(a)}</span>`).join("")}
      ${TIMES.map(t=>`<span class="rh">${cap(t)}</span>${ASPECTS.map(a=>{ const k=t+"|"+a;
        return `<button class="tcell${lab.seen[k]?" seen":""}${okTense(k)?"":" locked"}" type="button" data-k="${k}" aria-pressed="${k===mapSel}"><b>${esc(TINFO[k].name)}</b><span>${esc(verbPhrase(build(3,vi,t,a,"pos")))}</span>${okTense(k)?"":`<em class="from">${LV[tenseLv(k)]}</em>`}</button>`; }).join("")}`).join("")}
    </div></div>
  </div>
  <div class="panel">
    <h3 style="margin-top:0;font-size:1.5rem">${esc(T.name)}</h3>
    ${okTense(mapSel)?"":`<p class="locknote">This tense usually comes at ${LV[tenseLv(mapSel)]}. Have a peek!</p>`}
    ${timeline(time,asp)}
    <div class="trhost" style="margin:6px 0 4px;max-width:60ch"><p style="margin:0 0 4px">${esc(T.use)} ${trAsk("use."+mapSel)}</p></div>
    <p style="margin:0;color:var(--muted);font-size:.93rem">Form: ${esc(T.form)}</p>
    <div class="sig">${T.sig.map(x=>`<span>${esc(x)}</span>`).join("")}</div>
    <p class="example">${esc(EXAMPLE[mapSel])}</p>
    <h4 style="margin:22px 0 6px;font-size:.9rem;color:var(--muted)">Positive, negative and question</h4>
    <div class="picks" style="margin-bottom:6px">${[0,3,5].map(i=>`<button class="pick" type="button" data-s="${i}" aria-pressed="${i===mapSubj}">${SUBJ[i].t}</button>`).join("")}</div>
    ${[["+","pos"],["−","neg"],["?","q"]].map(([sg,pol])=>{ const P=build(mapSubj,vi,time,asp,pol);
      return `<div class="formrow"><span class="sign">${sg}</span><span class="sentence">${painted(P)}</span><button class="iconbtn" type="button" data-say="${esc(plain(P))}">Listen</button></div>`; }).join("")}
    ${LEGEND}
  </div>`;
  if(firstVisit){ addXP(3); if(seenN===12) addXP(15); }
  document.querySelectorAll(".tcell").forEach(b=>b.onclick=()=>{ mapSel=b.dataset.k; roomMap(); });
  document.querySelectorAll("#room .pick").forEach(b=>b.onclick=()=>{ mapSubj=+b.dataset.s; roomMap(); });
  document.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>speak(b.dataset.say));
}
let mac={s:2,v:0,time:"present",asp:"simple",pol:"neg"};
function roomMachine(rolling){
  const SI=subjIdx(), VI=verbIdx();
  if(!SI.includes(mac.s)) mac.s=2;
  if(!VI.includes(mac.v)) mac.v=0;
  if(!okTense(mac.time+"|"+mac.asp)){ if(!okTense(mac.time+"|simple")) mac.time="present"; mac.asp="simple"; }
  if(mac.pol==="negq" && lvl()<4) mac.pol="neg";
  const POLS=[["pos","Positive +"],["neg","Negative −"],["q","Question ?"],...(lvl()>=4?[["negq","Negative question"]]:[])];
  const P=build(mac.s,mac.v,mac.time,mac.asp,mac.pol); const k=mac.time+"|"+mac.asp;
  const combo=k+"|"+mac.pol; let fresh=false;
  if(!rolling && !lab.combos[combo]){ lab.combos[combo]=1; saveLab(); fresh=true; }
  const n=Object.keys(lab.combos).filter(x=>{ const [t,a,pl]=x.split("|"); return okTense(t+"|"+a) && POLS.some(p=>p[0]===pl); }).length;
  const total=LVTENSES[lvl()].length*POLS.length;
  const c=chain(mac.time,mac.asp,SUBJ[mac.s].k);
  let note="";
  if(c.doAux && mac.pol!=="pos") note = mac.time==="present"
    ? `In the present simple, negatives and questions need <strong>${c.doAux==="does"?"does / doesn't":"do / don't"}</strong>. ${c.doAux==="does"?"The -s moves to <em>does</em>, so the main verb goes back to its base form.":"With I, you, we and they, use <em>do</em>."}`
    : `In the past simple, negatives and questions use <strong>did / didn't</strong> for everyone, and the main verb goes back to its base form.`;
  else if(c.doAux) note = mac.time==="present"
    ? (SUBJ[mac.s].k==="3" ? "Positive present simple with he, she or it: no helping verb, just add -s to the verb." : "Positive present simple: no helping verb, just the base verb.")
    : "Positive past simple: no helping verb, just the past form.";
  else if(mac.pol==="q") note="To make a question, move the first helping verb in front of the subject.";
  else if(mac.pol==="negq") note="For a negative question, add n't to the first helping verb and move it in front of the subject.";
  if(mac.pol==="negq" && c.doAux) note+=" In a negative question, the n't form goes in front of the subject: "+(mac.time==="past"?"Didn't…?":(c.doAux==="does"?"Doesn't…?":"Don't…?"));
  else if(mac.pol==="neg") note="To make a negative, put not (n't) after the first helping verb.";
  const grp=(title,key,opts)=>`<div class="ctl"><h4>${title}</h4><div class="picks">${opts.map(([v,l,dis,tag])=>`<button class="pick" type="button" data-key="${key}" data-v="${v}" aria-pressed="${String(mac[key])===String(v)}" ${dis?"disabled":""}>${esc(l)}${dis&&tag?` <small>${tag}</small>`:""}</button>`).join("")}</div></div>`;
  $("#room").innerHTML=`
  <div class="panel">
    <div class="hud"><span>Choose the pieces. The sentence builds itself.</span><span class="counter">${n} of ${total} combinations found at ${LV[lvl()]}</span></div>
    ${grp("Who?","s",SI.map(i=>[i,SUBJ[i].t]))}
    ${grp("Doing what?","v",VI.map(i=>[i,VERBS[i].b]))}
    ${grp("When?","time",TIMES.map(t=>[t,cap(t),!ASPECTS.some(a=>okTense(t+"|"+a)),LV[Math.min(...ASPECTS.map(a=>tenseLv(t+"|"+a)))]]))}
    ${grp("Which kind?","asp",ASPECTS.map(a=>[a,cap(a),!okTense(mac.time+"|"+a),LV[tenseLv(mac.time+"|"+a)]]))}
    ${grp("Sentence type","pol",POLS)}
    <div class="stage${rolling?" rolling":""}" id="stage">
      <p class="tname">${esc(TINFO[k].name)}</p>
      <div class="sentence">${painted(P)}</div>
      ${timeline(mac.time,mac.asp)}
      ${LEGEND}
      <div class="callout">${note}</div>
    </div>
    <div class="row">
      <button class="btn sage" type="button" id="roll">Roll the dice</button>
      <button class="btn ghost" type="button" id="say">Listen</button>
    </div>
  </div>`;
  if(fresh){ addXP(2); burst($("#stage .sentence"),5); }
  document.querySelectorAll("#room .pick").forEach(b=>b.onclick=()=>{ const key=b.dataset.key; mac[key]= (key==="s"||key==="v") ? +b.dataset.v : b.dataset.v; if(key==="time" && !okTense(mac.time+"|"+mac.asp)) mac.asp="simple"; roomMachine(); });
  $("#say").onclick=()=>speak(plain(P));
  $("#roll").onclick=()=>{
    let i=0; const spin=()=>{ const [tt,aa]=pick(LVTENSES[lvl()]).split("|"); mac={s:pick(subjIdx()),v:pick(verbIdx()),time:tt,asp:aa,pol:pick(POLS)[0]};
      if(++i<8 && !reducedMotion()){ roomMachine(true); setTimeout(spin,70); } else roomMachine(); };
    spin();
  };
}
let trip=null;
const HARD=["present|perfect continuous","past|perfect","past|perfect continuous","future|perfect","future|continuous","future|perfect continuous"];
function newTrip(){
  const L=lvl(); const all=LVTENSES[L]; const hard=all.filter(k=>HARD.includes(k));
  const k = L>=4 && hard.length && Math.random()<.75 ? pick(hard) : pick(all); const [t,a]=k.split("|");
  const negP=[.33,.33,.33,.5,.66,.8][L];
  const from = L>=3 ? pick(all.filter(x=>x!==k)) : "present|simple";
  trip={s:pick(subjIdx()),v:pick(verbIdx()),time:t,asp:a,from,pol:k==="present|simple"&&L<3?"neg":(Math.random()<negP?"neg":"pos"),tries:0,solved:false};
}
function roomTime(){
  if(!trip) newTrip();
  const T=TINFO[trip.time+"|"+trip.asp];
  const [ft,fa]=(trip.from||"present|simple").split("|"); const start=build(trip.s,trip.v,ft,fa,"pos");
  const target=build(trip.s,trip.v,trip.time,trip.asp,trip.pol);
  const fullT=build(trip.s,trip.v,trip.time,trip.asp,trip.pol,true);
  const S=SUBJ[trip.s], V=VERBS[trip.v];
  $("#room").innerHTML=`<div class="panel" id="tPanel">
    <p class="qkind">Starting sentence</p>
    <p class="gamebig" style="margin-bottom:10px">${esc(plain(start))}</p>
    <div class="trip"><span class="arrow">Send it to →</span><b>${esc(cap(trip.time))}</b><b>${esc(cap(trip.asp))}</b><b>${trip.pol==="neg"?"Negative":"Positive"}</b></div>
    <div class="fillrow"><span>${esc(cap(S.t))}</span><input class="tin" id="tIn" autocomplete="off" spellcheck="false" aria-label="Verb phrase"><span>${esc(V.o)}.</span></div>
    <div class="row">
      <button class="btn" type="button" id="tGo">Launch</button>
      ${lvl()>=5?"":`<button class="btn ghost" type="button" id="tHint">Hint</button>`}
      <button class="btn ghost" type="button" id="tSkip">New trip</button>
    </div>
    <div id="tFb"></div></div>`;
  const inp=$("#tIn");
  const check=()=>{
    if(trip.solved) return; const v=inp.value.trim(); if(!v){ inp.focus(); return; }
    const ok=matches(v,[verbPhrase(target),verbPhrase(fullT)]);
    inp.classList.remove("right","wrong"); inp.classList.add(ok?"right":"wrong"); track(ok);
    if(ok){ trip.solved=true; const xp=trip.tries===0?5:3; addXP(xp); burst(inp,10); speak(plain(target));
      $("#tFb").innerHTML=`<div class="feedback ok" style="max-width:620px">Landed safely in the <strong>${esc(T.name.toLowerCase())}</strong>! +${xp} XP<div class="sentence" style="font-size:1.25rem;margin-top:6px">${painted(target)}</div></div>
        <div class="row"><button class="btn sage" type="button" id="tNext">Next trip</button></div>`;
      $("#tNext").onclick=()=>{ newTrip(); roomTime(); }; $("#tNext").focus({preventScroll:true});
    } else {
      trip.tries++; $("#tPanel").classList.remove("flash-no"); void $("#tPanel").offsetWidth; $("#tPanel").classList.add("flash-no");
      $("#tFb").innerHTML=`<div class="feedback no" style="max-width:620px">Turbulence! ${trip.tries>=(lvl()>=4?3:2)?"":"Check the helping verbs and the form of the main verb. "}${trip.tries>=(lvl()>=4?3:2)?`<button class="linkbtn" type="button" id="tShow">Show the answer</button>`:""}</div>`;
      const sh=$("#tShow"); if(sh) sh.onclick=()=>{ trip.solved=true; $("#tFb").innerHTML=`<div class="feedback no" style="max-width:620px">Answer: <div class="sentence" style="font-size:1.25rem;margin-top:6px">${painted(target)}</div></div><div class="row"><button class="btn" type="button" id="tNext">Next trip</button></div>`; $("#tNext").onclick=()=>{ newTrip(); roomTime(); }; };
    }
  };
  $("#tGo").onclick=check;
  inp.addEventListener("keydown",e=>{ if(e.key==="Enter") check(); });
  if($("#tHint")) $("#tHint").onclick=()=>{ $("#tFb").innerHTML=`<div class="callout">${esc(T.name)}: ${esc(T.form)}${trip.pol==="neg"?". Put not (n't) after the first helping verb.":"."}</div>${timeline(trip.time,trip.asp)}`; };
  $("#tSkip").onclick=()=>{ newTrip(); roomTime(); };
  inp.focus({preventScroll:true});
}
const IVB=Object.fromEntries(IV.map(v=>[v.b,v]));
const REG=[
  ["want","wanted",0],["play","played",0,"Play keeps its y: played. Compare pay → paid."],["work","worked",0],["watch","watched",0],
  ["like","liked",0],["love","loved",0],["help","helped",0],["ask","asked",0],["open","opened",0],["start","started",0],
  ["finish","finished",0],["cook","cooked",0],["walk","walked",0],["talk","talked",0],["listen","listened",0],["live","lived",0],
  ["study","studied",0,"Consonant + y → -ied: studied."],["stop","stopped",0,"Short verb ending consonant-vowel-consonant → double the last letter: stopped."],
  ["try","tried",0],["visit","visited",0],["clean","cleaned",0],["call","called",0],
  ["travel","travelled",1,"British English doubles the l: travelled."],["arrive","arrived",1],
  ["decide","decided",1,"Sounds a bit like hide (hid), but decide is regular: decided."],
  ["need","needed",1,"Rhymes with feed (fed), but need is regular: needed."],
  ["close","closed",1,"Looks like choose (chose), but close is regular: closed."],
  ["explain","explained",1],["carry","carried",1],["plan","planned",1],["agree","agreed",1],["enjoy","enjoyed",1],
  ["stay","stayed",1,"Stay keeps its y: stayed. Compare say → said."],["smile","smiled",1],
  ["bake","baked",1,"Rhymes with take and make, but bake is regular: baked."],
  ["fry","fried",1,"Looks like fly (flew), but fry is regular: fried."],
  ["seem","seemed",2,"Looks like seek (sought), but seem is regular: seemed."],
  ["mend","mended",2,"Rhymes with send and spend, but mend is regular: mended."],
  ["end","ended",2,"Rhymes with send (sent), but end is regular: ended."],
  ["fear","feared",2,"Rhymes with hear (heard), but fear is regular: feared."],
  ["hunt","hunted",2,"Looks like hurt, but hunt is regular: hunted."],
  ["post","posted",2,"Rhymes with cost, but post is regular: posted."],
  ["blink","blinked",2,"Rhymes with drink and think, but blink is regular: blinked."],
  ["heat","heated",2,"Rhymes with eat (ate), but heat is regular: heated."],
  ["peel","peeled",2,"Rhymes with feel (felt), but peel is regular: peeled."],
  ["heal","healed",2,"Rhymes with steal (stole), but heal is regular: healed."],
  ["pray","prayed",2,"Rhymes with pay (paid), but pray is regular: prayed."],
  ["glow","glowed",2,"Rhymes with grow (grew), but glow is regular: glowed."],
  ["snow","snowed",2,"Rhymes with throw (threw), but snow is regular: snowed."],
  ["raise","raised",2,"Looks like rise (rose), but raise is regular: raised."],
  ["pretend","pretended",3,"Rhymes with lend (lent), but pretend is regular: pretended."],
  ["wink","winked",3,"Rhymes with sink (sank), but wink is regular: winked."],
  ["glide","glided",3,"Rhymes with slide (slid), but glide is regular: glided."],
  ["seal","sealed",3,"Rhymes with steal (stole), but seal is regular: sealed."],
  ["dread","dreaded",3,"Rhymes with spread and shed, but dread is regular: dreaded."],
  ["treat","treated",3,"Rhymes with eat (ate), but treat is regular: treated."],
  ["link","linked",3,"Rhymes with think (thought), but link is regular: linked."],
  ["greet","greeted",3,"Rhymes with meet (met), but greet is regular: greeted."],
  ["lie","lied",3,"When lie means say something untrue, it's regular: lied.","lie (= say something untrue)"],
  ["hang","hanged",4,"When hang means kill someone with a rope, it's regular: hanged.","hang (= execute)"],
  ["shine","shined",4,"When shine means polish, it's regular: shined.","shine (= polish)"],
  ["fit","fitted",4,"British English: fitted. American English often uses fit."],
  ["weave","weaved",4,"When weave means move in and out of traffic, it's regular: weaved.","weave (= move in and out)"],
  ["found","founded",4,"Found (= start a company) is regular: founded. Don't confuse it with find → found.","found (= start a company)"],
  ["wound","wounded",4,"Wound (= injure) is regular: wounded. Don't confuse it with wind → wound.","wound (= injure)"]
].map(([b,p,lv,n,d])=>({b,p,lv,n:n||"",d:d||""}));
const FRAMES=[
  ["go","Last summer we ___ to Italy.","p"],["go","Where's Tom? He's ___ to the shops. He'll be back soon.","pp"],
  ["eat","I ___ a big breakfast this morning.","p"],["eat","Have you ever ___ sushi?","pp"],
  ["see","We ___ a great film on Saturday.","p"],["see","I have ___ this film three times.","pp"],
  ["buy","He ___ a new phone yesterday.","p"],["buy","We've just ___ our first flat!","pp"],
  ["write","She ___ me a long letter last week.","p"],["write","I have already ___ the email.","pp"],
  ["drink","Who has ___ all the milk?","pp"],["drink","I ___ three cups of coffee before lunch.","p"],
  ["take","They ___ the bus to work this morning.","p"],["take","Somebody has ___ my umbrella!","pp"],
  ["come","My parents ___ to visit me in May.","p"],["swim","We ___ in the lake every day last July.","p"],
  ["swim","I have never ___ in the sea.","pp"],["speak","Have you ___ to the teacher yet?","pp"],
  ["find","I ___ my keys under the sofa.","p"],["meet","I ___ my best friend at university.","p"],
  ["sleep","The baby ___ for ten hours last night.","p"],["run","She ___ five kilometres before work yesterday.","p"],
  ["run","I've never ___ a marathon.","pp"],["be","It ___ very cold yesterday.","p","was"],
  ["be","Have you ever ___ to London?","pp"],["give","My grandmother has ___ me this ring.","pp"],
  ["know","I ___ the answer, but I didn't say it.","p"],["think","I ___ the test was easy, but I was wrong.","p"],
  ["tell","She ___ me a funny story.","p"],["sing","The children ___ a song for their mum.","p"],
  ["get","I ___ a message from my boss at midnight.","p"],["make","We ___ pizza at home on Friday.","p"],
  ["do","Have you ___ your homework?","pp"],["do","What ___ you do at the weekend?","p"],
  ["leave","The train ___ at six o'clock.","p"],["read","I ___ that book on holiday last year.","p"],
  ["have","We ___ a great time at the party.","p"],["say","She ___ goodbye and walked out.","p"],
  ["sit","We ___ in the garden all afternoon.","p"],["put","Where have you ___ my glasses?","pp"],

  ["begin","The lesson has already ___.","pp"],["bring","She ___ a cake to the party.","p"],
  ["break","I ___ my arm when I was ten.","p"],["break","Oh no, someone has ___ the window.","pp"],
  ["catch","He ___ the ball with one hand.","p"],["choose","Have you ___ a name for the baby?","pp"],
  ["drive","We ___ all the way to Kraków.","p"],["drive","Have you ever ___ on the left?","pp"],
  ["fall","She ___ off her bike yesterday.","p"],["fall","Prices have ___ again this month.","pp"],
  ["fly","I have never ___ in a helicopter.","pp"],["forget","I ___ my password again this morning.","p"],
  ["forget","Have you ___ my birthday?","pp"],["lose","We ___ the match 3–0.","p"],
  ["pay","Who ___ for dinner last night?","p"],["sell","They have ___ their old house.","pp"],
  ["send","I ___ you the file an hour ago.","p"],["spend","We ___ too much money in Paris.","p"],
  ["teach","My father ___ me how to swim.","p"],["wear","She ___ a red dress to the wedding.","p"],
  ["win","Our team has ___ every game this season.","pp"],["grow","The tree ___ very fast last year.","p"],
  ["grow","You've ___ so much since I last saw you!","pp"],["throw","He ___ the ball over the fence.","p"],
  ["show","Has he ___ you his new car?","pp"],["ride","Have you ever ___ a horse?","pp"],
  ["wake","I ___ up at five this morning.","p"],["become","She ___ a doctor in 2019.","p"],
  ["hear","I ___ a strange noise in the night.","p"],["feel","I ___ much better after a good sleep.","p"],
  ["keep","She has ___ every letter he sent her.","pp"],["draw","My son ___ a picture of our dog.","p"],
  ["stand","We ___ in the queue for an hour.","p"],["understand","I've never ___ how this machine works.","pp"],
  ["build","They ___ a new bridge last year.","p"],["hold","She ___ the baby while I cooked.","p"],
  ["ring","Has the bell ___ yet?","pp"],["mean","Sorry, that came out wrong. I ___ something else.","p"],

  ["steal","My bike has been ___!","pp"],["hide","The cat ___ under the bed during the storm.","p"],
  ["hide","The keys were ___ under a stone.","pp"],["freeze","The lake ___ last winter.","p"],
  ["freeze","The pipes have ___ again.","pp"],["shake","His hands ___ before the exam.","p"],
  ["bite","I've been ___ by mosquitoes!","pp"],["bite","The dog ___ the postman.","p"],
  ["tear","She ___ the letter into pieces.","p"],["lead","Poor planning ___ to inevitable delays.","p"],
  ["deal","The manager ___ with the problem quickly.","p"],["lay","She ___ the baby gently in the cot.","p"],
  ["rise","Prices have ___ by ten per cent.","pp"],["shoot","He ___ the ball straight into the goal.","p"],
  ["forgive","Has she ___ you yet?","pp"],["dig","The dog ___ a hole in the garden.","p"],
  ["hang","We ___ the pictures on the wall.","p"],["sink","The ship ___ in a storm in 1912.","p"],
  ["burn","I ___ the toast again.","p"],["light","They ___ a fire on the beach.","p"],
  ["feed","Have you ___ the cat?","pp"],["stick","The stamp ___ to my finger.","p"],
  ["upset","His arbitrary decision ___ the whole team.","p"],["blow","The wind ___ the door shut.","p"],
  ["fight","The two brothers ___ all the time as children.","p"],["shine","The sun ___ all day.","p"],
  ["bend","He ___ down to tie his shoe.","p"],["spread","The news ___ quickly through the village.","p"],

  ["seek","The company ___ advice from a lawyer.","p"],["flee","Thousands of people ___ the city.","p"],
  ["strike","The clock ___ midnight.","p"],["strike","The town has been ___ by lightning twice.","pp"],
  ["forbid","Phones are ___ during the exam.","pp"],["overcome","She ___ her fear of flying.","p"],
  ["sweep","He ___ the floor after the party.","p"],["swear","He ___ he was telling the truth.","p"],
  ["shrink","My jumper ___ in the wash.","p"],["shrink","My jumper has ___ in the wash.","pp"],
  ["bleed","His knee ___ badly after the fall.","p"],["withdraw","The offer has been ___.","pp"],
  ["undertake","They ___ a full review of the system.","p"],["kneel","She ___ down to talk to the child.","p"],
  ["slide","The car ___ on the ice.","p"],["sting","A wasp ___ me on the arm.","p"],
  ["bear","The costs will be ___ by the company.","pp"],["creep","The cat ___ silently towards the bird.","p"],
  ["cling","The child ___ to her mother's hand.","p"],["mistake","I ___ him for his brother.","p"],
  ["spring","The cat ___ onto the table.","p"],["weep","She ___ when she heard the news.","p"],
  ["grind","The coffee had been freshly ___.","pp"],["breed","These dogs were ___ for hunting.","pp"],

  ["arise","Problems ___ that nobody had expected.","p"],["arise","A plausible explanation has finally ___.","pp"],
  ["foresee","Few experts had ___ the crisis.","pp"],["mislead","The figures ___ investors about the real risks.","p"],
  ["overtake","The cyclist ___ the bus on the hill.","p"],["withhold","Important information was ___ from the public.","pp"],
  ["lie","He ___ on the beach all afternoon.","p"],["lie","The letter had ___ unopened on the desk for weeks.","pp"],
  ["weave","She ___ a basket from palm leaves.","p"],["tread","Someone had ___ mud all over the carpet.","pp"],
  ["forecast","Last year the experts ___ an inevitable slowdown.","p"],["bind","We are legally ___ by the contract.","pp"],
  ["cast","The trees ___ long shadows across the lawn.","p"],["strive","They have ___ to make the system less vulnerable.","pp"],
  ["wind","The road ___ through the mountains.","p"],["uphold","The court ___ the original decision.","p"],
  ["overthrow","The government was ___ in 1989.","pp"],["stride","She ___ into the room as if she owned it.","p"],
  ["shed","The trees have ___ their leaves.","pp"],["wring","She ___ the water out of the towel.","p"],

  ["forsake","The village was ___ by its people long ago.","pp"],["slay","The knight ___ the dragon.","p"],
  ["slay","Thousands were ___ in the battle.","pp"],["smite","He was completely ___ with her.","pp"],
  ["behold","They ___ a breathtaking view from the summit.","p"],["beget","In the old story, violence ___ more violence.","p"],
  ["override","The manager ___ the committee's arbitrary decision.","p"],["override","The safety system had been ___ deliberately.","pp"],
  ["outgrow","The children have ___ their shoes again.","pp"],["outdo","She ___ herself with this performance.","p"],
  ["shear","The sheep were ___ in spring.","pp"],["bid","At yesterday's auction he ___ five hundred euros for the painting.","p"],
  ["slink","The fox ___ away into the trees.","p"],["beseech","She ___ him to stay.","p"],
  ["strew","Clothes were ___ all over the floor.","pp"],["underlie","Deeper problems had ___ the dispute for years.","pp"]
].map(([v,s,f,a])=>({v,s,f,a}));
const PASS=[
  [0,"Yesterday I *went* to the market and *bought* some apples. Then I walked home and cooked dinner."],
  [0,"We *had* a great weekend. We *swam* in the lake and played football."],
  [0,"She *wrote* a letter to her friend and *sent* it in the morning."],
  [0,"Last night I *ate* pizza, watched a film and *slept* for ten hours."],
  [0,"Tom *came* home late. He opened the door quietly and *sat* down."],
  [0,"I *met* Anna at the station. We talked for an hour and then I *took* the bus home."],
  [0,"My brother *found* my old phone. He *gave* it back to me and smiled."],
  [1,"I have *lost* my keys. I *thought* I *left* them on the table, but I checked and they *were* not there.","Have is present here, so it doesn't count. Were is the past of be."],
  [1,"When I *was* a child, I *broke* my leg. My mum *drove* me to hospital and the doctor helped me."],
  [1,"We *spent* the day at the beach. The sun *shone* all day and we played volleyball."],
  [1,"He *taught* English for years, then he *became* a writer and moved to London."],
  [1,"I *heard* a noise, so I *got* up and looked outside. It *was* only the wind."],
  [1,"They *won* the first match but *lost* the second, so they practised every day."],
  [2,"The thief *stole* a bike, *hid* it behind a shop and *ran* away. The police arrested him later."],
  [2,"The lake *froze* last winter, so we skated on it every weekend."],
  [2,"Poor planning *led* to inevitable delays, and the manager *dealt* with the problem badly."],
  [2,"The dog *dug* a hole and buried its bone. Then it *lay* in the sun.","Lay here is the past of lie (be lying down). Buried is regular."],
  [2,"Prices have *risen* again. My parents *felt* worried and decided to save more."],
  [2,"His excuse sounded plausible, but we *knew* he *was* lying."],
  [3,"She *sought* advice, *overcame* her fears and finally *undertook* the project alone."],
  [3,"Thousands *fled* the city when the storm *struck*. Many homes *were* destroyed."],
  [3,"My jumper *shrank* in the wash, so I returned it to the shop."],
  [3,"The witness *swore* she *had* *seen* nothing, but her story seemed far from coherent.","Seemed is regular, even though seek → sought is not."],
  [3,"He *knelt* down and *swept* up the *broken* glass, then he washed his hands.","Broken is the past participle of break, used here as an adjective."],
  [4,"Problems *arose* that nobody *had* *foreseen*, and the figures *misled* investors about the inherent risks."],
  [4,"He *lay* on the sofa all afternoon and lied to his boss about being ill.","Lied (said something untrue) is regular. Lay is the past of lie (be lying down)."],
  [4,"The road *wound* through the hills, and the trees *cast* long shadows over it."],
  [4,"Crucial data *was* *withheld*, which *left* the system vulnerable."],
  [5,"The knight *slew* the dragon, and the village, long *forsaken*, slowly returned to life."],
  [5,"Hardly *had* we *begun* when the manager *overrode* the committee's arbitrary decision."],
  [5,"She *besought* him to stay, but he *strode* out of the room without a word."],
  [5,"The sheep, newly *shorn*, *stood* shivering in the field."],
  [5,"Violence *begot* more violence, and the old order slowly crumbled.","Crumbled is regular."]
].map(([lv,t,n])=>({lv,t,n:n||""}));
const PATS={AAA:["All three the same","cut – cut – cut"],ABB:["Past and participle the same","buy – bought – bought"],ABA:["Participle goes back to the base","come – came – come"],ABC:["All three different","write – wrote – written"]};
const vpat=v=>{ const b=v.b,p=v.p[0],q=v.pp[0]; return b===p&&p===q?"AAA":p===q?"ABB":b===q?"ABA":"ABC"; };
const vforms=v=>`${v.b} → ${v.p.join(" / ")} → ${v.pp.join(" / ")}`;
const COLLIDE=new Set([...IV.map(v=>v.b),...REG.map(r=>r.b)]);
function regPast(b){ if(/e$/.test(b)) return b+"d"; if(/[^aeiou]y$/.test(b)) return b.slice(0,-1)+"ied";
  if(/^[^aeiou]*[aeiou][^aeiouwxy]$/.test(b)) return b+b.slice(-1)+"ed"; return b+"ed"; }
function acceptForm(val,list){ const parts=norm(val).split(/\s*(?:\/|,|\bor\b)\s*/).filter(Boolean); return parts.length>0 && parts.every(x=>list.includes(x)); }
const vpool=()=>IV.filter(v=>v.lv<=lvl());
const vMastered=b=>{ const s=(lab.vstat||{})[b]; return !!s && s[0]>=3 && s[0]/s[1]>=.8; };
function vrec(b,ok){ if(!b) return; lab.vstat=lab.vstat||{}; const s=lab.vstat[b]||[0,0]; s[1]++; if(ok) s[0]++; lab.vstat[b]=s; saveLab(); }
function vweight(v){ const L=lvl(), s=(lab.vstat||{})[v.b]; let w=v.lv>=L-1?3:1;
  if(!s) w*=1.5; else w*=1+Math.max(0,s[1]-s[0])*1.5; if(vMastered(v.b)) w*=.4; return Math.max(.15,w); }
function wpick(arr,wf){ const ws=arr.map(wf); let t=ws.reduce((a,b)=>a+b,0)*Math.random(); for(let i=0;i<arr.length;i++){ t-=ws[i]; if(t<=0) return arr[i]; } return arr[arr.length-1]; }
let lastV=[];
function pickVerb(filter){ const f=filter||(()=>true); let pool=vpool().filter(v=>f(v)&&!lastV.includes(v.b)); if(!pool.length) pool=vpool().filter(f); if(!pool.length) pool=vpool();
  const v=wpick(pool,vweight); lastV=[v.b,...lastV].slice(0,6); return v; }
const frameAnswer=fr=>{ const v=IVB[fr.v]; return fr.a?[fr.a]:(fr.f==="p"?v.p:v.pp); };
function wrongForms(fr){ const v=IVB[fr.v], ok=frameAnswer(fr);
  const c = v.b==="be" ? ["was","were","been"] : [fr.f==="p"?v.pp[0]:v.p[0], regPast(v.b), v.b];
  return [...new Set(c)].filter(x=>!ok.includes(x)); }
function pickFrame(){ const L=lvl(); let pool=FRAMES.filter(f=>IVB[f.v].lv<=L && !lastV.includes(f.v)); if(!pool.length) pool=FRAMES.filter(f=>IVB[f.v].lv<=L);
  const fr=wpick(pool,f=>vweight(IVB[f.v])); lastV=[fr.v,...lastV].slice(0,6); return fr; }
const formName=(v,f)=>{ const a=v.p.includes(f), b=v.pp.includes(f); return a&&b?"past simple and past participle":a?"past simple":"past participle"; };
const FRAMEWHY={p:"A finished action in the past → past simple.",pp:"After have, has or had, and in passive sentences (is, was, been + …), use the past participle."};
function vbReset(){ vb.q=null; lastV=[]; stopBlitz(); }
const VMODES=[["table","Verb table"],["sort","Regular or irregular?"],["forms","Three forms"],["spot","Spot them"],["fill","Fill the gap"],["fix","Fix the mistake"],["match","Match pairs"],["blitz","60-second blitz"]];
function roomVerbs(){
  if(!VMODES.some(m=>m[0]===vb.mode)) vb.mode="table";
  $("#room").innerHTML=`<div class="vmodes" role="tablist" aria-label="Irregular verb exercises">${VMODES.map(([id,l])=>`<button class="pick" type="button" role="tab" data-vm="${id}" aria-pressed="${vb.mode===id}">${l}</button>`).join("")}</div><div id="vroom"></div>`;
  $$("[data-vm]").forEach(b=>b.onclick=()=>{ if(vb.mode===b.dataset.vm) return; vb.mode=b.dataset.vm; lab.vmode=vb.mode; saveLab(); vb.q=null; stopBlitz(); roomVerbs(); });
  ({table:vTable,sort:vSort,forms:vForms,spot:vSpot,fill:vFill,fix:vFix,match:vMatch,blitz:vBlitz})[vb.mode]();
}
const vHud=left=>`<div class="hud"><span>${left}</span><span class="streak">${vb.streak>=2?`Streak ${vb.streak}`:""}</span></div>`;
function vGood(el,base){ vb.streak++; track(true); vrec(base,true); const big=vb.streak%5===0; addXP(big?5:2); burst(el,big?14:7); }
function vBad(base){ vb.streak=0; track(false); vrec(base,false); const p=$("#vroom .panel"); if(p){ p.classList.remove("flash-no"); void p.offsetWidth; p.classList.add("flash-no"); } }
const vNext=(label="Next")=>`<div class="row"><button class="btn" type="button" id="vNext">${label} →</button></div>`;
const sayBtn=v=>`<button class="say" type="button" data-say="${esc(v.b+", "+v.p[0]+", "+v.pp[0])}" aria-label="Listen to ${esc(v.b)}">${ico("sound")}</button>`;
const wireSay=root=>root.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>speak(b.dataset.say));
function vTable(){
  const pool=vpool(); const m=pool.filter(v=>vMastered(v.b)).length;
  $("#vroom").innerHTML=`<div class="panel">
    <div class="hud"><span>${pool.length} irregular verbs at ${LV[lvl()]} · ${m} mastered</span><span class="counter">Each row: base → past simple → past participle</span></div>
    <p style="margin:0 0 14px;max-width:62ch">Learn them in groups: verbs that change in the same way are easier to remember together. Tap the speaker to hear all three forms.</p>
    <div class="vtools">
      <label class="sr" for="vSearch">Find a verb</label>
      <input class="tin" id="vSearch" type="search" placeholder="Find a verb…" value="${esc(vb.search)}" autocomplete="off" spellcheck="false">
      <button class="pick" type="button" id="vHide" aria-pressed="${vb.hide}">Test myself: hide the forms</button>
    </div>
    <div id="vlist"></div></div>`;
  const draw=()=>{ const q=vb.search.trim().toLowerCase(); const list=pool.filter(v=>!q||[v.b,...v.p,...v.pp].some(x=>x.startsWith(q)));
    const html=["AAA","ABB","ABA","ABC"].map(k=>{ const items=list.filter(v=>vpat(v)===k); if(!items.length) return "";
      return `<section class="vgroup"><h3>${PATS[k][0]} <span>${PATS[k][1]}</span> <em>${items.length}</em></h3>
        <div class="vtable">${items.map(v=>`<div class="vrow${vMastered(v.b)?" mastered":""}">
          <span class="f b">${esc(v.d||v.b)}${v.lv===lvl()&&lvl()>0?' <small>new</small>':""}</span>
          <button class="f${vb.hide?" hid":""}" type="button" data-rev aria-label="Past simple of ${esc(v.b)}: ${esc(v.p.join(" or "))}">${esc(v.p.join(" / "))}</button>
          <button class="f${vb.hide?" hid":""}" type="button" data-rev aria-label="Past participle of ${esc(v.b)}: ${esc(v.pp.join(" or "))}">${esc(v.pp.join(" / "))}</button>
          ${sayBtn(v)}${v.n?`<span class="vnote">${esc(v.n)}</span>`:""}</div>`).join("")}</div></section>`; }).join("");
    $("#vlist").innerHTML = html || `<p class="counter">No verb at ${LV[lvl()]} starts with “${esc(q)}”. Try a higher level.</p>`;
    $$("#vlist [data-rev]").forEach(b=>b.onclick=()=>{ if(vb.hide) b.classList.toggle("hid"); });
    wireSay($("#vlist")); };
  draw();
  $("#vSearch").addEventListener("input",e=>{ vb.search=e.target.value; draw(); });
  $("#vHide").onclick=()=>{ vb.hide=!vb.hide; vTable(); };
}
function vSortQ(){ const L=lvl();
  if(Math.random()<.5){ const v=pickVerb(x=>x.b!=="be"); return {irr:true,v,disp:v.d||v.b}; }
  const pool=REG.filter(r=>r.lv<=L); const r=wpick(pool,r=>(r.lv>=L-1&&r.n?3:1)); return {irr:false,r,disp:r.d||r.b}; }
function vSort(){
  if(!vb.q) vb.q=vSortQ(); const q=vb.q;
  $("#vroom").innerHTML=`<div class="panel">${vHud("Regular verbs just add -ed. Irregular verbs change in their own way.")}
    <p class="qkind">Regular or irregular?</p>
    <p class="bigverb">${esc(q.disp)}</p>
    <div class="bigopts vbig" style="max-width:440px"><button class="opt" type="button" data-a="reg">Regular</button><button class="opt" type="button" data-a="irr">Irregular</button></div>
    <div id="vFb" aria-live="polite"></div></div>`;
  $$("#vroom [data-a]").forEach(b=>b.onclick=()=>{
    if(q.done) return; q.done=true; const ok=(b.dataset.a==="irr")===q.irr;
    $$("#vroom [data-a]").forEach(x=>{ x.disabled=true; if((x.dataset.a==="irr")===q.irr) x.classList.add("right"); }); if(!ok) b.classList.add("wrong");
    const info = q.irr ? `<strong>Irregular:</strong> ${esc(vforms(q.v))}.${q.v.n?" "+esc(q.v.n):""}` : `<strong>Regular:</strong> ${esc(q.r.b)} → ${esc(q.r.p)}.${q.r.n?" "+esc(q.r.n):" Just add -ed."}`;
    if(ok) vGood(b,q.irr?q.v.b:null); else vBad(q.irr?q.v.b:null);
    $("#vFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"✓ Yes!":"✕ Not quite."} ${info}</div>${vNext()}`;
    $("#vNext").onclick=()=>{ vb.q=null; vSort(); }; $("#vNext").focus({preventScroll:true});
    const note=q.irr?q.v.n:q.r.n;
    if(ok && !note) setTimeout(()=>{ if(vb.q===q && vb.mode==="sort" && $("#vNext")){ vb.q=null; vSort(); } },1300);
  });
}
function vFormsQ(){
  if(vb.dir==="find") for(let i=0;i<60;i++){ const v=pickVerb(x=>x.b!=="be"); const forms=[...new Set([v.p[0],v.pp[0]])].filter(f=>f!==v.b && !COLLIDE.has(f));
    if(forms.length) return {dir:"find",v,f:pick(forms),tries:0}; }
  return {dir:"base",v:pickVerb(),tries:0};
}
function vForms(){
  if(!vb.q) vb.q=vFormsQ(); const q=vb.q, v=q.v;
  const dirBar=`<div class="picks" style="margin-bottom:14px"><button class="pick" type="button" data-dir="base" aria-pressed="${vb.dir==="base"}">Give the forms</button><button class="pick" type="button" data-dir="find" aria-pressed="${vb.dir==="find"}">Find the base verb</button></div>`;
  $("#vroom").innerHTML=`<div class="panel">${dirBar}${vHud(q.dir==="base"?"Type both forms. If there are two correct forms, either one is fine.":"Which verb does this form come from?")}
    ${q.dir==="base"
      ? `<p class="qkind">Write the past simple and past participle</p>
         <p class="bigverb">${esc(v.d||v.b)} <button class="say" type="button" data-say="${esc(v.b)}" aria-label="Listen to ${esc(v.b)}">${ico("sound")}</button></p>
         <div class="forms3"><label for="fP">Past simple<input class="tin" id="fP" autocomplete="off" autocapitalize="off" spellcheck="false"></label>
           <label for="fPP">Past participle<input class="tin" id="fPP" autocomplete="off" autocapitalize="off" spellcheck="false"></label></div>`
      : `<p class="qkind">Write the base form</p>
         <p class="bigverb">${esc(q.f)}</p>
         <div class="forms3"><label for="fB">Base form<input class="tin" id="fB" autocomplete="off" autocapitalize="off" spellcheck="false"></label></div>`}
    <div class="row"><button class="btn" type="button" id="fChk">Check</button><button class="btn ghost" type="button" id="fHint">Hint</button><button class="btn ghost" type="button" id="fSkip">Skip</button></div>
    <div id="vFb" aria-live="polite"></div></div>`;
  wireSay($("#vroom"));
  $$("[data-dir]").forEach(b=>b.onclick=()=>{ if(vb.dir===b.dataset.dir) return; vb.dir=b.dataset.dir; vb.q=null; vForms(); });
  const ins=q.dir==="base"?[$("#fP"),$("#fPP")]:[$("#fB")];
  ins[0].focus({preventScroll:true});
  const mark=(el,ok)=>{ el.classList.remove("right","wrong"); el.classList.add(ok?"right":"wrong"); };
  const done=ok=>{
    const extra = q.dir==="find" ? `<b>${esc(q.f)}</b> is the ${formName(v,q.f)} of <b>${esc(v.b)}</b>: ` : "";
    $("#vFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"✓ Right.":"The answer:"} ${extra}${esc(vforms(v))}.${v.n?" "+esc(v.n):""}</div>${vNext()}`;
    $("#vNext").onclick=()=>{ vb.q=null; vForms(); }; $("#vNext").focus({preventScroll:true}); ins.forEach(i=>i.readOnly=true); };
  const check=()=>{
    if(q.done) return; if(ins.some(i=>!i.value.trim())){ ins.find(i=>!i.value.trim()).focus(); return; }
    let ok;
    if(q.dir==="base"){ const a=acceptForm(ins[0].value,v.p), b=acceptForm(ins[1].value,v.pp); mark(ins[0],a); mark(ins[1],b); ok=a&&b; }
    else { ok=(FORMIDX[q.f]||[v.b]).some(x=>acceptForm(ins[0].value,[x])); mark(ins[0],ok); }
    if(ok){ q.done=true; if(q.tries===0) vGood(ins[ins.length-1],v.b); speak(`${v.b}, ${v.p[0]}, ${v.pp[0]}`); done(true); return; }
    q.tries++; if(q.tries===1) vBad(v.b);
    if(q.tries>=2){ q.done=true; done(false); return; }
    $("#vFb").innerHTML=`<div class="feedback no">✕ Not yet. Fix the red box and check again.</div>`;
  };
  $("#fChk").onclick=check;
  ins.forEach((el,i)=>el.addEventListener("keydown",e=>{ if(e.key!=="Enter") return; e.preventDefault(); if(i<ins.length-1 && !ins[i+1].value.trim()) ins[i+1].focus(); else check(); }));
  $("#fHint").onclick=()=>{ if(q.done) return; $("#vFb").innerHTML=`<div class="callout">${q.dir==="base"
    ? `Pattern: ${esc(PATS[vpat(v)][0].toLowerCase())}, like ${esc(PATS[vpat(v)][1])}. The forms start with <b>${esc(v.p[0][0])}…</b> and <b>${esc(v.pp[0][0])}…</b>`
    : `It starts with <b>${esc(v.b[0])}</b> and has ${v.b.length} letters.`}</div>`; };
  $("#fSkip").onclick=()=>{ vb.q=null; vForms(); };
}
function vSpotQ(){ const L=lvl(); let pool=PASS.filter(p=>p.lv<=L && p.lv>=L-2 && p!==vb.lastPass); if(!pool.length) pool=PASS.filter(p=>p.lv<=L);
  const p=pick(pool); vb.lastPass=p;
  const toks=p.t.split(" ").map(tok=>{ const m=tok.match(/^([^*]*)\*([^*]+)\*(.*)$/); return m?{show:m[1]+m[2]+m[3],w:m[2].toLowerCase(),t:true}:{show:tok,t:false}; });
  return {p,toks,sel:new Set(),done:false}; }
function vSpot(){
  if(!vb.q) vb.q=vSpotQ(); const q=vb.q; const n=q.toks.filter(t=>t.t).length;
  $("#vroom").innerHTML=`<div class="panel">${vHud("Was, were, had and did count too. Regular -ed verbs don't.")}
    <p class="qkind">Tap every irregular past form</p>
    <p class="counter" id="spCount">${q.sel.size} selected</p>
    <div class="passage">${q.toks.map((t,i)=>`<button class="ptok" type="button" data-i="${i}" aria-pressed="${q.sel.has(i)}">${esc(t.show)}</button>`).join("")}</div>
    <div class="row"><button class="btn" type="button" id="spChk">Check</button></div>
    <div id="vFb" aria-live="polite"></div></div>`;
  $$(".ptok").forEach(b=>b.onclick=()=>{ if(q.done) return; const i=+b.dataset.i; if(q.sel.has(i)) q.sel.delete(i); else q.sel.add(i);
    b.classList.toggle("on",q.sel.has(i)); b.setAttribute("aria-pressed",String(q.sel.has(i))); $("#spCount").textContent=`${q.sel.size} selected`; });
  $("#spChk").onclick=()=>{
    if(q.done) return; if(!q.sel.size){ $("#spCount").textContent="Tap at least one word first."; return; } q.done=true;
    let found=0, wrong=0;
    $$(".ptok").forEach(b=>{ const i=+b.dataset.i, t=q.toks[i], on=q.sel.has(i); b.disabled=true; b.classList.remove("on");
      if(t.t&&on){ b.classList.add("right"); found++; } else if(t.t){ b.classList.add("missed"); } else if(on){ b.classList.add("wrong"); wrong++; } });
    const ok=found===n && !wrong;
    q.toks.filter(t=>t.t).forEach((t,k)=>vrec((FORMIDX[t.w]||[])[0], q.sel.has(q.toks.indexOf(t))));
    if(ok) vGood($("#spChk"),null); else vBad(null);
    const list=q.toks.filter(t=>t.t).map(t=>`<span>${esc(t.w)} ← ${esc((FORMIDX[t.w]||["?"])[0])}</span>`).join("");
    $("#vFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}" style="max-width:640px">${ok?`✓ All ${n} found!`:`You found ${found} of ${n}${wrong?` and tapped ${wrong} that ${wrong===1?"isn't":"aren't"} irregular past forms`:""}.`} ${q.p.n?esc(q.p.n):""}
      <div class="pairs">${list}</div></div>${vNext("Next text")}`;
    $("#vNext").onclick=()=>{ vb.q=null; vSpot(); }; $("#vNext").focus({preventScroll:true});
  };
}
function vFill(){
  if(!vb.fillType) vb.fillType = lvl()>=3?"type":"choose";
  if(!vb.q){ const fr=pickFrame(); vb.q={fr,opts:shuffle([frameAnswer(fr)[0],...wrongForms(fr).slice(0,3)]),tries:0,done:false}; }
  const q=vb.q, fr=q.fr, v=IVB[fr.v], ans=frameAnswer(fr);
  const sent=esc(fr.s).replace("___",`<span class="blank" id="blank">&nbsp;</span> <span class="hintverb">(${esc(v.d?v.d.replace(" (= "," = ").replace(/\)$/,""):v.b)})</span>`);
  $("#vroom").innerHTML=`<div class="panel">
    <div class="picks" style="margin-bottom:14px"><button class="pick" type="button" data-ft="choose" aria-pressed="${vb.fillType==="choose"}">Choose the form</button><button class="pick" type="button" data-ft="type" aria-pressed="${vb.fillType==="type"}">Type the form</button></div>
    ${vHud("Past simple or past participle? Look at the words around the gap.")}
    <p class="gamebig">${sent}</p>
    ${vb.fillType==="choose"
      ? `<div class="bigopts vbig">${q.opts.map(o=>`<button class="opt" type="button" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>`
      : `<div class="inrow"><label class="sr" for="gIn">The missing verb</label><input class="tin" id="gIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type the verb"><button class="btn" type="button" id="gChk">Check</button></div>`}
    <div id="vFb" aria-live="polite"></div></div>`;
  $$("[data-ft]").forEach(b=>b.onclick=()=>{ if(vb.fillType===b.dataset.ft) return; vb.fillType=b.dataset.ft; vFill(); });
  const finish=ok=>{ q.done=true; const bl=$("#blank"); bl.textContent=ans[0]; bl.classList.add("filled");
    $("#vFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}" style="max-width:640px">${ok?"✓ Right.":`✕ The answer is <b>${esc(ans.join(" / "))}</b>.`} ${esc(FRAMEWHY[fr.f])} <span class="dim">${esc(vforms(v))}</span></div>${vNext()}`;
    $("#vNext").onclick=()=>{ vb.q=null; vFill(); }; $("#vNext").focus({preventScroll:true}); };
  if(vb.fillType==="choose") $$("#vroom .opt").forEach(b=>b.onclick=()=>{
    if(q.done) return; const ok=ans.includes(b.dataset.o);
    $$("#vroom .opt").forEach(x=>{ x.disabled=true; if(ans.includes(x.dataset.o)) x.classList.add("right"); }); if(!ok) b.classList.add("wrong");
    if(ok) vGood(b,v.b); else vBad(v.b); finish(ok); });
  else { const inp=$("#gIn"); inp.focus({preventScroll:true});
    const chk=()=>{ if(q.done||!inp.value.trim()) return; const ok=acceptForm(inp.value,ans); inp.classList.remove("right","wrong"); inp.classList.add(ok?"right":"wrong");
      if(ok){ inp.readOnly=true; if(q.tries===0) vGood(inp,v.b); finish(q.tries===0); return; }
      q.tries++; if(q.tries===1){ vBad(v.b); $("#vFb").innerHTML=`<div class="feedback no">✕ Not yet. ${esc(FRAMEWHY[fr.f])}</div>`; inp.select(); return; }
      inp.readOnly=true; finish(false); };
    $("#gChk").onclick=chk; inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); chk(); } }); }
}
function vFixQ(){ const fr=pickFrame(); const w=wrongForms(fr); const nonBase=w.filter(x=>x!==fr.v); const wrong=pick(nonBase.length&&Math.random()<.85?nonBase:w);
  const words=fr.s.split(" "); const idx=words.findIndex(t=>t.includes("___"));
  return {fr,wrong,idx,toks:words.map(t=>t.replace("___",wrong)),step:1,tapOk:false,tries:0,done:false}; }
function vFix(){
  if(!vb.q) vb.q=vFixQ(); const q=vb.q, fr=q.fr, v=IVB[fr.v], ans=frameAnswer(fr);
  $("#vroom").innerHTML=`<div class="panel">${vHud("Every sentence has one wrong verb form.")}
    <p class="qkind">${q.step===1?"Tap the wrong word":"Now type the correct form"}</p>
    <div class="passage">${q.toks.map((t,i)=>`<button class="ptok${q.step>1&&i===q.idx?" wrong strike":""}${q.step>1&&q.tapped===i&&i!==q.idx?" wrong":""}" type="button" data-i="${i}" ${q.step>1?"disabled":""}>${esc(t)}</button>`).join("")}</div>
    ${q.step===2?`<div class="inrow"><label class="sr" for="xIn">Correct form</label><input class="tin" id="xIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Correct form of ${esc(v.b)}"><button class="btn" type="button" id="xChk">Check</button></div>`:""}
    <div id="vFb" aria-live="polite">${q.step===2?`<p class="hintline">${q.tapOk?"✓ Well spotted.":"The mistake was here."} The verb is <b>${esc(v.d||v.b)}</b>.</p>`:""}</div></div>`;
  if(q.step===1){ $$(".ptok").forEach(b=>b.onclick=()=>{ const i=+b.dataset.i; q.tapped=i; q.tapOk=i===q.idx; q.step=2; if(!q.tapOk) vBad(v.b); vFix(); }); return; }
  const inp=$("#xIn"); inp.focus({preventScroll:true});
  const finish=ok=>{ q.done=true; inp.readOnly=true; const fixed=q.toks.map((t,i)=>i===q.idx?`<mark>${esc(fr.s.split(" ")[i].replace("___",ans[0]))}</mark>`:esc(t)).join(" ");
    $("#vFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}" style="max-width:640px">${ok?"✓ Fixed!":`✕ The correct form is <b>${esc(ans.join(" / "))}</b>.`} ${esc(FRAMEWHY[fr.f])}<div class="fixed">${fixed}</div></div>${vNext()}`;
    $("#vNext").onclick=()=>{ vb.q=null; vFix(); }; $("#vNext").focus({preventScroll:true}); };
  const chk=()=>{ if(q.done||!inp.value.trim()) return; const ok=acceptForm(inp.value,ans); inp.classList.remove("right","wrong"); inp.classList.add(ok?"right":"wrong");
    if(ok){ if(q.tapOk && q.tries===0) vGood(inp,v.b); finish(q.tapOk&&q.tries===0); return; }
    q.tries++; if(q.tries===1){ if(q.tapOk) vBad(v.b); inp.select(); $("#vFb").insertAdjacentHTML("beforeend",`<div class="feedback no">✕ Not yet. ${esc(FRAMEWHY[fr.f])}</div>`); return; }
    finish(false); };
  $("#xChk").onclick=chk; inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); chk(); } });
}
function vMatchQ(){ const which=Math.random()<.5?"p":"pp"; const chosen=[], used=new Set(); let guard=0;
  while(chosen.length<6 && guard++<300){ const v=pickVerb(x=>x.b!=="be" && !chosen.includes(x)); const f=v[which][0];
    if(chosen.includes(v)||f===v.b||used.has(f)||COLLIDE.has(f)) continue; chosen.push(v); used.add(f); }
  const cards=shuffle([...chosen.map(v=>({k:"b",v,t:v.b})),...chosen.map(v=>({k:"f",v,t:v[which][0]}))]);
  return {which,cards,n:chosen.length,sel:null,done:new Set(),miss:0,t0:Date.now(),fin:false,bad:[]}; }
function vMatch(){
  if(!vb.q) vb.q=vMatchQ(); const q=vb.q;
  const label=q.which==="p"?"past simple":"past participle";
  $("#vroom").innerHTML=`<div class="panel">
    <div class="hud"><span>Pairs ${q.done.size/2} of ${q.n} · Mistakes ${q.miss}</span><span class="counter">Verbs in plain type, ${label} forms in italics</span></div>
    <p class="qkind">Match each verb with its ${label}</p>
    <div class="mgrid">${q.cards.map((c,i)=>`<button class="mc ${c.k==="f"?"form":""}${q.done.has(i)?" done":""}${q.sel===i?" sel":""}${q.bad.includes(i)?" bad":""}" type="button" data-i="${i}" ${q.done.has(i)?"disabled":""} aria-pressed="${q.sel===i}">${esc(c.t)}</button>`).join("")}</div>
    <div id="vFb" aria-live="polite"></div></div>`;
  q.bad=[];
  if(q.fin){ const secs=Math.round((q.end-q.t0)/1000);
    $("#vFb").innerHTML=`<div class="endcard"><p class="score">${secs}s</p><p style="margin:4px 0">Board cleared with ${q.miss} ${q.miss===1?"mistake":"mistakes"}. ${q.miss===0?"Perfect! +8 XP":"+4 XP"}</p>
      <div class="pairs">${q.cards.filter(c=>c.k==="b").map(c=>`<span>${esc(c.v.b)} → ${esc(c.v[q.which][0])}</span>`).join("")}</div>${vNext("New board")}</div>`;
    $("#vNext").onclick=()=>{ vb.q=null; vMatch(); }; $("#vNext").focus({preventScroll:true}); }
  $$(".mc").forEach(b=>b.onclick=()=>{ if(q.fin) return; const i=+b.dataset.i; if(q.done.has(i)) return;
    if(q.sel===null||q.sel===i){ q.sel=q.sel===i?null:i; vMatch(); return; }
    const a=q.cards[q.sel], c=q.cards[i];
    if(a.k===c.k){ q.sel=i; vMatch(); return; }
    if(a.v===c.v){ q.done.add(q.sel); q.done.add(i); q.sel=null; track(true); vrec(a.v.b,true); addXP(1);
      if(q.done.size===q.n*2){ q.fin=true; q.end=Date.now(); addXP(q.miss===0?8:4); }
      vMatch(); burst($(`.mc[data-i="${i}"]`),q.fin?14:6); return; }
    q.miss++; track(false); vrec((a.k==="b"?a.v:c.v).b,false); q.bad=[q.sel,i]; q.sel=null; vMatch(); });
}
function blitzQ(){ const v=pickVerb(x=>x.b!=="be"); const which=Math.random()<.5?"p":"pp"; const ok=v[which];
  const other=pick(vpool().filter(x=>x!==v && x.b!=="be"));
  const c=[...new Set([v[which==="p"?"pp":"p"][0], regPast(v.b), v.b, other[which][0]])].filter(x=>!ok.includes(x)).slice(0,3);
  return {v,which,a:ok,o:shuffle([ok[0],...c])}; }
function vBlitz(){
  const R=$("#vroom");
  if(!blitz){
    R.innerHTML=`<div class="panel"><p class="gamebig" style="margin-top:0">How many verb forms can you get in 60 seconds?</p>
      <p class="counter">Verbs from ${LV[lvl()]} and below. A wrong answer costs 3 seconds. Best so far: ${lab.best.vblitz||0}</p>
      <div class="row"><button class="btn" type="button" id="bGo">Start</button></div></div>`;
    $("#bGo").onclick=()=>{ blitz={left:60,score:0,q:blitzQ(),over:false,lock:false};
      blitzTimer=setInterval(()=>{ if(!blitz||!$("#bPanel")){ stopBlitz(); return; } blitz.left--; const t=$("#bTimer");
        if(t){ t.querySelector("i").style.width=(blitz.left/60*100)+"%"; t.classList.toggle("low",blitz.left<=10); $("#bLeft").textContent=blitz.left+"s"; }
        if(blitz.left<=0){ clearInterval(blitzTimer); blitzTimer=null; blitz.over=true; vBlitz(); } },1000);
      vBlitz(); };
    return;
  }
  if(blitz.over){
    const best=blitz.score>(lab.best.vblitz||0); if(best){ lab.best.vblitz=blitz.score; saveLab(); }
    R.innerHTML=`<div class="panel endcard"><p class="score">${blitz.score}</p><p style="margin:4px 0">verb forms right</p>
      <p class="counter">${best?"New best!":`Best: ${lab.best.vblitz||0}`}</p>
      <div class="row" style="justify-content:center"><button class="btn" type="button" id="bAgain">Play again</button></div></div>`;
    if(best && blitz.score>0) burst($(".endcard .score"),16);
    $("#bAgain").onclick=()=>{ blitz=null; vBlitz(); };
    return;
  }
  const q=blitz.q;
  R.innerHTML=`<div class="panel" id="bPanel">
    <div class="hud"><span>Score ${blitz.score}</span><span id="bLeft">${blitz.left}s</span></div>
    <div class="timer${blitz.left<=10?" low":""}" id="bTimer"><i style="width:${blitz.left/60*100}%"></i></div>
    <p class="qkind">${q.which==="p"?"Past simple":"Past participle"} of</p>
    <p class="bigverb">${esc(q.v.d||q.v.b)}</p>
    <div class="bigopts vbig">${q.o.map(o=>`<button class="opt" type="button" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div></div>`;
  $$("#bPanel .opt").forEach(b=>b.onclick=()=>{ if(blitz.lock) return; blitz.lock=true;
    const ok=q.a.includes(b.dataset.o); track(ok); vrec(q.v.b,ok);
    if(ok){ blitz.score++; addXP(1); burst(b,5); b.classList.add("right"); }
    else { blitz.left=Math.max(0,blitz.left-3); b.classList.add("wrong"); $$("#bPanel .opt").forEach(x=>{ if(q.a.includes(x.dataset.o)) x.classList.add("right"); }); }
    setTimeout(()=>{ if(!blitz||blitz.over) return; blitz.lock=false; blitz.q=blitzQ(); vBlitz(); }, ok?250:900); });
}
const gst = { mode:{}, q:null, done:false, right:0, seen:0, streak:0, queue:{}, typed:"" };
function grNote(r){ const lg=typeof helpLang==="function"?helpLang():"";
  if(lg==="pl" && r.pl) return `<p class="artnote" lang="pl"><span class="l1flag">PL</span>${esc(r.pl)}</p>`;
  if(lg==="ro" && r.ro) return `<p class="artnote" lang="ro"><span class="l1flag">RO</span>${esc(r.ro)}</p>`;
  return r.en ? `<p class="artnote"><b>Polish and Romanian speakers:</b> ${esc(r.en)}</p>` : ""; }
function grNext(key, kind, list){ const L=lvl(); let pool=list.filter(x=>x.lv<=L+1); if(pool.length<6) pool=list.slice();
  const k=key+kind; let q=gst.queue[k]; if(!q||!q.length||q.lvl!==L){ q=shuffle(pool.slice()); q.lvl=L; gst.queue[k]=q; } return q.pop(); }
function roomGram(key){
  const G=GR[key]; const mode=gst.mode[key]||"rules";
  const modes=[["rules","Rules"],["practise","Practise"],["fix","Fix the sentence"]];
  const bar=`<div class="picks" style="margin-bottom:16px" role="group" aria-label="${esc(G.t)} practice">${modes.map(([m,l])=>`<button class="pick" type="button" data-gm="${m}" aria-pressed="${mode===m}">${l}</button>`).join("")}</div>`;
  const hud=()=>`<div class="hud"><span>${gst.seen?`${gst.right} of ${gst.seen} right`:"Answer to start your score"}</span><span class="streak">${gst.streak>=2?`Streak ${gst.streak}`:""}</span></div>`;
  const wire=()=>$$("[data-gm]").forEach(b=>b.onclick=()=>{ if(mode===b.dataset.gm) return; gst.mode[key]=b.dataset.gm; gst.q=null; gst.done=false; roomGram(key); });
  const score=(ok,btn)=>{ gst.seen++; track(ok); if(ok){ gst.right++; gst.streak++; addXP(2); if(btn) burst(btn,5); } else gst.streak=0; };
  const ruleLink=i=>`<button class="linkbtn" type="button" data-grule="${i}">Rule: ${esc(G.rules[i].t)}</button>${trAsk(key+"."+i)}`;
  const wireRule=()=>$$("[data-grule]").forEach(b=>b.onclick=()=>{ gst.mode[key]="rules"; gst.focus=+b.dataset.grule; gst.q=null; roomGram(key); });
  if(gst.key!==key){ gst.key=key; gst.q=null; gst.done=false; }
  if(mode==="rules"){
    $("#room").innerHTML=`<div class="panel">${bar}${trBar()}
      <div class="rcards">${G.rules.map((r,i)=>ruleCard(key,i,r,gst.focus===i,grNote(r),"gr-"+i)).join("")}</div>
      <div class="row" style="margin-top:14px"><button class="btn sage" type="button" id="grGo">Start practising</button></div></div>`;
    wire(); $("#grGo").onclick=()=>{ gst.mode[key]="practise"; gst.q=null; roomGram(key); };
    if(gst.focus!=null){ const el=$(`#gr-${gst.focus}`); if(el) el.scrollIntoView({block:"center",behavior:"smooth"}); gst.focus=null; }
    return;
  }
  if(mode==="practise"){
    if(!gst.q){ gst.q=grNext(key,"p",G.items); gst.done=false; gst.typed=""; }
    const q=gst.q; const [pre,post]=q.s.split("___");
    const okSet=q.a.map(artNorm);
    $("#room").innerHTML=`<div class="panel" id="grPanel">${bar}${hud()}
      <p class="gamebig">${esc(pre)}<span class="artgap" id="grGap">${gst.done?esc(q.a[0]):"___"}</span>${esc(post||"")}</p>
      ${q.o?`<div class="bigopts">${shuffle(q.o.slice()).map(o=>`<button class="opt" type="button" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>`
        :`<div class="inrow"><label class="sr" for="grIn">Your answer</label><input class="tin" id="grIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type the missing words" value="${esc(gst.typed)}"><button class="btn" type="button" id="grChk">Check</button></div>`}
      <div id="grFb"></div></div>`;
    wire();
    const finish=(ok,btn)=>{ gst.done=true; score(ok,btn); $("#grGap").textContent=q.a[0]; $("#grGap").classList.add(ok?"ok":"no");
      $("#grFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Right. ":"Not quite. "}${esc(q.why)} ${ruleLink(q.r)}</div>
        <div class="row"><button class="btn" type="button" id="grNext">Next</button></div>`;
      wireRule(); $("#grNext").onclick=()=>{ gst.q=null; roomGram(key); }; $("#grNext").focus({preventScroll:true}); };
    if(q.o){ $$("#grPanel .opt").forEach(b=>b.onclick=()=>{ if(gst.done) return; const ok=okSet.includes(artNorm(b.dataset.o));
      $$("#grPanel .opt").forEach(x=>{ x.disabled=true; if(okSet.includes(artNorm(x.dataset.o))) x.classList.add("right"); }); if(!ok) b.classList.add("wrong"); finish(ok,b); }); }
    else { const inp=$("#grIn"); inp.focus({preventScroll:true}); inp.addEventListener("input",()=>{ gst.typed=inp.value; });
      const chk=()=>{ if(gst.done||!inp.value.trim()) return; inp.readOnly=true; $("#grChk").disabled=true; finish(okSet.includes(artNorm(inp.value)),$("#grChk")); };
      $("#grChk").onclick=chk; inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); chk(); } }); }
    return;
  }
  if(!gst.q){ gst.q=grNext(key,"f",G.fix); gst.done=false; gst.tries=0; gst.typed=""; }
  const q=gst.q;
  $("#room").innerHTML=`<div class="panel" id="grPanel">${bar}${hud()}
    <p class="counter" style="margin:0">This sentence has a mistake. Type the correct sentence.</p>
    <p class="gamebig artwrong">${esc(q.s)}</p>
    <label class="sr" for="grIn">Correct sentence</label>
    <input class="tin" id="grIn" autocomplete="off" autocapitalize="sentences" spellcheck="false" value="${esc(gst.typed||q.s)}">
    <div class="row" style="margin-top:10px"><button class="btn" type="button" id="grChk">Check</button><button class="linkbtn" type="button" id="grShow">Show the answer</button></div>
    <div id="grFb"></div></div>`;
  wire(); const inp=$("#grIn"); inp.focus({preventScroll:true}); inp.setSelectionRange(inp.value.length,inp.value.length); inp.addEventListener("input",()=>{ gst.typed=inp.value; });
  const finish=(ok,shown)=>{ gst.done=true; gst.typed=""; if(!shown) score(ok,$("#grChk")); else { gst.seen++; gst.streak=0; track(false); }
    $("#grFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Fixed! ":""}<b>${esc(q.ok[0])}</b> ${esc(q.why)} ${ruleLink(q.r)}</div>
      <div class="row"><button class="btn" type="button" id="grNext">Next sentence</button></div>`;
    $("#grChk").disabled=true; $("#grShow").hidden=true; inp.readOnly=true; wireRule();
    $("#grNext").onclick=()=>{ gst.q=null; roomGram(key); }; $("#grNext").focus({preventScroll:true}); };
  const check=()=>{ if(gst.done) return; const v=artNorm(inp.value);
    if(q.ok.some(a=>artNorm(a)===v)) return finish(true,false);
    if(v===artNorm(q.s)){ $("#grFb").innerHTML=`<div class="feedback no">You haven't changed anything yet. Find the mistake first.</div>`; return; }
    gst.tries=(gst.tries||0)+1; if(gst.tries>=2) return finish(false,false);
    $("#grFb").innerHTML=`<div class="feedback no">Not quite. Hint: ${esc(G.rules[q.r].t)}. Try once more.</div>`; };
  $("#grChk").onclick=check; inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); check(); } });
  $("#grShow").onclick=()=>finish(false,true);
}
const CONVS = [
  { id:"cafe", lv:0, t:"At a café", you:"a customer", them:"Barista", scene:"You want a coffee and something to eat.", turns:[
    {them:"Hi there! What can I get you?", o:[["Could I have a large latte, please?",2,"Polite and clear: Could I have… please?"],["I want coffee.",0,"Understandable but rude in English. Use Could I have…? or I'd like…"],["Give me a latte.",0,"Give me… sounds like an order. Add please, or use Could I have…?"]]},
    {them:"Sure. Anything to eat with that?", o:[["Yes, I'd like a croissant, please.",2,"I'd like… is the polite standard."],["Croissant.",1,"A one-word answer is OK in a busy café, but please makes it friendlier."],["I am wanting a croissant.",0,"Want is not used in the continuous: I'd like a croissant."]]},
    {them:"Is that to have here or to take away?", o:[["To take away, please.",2,"British English: to take away. Americans say to go."],["For outside.",0,"Not natural. Say to take away or to go."],["I take it with me.",1,"People understand you, but to take away is the usual phrase."]]},
    {them:"That's £5.40, please.", o:[["Can I pay by card?",2,"Pay by card, pay in cash."],["I pay with the card, yes?",1,"Understandable, but Can I pay by card? sounds natural."],["How much is it costing?",0,"She has just told you the price, and cost isn't used in the continuous here."]]}
  ]},
  { id:"way", lv:1, t:"Asking the way", you:"a visitor", them:"Local", scene:"You're looking for the train station.", turns:[
    {them:"(You stop someone in the street.)", o:[["Excuse me, could you tell me where the station is?",2,"Excuse me + an indirect question: very polite."],["Where is station?",0,"Missing excuse me and the. Excuse me, where's the station?"],["Sorry, where is the station is?",0,"Double is. Where is the station? or Could you tell me where the station is?"]]},
    {them:"The station? Go straight on and take the second left.", o:[["Sorry, did you say the second left?",2,"Checking is smart and polite."],["What?",0,"What? sounds rude. Say Sorry? or Pardon?"],["OK, I go the second left.",1,"OK, but you could check politely: So, the second left?"]]},
    {them:"Yes, and then it's on your right, opposite the bank.", o:[["Great, thanks. Is it far?",2,"Natural and useful follow-up."],["How long it takes?",0,"Word order: How long does it take?"],["Thanks, is it far away from here?",1,"Fine, just a little long."]]},
    {them:"No, it's about five minutes on foot.", o:[["Thanks very much for your help!",2,"Warm and natural."],["OK. Bye.",1,"A bit abrupt. Add thanks."],["You are very helpful person.",0,"Missing a: You've been very helpful!"]]}
  ]},
  { id:"hotel", lv:1, t:"Checking in at a hotel", you:"a guest", them:"Receptionist", scene:"You booked a room online.", turns:[
    {them:"Good evening. How can I help you?", o:[["Hello, I have a reservation under the name Nowak.",2,"The standard phrase: a reservation (or booking) under the name…"],["I have reserve a room.",0,"Grammar: I've reserved a room, or I have a reservation."],["Hello, I want my room.",0,"Too direct. I have a reservation…"]]},
    {them:"Ah yes, Mr Nowak. Two nights, a double room. Could I see your passport, please?", o:[["Of course, here you are.",2,"Here you are is what you say when you give something."],["Yes, take.",0,"Too short and sounds rude. Here you are."],["Of course, here it is it.",0,"Here it is (no extra it)."]]},
    {them:"Thank you. Breakfast is from 7 to 10 in the restaurant.", o:[["Great. And what time is check-out?",2,"Natural follow-up question."],["What time I must leave?",0,"Word order: What time do I have to check out?"],["And the check-out is when?",1,"Understandable but awkward. What time is check-out?"]]},
    {them:"Check-out is at 11. Here's your key card. Room 305, on the third floor.", o:[["Thanks. Could I have a wake-up call at 6.30?",2,"Polite request: Could I have…?"],["Wake me at 6.30.",0,"An order, not a request."],["Thanks, is there a lift?",2,"Also a natural question. British English: lift; American: elevator."]]}
  ]},
  { id:"complain", lv:2, t:"Complaining in a restaurant", you:"a diner", them:"Waiter", scene:"Your food is cold and it's not what you ordered.", turns:[
    {them:"Is everything all right with your meal?", o:[["Actually, I'm afraid my soup is cold.",2,"I'm afraid… softens a complaint: firm but polite."],["No. The soup is cold. Bad service.",0,"Too aggressive. Start with I'm afraid… or Sorry, but…"],["Yes, everything is fine… but the soup is cold.",1,"Saying yes first is confusing. Be clear but polite."]]},
    {them:"Oh, I'm so sorry about that. I'll get you another one.", o:[["Thank you. Also, I ordered the chicken, not the fish.",2,"Clear and calm."],["And also you brought wrong dish.",0,"Sounds like an accusation, and needs the: the wrong dish."],["It's OK. Also the fish is not mine.",1,"Understandable; I ordered the chicken is clearer."]]},
    {them:"I do apologise. The chicken will be about ten minutes. Is that OK?", o:[["That's fine, thanks for sorting it out.",2,"Gracious: thanks for sorting it out."],["Ten minutes? Are you kidding me?",0,"Rude. If you're in a hurry, say: I'm in a bit of a hurry, actually."],["OK, but please hurry.",1,"Acceptable, but a bit sharp."]]},
    {them:"Here you are. And the drinks are on the house, to say sorry.", o:[["That's very kind of you, thank you.",2,"The perfect response to a kind gesture."],["What does it mean, on the house?",1,"Fine to ask! It means free."],["Good. So I don't pay.",0,"Sounds ungrateful."]]}
  ]},
  { id:"doctor", lv:2, t:"Phoning the doctor's surgery", you:"a patient", them:"Receptionist", scene:"You need an appointment.", turns:[
    {them:"Good morning, Riverside Surgery.", o:[["Good morning. I'd like to make an appointment, please.",2,"The standard phrase: make an appointment."],["Hello, I want to visit doctor.",0,"Missing the, and it sounds like a social visit. I'd like to see a doctor."],["Hi, is this the doctor?",1,"OK, but you're speaking to the receptionist. State what you need."]]},
    {them:"Of course. What seems to be the problem?", o:[["I've had a sore throat and a temperature since Monday.",2,"Present perfect + since: perfect for symptoms."],["I am ill from Monday.",0,"Use the present perfect: I've been ill since Monday."],["My throat hurts me since two days.",0,"Since + a point in time, for + a period: for two days."]]},
    {them:"The doctor can see you tomorrow at 9.40. Does that suit you?", o:[["Yes, that suits me. Thank you.",2,"Does that suit you? / That suits me."],["Is there anything earlier?",2,"Also natural if you need it sooner."],["9.40 is good for me, I think, maybe.",1,"Too uncertain. Yes, that's fine."]]},
    {them:"Lovely. Can I take your date of birth?", o:[["Yes, it's the 14th of March, 1998.",2,"British style: the 14th of March."],["I was born 14.03.98.",1,"Say dates in words on the phone: the fourteenth of March…"],["My birthday is in March.",0,"She needs the full date."]]}
  ]},
  { id:"interview", lv:3, t:"A job interview", you:"a candidate", them:"Interviewer", scene:"You're applying for a job at an international company.", turns:[
    {them:"So, tell me a little about yourself.", o:[["I've worked in customer service for four years, and I'm particularly good at solving problems under pressure.",2,"Focused on experience and strengths. Present perfect for experience."],["I am 25 years, I like music and cats.",0,"Too personal, and I am 25 (years old)."],["I'm a hard worker and I'm very perfectionist.",1,"Very general. Give an example instead of a list of adjectives."]]},
    {them:"Why do you want to work for us?", o:[["I admire your focus on sustainability, and I'd like to grow in an international team.",2,"Specific about the company and about you."],["Because the salary is good.",0,"Honest, but it sounds like money is all that matters."],["I need a job.",0,"Don't say this in an interview!"]]},
    {them:"What would you say is your biggest weakness?", o:[["I used to find public speaking hard, so I've been taking a course, and it's really helped.",2,"A real weakness plus what you're doing about it."],["I don't have weaknesses.",0,"Sounds arrogant and not credible."],["I work too much.",1,"A common cliché. Interviewers prefer a real example."]]},
    {them:"Do you have any questions for us?", o:[["Yes. What would a typical day in this role look like?",2,"Always ask something: it shows real interest."],["No, I think you told me everything.",1,"Not wrong, but you lose a chance to show interest."],["When can I start?",0,"Too early and a bit pushy."]]}
  ]},
  { id:"meeting", lv:3, t:"Disagreeing in a meeting", you:"a team member", them:"Colleague", scene:"Your colleague suggests a plan you don't like.", turns:[
    {them:"I think we should launch the new app next week.", o:[["I see your point, but I'm not sure we're ready yet.",2,"Acknowledge, then disagree softly: I see your point, but…"],["No, that's a stupid idea.",0,"Far too direct for English meetings."],["You are wrong.",0,"Very rude in English. Try I'm not sure I agree."]]},
    {them:"Why not? The design is finished.", o:[["True, but we haven't tested it properly. What if there are bugs?",2,"Agree with part, then give a reason."],["Because I say so.",0,"Not an argument."],["The testing is not finish.",1,"Right idea, wrong grammar: Testing isn't finished."]]},
    {them:"Hmm. How long would testing take?", o:[["Probably about two weeks. Could we aim for the 20th instead?",2,"Offer a solution as a question."],["Long time.",0,"Too vague."],["Two weeks minimum, it's obvious.",1,"Clear but sounds impatient."]]},
    {them:"OK, that makes sense. Let's go with the 20th.", o:[["Great, thanks for being flexible.",2,"End on a positive note."],["I told you.",0,"Sounds like you're celebrating a win."],["Good.",1,"OK, but a little cold."]]}
  ]},
  { id:"deadline", lv:4, t:"Negotiating a deadline", you:"an employee", them:"Manager", scene:"You can't finish a report by Friday.", turns:[
    {them:"How's the report coming along? We need it by Friday.", o:[["It's going well, but I wanted to flag that Friday might be tight.",2,"Flag a problem early and softly: might be tight."],["Impossible. I can't do it.",0,"Too blunt, and no solution."],["It's OK. Maybe I finish, maybe no.",0,"Unclear and ungrammatical: I may not finish."]]},
    {them:"Tight? What's the problem?", o:[["The sales figures only arrived yesterday, so the analysis is taking longer than expected.",2,"A clear reason, not an excuse."],["Other people are slow.",0,"Blaming others sounds unprofessional."],["It's a lot of work, you know.",1,"Too vague. Give a concrete reason."]]},
    {them:"I see. When could you realistically have it done?", o:[["Would Tuesday work? That would give me time to double-check the numbers.",2,"Propose a date and the benefit."],["Next month.",0,"Too much, with no reason."],["I can do it Tuesday, if you want.",1,"OK, but say why it helps."]]},
    {them:"Tuesday's fine, as long as I get a summary on Friday.", o:[["That's fair. I'll send you the key points by Friday afternoon.",2,"Accept and commit to something specific."],["Summary? That's extra work.",0,"Don't argue after a good compromise."],["OK, deal.",1,"Fine in a relaxed office, a little casual."]]}
  ]}
];
const cv = { id:null, i:0, pts:0, picks:[], done:false };
function viewConv(){
  const L=state.vlv;
  if(!cv.id){
    $("#view").innerHTML=`${backBtn("use","Use it")}
      <header class="pagehead"><h1>Conversations</h1><p class="lede">Real situations, one turn at a time. Choose what you would say. Some replies are grammatically fine but sound rude or odd in English, and that's what you're training.</p></header>
      <div class="cards">${CONVS.map(c=>{ const best=(()=>{ try{ return JSON.parse(localStorage.getItem("vocab5-conv")||"{}")[c.id]; }catch(e){ return null; } })();
        return `<button class="card" type="button" data-cv="${c.id}"><p class="eyebrow">${LV[c.lv]}${c.lv>L+1?" · harder":""}</p><h3>${esc(c.t)}</h3><p>${esc(c.scene)}</p><span class="meta2"><span>You're ${esc(c.you)}</span>${best!=null?`<span>Best ${best}%</span>`:""}</span></button>`; }).join("")}</div>`;
    $$("[data-cv]").forEach(b=>b.onclick=()=>{ Object.assign(cv,{id:b.dataset.cv,i:0,pts:0,picks:[],done:false}); viewConv(); });
    return;
  }
  const c=CONVS.find(x=>x.id===cv.id), max=c.turns.length*2;
  const log=c.turns.slice(0,cv.i).map((t,k)=>`<div class="bub them"><b>${esc(c.them)}</b>${esc(t.them)}</div><div class="bub you ${["no","meh","ok"][t.o[cv.picks[k]][1]]}"><b>You</b>${esc(t.o[cv.picks[k]][0])}</div>`).join("");
  if(cv.i>=c.turns.length){
    const pct=Math.round(cv.pts/max*100);
    try{ const s=JSON.parse(localStorage.getItem("vocab5-conv")||"{}"); s[c.id]=Math.max(s[c.id]||0,pct); localStorage.setItem("vocab5-conv",JSON.stringify(s)); }catch(e){}
    $("#view").innerHTML=`${backBtn("use","Use it")}<header class="pagehead tight"><h1>${esc(c.t)}</h1></header>
      <div class="panel endcard">${bgPerfect(cv.picks, pct===100)}${psoOn()?psoEnd(pct):""}<p class="score">${pct}%</p><p style="margin:4px 0">${pct>=85?"You sound natural and polite.":pct>=60?"Good. Check the replies marked in orange.":"Try it again: the explanations will help."}</p>
        <div class="row" style="justify-content:center">${canSpeak?`<button class="btn ghost" type="button" id="cvHear">${ico("sound")} Hear the best version</button>`:""}<button class="btn" type="button" id="cvAgain">Try again</button><button class="btn ghost" type="button" id="cvList">Another conversation</button></div></div>
      <div class="convlog">${log}</div>`;
    $("#cvAgain").onclick=()=>{ Object.assign(cv,{i:0,pts:0,picks:[],done:false}); viewConv(); };
    $("#cvList").onclick=()=>{ cv.id=null; viewConv(); };
    const h=$("#cvHear"); if(h) h.onclick=()=>{ const lines=c.turns.flatMap(t=>[t.them.replace(/^\(.*\)$/,""), t.o.filter(o=>o[1]===2)[0][0]]).filter(Boolean); sayEn(lines.join(" … "),0.95); };
    return;
  }
  const t=c.turns[cv.i];
  const opts = cv.done ? t.o.map((o,k)=>k) : (cv.order && cv.order.i===cv.i ? cv.order.ks : (cv.order={i:cv.i,ks:shuffle(t.o.map((o,k)=>k))}).ks);
  $("#view").innerHTML=`${backBtn("use","Use it")}
    <header class="pagehead tight"><p class="eyebrow">${LV[c.lv]} · you're ${esc(c.you)}</p><h1>${esc(c.t)}</h1><p class="lede">${esc(c.scene)}</p></header>
    <div class="qtop"><span>Turn ${cv.i+1} of ${c.turns.length}</span><span>${cv.pts} of ${max} points</span></div>
    <div class="convlog">${log}<div class="bub them"><b>${esc(c.them)}</b>${esc(t.them)} ${canSpeak&&!/^\(/.test(t.them)?`<button class="linkbtn" type="button" id="cvSay">${ico("sound")}</button>`:""}</div></div>
    <div class="convopts">${(cv.done?cv.order.ks:opts).map(k=>{ const o=t.o[k]; const picked=cv.done&&cv.picks[cv.i]===k;
      return `<button class="opt convopt${cv.done?(o[1]===2?" right":picked?(o[1]===1?" meh":" wrong"):""):""}" type="button" data-k="${k}" ${cv.done?"disabled":""}>${esc(o[0])}${cv.done&&(picked||o[1]===2)?`<small>${esc(o[2])}</small>`:""}</button>`; }).join("")}</div>
    ${cv.done?`<div class="row"><button class="btn" type="button" id="cvNext">${cv.i+1<c.turns.length?"Next turn":"See your result"}</button></div>`:""}`;
  const s=$("#cvSay"); if(s) s.onclick=()=>sayEn(t.them,0.95);
  if(!cv.done){ if(cv.i>0 && canSpeak && !/^\(/.test(t.them)) setTimeout(()=>sayEn(t.them,0.95),200);
    $$(".convopt").forEach(b=>b.onclick=()=>{ const k=+b.dataset.k, p=t.o[k][1]; cv.picks[cv.i]=k; cv.pts+=p; cv.done=true; track(p===2); if(p===2) burst(b,5); viewConv(); }); }
  else $("#cvNext").onclick=()=>{ cv.i++; cv.done=false; viewConv(); };
}
const GENRES = {
  email: { t:"Informal email", lv:"A2–B1", min:80, max:130, paras:3, formal:false,
    prompt:"Your English friend is visiting your town next month. Write an email: invite them to stay with you, suggest two things to do together, and ask what food they like.",
    plan:["Greeting + a friendly opening line (How are you?)","The reason you're writing: the invitation","Suggestions: two things to do, with a reason","A question for your friend + a friendly ending"],
    phrases:["Hi Sam,","Thanks for your last email.","I'm writing to…","Why don't we…?","How about going to…?","Let me know…","Can't wait to see you!","Best wishes,"],
    model:"Hi Sam,\n\nHow are you? I was so happy to hear that you're coming to Gdańsk next month!\n\nWould you like to stay with me? We've got a spare room, so it's no problem at all.\n\nThere's so much to do here. Why don't we walk along the beach in Sopot? It's beautiful in the evening. We could also visit the European Solidarity Centre, because it explains a lot about Polish history.\n\nBy the way, what food do you like? My mum wants to cook something special for you. Let me know!\n\nCan't wait to see you,\nKasia",
    checks:{greet:/^(hi|hello|dear|hey)\b/i, close:/(best wishes|love|see you|take care|cheers|can't wait|bye|speak soon|all the best)[,!. ]*\s*\n?\s*\S*\s*$/i}},
  formal: { t:"Formal email or letter", lv:"B1–B2", min:120, max:180, paras:4, formal:true,
    prompt:"You bought a jacket online, but it arrived damaged and late. Write a formal email to the company: explain the problem, say how it affected you, and ask for a solution.",
    plan:["Dear Sir or Madam + the reason for writing","What happened: details (dates, order number)","Why it's a problem for you","What you want them to do + polite closing (Yours faithfully / Kind regards)"],
    phrases:["Dear Sir or Madam,","I am writing to complain about…","I would be grateful if you could…","Unfortunately,…","As a result,…","I look forward to hearing from you.","Yours faithfully,","Kind regards,"],
    model:"Dear Sir or Madam,\n\nI am writing to complain about a jacket I ordered from your website on 2 October (order number 48213).\n\nUnfortunately, the parcel arrived six days later than promised. Moreover, when I opened it, I noticed that one of the sleeves was torn.\n\nAs a result, I was unable to wear the jacket on a business trip, which was the reason I had bought it. I was also disappointed, as your company advertises fast and reliable delivery. In fact, this is the main reason why I chose your shop instead of a local store.\n\nI would be grateful if you could send a replacement as soon as possible or, alternatively, refund the full price. I would also appreciate it if you could explain why the delivery was delayed. I look forward to hearing from you.\n\nYours faithfully,\nAnna Popescu",
    checks:{greet:/^dear\b/i, close:/(yours faithfully|yours sincerely|kind regards|best regards)/i}},
  opinion: { t:"Opinion essay", lv:"B2", min:180, max:250, paras:4, formal:true,
    prompt:"Some people think students should not be allowed to use phones at school. Do you agree? Write an essay giving your opinion and reasons.",
    plan:["Introduction: introduce the topic and clearly state your opinion (your thesis)","Reason 1 + an example","Reason 2 + an example (and, at C1, answer the opposite view)","Conclusion: sum up and repeat your opinion in new words"],
    phrases:["In my opinion,…","I strongly believe that…","Firstly,… Secondly,…","For example,…","It could be argued that… However,…","In conclusion,…","For these reasons,…"],
    model:"Mobile phones have become part of almost every teenager's life. In my opinion, schools should limit their use during lessons, although a complete ban would go too far.\n\nFirstly, phones are a constant distraction. A single notification is enough to break a student's concentration, and it can take several minutes to focus again. For example, many teachers report that students check their phones even during tests, and some admit that they find it hard to stop.\n\nSecondly, breaks without phones encourage real conversation. When students cannot scroll, they talk, play and solve problems together, which is an important part of school life. What is more, time away from screens gives their eyes and minds a rest, so they return to lessons feeling fresher.\n\nIt could be argued that phones are useful learning tools. However, schools can provide tablets or computers for specific tasks, so personal phones are not necessary in class. Besides, these devices can be controlled, whereas a private phone offers endless distractions.\n\nIn conclusion, I believe phones should be switched off during lessons but allowed in emergencies and, perhaps, at lunchtime. This way, students stay focused without losing contact with their families.",
    checks:{}},
  forag: { t:"For and against essay", lv:"B2–C1", min:200, max:260, paras:4, formal:true,
    prompt:"Working from home: advantages and disadvantages. Write an essay presenting both sides, then give your own view in the conclusion.",
    plan:["Introduction: present the topic neutrally (no opinion yet)","Arguments for, with examples","Arguments against, with examples","Conclusion: balance both sides and give your own opinion"],
    phrases:["On the one hand,…","On the other hand,…","One advantage is that…","A major drawback is…","Supporters argue that… Critics, however,…","Taking everything into account,…"],
    model:"Since 2020, millions of people have started working from home, at least part of the week. This change has clear benefits, but it also brings new problems, both for workers and for the companies that employ them.\n\nOn the one hand, working from home saves time and money. Employees no longer spend hours commuting, which means they can sleep longer or spend time with their families. In addition, many people find it easier to concentrate without the noise of an open-plan office. Companies can benefit too, because they need less office space and can hire talented people who live far away.\n\nOn the other hand, home workers can feel isolated. Without colleagues around them, they may miss the informal conversations that build trust and creativity. Moreover, the line between work and private life can become blurred, so some people end up working longer hours than before. Finally, not everyone has a quiet room or a good internet connection at home.\n\nTaking everything into account, I believe a mix of office and home working is the best solution. It offers flexibility while keeping the human contact that makes teams work well. However, each company needs to find the balance that suits its employees.",
    checks:{}},
  article: { t:"Article", lv:"B2–C1", min:200, max:260, paras:4, formal:false,
    prompt:"A youth magazine is collecting articles called 'The place that changed me'. Write an article about a place that is important to you and why.",
    plan:["A catchy title","Opening that grabs the reader (a question or a vivid image)","Describe the place and what happened there","Why it changed you + an ending that speaks to the reader"],
    phrases:["Have you ever…?","Picture this:…","What struck me most was…","Looking back,…","If you ever get the chance,…"],
    model:"The Little Library That Changed My Life\n\nHave you ever found a place where you instantly felt at home? For me, it was a tiny library in my grandmother's village.\n\nIt was only one room, with creaking wooden floors, a smell of old paper and shelves that reached the ceiling. Every summer, I spent hours there while my grandmother chatted with the librarian. At first I was bored, but one rainy afternoon I picked up a book of adventure stories, and suddenly the room disappeared. After that, I went back every day. The librarian, a quiet woman with silver glasses, started saving new books for me, and we spent long afternoons talking about the characters as if they were our friends.\n\nLooking back, that library taught me two things. Firstly, it showed me that books can take you anywhere. Secondly, it taught me that one kind person can change a child's life. It was also the reason I started writing my own stories and, later, the reason I decided to study literature.\n\nSo, if you ever get the chance, visit a small library near you. Sit down, take a book from the shelf and give it ten quiet minutes. You never know which book might be waiting for you.",
    checks:{title:true}}
};
const LINKQ = [
  [1,"I was tired, ___ I went to bed early.","so",["so","because","although","however"],"So introduces a result."],
  [1,"I stayed at home ___ it was raining.","because",["because","so","but","although"],"Because gives a reason."],
  [2,"___ it was cold, we went to the beach.","Although",["Although","Despite","However","Because"],"Although + a full clause."],
  [2,"We went out ___ the rain.","despite",["despite","although","however","even though"],"Despite + a noun (no clause)."],
  [2,"The hotel was expensive. ___, the rooms were small.","What is more",["What is more","However","Although","Despite"],"Adds a second negative point."],
  [2,"I like tea, ___ my sister prefers coffee.","whereas",["whereas","despite","therefore","so"],"Whereas contrasts two people or things."],
  [3,"The train was cancelled. ___, we arrived two hours late.","As a result",["As a result","However","Although","In spite of"],"A result of the previous sentence."],
  [3,"She is very talented. ___, she is not very confident.","However",["However","Therefore","Although","Because"],"However contrasts two sentences."],
  [3,"___ being tired, he finished the report.","In spite of",["In spite of","Although","However","Even though"],"In spite of + -ing."],
  [3,"Many cities, ___ Kraków and Cluj, attract students.","such as",["such as","for instance,","like as","as"],"Such as introduces examples inside a sentence."],
  [3,"___, I believe the plan is too expensive.","Personally",["Personally","Therefore","Whereas","Despite"],"Introduces your own opinion."],
  [4,"The research was limited. ___, its results are interesting.","Nevertheless",["Nevertheless","Therefore","Whereas","Despite"],"Nevertheless = however, in formal writing."],
  [4,"___ online shopping is convenient, it can be risky.","While",["While","Despite","However","Moreover"],"While = although, at the start of a sentence."],
  [4,"Prices rose sharply; ___, sales fell.","consequently",["consequently","nevertheless","whereas","although"],"Consequently = as a result."],
  [4,"___ everything into account, the project was a success.","Taking",["Taking","Considering of","To take","Took"],"Taking everything into account = overall."],
  [5,"___ his lack of experience, he was offered the job.","Notwithstanding",["Notwithstanding","Albeit","Whereas","Hence"],"Notwithstanding = despite (very formal)."]
].map(([lv,s,a,o,why])=>({lv,s,a,o,why}));
const saveW = () => { try{ localStorage.setItem("vocab5-write", JSON.stringify({g:wst.g, texts:wst.texts})); }catch(e){} };
function writeChecks(G, t){
  const words=wcountT(t), paras=t.split(/\n\s*\n/).filter(p=>p.trim()).length, low=" "+t.toLowerCase().replace(/[’]/g,"'")+" ";
  const used=LINKERS.filter(l=>new RegExp(`[^a-z]${l.replace(/ /g,"\\s+")}[^a-z]`,"i").test(low));
  const out=[{ok:words>=G.min && words<=G.max+30, txt:`${G.min}–${G.max} words (you have ${words})`},{ok:paras>=G.paras, txt:`At least ${G.paras} paragraphs, with an empty line between them (you have ${paras})`},{ok:used.length>=3, txt:`At least 3 linking words (you used ${used.length}${used.length?": "+used.slice(0,6).join(", "):""})`}];
  if(G.checks.greet) out.push({ok:G.checks.greet.test(t.trim()), txt: G.formal?"Starts with Dear…":"Starts with a greeting (Hi…, Dear…)"});
  if(G.checks.close) out.push({ok:G.checks.close.test(t.trim()), txt: G.formal?"Ends with Yours faithfully / Kind regards":"Ends with a friendly closing (Best wishes…, See you…)"});
  if(G.checks.title){ const first=t.trim().split("\n")[0]||""; out.push({ok:first.split(/\s+/).length<=10 && !/[.!?]$/.test(first) && t.trim().includes("\n"), txt:"Starts with a short title on its own line"}); }
  if(G.formal){ const c=(t.match(/\b\w+'(s|re|ve|ll|d|m|t)\b/gi)||[]).filter(x=>!/'s$/i.test(x)||/\b(it|that|there|he|she|what|who|let)'s\b/i.test(x)); out.push({ok:!c.length, txt:c.length?`No contractions in formal writing (found: ${[...new Set(c)].slice(0,4).join(", ")})`:"No contractions (I'm, don't) in formal writing"}); }
  return out;
}
function viewWrite(){
  const G=GENRES[wst.g];
  const tabs=`<div class="picks" style="margin:0 0 16px" role="group" aria-label="Writing"><button class="pick" type="button" data-wt="write" aria-pressed="${wst.tab==="write"}">Write a text</button><button class="pick" type="button" data-wt="link" aria-pressed="${wst.tab==="link"}">Linking words</button></div>`;
  if(wst.tab==="link") return viewLinkers(tabs);
  const t=wst.texts[wst.g]||"";
  $("#view").innerHTML=`${backBtn("use","Use it")}
  <header class="pagehead"><h1>Writing studio</h1><p class="lede">Plan, write, check. Each text type has a plan, useful phrases and a model answer. These are the text types in the matura and the Bacalaureat.</p></header>
  ${tabs}
  <div class="sndcats" role="group" aria-label="Text type">${Object.entries(GENRES).map(([k,g])=>`<button class="chipbtn" type="button" data-wg="${k}" aria-pressed="${wst.g===k}">${esc(g.t)} <small>${g.lv}</small></button>`).join("")}</div>
  <section class="panel"><p class="eyebrow">Your task · ${G.lv} · ${G.min}–${G.max} words</p><p class="qtext" style="margin:4px 0 0">${esc(G.prompt)}</p></section>
  <div class="grid2" style="margin-top:12px">
    <div class="field panel"><h2>Plan</h2><ol class="wplan">${G.plan.map(p=>`<li>${esc(p)}</li>`).join("")}</ol></div>
    <div class="field panel"><h2>Useful phrases</h2><ul class="wphr">${G.phrases.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>
  </div>
  <section class="panel" style="margin-top:12px">
    <label class="lvlabel" for="wText" style="display:block;margin-bottom:6px">Your text</label>
    <textarea id="wText" class="tall" style="min-height:280px" placeholder="Leave an empty line between paragraphs.">${esc(t)}</textarea>
    <ul class="checks" id="wChecks"></ul>
    <div class="row" style="margin-top:8px"><button class="btn" type="button" id="wChk">Check my text</button>${aiBtn("wAI")}<button class="linkbtn" type="button" id="wModel">See the model answer</button></div>
    <div class="ai" id="wOut" hidden></div>
    <div class="wmodel" id="wM" hidden></div>
  </section>`;
  $$("[data-wt]").forEach(b=>b.onclick=()=>{ wst.tab=b.dataset.wt; viewWrite(); });
  $$("[data-wg]").forEach(b=>b.onclick=()=>{ wst.g=b.dataset.wg; saveW(); viewWrite(); });
  const ta=$("#wText");
  const paint=()=>{ const cs=writeChecks(G, ta.value); $("#wChecks").innerHTML=cs.map(c=>`<li class="${c.ok?"pass":"fail"}">${esc(c.txt)}</li>`).join(""); return cs.every(c=>c.ok); };
  ta.addEventListener("input",()=>{ wst.texts[wst.g]=ta.value; saveW(); });
  $("#wChk").onclick=()=>{ const ok=paint(); if(ok){ burst($("#wChk"),8); bgWrite("w:"+wst.g+":"+dayKey()); track(true); } };
  const ab=$("#wAI"); if(ab) ab.onclick=()=>{ if(wcountT(ta.value)<20) return; writeAI(`${G.t}: ${G.prompt} (${G.min}–${G.max} words${G.formal?", formal style":""})`, ta.value, $("#wOut"), ab); };
  $("#wModel").onclick=()=>{ const m=$("#wM"); m.hidden=!m.hidden; $("#wModel").textContent=m.hidden?"See the model answer":"Hide the model answer";
    if(!m.hidden) m.innerHTML=G.model.split(/\n\n/).map(p=>`<p>${esc(p).replace(/\n/g,"<br>").replace(new RegExp(`\\b(${LINKERS.map(l=>l.replace(/ /g,"\\s+")).join("|")})\\b`,"gi"),"<mark class=\"dmark\">$1</mark>")}</p>`).join("")+`<p class="hintline">Highlighted: linking words.</p>`; };
  if(t.trim()) paint();
}
function viewLinkers(tabs){
  const L=state.vlv; let pool=LINKQ.filter(q=>q.lv<=L+1); if(pool.length<6) pool=LINKQ.slice();
  if(!wst.lq){ wst.lq=pool[Math.floor(Math.random()*pool.length)]; wst.ldone=false; }
  const q=wst.lq; const [pre,post]=q.s.split("___");
  $("#view").innerHTML=`${backBtn("use","Use it")}
  <header class="pagehead"><h1>Writing studio</h1><p class="lede">Linking words hold a text together. Choose the one that fits.</p></header>${tabs}
  <div class="panel" id="lkPanel"><div class="hud"><span>${wst.seen?`${wst.right} of ${wst.seen} right`:"Answer to start your score"}</span></div>
    <p class="gamebig">${esc(pre)}<span class="artgap" id="lkGap">___</span>${esc(post)}</p>
    <div class="bigopts">${shuffle(q.o.slice()).map(o=>`<button class="opt" type="button" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div><div id="lkFb"></div></div>`;
  $$("[data-wt]").forEach(b=>b.onclick=()=>{ wst.tab=b.dataset.wt; viewWrite(); });
  $$("#lkPanel .opt").forEach(b=>b.onclick=()=>{ if(wst.ldone) return; wst.ldone=true; const ok=b.dataset.o===q.a; wst.seen++; if(ok){ wst.right++; burst(b,5); } track(ok);
    $$("#lkPanel .opt").forEach(x=>{ x.disabled=true; if(x.dataset.o===q.a) x.classList.add("right"); }); if(!ok) b.classList.add("wrong");
    $("#lkGap").textContent=q.a; $("#lkGap").classList.add(ok?"ok":"no");
    $("#lkFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Right. ":"Not quite. "}${esc(q.why)}</div><div class="row"><button class="btn" type="button" id="lkNext">Next</button></div>`;
    $("#lkNext").onclick=()=>{ wst.lq=null; viewLinkers(tabs); }; $("#lkNext").focus({preventScroll:true}); });
}
const EX_WF = [
  [2,"The film was really ___.","BORE",["boring"],"Adjective for a thing: -ing."],
  [2,"She spoke with great ___.","CONFIDENT",["confidence"],"Noun: confidence."],
  [2,"It's ___ to drive without a licence.","LEGAL",["illegal"],"Negative prefix il- before l."],
  [3,"His ___ to help surprised everyone.","WILLING",["willingness"],"Noun with -ness."],
  [3,"The new rules are completely ___.","REASON",["unreasonable"],"Negative prefix + adjective: un- … -able."],
  [3,"They plan to ___ the road because it's too narrow.","WIDE",["widen"],"Verb with -en."],
  [3,"There has been a ___ increase in prices.","DRAMA",["dramatic"],"Adjective: dramatic."],
  [4,"The results were ___ disappointing.","DEEP",["deeply"],"Adverb before an adjective."],
  [4,"Her ___ of the problem was impressive.","ANALYSE",["analysis"],"Noun: analysis."],
  [4,"The museum is fully ___ to wheelchair users.","ACCESS",["accessible"],"Adjective: accessible."],
  [4,"Who is ___ for the delay?","RESPONSE",["responsible"],"Adjective: responsible for."],
  [5,"The committee agreed ___.","UNANIMOUS",["unanimously"],"Adverb: unanimously."],
  [5,"The ___ of the old factory area took ten years.","DEVELOP",["redevelopment","development"],"Noun: (re)development."]
].map(([lv,s,base,a,why])=>({lv,s,base,a,why}));
const EX_KW = [
  [2,"It isn't necessary to bring food.","HAVE","You ___ bring food.",["don't have to","do not have to"],"Not necessary: don't have to."],
  [2,"Maybe she is at home.","MIGHT","She ___ at home.",["might be"],"Might be = maybe she is."],
  [2,"I started learning English five years ago.","FOR","I ___ five years.",["have been learning english for","have learned english for","have learnt english for","'ve been learning english for","'ve learned english for","'ve learnt english for"],"Present perfect + for."],
  [3,"It's a pity I didn't go to the party.","WISH","I ___ to the party.",["wish i had gone","wish i'd gone"],"Wish + past perfect for past regrets."],
  [3,"They built this church in 1650.","WAS","This church ___ 1650.",["was built in"],"Past passive."],
  [3,"I'm sure he didn't steal the money.","CAN'T","He ___ the money.",["can't have stolen","cannot have stolen"],"Can't have + past participle."],
  [3,"'Where is the station?' she asked me.","WHERE","She asked me ___ was.",["where the station"],"Reported question: normal word order."],
  [4,"If you don't hurry, you'll miss the bus.","UNLESS","You'll miss the bus ___.",["unless you hurry"],"Unless = if not."],
  [4,"I last saw him in 2019.","SEEN","I ___ 2019.",["haven't seen him since","have not seen him since"],"Present perfect negative + since."],
  [4,"It was such a difficult test that nobody passed.","SO","The test ___ nobody passed.",["was so difficult that"],"So + adjective + that."],
  [4,"Someone is repairing my car at the moment.","HAVING","I ___ repaired at the moment.",["am having my car","'m having my car"],"Have something done, continuous."],
  [5,"I didn't know, so I didn't help.","HAD","If I ___, I would have helped.",["had known"],"Third conditional."],
  [5,"People say that he is a genius.","SAID","He ___ a genius.",["is said to be"],"Passive reporting: is said to be."]
].map(([lv,s,kw,gap,a,why])=>({lv,s,kw,gap,a,why}));
const EX_TRIO = [
  [3,["Can you ___ me a favour?","I need to ___ my homework.","What do you ___ for a living?"],["do"],"Do a favour, do homework, do for a living."],
  [3,["Don't forget to ___ the light off.","It's your ___ to wash the dishes.","Take the second ___ on the left."],["turn"],"Turn off, your turn, take a turn."],
  [3,["Could you ___ an eye on my bag?","Please ___ quiet during the film.","You can ___ the change."],["keep"],"Keep an eye on, keep quiet, keep the change."],
  [4,["She works in a ___ in the city centre.","Please pay the money into my ___ account.","We had a picnic on the river ___."],["bank"],"A bank (money) and a river bank."],
  [4,["I can't ___ the noise any more.","A brown ___ came out of the forest.","Please ___ with me for a moment."],["bear"],"Can't bear, a bear, bear with me."],
  [4,["Can you give me a ___ to the station?","Let's take the ___ to the fifth floor.","His kind words gave me a real ___."],["lift"],"A lift (a ride), a lift (elevator), a lift (good feeling)."],
  [5,["The company ___ a huge profit last year.","The film ___ me cry.","He ___ a terrible mistake."],["made"],"Make a profit, make someone cry, make a mistake."],
  [5,["Let's ___ the plan into action.","Could you ___ the kettle on?","I'll ___ you through to the manager."],["put"],"Put into action, put the kettle on, put someone through."]
].map(([lv,ss,a,why])=>({lv,ss,a,why}));
const EX_SPEAK = [
  { lv:"A1–A2", qs:["Describe your favourite room in your home.","What do you usually do at the weekend?"], ideas:["Say what it looks like and what you do there","Use present simple: I usually…, I often…","Give one reason: because…"] },
  { lv:"A1–A2", qs:["Tell me about your best friend.","What did you do last summer?"], ideas:["Appearance, personality, what you do together","Past simple: went, saw, visited","Add one feeling: It was amazing / boring because…"] },
  { lv:"B1–B2", qs:["Some people say that young people spend too much time online. Do you agree? Why or why not?"], ideas:["Give your opinion in the first sentence","Two reasons, each with an example","Mention the other side: On the other hand…","Finish with a short conclusion"] },
  { lv:"B1–B2", qs:["Is it better to live in a city or in the countryside? Give reasons for your answer."], ideas:["Compare: more…than, less…than, not as…as","Personal example","Conclude with your choice"] }
];
const exm = { tab:"info", q:null, done:false, right:0, seen:0, typed:"", queue:{}, spk:0, timer:null, left:0 };
function exNext(kind,list){ const L=state.vlv; let pool=list.filter(x=>x.lv<=L+1); if(pool.length<5) pool=list.slice(); let q=exm.queue[kind]; if(!q||!q.length||q.lvl!==L){ q=shuffle(pool.slice()); q.lvl=L; exm.queue[kind]=q; } return q.pop(); }
function viewExam(){
  const tabs=[["info","The exams"],["wf","Word formation"],["kw","Key word"],["trio","One word, three gaps"],["speak","Speaking"]];
  const bar=`<div class="picks" style="margin:0 0 16px" role="group" aria-label="Exam practice">${tabs.map(([k,l])=>`<button class="pick" type="button" data-ex2="${k}" aria-pressed="${exm.tab===k}">${l}</button>`).join("")}</div>`;
  const head=`<header class="pagehead"><p class="eyebrow">Exam corner</p><h1>Matura and Bacalaureat</h1><p class="lede">Practise the task types used in the Polish matura and the Romanian Bacalaureat English exams. Always check the latest official information from CKE (Poland) or the Ministry of Education (Romania).</p></header>`;
  const hud=()=>`<div class="hud"><span>${exm.seen?`${exm.right} of ${exm.seen} right`:"Answer to start your score"}</span></div>`;
  const wire=()=>{ $$("[data-ex2]").forEach(b=>b.onclick=()=>{ if(exm.tab===b.dataset.ex2) return; exm.tab=b.dataset.ex2; exm.q=null; exm.done=false; exm.typed=""; clearInterval(exm.timer); viewExam(); }); };
  if(exm.tab==="info"){
    $("#view").innerHTML=`${head}${bar}<div class="artrules">
      <article class="artcard"><p class="eyebrow">Poland</p><h2 class="h3">Matura, extended level</h2><p>Listening and reading (including open questions), language tasks and one long piece of writing.</p>
        <ul class="artex" style="font-style:normal"><li><b>Language tasks:</b> word formation, key word transformations (the key word doesn't change), one word for three sentences, and gap fills based on a text.</li><li><b>Writing:</b> an opinion essay, a for and against essay, a formal letter or an article. Form counts: an article needs a title and an essay needs a clear thesis.</li></ul>
        <div class="row"><button class="btn ghost" type="button" data-ex2="wf">Word formation</button><button class="btn ghost" type="button" data-ex2="kw">Key word</button><button class="btn ghost" type="button" data-ex2="trio">One word, three gaps</button><button class="btn ghost" type="button" data-go="use:write">Writing studio</button></div></article>
      <article class="artcard"><p class="eyebrow">Romania</p><h2 class="h3">Bacalaureat, Proba C</h2><p>Four skills, each graded from A1 to B2.</p>
        <ul class="artex" style="font-style:normal"><li><b>Listening:</b> two recordings (A1–A2 and B1–B2), 10 multiple-choice questions, each recording played twice.</li><li><b>Reading:</b> two texts with multiple choice and True / False / Doesn't say.</li><li><b>Writing:</b> a functional text such as an email (A1–A2) and an essay (B1–B2).</li><li><b>Speaking:</b> three open questions: two at A1–A2 and one opinion question at B1–B2.</li></ul>
        <div class="row"><button class="btn ghost" type="button" id="exRead">Reading of the week</button><button class="btn ghost" type="button" data-ex2="speak">Speaking</button><button class="btn ghost" type="button" data-go="use:write">Writing studio</button></div></article></div>`;
    wire(); $("#exRead").onclick=()=>{ vidTab="read"; go("video"); }; return;
  }
  if(exm.tab==="speak"){
    const set=EX_SPEAK[exm.spk%EX_SPEAK.length];
    $("#view").innerHTML=`${head}${bar}<div class="panel"><p class="eyebrow">Speaking · ${set.lv}</p>
      ${set.qs.map((q,i)=>`<p class="gamebig" style="font-size:1.3rem">${i+1}. ${esc(q)}</p>`).join("")}
      <p class="counter">Answer aloud for about ${set.lv==="B1–B2"?"two minutes":"one minute"} per question. Speak naturally; don't learn paragraphs by heart.</p>
      <div class="row"><button class="btn sage" type="button" id="exTime">Start the timer</button><span class="breakpill" id="exLeft">${set.lv==="B1–B2"?"2:00":"1:00"}</span>${canSpeak?`<button class="btn ghost" type="button" id="exHear">${ico("sound")} Hear the question</button>`:""}</div>
      <details style="margin-top:14px"><summary><b>Ideas and useful language</b></summary><ul class="artex" style="font-style:normal">${set.ideas.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></details>
      <div class="row" style="margin-top:14px"><button class="btn" type="button" id="exNextSet">Next questions</button></div></div>`;
    wire();
    const secs=set.lv==="B1–B2"?120:60;
    $("#exTime").onclick=()=>{ clearInterval(exm.timer); exm.left=secs; const el=$("#exLeft"); exm.timer=setInterval(()=>{ exm.left--; if(!$("#exLeft")){ clearInterval(exm.timer); return; } el.textContent=`${Math.floor(Math.max(0,exm.left)/60)}:${String(Math.max(0,exm.left)%60).padStart(2,"0")}`; if(exm.left<=0){ clearInterval(exm.timer); el.textContent="Time!"; track(true); } },1000); };
    const h=$("#exHear"); if(h) h.onclick=()=>sayEn(set.qs.join(" … "),0.9);
    $("#exNextSet").onclick=()=>{ clearInterval(exm.timer); exm.spk++; viewExam(); };
    return;
  }
  const kind=exm.tab, list={wf:EX_WF,kw:EX_KW,trio:EX_TRIO}[kind];
  if(!exm.q){ exm.q=exNext(kind,list); exm.done=false; exm.typed=""; }
  const q=exm.q;
  const body = kind==="wf" ? `<p class="counter" style="margin:0">Use the word in capitals to form a word that fits the gap.</p><p class="gamebig">${esc(q.s).replace("___",`<span class="artgap" id="exGap">___</span>`)} <span class="tag soft">${esc(q.base)}</span></p>`
    : kind==="kw" ? `<p class="counter" style="margin:0">Complete the second sentence so it means the same as the first. Use the word in capitals and don't change it. Use 2–5 words.</p><p class="qtext">${esc(q.s)}</p><p class="gamebig"><span class="tag soft">${esc(q.kw)}</span> ${esc(q.gap).replace("___",`<span class="artgap" id="exGap">___</span>`)}</p>`
    : `<p class="counter" style="margin:0">Find ONE word that fits all three gaps. Use the same form each time.</p>${q.ss.map((x,i)=>`<p class="qtext">${i+1}. ${esc(x).replace("___",`<span class="artgap exgap3">___</span>`)}</p>`).join("")}`;
  $("#view").innerHTML=`${head}${bar}<div class="panel" id="exPanel">${hud()}${body}
    <div class="inrow"><label class="sr" for="exIn">Your answer</label><input class="tin" id="exIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${kind==="kw"?"Type 2–5 words":"Type one word"}" value="${esc(exm.typed)}"><button class="btn" type="button" id="exChk">Check</button></div>
    <div id="exFb"></div></div>`;
  wire(); const inp=$("#exIn"); inp.focus({preventScroll:true}); inp.addEventListener("input",()=>{ exm.typed=inp.value; });
  const chk=()=>{ if(exm.done||!inp.value.trim()) return; exm.done=true; const v=artNorm(inp.value).replace(/’/g,"'"); const ok=q.a.some(a=>artNorm(a)===v);
    exm.seen++; if(ok){ exm.right++; burst($("#exChk"),5); } track(ok); inp.readOnly=true; $("#exChk").disabled=true;
    $$(".artgap").forEach(g=>{ g.textContent=q.a[0]; g.classList.add(ok?"ok":"no"); });
    $("#exFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?"Right. ":`Answer: <b>${esc(q.a[0])}</b>. `}${esc(q.why)}</div><div class="row"><button class="btn" type="button" id="exNext">Next</button></div>`;
    $("#exNext").onclick=()=>{ exm.q=null; viewExam(); }; $("#exNext").focus({preventScroll:true}); };
  $("#exChk").onclick=chk; inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); chk(); } });
}
window.__extraReady=true;
