# Human–AI Co-Creation for Science Fiction Filmmaking

The website for a research-led interdisciplinary workshop on AI-supported science
fiction filmmaking. Cinematic black-space aesthetic, a scroll-driven rotating
Jupiter, an interactive starfield, and the workshop's people, vision, and
partners. Built with **Next.js 15 + TypeScript + Tailwind CSS v4**, exported as a
fully static site — deployable to any host with no local hardcoding.

## Requirements

- [Node.js](https://nodejs.org) 18.18+ (Node 20 recommended)

## Run locally

```bash
npm install       # first time only
npm run dev        # → http://localhost:3000
```

## Build the static site

```bash
npm run build      # → generates ./out (index.html + assets)
npx serve out      # preview the exported site
```

## Deploy to GitHub Pages (custom domain: ai-creative-study.click)

A workflow is included at `.github/workflows/deploy.yml`.

1. Push this project to a GitHub repository (branch `main`).
2. Repo → **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Every push to `main` builds and publishes automatically.
4. In **Settings → Pages → Custom domain**, `ai-creative-study.click` is set
   automatically from `public/CNAME`. Once DNS resolves, tick **Enforce HTTPS**
   (GitHub provisions the certificate for free).

### DNS (for the domain registrar / collaborator)

Point the **apex** domain `ai-creative-study.click` to GitHub Pages:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
AAAA  @   2606:50c0:8000::153
AAAA  @   2606:50c0:8001::153
AAAA  @   2606:50c0:8002::153
AAAA  @   2606:50c0:8003::153
```

(Optionally add `CNAME  www  <github-username>.github.io` for the `www` subdomain.)
No server, reverse proxy, or manual SSL certificate is required — GitHub Pages
handles HTTPS.

## Structure

```
app/            layout, page, global styles
components/     Starfield, Jupiter, NavBar, Hero, Intro, Vision, People, Institutions, Footer
lib/data.ts     people (3 panels) + collaborating institutions
public/images/  sci-fi stills (jupiter, hall, hero_window)
public/logos/   institution logos (HKUST added; more to follow)
public/CNAME    custom domain
```

## Content still to add

- Profile photos for each person (drop into `public/images/people/` and set
  `photo` in `lib/data.ts`).
- Remaining institution logos (drop into `public/logos/` and set `logo`).
- The few people links that were not provided in the brief.
