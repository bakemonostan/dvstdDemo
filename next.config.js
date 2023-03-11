/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: false,
    domains: ["images.ctfassets.net", "static.mydomain.com"],
  },
};
module.exports = nextConfig;
