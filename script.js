/* =========================================================
   CROSS – interactions
   ========================================================= */

const translations = {
    de: {
        skip: "Zum Inhalt springen",
        menu: "Menü",
        navHome: "Startseite",
        navProject: "Projekt",
        navApproach: "Vorgehensweise",
        navBenefits: "Vorteile",
        navNews: "Neuigkeiten",
        navPublications: "Veröffentlichungen",
        navContact: "Kontakt",

        heroTag: "Von natürlicher Sprache zu bewerteten Roboterszenarien.",
        heroLead: "CROSS entwickelt eine Software-Toolchain, die Beschreibungen in natürlicher Sprache automatisch in Roboterszenarien überführt und diese anschließend mit Simulation und KI nachvollziehbar visualisiert und bewertet.",
        ctaHow: "So funktioniert es",
        ctaContact: "Team kontaktieren",
        heroFunding: "Gefördert vom Ministerium für Wirtschaft, Arbeit und Tourismus Baden-Württemberg im Rahmen des Programms Invest BW (Innovation IV).",
        duration: "Projektlaufzeit",

        challengeTitle: "Die Herausforderung",
        challengeP1: "Kollaborative Roboter werden in der Industrie zunehmend eingesetzt, um Menschen bei der Arbeit zu unterstützen, und bieten dabei Flexibilität und Effizienz. Sie sicher zu integrieren und gleichzeitig die Produktivität zu erhalten, ist eine große Herausforderung.",
        challengeP2: "Heute erfordert die Integration viele manuelle, iterative Schritte sowie viel Expertenwissen und Aufwand.",
        goalTitle: "Unser Ziel",
        goalP1: "CROSS entwickelt ein innovatives, simulationsbasiertes Software-Tool zur Sicherheitsvalidierung und Optimierung von Mensch-Roboter-Kollaborationssystemen.",
        goalP2: "Die Toolchain erzeugt Roboterszenarien automatisch aus natürlicher Sprache und bewertet sie mit Simulation und KI.",
        benefitTitle: "Der Nutzen",
        benefitP1: "Schnellere Planung, ein leichterer Zugang für Nicht-Fachleute und eine geringere Abhängigkeit von einem einzelnen Roboterhersteller.",

        approachIntro: "CROSS verbindet jeden Schritt von der Idee bis zum bewerteten Szenario in einer einzigen Toolchain.",
        s1Short: "Natürliche Sprache",
        s2Short: "KI-Anforderungen",
        s3Short: "SDL-Formalisierung",
        s4Short: "Simulation",
        s5Short: "KPI-Bewertung",
        s1Title: "Natürliche Sprache",
        s1Text: "Nutzer beschreiben das geplante Kollaborationsszenario in einfachen Worten. Programmier- oder Simulationskenntnisse sind nicht nötig.",
        s2Title: "KI-basiertes Requirements Engineering",
        s2Text: "KI leitet aus der Beschreibung klare, strukturierte Anforderungen ab.",
        s3Title: "SDL-Formalisierung",
        s3Text: "Die Anforderungen werden in eine formale, maschinenlesbare Szenariobeschreibung übersetzt.",
        s4Title: "Simulation",
        s4Text: "Das Szenario wird simuliert und visualisiert, sodass Interaktionen vor der Inbetriebnahme bewertet werden können.",
        s5Title: "KPI-Bewertung",
        s5Text: "Sicherheits- und Effizienzkennzahlen werden berechnet und verständlich dargestellt.",
        vendorTitle: "Von Grund auf herstellerunabhängig",
        vendorText: "CROSS basiert auf offenen, herstellerunabhängigen Standards und arbeitet mit vielen Simulationswerkzeugen. Nutzer sind nicht an einen bestimmten Roboterhersteller gebunden.",

        b1Title: "Schnellere Planung und Bewertung",
        b1Text: "Automatisierung ersetzt viele manuelle, iterative Schritte in Planung und Sicherheitsvalidierung.",
        b2Title: "Zugänglich für Nicht-Fachleute",
        b2Text: "Eine Beschreibung in natürlicher Sprache genügt, um ein Szenario zu erstellen und zu bewerten.",
        b3Title: "Geringere Kosten, besonders für KMU",
        b3Text: "Weniger Expertenaufwand und kürzere Projekte machen kollaborative Roboter für mehr Unternehmen erschwinglich.",
        b4Title: "Kein Vendor-Lock-in",
        b4Text: "Offene Standards und die Kompatibilität mit vielen Simulationswerkzeugen sichern die Unabhängigkeit von einzelnen Herstellern.",
        b5Title: "Verständliche Ergebnisse",
        b5Text: "Klare Visualisierungen und Bewertungen unterstützen fundierte, transparente Entscheidungen.",

        newsMonth: "Okt. 2026",
        newsPlace: "München, Deutschland",
        newsTitle: "CROSS auf der TÜV SÜD Mobile Robotics Conference vorgestellt",
        newsP1: "Dr. Ali Al-Yacoub (TWT GmbH Science & Innovation) stellte CROSS auf der TÜV-SÜD-Konferenz „Mobile Robotics: Safety-Critical Applications & Machinery“ in München vor.",
        newsP2: "In seinem Vortrag „Automating risk assessment for human-robot collaboration“ zeigte er, wie die CROSS-Toolchain die Sicherheitsbewertung kollaborativer Roboteranwendungen automatisiert.",

        pubRead: "Paper lesen",
        pubCopy: "Zitat kopieren",

        contactTitle: "Kontakt",
        contactIntro: "Fragen zu CROSS oder Interesse an einer Zusammenarbeit? Schreiben Sie dem Projektteam.",

        footerFunding: "CROSS wird vom Ministerium für Wirtschaft, Arbeit und Tourismus Baden-Württemberg im Rahmen des Programms Invest BW (Innovation IV) gefördert. Projektlaufzeit: 01.03.2026 – 28.02.2028. Das Projekt wird vollständig von der TWT GmbH Science & Innovation durchgeführt.",
        backTop: "Nach oben"
    }
};

