# Notes for agents

## Sponsorship package PDF

The sponsorship package that the `/sponsor` page links to is `public/sponsorship.pdf`. It is generated from `public/sponsorship.html`; the PDF is never edited directly.

If the user asks you to build, rebuild, update or change the sponsorship package, read `public/build.md` first and follow it. In short: edit the HTML, render it to PDF with headless Chrome, verify the page count and fonts, look at every page, then commit the HTML and PDF together.
