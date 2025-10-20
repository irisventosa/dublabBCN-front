/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // Optional, but helps when using App Router + Edge
    outputFileTracingRoot: __dirname,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.dublab.cat",
        pathname: "**",
      },

      {
        protocol: "http",
        hostname: "109.69.8.21",
        pathname: "**",
      },
    ],
  },
};

// Prevent recursive OpenNext build
if (process.env.OPENNEXT_BUILD) {
  console.log("Skipping nested OpenNext build...");
  process.exit(0);
}

module.exports = nextConfig;
