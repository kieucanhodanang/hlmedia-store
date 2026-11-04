
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hlmedia.store',

  output: 'static',

  i18n: {
    locales: ['vi', 'lo'],
    defaultLocale: 'vi',
    routing: {
      prefixDefaultLocale: true
    }
  },

  build: {
    format: 'directory'
  }
});
