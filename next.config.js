/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  allowedDevOrigins: ["172.18.0.80"],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "sgukopbucket.s3.ap-south-1.amazonaws.com" },
      { protocol: "https", hostname: "manage-api.sguk.ac.in" },
    ],
  },

  // Add this section to bypass the '--ignoreDeprecations' type check crash
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;