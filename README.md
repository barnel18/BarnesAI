# Barnes Inc. — website

Phase 1 brand home: positioning, the building-in-public project story, a Projects grid (portfolio), a Roadmap timeline, videos (empty state until the first upload), email signup, about.

- Stack: Astro 7, static output, plain CSS on design tokens. Node 22 (`.node-version`).
- Copy/links/IDs: `src/content/site.ts` — the only file text edits touch.
- Tokens: `src/styles/tokens.css`. Layout: `src/layouts/Base.astro`. Sections: `src/components/`.
- OG image: edit `scripts/og.html`, re-render with headless Chrome to `public/og.png`.

## Run

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Deploy

Push `main` to GitHub, import the repo in Vercel (Astro defaults). Live at https://barnes-ai.vercel.app; when `barnesai.ai` is attached, update `site` in `astro.config.mjs`.

## Adding a project

Add an item to `site.projects.items` in `src/content/site.ts` (name, status, `live: true/false`, blurb, stack tags, links — use `href: ""` for a label with no link). Push `main`; Vercel redeploys.

## Editing the roadmap

Edit `site.roadmap.items` in `src/content/site.ts`; each item's `state` is one of `done`, `now`, `next`, `later`.

## Later

- Paste the email-signup embed (Kit) into `site.signup.beehiivEmbedHtml`.
- Add YouTube video IDs to `site.videos.videoIds`.
- Flip `enabled: true` on TikTok / X / Skool links in `site.footer.links`.
