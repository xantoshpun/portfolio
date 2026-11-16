# Humendra Pun — Portfolio

Personal portfolio website built with Astro. Showcases my projects, skills, education, and experience as a Data Analyst.

🌐 **Live site:** [humendrapun.com](https://www.humendrapun.com)

---

## Projects

Each project opens as a case-study modal on the home page, and every one has a direct link:

| Project | Link |
|---------|------|
| Bank Customer Churn Analysis | [humendrapun.com/#bank-churn](https://www.humendrapun.com/#bank-churn) |
| Adventure Works — Bike Shop Analysis | [humendrapun.com/#adventure-works](https://www.humendrapun.com/#adventure-works) |
| Brazilian E-Commerce SQL Analysis | [humendrapun.com/#olist-ecommerce](https://www.humendrapun.com/#olist-ecommerce) |
| IBM HR Employee Attrition Analysis | [humendrapun.com/#hr-attrition](https://www.humendrapun.com/#hr-attrition) |

---

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generation)
- **Styling:** CSS with custom properties, no framework
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **Content:** JSON data files + Markdown for project details
- **Forms:** Formspree
- **Deployment:** Vercel (auto-deploy on push)

---

## Project Structure

```
src/
├── components/       # Astro components (Hero, Nav, About, Stats, Skills, Projects, etc.)
├── content/
│   ├── config.ts     # Frontmatter schema for projects
│   └── projects/     # Project case studies (Markdown)
├── data/             # Site content as JSON
│   ├── meta.json         # Name, bio, social links
│   ├── about.json        # About section content
│   ├── stats.json        # Headline stats strip
│   ├── skills.json       # Skills cards
│   ├── education.json    # Education timeline
│   ├── experience.json   # Work experience
│   └── certifications.json
├── layouts/
│   └── Layout.astro  # Base HTML shell (meta, fonts)
├── pages/
│   ├── index.astro           # Main single page (projects open as modals, /#<slug>)
│   ├── projects/[slug].astro # Standalone project pages (fallback without JS)
│   ├── badge.astro           # Design demo: "Open to Work" badge options
│   └── demo.astro            # Design demo: avatar hover styles
└── styles/
    └── global.css    # CSS variables, shared styles
public/
├── icons/            # Floating background icons (PNG)
├── pics/             # Profile photos
└── projects/<slug>/  # Screenshots for each project
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Updating Content

All content lives in `src/data/` — no code changes needed for most updates.

| File | What to edit |
|------|-------------|
| `meta.json` | Name, bio, social links, typewriter titles |
| `about.json` | About text, info cards, terminal snippet |
| `stats.json` | Headline stats strip |
| `skills.json` | Skill cards and tags |
| `education.json` | Degrees |
| `experience.json` | Work history |
| `certifications.json` | Certifications |
| `src/content/projects/*.md` | Project case studies (images go in `public/projects/<slug>/`) |

---

## Deployment

Connected to [Vercel](https://vercel.com). Every push to `main` auto-deploys.