/* Small strings built by the script */
const ui = {
    en: {
        step: (n, t) => `Step ${n} of ${t}`,
        month: (n, t) => `Month ${n} of ${t}`,
        before: "Starts 1 March 2026",
        done: "Completed",
        copied: "Citation copied",
        copyFail: "Select the text above to copy",
        prev: "Previous step",
        next: "Next step"
    },
    de: {
        step: (n, t) => `Schritt ${n} von ${t}`,
        month: (n, t) => `Monat ${n} von ${t}`,
        before: "Start am 1. März 2026",
        done: "Abgeschlossen",
        copied: "Zitat kopiert",
        copyFail: "Text oben markieren, um ihn zu kopieren",
        prev: "Vorheriger Schritt",
        next: "Nächster Schritt"
    }
};

let currentLang = "en";
const originals = new Map();

document.querySelectorAll("[data-i18n]").forEach(el => {
    originals.set(el, el.textContent.replace(/\s+/g, " ").trim());
});

function applyLanguage(lang) {
    currentLang = (lang === "de") ? "de" : "en";
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = currentLang === "en"
            ? originals.get(el)
            : (translations[currentLang][key] ?? originals.get(el));
    });

    document.querySelectorAll(".lang-switch button").forEach(btn => {
        btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
    });

    document.getElementById("step-prev").setAttribute("aria-label", ui[currentLang].prev);
    document.getElementById("step-next").setAttribute("aria-label", ui[currentLang].next);

    updateStepCounts();
    updateTimeline();

    try { localStorage.setItem("cross-lang", currentLang); } catch (e) { /* storage unavailable */ }
}

document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

/* ---------------- Header: scrolled state ---------------- */

const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------------- Mobile menu ---------------- */

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-nav");

function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    header.classList.toggle("is-scrolled", open || window.scrollY > 24);
}

menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
window.matchMedia("(min-width: 961px)").addEventListener("change", e => { if (e.matches) setMenu(false); });

/* ---------------- Scroll spy ---------------- */

const navLinks = [...nav.querySelectorAll("a")];
const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id));
    });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

/* ---------------- Project timeline ---------------- */

function updateTimeline() {
    const start = new Date(2026, 2, 1);
    const end = new Date(2028, 1, 28, 23, 59);
    const now = new Date();
    const total = 24;
    const pct = Math.min(100, Math.max(0, (now - start) / (end - start) * 100));
    const label = document.getElementById("timeline-month");

    if (now < start) label.textContent = ui[currentLang].before;
    else if (now > end) label.textContent = ui[currentLang].done;
    else {
        const month = (now.getFullYear() - 2026) * 12 + now.getMonth() - 2 + 1;
        label.textContent = ui[currentLang].month(month, total);
    }
    requestAnimationFrame(() => {
        document.getElementById("timeline-fill").style.width = pct + "%";
    });
}

