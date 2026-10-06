"use client";

import Link from "next/link";
import { useState } from "react";
import { DAYS, ELEMENT_SYMBOLS, positionOf, pBlockColumn } from "@/lib/olympiad";
import { Arrow } from "@/components/Arrow";

type Ghost = { n: number; sym: string; r: number; c: number; label?: string };

// Every cell of the main table except the three competition days.
function buildGhosts(): Ghost[] {
  const out: Ghost[] = [];
  for (let n = 1; n <= 118; n++) {
    if (DAYS.some((d) => d.n === n)) continue;
    // Lanthanides and actinides live in the footnote rows of a real chart.
    if ((n >= 58 && n <= 71) || (n >= 90 && n <= 103)) continue;
    const pos = positionOf(n);
    if (n === 57) {
      out.push({ n, sym: "", r: 6, c: 3, label: "57-71" });
      continue;
    }
    if (n === 89) {
      out.push({ n, sym: "", r: 7, c: 3, label: "89-103" });
      continue;
    }
    out.push({ n, sym: ELEMENT_SYMBOLS[n - 1], r: pos.r, c: pos.c });
  }
  return out;
}

const GHOSTS = buildGhosts();

export function PeriodicHero() {
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (value: string) =>
    setPicked((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const ordered = DAYS.filter((d) => picked.includes(d.value));
  const href = ordered.length
    ? `/register?sections=${encodeURIComponent(ordered.map((d) => d.value).join(","))}`
    : "/register";

  return (
    <section aria-labelledby="hero-title" className="wrap pt-8 md:pt-12 xl:pt-10">
      <div className="ptable hero-table">
        <div className="hero-copy">
          <h1 id="hero-title" className="display text-[clamp(2.6rem,11vw,4.5rem)]">
            Triple Olympiad
          </h1>
          <p className="mt-4 xl:mt-3 text-fg-2 text-[1.0625rem] md:text-lg leading-snug max-w-[38ch] text-pretty">
            Three free after-school competitions at White Oaks Secondary: math,
            computer science, then physics with a practical hackathon.
          </p>
          <div className="mt-6 xl:mt-5 flex flex-wrap items-center gap-3">
            <Link href={href} className="btn btn-primary">
              {ordered.length ? `Register for ${ordered.length === 3 ? "all 3 days" : ordered.length === 1 ? "1 day" : "2 days"}` : "Register"}
              <Arrow />
            </Link>
            <Link href="/sponsor" className="btn btn-ghost">
              Sponsor us
            </Link>
          </div>
          <p className="sr-only" aria-live="polite">
            {ordered.length
              ? `Selected: ${ordered.map((d) => d.long).join(", ")}.`
              : "No days selected."}
          </p>
        </div>

        <p className="hero-legend">
          <span className="data text-brand-accent">15 16 17</span>{" "}
          <span>
            Each day is an element, numbered by its December date. Pick yours,
            then register.
          </span>
        </p>

        {GHOSTS.map((g) => (
          <div
            key={g.n}
            aria-hidden="true"
            className={`cell ghost ${g.r <= 3 && pBlockColumn(g.c) ? "in-p" : ""}`}
            style={
              {
                "--r": g.r,
                "--c": g.c,
                "--pc": pBlockColumn(g.c) ?? 0,
                "--i": g.n,
              } as React.CSSProperties
            }
          >
            <span className="cell-num">{g.label ?? g.n}</span>
            {g.sym && <span className="cell-sym">{g.sym}</span>}
          </div>
        ))}

        {DAYS.map((d, i) => {
          const on = picked.includes(d.value);
          const pos = positionOf(d.n);
          return (
            <button
              key={d.n}
              type="button"
              aria-pressed={on}
              aria-label={`${d.long}, ${d.weekdayLong} December ${d.n}. ${on ? "Selected" : "Select"} for registration`}
              onClick={() => toggle(d.value)}
              className={`cell day-cell in-p ${on ? "cell--lit" : ""}`}
              style={
                {
                  "--r": pos.r,
                  "--c": pos.c,
                  "--pc": pBlockColumn(pos.c) ?? 0,
                  "--d": i,
                } as React.CSSProperties
              }
            >
              <span className="flex items-start justify-between gap-1">
                <span className="cell-num">{d.n}</span>
                <span className="cell-num">{d.weekday}</span>
              </span>
              <span className="flex items-center justify-between gap-1">
                <span className="cell-sym text-[1.6rem] md:text-[1.75rem]">{d.symbol}</span>
                <svg
                  className="tick shrink-0"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path d="M2 6.5 4.8 9 10 3" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <span className="cell-name">{d.short}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
