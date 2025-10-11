import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),      // ✅ needed for React
    tailwindcss() // ✅ your Tailwind setup
  ],
  build: {
    outDir: 'dist', // ✅ Vercel expects this
  },
})
