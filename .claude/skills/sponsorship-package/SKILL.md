---
name: sponsorship-package
description: Use for anything involving the sponsorship package (the sponsor PDF at public/sponsorship.pdf, built from public/sponsorship.html). Trigger on any question, edit request, rebuild or review of the sponsorship package, sponsor deck, sponsor tiers, perks table or sponsorship PDF, including "make this change to the sponsorship package", "update the tier prices", "rebuild the PDF", "where is the sponsorship package", or "why does the PDF look wrong". Explains the source-to-PDF workflow, the headless Chrome build on macOS, Windows and Linux, verification steps and editing rules.
---

# Sponsorship package

The sponsorship package that the `/sponsor` page links to is `public/sponsorship.pdf`. It is generated from `public/sponsorship.html`. The PDF is never edited directly: every change goes into the HTML, then the PDF is rebuilt and both are committed together.

## Files

| File | Role |
| --- | --- |
| `public/sponsorship.html` | The source. Every edit happens here. |
| `public/sponsorship.pdf` | The output. Regenerated from the HTML, never hand-edited. |
| `public/fonts/` | Archivo (variable, with the width axis) and Martian Mono, plus `fonts.css`. |
| `public/logo.png`, `public/comphighlight.png`, `public/randomcaf.png` | Images the HTML references with relative paths. |

The HTML is a self-contained page with inline CSS. Each `<section class="page">` is one fixed 8.5 × 11 in page with `overflow: hidden`. The footers carry hand-written page numbers (`01 / 07`, `02 / 07`, ...).

## Workflow for a change request

1. Edit `public/sponsorship.html`. Do not touch the PDF.
2. Build the PDF with headless Chrome (below).
3. Verify the result (below). Fix the HTML and rebuild until it is right.
4. Commit the HTML and the PDF together so they never drift apart.

For a question about the package (what it says, which tier includes what, where it lives), read `public/sponsorship.html` and answer from it; it is the source of truth.

## Requirements

Headless Chrome or Chromium. That is the only requirement. The layout relies on variable-font axes (`font-variation-settings`), CSS grid, `text-wrap: pretty` and `print-color-adjust`, and it was only verified in Chromium. Do not use wkhtmltopdf, WeasyPrint, Prince, LibreOffice or a hand-driven "print to PDF" dialog; they render the fonts and spacing differently.

Find an existing browser first:

- macOS: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` (Chromium, Brave and Edge also work; use their binary path).
- Windows: `C:\Program Files\Google\Chrome\Application\chrome.exe`, or Microsoft Edge at `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, which is Chromium and accepts the same flags.
- Linux: `google-chrome`, `google-chrome-stable`, `chromium` or `chromium-browser` on the PATH.

If none is installed, ask the user before installing anything, and prefer a tool outside this repository:

- macOS: `brew install --cask google-chrome`
- Windows: `winget install Google.Chrome`
- Debian or Ubuntu: `sudo apt install chromium` (or `chromium-browser`)
- Any OS with Node: `npx playwright install chromium` downloads a Chromium into Playwright's cache, outside the repo. Then build with a short script saved outside the repo:

  ```js
  // e.g. ~/build-pdf.js, run from public/: node ~/build-pdf.js
  const { chromium } = require("playwright");
  (async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("file://" + process.cwd() + "/sponsorship.html", { waitUntil: "networkidle" });
    await page.pdf({ path: "sponsorship.pdf", preferCSSPageSize: true, printBackground: true });
    await browser.close();
  })();
  ```

Never add packages, lockfile entries or npm scripts to this repository for the build. It is a one-off command, not part of the site's build.

## Build command

Run it from `public/`, and pass an absolute `file://` URL.

macOS and Linux:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$PWD/sponsorship.pdf" \
  "file://$PWD/sponsorship.html"
```

Windows (PowerShell):

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" `
  --headless=new --disable-gpu --no-pdf-header-footer `
  --virtual-time-budget=8000 `
  --print-to-pdf="$PWD\sponsorship.pdf" `
  "file:///$($PWD.Path -replace '\\','/')/sponsorship.html"
```

Flags:

- `--headless=new` runs without a window. The old `--headless` also works but is deprecated.
- `--no-pdf-header-footer` stops Chrome printing the URL and date in the margins.
- `--virtual-time-budget=8000` gives the page time to load the local fonts before printing. Without it you may get fallback fonts.
- `--print-to-pdf` is the output path. Chrome overwrites it silently.
- `--disable-gpu` avoids harmless GPU warnings on headless machines.

Page size and zero margins come from `@page { size: 8.5in 11in; margin: 0; }` in the HTML, so do not pass paper-size flags. Chrome prints "N bytes written to file" on success; macOS may also log `CVDisplayLink` errors, which are harmless.

## Verification

Do all of these before reporting the build as done.

1. Page count. It must equal the number in the footers. If a page overflows, Chrome does not add a page, it clips, so a wrong count means a page break slipped in. Check with `pdfinfo sponsorship.pdf` (poppler), `qpdf --show-npages`, or `python3 -c "import pypdf;print(len(pypdf.PdfReader('sponsorship.pdf').pages))"`.
2. Fonts. `pdffonts sponsorship.pdf` should list only Archivo and Martian Mono variants, all embedded. Helvetica, Arial or DejaVu means the fonts did not load: check that `fonts/` is next to the HTML and raise the virtual time budget.
3. Look at every page. Rasterize with `pdftoppm -r 100 -png sponsorship.pdf page` and view the images, or open the PDF in a viewer. Clipped content is invisible in the file but obvious when you look. Check the bottom of each page, long headings, and anything you changed.

Poppler (`pdfinfo`, `pdffonts`, `pdftoppm`) comes from `brew install poppler`, `apt install poppler-utils`, or `winget install oschwartz10612.Poppler`. If it is unavailable, opening the PDF and paging through it is an acceptable substitute for step 3.

## Editing rules

- Keep the design system. Colours, type and components are defined once at the top of the HTML and mirror the website's `DESIGN.md`: near-black ground, hairline cells, one green, Archivo for words, Martian Mono for data, square corners, no shadows or gradients. Do not introduce a second hue.
- Keep it short. The package is written so a sponsor can skim it: one idea per page, headlines, big numbers, few sentences. If a change adds a paragraph, cut something else.
- Pages are fixed. Content that does not fit is clipped, not flowed. Adjust sizes or move content to another page rather than letting it run off.
- Adding or removing a page means updating every footer's `0X / 07` numbering. Each `.page` after the first breaks automatically.
- Photos must be real event photos, framed by the existing `figure.photo` component. No stock imagery, and no photos of a single person on their own.
- Relative paths matter. The HTML must stay next to `fonts/` and the images, or the build produces fallback fonts and broken pictures.
- Opening `sponsorship.html` in a normal browser window shows the pages stacked and is fine for quick previews, but the PDF is the source of truth for sign-off.
