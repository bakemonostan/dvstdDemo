/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "downloads.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "static.mydomain.com",
      },
    ],
  },
};
module.exports = nextConfig;
// disableStaticImages: false,
// domains: [
//   "images.ctfassets.net",
//   "downloads.ctfassets.net",
//   "static.mydomain.com",
// ],
