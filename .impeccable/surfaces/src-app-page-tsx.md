---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/sponsor/page.tsx","src/app/register/page.tsx"]
---

# Surface brief: public site (home, /sponsor, /register)

Scope: public marketing surface. Visitor mode: Persuade. Students must register; sponsors must email. Proof: real cafeteria photos, real dates, the free price. Constraints: pinned black + green brand (#3ec05e / #2ea048 / #5cd67e), all facts kept, /api/register payload unchanged.

Chosen direction: "Table of Elements" (degraded roll, no challengers; assigned candidate 7 of 7; the model's own top pick was the contest-paper booklet).

## Direction contract

THESIS: The Olympiad is set as the classroom periodic table. Days are elements 15, 16, 17 (the December dates sit exactly at P, S, Cl in period 3), facts are cells, the crew are elements. Refuses the neon-glow code-editor hero and glass cards.

OWN-WORLD: Near-black green-tinted ground, 1px hairline cell grid, flat square cells (radius 0), corner numbers in Martian Mono, symbols and headlines in Archivo Expanded heavy, body in Archivo. Brand green is the "lit element" fill with near-black text; everything else is outline. No glow, no blur, no gradient text.

STORY: See the table, find the three lit days, understand: three free afternoons, Dec 15 to 17, at WOSS. Pick your elements, register. Sponsors read tiers as an escalating series and email.

FIRST VIEWPORT: Nav strip on top. Full 18-column table (periods 1-7) fills the viewport width. H1 "Triple Olympiad" sits on one line in the chart's top gap (cols 3-12), expanded, ~4.4rem to fit the gap, with a short line, Register (lit cell button) and Sponsor. A legend in row 1 (cols 13-17) explains number = December date. 15 Ma, 16 Cs, 17 Ph are lit toggle cells at their real positions; the Register CTA reflects picked days. Below 1280px the view collapses to the p-block corner.

FORM: Periodic table / scientific wall chart, position 7 of 7, seed a2b52f11. Signature interaction: toggling element cells to pick days, carried into the register form.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
