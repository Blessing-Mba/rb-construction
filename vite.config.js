import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Removed vueDevTools import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Removed vueDevTools() plugin
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
