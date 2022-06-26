import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9001
  },
  preview: {
    port: 9002
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  }
})
