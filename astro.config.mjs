import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://woyomi.rgw.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
