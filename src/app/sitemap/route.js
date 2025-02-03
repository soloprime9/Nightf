import { NextResponse } from 'next/server';

export async function GET() {
  const url = 'https://example.com'; // Apne website ka URL daalo

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  </urlset>`;

  return NextResponse.json({ sitemap });
}
