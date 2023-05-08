/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ancuong.com",
        port: "",
        pathname: "/pictures/catalog/products/5000x2500-l/**",
      },
    ],
  },
};

module.exports = nextConfig;
