/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/service-scope/:slug",
        destination: "/case-studies/category/:slug",
      },
    ];
  },
};

export default nextConfig;
