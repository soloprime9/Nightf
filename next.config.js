/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Ensure correct output mode

  async redirects() {
    return [
      {
        source: "/:path*", // Matches all unknown paths
        destination: "/",
        permanent: false, // Use `true` for a permanent 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
