/* eslint-disable react/no-danger */
import { MenuBar } from "@/components/MenuBar";
import { faqData } from "@/lib/faqData";
import type { Metadata } from "next";
import { TeamGrid } from "@/components/TeamGrid";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
  return (
    <>
      <MenuBar />
      <div className="min-h-screen bg-black p-2 md:p-4">
        <div
          className="min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] rounded-[20px] md:rounded-[40px] p-4 md:p-8 relative overflow-hidden"
          style={{ backgroundColor: "#001002" }}
        >
          <div
            className="absolute inset-0 rounded-[40px] pointer-events-none animate-background-fade-in"
            style={{
              backgroundImage: "url(/background_art.png)",
              backgroundSize: "100% auto",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          />

          <img
            src="/bg_decor.svg"
            alt="Background Decoration"
            className="absolute top-4 right-2 w-150 h-auto  pointer-events-none opacity-50"
            draggable={false}
          />

          <div className="relative z-10">
            <div className="flex items-start justify-center pt-20 md:pt-30">
              <div className="text-center flex flex-col items-center gap-6 md:gap-13 px-4">
                <img
                  src="/disciplines.png"
                  alt="Disciplines"
                  className="w-32 md:w-75 h-auto animate-fade-in-down"
                  draggable={false}
                />
                <img
                  src="/triple_olympiad.png"
                  alt="Triple Olympiad"
                  className="w-96 md:w-270 h-auto drop-shadow-lg animate-fade-in-down-delay-1"
                  draggable={false}
                />
                <img
                  src="/hero_art.png"
                  alt="Hero Art"
                  className="w-auto h-auto max-w-sm md:max-w-2xl lg:max-w-4xl animate-fade-in-down-delay-2"
                  draggable={false}
                />
                <a
                  className="bg-linear-to-b from-green-400 to-green-700 text-black px-6 py-3 md:px-10 md:py-5 rounded-full font-medium text-base md:text-[20px] shadow-md hover:from-green-500 hover:to-green-800 transition-all duration-300 flex items-center gap-2 w-48 md:w-60 justify-center animate-fade-in-down-delay-3"
                  href="mailto:wosstriolympiad@gmail.com?subject=Sponsorship%20Opportunity%20for%20Triple%20Olympiad"
                >
                  Sponsor Us!
                </a>

                {/* 
                ------- SPONSOR SCROLLING SECTION COMMENTED OUT -------
                <div className="mt-16 md:mt-24">
                  <h2 className="text-white text-xl md:text-2xl font-semibold opacity-70 mb-8">
                    Proudly Sponsored By:
                  </h2>
                  <div className="relative overflow-hidden">
                    <div className="flex animate-infinite-scroll">
                      <div className="flex items-center gap-12 md:gap-16 min-w-max px-6">
                        <img src="/google.svg" alt="Google" className="h-8 md:h-10 w-auto opacity-60" draggable={false} />
                        <img src="/amazon.svg" alt="Amazon" className="h-8 md:h-12 w-auto opacity-60" draggable={false} />
                        <img src="/meta.svg" alt="Meta" className="h-8 md:h-7 w-auto opacity-60" draggable={false} />
                        <img src="/netflix.svg" alt="Netflix" className="h-8 md:h-8 w-auto opacity-60" draggable={false} />
                        <img src="/spotify.svg" alt="Spotify" className="h-8 md:h-11 w-auto opacity-60" draggable={false} />
                      </div>

                      <div className="flex items-center gap-12 md:gap-16 min-w-max px-6">
                        <img src="/google.svg" alt="Google" className="h-8 md:h-10 w-auto opacity-60" draggable={false} />
                        <img src="/amazon.svg" alt="Amazon" className="h-8 md:h-12 w-auto opacity-60" draggable={false} />
                        <img src="/meta.svg" alt="Meta" className="h-8 md:h-7 w-auto opacity-60" draggable={false} />
                        <img src="/netflix.svg" alt="Netflix" className="h-8 md:h-8 w-auto opacity-60" draggable={false} />
                        <img src="/spotify.svg" alt="Spotify" className="h-8 md:h-11 w-auto opacity-60" draggable={false} />
                      </div>

                      <div className="flex items-center gap-12 md:gap-16 min-w-max px-6">
                        <img src="/google.svg" alt="Google" className="h-8 md:h-10 w-auto opacity-60" draggable={false} />
                        <img src="/amazon.svg" alt="Amazon" className="h-8 md:h-12 w-auto opacity-60" draggable={false} />
                        <img src="/meta.svg" alt="Meta" className="h-8 md:h-7 w-auto opacity-60" draggable={false} />
                        <img src="/netflix.svg" alt="Netflix" className="h-8 md:h-8 w-auto opacity-60" draggable={false} />
                        <img src="/spotify.svg" alt="Spotify" className="h-8 md:h-11 w-auto opacity-60" draggable={false} />
                      </div>

                      <div className="flex items-center gap-12 md:gap-16 min-w-max px-6">
                        <img src="/google.svg" alt="Google" className="h-8 md:h-10 w-auto opacity-60" draggable={false} />
                        <img src="/amazon.svg" alt="Amazon" className="h-8 md:h-12 w-auto opacity-60" draggable={false} />
                        <img src="/meta.svg" alt="Meta" className="h-8 md:h-7 w-auto opacity-60" draggable={false} />
                        <img src="/netflix.svg" alt="Netflix" className="h-8 md:h-8 w-auto opacity-60" draggable={false} />
                        <img src="/spotify.svg" alt="Spotify" className="h-8 md:h-11 w-auto opacity-60" draggable={false} />
                      </div>
                    </div>

                    <div
                      className="absolute left-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-10"
                      style={{ background: "linear-gradient(to right, #001002, transparent)" }}
                    />
                    <div
                      className="absolute right-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-10"
                      style={{ background: "linear-gradient(to left, #001002, transparent)" }}
                    />
                  </div>
                </div>
                -------------------------------------------------------
                */}

              </div>
            </div>

            <div className="px-8 md:px-16 lg:px-24 relative overflow-hidden">
              <img
                src="/side_glow.png"
                alt="Side Glow"
                className="absolute top-4 right-0 md:top-8 w-64 md:w-80 h-auto pointer-events-none opacity-40 -z-10"
                draggable={false}
              />

              <img
                src="/bg_decor.svg"
                alt="Background Decoration"
                className="absolute bottom-4 left-2 md:bottom-8 md:left-4 w-100 md:w-200 h-auto pointer-events-none opacity-50 transform rotate-180"
                draggable={false}
              />

              <div
                id="about"
                className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto"
              >
                <div className="space-y-6 text-left">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white text-left">
                    About the Triple Olympiad
                  </h3>

                  <p className="text-base md:text-lg text-white opacity-70 max-w-md text-left">
                    From December 15-17, 2025, join WOSS' Triple Olympiad
                    featuring competitions in mathematics, computer science, and
                    physics. There are solo and team rounds, with with
                    complimentary snacks and food between sessions. Prizes will
                    be awarded to the top three teams in each category.
                  </p>
                </div>

                <div className="bg-green-700 rounded-2xl p-3 md:p-4 aspect-4/3 flex items-center justify-center overflow-hidden">
                  <img
                    src="comphighlight.png"
                    alt="Competitors working through Olympiad challenges"
                    className="w-full h-full object-cover rounded-2xl"
                    draggable={false}
                  />
                </div>
              </div>

              <div
                id="schedule"
                className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto"
              >
                <div className="bg-green-700 rounded-2xl p-3 md:p-4 aspect-4/3 flex items-center justify-center order-2 lg:order-1 overflow-hidden">
                  <img
                    src="/randomcaf.png"
                    alt="Illustration of the Triple Olympiad daily schedule"
                    className="w-full h-full object-cover rounded-2xl"
                    draggable={false}
                  />
                </div>

                <div className="space-y-6 text-left order-1 lg:order-2">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white text-left">
                    Competition Day Schedule
                  </h3>

                  <div className="text-base md:text-lg text-white opacity-70 max-w-md text-left space-y-4">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Day 1: Physics (December 15)</li>
                      <li>Day 2: Math (December 16)</li>
                      <li>Day 3: Computer Science (December 17)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                id="venue"
                className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto"
              >
                <div className="space-y-6 text-left">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m0 0a4 4 0 11-6 0M13 7a4 4 0 11-6 0 4 4 0 016 0z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white text-left">
                    Venue & Registration Details
                  </h3>

                  <div className="text-base md:text-lg text-white opacity-70 max-w-md text-left space-y-4">
                    <p>
                      Hosted at White Oaks Secondary School (South Campus), 1330
                      McCraney St. E, Oakville, ON. Free parking is available
                      on-site and public transit stops minutes away.
                    </p>
                  </div>
                </div>

                <div className="bg-green-700 rounded-2xl p-0 aspect-4/3 flex items-center justify-center overflow-hidden">
                  <iframe
                    title="1330 Montclair Dr Oakville location"
                    src="https://maps.google.com/maps?q=1330%20Montclair%20Dr%2C%20Oakville%2C%20ON%20L6H%201Z5&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <div id="faq">
              <FAQ />
            </div>

            <div id="team" className="mt-24 md:mt-32 mb-24 md:mb-64 text-center">
              <img
                src="/team.png"
                alt="Team"
                className="opacity-50 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl"
                draggable={false}
              />
              <p className="mt-6 text-white text-lg md:text-[30px] font-bold opacity-100">
                Meet the crew behind this event
              </p>

              <TeamGrid />
            </div>

            <Footer />
                {/* FAQ JSON-LD */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />

            <div className="mt-24 md:mt-32 relative">
              <img
                src="/bottom_glow.png"
                alt="Bottom Glow"
                className="absolute bottom-0 left-0 w-full h-auto opacity-60 pointer-events-none -z-10"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Home — WOSS Triple Olympiad",
  description:
    "Join the WOSS Triple Olympiad, a three-day STEM competition featuring mathematics, computer science, and physics. Register for Dec 15-17, 2025.",
  openGraph: {
    title: "WOSS Triple Olympiad — Home",
    description:
      "Three days of STEM challenges across mathematics, computer science, and physics — join WOSS's Triple Olympiad.",
    url: "/",
    images: [{ url: "/logo.webp", alt: "WOSS Triple Olympiad" }],
  },
};