/* ---------------- Approach pipeline ---------------- */

const pipeline = document.getElementById("pipeline");
const tabs = [...pipeline.querySelectorAll(".step-tab")];
const panels = [...pipeline.querySelectorAll(".step-panel")];
const progress = document.getElementById("pipeline-progress");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let active = 0;
let autoTimer = null;
let autoStart = 0;
const AUTO_MS = 5000;

function updateStepCounts() {
    panels.forEach((p, i) => {
        p.querySelector(".step-count").textContent = ui[currentLang].step(i + 1, panels.length);
    });
}

function showStep(index, focus = false) {
    active = (index + tabs.length) % tabs.length;
    tabs.forEach((tab, i) => {
        const on = i === active;
        tab.setAttribute("aria-selected", String(on));
        tab.tabIndex = on ? 0 : -1;
        tab.classList.toggle("is-done", i < active);
        panels[i].hidden = !on;
    });
    progress.style.width = (active / (tabs.length - 1)) * 100 + "%";
    if (focus) tabs[active].focus();
    autoStart = performance.now();
}

function stopAuto() {
    pipeline.classList.remove("is-auto");
    cancelAnimationFrame(autoTimer);
    autoTimer = null;
}

function autoLoop(t) {
    const p = Math.min(1, (t - autoStart) / AUTO_MS);
    tabs[active].querySelector(".step-num").style.setProperty("--p", (p * 100).toFixed(1));
    if (p >= 1) showStep(active + 1);
    autoTimer = requestAnimationFrame(autoLoop);
}

function startAuto() {
    if (reduceMotion || autoTimer) return;
    pipeline.classList.add("is-auto");
    autoStart = performance.now();
    autoTimer = requestAnimationFrame(autoLoop);
}

tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => { stopAuto(); showStep(i); });
    tab.addEventListener("keydown", e => {
        const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
        if (e.key in keys) { e.preventDefault(); stopAuto(); showStep(active + keys[e.key], true); }
        if (e.key === "Home") { e.preventDefault(); stopAuto(); showStep(0, true); }
        if (e.key === "End") { e.preventDefault(); stopAuto(); showStep(tabs.length - 1, true); }
    });
});
document.getElementById("step-prev").addEventListener("click", () => { stopAuto(); showStep(active - 1); });
document.getElementById("step-next").addEventListener("click", () => { stopAuto(); showStep(active + 1); });

/* swipe on touch screens */
let touchX = null;
const stage = pipeline.querySelector(".pipeline-stage");
stage.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
stage.addEventListener("touchend", e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) { stopAuto(); showStep(active + (dx < 0 ? 1 : -1)); }
    touchX = null;
});

/* auto-advance only while the section is on screen */
let userTookOver = false;
pipeline.addEventListener("pointerdown", () => { userTookOver = true; });
pipeline.addEventListener("keydown", () => { userTookOver = true; });
new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !userTookOver) startAuto();
    else stopAuto();
}, { threshold: 0.4 }).observe(pipeline);

/* ---------------- Hero: hand follows the pointer ---------------- */

const hand = document.querySelector(".hero-hand");
if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelector(".hero").addEventListener("pointermove", e => {
        const x = (e.clientX / window.innerWidth - .5) * 24;
        const y = (e.clientY / window.innerHeight - .5) * 18;
        hand.style.setProperty("--px", x.toFixed(1) + "px");
        hand.style.setProperty("--py", y.toFixed(1) + "px");
    });
}

/* ---------------- Copy citation ---------------- */

const copyBtn = document.getElementById("copy-citation");
copyBtn.addEventListener("click", async () => {
    const text = document.getElementById("pub-citation").textContent.replace(/\s+/g, " ").trim();
    const label = copyBtn.textContent;
    try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = ui[currentLang].copied;
    } catch (e) {
        copyBtn.textContent = ui[currentLang].copyFail;
    }
    setTimeout(() => { copyBtn.textContent = label; }, 2200);
});

/* ---------------- Init ---------------- */

let saved = "en";
try { saved = localStorage.getItem("cross-lang") || "en"; } catch (e) { /* storage unavailable */ }
showStep(0);
applyLanguage(saved);
