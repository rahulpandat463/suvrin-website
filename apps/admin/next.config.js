/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://suvrin-website-backend.vercel.app/api/:path*',
      },
    ];
  },
};

export default nextConfig;
