import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local dev server on the documented default port 5173.
// strictPort makes Vite fail instead of silently moving to another port.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
})
