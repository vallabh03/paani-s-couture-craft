# Deploying Paani's Clothing to Vercel

This is a TanStack Start app (Vite 8 + React 19, server-side rendered) scaffolded by Lovable.
The build runs through Nitro, which is pinned to the `vercel` preset in `vite.config.ts`, so
`npm run build` emits a ready-made Vercel bundle in `.vercel/output/` (one SSR function plus
static assets). Vercel picks that folder up automatically; no output directory needs to be set.

## One-time setup

1. Push this repo to GitHub (already at `vallabh03/paani-s-couture-craft`).
2. Go to https://vercel.com/new and import the repository.
3. In the import screen leave the detected settings as they are. `vercel.json` already sets:
   - Framework preset: **Other** (`"framework": null`)
   - Build command: **`npm run build`**
   - Output directory: leave default (Nitro writes `.vercel/output`, which overrides it)
   - Install command: default (Vercel detects `bun.lock` and uses bun; npm also works)
4. Node version: 20.19 or newer is required by Vite 8. Vercel's default (22.x or 24.x) is fine.
5. No environment variables are needed. The site reads none.
6. Click **Deploy**.

Every later push to `main` redeploys automatically.

## Deploying from the CLI instead

```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production deployment
```

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into .vercel/output
```

## Notes

- `.vercel/` and `.claude/` are git-ignored.
- Inside the Lovable editor the Vercel preset is ignored and Lovable's own Cloudflare target is used,
  so the project keeps working there too.
- The `"use client"` warnings printed during the build come from framer-motion and are harmless.
