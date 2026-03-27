# Personal site (Astro)

Single-page portfolio for public-sector applications: **who you are**, **experience highlights**, **projects** (plain-language + GitHub links), and **contact**. Calm light theme (warm neutrals + muted sage accent) and a subtle background quote—tune copy in `src/site.config.ts`.

## Quick start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Customize

| What | Where |
|------|--------|
| Name, headline, tagline, GitHub, quote | `src/site.config.ts` |
| Experience cards | `src/data/experience.ts` |
| Project cards, images, repo URLs | `src/data/projects.ts` |
| Headshot | Replace `public/headshot.svg` with your photo (e.g. `headshot.webp`) and update `headshotSrc` |
| Email / LinkedIn | Set `email` and `linkedinUrl` in `src/site.config.ts` |

Project screenshots live under `public/projects/`. Swap placeholders for real PNG/WebP exports.

Use `PROJECT_README_TEMPLATE.md` when tightening GitHub READMEs for pinned repos so they match the site.

## Deploy (GitHub Pages)

1. Push this repo to GitHub (e.g. `github.com/davidgo24/personal_website`).
2. **Repository → Settings → Pages:** Source **GitHub Actions**.
3. If the site is served from `https://YOUR_USER.github.io/REPO_NAME/` (project page), set in `astro.config.mjs`:

   ```js
   site: "https://YOUR_USER.github.io",
   base: "/REPO_NAME/",
   ```

   For a **user** site (`YOUR_USER.github.io` with repo `YOUR_USER.github.io`), keep `base: "/"`.

4. Push to `main`; the workflow in `.github/workflows/deploy.yml` builds and deploys `dist/`.

## GitHub profile

Profile URL used on the site: [https://github.com/davidgo24](https://github.com/davidgo24). Pin the same 5 repos that match `src/data/projects.ts` for a consistent story.
