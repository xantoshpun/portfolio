# Portfolio Improvements Design Spec
**Date:** 2026-04-15  
**Author:** Humendra Pun  
**Scope:** Full portfolio overhaul across 10 categories — 28 discrete improvements

---

## Design Decisions (Brainstormed)

| Decision | Choice |
|----------|--------|
| Hero visual anchor | Circular avatar — HP initials placeholder, swap for photo anytime |
| Data visualization | Animated stats grid (count-up on scroll) |
| Open to Work | Yes — green pulsing badge in hero |
| Gradients | **None** — solid colors only throughout |
| Footer social | Kaggle replaces Instagram |

---

## 1. Visual Design & Aesthetics

**Target: 8.5 → 9.5**

### 1a. Hero avatar
- Add a circular avatar `<div>` to the right of the hero text grid
- Size: 160×160px, border-radius: 50%
- Background: `rgba(25,230,206,0.08)` — subtle cyan tint, no gradient
- Border: `2px solid rgba(25,230,206,0.35)`, outer ring `1px solid rgba(25,230,206,0.12)` at `-4px` inset
- Content: `<span class="initials">HP</span>` in solid cyan `#19e6ce`, font-size 52px, weight 800
- On desktop: `grid-template-columns: 1fr auto` in hero inner
- On mobile (≤768px): avatar moves above text, centered, shrinks to 120×120px

### 1b. Floating icons opacity
- Change from `0.05` to `0.10` in `FloatingIcons.astro`
- No other changes to floating icon logic

### 1c. Footer redesign
- Replace minimal footer with a three-part layout:
  - **Top row:** Brand name + tagline (left) | Navigation links (right: About, Skills, Projects, Contact) | Connect links (right: LinkedIn, GitHub, Kaggle, Resume)
  - **Divider:** `1px solid rgba(255,255,255,0.06)`
  - **Bottom row:** copyright text (left) | social icon buttons (right: LinkedIn, GitHub, Kaggle — 34×34px, border-radius 8px)
- Background: `#0d1117` (bg2)

---

## 2. Typography

**Target: 8.0 → 9.0**

### 2a. Body line-height
- In `global.css`, change `body { line-height }` from current value to `1.75`
- Apply `line-height: 1.75` to all `p` tags explicitly

### 2b. Typewriter text styling
- In `Hero.astro`, add class `typewriter-text` to the span that renders the cycling role
- CSS: `color: #19e6ce; font-weight: 700; font-family: var(--font-mono);`
- Font size: `1.4rem` (up from whatever it currently inherits)

### 2c. Hero name — solid white
- Ensure `h1` in Hero has `color: #e2e8f0; font-weight: 800` — no gradient, no special effect

---

## 3. Color & Theming

**Target: 7.5 → 9.0**

### 3a. Purple for Education/Experience
- Timeline circle dots: change from cyan to purple `#7c3aed` for Education items
- Experience card left border accent: `#7c3aed`

### 3b. Green for project metrics
- Project card metric badges/numbers: `color: #10b981`
- Stats grid card borders use section accent colors (cyan, purple, green, amber) — see §8

### 3c. Section accent color bars
- Each section `<section>` gets a 2px top accent bar via `::before` pseudo-element
- Skills → cyan, Education → purple, Projects → green, Contact → amber

---

## 4. Layout & Composition

**Target: 8.0 → 9.0**

### 4a. Odd project card centering
- In `global.css`, add:
  ```css
  .projects-grid .project-card:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    max-width: 50%;
    margin: 0 auto;
  }
  ```

### 4b. Section separators
- Between each `<section>`, add a `<div class="section-sep">` — a horizontal line with a subtle center glow:
  ```css
  .section-sep { height: 1px; background: rgba(255,255,255,0.05); margin: 0; position: relative; }
  .section-sep::after { content:''; position:absolute; left:50%; transform:translateX(-50%); width:120px; height:1px; background: rgba(25,230,206,0.25); }
  ```

### 4c. Contact column balance
- Set the left info column to `align-self: stretch; display: flex; flex-direction: column; justify-content: space-between`
- Add the 4 social links with `flex: 1` so they fill the height

---

## 5. Animation & Interactions

**Target: 9.0 → 9.5**

### 5a. prefers-reduced-motion
- In `global.css`, add at the end:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

### 5b. Floating icons speed
- In `FloatingIcons.astro`, change animation duration range from `22s–38s` to `8s–14s`
- Keep rotation values the same

### 5c. Scroll indicator bob
- In `Hero.astro`, add `animation: bob 1.6s ease-in-out infinite` to the scroll indicator arrow
  ```css
  @keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
  ```

---

## 6. Mobile & Responsiveness

**Target: 7.0 → 8.5**

### 6a. Hero font clamp adjustment
- Change hero `h1` clamp from `clamp(2.8rem, 7vw, 5.2rem)` to `clamp(2.2rem, 7vw, 5.2rem)` — gives more room at 375px

### 6b. Avatar mobile layout
- At `≤768px`: hero inner switches to `grid-template-columns: 1fr`, avatar stacks above text, centered
- Avatar shrinks to `120×120px`, initials to `38px`

### 6c. Timeline single column on mobile
- At `≤768px`, `.two-col` inside Education becomes single column
- Timeline items: remove left/right alternation, all items stack left-aligned

### 6d. Touch targets
- Social links in Contact: add `min-height: 44px; min-width: 44px; display: inline-flex; align-items: center;`

---

## 7. Content & Copywriting

**Target: 6.5 → 8.5**

