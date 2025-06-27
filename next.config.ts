import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // If you use next/image with remote patterns, you might need
    // to switch to `unoptimized: true` for pure static export without a custom loader.
    // Or, define a custom loader if you still want some "optimization" during build.
    unoptimized: true, // Often necessary for full static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // --- ADD THIS LINE ---
  output: 'export',
  // --- END ADDITION ---
};

export default nextConfig;
