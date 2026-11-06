// @ts-nocheck
// Interactive behaviors ported from the original page designs. Each returns a cleanup.
type Cleanup = () => void;

export function filosofiaScript(): Cleanup {
  const sections = document.querySelectorAll(".thesis-section");
  const navLinks = document.querySelectorAll(".thesis-link");
  const progressBar = document.getElementById("reading-progress-bar");
  const progressPercent = document.getElementById("reading-progress-percent");
  function update() {
    let current = "";
    const pos = window.scrollY + 200;
    sections.forEach((s) => { if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) current = s.id; });
    if (!current && sections.length) current = pos < sections[0].offsetTop ? sections[0].id : sections[sections.length - 1].id;
    navLinks.forEach((l) => {
      const on = l.getAttribute("data-target") === current;
      l.classList.toggle("bg-surface-container-high", on); l.classList.toggle("text-primary", on); l.classList.toggle("font-semibold", on);
      l.classList.toggle("text-on-surface-variant", !on); l.classList.toggle("hover:bg-surface-container", !on);
    });
    const f = sections[0], last = sections[sections.length - 1];
    if (f && last) {
      const total = last.offsetTop + last.offsetHeight - f.offsetTop;
      const pct = Math.round(Math.min(Math.max((window.scrollY - f.offsetTop + 180) / total, 0), 1) * 100);
      if (progressBar) progressBar.style.width = pct + "%";
      if (progressPercent) progressPercent.textContent = pct + "%";
    }
  }
  const click = (e) => {
    const el = document.getElementById(e.currentTarget.getAttribute("data-target"));
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
  };
  navLinks.forEach((l) => l.addEventListener("click", click));
  window.addEventListener("scroll", update, { passive: true });
  update();
  return () => { window.removeEventListener("scroll", update); navLinks.forEach((l) => l.removeEventListener("click", click)); };
}

