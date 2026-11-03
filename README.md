# Jury

A landing page for **Jury**, a fictional AI judging panel for hackathons. It is
built as a static site with hand-written HTML, CSS and vanilla JavaScript — no
framework, no build step, no dependencies.

## Run

From the project directory:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Any static file server works; opening
`index.html` directly also renders, though a server is recommended so relative
paths and fonts behave consistently.

## Structure

```
index.html          Page markup and copy
styles.css          Design system, layout and responsive rules
main.js             Reveals, parallax, counters, menu, form, clocks
assets/favicon.svg  Favicon
assets/img/         Local photography
CREDITS.md          Photography, type and icon credits
```

## Notes

- The enquiry form is a front-end demonstration: it validates input and shows a
  success state without sending anything.
- Motion respects `prefers-reduced-motion`. The page is keyboard navigable, with
  a skip link, focus trapping in the menu, and visible focus states.
- All imagery is local; the only network request is for Google Fonts (with
  system serif/sans fallbacks).
- Colour, type and spacing tokens live in `:root` at the top of `styles.css`.

## Credits

See [CREDITS.md](CREDITS.md). Copy and records on the page are fictional.
