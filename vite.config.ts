import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/dondejuanita',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.jpg', 'favicon.png', 'apple-touch-icon.png', 'isotipo.png'],
      manifest: {
        name: 'Donde Juanita',
        short_name: 'Juanita',
        description: 'Café con salas temáticas - Santa Cruz de la Sierra',
        theme_color: '#8B4513',
        background_color: '#FFF8F0',
        display: 'standalone',
        start_url: '/dondejuanita/',
        icons: [
          {
            src: '/dondejuanita/isotipo-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/dondejuanita/isotipo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
