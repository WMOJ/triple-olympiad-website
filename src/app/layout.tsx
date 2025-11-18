/* eslint-disable react/no-danger */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WOSS Triple Olympiad",
  description:
    "Empowering students through comprehensive STEM competitions across Mathematics, Science, and Computer Programming.",
  keywords: [
    "triple olympiad",
    "STEM competition",
    "mathematics olympiad",
    "computer science competition",
    "physics olympiad",
    "student competition",
    "WOSS",
  ],
  authors: [
    {
      name: "WOSS",
      url: "https://woss.org",
    },
  ],
  // Default to triolympiad.ca for canonical/open graph and structured data when
  // an environment variable is not set. For deploys, set NEXT_PUBLIC_SITE_URL
  // to https://triolympiad.ca.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://triolympiad.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WOSS Triple Olympiad",
    description:
      "A multi-day STEM competition with events in mathematics, computer science, and physics — join us Dec 15-17, 2025.",
    url: "/",
    siteName: "WOSS Triple Olympiad",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 800,
        alt: "WOSS Triple Olympiad Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WOSS Triple Olympiad",
    description:
      "Staged STEM competitions for students — register for the Triple Olympiad Dec 15-17, 2025.",
    images: ["/logo.webp"],
    creator: "@WOSS",
    site: "@WOSS",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#001002" },
  ],
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "WOSS",
          url: process.env.NEXT_PUBLIC_SITE_URL || "https://triolympiad.ca",
          logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://triolympiad.ca"}/logo.webp`,
        sameAs: ["https://www.facebook.com/", "https://www.twitter.com/"],
      },
      {
        "@type": "Event",
        name: "WOSS Triple Olympiad",
        startDate: "2025-12-15",
        endDate: "2025-12-17",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "White Oaks Secondary School (South Campus)",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1330 Montclair Dr",
            addressLocality: "Oakville",
            addressRegion: "ON",
            postalCode: "L6H 1Z5",
            addressCountry: "CA",
          },
        },
      },
    ],
  };
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Organization & Event JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
