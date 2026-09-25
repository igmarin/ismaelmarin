# ismaelmarin.dev

Personal portfolio for Ismael Marin, software engineer and tech lead.

Built with plain HTML, CSS, and JavaScript; deployed to Cloudflare Pages.

## Structure

```
public/
├── index.html                    # Main homepage
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

## Design

The site uses a dark layout, DM Serif Display and DM Mono, project cards, and an interactive terminal. Styles live in `public/design.css`; terminal and mobile menu behavior lives in `public/elements.js`.

## Local preview

Serve the `public` directory locally so root-relative links work:

```bash
python3 -m http.server 8000 --directory public
```

## Deploy

Deploy to Cloudflare Pages:

```bash
wrangler pages deploy public
```

## Domain

- Portfolio: https://ismaelmarin.dev/
- Résumé: https://ismaelmarin.dev/resume/

The PDF résumé in `public/resume/` is the source for career dates and Dealerware figures. RubyGems download thresholds in the site copy were checked on 2026-09-25 UTC and link to their package pages.

Legacy project page paths redirect to their current GitHub Pages versions via `public/_redirects`.
