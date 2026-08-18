import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://woyomi.rgw.app',
  vite: {
    plugins: [tailwindcss()]
  }
})
