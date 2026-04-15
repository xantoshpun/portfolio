# Portfolio Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement 28 improvements across 10 categories to elevate the portfolio from 7.9/10 to 9.0+/10.

**Architecture:** Pure Astro static site — no framework JS. Changes span CSS variables in `global.css`, Astro component rewrites, new `Stats.astro` component, one new data file (`stats.json`), and data updates in existing JSON files. No new dependencies except `@astrojs/sitemap`.

**Tech Stack:** Astro 4.15, vanilla JS, CSS custom properties, Formspree (form backend)

**Dev command:** `npm run dev` (port 4321) · **Build:** `npm run build`

---

## Task 1: Global CSS — line-height, prefers-reduced-motion, odd-card, section-sep

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Update body line-height and add section separator CSS**

In `src/styles/global.css`, find the `body` rule (line ~21) and change `line-height: 1.6` to `1.75`. Then find the `section` rule (~line 45) and add the section separator class right after it:

```css
body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  line-height: 1.75;
  overflow-x: hidden;
}
```

After the `.container` rule, add:

```css
/* ── Section separator ── */
.section-sep {
  height: 1px;
  background: rgba(255,255,255,0.05);
  position: relative;
  z-index: 1;
}
.section-sep::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 1px;
  background: rgba(25,230,206,0.25);
}
```

- [ ] **Step 2: Add prefers-reduced-motion at the end of global.css**

Append to the very end of `src/styles/global.css`:

