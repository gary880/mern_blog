import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),compression()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 8080, // port to 8080
  },
  preview: {
    port: 8080,
  },
})

