import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://vandiza.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  vite: {
    ssr: {
      noExternal: ['decap-cms-app'],
    },
  },
});
