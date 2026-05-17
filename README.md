# ismaelmarin.dev

Personal portfolio site for Ismael Marin — Tech Lead & AI Engineer.

Built with plain HTML & CSS, deployed to Cloudflare Pages.

## Structure

```
public/
├── index.html                    # Main homepage (dark theme)
├── css/style.css                 # Main site styles
├── llms.txt                      # AI-crawler description
├── sitemap.xml                   # SEO sitemap
├── robots.txt                    # Crawler instructions
├── ruby-skill-bench/
│   ├── index.html                # Ruby Skill Bench product page
│   └── llms.txt                  # Project AI-crawler description
├── rails-ai-bridge-site/
│   ├── index.html                # rails-ai-bridge product page
│   └── llms.txt                  # Project AI-crawler description
└── rails-agent-skills-site/
    ├── index.html                # rails-agent-skills product page
    └── llms.txt                  # Project AI-crawler description
```

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
