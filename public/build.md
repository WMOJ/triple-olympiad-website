# Building the sponsorship PDF

The PDF is rendered from `sponsorship.html` with headless Google Chrome. Nothing else is needed.

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$PWD/sponsorship.pdf" \
  "file://$PWD/sponsorship.html"
```

Run it from the folder that contains the HTML. On Windows or Linux, substitute the path to the Chrome binary.

Notes:

- The HTML links its fonts and images with relative paths, so keep it next to `fonts/`, `logo.png`, `comphighlight.png` and `randomcaf.png`.
- Each `<section class="page">` is one fixed letter-size page and clips anything that overflows. After editing, open the resulting PDF and check that nothing is cut off at the bottom of a page.
- Opening the HTML in a normal browser window shows the pages stacked, which is good enough for quick previews.
