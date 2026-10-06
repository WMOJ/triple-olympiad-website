import Image from "next/image";
import Link from "next/link";
import { MenuBar } from "@/components/MenuBar";
import { PeriodicHero } from "@/components/PeriodicHero";
import { TeamGrid } from "@/components/TeamGrid";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { DAYS } from "@/lib/olympiad";
import { Arrow } from "@/components/Arrow";

const FACTS: { label: string; text: string }[] = [
  { label: "Format", text: "Solo and team rounds" },
  { label: "Food", text: "Complimentary snacks and food between sessions" },
  { label: "Prizes", text: "Awarded to the top three teams in each category" },
  { label: "Cost", text: "Free for all HDSB high-school students" },
];

export default function Home() {
  return (
    <>
      <MenuBar />
      <main id="main">
        <PeriodicHero />

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="wrap mt-24 md:mt-36">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <figure className="lg:col-span-7 border border-line bg-ink-1 p-[3px]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/comphighlight.png"
                  alt="Teams of students at cafeteria tables during a past Triple Olympiad"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="photo"
                />
              </div>
            </figure>

            <div className="lg:col-span-5 lg:pl-6 flex flex-col">
              <h2 id="about-title" className="heading text-[clamp(2rem,4.2vw,3rem)]">
                About the Olympiad
              </h2>
              <p className="mt-5 text-fg-2 text-lg leading-relaxed prose-measure">
                From December 15 to 17, 2026, WOSS hosts three afternoons of
                competition in mathematics, computer science, physics and a
                practical hackathon.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-[3px] lg:mt-auto lg:pt-8">
                {FACTS.map((f) => (
                  <div key={f.label} className="cell min-h-[7.5rem] gap-4 p-3.5">
                    <dt className="cell-num">{f.label}</dt>
                    <dd className="text-[0.9375rem] leading-snug text-fg font-medium text-pretty">
                      {f.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" aria-labelledby="schedule-title" className="wrap mt-24 md:mt-36">
          <h2 id="schedule-title" className="heading text-[clamp(2rem,4.2vw,3rem)]">
            Three days, one after another
          </h2>
          <p className="mt-4 text-fg-2 text-lg">
            Each day the competition runs after school from{" "}
            <span className="text-fg font-semibold whitespace-nowrap">3:00 PM to 5:30 PM</span>.
          </p>

          <ol className="mt-10 border-t border-line">
            {DAYS.map((d) => (
              <li
                key={d.n}
                className="grid grid-cols-[4.75rem_1fr] items-center gap-x-5 gap-y-2 border-b border-line py-5 md:grid-cols-[6.5rem_14rem_1fr_auto] md:gap-x-8 md:py-6"
              >
                <div className="cell cell--lit row-span-2 h-[4.75rem] md:row-span-1 md:h-[6.5rem]" aria-hidden="true">
                  <span className="cell-num">{d.n}</span>
                  <span className="cell-sym text-[1.75rem] md:text-[2.4rem]">{d.symbol}</span>
                  <span className="cell-name">{d.short}</span>
                </div>
                <p className="data text-[0.8125rem] text-fg-3 md:text-sm">
                  Day {d.day}
                  <span className="block text-fg-2">
                    {d.weekdayLong}, Dec {d.n}
                  </span>
                </p>
                <h3 className="heading col-start-2 text-[clamp(1.5rem,3.6vw,2.6rem)] md:col-start-auto">
                  {d.long}
                  {d.extra && (
                    <span className="block text-fg-2 text-[0.55em] mt-1 font-semibold">
                      + {d.extra}
                    </span>
                  )}
                </h3>
                <p className="data hidden text-sm text-fg-2 md:block">3:00-5:30 PM</p>
              </li>
            ))}
          </ol>

          <figure className="mt-16 border border-line bg-ink-1 p-[3px]">
            <div className="relative aspect-[4/3] sm:aspect-[21/9] overflow-hidden">
              <Image
                src="/randomcaf.png"
                alt="Participants competing in the cafeteria on competition day"
                fill
                sizes="100vw"
                className="photo"
              />
            </div>
          </figure>
        </section>

        {/* Venue */}
        <section id="venue" aria-labelledby="venue-title" className="wrap mt-24 md:mt-36">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5 lg:order-2 lg:pl-6 flex flex-col">
              <h2 id="venue-title" className="heading text-[clamp(2rem,4.2vw,3rem)]">
                Venue &amp; registration
              </h2>
              <p className="mt-5 text-fg-2 text-lg leading-relaxed prose-measure">
                Hosted at White Oaks Secondary School (South Campus), 1330
                McCraney St. E, Oakville, ON.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-[3px]">
                <div className="cell min-h-[6.5rem] gap-3 p-3.5">
                  <dt className="cell-num">Parking</dt>
                  <dd className="text-[0.9375rem] font-medium leading-snug">Free, on-site</dd>
                </div>
                <div className="cell min-h-[6.5rem] gap-3 p-3.5">
                  <dt className="cell-num">Transit</dt>
                  <dd className="text-[0.9375rem] font-medium leading-snug">Stops minutes away</dd>
                </div>
              </dl>
              <div className="mt-8 lg:mt-auto pt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link href="/register" className="btn btn-primary">
                  Register
                  <Arrow />
                </Link>
                <span className="text-fg-2 text-[0.9375rem]">Registration is free.</span>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1 border border-line bg-ink-1 p-[3px]">
              <iframe
                title="1330 Montclair Dr Oakville location"
                src="https://maps.google.com/maps?q=1330%20Montclair%20Dr%2C%20Oakville%2C%20ON%20L6H%201Z5&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="block aspect-[4/3] w-full border-0 bg-ink-2"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-label="Frequently asked questions" className="mt-24 md:mt-36">
          <FAQ />
        </section>

        {/* Team */}
        <section id="team" aria-labelledby="team-title" className="wrap mt-24 md:mt-36">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 id="team-title" className="heading text-[clamp(2rem,4.2vw,3rem)]">
                Meet the crew behind this event
              </h2>
            </div>
            <div className="lg:col-span-8">
              <TeamGrid />
            </div>
          </div>
        </section>

        {/* Close */}
        <section aria-labelledby="close-title" className="wrap mt-24 md:mt-36">
          <div className="bg-brand text-on-brand px-6 py-10 md:px-12 md:py-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 id="close-title" className="display text-[clamp(2.25rem,6vw,4.5rem)]">
                Pick your days.
                <br />
                Entry is free.
              </h2>
              <p className="data mt-5 text-sm">December 15 to 17, 2026, 3:00-5:30 PM</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/register"
                className="btn bg-ground text-fg hover:bg-ink-3"
              >
                Register
                <Arrow />
              </Link>
              <Link
                href="/sponsor"
                className="btn border-on-brand/40 text-on-brand hover:border-on-brand"
              >
                Sponsor us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
