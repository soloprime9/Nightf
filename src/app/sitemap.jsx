export default async function handler(req, res) {
  const siteUrl = "https://www.okhatrimaza.shop";

  // Fetch dynamic URLs (replace this with your actual source)
  const dynamicPages = ["/", "/contact", "/privacy", "/aboutus"]; // Replace with dynamic fetching

  // Create XML format
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  ${dynamicPages
    .map(
      (page) => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).end(sitemap);
}
