<div align="center">
  <a href="https://abhinav-prabhakar.github.io/jury/">
    <img src="docs/hero.jpg" alt="Jury — a warm editorial landing page with the headline: Every project deserves a verdict." width="100%">
  </a>
</div>

<br>

<h1 align="center">Jury</h1>

<p align="center">
  <em>Every project deserves a verdict.</em><br>
  An AI judging panel for hackathons — a static, editorial landing page<br>
  in warm paper, charcoal serif and cinematic plates.
</p>

<p align="center">
  <a href="https://abhinav-prabhakar.github.io/jury/"><img src="https://img.shields.io/badge/Live-Demo-A45C39?style=for-the-badge&logo=githubpages&logoColor=F2ECE1" alt="Live demo"></a>
  <img src="https://img.shields.io/badge/HTML5-22211D?style=for-the-badge&logo=html5&logoColor=F2ECE1" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-22211D?style=for-the-badge&logo=css3&logoColor=F2ECE1" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-22211D?style=for-the-badge&logo=javascript&logoColor=F2ECE1" alt="JavaScript">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Build-None-22211D?style=for-the-badge" alt="No build step">
  <img src="https://img.shields.io/badge/Dependencies-Zero-22211D?style=for-the-badge" alt="Zero dependencies">
  <img src="https://img.shields.io/badge/Responsive-Yes-A45C39?style=for-the-badge" alt="Responsive">
  <img src="https://img.shields.io/badge/License-MIT-22211D?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/github/stars/Abhinav-Prabhakar/jury?style=for-the-badge&color=A45C39&labelColor=22211D" alt="GitHub stars">
</p>

<br>

<p align="center">
  <a href="#the-verdict">The verdict</a> ·
  <a href="#the-method">The method</a> ·
  <a href="#the-panel">The panel</a> ·
  <a href="#selected-records">Selected records</a> ·
  <a href="#run-it-locally">Run it</a>
</p>

<br>

## The verdict

A landing page built to feel like a printed record rather than a SaaS template.
A specimen verdict card, a four-pass method rail and a panel of independent
specialist judges — each screen carries one idea, then gets out of the way.

<table>
<tr>
<td width="50%" valign="top">
  <img src="docs/verdict.jpg" alt="A specimen verdict card scoring Project Aurora 94.2 out of 100 with a cited reason." width="100%">
  <br>
  <sub><b>01 · The specimen verdict.</b><br>A score you can argue with — four dimensions, one dissent, one reason.</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/panel.jpg" alt="The panel section pairing a sunlit concrete stair with four judge rows." width="100%">
  <br>
  <sub><b>02 · The panel.</b><br>Engineering, Product, Design, Impact. Four lenses, independent scores.</sub>
</td>
</tr>
</table>

<br>

<table>
<tr>
<td width="50%" valign="top">
  <img src="docs/method.jpg" alt="A four-step method rail: ingest, convene, deliberate, resolve." width="100%">
  <br>
  <sub><b>03 · The method.</b><br>One pipeline, four passes. No skipped repositories.</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/quote.jpg" alt="A full-bleed foggy dune with the quote: a verdict is only as good as the doubt it has survived." width="100%">
  <br>
  <sub><b>04 · The archive.</b><br>Full-bleed atmosphere between the argument and the evidence.</sub>
</td>
</tr>
</table>

<br>

<table>
<tr>
<td width="50%" valign="top">
  <img src="docs/cases.jpg" alt="A five-image mosaic of panel records in muted sepia." width="100%">
  <br>
  <sub><b>05 · Selected records.</b><br>An asymmetric mosaic, graded to the same warm palette.</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/enquire.jpg" alt="The enquiry section with a serif headline and a quiet contact form." width="100%">
  <br>
  <sub><b>06 · The enquiry.</b><br>Six fields become three. A form that reads like correspondence.</sub>
</td>
</tr>
</table>

<br>

## The panel, in your pocket

<div align="center">
  <img src="docs/mobile.jpg" alt="The Jury landing page on a phone: oversized serif headline and a dark verdict card." width="320">
  &nbsp;&nbsp;&nbsp;
  <img src="docs/mobile-verdict.jpg" alt="The verdict card stacked on mobile with full-width score bars." width="320">
</div>

<p align="center"><sub>One layout, no breakpoints bolted on — type scales, plates crop, the card stacks.</sub></p>

<br>

<details>
<summary><b>See the whole page</b></summary>
<br>
<img src="docs/full.jpg" alt="The complete Jury landing page, top to bottom." width="100%">
</details>

<br>

## Under the paper

- **Palette** — warm sand <code>#F2ECE1</code>, ink <code>#22211D</code>, ember <code>#A45C39</code>.
- **Type** — Instrument Serif for display, Instrument Sans for text, system mono for record data.
- **Photography** — local plates, sepia-graded in CSS; no runtime image service.
- **Motion** — reveals, counters and parallax, all disabled under <code>prefers-reduced-motion</code>.
- **Access** — skip link, focus-visible states, trapped menu focus, Escape to close, labelled form errors.
- **Form** — front-end only: validates, then shows a success state. Nothing is sent.

## Run it locally

```sh
git clone https://github.com/Abhinav-Prabhakar/jury.git
cd jury
python3 -m http.server 8000
```

Open <http://localhost:8000>. No install, no build, no dependencies.

```text
index.html      Landing page
credits.html    Colophon
styles.css      Tokens, layout, responsive rules
main.js         Menu, reveals, parallax, counters, form, clocks
assets/img/     Local photography
docs/           README plates
```

<br>

<p align="center">
  <a href="https://abhinav-prabhakar.github.io/jury/credits.html">Colophon</a> ·
  <a href="https://github.com/Abhinav-Prabhakar/jury">Source</a> ·
  <a href="https://github.com/Abhinav-Prabhakar/jury/issues">Issues</a>
</p>

<p align="center"><sub>Jury is a fictional product. Names, verdicts and statistics are invented.</sub></p>
