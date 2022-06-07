/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/coc-api/players/:id*",
        destination: "https://api.clashofclans.com/v1/players/:id*",
      },
    ];
  },
  images: {
    domains: ["api-assets.clashofclans.com"],
  },
};

module.exports = nextConfig;
