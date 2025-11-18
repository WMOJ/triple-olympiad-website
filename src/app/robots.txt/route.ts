import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://triolympiad.ca";
  const body = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\nDisallow: /api/\n`;
  return new NextResponse(body, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
