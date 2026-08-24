# ismaelmarin.dev

Personal portfolio site for Ismael Marin — Tech Lead & AI Engineer.

Built with plain HTML & CSS, deployed to Cloudflare Pages.

## Structure

```
public/
├── index.html                    # Main homepage (stich_design)
├── design.css                    # Design system stylesheet
├── elements.js                   # Interactive components (terminal, mobile menu, etc.)
├── llms.txt                      # AI-crawler description
├── sitemap.xml                   # SEO sitemap
├── robots.txt                    # Crawler instructions
└── resume/
    ├── index.html                # Resume page
    ├── ismael-marin-resume.pdf   # PDF resume
    └── llms-resume.txt           # Resume AI-crawler description
```

## Design System

The site uses a custom design system (stich_design) featuring:
- **Modern Technical Minimalism** with Glassmorphism and Terminal-inspired accents
- **Dark-first interface** with Deep Space Navy foundation
- **Typography**: DM Serif Display (headlines) + DM Mono (body/technical)
- **Components**: Interactive terminal widget, glass project cards, spotlight glow effects

## Local preview

Open any HTML file directly in a browser:

```bash
open public/index.html
```
Or serve with any static file server:

```bash
python3 -m http.server 8000 --directory public
```

## Deploy

Deploy to Cloudflare Pages:

```bash
wrangler pages deploy public
```

## Domain

- **Production**: https://ismaelmarin.dev
- **Sub-sites**:
  - https://ismaelmarin.dev/ruby-skill-bench/
  - https://ismaelmarin.dev/rails-ai-bridge-site/
  - https://ismaelmarin.dev/rails-agent-skills-site/