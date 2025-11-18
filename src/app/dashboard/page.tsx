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

import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";

export default function DashboardPage() {
  return (
    <>
      <MenuBar />
      <main className="min-h-[60vh] flex items-center justify-center p-8">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-white/70 mt-4">
            Dashboard content for registered users will appear here. Please sign
            in to access personalized info and standings.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
