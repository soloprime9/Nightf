export default async function handler(req, res) {
  const siteUrl = "https://www.okhatrimaza.shop";

  // Manually update this list with new pages
  const staticPages = [
    "/",
    "/contact",
    "/privacy",
    "/aboutus",
    "/new-page", // Add or remove pages manually
  ];

  // Define a fixed last modified date (or update manually)
  const lastModifiedDate = "2025-02-01T12:00:00Z"; // Update this when needed

  // Create XML format
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${lastModifiedDate}</lastmod>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).end(sitemap);
}
