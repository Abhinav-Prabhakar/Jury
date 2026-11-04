<div align="center">
  <a href="https://abhinav-prabhakar.github.io/Jury/">
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
  <a href="https://abhinav-prabhakar.github.io/Jury/"><img src="https://img.shields.io/badge/Live-Demo-A45C39?style=for-the-badge&logo=githubpages&logoColor=F2ECE1" alt="Live demo"></a>
  <img src="https://img.shields.io/badge/HTML5-22211D?style=for-the-badge&logo=html5&logoColor=F2ECE1" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-22211D?style=for-the-badge&logo=css3&logoColor=F2ECE1" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-22211D?style=for-the-badge&logo=javascript&logoColor=F2ECE1" alt="JavaScript">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Build-None-22211D?style=for-the-badge" alt="No build step">
  <img src="https://img.shields.io/badge/Dependencies-Vendored-22211D?style=for-the-badge" alt="Vendored dependencies">
  <img src="https://img.shields.io/badge/Responsive-Yes-A45C39?style=for-the-badge" alt="Responsive">
  <img src="https://img.shields.io/badge/License-MIT-22211D?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/github/stars/Abhinav-Prabhakar/Jury?style=for-the-badge&color=A45C39&labelColor=22211D" alt="GitHub stars">
</p>

<br>

<p align="center">
  <a href="#the-verdict">The verdict</a> ·
  <a href="#the-method">The method</a> ·
  <a href="#selected-records">Selected records</a> ·
  <a href="#on-mobile">On mobile</a> ·
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
  <img src="docs/oversight.jpg" alt="A dark green oversight section with the headline: AI prepares the room. People make the call." width="100%">
  <br>
  <sub><b>02 · The oversight.</b><br>AI prepares the room. People make the call. Decision rights stay human.</sub>
</td>
</tr>
</table>

<br>

## The method

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

## Selected records

<table>
<tr>
<td width="50%" valign="top">
  <img src="docs/cases.jpg" alt="A five-image mosaic of panel records in muted sepia." width="100%">
  <br>
  <sub><b>05 · Selected records.</b><br>An asymmetric mosaic, graded to the same warm palette.</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/questions.jpg" alt="A questions section with the headline: Before you ask the room, and a six-row accordion." width="100%">
  <br>
  <sub><b>06 · The questions.</b><br>Before you ask the room. The questions every organiser should ask.</sub>
</td>
</tr>
</table>

<br>

## The close

<div align="center">
  <img src="docs/enquire.jpg" alt="A dark green closing section with the headline: Give good work a fair hearing, and a quiet contact form." width="100%">
</div>

<p align="center"><sub><b>07 · The close.</b> Give good work a fair hearing. A form that reads like correspondence.</sub></p>

<br>

## On mobile

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

- **Palette** — warm sand <code>#F2ECE1</code>, ink <code>#22211D</code>, ember <code>#A45C39</code>, moss <code>#2B312B</code> and sage <code>#A7B69D</code>.
- **Type** — Instrument Serif for display, Instrument Sans for text, system mono for record data.
- **Photography** — local plates, sepia-graded in CSS; no runtime image service.
- **Motion** — Lenis smooth scroll (vendored), reveals, counters and parallax, all disabled under <code>prefers-reduced-motion</code>.
- **Access** — skip link, focus-visible states, trapped menu focus, Escape to close, labelled form errors.
- **Form** — front-end only: validates, then shows a success state. Nothing is sent.

## Run it locally

```sh
git clone https://github.com/Abhinav-Prabhakar/Jury.git
cd Jury
python3 -m http.server 8000
```

Open <http://localhost:8000>. No install, no build, no package manager.

```text
index.html      Landing page
credits.html    Colophon
styles.css      Tokens, layout, responsive rules
main.js         Menu, Lenis, reveals, parallax, accordion, form, clocks
design.md       Design system, components, motion and copy rules
assets/img/     Local photography
assets/js/      Vendored Lenis
docs/           README plates
```

<br>

<p align="center">
  <a href="https://abhinav-prabhakar.github.io/Jury/credits.html">Colophon</a> ·
  <a href="https://github.com/Abhinav-Prabhakar/Jury">Source</a> ·
  <a href="https://github.com/Abhinav-Prabhakar/Jury/issues">Issues</a>
</p>

<p align="center"><sub>Jury is a fictional product. Names, verdicts and statistics are invented.</sub></p>
