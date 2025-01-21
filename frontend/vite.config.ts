import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
// import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
      },
  plugins: [
    react(),
    VitePWA({
      manifest:{
        "name": "ChatNet",
        "short_name": "ChatNet",
        "description": "ChatNet is a web application that connects people through chat",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#000000",
        "theme_color": "#000000",
        "icons": [
            {
                "src": "/designicon/chatNet16x16.png",
                "sizes": "16x16",
                "type": "image/png"
            },
            {
                "src": "/designicon/chatNet24x24.png",
                "sizes": "24x24",
                "type": "image/png"
            },
            {
                "src": "/designicon/chatNet32x32.png",
                "sizes": "32x32",
                "type": "image/png"
            },
            {
                "src": "/designicon/chatNet64x64.png",
                "sizes": "64x64",
                "type": "image/png"
            },
            {
                "src": "/designicon/chatNet128x128.png",
                "sizes": "128x128",
                "type": "image/png"
            },
            {
                "src": "/designicon/chatNet256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            },
            {
                "src": "/designicon/chatNet512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
    
        ]
    },
    workbox:{
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024, // Set limit to 4 MB
    },
    })
  ],
  server:{
    port: 3000,
    proxy: {
        '/api':{
            target: "https://chat-net-backend.vercel.app",
            changeOrigin: true,
        },
    },
  },
})

