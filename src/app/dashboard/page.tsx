import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — WOSS Triple Olympiad",
  description:
    "Dashboard for registered participants — view standings, schedules, and announcements.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/dashboard",
  },
};
