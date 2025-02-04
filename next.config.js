/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Ensure correct output mode

  async redirects() {
    return [
      {
        source: "/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)", 
        destination: "/",
        permanent: false, 
      },
    ];
  },
};

module.exports = nextConfig;
