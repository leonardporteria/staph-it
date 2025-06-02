import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'upload.wikimedia.org',
      'plus.unsplash.com',
      'media.licdn.com',
      'drive.google.com',
    ],
  },
};

export default nextConfig;