```css
/* ── Accessibility: reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 3: Add odd project card centering to global.css**

Find the end of `global.css` (before the reduced-motion block you just added) and add:

```css
/* ── Odd project card centering ── */
.projects-grid .project-card:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  max-width: 50%;
  margin-inline: auto;
}
@media (max-width: 768px) {
  .projects-grid .project-card:last-child:nth-child(odd) {
    max-width: 100%;
  }
}
```

- [ ] **Step 4: Verify build passes**

```bash
cd F:/Portfolio && npm run build
```

Expected: Build completes with no errors.

- [ ] **Step 5: Commit**

```bash
cd F:/Portfolio
git add src/styles/global.css
git commit -m "style: line-height 1.75, section-sep, reduced-motion, odd-card fix"
```

---

## Task 2: FloatingIcons — opacity and animation speed

**Files:**
- Modify: `src/components/FloatingIcons.astro`

- [ ] **Step 1: Update opacity from 0.05 to 0.10**

In `src/components/FloatingIcons.astro`, in the `<style>` block, change:

```css
.float-icon {
  position: absolute;
  opacity: 0.10;
  animation: gentle-float ease-in-out infinite;
}
```

- [ ] **Step 2: Speed up the float animation (22–38s → 8–14s)**

In the same file, find the `dur` calculation in the frontmatter script and change it:

```js
const dur  = 8 + (i * 0.86) % 6;   // was: 22 + (i * 3.1) % 16  → now 8–14s
```

- [ ] **Step 3: Verify in dev server**

```bash
npm run dev
```

Open http://localhost:4321 — floating icons should be visibly more opaque and animating noticeably.

- [ ] **Step 4: Commit**

```bash
cd F:/Portfolio
git add src/components/FloatingIcons.astro
git commit -m "style: floating icons opacity 0.10, speed 8-14s"
```

---

## Task 3: Data updates — heroBio, about focus card, Kaggle social, skills reorder

**Files:**
- Modify: `src/data/meta.json`
- Modify: `src/data/about.json`
- Modify: `src/data/skills.json`

- [ ] **Step 1: Update meta.json — heroBio and add Kaggle social link**

Replace the entire contents of `src/data/meta.json`:

```json
{
  "name": "Humendra Pun",
  "initials": "HP",
  "location": "United Kingdom",
  "email": "xantoshpun@gmail.com",
  "titles": ["Data Analyst", "Python Developer", "Power BI Specialist", "ML Practitioner"],
  "heroBio": "I turn messy datasets into clear decisions — building Power BI dashboards, Python pipelines, and ML models that actually get used.",
  "social": {
    "linkedin":  "https://www.linkedin.com/in/humendrapun/",
    "github":    "https://github.com/xantoshpun",
    "kaggle":    "https://www.kaggle.com/xantoshpun",
    "resume":    "https://drive.google.com/file/d/1ZL4OMmD4Fs0m-SvoUHt0YCIhbsTmSd8W/view?usp=sharing"
  }
}
```

- [ ] **Step 2: Update about.json — fix focus card text**

In `src/data/about.json`, find the focus card entry and change:

```json
{ "icon": "focus", "title": "Focused on", "sub": "Data analysis, ML pipelines & BI dashboards — turning raw data into decisions." }
```

The full `cards` array should now be:

```json
"cards": [
  { "icon": "degree",   "title": "MSc Software Engineering", "sub": "University of West London" },
  { "icon": "work",     "title": "Data Specialist",          "sub": "CloudFactory" },
  { "icon": "location", "title": "Based in",                 "sub": "United Kingdom" },
  { "icon": "focus",    "title": "Focused on",               "sub": "Data analysis, ML pipelines & BI dashboards — turning raw data into decisions." }
]
```

- [ ] **Step 3: Reorder skills.json — most to least expert**

Replace the entire contents of `src/data/skills.json` with the reordered version (Data Analysis first, BI second, Python third, Tools fourth, ML fifth, AI last):

```json
[
  {
    "icon": "🗄️",
    "title": "Data Analysis & SQL",
    "color": "cyan",
    "tags": ["SQL", "PostgreSQL", "MySQL", "CTEs", "Window Functions", "ETL", "Data Cleaning", "EDA", "Azure Data Studio"]
  },
  {
    "icon": "📊",
    "title": "Business Intelligence",
    "color": "purple",
    "tags": ["Power BI", "DAX", "Tableau", "Excel", "Pivot Tables", "KPI Design", "Dashboards", "Forecasting"]
  },
  {
    "icon": "🐍",
    "title": "Python & Programming",
    "color": "green",
    "tags": ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Scripting"]
  },
  {
    "icon": "⚙️",
    "title": "Tools & Workflow",
    "color": "cyan",
    "tags": ["Git", "GitHub", "VS Code", "Jupyter Notebooks", "Agile", "Scrum"]
  },
  {
    "icon": "🤖",
    "title": "Machine Learning",
    "color": "purple",
    "tags": ["Scikit-learn", "XGBoost", "Classification", "Regression", "Feature Engineering", "Statistical Analysis", "A/B Testing", "Time Series"]
  },
  {
    "icon": "✨",
    "title": "AI & Automation",
    "color": "green",
    "tags": ["ChatGPT", "Claude", "Prompt Engineering", "GitHub Copilot", "Power Automate", "Automated Reporting", "OpenAI API"]
  }
]
```

- [ ] **Step 4: Commit**

```bash
cd F:/Portfolio
git add src/data/meta.json src/data/about.json src/data/skills.json
git commit -m "content: rewrite hero tagline, fix about focus card, add Kaggle, reorder skills"
```

---

## Task 4: Hero component — avatar, Open to Work badge, typewriter bold

**Files:**
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Restructure the Hero template to add avatar and badge**

Replace the entire contents of `src/components/Hero.astro` with:

```astro
---
import meta from '../data/meta.json';
---

<section id="hero">
  <div class="hero-glow"></div>
  <div class="hero-content">
    <div class="hero-left">
      <div class="hero-hello reveal" style="--d:0ms">
        <span class="hl">&lt;</span> HELLO WORLD <span class="hl">/&gt;</span>
      </div>
      <div class="open-badge reveal" style="--d:100ms">
        <span class="pulse-dot"></span>
        Open to Work
      </div>
      <h1 class="hero-name reveal" style="--d:350ms">
        I'm <span class="name-colored">{meta.name}</span>
      </h1>
      <div class="hero-role reveal" style="--d:700ms">
        <span id="typewriter"></span><span class="cursor"></span>
      </div>
      <p class="hero-bio reveal" style="--d:1050ms">{meta.heroBio}</p>
      <div class="hero-btns reveal" style="--d:1400ms">
        <a href="#projects" class="btn-primary">View Projects</a>
        <a href="#contact"  class="btn-ghost">Get in Touch</a>
      </div>
    </div>
    <div class="hero-avatar reveal" style="--d:200ms" aria-hidden="true">
      <span class="initials">{meta.initials}</span>
    </div>
  </div>
  <a href="#about" class="hero-scroll">
    <div class="scroll-line"></div>
    <span>scroll</span>
  </a>
