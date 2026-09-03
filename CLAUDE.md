# Barnes Inc. website — notes for Claude Code

- All copy, links, video IDs, and the email-signup embed live in `src/content/site.ts`. Text edits go there, never in components.
- Design tokens (colors, type, spacing, motion) live in `src/styles/tokens.css`. Theme is "the barn after dark": night sky, barn red (`--accent`, with `--accent-text` for red used as text), lantern gold (`--gold`), wood browns (`--wood`, `--wood-2`, `--border`).
- Illustrations are hand-written inline SVG in `src/components/art/` (Barn, Animal, Horizon, BarnMark). No image files except the generated `public/og.png`.
- Scroll effects: the only script is in `src/layouts/Base.astro`. It writes two numbers — `--sy` on `<html>` (scroll in viewport heights) and `--p` on every `[data-scroll]` element (0→1 as it crosses the viewport). CSS does all the drawing from those. Everything motion-related sits behind `prefers-reduced-motion: no-preference`; with reduced motion the barn is simply open and lit.
- `Pasture.astro` is the fence strip. Its animals, positions, sizes, and speeds are props set in `src/pages/index.astro`.
- Voice: first person, plain, direct. No hype words ("game-changing", "unlock"). Confident about the work, honest about the track record.
- Static site, no backend. Deploys on Vercel from `main`. Node 22 (`.node-version`).
- The site URL lives in two places: `astro.config.mjs` (`site:`) and the Sitemap line in `public/robots.txt`. Update both when `barnesai.ai` is attached.
- Share image: edit `scripts/og.html`, then render it with headless Chrome to `public/og.png` (1200×630).
