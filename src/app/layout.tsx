/* eslint-disable react/no-danger */
import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import "./globals.css";

// Archivo carries everything from body copy to the expanded display cuts
// (wdth axis 62-125). Martian Mono is reserved for data: atomic numbers,
// dates, times and prices.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const martianMono = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  display: "swap",
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://triolympiad.ca"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WOSS Triple Olympiad",
    description:
      "A multi-day STEM competition with events in mathematics, computer science, and physics. Join us Dec 15-17, 2026.",
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
      "Staged STEM competitions for students. Register for the Triple Olympiad Dec 15-17, 2026.",
    images: ["/logo.webp"],
    creator: "@WOSS",
    site: "@WOSS",
  },

  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#040605" },
    { media: "(prefers-color-scheme: dark)", color: "#040605" },
  ],
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
        logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://triolympiad.ca"
          }/logo.webp`,
        sameAs: ["https://www.facebook.com/", "https://www.twitter.com/"],
      },
      {
        "@type": "Event",
        name: "WOSS Triple Olympiad",
        startDate: "2026-12-15",
        endDate: "2026-12-17",
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
    <html lang="en" className={`${archivo.variable} ${martianMono.variable}`}>
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
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