</section>

<script define:vars={{ titles: meta.titles }}>
  (function () {
    const el = document.getElementById('typewriter');
    let pi = 0, ci = 0, deleting = false;
    function tick() {
      const cur = titles[pi];
      el.textContent = deleting ? cur.slice(0, --ci) : cur.slice(0, ++ci);
      if (!deleting && ci === cur.length) { deleting = true; setTimeout(tick, 2200); return; }
      if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % titles.length; }
      setTimeout(tick, deleting ? 48 : 88);
    }
    tick();
  })();
</script>

<style>
  #hero {
    position: relative; z-index: 1;
    min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 8rem 2rem 5rem;
  }
  .hero-glow {
    position: absolute;
    width: min(700px, 100vw); height: min(700px, 100vw); border-radius: 50%;
    background: radial-gradient(circle, rgba(25,230,206,0.07) 0%, transparent 70%);
    top: 50%; left: 50%; transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .hero-content {
    position: relative; z-index: 1;
    max-width: 900px; width: 100%;
    display: flex; align-items: center; gap: 3rem;
  }
  .hero-left { flex: 1; }

  /* ── Open to Work badge ── */
  .open-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(16,185,129,0.12);
    border: 1px solid rgba(16,185,129,0.35);
    color: #10b981;
    font-size: 0.7rem; font-weight: 600;
    padding: 4px 12px; border-radius: 20px;
    margin-bottom: 0.75rem;
    letter-spacing: 0.04em;
  }
  .pulse-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: #10b981;
    animation: pulse-dot 1.8s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(1.4); }
  }

  /* ── Avatar ── */
  .hero-avatar {
    width: 160px; height: 160px; flex-shrink: 0;
    border-radius: 50%;
    background: rgba(25,230,206,0.08);
    border: 2px solid rgba(25,230,206,0.35);
    display: flex; align-items: center; justify-content: center;
    position: relative;
  }
  .hero-avatar::before {
    content: '';
    position: absolute; inset: -4px;
    border-radius: 50%;
    border: 1px solid rgba(25,230,206,0.12);
  }
  .initials {
    font-size: 3.25rem; font-weight: 800;
    color: var(--cyan);
  }

  /* ── Staggered entrance ── */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    animation: entrance 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    animation-delay: var(--d, 0ms);
  }
  @keyframes entrance {
    to { opacity: 1; transform: translateY(0); }
  }
  .hero-hello {
    display: inline-block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem; font-weight: 700;
    color: var(--cyan); margin-bottom: 0.75rem; letter-spacing: 0.04em;
  }
  .hero-name {
    font-size: clamp(2.2rem, 7vw, 5.2rem); font-weight: 800;
    letter-spacing: -0.04em; line-height: 1.05;
    margin-bottom: 1rem; color: #fff;
  }
  .name-colored {
    color: var(--cyan);
  }
  .hero-role {
    font-family: 'JetBrains Mono', monospace;
    font-size: clamp(1rem, 2.5vw, 1.35rem);
    font-weight: 700;
    color: var(--cyan); margin-bottom: 1.75rem; min-height: 2rem;
  }
  .cursor {
    display: inline-block; width: 2px; height: 1.1em;
    background: var(--cyan); vertical-align: middle;
    margin-left: 2px; animation: blink 1s infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  .hero-bio {
    font-size: 1.05rem; color: var(--muted);
    max-width: 520px; margin: 0 0 2.5rem;
    line-height: 1.85;
  }
  .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }

  .hero-scroll {
    position: absolute; bottom: 2.5rem; left: 50%;
    transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
    color: var(--muted); font-size: 0.7rem;
    letter-spacing: 0.14em; text-transform: uppercase;
    text-decoration: none; animation: bob 2.2s ease-in-out infinite;
  }
  .scroll-line { width: 1px; height: 36px; background: var(--cyan); opacity: 0.5; }
  @keyframes bob {
    0%,100%{ transform: translateX(-50%) translateY(0); }
    50%    { transform: translateX(-50%) translateY(7px); }
  }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    #hero { padding: 6rem 1.5rem 5rem; }
    .hero-content {
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
    }
    .hero-avatar { width: 120px; height: 120px; }
    .initials { font-size: 2.4rem; }
    .hero-btns { justify-content: center; }
    .hero-bio { margin-inline: auto; }
  }
  @media (max-width: 480px) {
    #hero { padding: 6rem 1.25rem 4rem; }
    .hero-bio { font-size: 0.95rem; }
    .hero-btns { flex-direction: column; align-items: center; }
    .hero-btns a { width: 100%; text-align: center; justify-content: center; }
  }
