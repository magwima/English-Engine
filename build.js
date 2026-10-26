/* Build: split the single-file Psotek (index.html, the source) into index.html + app.js + extra.js.
   extra.js holds the rooms that the first screen doesn't need; it is worked out from the code each time.
   usage: node build.js <source.html> <outdir> [--site]   (--site sets SITE_MODE = true for psotnyjez.com) */
const fs=require('fs'), path=require('path'), crypto=require('crypto');
const acorn=require(process.env.ACORN||'acorn');
const [src,out,flag]=process.argv.slice(2);
let html=fs.readFileSync(src,'utf8');
if(flag==='--site') html=html.replace(/^const SITE_MODE = false;/m,'const SITE_MODE = true;');
const blocks=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
const mainBlock=blocks[blocks.length-1]; const main=mainBlock[1];
const ast=acorn.parse(main,{ecmaVersion:'latest'});
const decls=[], nameOf={};
ast.body.forEach((st,i)=>{ let names=[];
  if(st.type==='FunctionDeclaration') names=[st.id.name];
  else if(st.type==='VariableDeclaration') st.declarations.forEach(d=>{ if(d.id.type==='Identifier') names.push(d.id.name); });
  decls.push({i,names,st}); names.forEach(n=>nameOf[n]=i); });
const all=new Set(Object.keys(nameOf));
function refs(node,skipFns){ const outS=new Set();
  const visit=(n,parent)=>{ if(!n||typeof n.type!=='string') return;
    if(skipFns && /Function/.test(n.type)) return;
    if(n.type==='UnaryExpression' && n.operator==='typeof' && n.argument.type==='Identifier') return; /* typeof X is safe */
    if(n.type==='Identifier' && all.has(n.name)) outS.add(n.name);
    if(n.type==='MemberExpression' && !n.computed){ visit(n.object,n); return; }
    if(n.type==='Property' && !n.computed && !n.shorthand){ visit(n.value,n); return; }
    for(const k in n){ if(k==='type'||k==='start'||k==='end') continue; const v=n[k];
      if(Array.isArray(v)) v.forEach(x=>x&&typeof x.type==='string'&&visit(x,n)); else if(v&&typeof v.type==='string') visit(v,n); } };
  if(n0(node)) return outS;
  function n0(node){ if(node.type==='FunctionDeclaration'){ if(!skipFns){ visit(node.body); node.params.forEach(p=>visit(p)); } return true; }
    if(node.type==='VariableDeclaration'){ node.declarations.forEach(d=>d.init&&visit(d.init)); return true; } return false; }
  visit(node); return outS; }
decls.forEach(d=>{ d.all=refs(d.st,false); d.load=refs(d.st,true); });
const ROOTS=['viewLab','viewUse','viewConv','viewWrite','viewAsk','viewStudio','viewUpgrade','viewStory','viewSpeak','viewExam','viewSounds','viewGame','viewBadges','viewArchive'];
const M=new Set(ROOTS.map(r=>nameOf[r]).filter(x=>x!==undefined));
let ch=true; while(ch){ ch=false; decls.forEach(d=>{ if(M.has(d.i)||!d.names.length) return;
  const by=decls.filter(o=>o.i!==d.i && d.names.some(n=>o.all.has(n)));
  if(by.length && by.every(o=>M.has(o.i))){ M.add(d.i); ch=true; } }); }
const moved=new Set([...M].flatMap(i=>decls[i].names));
const bad=decls.filter(d=>!M.has(d.i) && [...d.all].some(n=>moved.has(n) && !main.slice(d.st.start,d.st.end).includes('typeof '+n))); /* a reference guarded by typeof is fine */
if(bad.length){ console.error('Main code still refers to moved code:', bad.map(d=>(d.names[0]||'statement')+' -> '+[...d.all].filter(n=>moved.has(n)).join(',')).join('; ')); process.exit(1); }
let appJs='', extraJs=''; let pos=0;
[...M].sort((a,b)=>a-b).forEach(i=>{ const st=decls[i].st; appJs+=main.slice(pos,st.start); extraJs+=main.slice(st.start,st.end)+'\n'; pos=st.end; });
appJs+=main.slice(pos);
extraJs+='window.__extraReady=true;\n';
const h=s=>crypto.createHash('sha1').update(s).digest('hex').slice(0,10);
const extraName='extra.js?v='+h(extraJs);
appJs='window.EXTRA_SRC='+JSON.stringify(extraName)+';\n'+appJs;
const appName='app.js?v='+h(appJs);
const outHtml=html.slice(0,mainBlock.index)+`<script src="${appName}"></script>`+html.slice(mainBlock.index+mainBlock[0].length);
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'index.html'),outHtml); fs.writeFileSync(path.join(out,'app.js'),appJs); fs.writeFileSync(path.join(out,'extra.js'),extraJs);
const kb=x=>(Buffer.byteLength(x)/1024).toFixed(0)+'KB';
console.log(`built ${out}: index.html ${kb(outHtml)}, app.js ${kb(appJs)}, extra.js ${kb(extraJs)} (${M.size} parts moved)`);
