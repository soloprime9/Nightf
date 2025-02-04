import { GetServerSideProps } from 'next';

const Sitemap = () => null;
export const GET = async () => {
  const url = 'https://example.com'; // Apne website ka URL daalo

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

export async function getServerSideProps({ res }) {
  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.5 },
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map((route) => `
        <url>
          <loc>${route.url}</loc>
          <changefreq>${route.changefreq}</changefreq>
          <priority>${route.priority}</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapXml);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
