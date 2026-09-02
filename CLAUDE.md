# Barnes Inc. website — notes for Claude Code

- All copy, links, video IDs, and the Beehiiv embed live in `src/content/site.ts`. Text edits go there, never in components.
- Design tokens (colors, type, spacing, motion) live in `src/styles/tokens.css`. Change the accent there, nowhere else.
- Voice: first person, plain, direct. No hype words ("game-changing", "unlock"). Confident about the work, honest about the track record.
- Static site, no backend. Deploys on Vercel from `main`. Node 22 (`.node-version`).
- The site URL lives in two places: `astro.config.mjs` (`site:`) and the Sitemap line in `public/robots.txt`. Update both when `barnesai.ai` is attached.
