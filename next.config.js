/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Allow development requests from this IP
  allowedDevOrigins: ['172.18.0.80'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;