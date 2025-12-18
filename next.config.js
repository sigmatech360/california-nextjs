/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: { appDir: true },
  swcMinify: true,
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    unoptimized: false,
    // formats: ['image/webp', 'image/avif'],
  },
  webpack: (config, { isServer }) => {
    config.optimization.minimize = true;
    // Enable code splitting
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
          reuseExistingChunk: true,
        },
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
          name: 'common',
        },
      };
    }
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