</style>
```

- [ ] **Step 2: Verify hero renders correctly in dev server**

```bash
npm run dev
```

Open http://localhost:4321 — you should see:
- Green "Open to Work" badge with pulsing dot above the name
- Avatar circle with "HP" initials to the right of the text
- Typewriter text in bold cyan
- Updated tagline text

- [ ] **Step 3: Check mobile layout at 375px width in browser devtools**

The avatar should stack above the text, centered, at 120px size.

- [ ] **Step 4: Commit**

```bash
cd F:/Portfolio
git add src/components/Hero.astro
git commit -m "feat: hero avatar placeholder, open-to-work badge, bold typewriter"
```

---

## Task 5: Stats component — animated count-up grid

**Files:**
- Create: `src/data/stats.json`
- Create: `src/components/Stats.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create stats.json data file**

Create `src/data/stats.json`:

```json
[
  {
    "value": 95,
    "prefix": "",
    "suffix": "%",
    "display": "95%",
    "label": "Model accuracy on best ML project",
    "accent": "cyan"
  },
  {
    "value": 60,
    "prefix": "↓",
    "suffix": "%",
    "display": "↓60%",
    "label": "Reporting time reduced via automation",
    "accent": "purple"
  },
  {
    "value": 10000,
    "prefix": "",
    "suffix": "+",
    "display": "10K+",
    "label": "Rows processed in data pipelines",
    "accent": "green"
  },
  {
    "value": 8,
    "prefix": "",
    "suffix": "+",
    "display": "8+",
    "label": "Projects delivered end-to-end",
    "accent": "amber"
  }
]
```

- [ ] **Step 2: Create Stats.astro component**

Create `src/components/Stats.astro`:

```astro
---
import stats from '../data/stats.json';
---

<section id="stats" aria-label="Key metrics">
  <div class="container">
    <div class="stats-grid stagger-children">
      {stats.map(s => (
        <div
          class={`stat-card accent-${s.accent}`}
          data-value={s.value}
          data-prefix={s.prefix}
          data-suffix={s.suffix}
          data-display={s.display}
        >
          <div class={`stat-num accent-${s.accent}`}>
            <span class="stat-counter">{s.display}</span>
          </div>
          <div class="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>

<script>
  const cards = document.querySelectorAll<HTMLElement>('.stat-card[data-value]');

  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  function animateCounter(card: HTMLElement) {
    const target  = parseInt(card.dataset.value  ?? '0', 10);
    const prefix  = card.dataset.prefix ?? '';
    const suffix  = card.dataset.suffix ?? '';
    const display = card.dataset.display ?? '';
    const el      = card.querySelector<HTMLElement>('.stat-counter');
    if (!el) return;

    // Skip count-up for non-numeric displays like "10K+"
    if (isNaN(target) || display.includes('K')) {
      el.textContent = display;
      return;
    }

    const duration = 1200;
    const start = performance.now();

    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(easeOut(progress) * target);
      el.textContent = `${prefix}${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const obs = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target as HTMLElement);
        obs.unobserve(entry.target);
      }
    }),
    { threshold: 0.3 }
  );

  cards.forEach(card => obs.observe(card));
</script>

