/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },

  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
