// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Change this when barnesai.ai is attached in Vercel.
  site: 'https://barnes-ai.vercel.app',
  integrations: [sitemap()],
});
