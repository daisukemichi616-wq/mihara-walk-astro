import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ▼ 自分のサイトのURL（これがないとサイトマップが作れません） ▼
  site: 'https://photomap-mihara-walk.pages.dev',
  
  // ▼ エラーの原因だった tailwind() を削除し、sitemap() だけにしました ▼
  integrations: [sitemap()],
});