export function teologiaScript(): Cleanup {
  const navLinks = document.querySelectorAll("#theology-nav a");
  const sections = Array.from(navLinks).map((l) => document.getElementById((l.getAttribute("href") || "").substring(1))).filter(Boolean);
  const bar = document.getElementById("scroll-bar");
  const txt = document.getElementById("scroll-percentage");
  function onScroll() {
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    const pct = dh > 0 ? Math.min(100, Math.max(0, Math.round((window.scrollY / dh) * 100))) : 0;
    if (bar) bar.style.width = pct + "%";
    if (txt) txt.innerText = pct + "%";
    let current = "";
    const pos = window.scrollY + 180;
    sections.forEach((s) => { if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) current = s.id; });
    if (!current && sections.length && pos < sections[0].offsetTop) current = sections[0].id;
    navLinks.forEach((l) => {
      const on = (l.getAttribute("href") || "").substring(1) === current;
      const arrow = l.querySelector(".material-symbols-outlined");
      l.classList.toggle("bg-surface-container", on); l.classList.toggle("text-primary", on); l.classList.toggle("font-semibold", on);
      l.classList.toggle("hover:bg-surface-container", !on); l.classList.toggle("text-on-surface-variant", !on);
      if (arrow) arrow.classList.toggle("opacity-0", !on);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener("scroll", onScroll);
}

export function raicesScript(): Cleanup {
  const inactive = "px-3.5 py-1.5 rounded hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase transition-all duration-200";
  const active = "px-3.5 py-1.5 rounded bg-primary text-on-primary font-label-sm text-label-sm tracking-wider uppercase transition-all duration-200 shadow-sm";
  const btns = document.querySelectorAll("[data-root-filter]");
  const click = (e) => {
    const cat = e.currentTarget.getAttribute("data-root-filter");
    btns.forEach((b) => (b.className = b === e.currentTarget ? active : inactive));
    document.querySelectorAll(".genealogy-node").forEach((n) => {
      n.style.display = cat === "all" || n.getAttribute("data-category") === cat ? "block" : "none";
    });
  };
  btns.forEach((b) => b.addEventListener("click", click));
  return () => btns.forEach((b) => b.removeEventListener("click", click));
}

export function compromisoScript(): Cleanup {
  const btn = document.getElementById("btn-ratificar");
  const modal = document.getElementById("modal-ratificacion");
  const cerrar = document.getElementById("btn-cerrar-modal");
  const confirmar = document.getElementById("btn-confirmar-modal");
  if (!btn || !modal || !cerrar || !confirmar) return () => {};
  const openM = () => { modal.classList.remove("hidden"); modal.classList.add("flex"); };
  const close = () => { modal.classList.remove("flex"); modal.classList.add("hidden"); };
  const conf = () => {
    btn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check_circle</span><span>Compromiso Ratificado</span>';
    btn.classList.remove("bg-primary"); btn.classList.add("bg-secondary", "cursor-default"); btn.disabled = true; close();
  };
  const bg = (e) => { if (e.target === modal) close(); };
  btn.addEventListener("click", openM); cerrar.addEventListener("click", close); confirmar.addEventListener("click", conf); modal.addEventListener("click", bg);
  return () => { btn.removeEventListener("click", openM); cerrar.removeEventListener("click", close); confirmar.removeEventListener("click", conf); modal.removeEventListener("click", bg); };
}

export function preguntasScript(): Cleanup {
  const offs = [];
  const on = (el, ev, fn) => { el.addEventListener(ev, fn); offs.push(() => el.removeEventListener(ev, fn)); };
  document.querySelectorAll(".faq-trigger").forEach((t) => on(t, "click", () => {
    const card = t.closest(".faq-item"); const c = card.querySelector(".faq-content"); const i = card.querySelector(".faq-icon");
    const open = !c.classList.contains("hidden");
    c.classList.toggle("hidden", open); if (i) i.style.transform = open ? "rotate(0deg)" : "rotate(180deg)";
  }));
  const fb = document.querySelectorAll(".filter-btn"); const items = document.querySelectorAll(".faq-item");
  fb.forEach((b) => on(b, "click", () => {
    fb.forEach((x) => { x.classList.remove("bg-primary", "text-on-primary"); x.classList.add("bg-surface-container-high", "text-on-surface"); });
    b.classList.add("bg-primary", "text-on-primary"); b.classList.remove("bg-surface-container-high", "text-on-surface");
    const f = b.getAttribute("data-filter");
    items.forEach((it) => (it.style.display = f === "all" || it.getAttribute("data-category") === f ? "block" : "none"));
  }));
  const s = document.getElementById("faq-search");
  if (s) on(s, "input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    items.forEach((it) => {
      const c = it.querySelector(".faq-content"); const i = it.querySelector(".faq-icon");
      if (it.textContent.toLowerCase().includes(q)) {
        it.style.display = "block";
        if (q.length > 2) { c.classList.remove("hidden"); if (i) i.style.transform = "rotate(180deg)"; }
      } else it.style.display = "none";
    });
  });
  return () => offs.forEach((f) => f());
}

export function reflexionesScript(): Cleanup {
  const offs = [];
  const on = (el, ev, fn) => { el.addEventListener(ev, fn); offs.push(() => el.removeEventListener(ev, fn)); };
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach((b) => on(b, "click", () => {
    chips.forEach((x) => { x.classList.remove("bg-primary", "text-on-primary"); x.classList.add("bg-surface-container", "text-on-surface-variant"); });
    b.classList.remove("bg-surface-container", "text-on-surface-variant"); b.classList.add("bg-primary", "text-on-primary");
  }));
  const essay = document.getElementById("essay-content");
  const inc = document.getElementById("font-increase"); const dec = document.getElementById("font-decrease");
  let size = 1.125;
  const apply = () => essay.querySelectorAll("p").forEach((p) => (p.style.fontSize = `${size}rem`));
  if (essay && inc && dec) {
    on(inc, "click", () => { if (size < 1.4) { size += 0.075; apply(); } });
    on(dec, "click", () => { if (size > 0.95) { size -= 0.075; apply(); } });
  }
  const toc = document.querySelectorAll(".toc-link");
  toc.forEach((l) => on(l, "click", () => {
    toc.forEach((x) => { x.classList.remove("bg-surface-container", "text-primary", "font-medium"); x.classList.add("text-on-surface-variant"); });
    l.classList.add("bg-surface-container", "text-primary", "font-medium"); l.classList.remove("text-on-surface-variant");
  }));
  return () => offs.forEach((f) => f());
}
