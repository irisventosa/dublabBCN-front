/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;
