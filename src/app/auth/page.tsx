import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — WOSS Triple Olympiad",
  description:
    "Sign in to access your dashboard and manage registrations for the WOSS Triple Olympiad.",
  alternates: {
    canonical: "/auth",
  },
};

import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";

export default function AuthPage() {
  return (
    <>
      <MenuBar />
      <main className="min-h-[60vh] flex items-center justify-center p-8">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-3xl font-bold text-white">Sign in</h1>
          <p className="text-white/70 mt-4">
            Sign in to access your dashboard and manage registrations. If you
            haven't registered yet, please use the Register button in the
            navigation.
          </p>

          <div className="mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSekrMwHMV2sJHNmuIWCgMm3ndVJ_n0CRSNz753GqwgN2cAtvw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
            >
              Open Registration Form
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
