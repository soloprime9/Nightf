export async function GET() {
  const siteUrl = "https://www.okhatrimaza.shop";
  const staticPages = [
    `${siteUrl}/`,
    `${siteUrl}/about`,
    `${siteUrl}/contact`,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map((url) => `<url><loc>${url}</loc></url>`).join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