<style>
  #stats {
    background: var(--bg2);
    padding: 4rem 2rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .stat-card {
    background: var(--bg3);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem 1.25rem;
    text-align: center;
    transition: transform 0.3s, border-color 0.3s;
  }
  .stat-card:hover { transform: translateY(-3px); }

  .stat-card.accent-cyan   { border-color: rgba(25,230,206,0.25); }
  .stat-card.accent-purple { border-color: rgba(124,58,237,0.25); }
  .stat-card.accent-green  { border-color: rgba(16,185,129,0.25); }
  .stat-card.accent-amber  { border-color: rgba(245,158,11,0.25); }

  .stat-num {
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 0.6rem;
    font-variant-numeric: tabular-nums;
  }
  .stat-num.accent-cyan   { color: var(--cyan); }
  .stat-num.accent-purple { color: var(--purple); }
  .stat-num.accent-green  { color: var(--green); }
  .stat-num.accent-amber  { color: #f59e0b; }

  .stat-label {
    font-size: 0.78rem;
    color: var(--muted);
    line-height: 1.4;
  }

  @media (max-width: 600px) {
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
  }
</style>
```

- [ ] **Step 3: Add Stats to index.astro and add section separators**

Replace the entire contents of `src/pages/index.astro`:

```astro
---
import Layout        from '../layouts/Layout.astro';
import FloatingIcons from '../components/FloatingIcons.astro';
import Nav           from '../components/Nav.astro';
import Hero          from '../components/Hero.astro';
import Stats         from '../components/Stats.astro';
import About         from '../components/About.astro';
import Skills        from '../components/Skills.astro';
import Projects      from '../components/Projects.astro';
import Education     from '../components/Education.astro';
import Contact       from '../components/Contact.astro';
import Footer        from '../components/Footer.astro';
---

<Layout>
  <FloatingIcons />
  <Nav />
  <main>
    <Hero />
    <div class="section-sep"></div>
    <Stats />
    <div class="section-sep"></div>
    <About />
    <div class="section-sep"></div>
    <Skills />
    <div class="section-sep"></div>
    <Projects />
    <div class="section-sep"></div>
    <Education />
    <div class="section-sep"></div>
    <Contact />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 4: Run build and verify**

```bash
npm run build
```

Expected: Build completes with no TypeScript errors.

Then start dev server and verify the stats section appears between Hero and About with animated counters.

- [ ] **Step 5: Commit**

```bash
cd F:/Portfolio
git add src/data/stats.json src/components/Stats.astro src/pages/index.astro
git commit -m "feat: animated stats grid with count-up on scroll, section separators"
```

---

## Task 6: Footer redesign

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Replace Footer.astro with full redesign**

Replace the entire contents of `src/components/Footer.astro`:

```astro
---
import meta from '../data/meta.json';

const navLinks = [
  { href: '#about',     label: 'About' },
  { href: '#skills',    label: 'Skills' },
  { href: '#projects',  label: 'Projects' },
  { href: '#education', label: 'Experience' },
  { href: '#contact',   label: 'Contact' },
];

const socialLinks = [
  {
    href: meta.social.linkedin,
    label: 'LinkedIn',
    abbr: 'in',
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    href: meta.social.github,
    label: 'GitHub',
    abbr: 'gh',
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  },
  {
    href: meta.social.kaggle,
    label: 'Kaggle',
    abbr: 'kg',
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334z"/></svg>`,
  },
];
---

