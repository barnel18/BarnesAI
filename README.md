# Barnes Inc. — website

Phase 1 brand home: positioning, the building-in-public project story, videos (empty state until the first upload), Beehiiv signup, about.

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

## Later

- Paste the Beehiiv embed into `site.signup.beehiivEmbedHtml`.
- Add YouTube video IDs to `site.videos.videoIds`.
- Flip `enabled: true` on TikTok / X / Skool links in `site.footer.links`.
