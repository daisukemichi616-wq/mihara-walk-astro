import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // ▼ これが絶対に必要です ▼
  site: 'https://photomap-mihara-walk.pages.dev',
  
  integrations: [tailwind(), sitemap()],
});