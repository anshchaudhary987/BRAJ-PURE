import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Braj Pure - Premium Dairy',
    short_name: 'Braj Pure',
    description: 'Pure Desi Cow & Buffalo Milk Delivered Fresh',
    start_url: '/',
    display: 'standalone',
    background_color: '#030705',
    theme_color: '#E8A020',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
