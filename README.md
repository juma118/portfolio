# Felipe David — Portfolio

A bilingual (English / Spanish) developer portfolio built with **Next.js 16**, **Tailwind
CSS**, **Framer Motion**, and **three.js** (animated starfield + neural-network background).

🔗 **Live:** https://juma118.github.io/portfolio/

## Tech stack

- Next.js 16 (App Router, static export)
- TypeScript + Tailwind CSS
- Framer Motion (animations, rotating headline)
- three.js (3D hero starfield) + a canvas neural-network backdrop
- Internationalization via `/[locale]` routing with per-language dictionaries

## Local development

```bash
npm install
npm run dev      # http://localhost:3000  (auto-redirects to /en or /es)
npm run build    # static export → ./out
```

In dev the site is served at `/`; production builds use a `/portfolio` base path so they work
on GitHub Pages.

## Customize your content

| What | Where |
| --- | --- |
| Name, email, phone, social links | `lib/config.ts` |
| All page text (per language) | `lib/dictionaries/en.ts`, `lib/dictionaries/es.ts` |
| Résumé PDFs (download button) | `public/felipe-david-resume-en.pdf`, `…-es.pdf` |
| Theme colors | `tailwind.config.ts` (`accent`, `accent-2`) |

To add a language: add its code to `locales` in `lib/config.ts`, create
`lib/dictionaries/<code>.ts`, and register it in `lib/dictionaries/index.ts`.

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and
publishes it to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment → Source** and
select **"GitHub Actions"**.

> Served from a project sub-path (`/portfolio`). If you rename the repo to
> `juma118.github.io`, drop `basePath` in `next.config.mjs` to serve from the root URL.
