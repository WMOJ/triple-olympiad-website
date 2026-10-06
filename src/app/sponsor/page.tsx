import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/olympiad";
import { Arrow } from "@/components/Arrow";

type Tier = {
  name: string;
  symbol: string;
  price: string;
  tagline: string;
  benefits: string[];
  cumulative: boolean;
  tone: "t1" | "t2" | "t3" | "t4";
};

const TIERS: Tier[] = [
  {
    name: "Vector",
    symbol: "Ve",
    price: "$100",
    tagline: "Get your name in front of the room.",
    benefits: [
      "Logo on Event Website (XS)",
      "Logo on Main Stage Slides",
      "Logo on Participant Stickers",
      "Sponsored Discord Announcements",
    ],
    cumulative: false,
    tone: "t1",
  },
  {
    name: "Matrix",
    symbol: "Mx",
    price: "$250",
    tagline: "Stage time, socials, and a line to every participant.",
    benefits: [
      "Logo on Event Website (S)",
      "Shoutouts on Social Media",
      "Shoutout at opening/closing ceremony",
      "Dedicated Email to all Participants",
    ],
    cumulative: true,
    tone: "t2",
  },
  {
    name: "Tensor",
    symbol: "Te",
    price: "$500",
    tagline: "Speak at closing, hand out swag, own a prize.",
    benefits: [
      "Logo on Event Website (M)",
      "Distribute company swag",
      "Speaking Slot at Closing Ceremony",
    ],
    cumulative: true,
    tone: "t3",
  },
  {
    name: "Singularity",
    symbol: "Sg",
    price: "$1,500",
    tagline: "Everything we have: booth, judging seat, trophy.",
    benefits: [
      "Logo on Event Website (XL)",
      "Dedicated Sponsor Booth",
      "Seat on Judging Panel",
      "Logo on Winner Trophy",
      "Dedicated Social Media Post",
    ],
    cumulative: true,
    tone: "t4",
  },
];

const IN_KIND = [
  {
    title: "Competition Prizes & Tech",
    text: "Mechanical keyboards, microcontrollers, electronics kits, headphones, smart devices, or tech peripherals awarded to our winning teams and individual category champions.",
  },
  {
    title: "Company Swag & Goodies",
    text: "Branded shirts, hoodies, stickers, notebooks, water bottles, and stationery items included in the official participant welcome bags for every attendee.",
  },
  {
    title: "Tier-Equivalent Recognition",
    text: "Physical contributions are assessed based on their estimated retail fair value and rewarded with corresponding tier benefits (Vector, Matrix, Tensor, Singularity), including website features, slide credits, and ceremony announcements.",
  },
];

const mailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export default function SponsorPage() {
  return (
    <>
      <MenuBar />
      <main id="main">
        {/* Hero */}
        <section aria-labelledby="sponsor-title" className="wrap pt-12 md:pt-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-end">
            <div className="lg:col-span-7">
              <h1 id="sponsor-title" className="display text-[clamp(2.6rem,7vw,5.25rem)]">
                Sponsor the Triple Olympiad
              </h1>
              <p className="mt-6 text-fg-2 text-lg md:text-xl leading-snug max-w-[40ch]">
                Join us in empowering the next generation of STEM talent at the
                WOSS Triple Olympiad.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={mailto("Triple Olympiad Sponsorship")} className="btn btn-primary">
                  Become a sponsor
                  <Arrow />
                </a>
                <a href="/sponsorship.pdf" className="btn btn-ghost" target="_blank" rel="noopener">
                  Sponsorship package (PDF)
                </a>
              </div>
            </div>

            <ol aria-label="Sponsorship tiers" className="lg:col-span-5 grid grid-cols-4 gap-[3px]">
              {TIERS.map((t, i) => (
                <li key={t.name}>
                  <a
                    href={`#tier-${t.name.toLowerCase()}`}
                    className={`cell tier-${t.tone} aspect-[4/5] hover:border-brand-accent transition-colors`}
                  >
                    <span className="cell-num">{i + 1}</span>
                    <span className="cell-sym text-[clamp(1.5rem,3.6vw,2.4rem)]">{t.symbol}</span>
                    <span className="cell-name data !text-[0.6875rem]">{t.price}</span>
                    <span className="sr-only">{t.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About + Why */}
        <section className="wrap mt-24 md:mt-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 border-t border-line pt-12">
            <div>
              <h2 className="heading text-[clamp(1.75rem,3.4vw,2.5rem)]">About the event</h2>
              <p className="mt-5 text-fg-2 text-lg leading-relaxed prose-measure">
                The Triple Olympiad brings together Halton&apos;s brightest
                students to collaborate, solve problems, and compete in
                Mathematics, Science, and Computer Programming. With over a
                hundred interested participants spanning grades 9 to 12, it
                showcases the strongest and most diverse STEM talent at the
                largest high school in Oakville.
              </p>
            </div>

            <div>
              <h2 className="heading text-[clamp(1.75rem,3.4vw,2.5rem)]">Why sponsor us?</h2>
              <p className="mt-5 text-fg-2 text-lg leading-relaxed prose-measure">
                For our sponsors, it is a unique chance to showcase your brand
                directly to motivated, STEM-focused students, their families,
                and our alumni community. It allows you to position your
                organization as a supporter of education, innovation, and the
                next generation of technical talent.
              </p>
              <ul className="mt-8 border-t border-line">
                {[
                  "Support local students and future innovators",
                  "Demonstrate commitment to youth and education",
                  "Connect with dedicated math, science and CS students at the largest high school in Oakville",
                ].map((item) => (
                  <li key={item} className="flex gap-4 border-b border-line py-4 text-fg">
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="mt-1.5 shrink-0 text-brand">
                      <path d="M2 7.5 5.5 11 12 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section aria-labelledby="tiers-title" className="wrap mt-24 md:mt-32">
          <h2 id="tiers-title" className="heading text-[clamp(2rem,4.2vw,3rem)]">
            Sponsorship tiers
          </h2>
          <p className="mt-4 text-fg-2 text-lg max-w-[52ch]">
            Each tier includes everything in the tiers before it.
          </p>

          <div className="mt-10 grid gap-[3px] sm:grid-cols-2 xl:grid-cols-4">
            {TIERS.map((t) => (
              <article
                key={t.name}
                id={`tier-${t.name.toLowerCase()}`}
                aria-labelledby={`tier-${t.name.toLowerCase()}-name`}
                className={`tier-${t.tone} flex flex-col border p-6 md:p-7`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 id={`tier-${t.name.toLowerCase()}-name`} className="heading text-[1.9rem]">
                      {t.name}
                    </h3>
                  </div>
                  <span aria-hidden="true" className="cell-sym text-[2.25rem] tier-symbol">
                    {t.symbol}
                  </span>
                </div>
                <p className="data mt-6 text-[2.1rem] leading-none">{t.price}</p>
                <p className="mt-4 tier-muted text-[0.9375rem] leading-snug min-h-[2.6em]">{t.tagline}</p>

                <ul className="mt-6 flex-1 border-t tier-rule">
                  {t.cumulative && (
                    <li className="border-b tier-rule py-2.5 text-[0.875rem] tier-muted">
                      Plus all previous benefits
                    </li>
                  )}
                  {t.benefits.map((b) => (
                    <li key={b} className="border-b tier-rule py-2.5 text-[0.9375rem] leading-snug">
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={mailto(`${t.name} Sponsorship`)}
                  className="tier-cta btn mt-8 w-full justify-between"
                >
                  Sponsor at {t.name}
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* In-kind */}
        <section aria-labelledby="inkind-title" className="wrap mt-24 md:mt-32">
          <div className="border border-line bg-ink-1 p-6 md:p-12">
            <h2 id="inkind-title" className="heading text-[clamp(1.75rem,3.6vw,2.75rem)] max-w-[22ch]">
              Physical merchandise &amp; in-kind sponsorships
            </h2>
            <p className="mt-5 text-fg-2 text-lg leading-relaxed prose-measure">
              In addition to financial sponsorship, we also enthusiastically
              welcome sponsorships in the form of physical merchandise,
              competition prizes, hardware, and event goods. In-kind
              contributions directly enhance the participant experience and put
              your products straight into the hands of 100+ motivated high
              school students.
            </p>

            <dl className="mt-10 grid gap-8 md:grid-cols-3 md:gap-8">
              {IN_KIND.map((item) => (
                <div key={item.title} className="border-t border-brand pt-5">
                  <dt className="heading text-xl">{item.title}</dt>
                  <dd className="mt-3 text-fg-2 text-[0.9375rem] leading-relaxed">{item.text}</dd>
                </div>
              ))}
            </dl>

            <a
              href={mailto("Physical Merchandise / In-Kind Sponsorship")}
              className="btn btn-primary mt-10"
            >
              Sponsor with merchandise
              <Arrow />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
