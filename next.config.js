/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Development only
  allowedDevOrigins: ["172.18.0.80"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  typescript: {
    // Set to false after fixing all TypeScript errors
    ignoreBuildErrors: true,
  },

  eslint: {
    // Set to false after fixing all ESLint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;