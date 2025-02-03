export async function GET() {
  const siteUrl = "https://www.okhatrimaza.shop";

  const staticPages = [
    "/",
    "/about",
    "/contact",
    "/privacy-policy",
  ];

  const lastModifiedDate = new Date().toISOString(); // Dynamic last modified date

  // Generate XML content
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
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

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
