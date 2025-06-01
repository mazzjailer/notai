import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'notAI',
    short_name: 'notAI',
    description: 'a simple ai chat app.',
    start_url: '/',
    display: 'standalone',
    background_color: 'oklch(98.7% 0.022 95.277)',
    theme_color: 'oklch(98.7% 0.022 95.277)',
    "icons": [
    {
      "src": "/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  }
}