import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),{
      name: "copy-redirects",
      closeBundle() {
        copyFileSync("public/_redirects", "dist/_redirects");
      }
    }],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  }
})