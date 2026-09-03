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

The whole page is one scene: a farm at night. It's all CSS and hand-drawn inline SVG — no image files to load — and every moving part switches off for reduced-motion users (doors open, lights on, nothing moves).

- **Sky** (`src/components/art/Sky.astro`): a fixed starry night behind everything. Three star layers twinkle and drift, a moon starts top-right and sets by the footer as you scroll, and a meteor crosses now and then.
- **Hero barn** (`art/Barn.astro`): doors slide open, windows light up, the weathervane turns. Driven by `--sy` (scroll position in viewport heights), which the small script in `src/layouts/Base.astro` writes on `<html>`.
- **Pasture strips** (`src/components/Pasture.astro`): grass, a fence, fireflies, and animals (dog, cow, rooster, pig, sheep) that walk as you scroll — their legs swing with scroll progress. Change the lineup in `src/pages/index.astro`: each animal has a start position `x`, height `h`, and `speed` (px it travels while the strip crosses the screen).
- **Projects** are stalls inside the barn: plank wall, beams, a lantern. **Skills** hang on a pegboard tool wall in the same room — edit `skills.groups` in `src/content/site.ts`.
- **Roadmap** is a fence rail with posts. Red post = done, gold = now, outlined = later.
- **Hills** with a windmill that turns as you scroll, a **wheat** field, a **mailbox** by the signup, a **farmhouse** with the porch light on by the About, and a **horizon** in the footer.
- Labels are stenciled (Saira Stencil One) on wooden tags. Buttons carry a barn-door badge.

## Later

- Paste the email-signup embed (Kit) into `site.signup.beehiivEmbedHtml`.
- Add YouTube video IDs to `site.videos.videoIds`.
- Flip `enabled: true` on TikTok / X / Skool links in `site.footer.links`.