<footer>
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <h3>{meta.name}</h3>
        <p>Data Analyst · Python Developer · Power BI Specialist</p>
      </div>
      <div class="footer-cols">
        <div class="footer-col">
          <h4>Navigation</h4>
          {navLinks.map(l => <a href={l.href}>{l.label}</a>)}
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <a href={meta.social.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a href={meta.social.github}   target="_blank" rel="noopener">GitHub</a>
          <a href={meta.social.kaggle}   target="_blank" rel="noopener">Kaggle</a>
          <a href={meta.social.resume}   target="_blank" rel="noopener">Resume</a>
        </div>
      </div>
    </div>

    <hr class="footer-divider" />

    <div class="footer-bottom">
      <span>© {new Date().getFullYear()} {meta.name}. Built with <a href="https://astro.build" target="_blank" rel="noopener">Astro</a>.</span>
      <div class="footer-socials">
        {socialLinks.map(s => (
          <a href={s.href} target="_blank" rel="noopener" aria-label={s.label} class="soc-btn" set:html={s.icon}></a>
        ))}
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    position: relative; z-index: 1;
    background: var(--bg2);
    padding: 3rem 2rem 2rem;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-brand h3 {
    font-size: 1.1rem; font-weight: 700;
    color: var(--text); margin-bottom: 0.35rem;
  }
  .footer-brand p {
    font-size: 0.8rem; color: var(--muted);
  }

  .footer-cols { display: flex; gap: 2.5rem; }

  .footer-col h4 {
    font-size: 0.68rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.1em;
    color: #4b5563; margin-bottom: 0.75rem;
  }
  .footer-col a {
    display: block; font-size: 0.85rem;
    color: var(--muted); text-decoration: none;
    margin-bottom: 0.45rem;
    transition: color 0.2s;
  }
  .footer-col a:hover { color: var(--cyan); }

  .footer-divider {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.06);
    margin: 0 0 1.25rem;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .footer-bottom > span {
    font-size: 0.78rem; color: #4b5563;
  }
  .footer-bottom > span a {
    color: var(--muted); text-decoration: none;
  }
  .footer-bottom > span a:hover { color: var(--cyan); }

  .footer-socials { display: flex; gap: 0.5rem; }

  .soc-btn {
    width: 34px; height: 34px;
    border-radius: 8px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    color: var(--muted);
    display: inline-flex; align-items: center; justify-content: center;
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }
  .soc-btn:hover {
    color: var(--cyan);
    border-color: rgba(25,230,206,0.3);
    background: rgba(25,230,206,0.06);
  }

  @media (max-width: 640px) {
    .footer-top { flex-direction: column; }
    .footer-bottom { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
  }
</style>
```

- [ ] **Step 2: Verify footer in dev server**

Open http://localhost:4321 and scroll to the bottom. You should see: brand + tagline on the left, nav + connect columns on the right, divider, then copyright + 3 social icon buttons.

- [ ] **Step 3: Commit**

```bash
cd F:/Portfolio
git add src/components/Footer.astro
git commit -m "feat: footer redesign with nav links, Kaggle social, and icon buttons"
```

---

## Task 7: Contact — Kaggle link, form validation, touch targets

**Files:**
- Modify: `src/components/Contact.astro`

- [ ] **Step 1: Replace Instagram with Kaggle in the links array**

In `src/components/Contact.astro`, find the Instagram entry in the `links` array (lines 22–26) and replace it with:

```js
  {
    href: meta.social.kaggle, label: 'Kaggle', val: 'kaggle.com/xantoshpun',
    bg: 'rgba(25,230,206,0.08)', color: 'var(--cyan)',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334z"/></svg>`,
  },
```

- [ ] **Step 2: Add touch target fix and form validation styles**

In the `<style>` block of `Contact.astro`, find `.contact-link` and ensure it has minimum touch target size. Add after the existing `.contact-link` rule:

```css
.contact-link {
  min-height: 44px;
  display: flex;
  align-items: center;
}
```

Then add the form validation error styles:

```css
.field-error {
  color: #ef4444;
  font-size: 0.73rem;
  margin-top: 0.25rem;
  display: none;
}
.field-error.visible { display: block; }
input.invalid, textarea.invalid {
  border-color: rgba(239,68,68,0.5);
}
```

- [ ] **Step 3: Add error message spans below each required input**

In the form HTML, add `<span class="field-error" id="err-name">Please enter your name (min 2 characters)</span>` below the name input, `<span class="field-error" id="err-email">Please enter a valid email address</span>` below the email input, and `<span class="field-error" id="err-msg">Please enter a message (min 10 characters)</span>` below the textarea.

The form groups become:

```html
<div class="form-group">
  <label for="f-name">Name</label>
  <input id="f-name" type="text" name="name" placeholder="Your name" required />
  <span class="field-error" id="err-name">Please enter your name (min 2 characters)</span>
</div>
```

```html
<div class="form-group">
  <label for="f-email">Email</label>
  <input id="f-email" type="email" name="email" placeholder="your@email.com" required />
  <span class="field-error" id="err-email">Please enter a valid email address</span>
</div>
```

```html
<div class="form-group">
  <label for="f-msg">Message</label>
  <textarea id="f-msg" name="message" placeholder="Tell me more..." required></textarea>
  <span class="field-error" id="err-msg">Please enter a message (min 10 characters)</span>
</div>
```

- [ ] **Step 4: Add real-time JS validation to the existing script block**

In the `<script>` block of `Contact.astro`, add this validation code before the existing form submit handler:

```js
// Real-time validation
function validateField(input, errorId, checkFn) {
  const err = document.getElementById(errorId);
  input.addEventListener('blur', () => {
    const isValid = checkFn(input.value.trim());
    input.classList.toggle('invalid', !isValid);
    err?.classList.toggle('visible', !isValid);
  });
  input.addEventListener('input', () => {
    if (input.classList.contains('invalid')) {
      const isValid = checkFn(input.value.trim());
      input.classList.toggle('invalid', !isValid);
      err?.classList.toggle('visible', !isValid);
    }
  });
}

const nameInput  = document.getElementById('f-name');
const emailInput = document.getElementById('f-email');
const msgInput   = document.getElementById('f-msg');

if (nameInput)  validateField(nameInput,  'err-name',  v => v.length >= 2);
if (emailInput) validateField(emailInput, 'err-email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
if (msgInput)   validateField(msgInput,   'err-msg',   v => v.length >= 10);
```

- [ ] **Step 5: Verify in dev — test all validation states**

Open http://localhost:4321/#contact. Tab through each field without filling it in — error messages should appear. Fill valid data — errors should hide. Kaggle link should appear instead of Instagram.

- [ ] **Step 6: Commit**

```bash
cd F:/Portfolio
git add src/components/Contact.astro
git commit -m "feat: replace Instagram with Kaggle, real-time form validation, touch targets"
```

---

## Task 8: Layout.astro — meta theme-color, lazy loading cert images

**Files:**
- Modify: `src/layouts/Layout.astro`

- [ ] **Step 1: Add meta theme-color to the head**

In `src/layouts/Layout.astro`, after line 20 (`<meta name="viewport" ...>`), add:

```html
  <meta name="theme-color" content="#060910" />
```

- [ ] **Step 2: Verify cert images have lazy loading**

In `src/components/Education.astro`, search for all `<img` tags in the certifications accordion and ensure each has `loading="lazy"`. If any are missing it, add the attribute.

Run:
```bash
cd F:/Portfolio
grep -n "<img" src/components/Education.astro
```

For each `<img` found that doesn't have `loading="lazy"`, add it.

- [ ] **Step 3: Commit**

```bash
cd F:/Portfolio
git add src/layouts/Layout.astro src/components/Education.astro
git commit -m "fix: meta theme-color #060910, lazy loading on cert images"
```

---

## Task 9: Education — purple accents for education items, mobile single-column timeline

**Files:**
- Modify: `src/components/Education.astro`

- [ ] **Step 1: Add purple timeline bullet for education column**

In `src/components/Education.astro`, find the `<style>` block and locate the `.tl-bull` rule. Add a modifier class for the education column:

```css
.col:first-child .tl-bull {
  background: var(--purple);
  box-shadow: 0 0 8px rgba(124,58,237,0.4);
}
```

Also add a purple left border to education cards:

```css
.col:first-child .tl-card {
  border-left: 2px solid rgba(124,58,237,0.3);
}
```

- [ ] **Step 2: Fix mobile — single column timeline**

In the same `<style>` block, find the mobile media query (or add if missing) and ensure the two-column grid collapses cleanly:

```css
@media (max-width: 768px) {
  .edu-exp-grid {
    grid-template-columns: 1fr;
  }
  .tl-row {
    flex-direction: row;
  }
}
```

- [ ] **Step 3: Verify purple bullets and mobile layout**

```bash
npm run dev
```

Check the Education section — education column bullets should be purple, experience column cyan. On mobile (768px), both columns should stack vertically.

- [ ] **Step 4: Commit**

```bash
cd F:/Portfolio
git add src/components/Education.astro
git commit -m "style: purple accents for education timeline, mobile single-column fix"
```

---

## Task 10: Projects — green metric badges

**Files:**
- Modify: `src/components/Projects.astro`

- [ ] **Step 1: Add green color styling to the first metric badge**

In `src/components/Projects.astro`, find the `.metric` CSS rule in the `<style>` block. Add a rule that highlights the first metric:

```css
.proj-metrics .metric:first-child {
  color: var(--green);
  font-weight: 700;
  border-color: rgba(16,185,129,0.3);
  background: rgba(16,185,129,0.08);
}
```

- [ ] **Step 2: Remove the gradient overlay on project card hover**

In the same file, find the `.project-card::before` rule which uses a linear-gradient overlay, and remove it (the `::before` pseudo-element entirely):

Find and delete:
```css
  .project-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(0,212,255,0.03) 0%, transparent 60%);
    opacity: 0; transition: opacity 0.3s;
  }
```

And remove any `.project-card:hover::before { opacity: 1; }` rule if present.

- [ ] **Step 3: Verify project cards**

Open http://localhost:4321/#projects — first metric on each card should be green and slightly highlighted. Hover states should still lift the card without gradient overlay.

- [ ] **Step 4: Commit**

```bash
cd F:/Portfolio
git add src/components/Projects.astro
git commit -m "style: green first metric badge, remove card gradient overlay"
```

---

## Task 11: Nav — default active state, mobile menu close delay

**Files:**
- Modify: `src/components/Nav.astro`

- [ ] **Step 1: Initialize first nav link as active on load**

In `src/components/Nav.astro`, find the JavaScript Intersection Observer that sets active nav links. Before the observer setup, add initialization of the first section as active:

Find the script block and add at the top of the observer logic:

```js
// Default: mark first nav link active on load
const firstLink = document.querySelector('.nav-link');
if (firstLink) firstLink.classList.add('active');
```

- [ ] **Step 2: Add 150ms delay to mobile menu close on link click**

In the same script block, find where mobile nav links close the menu on click. Change the immediate close to a delayed close:

Find the code that closes the menu when a nav link is clicked and update it to:

```js
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      menu.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }, 150);
  });
});
```

- [ ] **Step 3: Verify nav behavior**

On page load, the first nav link should appear highlighted. On mobile, clicking a nav link should briefly show the highlight before the menu closes.

- [ ] **Step 4: Commit**

```bash
cd F:/Portfolio
git add src/components/Nav.astro
git commit -m "fix: nav default active state on load, 150ms delay on mobile menu close"
```

---

## Task 12: Sitemap integration

**Files:**
- Modify: `astro.config.mjs`

- [ ] **Step 1: Install @astrojs/sitemap**

```bash
cd F:/Portfolio && npm install @astrojs/sitemap
```

Expected output: Package added to node_modules and package.json.

- [ ] **Step 2: Add sitemap to astro.config.mjs**

Read the current `astro.config.mjs` first, then add the sitemap integration. The file should look like:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://humendrapun.dev',
  integrations: [sitemap()],
});
```

