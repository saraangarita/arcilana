import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Config mínima. host:true permite verlo en red local y en previews.
export default defineConfig({
  plugins: [react()],
  server: { host: true },
  preview: { host: true, allowedHosts: true },
})
