# Product

<!-- impeccable:product-schema 1 -->

> Interview substitution: this record was written in an unattended subagent run with no question tool available. Every fact below is taken from the repository's own copy and the redesign brief; items marked *(inferred)* are reasoned from that evidence and have not been confirmed by the organisers.

## Platform

web

## Users

- **Students (primary):** high-school students in the Halton District School Board (HDSB), grades 9 to 12, deciding whether to sign up for an after-school STEM competition and which days to attend. Most arrive on a phone from a school announcement, Discord or a friend's link *(inferred)*.
- **Sponsors (secondary):** local businesses, alumni and families reading `/sponsor` to decide whether to fund a tier or donate prizes and merchandise.
- **Organisers (internal):** the student team that runs `/auth`, `/dashboard` and `/timer` on the day. Out of scope for this redesign.

## Product Purpose

The WOSS Triple Olympiad is a free, three-day, after-school STEM competition hosted at White Oaks Secondary School (South Campus), Oakville, from December 15 to 17, 2026. Day 1 is Mathematics, Day 2 is Computer Science, Day 3 is Physics plus a Practical Hackathon. Each day runs 3:00 PM to 5:30 PM. There are solo and team rounds, food between sessions, and prizes for the top three teams in each category. Success is students registering through `/register` and sponsors emailing wosstriolympiad@gmail.com.

## Positioning

A student-run olympiad that puts three separate disciplines on three consecutive days in one school cafeteria, free, for one school board. It is local and hands-on (pizza, lanyards, a cafeteria full of teams), not an international prestige contest.

## Operating Context

- Registration: `/register` posts `fullName, email, grade, sections[], allergies, questions` to `/api/register`; a tutorial video (`/Registration tutorial.mp4`) explains the form.
- Sponsorship: four tiers (Vector $100, Matrix $250, Tensor $500, Singularity $1,500) plus in-kind prizes and merchandise; all handled by email. A sponsorship PDF exists at `/sponsorship.pdf`.
- Day-of tooling (`/timer`, `/dashboard`, `/auth`) lives on the same site.

## Capabilities and Constraints

- Next.js 16 / React 19 / Tailwind v4 with styled-components available.
- Brand colour scheme is pinned: black ground with green brand colour (#3ec05e primary, #2ea048 dark, #5cd67e accent). No new brand hues.
- Address discrepancy in source: the venue copy says "1330 McCraney St. E, Oakville" while the map, footer and structured data say "1330 Montclair Dr, Oakville, ON L6H 1Z5". Undecided; both kept as written until organisers confirm.

## Brand Commitments

- Name: WOSS Triple Olympiad (also "Triolympiad" in some copy).
- Logo: green hexagonal circuit-cube mark (`public/logo.webp`, `public/logo.png`).
- Black and green colour scheme (pinned by the brief).
- Voice: friendly, student-written, direct ("lots of yummy pizza").

## Evidence on Hand

- Real photographs from past competition days: `public/comphighlight.png` (cafeteria full of teams), `public/randomcaf.png` (competitors working at cafeteria tables), `public/yeet.jpg` (participant with lanyard).
- Discipline glyphs: `public/disciplines.png` (sigma, atom, binary).
- Team roster in `src/components/TeamGrid.tsx` (names, no photos).
- Facts quoted on `/sponsor`: 100+ interested participants, grades 9 to 12, "largest high school in Oakville".
- No confirmed sponsors, testimonials or past-results data exist. Do not fabricate them.

## Product Principles

1. Dates, place and "it's free" must be findable in seconds; everything else supports them. *(inferred)*
2. Show the real event (the cafeteria, the teams) rather than generic tech imagery. *(inferred)*
3. One action per audience: students register, sponsors email.
4. Never invent sponsors, numbers or claims the organisers have not made.

## Accessibility & Inclusion

Audience includes any HDSB student; keep WCAG AA contrast, keyboard access, and reduced-motion support. *(inferred)*
