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
  optimizeDeps: {
    // https://vitejs.dev/guide/dep-pre-bundling.html#automatic-dependency-discovery
    // https://github.com/vitejs/vite/issues/2679
    include: ["@fmind/graph"],
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  }
})
