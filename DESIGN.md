---
name: WOSS Triple Olympiad
description: The Olympiad set as a classroom periodic table, near-black and brand green.
colors:
  ground: "#040605"
  ink-1: "#0a0f0c"
  ink-2: "#111a14"
  ink-3: "#18241c"
  line: "#1c2a21"
  line-2: "#2c3e33"
  fg: "#eaf3ed"
  fg-2: "#a9bbaf"
  fg-3: "#80958a"
  fg-faint: "#3a4d41"
  primary: "#3ec05e"
  primary-dark: "#2ea048"
  accent: "#5cd67e"
  on-primary: "#03140a"
  lit-wash: "#0f2e18"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 11vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "'tnum'"
  cell-symbol:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
rounded:
  none: "0px"
spacing:
  cell-gap: "3px"
  gutter: "clamp(1rem, 3.4vw, 3rem)"
  section: "9rem"
  section-mobile: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
  button-ghost:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
    padding: "12px 22px"
    height: "48px"
  cell:
    backgroundColor: "{colors.ink-1}"
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
    padding: "7px 8px 8px"
  cell-lit:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  day-cell-unpicked:
    backgroundColor: "{colors.lit-wash}"
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
  field:
    backgroundColor: "{colors.ink-1}"
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
    padding: "13px 15px"
---

# Design System: WOSS Triple Olympiad

## Overview

**Creative North Star: "The Wall Chart."** The site is the periodic table pinned to every science classroom wall, printed on black. Each fact is a cell with a corner number, a symbol and a name. The three competition days are elements 15, 16 and 17, because those are their December dates and those cells sit side by side in period 3. The crew are elements, the sponsor tiers are a series. Brand green is the light that marks a lit cell; everything else is hairline outline on near-black.

The system refuses the incumbent's neon glow, glass panels, gradient text and code-editor imagery. It is flat, square and printed, with real photographs from past competition days as the only pictures.

## Colors

One green, one ground. The colour scheme (black plus #3ec05e / #2ea048 / #5cd67e) is a pinned brand commitment.

- **Ground (#040605)**: page background, a black tinted a few degrees toward the brand green.
- **Ink 1-3 (#0a0f0c, #111a14, #18241c)**: cell bodies, form fields, raised panels. Tonal steps, never shadows.
- **Line (#1c2a21) / Line 2 (#2c3e33)**: 1px hairlines for cells, rules and field borders.
- **Foreground ramp**: fg #eaf3ed for text, fg-2 #a9bbaf for secondary copy, fg-3 #80958a for labels and corner numbers (passes 4.5:1 on ground), fg-faint #3a4d41 only for decorative, aria-hidden chart cells.
- **Primary (#3ec05e)**: a lit cell, the primary button, the closing band. Text on it is on-primary #03140a, never white.
- **Accent (#5cd67e)**: hover state of primary, links, focus rings, symbols in unlit day cells.
- **Primary dark (#2ea048)** and **lit wash (#0f2e18)**: intermediate steps used by the sponsor tier series and unpicked day cells.

Green intensity carries hierarchy: outline, then wash, then darker green border, then solid green. No other hue appears; error states use a muted red only inside the form alert.

## Typography

**Archivo** (variable, wdth 62-125) carries every word. Width is the hierarchy axis: display at wdth 125 weight 800, headings at wdth 118 weight 750, cell symbols at wdth 112, body at the default width, cell names condensed to wdth 68-80. **Martian Mono** is reserved for data: atomic numbers, dates, times, prices and counts, always tabular.

Display max is 4.5rem; the hero H1 sits on one line inside the chart's top gap at xl. Body measure is capped near 62ch.

## Layout

- Container: 84rem max, fluid gutter clamp(1rem, 3.4vw, 3rem).
- The hero is an 18-column CSS grid of periods 1-7 at 1280px and up, with the title set in the empty top-centre gap the way a printed chart places its title. From 1024 to 1279px it collapses to copy beside the 6-column p-block (groups 13-18, periods 1-3); below 1024px the p-block stacks under the copy. The three day cells keep their true positions in every view.
- Grids of cells use a 3px gap so the ground reads as the chart's grid lines.
- Sections are 6rem apart on mobile and 9rem on desktop; each section uses a different layout family (chart, photo plus facts, timetable rows, full-width photo, map plus facts, sticky-heading accordion, cell roster, solid green band).

## Elevation & Depth

Flat. No shadows, no blur, no glow. Depth is tonal (ground, ink 1, ink 2, wash) and the only layer above the page is the sticky header, separated by a 1px line.

## Shapes

Every corner is square (radius 0): cells, buttons, fields, the menu button, the video dialog. Icons are authored 1.6px-stroke SVGs (arrow, plus, check, menu, close).

## Components

- **Cell**: corner number (mono, fg-3), symbol (Archivo wdth 112), name (condensed). Variants: ghost (decorative, transparent, fg-faint), fact (label in the number slot, content below), lit (solid primary), day cell (toggle button, aria-pressed, wash when unpicked, lit when picked).
- **Buttons**: primary is a lit cell (primary fill, on-primary text, accent on hover). Ghost is a hairline outline turning green on hover. Pressed state moves 1px down. Arrows are SVG and nudge 3px on hover.
- **Fields**: ink-1 fill, line-2 border, accent border plus 1px accent ring on focus, labels above, fg-3 placeholders.
- **Choice cells** (grade, sections): checkbox or radio visually hidden but focusable; the whole cell lights primary when checked; focus ring via `:has(input:focus-visible)`.
- **FAQ**: hairline-separated rows; a square plus that rotates to a cross and fills primary when open; answers animate with grid-template-rows.
- **Sponsor tier series**: four columns stepping t1 (ink), t2 (#0a1a0f), t3 (#0f2e18 with primary-dark border), t4 (solid primary).

## Do's and Don'ts

- Do put every fact in a cell or a hairline row; let the chart be the structure.
- Do keep green for things that are lit, selected or actionable.
- Do use real event photographs at full strength, framed by a 3px ink border.
- Do keep the hero entrance (cells printing in atomic order, then the three days lighting) behind `prefers-reduced-motion: no-preference`, with every element visible by default.
- Don't add eyebrows or kickers above headings, glass, glow, gradient text, rounded corners or a second hue.
- Don't use Unicode glyphs as icons; use the authored SVG set.
- Don't invent element symbols for things that are not the days, the crew or the tiers.
