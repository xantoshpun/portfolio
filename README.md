# Humendra Pun — Portfolio

Personal portfolio website built with Astro. Showcases my projects, skills, education, and experience as a Data Analyst.

🌐 **Live site:** [humendra-portfolio.vercel.app](https://humendra-portfolio.vercel.app)

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
├── components/       # Astro components (Hero, Nav, About, Skills, etc.)
├── content/
│   └── projects/     # Project detail pages (Markdown)
├── data/             # Site content as JSON
│   ├── meta.json         # Name, bio, social links
│   ├── about.json        # About section content
│   ├── skills.json       # Skills cards
│   ├── education.json    # Education timeline
│   ├── experience.json   # Work experience
│   └── certifications.json
├── layouts/
│   └── Layout.astro  # Base HTML shell (meta, fonts)
├── pages/
│   ├── index.astro           # Main single page
│   └── projects/[slug].astro # Dynamic project detail pages
└── styles/
    └── global.css    # CSS variables, shared styles
public/
└── icons/            # Floating background icons (PNG)
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
| `skills.json` | Skill cards and tags |
| `education.json` | Degrees |
| `experience.json` | Work history |
| `certifications.json` | Certifications |
| `src/content/projects/*.md` | Project detail pages |

---

## Deployment

Connected to [Vercel](https://vercel.com). Every push to `main` auto-deploys.