If there are already other integrations in the config, add `sitemap()` to the existing array.

- [ ] **Step 3: Verify sitemap generates**

```bash
npm run build
```

After build, check that `dist/sitemap-index.xml` exists:

```bash
ls dist/sitemap*.xml
```

Expected: `sitemap-index.xml` and `sitemap-0.xml` present.

- [ ] **Step 4: Commit**

```bash
cd F:/Portfolio
git add astro.config.mjs package.json package-lock.json
git commit -m "feat: add @astrojs/sitemap for humendrapun.dev"
```

---

## Task 13: Final build verification

- [ ] **Step 1: Run full production build**

```bash
cd F:/Portfolio && npm run build
```

Expected: No errors, no TypeScript warnings.

- [ ] **Step 2: Verify all sections in dev**

```bash
npm run dev
```

Walk through each section and confirm:
- [ ] Hero: avatar (HP), open-to-work badge, bold cyan typewriter, updated tagline
- [ ] Stats: 4 cards count up on scroll (95%, ↓60%, 10K+, 8+)
- [ ] About: focus card has updated text
- [ ] Skills: reordered (Data Analysis first, AI last)
- [ ] Projects: first metric is green, odd card centers if only one
- [ ] Education: purple bullets on education column, single-col on mobile
- [ ] Contact: Kaggle link, form validation on blur, 44px touch targets
- [ ] Footer: nav links + social icons visible
- [ ] FloatingIcons: visibly more opaque and faster
- [ ] Section separators: subtle lines with cyan center glow between sections

- [ ] **Step 3: Check mobile at 375px width**

In browser devtools, set viewport to 375px and verify:
- Hero avatar stacks above text, centered
- Stats grid becomes 2×2
- Timeline stacks to single column
- No horizontal overflow

- [ ] **Step 4: Final commit**

```bash
cd F:/Portfolio
git add -A
git commit -m "chore: final build verification — all 28 improvements complete"
```
