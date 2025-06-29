import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.medium.com',
      },
      {
        protocol: 'https', 
        hostname: 'medium.com',
      },
      {
        protocol: 'https',
        hostname: 'images.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'i.medium.com',
      },
    ],
  },
};

export default nextConfig;