### 7a. Hero tagline rewrite
- **Old:** "MSc Software Engineering graduate turning raw data into actionable insights"
- **New:** "I turn messy datasets into clear decisions — building Power BI dashboards, Python pipelines, and ML models that actually get used."
- Implementation: update `src/data/meta.json` (or wherever the subtitle is stored)

### 7b. About focus card
- **Old:** "Data & AI"
- **New:** "Data analysis, ML pipelines, and BI dashboards — turning raw data into decisions."
- File: `src/data/about.json` or equivalent

### 7c. Project descriptions — lead with outcome
- Each project card description: first sentence must be the outcome/metric, second sentence the method
- Pattern: `"[Outcome in numbers]. Built with [tech] to [what it does]."`
- Edit each project's markdown frontmatter `summary` field

### 7d. Skills ordering
- Reorder skill cards: most expert → least expert
- Suggested order: Data Analysis & SQL → Power BI → Python → Tools → ML → AI & Automation

---

## 8. Technical Quality

**Target: 9.0 → 9.5**

### 8a. Animated stats grid
- New component: `src/components/Stats.astro`
- Placed between Hero and About sections in `index.astro`
- 4 stat cards in a `repeat(4, 1fr)` grid
- Data sourced from `src/data/stats.json`:
  ```json
  [
    { "value": 95, "suffix": "%", "label": "Model accuracy on best ML project", "accent": "cyan" },
    { "value": 60, "prefix": "↓", "suffix": "%", "label": "Reporting time reduced via automation", "accent": "purple" },
    { "value": 10000, "suffix": "+", "display": "10K+", "label": "Rows processed in data pipelines", "accent": "green" },
    { "value": 8, "suffix": "+", "label": "Projects delivered end-to-end", "accent": "amber" }
  ]
  ```
- Count-up animation: Intersection Observer triggers counter from 0 → value over 1.2s ease-out
- On mobile (≤600px): 2×2 grid

### 8b. Form validation
- In `Contact.astro`, add real-time JS validation:
  - On `blur`: validate each field, show inline error message below input
  - Name: required, min 2 chars
  - Email: required, regex pattern
  - Message: required, min 10 chars
  - Error style: `color: #ef4444; font-size: 12px; margin-top: 4px`

### 8c. meta theme-color
- In `Layout.astro` `<head>`, add: `<meta name="theme-color" content="#060910">`

### 8d. Image lazy loading
- Verify all `<img>` tags in `Certifications` section have `loading="lazy"`

### 8e. Sitemap
- Add `@astrojs/sitemap` to `astro.config.mjs`
- Set `site` to `https://humendrapun.dev`

---

## 9. Navigation & UX

**Target: 8.0 → 9.0**

### 9a. Open to Work badge
- In `Hero.astro`, above the `<h1>`:
  ```html
  <div class="open-badge">
    <span class="pulse-dot"></span>
    Open to Work
  </div>
  ```
  ```css
  .open-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(16,185,129,0.12); border:1px solid rgba(16,185,129,0.35); color:#10b981; font-size:11px; font-weight:600; padding:4px 12px; border-radius:20px; margin-bottom:16px; }
  .pulse-dot { width:7px; height:7px; border-radius:50%; background:#10b981; animation:pulse 1.8s infinite; }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.4)} }
  ```

### 9b. Nav default active state
- On load (before scroll), set the first nav link (Home/About) as active
- In `Nav.astro` JS: initialize `activeSection = sections[0].id` before the Intersection Observer fires

### 9c. Mobile menu smooth close
- After a mobile nav link is clicked, add a 150ms delay before closing the menu so the user sees the link highlight before the menu disappears

---

## 10. Portfolio Effectiveness

**Target: 7.0 → 9.0**

### 10a. Stats grid (covered in §8a)

### 10b. Kaggle replaces Instagram
- In `src/data/about.json` (or wherever social links are stored), replace Instagram entry with:
  ```json
  { "label": "Kaggle", "url": "https://www.kaggle.com/xantoshpun", "icon": "kaggle" }
  ```
- Update `Contact.astro` and `Footer.astro` accordingly

### 10c. Project metrics prominent
- On each project card, the first metric in the `metrics` array gets a `<span class="metric-badge">` with `color: #10b981; font-weight: 700; font-size: 0.95rem`

---

## File Change Summary

| File | Changes |
|------|---------|
| `src/components/Hero.astro` | Avatar, Open to Work badge, tagline, typewriter styling |
| `src/components/Nav.astro` | Default active state, mobile menu close delay |
| `src/components/About.astro` | Focus card text update |
| `src/components/Skills.astro` | Reorder skill cards |
| `src/components/Projects.astro` | Metric badges, odd-card centering |
| `src/components/Education.astro` | Purple accent for education, mobile single-col |
| `src/components/Contact.astro` | Form validation, touch targets, Kaggle link |
| `src/components/Footer.astro` | Full redesign with nav + social links |
| `src/components/FloatingIcons.astro` | Opacity 0.05→0.10, speed 22-38s→8-14s |
| `src/components/Stats.astro` | **NEW** — animated stats grid component |
| `src/layouts/Layout.astro` | meta theme-color, sitemap, section separators |
| `src/styles/global.css` | Line-height, prefers-reduced-motion, touch targets, odd card, section accent bars |
| `src/data/meta.json` | Hero tagline |
| `src/data/about.json` | Focus card text, Kaggle social link |
| `src/data/stats.json` | **NEW** — stats data file |
| `src/content/projects/*.md` | Project description rewrites |
| `astro.config.mjs` | Add @astrojs/sitemap |
| `src/pages/index.astro` | Add Stats component, section-sep dividers |

---

## Out of Scope
- Blog/writing section (future work)
- Self-hosting resume PDF (requires domain setup outside this repo)
- Dark mode toggle (site is dark-only by design)
