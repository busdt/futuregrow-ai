const DATA = window.CIVIC_DATA || {records:[],evidence:[]};

function esc(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}
function scrollToSection(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth"});}
function cardTemplate(x){
  return '<article class="card"><div><span class="tag">'+esc(x.tag)+'</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.text)+'</p></div><div class="meta"><span>'+esc(x.date)+'</span><a href="'+esc(x.url||"#")+'" target="_blank" rel="noopener">Source ↗</a></div></article>';
}
function renderRecords(filter="all",query=""){
  const q=query.trim().toLowerCase();
  const list=DATA.records.filter(x=>(filter==="all"||x.type===filter)&&(!q||[x.title,x.text,x.source,x.date,x.tag].join(" ").toLowerCase().includes(q)));
  const el=document.getElementById("results");
  el.innerHTML=list.length?list.map(cardTemplate).join(""):'<div class="card"><div><span class="tag">NO MATCH</span><h3>কোনো record পাওয়া যায়নি</h3><p>Search term পরিবর্তন করে আবার চেষ্টা করুন।</p></div></div>';
  return list;
}
function runSearch(q){renderRecords("all",q);scrollToSection("explore");}
function setupFilters(){
  document.querySelectorAll(".chip").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");renderRecords(btn.dataset.filter);
  }));
}
function renderTimeline(){
  const rows=DATA.records.filter(x=>x.type==="timeline");
  document.getElementById("timelineList").innerHTML=rows.map(x=>'<div class="timeline-item"><div class="date">'+esc(x.date)+'</div><div><h3>'+esc(x.title)+'</h3><p>'+esc(x.text)+'</p></div><span class="timeline-badge">SOURCE-TRACKED</span></div>').join("");
}
function renderEvidence(){
  document.getElementById("evidenceGrid").innerHTML=DATA.evidence.map(x=>'<article class="evidence"><p class="claim">'+esc(x.claim)+'</p><div class="evidence-row"><span>Status</span><b>'+esc(x.status)+'</b></div><div class="evidence-row"><span>Method</span><b>'+esc(x.detail)+'</b></div></article>').join("");
}
function answerFor(q){
  const list=DATA.records.filter(x=>[x.title,x.text,x.source,x.date,x.tag].join(" ").toLowerCase().includes(q.toLowerCase())).slice(0,4);
  if(!list.length) return {text:"এই demo dataset-এ সরাসরি match পাওয়া যায়নি। Official source বা আরও নির্দিষ্ট keyword ব্যবহার করুন।",items:[]};
  return {text:"আমি সম্ভাব্যভাবে প্রাসঙ্গিক "+list.length+"টি record পেয়েছি। এটি final fact-check নয়—প্রতিটি record-এর source খুলে যাচাই করুন।",items:list};
}
function askAssistant(e){
  e.preventDefault();
  const input=document.getElementById("assistantInput"), q=input.value.trim(); if(!q)return;
  const log=document.getElementById("chatLog");
  log.insertAdjacentHTML("beforeend",'<div class="msg user">'+esc(q)+'</div>');
  const a=answerFor(q);
  let html='<div class="msg bot">'+esc(a.text);
  if(a.items.length){html+='<div style="margin-top:10px;display:grid;gap:7px">'+a.items.map(x=>'<a style="display:block;padding:8px 9px;background:#0b1929;border-radius:9px;border:1px solid rgba(255,255,255,.06)" href="'+esc(x.url||"#")+'" target="_blank" rel="noopener"><b>'+esc(x.title)+'</b><br><span style="font-size:10px;color:#7890ab">'+esc(x.source)+'</span></a>').join("")+'</div>'}
  html+='</div>'; log.insertAdjacentHTML("beforeend",html);log.scrollTop=log.scrollHeight;input.value="";
}
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("statRecords").textContent=DATA.records.length+"+";
document.getElementById("statEvents").textContent=DATA.records.filter(x=>x.type==="timeline").length;
document.getElementById("statSources").textContent=new Set(DATA.records.map(x=>x.source)).size+"+";
renderRecords();renderTimeline();renderEvidence();setupFilters();
