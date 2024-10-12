import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
// import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest:{
        "name": "ChatNet",
        "short_name": "ChatNet",
        "description": "ChatNet is a web application that connects people through chat",
        "start_url": "/index.html",
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

    },
    })
  ],
  // server: {
  //   host: '0.0.0.0',
  //   port: 443,
  //   https: {
  //     key: fs.readFileSync('192.168.6.90-key.pem'),
  //     cert: fs.readFileSync('192.168.6.90.pem'),
  //   }
  // }
})

