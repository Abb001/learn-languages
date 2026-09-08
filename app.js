/* ============================ CONTENT ============================ */
/* ============================ STATE ============================ */
let lang = "fr", tab = "read", openArticle = null, queue = null, qIdx = 0, showAns = false;
let progress = {saved:{}, read:[]};
const mem = {};
const KEY = "onepage:v1";

/* Progress is kept in localStorage. If it's unavailable (private browsing,
   storage disabled), we fall back to memory so the app still runs. */
const store = {
  get(){
    try{ const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; }
    catch(e){ return mem[KEY] || null; }
  },
  set(v){
    mem[KEY] = v;
    try{ localStorage.setItem(KEY, JSON.stringify(v)); }catch(e){}
  }
};
const save = () => store.set(progress);

/* ============================ HELPERS ============================ */
const TASHKEEL = /[\u064B-\u0652\u0670\u0640]/g;
const PUNCT = /^[«»"'"",.!?;:()\u060C\u061F\u061B\u2026\u2014-]+|[«»"'"",.!?;:()\u060C\u061F\u061B\u2026\u2014-]+$/g;

function norm(w, l){
  let s = w.replace(PUNCT,"").toLowerCase();
  if(l === "ar") s = s.replace(TASHKEEL,"").replace(/[\u0623\u0625\u0622]/g,"\u0627");
  return s;
}
function glossMap(art, l){
  if(!art._g){
    art._g = {};
    Object.keys(art.g || {}).forEach(k => { art._g[norm(k, l)] = art.g[k]; });
  }
  return art._g;
}
function lookup(word, art, l){
  const g = glossMap(art, l);
  let k = norm(word, l);
  if(!k) return null;
  if(g[k]) return g[k];
  if(l === "ar"){
    for(const pre of ["\u0648","\u0644","\u0628","\u0641"]){
      if(k.startsWith(pre) && g[k.slice(1)]) return g[k.slice(1)];
    }
    if(k.startsWith("\u0627\u0644") && g[k.slice(2)]) return g[k.slice(2)];
  }
  return null;
}
const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")
  .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const el = id => document.getElementById(id);

function toast(msg){
  const t = el("toast");
  t.textContent = msg; t.classList.add("on");
  clearTimeout(t._h); t._h = setTimeout(()=>t.classList.remove("on"), 1600);
}

/* ---------- speech ---------- */
let voices = [];
function loadVoices(){ try{ voices = speechSynthesis.getVoices() || []; }catch(e){ voices = []; } }
loadVoices();
if(window.speechSynthesis) speechSynthesis.onvoiceschanged = loadVoices;

function pickVoice(code){
  const base = code.slice(0,2);
  return voices.find(v => v.lang && v.lang.replace("_","-").toLowerCase().startsWith(base));
}
let speaking = null;
function say(text, btn){
  if(!window.speechSynthesis){ toast("This browser can't speak text."); return; }
  speechSynthesis.cancel();
  if(speaking){ speaking.classList.remove("on"); speaking.setAttribute("aria-pressed","false"); }
  const code = DATA[lang].voice;
  const v = pickVoice(code);
  if(!v && lang === "ar"){
    toast("No Arabic voice on this device — try Chrome, or add one in system settings.");
    return;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = code; if(v) u.voice = v;
  u.rate = lang === "ar" ? 0.78 : 0.85;
  if(btn){
    btn.setAttribute("aria-pressed","true"); speaking = btn;
    u.onend = u.onerror = () => btn.setAttribute("aria-pressed","false");
  }
  speechSynthesis.speak(u);
}

/* ============================ SHEET ============================ */
function closeSheet(){
  el("sheet").classList.remove("on");
  el("scrim").classList.remove("on");
}
function openSheet(word, gloss, art){
  const l = lang, key = l + ":" + norm(word, l);
  const has = !!progress.saved[key];
  const s = el("sheet");
  s.innerHTML =
    '<div class="w ' + (l === "ar" ? "ar" : "") + '">' + esc(word.replace(PUNCT,"")) + '</div>' +
    '<div class="g">' + (gloss ? esc(gloss) : '<span class="muted">Not glossed in this text.</span>') + '</div>' +
    '<div class="row">' +
      '<button id="sh-say">Hear it</button>' +
      '<button id="sh-add">' + (has ? "Saved" : "Save to my words") + '</button>' +
    '</div>';
  el("sh-say").onclick = () => say(word.replace(PUNCT,""));
  el("sh-add").onclick = () => {
    if(progress.saved[key]){ delete progress.saved[key]; toast("Removed"); }
    else{ progress.saved[key] = {w:word.replace(PUNCT,""), g:gloss || "", box:1, due:Date.now()}; toast("Saved — it'll come back in review"); }
    save(); closeSheet(); render();
  };
  s.classList.add("on"); el("scrim").classList.add("on");
}

/* ============================ VIEWS ============================ */
function viewRead(){
  const d = DATA[lang];
  if(openArticle){
    const a = d.articles.find(x => x.id === openArticle);
    const rtl = lang === "ar";
    let h = '<button class="plain back" id="back">\u2190 All texts</button>' +
      '<div class="reader">' +
      '<h2' + (rtl ? ' class="rtl-word"' : '') + '>' + esc(a.t) + '</h2>' +
      '<div class="muted" style="margin-bottom:14px">' + (a.tr ? esc(a.tr) + ' \u00b7 ' : '') + esc(a.blurb) + '</div>';

    a.s.forEach((sn, i) => {
      const words = sn[0].split(/\s+/).map(w => {
        const g = lookup(w, a, lang);
        const key = lang + ":" + norm(w, lang);
        const cls = "tok" + (g ? "" : " none") + (progress.saved[key] ? " saved" : "");
        return g
          ? '<span class="' + cls + '" tabindex="0" data-w="' + esc(w) + '">' + esc(w) + '</span>'
          : '<span class="' + cls + '">' + esc(w) + '</span>';
      }).join(" ");
      h += '<div class="sent' + (rtl ? " rtl" : "") + '">' +
             '<button class="say" data-say="' + i + '" aria-label="Play sentence">\u25b6</button>' +
             '<div class="body">' +
               '<div class="line">' + words + '</div>' +
               (rtl && sn[2] ? '<div class="tr">' + esc(sn[2]) + '</div>' : '') +
               '<div class="en">' + esc(sn[1]) + '</div>' +
             '</div></div>';
    });

    if(a.n && a.n.length){
      h += '<div class="notes"><dl>';
      a.n.forEach(n => { h += '<dt>' + n[0] + '</dt><dd>' + n[1] + '</dd>'; });
      h += '</dl></div>';
    }
    const done = progress.read.includes(a.id);
    h += '<button class="review-cta" id="mark"' + (done ? ' disabled' : '') + '>' +
         (done ? 'Marked as read' : 'Mark as read') + '</button></div>';
    return h;
  }

  let h = '<p class="muted" style="margin:16px 0 0">Tap any underlined word for its meaning. Texts get harder as you go down.</p>';
  d.articles.forEach(a => {
    h += '<button class="item art' + (progress.read.includes(a.id) ? " read" : "") + '" data-art="' + a.id + '">' +
         '<div class="meta"><span class="level">' + a.lv + '</span></div>' +
         '<h3' + (lang === "ar" ? ' class="rtl-word"' : '') + '>' + esc(a.t) + '</h3>' +
         '<div class="muted">' + (a.tr ? esc(a.tr) + ' \u00b7 ' : '') + esc(a.blurb) + '</div></button>';
  });
  return h;
}

function dueList(){
  const now = Date.now();
  return Object.keys(progress.saved)
    .filter(k => k.startsWith(lang + ":") && progress.saved[k].due <= now);
}

function viewWords(){
  const d = DATA[lang];
  if(queue){
    const k = queue[qIdx];
    const it = progress.saved[k];
    if(!it || qIdx >= queue.length) return viewDone();
    let h = '<p class="muted" style="margin:16px 0 0">Card ' + (qIdx+1) + ' of ' + queue.length + '</p>' +
      '<div class="card"><div class="prompt' + (lang === "ar" ? " ar" : "") + '">' + esc(it.w) + '</div>';
    if(showAns) h += '<div class="answer">' + (it.g ? esc(it.g) : '<span class="muted">no gloss saved</span>') + '</div>';
    h += '</div>';
    if(!showAns){
      h += '<div class="grade"><button id="hear">Hear it</button><button class="good" id="reveal">Show meaning</button></div>';
    }else{
      h += '<div class="grade"><button id="again">Again</button><button class="good" id="got">I knew it</button></div>';
    }
    return h;
  }

  const due = dueList().length;
  const saved = Object.keys(progress.saved).filter(k => k.startsWith(lang + ":")).length;
  let h = '<button class="review-cta" id="startrev"' + (due ? '' : ' disabled') + '>' +
    (due ? 'Review ' + due + ' word' + (due>1?'s':'') : (saved ? 'Nothing due right now' : 'Save words while reading to build a review deck')) +
    '</button>';

  if(saved){
    h += '<div class="item" style="margin-top:18px"><div class="muted" style="margin-bottom:6px">Your saved words</div>';
    Object.keys(progress.saved).filter(k => k.startsWith(lang + ":")).forEach(k => {
      const it = progress.saved[k];
      h += '<div class="vrow"><div class="vword"><b class="' + (lang==="ar"?"ar":"") + '">' + esc(it.w) + '</b>' +
           '<div class="muted">' + esc(it.g || "") + '</div></div>' +
           '<button class="add" aria-pressed="true" data-rm="' + esc(k) + '">Remove</button></div>';
    });
    h += '</div>';
  }

  h += '<div class="item" style="margin-top:18px"><div class="muted" style="margin-bottom:6px">Starter list \u00b7 ' + d.label + '</div>';
  d.vocab.forEach(v => {
    const key = lang + ":" + norm(v[0], lang);
    const on = !!progress.saved[key];
    h += '<div class="vrow"><div class="vword"><b class="' + (lang==="ar"?"ar":"") + '">' + esc(v[0]) + '</b>' +
         '<div class="muted">' + esc(v[1]) + '</div></div>' +
         '<button class="add" aria-pressed="' + on + '" data-add="' + esc(v[0]) + '" data-g="' + esc(v[1]) + '">' +
         (on ? 'Saved' : 'Save') + '</button></div>';
  });
  return h + '</div>';
}

function viewDone(){
  return '<div class="card"><div style="font-family:Newsreader,serif;font-size:24px">Deck cleared</div>' +
    '<div class="muted" style="margin-top:8px">Words you missed come back today. The rest return over the next few days.</div></div>' +
    '<button class="review-cta" id="endrev">Back to words</button>';
}

function viewGrammar(){
  const d = DATA[lang];
  let h = '<p class="muted" style="margin:16px 0 0">Short notes, in the order they start to matter.</p>';
  d.grammar.forEach((g, i) => {
    h += '<details class="g"><summary><span class="level">' + g.lv + '</span> ' + g.t + '</summary><div class="g-body">' + g.b;
    g.ex.forEach(e => {
      h += '<div class="ex"><div class="s' + (e[2] ? " ar" : "") + '">' + esc(e[0]) + '</div><div class="t">' + esc(e[1]) + '</div></div>';
    });
    h += '</div></details>';
  });
  return h;
}

/* ============================ RENDER ============================ */
function render(){
  document.documentElement.style.setProperty("--lang", lang === "fr" ? "var(--fr)" : "var(--ar)");
  el("btn-fr").setAttribute("aria-pressed", lang === "fr");
  el("btn-ar").setAttribute("aria-pressed", lang === "ar");
  document.querySelectorAll("nav.tabs button").forEach(b =>
    b.setAttribute("aria-selected", b.dataset.tab === tab));

  const m = el("main");
  m.innerHTML = tab === "read" ? viewRead() : tab === "words" ? viewWords() : viewGrammar();
  wire();
}

function wire(){
  const m = el("main");

  m.querySelectorAll("[data-art]").forEach(b =>
    b.onclick = () => { openArticle = b.dataset.art; scrollTo(0,0); render(); });

  const back = el("back");
  if(back) back.onclick = () => { openArticle = null; render(); };

  const mark = el("mark");
  if(mark) mark.onclick = () => {
    if(!progress.read.includes(openArticle)){ progress.read.push(openArticle); save(); }
    render(); toast("Nice. That's today done.");
  };

  const art = openArticle ? DATA[lang].articles.find(x => x.id === openArticle) : null;

  m.querySelectorAll("[data-say]").forEach(b =>
    b.onclick = () => say(art.s[+b.dataset.say][0], b));

  m.querySelectorAll(".tok[data-w]").forEach(t => {
    const go = () => openSheet(t.dataset.w, lookup(t.dataset.w, art, lang), art);
    t.onclick = go;
    t.onkeydown = e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); go(); } };
  });

  m.querySelectorAll("[data-add]").forEach(b => b.onclick = () => {
    const key = lang + ":" + norm(b.dataset.add, lang);
    if(progress.saved[key]) delete progress.saved[key];
    else progress.saved[key] = {w:b.dataset.add, g:b.dataset.g, box:1, due:Date.now()};
    save(); render();
  });
  m.querySelectorAll("[data-rm]").forEach(b => b.onclick = () => {
    delete progress.saved[b.dataset.rm]; save(); render();
  });

  const sr = el("startrev");
  if(sr) sr.onclick = () => { queue = dueList(); qIdx = 0; showAns = false; render(); };
  const er = el("endrev");
  if(er) er.onclick = () => { queue = null; render(); };

  const rv = el("reveal");
  if(rv) rv.onclick = () => { showAns = true; render(); };
  const hr = el("hear");
  if(hr) hr.onclick = () => say(progress.saved[queue[qIdx]].w);

  const DAY = 864e5;
  const step = good => {
    const it = progress.saved[queue[qIdx]];
    if(it){
      it.box = good ? Math.min(5, it.box + 1) : 1;
      it.due = Date.now() + (good ? [0,1,2,4,8,16][it.box] * DAY : 6e4);
    }
    save(); qIdx++; showAns = false;
    if(qIdx >= queue.length){ queue = null; el("main").innerHTML = viewDone(); wire(); return; }
    render();
  };
  const gt = el("got"); if(gt) gt.onclick = () => step(true);
  const ag = el("again"); if(ag) ag.onclick = () => step(false);
}

/* ============================ BOOT ============================ */
function setLang(l){
  if(lang === l) return;
  lang = l; openArticle = null; queue = null;
  el("sub").textContent = l === "fr"
    ? "Graded reading, vocabulary and grammar"
    : "Fully vowelled, with transliteration";
  render();
}
el("btn-fr").onclick = () => setLang("fr");
el("btn-ar").onclick = () => setLang("ar");
document.querySelectorAll("nav.tabs button").forEach(b =>
  b.onclick = () => { tab = b.dataset.tab; queue = null; render(); });
el("scrim").onclick = closeSheet;
document.addEventListener("keydown", e => { if(e.key === "Escape") closeSheet(); });

const saved = store.get();
if(saved && saved.saved) progress = saved;
render();

if("serviceWorker" in navigator){
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}
