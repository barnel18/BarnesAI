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

## The barn theme

The look is "the barn after dark": night sky, barn red, lantern gold, wood-toned cards. It's all CSS and hand-drawn inline SVG — no image files to load.

- **Hero barn** (`src/components/art/Barn.astro`): doors slide open, windows light up, the weathervane turns and the moon drifts as you scroll. Driven by `--sy` (scroll position in viewport heights), which the small script in `src/layouts/Base.astro` writes on `<html>`.
- **Pasture strips** (`src/components/Pasture.astro`): a fence with a dog, cow, chicken, and pig that walk as you scroll. Change the lineup in `src/pages/index.astro` — each animal has a start position `x`, height `h`, and `speed` (how far it travels, in px, while the strip crosses the screen).
- **Roadmap** is a fence: rail + posts. Red post = done, gold = now, outlined = later.
- **Projects** are stalls, numbered on a wooden rail. **Buttons** carry a barn-door badge.
- **Footer** has a horizon with a far barn and moon.
- Reduced-motion users get the same page with nothing moving (doors open, lights on).

## Later

- Paste the email-signup embed (Kit) into `site.signup.beehiivEmbedHtml`.
- Add YouTube video IDs to `site.videos.videoIds`.
- Flip `enabled: true` on TikTok / X / Skool links in `site.footer.links`.
