// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [icon(), vue()]
});