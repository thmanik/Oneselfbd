/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clipart-library.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      // {
      //   protocol: "https",
      //   hostname: "",
      // },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "89.116.134.144",
      },
    ],
  },
};

export default nextConfig;
