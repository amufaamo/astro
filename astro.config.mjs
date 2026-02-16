import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://amufaamo.github.io',
  base: '/astro',

  vite: {
    plugins: [tailwindcss()],
  },
});