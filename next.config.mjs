/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "investiga.reyserlyn.com",
        protocol: "https",
      },
      {
        hostname: "ynoa-uploader.ynoacamino.site",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
