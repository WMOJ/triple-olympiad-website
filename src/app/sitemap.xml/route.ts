import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://triolympiad.ca";

  const pages = ["", "auth", "dashboard"]; // add additional static pages here

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((page) => `  <url>\n    <loc>${siteUrl}/${page}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </url>`) 
    .join("\n")}\n</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
