/** @type {import('next').NextConfig} */
const nextConfig = {
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
