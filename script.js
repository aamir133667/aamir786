// Central config: edit content and links here.
window.PROFILE = {
  name: "Aamir Abbas",
  title: "Web Developer • Programmer • AI Explorer",
  education: "BCA",
  roles: ["Web Developer","Python Programmer","C++ Programmer","AI Explorer","Full Stack Learner","Language Learner","Future AI Engineer"],
  links: {
    GitHub: "https://github.com/aamirabbas133667",
    LinkedIn: "https://www.linkedin.com/search/results/people/?keywords=Aamir%20Abbas",
    Instagram: "https://instagram.com/aamir.86043",
    Email: "mailto:aamirabbas133667@gmail.com",
    Portfolio: "index.html",
    Resume: "resume.html"
  },
  marquee: ["WEB DEVELOPMENT","PYTHON","C++","JAVASCRIPT","NODE.JS","AI","ROBOTICS","FRENCH","GERMAN","FULL STACK","GENERATIVE AI"],
  stats: [{n:5,s:"+",l:"Projects"},{n:10,s:"+",l:"Technologies"},{n:4,s:"",l:"Languages"},{n:"∞",s:"",l:"Learning"}],
  cards: ["BCA Student","Web Developer","Python Programmer","C++ Programmer","AI Explorer","Language Learner"],
  // level = visual learning indicator only, not a certification score
  skills: {
    "Frontend Development": [["HTML","Page structure and semantics",80],["CSS","Layouts, responsive design",75],["JavaScript","Interactivity and logic",70]],
    "Programming": [["Python","Scripts and AI tooling",70],["C++","Core programming concepts",60],["JavaScript","Apps in the browser and Node",70]],
    "Backend": [["Node.js","Server-side JavaScript",55],["Express.js","Routing and middleware",50],["REST APIs","Connecting front and back ends",55]],
    "AI & Technology": [["Generative AI","Exploring modern models",65],["AI APIs","Calling AI from apps",60],["AI Applications","Chat and learning tools",55],["Prompt Engineering","Writing clear prompts",65]],
    "Languages": [["Hindi","Native",100],["English","Communication and learning",85],["French","Currently learning",25],["German","B1 level",55]]
  },
  projects: [
    {id:"ngi",name:"NGI",img:"assets/images/project-ngi.jpg",desc:"A multi-purpose digital platform concept combining learning, AI, language learning, video content and online services.",tech:["HTML","CSS","JavaScript","Node.js","MongoDB","AI APIs"],features:["Learning and language modules","AI assistant integration","Video content area"],demo:"NGI.html",repo:"https://github.com/aamirabbas133667"},
    {id:"polylingo",name:"PolyLingo AI",img:"assets/images/polylingo.jpg",desc:"An AI-powered language learning concept designed to make language practice more interactive and engaging.",tech:["HTML","CSS","JavaScript","AI"],features:["Interactive practice","AI conversation partner"],demo:"poly.html",repo:"https://github.com/aamirabbas133667"},
    {id:"mytube",name:"MyTube",img:"assets/images/mytube.jpg",desc:"A video-platform concept focused on creating a clean and simple video browsing experience.",tech:["HTML","CSS","JavaScript"],features:["Clean video grid","Simple browsing"],demo:"tube.html",repo:"https://github.com/aamirabbas133667"},
    {id:"aimachine",name:"AI Machine",img:"assets/images/ai-machine.jpg",desc:"An AI chat application concept connecting a modern web interface with an AI backend.",tech:["HTML","CSS","JavaScript","Node.js","AI API"],features:["Chat interface","Backend AI connection"],demo:"ai.html",repo:"https://github.com/aamirabbas133667"},
    {id:"dukaan",name:"Dukaan",img:"assets/images/dukaan.jpg",desc:"A modern e-commerce and digital store concept with product browsing and interactive UI.",tech:["HTML","CSS","JavaScript"],features:["Product browsing","Interactive UI"],demo:"dukaan.html",repo:"https://github.com/aamirabbas133667"}
  ],
  journey: [["2024","Started exploring programming and web development."],["2025","Worked on web development projects and expanded my programming knowledge."],["2026","Pursuing BCA while learning Python, C++, AI and modern web technologies."],["2026","Started learning French and continuing German."],["Future","AI Engineering + Robotics + Building useful technology."]],
  languages: [["Hindi","हिं","Native Language"],["English","Aa","Communication & Learning"],["French","Fr","Currently Learning"],["German","De","B1 Level"]],
  learning: ["Python","C++","AI","French","German","Web Development","Backend Development","Robotics","Full Stack Development"],
  goals: ["AI Engineering","Robotics","Intelligent Systems","Full Stack Applications","Startup & Product Building"],
  questions: ["Who is Aamir Abbas?","What programming languages does Aamir use?","What projects has Aamir built?","What is Aamir currently learning?","What are Aamir's future goals?"],
  gallery: [] // add file names from assets/images/gallery/, e.g. "one.jpg"
};
(function () {
  const P = PROFILE, $ = id => document.getElementById(id);
  const mq = a => [...a, ...a].map(t => `<span>${t}</span><i>✦</i>`).join("");
  $("marquee-a").innerHTML = mq(P.marquee); $("marquee-b").innerHTML = mq([...P.marquee].reverse());
  const pg = {"BCA Student":"bca.html","Web Developer":"web.html","Python Programmer":"py.html","Language Learner":"lan.html"};
  $("about-cards").innerHTML = P.cards.map(c => `<li class="card">${pg[c] ? `<a href="${pg[c]}">${c}</a>` : c}</li>`).join("");
  $("stats").innerHTML = P.stats.map(s => `<div class="card stat"><b data-n="${s.n}" data-s="${s.s}">${s.n}${s.s}</b><span>${s.l}</span></div>`).join("");
  $("skill-grid").innerHTML = Object.entries(P.skills).map(([cat, list]) => `<div class="card reveal"><h3>${cat}</h3>${list.map(([n, d, v]) => `<div class="skill"><div><strong>${n}</strong><small>${d}</small></div><div class="bar" aria-hidden="true"><span style="--v:${v}%"></span></div></div>`).join("")}</div>`).join("");
  $("timeline").innerHTML = P.journey.map(([y, t]) => `<li class="reveal"><time>${y}</time><p>${t}</p></li>`).join("");
  $("lang-grid").innerHTML = P.languages.map(([n, g, d]) => `<div class="card lang reveal"><span class="glyph">${g}</span><h3>${n}</h3><p>${d}</p></div>`).join("");
  const l = P.learning.map(x => `<span class="chip">${x}</span>`).join(""); $("learn-track").innerHTML = l + l;
  $("goal-grid").innerHTML = P.goals.map(g => `<div class="card goal reveal"><h3>${g}</h3></div>`).join("");
  $("link-grid").innerHTML = Object.entries(P.links).map(([k, v]) => `<a class="card link reveal" href="${v}" target="_blank" rel="noopener">${k}</a>`).join("");
  $("footer-links").innerHTML = ["GitHub", "LinkedIn", "Instagram", "Email"].map(k => `<a href="${P.links[k]}" target="_blank" rel="noopener">${k}</a>`).join("");
  
  $("gallery-grid").innerHTML = P.gallery.length ? P.gallery.map(f => `<button class="shot" data-src="assets/images/gallery/${f}"><img src="assets/images/gallery/${f}" alt="Gallery photo" loading="lazy"></button>`).join("") : `<p class="muted">Add image file names to <code>gallery</code> in data/profile.js to fill this gallery.</p>`;
  const lb = $("lightbox"), lbi = $("lightbox-img");
  $("gallery-grid").addEventListener("click", e => { const b = e.target.closest(".shot"); if (!b) return; lbi.src = b.dataset.src; lb.hidden = false; });
  lb.addEventListener("click", () => lb.hidden = true);
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });
  const nav = $("nav"), menu = $("menu-btn");
  menu.addEventListener("click", () => { const o = nav.classList.ggle("open"); menu.setAttribute("aria-expanded", o); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); menu.setAttribute("aria-expanded", false); }));
  addEventListener("scroll", () => { nav.classList.toggle("small", scrollY > 40); $("top").classList.toggle("show", scrollY > 600); }, { passive: true });
  $("contact-form").addEventListener("submit", async e => {
    e.preventDefault(); const f = e.target, n = $("form-note"), b = f.querySelector("button"), v = f.elements;
    b.disabled = true; n.textContent = "Sending...";
    try {
      const r = await fetch("https://formsubmit.co/ajax/aamirabbas0078@gmail.com", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name: v.name.value, email: v.email.value, message: v.message.value, _subject: "New message from portfolio" }) });
      if (!r.ok) throw 0; f.reset(); n.textContent = "Message sent. Thank you!";
    } catch { n.textContent = "Couldn't send. Please email aamirabbas133667@gmail.com directly."; }
    b.disabled = false;
  });
  addEventListener("load", () => $("loader").classList.add("done"));
})();
(function () {
  const grid = document.getElementById("project-grid"), modal = document.getElementById("modal"), body = document.getElementById("modal-body");
  const tags = t => t.map(x => `<li>${x}</li>`).join("");
  grid.innerHTML = PROFILE.projects.map(p => `<article class="card project reveal">
    <img src="${p.img}" alt="${p.name} preview" loading="lazy" onerror="this.style.visibility='hidden'">
    <div class="pad"><h3>${p.name}</h3><p>${p.desc}</p><ul class="tags">${tags(p.tech)}</ul>
    <div class="btns"><a class="btn sm" href="${p.demo}" target="_blank" rel="noopener">Live Demo</a><a class="btn sm ghost" href="${p.repo}" target="_blank" rel="noopener">GitHub</a><button class="btn sm ghost" data-id="${p.id}">Details</button></div></div></article>`).join("");
  let last;
  grid.addEventListener("click", e => {
    const id = e.target.dataset.id; if (!id) return;
    const p = PROFILE.projects.find(x => x.id === id); last = e.target;
    body.innerHTML = `<img src="${p.img}" alt="${p.name} preview" onerror="this.style.display='none'"><h3 id="modal-title">${p.name}</h3><p>${p.desc}</p>
      <h4>Technologies</h4><ul class="tags">${tags(p.tech)}</ul><h4>Features</h4><ul class="list">${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
      <div class="btns"><a class="btn sm" href="${p.demo}" target="_blank" rel="noopener">Live Demo</a><a class="btn sm ghost" href="${p.repo}" target="_blank" rel="noopener">GitHub</a></div>`;
    modal.hidden = false; document.getElementById("modal-close").focus();
  });
  const close = () => { modal.hidden = true; last && last.focus(); };
  modal.addEventListener("click", e => { if (e.target === modal || e.target.id === "modal-close") close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) close(); });
})();
// ===== AI configuration (no API keys here) =====
const AI_CONFIG = { endpoint: "/api/chat", enabled: false };
// Set enabled:true once a backend answers POST /api/chat with { reply: "..." }.
(function () {
  const log = document.getElementById("chat-log"), form = document.getElementById("chat-form"), input = document.getElementById("chat-input");
  const add = (cls, text) => { const p = document.createElement("p"); p.className = "msg " + cls; p.textContent = text; log.appendChild(p); log.scrollTop = log.scrollHeight; };
  document.getElementById("chat-suggest").innerHTML = PROFILE.questions.map(q => `<button type="button">${q}</button>`).join("");
  document.getElementById("chat-suggest").addEventListener("click", e => { if (e.target.tagName === "BUTTON") { input.value = e.target.textContent; form.requestSubmit(); } });
  add("bot", "Hi! Ask me about Aamir's projects, skills or learning journey.");
  form.addEventListener("submit", async e => {
    e.preventDefault(); const q = input.value.trim(); if (!q) return;
    add("user", q); input.value = "";
    if (!AI_CONFIG.enabled) return add("bot", "The AI backend isn't connected yet. Once /api/chat is live, answers will appear here.");
    try {
      const r = await fetch(AI_CONFIG.endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: q }) });
      if (!r.ok) throw new Error(r.status);
      add("bot", (await r.json()).reply);
    } catch { add("bot", "Couldn't reach the AI service. Try again later."); }
  });
})();
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const roles = PROFILE.roles, el = document.getElementById("typed");
  if (reduce) el.textContent = roles[0]; else {
    let i = 0, c = 0, del = false;
    (function tick() {
      const w = roles[i]; el.textContent = w.slice(0, c);
      if (!del && c === w.length) { del = true; return setTimeout(tick, 1400); }
      if (del && c === 0) { del = false; i = (i + 1) % roles.length; }
      c += del ? -1 : 1; setTimeout(tick, del ? 40 : 80);
    })();
  }
  const count = b => {
    const n = +b.dataset.n; if (isNaN(n) || reduce) return;
    const t0 = performance.now();
    (function f(t) { const k = Math.min((t - t0) / 1200, 1); b.textContent = String(Math.round(n * k)).padStart(n < 10 ? 2 : 1, "0") + b.dataset.s; k < 1 && requestAnimationFrame(f); })(t0);
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; e.target.classList.add("in");
    e.target.querySelectorAll("[data-n]").forEach(count); io.unobserve(e.target);
  }), { threshold: .15 });
  document.querySelectorAll(".reveal, #stats").forEach(x => io.observe(x));
  const links = [...document.querySelectorAll("#nav a")];
  const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.hash === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  links.forEach(a => { const s = document.querySelector(a.hash); s && so.observe(s); });
  const cv = document.getElementById("particles"); if (reduce || !cv) return;
  const x = cv.getContext("2d"); let w, h, ps = [];
  const size = () => { w = cv.width = cv.offsetWidth; h = cv.height = cv.offsetHeight; ps = Array.from({ length: Math.min(40, w / 30) }, () => ({ x: Math.random() * w, y: Math.random() * h, v: .1 + Math.random() * .3, r: 1 + Math.random() * 1.5 })); };
  size(); addEventListener("resize", size);
  (function draw() { x.clearRect(0, 0, w, h); x.fillStyle = "rgba(125,211,252,.5)"; ps.forEach(p => { p.y -= p.v; if (p.y < 0) p.y = h; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.28); x.fill(); }); requestAnimationFrame(draw); })();
})();

// ===== Page switching: only one page visible at a time =====
(function () {
  const items = document.querySelectorAll("[data-page]");
  const pages = new Set([...items].map(e => e.dataset.page));
  function show(id) {
    if (!pages.has(id)) id = "home";
    items.forEach(e => e.classList.toggle("page-hidden", e.dataset.page !== id));
    document.querySelectorAll("#nav ul a").forEach(a => a.classList.toggle("active", a.hash === "#" + id));
    window.scrollTo(0, 0);
    if (location.hash !== "#" + id) history.replaceState(null, "", "#" + id);
  }
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute("href") === "#") return;
    e.preventDefault(); show(a.hash.slice(1));
  });
  addEventListener("hashchange", () => show(location.hash.slice(1)));
  show(location.hash.slice(1) || "home");
})();
