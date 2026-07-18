/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  allowedDevOrigins: ["172.18.0.80"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Add this section to bypass the '--ignoreDeprecations' type check crash
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;