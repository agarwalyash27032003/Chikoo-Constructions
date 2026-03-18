import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), preact({
      prerender: {
        enabled: true,
        additionalPrerenderRoutes: ['/about', '/project']
      }
    })],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  }
})