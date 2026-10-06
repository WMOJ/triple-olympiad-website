import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/olympiad";

const QUICK_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#venue", label: "Venue" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#team", label: "Team" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/register", label: "Register" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line mt-24 md:mt-32">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image src="/logo.webp" alt="" width={40} height={40} className="h-10 w-10" />
            <p className="heading text-lg leading-tight">
              <span className="text-fg-3">WOSS</span>
              <br />
              Triple Olympiad
            </p>
          </div>
          <p className="mt-5 max-w-[36ch] text-[0.9375rem] text-fg-2 leading-relaxed">
            Empowering students through STEM competitions in Mathematics,
            Computer Science and Physics at White Oaks Secondary School.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-sm font-semibold text-fg">Quick links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[0.9375rem] md:grid-cols-1">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-fg-2 hover:text-brand-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold text-fg">Contact</h2>
          <address className="mt-4 not-italic text-[0.9375rem] text-fg-2 leading-relaxed">
            1330 Montclair Dr
            <br />
            Oakville, ON L6H 1Z5
          </address>
          <a href={`mailto:${CONTACT_EMAIL}`} className="link mt-3 inline-block text-[0.9375rem] break-all">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-6 text-[0.8125rem] text-fg-3 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} WOSS Triple Olympiad. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <a href="#" className="hover:text-fg transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-fg transition-colors">Terms of Service</a>
            </li>
            <li>
              <a href="/sitemap.xml" className="hover:text-fg transition-colors">Sitemap</a>
            </li>
            <li>
              <a href="/robots.txt" className="hover:text-fg transition-colors">Robots</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
