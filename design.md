# Jury — Design System

**The visual, verbal and interaction rules behind Jury.**
Read this before adding a page, section or component. It is the single source of
truth for design decisions; when code and this document disagree, treat the
document as the intent and bring the code back in line (or update this document
deliberately).

- **Product:** Jury, an AI judging panel for hackathons. Fictional demonstration product.
- **Surface:** static editorial marketing site. `index.html` (landing page), `credits.html` (colophon).
- **Stack:** hand-written HTML, CSS and vanilla JS. No framework, no build step, no dependencies.
- **Status:** November 2026.
- **Reference implementation:** `styles.css` (tokens and components), `main.js` (behaviour),
  `index.html` (composition), `credits.html` (secondary page).

---

## Contents

1. [Brand foundations](#1-brand-foundations)
2. [Design tokens](#2-design-tokens)
3. [Layout and page architecture](#3-layout-and-page-architecture)
4. [Components](#4-components)
5. [Imagery and art direction](#5-imagery-and-art-direction)
6. [Motion and interaction](#6-motion-and-interaction)
7. [Accessibility](#7-accessibility)
8. [Voice, copy and content patterns](#8-voice-copy-and-content-patterns)
9. [Implementation conventions](#9-implementation-conventions)
10. [Recipes and review checklist](#10-recipes-and-review-checklist)
11. [Appendix: token reference](#11-appendix-token-reference)

---

## 1. Brand foundations

### 1.1 The idea

Jury is a **decision studio**, not a dashboard. The site should feel like a printed
record of a deliberation: warm paper, charcoal ink, photographed plates, ruled
lines, catalogue numbers and a verdict you can argue with.

The core editorial device is the **verdict**: a score is never shown without a
reason, and a claim is never shown without evidence. Every page should carry the
same posture — calm, precise, a little severe, never loud.

### 1.2 Design principles

1. **One idea per screen.** Each section makes a single argument, then gets out
   of the way. Do not stack two competing messages in one viewport.
2. **Evidence over applause.** Prefer concrete numbers, named panels, quoted
   reasons and documentary labels over marketing adjectives.
3. **Paper, not glass.** Surfaces are warm, matte and printed. Avoid glossy
   gradients, neon glows, frosted glass as decoration, and pure white.
4. **Serif speaks, sans works.** Instrument Serif carries emotion and hierarchy.
   Instrument Sans carries interface and body copy. Mono carries record data.
5. **Rules make the grid visible.** Thin dividers, section indices and plate
   captions are structural, not ornamental. They are how the page reads as a record.
6. **Restraint in motion.** Slow, eased, one-time entrances. Nothing bounces,
   nothing loops for attention, everything stops under reduced motion.
7. **Leave air.** Generous section padding and wide gutters are part of the brand.
   Density is earned by structure, not by shrinking whitespace.
8. **Accessible by default.** Every interactive thing is keyboard reachable,
   labelled, focus-visible and usable at 200% zoom.

### 1.3 What Jury is not

- Not a SaaS gradient landing page.
- Not a dark-mode-first product UI.
- Not a photography portfolio; images are atmospheric evidence, not the subject.
- Not playful or meme-literate. No emoji, no exclamation marks, no "✨".
- Not maximalist: no more than one accent colour moment per viewport.

---

## 2. Design tokens

All tokens live in `:root` in `styles.css`. Use the custom property, never the raw
hex, in new work.

### 2.1 Colour

#### Core palette

| Token | Hex | Role | Typical use |
| --- | --- | --- | --- |
| `--paper` | `#F2ECE1` | Base surface | Page background, light text on dark |
| `--paper-soft` | `#F4EFE6` | Raised paper | Subtle light panels |
| `--paper-deep` | `#EBE2D3` | Recessed paper | Image placeholders, muted blocks |
| `--paper-deeper` | `#E5DBC9` | Deepest paper | Case backgrounds, form surround |
| `--ink` | `#22211D` | Primary ink | Headings, buttons, strong rules |
| `--ink-soft` | `#4B4942` | Body ink | Paragraphs, nav links |
| `--muted` | `#716C60` | Secondary ink | Captions, labels, supporting copy |
| `--faint` | `#948D7F` | Tertiary ink | Non-essential metadata only |
| `--line` | `rgba(34,33,29,.17)` | Structural rule | Section borders, field underlines |
| `--line-soft` | `rgba(34,33,29,.09)` | Quiet rule | Row dividers inside a section |
| `--ember` | `#A45C39` | Accent | Status dots, asterisks, live markers |
| `--dark` | `#191814` | Inverse surface | Marquee, verdict card, quote, footer |
| `--moss` | `#2B312B` | Green-black surface | Oversight and closing bands |
| `--moss-deep` | `#222722` | Green-black recess | Gradient foot of the moss bands |
| `--sage` | `#A7B69D` | Inverse accent | Check marks, status dot, chapter marker on moss |
| `--cream` | `#F5EFE4` | Inverse ink | Text and marks on dark |
| `--line-light` | `rgba(245,239,228,.16)` | Inverse rule | Dividers inside dark surfaces |

#### Supporting values

These are used in gradients or states and should be promoted to tokens before reuse.

| Value | Where |
| --- | --- |
| `#0D0C0A` | Primary button hover |
| `#8B3D27` | Form error text |
| `#F4EFE6 → #F1EADE → #EFE7D9` | Body paper gradient (vertical) |
| `rgba(255,252,246,.3)` | Hover wash on process/method rows |
| `rgba(250,246,238,.52)` | Form panel fill on paper |
| `rgba(245,239,228,.04)` | Form panel fill on moss |
| `rgba(167,182,157,.12–.13)` | Sage radial wash on the moss bands |
| `rgba(20,19,16,…)` | Image scrims (0.06–0.82 by stop) |
| `rgba(20,24,20,…)` | Oversight image scrim |

#### Contrast (measured against `--paper`)

| Pair | Ratio | Guidance |
| --- | --- | --- |
| ink / paper | 13.70:1 | AAA, use for all display and primary text |
| ink-soft / paper | 7.66:1 | AAA, default body text |
| muted / paper | 4.45:1 | AA normal; fine for labels and secondary copy |
| muted / paper-deep | 4.07:1 | Borderline; avoid long copy on deep paper |
| ember / paper | 4.28:1 | Accent only, not body text |
| faint / paper | 2.80:1 | Non-essential metadata only; never instructions |
| cream / dark | 15.52:1 | AAA inverse |
| cream / moss | 11.64:1 | AAA inverse; display and primary copy |
| sage / moss | 6.23:1 | AA normal; icons and small marks |
| cream 62% / moss | 5.51:1 | AA normal; section intros |
| cream 56% / moss | 4.77:1 | AA normal; smallest body copy on moss |

#### Colour rules

- **Never** use pure `#000` or `#FFF`. The darkest ink is `--dark`; the lightest
  paper is `--paper-soft` / `--cream`.
- **Ember is punctuation, not paint.** It appears as a 5px status dot, a 14px
  marquee asterisk or a chapter dot. Do not fill buttons, headings or large
  blocks with it.
- **Dark bands are chapter breaks.** Use `--dark` for full-bleed moments
  (marquee, quote, footer, verdict card) and `--moss` for the two green-black
  argument bands (Oversight and the closing call). Both are inversions, not a
  dark theme; the page still opens and reads as warm paper.
- **Sage is the inverse accent.** On moss, sage replaces ember for check marks,
  the availability dot and the chapter marker. It never appears on paper.
- **Cream carries hierarchy on moss.** Primary copy is `--cream`; supporting
  copy is cream at 56–68%; never below 56% for anything a reader must act on.
- **Rules carry hierarchy.** Prefer a 1px `--line` divider over a shadow or a
  boxed card.
- **No gradient text.** Gradients belong to paper backgrounds and photographic
  scrims only.

### 2.2 Typography

#### Families

| Token | Stack | Purpose |
| --- | --- | --- |
| `--serif` | Instrument Serif, Iowan Old Style, Baskerville, Times New Roman, serif | Display, editorial headings, pull quotes, figures, scores |
| `--sans` | Instrument Sans, Helvetica Neue, Helvetica, Arial, sans-serif | Body, UI, labels, buttons, captions |
| `--mono` | SFMono-Regular, SF Mono, ui-monospace, Roboto Mono, Menlo, monospace | Coordinates, IDs, timestamps, indices, record metadata |

Loaded from Google Fonts with `display=swap`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

#### Base typography

| Property | Value |
| --- | --- |
| Body size | `16px` |
| Body weight | `400` |
| Body line-height | `1.6` |
| Body colour | `--ink-soft` |
| Heading weight | `400` (never bold) |
| Rendering | antialiased, `font-synthesis: none`, `text-rendering: optimizeLegibility` |
| Selection | ink background, paper text |

#### Role scale

Sizes use `clamp()` so the page scales without discrete jumps. These are the
canonical display sizes; do not invent a new size for a one-off.

| Role / class | Family | Size | Line-height | Tracking | Notes |
| --- | --- | --- | --- | --- | --- |
| Hero title `.hero-title` | serif | `clamp(55px, 12.35vw, 184px)` | `0.84` | `-0.028em` | Two masked lines, one italic word |
| Page title `.credits-title` | serif | `clamp(64px, 10.5vw, 152px)` | `0.86` | `-0.035em` | Italic period set in a `<span>` |
| Closing title `.cta-title` | serif | `clamp(58px, 9.4vw, 148px)` | `0.88` | `-0.035em` | Max `14ch`, cream on moss |
| Quote `.quote-body blockquote` | serif | `clamp(38px, 5.4vw, 82px)` | `1.02` | `-0.024em` | Max `21ch`, light on image |
| Wager title `.wager-title` | serif | `clamp(46px, 6vw, 92px)` | `0.97` | `-0.028em` | Max `14ch` |
| Statement `.statement` | serif | `clamp(38px, 5vw, 76px)` | `1.01` | `-0.026em` | Max `22ch` |
| Section H2 `.h2` | serif | `clamp(40px, 4.7vw, 68px)` | `1.01` | `-0.022em` | Max `15ch`, `text-wrap: balance` |
| Oversight quote `.oversight-quote blockquote` | serif | `clamp(28px, 2.9vw, 42px)` | `1.03` | `-0.02em` | Max `17ch`, cream on image |
| Oversight item `.oversight-item h3` | serif | `clamp(26px, 2.4vw, 34px)` | `1` | `-0.02em` | |
| FAQ question `.faq-question-text` | serif | `clamp(24px, 2.35vw, 33px)` | `1.08` | `-0.018em` | |
| Process headline `.process-step h3` | serif | `clamp(28px, 2.5vw, 36px)` | `1` | `-0.02em` | |
| Judge name `.judge h3` | serif | `clamp(26px, 2.4vw, 34px)` | `1` | `-0.02em` | |
| Case title `.case-caption h3` | serif | `clamp(22px, 2.2vw, 32px)` | `1.03` | `-0.02em` | Max `16ch` |
| Verdict project `.verdict-project` | serif | `clamp(25px, 2.2vw, 30px)` | `1` | `-0.02em` | |
| Verdict score `.verdict-score` | serif | `clamp(58px, 5.4vw, 78px)` | `0.8` | `-0.035em` | Tabular numerals |
| Stat number `.stat-num` | serif | `clamp(42px, 4.3vw, 62px)` | `0.95` | `-0.02em` | Tabular numerals |
| Process number `.process-num` | serif italic | `clamp(44px, 4vw, 60px)` | `0.9` | `-0.03em` | Tabular numerals |
| Section intro `.section-intro` | sans | `15px` | `1.68` | `0` | Max `42ch`, muted |
| Body / lede | sans | `15–18px` | `1.62–1.72` | `0` | Max `44–48ch` |
| Micro `.micro` | sans | `9.5px` | `1.5` | `0.16em` | Uppercase, muted |
| Eyebrow `.eyebrow` | sans | `10px` | `1.5` | `0.18em` | Uppercase, ink-soft |
| Label `.label-text` | sans | `10px` | `1.4` | `0.17em` | Uppercase, ink |
| Label index `.label-index` | serif italic | `16px` | `1` | `0` | Muted |
| Nav link | sans | `10px` | `1.4` | `0.15em` | Uppercase |
| Text link `.text-link` | sans | `11px` | `1.4` | `0.12em` | Uppercase |
| Button `.btn` | sans | `11.5px` | `1.2` | `0.075em` | Sentence case |
| Record meta | mono | `8–9.5px` | `1.4–1.5` | `0.04–0.14em` | Uppercase where labels |

#### Typography rules

- **One italic emphasis per heading.** The italic word is the argument:
  "Most hackathons judge the *demo.* We judge the *work.*" Never italicise a
  whole heading, never use bold.
- **Serif is never tracked out.** Keep display tracking negative (`-0.02em` to
  `-0.045em`). All-caps tracking belongs to sans and mono only.
- **No faux weights.** Instrument Serif has one weight; do not bold it.
- **Sentence case** for headings and buttons. All-caps is reserved for labels,
  micro copy, nav and record metadata.
- **Line length:** body copy `42–52ch`; display headings `8–22ch` depending on
  scale. If a line runs past ~52ch, add a `max-width`.
- **Numerals:** use tabular figures for scores, stats and clocks. Use real
  typographic quotes (`“ ” ‘ ’`) and apostrophes (`’`), never straight quotes in copy.
- **Minimum size:** `8px` for non-essential record metadata, `9px` for labels,
  `13.5px` for readable body. Never set essential copy below `13px`.
- **Wrapping:** use `text-wrap: balance` on display headings; avoid manual `<br>`
  except where the hero's two-line composition is intentional.

### 2.3 Spacing, grid and layout tokens

| Token / value | Definition | Notes |
| --- | --- | --- |
| `--gutter` | `clamp(22px, 4.2vw, 76px)`; `20px` at ≤520px | Horizontal page padding |
| `--section` | `clamp(84px, 9vw, 136px)`; `clamp(80px, 11vw, 120px)` at ≤900 | Section block padding |
| `.shell` | `max-width: 1560px`; centred; `padding-inline: var(--gutter)` | Every content band lives in a shell |
| `html scroll-padding-top` | `104px`; `86px` at ≤760 | Offset for fixed header |
| Header padding | `22px`; `13px` scrolled; `16px`/`11px` at ≤900 | |
| Section header gap | `clamp(28px, 4.5vw, 72px)` | |
| Section head bottom margin | `clamp(48px, 6vw, 76px)` | |
| Section top rule padding | `22px` | `.section-top` |
| Hero top padding | `clamp(124px, 16vh, 176px)` | Accounts for fixed header |
| Card padding | `clamp(24px, 2.6vw, 34px)` | Verdict card |
| Button height | `50px` (`40px` small, `58px` form) | |

Use a **4px rhythm** for small adjustments (6, 8, 10, 12, 14, 18, 22, 28, 32…).
Avoid arbitrary values that break the rhythm unless matching a photographic edge.

### 2.4 Borders, radii and shadows

| Token / pattern | Value | Use |
| --- | --- | --- |
| Hairline | `1px solid var(--line)` | Section and structural rules |
| Quiet hairline | `1px solid var(--line-soft)` | Dividers between rows |
| Radius — pill | `100px` | Buttons, toggle, back-to-top, seals |
| Radius — card | `3px` | Verdict card, image frames |
| Radius — form button | `2px` | Deliberate contrast with pill buttons |
| Radius — media | `0` | Photography is always square-cornered |
| Shadow | `0 28px 70px -44px rgba(25,24,20,.55)` | Verdict card only |

**Rule:** the system is flat. If a new surface needs separation, use a rule,
paper tone or spacing before reaching for a shadow. The verdict card is the
single permitted elevation.

### 2.5 Motion tokens

| Token | Value | Use |
| --- | --- | --- |
| `--ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default; decelerating, soft landing |
| `--ease-io` | `cubic-bezier(0.76, 0, 0.24, 1)` | Mask reveals, menu clip, marquee-adjacent motion |
| Reveal stagger | `calc(var(--d, 0) * 110ms)` | Set `style="--d:1"` etc. |
| Reveal | `opacity 1.2s`, `translateY 1.3s`, `blur 1.2s` | `[data-reveal]` |
| Hover | `0.3–0.65s` | Links, buttons, cards |
| Hero line | `1.45s` (second line +`0.1s`) | Masked line entrance |
| Menu overlay | `0.85s var(--ease-io)` | `clip-path` top-down |
| Marquee | `46s linear infinite` | Pauses on hover |
| Counter | `1500ms`, `1 - 2^(-10t)` | Stats |
| Smooth scroll | Lenis `duration: 1.1`, `wheelMultiplier: .9` | Wheel only; native on touch |
| Anchor scroll | Lenis `duration: 1.25` | Honours `scroll-padding-top` |

### 2.6 Z-index scale

| Layer | z-index |
| --- | --- |
| Chapter indicator | `70` |
| Fixed header | `90` |
| Mobile menu overlay | `110` |
| Grain overlay | `200` |
| Skip link | `300` |

Do not add a new layer without updating this table. Grain sits above content by
design and must always remain `pointer-events: none`.

---

## 3. Layout and page architecture

### 3.1 The shell and section rhythm

Content bands are wrapped in `.shell`. Full-bleed plates, the marquee, the quote
band and the footer deliberately break out of it. Sections use `.section` for
vertical padding and, where the argument needs a heading, the pattern:

```html
<section class="section" id="method" data-chapter="02 / Method">
  <div class="shell">
    <div class="section-top">
      <div class="section-label">
        <span class="label-index">02</span>
        <span class="label-text">Method</span>
      </div>
      <p class="micro">From repo to verdict</p>
    </div>

    <div class="section-head">
      <h2 class="h2" data-reveal>One pipeline.<br><em>Four passes.</em></h2>
      <p class="section-intro" data-reveal style="--d:1">No skipped repos. No vibes.</p>
    </div>

    <!-- section body -->
  </div>
</section>
```

The fixed anatomy is:

1. **Section top** — a hairline rule, numeric index + label on the left, a short
   micro note on the right. This is the catalogue header.
2. **Section head** — display H2 (1.15fr) and intro (0.85fr), bottom-aligned on
   desktop, stacked below 900px.
3. **Section body** — one grid or one full-bleed figure. Never both competing.
4. **Section foot** — optional `.work-foot` with a single text link.

Section labels are numbered in reading order (`01`–`06`). The hero is `00`.
Keep numbering in sync with `data-chapter` labels. Numbering is continuous across
the page, including the closing call, so the menu and footer can use the same
numbers as the section tops.

### 3.2 Landing page outline

| # | Chapter label | Section / class | Purpose |
| --- | --- | --- | --- |
| 00 | `00 / Threshold` | `.hero#top` | Promise + first plate |
| — | — | `.panel-marquee` | Social proof marquee (dark break) |
| 01 | `01 / Position` | `.section.wager#studio` | The argument + specimen verdict |
| 02 | `02 / Method` | `.section.process#method` | Four-pass pipeline |
| 03 | `03 / Oversight` | `.section.oversight#oversight` | Human decision rights on moss |
| — | `— / Archive` | `.quote-band` | Full-bleed atmospheric quote |
| 04 | `04 / Panels` | `.section.cases#work` | Selected records mosaic |
| 05 | `05 / Questions` | `.section.faq#questions` | Six-question accordion |
| 06 | `06 / Enquire` | `.section.cta#enquire` | Closing call + form on moss |
| — | — | `.site-footer` | Dark footer + giant wordmark |

Chapter labels are also displayed by the fixed vertical `.chapter` indicator,
updated via IntersectionObserver.

### 3.3 Grid patterns in use

| Pattern | Definition | Used by |
| --- | --- | --- |
| Editorial split | `1.15fr 0.85fr`, `align-items: end` | `.section-head` |
| Argument split | `1.12fr minmax(340px,.88fr)`, centred | `.wager-grid` |
| Oversight split | `1.06fr .94fr`, stretch | `.oversight-grid` |
| Questions split | `.72fr 1.28fr`, start-aligned | `.faq-grid` |
| Closing split | `.9fr 1.1fr`, start-aligned | `.cta-body` |
| Four-up rail | `repeat(4, 1fr)`, left border per item | `.process-grid` |
| Three-up stat band | `repeat(3, 1fr)`, top rule | `.stat-band` |
| Twelve-column mosaic | `repeat(12, 1fr)`, spans 7/5/4/4/4 | `.case-grid` |
| Footer | `1.4fr .66fr .88fr .9fr` | `.footer-top` |
| Simple pair | `repeat(2, 1fr)` | `.credits-grid`, `.manifesto-cols` |

### 3.4 Responsive breakpoints

Breakpoints are content-led, not device-led. Change a layout when it stops
reading well, not because a device exists.

| Width | Changes |
| --- | --- |
| `≤1240px` | Legacy section grid narrows; footer becomes 3 columns |
| `≤1120px` | Wager and oversight gaps tighten |
| `≤1024px` | Nav tightens; preview rail hides; chapter indicator hides |
| `≤980px` | Wager, oversight, questions and closing split stack; oversight plate caps at `560px`; process becomes 2×2; mosaic becomes 12 + 6/6 |
| `≤900px` | Primary nav hides, menu toggle appears; header condenses; hero foot stacks; stats 2-up; footer 2-up; section rhythm tightens |
| `≤760px` | Hero title reduces; hero plate `52vh`; oversight plate `380–520px`; mosaic 1-up; stat band 1-up; footer 1-up; process 2-up retained |
| `≤560px` | Process 1-up; verdict bars compress |
| `≤520px` | Gutter `20px`; hero CTA full width; section padding `78px`; stat band becomes horizontal rows; footer legal stacks |

**Mobile rules**

- Type scales down through `clamp()`; never introduce a separate mobile type system.
- Photography changes crop via `object-position` and container height, not aspect
  ratio hacks. Tall plates become `5/6` or `52vh`.
- Any hover-only affordance must have a visible resting state on touch. The case
  arrow is always visible below 760px; the work preview rail is hidden entirely.
- Interactive controls aim for at least `40×40px` of tappable area; icon controls
  (menu, back-to-top) are `38–42px`.

---

## 4. Components

Each component below is production-ready in `styles.css`. Reuse the class and
markup before writing a variant.

### 4.1 Brand lockup

**Anatomy:** circular seal with serif `J` + wordmark "Jury" in Instrument Serif.

```html
<a class="brand" href="#top" aria-label="Jury — home">
  <span class="seal" aria-hidden="true">J</span>
  <span class="brand-word">Jury</span>
</a>
```

| Property | Value |
| --- | --- |
| Seal | `30×30px`, 1px currentColor circle, serif `16px`, optical padding-bottom `2px` |
| Wordmark | serif `27px`, tracking `-0.025em`, line-height `1` |
| Gap | `11px` |
| Inverse | Set seal and wordmark to `--cream` (the footer does this via `.site-footer .seal, .site-footer .brand-word`; the markup also carries `.brand--light`) |

Do not replace the seal with an image, add a tagline next to the wordmark, or
recolour it ember.

### 4.2 Icons

Icons are an inline SVG sprite at the top of the document. Hand-drawn, 1.1px
stroke, round caps and joins, 16×16 viewBox.

| ID | Shape | Use |
| --- | --- | --- |
| `#i-arrow` | Up-right arrow | CTAs, text links, back links |
| `#i-down` | Down arrow | Back-to-top (rotated 180°) |
| `#i-plus` | Plus | Reserved |
| `#i-asterisk` | Six-spoke asterisk, 24×24 | Marquee separators |

Rules:
- Default rendered size `14px`; text-link `12px`; button small `11px`; case open `13px`.
- Always `aria-hidden="true"` (or inside an `aria-hidden` wrapper) when decorative.
- Never use an icon without a text label as the sole affordance, except the
  back-to-top button, which has `aria-label`.
- No icon library, no filled icons, no coloured icons. Icons inherit `currentColor`.

### 4.3 Buttons

#### Primary

```html
<a class="btn" href="#enquire">
  <span>Judge your hackathon</span>
  <span class="btn-icon" aria-hidden="true"><svg class="icon"><use href="#i-arrow"/></svg></span>
</a>
```

| Property | Value |
| --- | --- |
| Shape | Pill, `border-radius: 100px` |
| Height | `min-height: 50px` |
| Padding | `7px 8px 7px 22px` |
| Gap | `16px` |
| Fill | `--ink`, text `--paper` |
| Type | sans `11.5px` / `500` / `0.075em` |
| Icon well | `34px` circle, `rgba(245,239,228,.28)` border |
| Hover | fill `#0D0C0A`, lift `-1px`; icon well inverts to paper/ink; arrow moves `1px,-1px` |
| Focus | `1.5px currentColor` outline at `4px` offset |

#### Small

`.btn--small` — `40px` high, `28px` icon, `10px` uppercase type, `0.1em`
tracking. Header-only by default.

#### Form

`.btn--form` — full width, `58px`, `2px` radius, `space-between`, `40px` icon.
It deliberately breaks the pill rule to read as a stamp on the form.

#### Rules

- One primary button per viewport region. Secondary actions are `.text-link`.
- Button labels are sentence case, verb-first, and specific: "Judge your
  hackathon", "Request a walkthrough", "Enquire". Never "Learn more" or "Submit".
- Never place two filled buttons side by side. Never use ember as a button fill.
- No icon-only buttons except the documented back-to-top and menu controls.

### 4.4 Text links

```html
<a class="text-link" href="#method">Read the method</a>
<a class="text-link text-link--arrow" href="#enquire">
  Request a sample verdict <svg class="icon"><use href="#i-arrow"/></svg>
</a>
```

| Property | Value |
| --- | --- |
| Type | sans `11px` / `500` / `0.12em` / uppercase |
| Underline | 1px currentColor, resting `scaleX(.32)` from left |
| Hover | underline expands to `scaleX(1)` over `0.5s` |
| Arrow variant | `12px` icon; on hover moves `2px,-2px` |
| Focus | standard focus-visible outline |

Use text links for the second action in a pair, section footers, and back links.
Do not restyle them as small buttons.

### 4.5 Labels, eyebrows and micro type

| Class | Purpose | Colour |
| --- | --- | --- |
| `.section-label` + `.label-index` + `.label-text` | Section catalogue header | index muted, text ink |
| `.micro` | Metadata, figure captions, form notes, table headers | muted |
| `.eyebrow` | Thematic kicker above a display line | ink-soft |
| `.eyebrow--light` | Kicker on dark/image | cream at 60% |
| `.oversight .label-*`, `.cta .label-*` | Catalogue header on moss | index cream 45%, text cream |
| `.oversight .section-top > .micro`, `.cta .section-top > .micro` | Note on moss | cream 50% |

Rules:
- Micro copy is always short — a fragment, not a sentence. "Evidence over
  applause", "Selected records", "4 judges".
- Do not use micro type for anything a user must read to act. Essential
  instructions use body size.
- Pair a serif italic index with a sans uppercase label; never reverse the pairing.

### 4.6 Status dot

```html
<span class="dot" aria-hidden="true"></span>
<span>Two pilot events open for 2027</span>
```

`5×5px`, `--ember`, `4px` halo at 10% ember, `pulse 4.5s ease-in-out infinite`.
Used for locale, availability and live status. Always accompanied by text. Never
use it as a standalone decorative bullet.

### 4.7 Header

**Anatomy:** brand left, primary nav centre-right, small CTA + menu toggle right.

| State | Class | Behaviour |
| --- | --- | --- |
| Default | `.site-header` | Transparent, `22px` vertical padding |
| Scrolled | `.is-scrolled` | `13px` padding, paper 82% + `blur(16px) saturate(1.08)`, bottom hairline |
| Hidden | `.is-hidden` | `translateY(-105%)` after scrolling down past `220px`; returns on scroll up |
| Menu open | body `.menu-open` | Header stays visible; prevents hide |

Nav links are uppercase sans `10px` with an underline that grows from the right
on hover. Below 900px the nav and header CTA disappear; only the menu toggle remains.

Rules:
- Max five primary nav items. Nav labels are reader-facing and map to section
  IDs; the visible section label may be more formal ("Why Jury" → `#studio`,
  labelled "Position"; "Oversight" → `#oversight`). The menu carries the full
  numbered sequence (`01`–`06`), including Questions and Enquire.
- Always keep the header logo linked to `#top` / `index.html`.
- Do not add a second header CTA or a search field.

### 4.8 Menu overlay

Full-screen paper overlay, revealed by `clip-path: inset(0 0 100% 0)` →
`inset(0 0 0 0)` over `0.85s`.

**Anatomy**

1. Top row: brand + "Close" with circled X.
2. Numbered serif nav (`01`–`05`), ruled top and bottom, `clamp(38px,6.6vw,66px)`.
   Hover adds `12px` left padding and darkens to `#000`.
3. Foot: correspondence email, studios, availability note.

**Behaviour and accessibility**

- Toggle: `aria-expanded`, `aria-controls="menu-panel"`; panel: `aria-hidden`.
- Opening sets `main` and `footer` to `inert`, locks body scroll, moves focus to
  Close after `180ms`.
- Escape closes. Tab is trapped among visible menu links. Closing returns focus
  to the element that opened it.
- Each link carries `data-menu-link` and closes the menu without returning focus.
- Panel uses `100dvh` with a `100vh` fallback.

### 4.9 Hero

```html
<section class="hero" id="top" data-chapter="00 / Threshold">
  <div class="shell">
    <div class="hero-kicker">…</div>
    <h1 class="hero-title" aria-label="Every project deserves a verdict.">
      <span class="line"><span class="line-inner">Every project</span></span>
      <span class="line"><span class="line-inner">deserves a <em>verdict</em><span class="period">.</span></span></span>
    </h1>
    <div class="hero-foot">…lede + CTA pair…</div>
  </div>
  <figure class="hero-figure">…plate + plate mark…</figure>
</section>
```

| Element | Spec |
| --- | --- |
| Kicker | Locale + ember dot only, hairline underneath; no eyebrow line |
| Title | Two lines, each masked by `.line` (`overflow:hidden`), inner starts `translateY(112%)` |
| Emphasis | One italic serif word; the period is set roman in a separate span |
| Lede | Max `47ch`, `clamp(15.5px,1.25vw,18px)`, ink-soft |
| Actions | Filled button + text link, aligned to the lede's baseline |
| Plate | Height `clamp(420px,64vh,760px)`, image `scale(1.045)`, bottom scrim |
| Plate mark | "Plate 01 — Before the verdict" at the lower edge, `aria-hidden` |

The `<h1>` has a plain-text `aria-label` so masked lines and the italic period do
not fragment the accessible name. The plate mark is decorative and `aria-hidden`.

The hero carries **one** meta line (locale); there is no eyebrow, no second meta
row and no image caption. Do not add a third headline line, a background video,
or a second CTA pair.

### 4.10 Panel marquee

A dark full-bleed band listing events "Recently on the panel at".

- Label: centred sans `10px` / `600` / `0.32em`, cream at 56%.
- Track: `width: max-content`, duplicated group, `translateX(-50%)` over `46s linear`.
- Items: serif `clamp(18px,1.8vw,22px)`, cream at 78%, separated by ember
  asterisks at 80% opacity.
- Edge fades: `clamp(64px,11vw,176px)` linear gradients matching `--dark`.
- Hover on the band pauses the animation.
- The duplicate group is `aria-hidden="true"`; the first group carries the
  accessible names.

Keep the list to 6–10 short names. No logos, no boxes, no click targets.

### 4.11 Verdict card

The signature component. A dark specimen record that proves the product.

| Part | Spec |
| --- | --- |
| Card | `--dark`, `3px` radius, padding `clamp(24px,2.6vw,34px)`, min-height `440–516px`, single shadow |
| Head | "Specimen verdict" micro + record ID mono, hairline under |
| Main | Project name serif + category tag; score `94.2` serif with `/100` sans small |
| Bars | 3px track at 14% cream; fill cream, `scaleX(var(--score))`, animates when `.is-in` |
| Reason | One italic serif sentence in quotes, max `24ch`, hairline above |
| Foot | Three mono/sans facts, pushed to bottom with `margin-top:auto` |

Rules:
- The card is a **specimen**, always labelled as such. Do not present it as a real
  customer unless the copy is real.
- Scores must be plausible and specific (`94.2`, not `100`). Include at least one
  dissent or caveat in the foot.
- Bars need `aria-hidden="true"`; the card has an `aria-label` with the full score.
- Only one verdict card per page.

### 4.12 Stat band

Three (occasionally four) figures separated by hairlines.

```html
<div class="stat-band" data-reveal>
  <div class="stat">
    <span class="stat-num" data-count="12" data-suffix="k+">12k+</span>
    <span class="stat-label">Projects read in full</span>
  </div>
</div>
```

- Grid `repeat(3, 1fr)`, top hairline, each item left-ruled except the first.
- Number serif `clamp(42px,4.3vw,62px)`, tabular, ink.
- Label sans `9.5px` uppercase, muted, max `16ch`, bottom-aligned.
- Counters animate once at 50% visibility over `1500ms`; the final text must
  match `data-count` + `data-suffix`.
- Mobile: 2-up at 900px, 1-up at 760px, horizontal rows at 520px.

### 4.13 Process rail

Four numbered passes (`Ingest → Convene → Deliberate → Resolve`).

- Grid 4-up, `border-top: 1px solid var(--line)`, item left borders soft.
- Each step: serif italic number, serif `h3`, short sans line, mono meta pushed
  to the bottom with `margin-top: auto`.
- A 5px ink dot sits on the top rule at each step's left edge (`::before`, `top:-3px`).
- Hover adds a faint paper wash. No cards, no icons, no arrows between steps.
- Steps are `<li>` inside `<ol>`; the visible number duplicates the list order,
  so mark it `aria-hidden` in new work to avoid a double announcement.
- Responsive: 2×2 at 980px, 1-up at 560px, with borders collapsing cleanly.

### 4.14 Oversight section

The first moss band. Two columns: a tall photographic plate with an overlaid
quote, and a ruled list of human decision rights.

**Band**
- Background: `--moss` to `--moss-deep` vertical, plus a sage radial wash at the
  top-right (`rgba(167,182,157,.12)`).
- Border-block: 1px cream at 8%; the section-top rule uses `--line-light`.
- Section label and micro invert to cream; the H2 caps at `22ch`.

**Plate**
- Height `clamp(480px,44vw,620px)`, full column height; image `scale(1.04)`.
- Scrim: transparent at 42%, `rgba(20,24,20,.78)` at the bottom.
- Quote: serif `clamp(28px,2.9vw,42px)`, max `17ch`, cream; micro label below.
- The figure has a descriptive `alt`; the scrim is `aria-hidden`.

**Decision list**
- Three `<article>` rows separated by `--line-light`; the first row has no top
  rule and no top padding.
- Each row: a 32px circled check (1px sage border at 42%, sage glyph) in a
  `34px` column, then a serif `h3` and a 14px paragraph at cream 56%, max `46ch`.
- The check is `aria-hidden`; the row is understood from its heading.
- The list closes with a bordered caveat at 13.5px: a bold lead-in in cream 86%
  followed by the limitation in cream 56%. The caveat is essential copy, so it
  never drops below 13.5px or cream 56%.

**Tone**
- The section carries `data-tone="dark"`, which switches the fixed chapter
  indicator to cream/sage while the band is in view.
- The mobile plate becomes `clamp(400px,58vw,560px)` at 980px and
  `clamp(380px,88vw,520px)` at 760px.

### 4.15 Questions section

A paper section pairing a short argument with a single-open FAQ accordion.

**Layout**
- `.faq-grid`: `.72fr 1.28fr`, start-aligned, `40–96px` gap.
- Intro: H2 max `10ch` ("Before you / *ask the room.*") and a `34ch` intro.
- The list has a top hairline; every item has a bottom hairline.

**Question row**
- A full-width `<button>` inside an `<h3>`, flex with an `18px` gap.
- Mono index `8.5px` at `--faint`, width `20px`, aligned to the question cap.
- Question: serif `clamp(24px,2.35vw,33px)`, ink, max two lines on desktop.
- Toggle: 34px circle, 1px `--line`; the `#i-plus` glyph rotates `45deg` when
  open. Open state fills the circle with ink and sets the glyph to paper.
- Hover darkens the toggle border only; the row itself does not shift.

**Answer**
- `display: grid` with `grid-template-rows: 0fr → 1fr` over `0.55s var(--ease)`;
  the inner wrapper is `overflow: hidden`.
- Answer copy: 14.5px, `1.75`, `--muted`, max `64ch`, inset `0 52px 28px 38px`.
- Only one item is open at a time. The first item ships open.
- Closed answers are `inert`, so links and text inside them leave the tab order.

**Accessibility**
- Button carries `aria-expanded` and `aria-controls`; the answer is a
  `role="region"` labelled by the button.
- Without JS, `.no-js` forces every answer open and hides the toggles.
- The index and toggle are `aria-hidden`; the question text is the accessible
  name.

### 4.16 Quote band

A full-bleed atmospheric break between argument and evidence.

- Height `min(92vh, 920px)`, minimum `560px`; image extends `-8%` top and `116%`
  height for parallax headroom.
- Scrim: layered vertical + horizontal dark gradients for legibility.
- Top: light eyebrow. Bottom: serif quote (max `21ch`), then a short rule and
  attribution in uppercase sans.
- Content is vertically distributed with `space-between` so the quote sits low.
- One quote per page. Do not autoplay a carousel of testimonials.

### 4.17 Case mosaic

Five selected records in a 12-column asymmetric grid.

| Variant | Span | Height | Position |
| --- | --- | --- | --- |
| `.case--wide` | 7 | `clamp(320px,35vw,500px)` | Row 1 left |
| `.case--tall` | 5 | same | Row 1 right |
| `.case--third` | 4 | `clamp(230px,23vw,320px)` | Row 2 ×3 |

Each card contains:
- image (cover), a restrained grade (`grayscale(.38) saturate(.58) sepia(.12)`),
- top-left mono index in a translucent bordered plate,
- top-right circular open arrow (hidden until hover/focus on pointer devices),
- bottom caption: serif headline (max `16ch`) + uppercase category · year.

Hover: image scales to `1.055` and warms toward true colour; overlay arrow fades
in and moves to origin. The entire card is one `<a>`, so the arrow is decorative.

Responsive: at 980px wide becomes full-width and the rest 6/6; at 760px all
cards stack full-width, arrows always visible. Captions stay bottom-left with a
bottom scrim; never place text on an ungraded image.

### 4.18 Closing call

The second moss band, and the page's only enquiry surface.

**Band**
- Same `--moss` → `--moss-deep` gradient and sage radial wash as Oversight;
  a cream 10% top border separates it from the paper.
- Section label (`06 / Enquire`), micro "Your next judging room".
- Display title "Give good work / *a fair hearing.*" at
  `clamp(58px,9.4vw,148px)`, max `14ch`, cream.

**Body**
- `.cta-body`: `.9fr 1.1fr`, start-aligned, top rule at cream 18%.
- Lede max `42ch`, cream 68%, `clamp(15.5px,1.25vw,18px)`.
- Availability row: sage dot, cream 58%, hairline above.
- Direct contact: "Direct" micro, then cream email and phone links with a
  persistent cream underline that brightens on hover.

**Form panel — dark variant**
- `.form-panel--dark`: cream 4% fill, `blur(2px)`, cream 18% border.
- Head: "Enquiry 01" micro + response-time note, `--line-light` rule.
- Fields are transparent with a cream 26% bottom rule, cream text and cream 30%
  placeholders; labels are cream 55%.
- Error text lightens to `#E2A58A` for contrast on moss.
- The submit button is `.btn--cream`: cream fill, ink text, ink icon well.
- Privacy note is cream 56%, not faint.
- Success state, validation and focus semantics are unchanged from §7.5.

Rules:
- Keep the form to three fields. It is correspondence, not onboarding.
- Never add a multi-step flow, checkboxes or a file upload.
- The form is front-end only in this demonstration; if wired to a backend, keep
  the same validation and success semantics and update the privacy copy.
- Do not use native browser validation bubbles; the form is `novalidate`.
- Only one enquiry surface exists on the page; do not add a second form in the
  footer.

### 4.19 Footer

A dark closing colophon with four columns and a giant wordmark.

| Part | Spec |
| --- | --- |
| Brand | Inverse lockup + serif statement, max `22ch` |
| Jury column | Four section links |
| Contact column | Email, phone, walkthrough link |
| Studios column | Zurich and London rows with live local times (`Europe/Zurich`, `Europe/London`), mono tabular |
| Availability | Ember dot + pilot note |
| Legal row | © 2026 Jury Systems AG · Zurich · London · Every timezone · Credits · back-to-top |
| Wordmark | Serif `clamp(150px,29vw,448px)`, cream at 12%, cropped at the baseline, `aria-hidden`, non-selectable |

Rules:
- Footer link text is cream at 76%; headings at 44%; do not brighten everything.
- Clocks are decorative but must be accurate; use `Intl.DateTimeFormat`, update
  every 30s, and render `—` on failure.
- Back-to-top is a 38px circle with an upward arrow (rotated `#i-down`), labelled.
- The giant wordmark never becomes interactive and never receives meaning.

### 4.20 Chapter indicator

A fixed, vertical chapter label at the left edge.

- Rotated `-90deg`, origin left centre, positioned at `left: calc(var(--gutter) * .38)`.
- Sans `8.5px` uppercase, `0.15em`; 4px ember dot.
- On moss bands (`data-tone="dark"`) the label turns cream and the dot turns
  sage via `body.chapter-on-dark`, so the marker stays visible on the inversion.
- Fades in after `body.is-ready` (set 500ms after load), fades out when the footer
  enters view (`body.chapter-hidden`).
- Hidden below 1024px and from assistive tech (`aria-hidden`).
- Updated by an IntersectionObserver with `rootMargin: -42% 0 -48%`, using each
  section's `data-chapter`.
- Chapter labels are decorative duplication of section labels; never rely on them
  for navigation or meaning.

### 4.21 Colophon page pattern

`credits.html` is the template for any secondary/legal page.

- Same `<head>` metadata pattern, canonical URL, fonts and stylesheet.
- Header is permanently `.is-scrolled` (no JS), with a "Back to Jury" text link
  instead of nav.
- Page wrapper `.credits-page` with top padding `120–190px` to clear the header.
- Kicker + micro top row with hairline; oversized serif page title.
- Lede max `48ch`.
- Two-column `.credits-grid` of ruled blocks; each block is a `<section>` with a
  micro `h2`, body copy, and an optional ruled definition list.
- Foot: micro "Set in…" + return text link.
- Body class `.credits-body` supplies the paper background without the landing
  page's chapter/grain scripts.

For any new page: reuse this skeleton, keep one `h1`, and do not import landing
page JavaScript unless the page uses those features.

---

## 5. Imagery and art direction

### 5.1 Subject matter

Photography is **architectural and atmospheric**: sand, concrete, stairwells,
fog, dunes, libraries, quiet interiors. No people looking at cameras, no product
screenshots, no stock-meeting imagery, no 3D renders.

Every image should feel like a **plate** from a printed record: still, sunlit,
slightly austere, with room for type.

### 5.2 Technical specs

- Local files only, in `assets/img/`, JPEG, resized for the web (long edge ~2600px
  for hero/quote, ~1400–1800px for cards).
- Set explicit `width` and `height` on every `<img>` to reserve layout.
- Hero image: `fetchpriority="high"` + `<link rel="preload" as="image">`.
- Below-fold images: `loading="lazy"`.
- Always write a descriptive `alt` sentence describing the scene, not the mood
  ("A pale sand-coloured wall with a tall doorway cut into deep shadow…").
- Purely decorative overlays and marks use `aria-hidden`.

### 5.3 Grading

The warm, low-saturation grade is applied in CSS, not baked into files.

| Context | Filter |
| --- | --- |
| Hero plate | `saturate(.82) contrast(1.03) sepia(.05)` |
| Oversight plate | `saturate(.62) contrast(1.05) sepia(.06)` |
| Quote plate | `saturate(.6) contrast(1.05) sepia(.08)` |
| Case cards (rest) | `grayscale(.38) saturate(.58) sepia(.12) contrast(1.05)` |
| Case cards (hover) | `grayscale(.08) saturate(.86) sepia(.04) contrast(1.02)` |
| Work preview (legacy) | `saturate(.7) contrast(1.04) sepia(.06)` |

Do not introduce cool/blue grades, duotones, neon overlays, or heavy vignettes.
If a new image feels too modern, lower saturation and add a touch of sepia before
replacing it.

### 5.4 Scrims and text over image

Text on photography always sits on a gradient scrim:

- Hero: transparent to 20% dark at the bottom, plus a faint horizontal wash.
- Oversight: transparent to 78% `rgba(20,24,20)` from 42% down.
- Quote: multi-stop vertical (52% → 6% → 28% → 82%) plus a left-to-right 42% wash.
- Cases: 12% top → transparent 38% → 72% bottom.

Scrims use `rgba(20,19,16,…)` (or `rgba(25,24,20,…)`), never pure black. They are
`pointer-events: none`. Minimum target: white-ish text must reach 4.5:1 against
the darkest stop behind it.

### 5.5 Plate marks and captions

A plate is identified by a small mono/serif label:

- Plate number: serif italic `13px` ("Plate 01").
- Separator: 32px hairline.
- Caption: uppercase sans `9.5px` at `0.13em`.
- Coordinates: mono `9px`.
- Over-image plate marks use a 1px translucent ink/cream border and 5–7px padding.

These labels are what make the site read as an archive. Use them consistently and
never invent a different caption style per section.

### 5.6 Parallax

Images with `data-parallax-media` translate up to `±strength` pixels (16–30) while
scrolling, with a base `scale(1.055)` to avoid exposed edges.

- Only apply on large photographic plates, never on case cards or UI.
- Keep strength between `16` and `30`.
- Disabled under `prefers-reduced-motion`.
- Do not parallax text, borders or cards.

---

## 6. Motion and interaction

### 6.1 Principles

- Motion clarifies hierarchy; it never entertains.
- One entrance per element, once. No looping attention-seekers except the status
  dot and scroll cue.
- Slow and eased: `0.8–1.45s` for entrances, `0.3–0.65s` for feedback.
- Only animate `transform`, `opacity`, `filter` and `clip-path`. Never animate
  layout properties.
- Smooth scrolling is eased, not hijacked: the wheel still maps directly to
  scroll, there are no pinned scenes, and `prefers-reduced-motion` falls back to
  native scrolling.

### 6.2 Scroll reveals

```html
<p data-reveal style="--d:1">…</p>
```

- Initial: `opacity:0`, `translateY(28px)`, `blur(8px)`.
- In view: opacity 1, no transform, no blur.
- Trigger: IntersectionObserver at `threshold: 0.12`, `rootMargin: 0 0 -8% 0`;
  unobserves after reveal.
- Stagger through `--d` in document order; keep it to `0–4`.
- Only active when `html.js` is set; without JS, content is visible.
- Under reduced motion, everything is visible with no transition.

Do not reveal every paragraph. Reveal a section's headline, intro, card or list —
not each line. Avoid nested reveals (a revealed card containing revealed text).

### 6.3 Hero entrance

| Element | Animation | Delay |
| --- | --- | --- |
| Title line 1 | masked slide up `1.45s var(--ease)` | `0s` |
| Title line 2 | same | `0.1s` |
| Kicker | `fade-up 1s` | `0.1s` |
| Foot | `fade-up 1.15s` | `0.38s` |
| Meta | `fade-up 1.15s` | `0.48s` |
| Figure | `fade-up 1.4s` | `0.3s` |

Run once on load, only under `prefers-reduced-motion: no-preference`.

### 6.4 Header and navigation

- Header condenses after 12px of scroll.
- Hides on downward scroll past 220px when the delta exceeds 6px; returns on an
  upward delta of 4px.
- Header never hides while the menu is open.
- Scroll handlers are passive and throttled through `requestAnimationFrame`.
- Wheel scrolling runs through the vendored Lenis build
  (`assets/js/lenis.min.js`) with `duration: 1.1`, `smoothWheel: true` and
  `wheelMultiplier: .9`. Lenis is not initialised under reduced motion.
- In-page anchors are intercepted and passed to `lenis.scrollTo(target, {
  duration: 1.25 })`; history is updated without a jump. Lenis subtracts the
  CSS `scroll-padding-top` itself, so the handler passes no extra header offset.
- The menu calls `lenis.stop()` on open and `lenis.start()` on close; the
  back-to-top control uses the same 1.25s scroll.
- Touch scrolling stays native. No scroll-jacked sections or horizontal wheel
  capture.

### 6.5 Counters

- Trigger at 50% visibility.
- Duration 1500ms, ease-out exponential.
- Final text must equal the server-rendered value so no-JS and reduced-motion
  users see the correct number.
- Suffix comes from `data-suffix` (`k+`, `+`, `%`).

### 6.6 Hover behaviour

- Hover is an enhancement, never required. Every hover state has a visible
  resting equivalent or is decorative.
- Gate pointer-only effects with `@media (hover:hover)`; at ≤1024px hide the work
  preview; at ≤760px show case arrows at rest.
- Hover transitions never exceed `0.65s` except image zooms (`1.2s`).
- No cursor-following effects, tilt, magnetic buttons or custom cursors.

### 6.7 Reduced motion

`@media (prefers-reduced-motion: reduce)` must:

- Set `scroll-behavior: auto` and leave Lenis uninitialised.
- Collapse all animation/transition durations to `0.01ms`.
- Remove hero line offsets and entrance animations.
- Show all `[data-reveal]` content immediately.
- Stop the marquee.
- Show the work preview and chapter indicator without transitions.

The JS also checks `matchMedia` and reloads on preference change. Any new motion
must be added to the reduced-motion block.

---

## 7. Accessibility

Non-negotiable requirements for every page and component.

### 7.1 Structure

- One `<h1>` per page; headings descend in order (`h1 → h2 → h3`), never skip.
- Landmarks: `<header>`, `<nav aria-label="Primary">`, `<main id="main">`, `<footer>`.
- Sections that represent a chapter may be labelled by their heading; decorative
  chapter markers are `aria-hidden`.
- Ordered processes use `<ol>`; navigation lists use `<nav>` + links; oversight
  rows and FAQ items use `<article>`.
- FAQ questions are `<button>` elements inside `<h3>`; answers are regions
  labelled by their question.

### 7.2 Keyboard

- Skip link is the first focusable element and appears on focus.
- Every interactive element is reachable and has a visible `:focus-visible` ring
  (`1.5px currentColor`, `4px` offset).
- The menu traps focus, closes on Escape, and restores focus on close.
- `main` and `footer` are `inert` while the menu is open.
- FAQ questions toggle on Enter/Space, expose `aria-expanded`, and closed
  answers are `inert` so their content is skipped by Tab.
- No positive `tabindex`. Only the success message uses `tabindex="-1"` for
  programmatic focus.

### 7.3 Screen readers

- Decorative SVGs, dots, indices, scrims and the giant wordmark are `aria-hidden`.
- Masked hero lines carry a plain `aria-label` on the `<h1>`.
- The verdict card's visual score is repeated in a complete `aria-label`.
- Duplicated marquee content is hidden from assistive tech.
- Form errors use `role="alert"`; invalid fields get `aria-invalid="true"`.
- Live clocks are supplementary; do not announce every update.
- Alt text is descriptive and specific. Never start with "Image of".

### 7.4 Colour and type

- Body copy uses at least `--ink-soft` (7.66:1) on paper and cream 56% (4.77:1)
  on moss. `--faint` is never used for instructions or essential content.
- Do not rely on colour alone: status dots are paired with text; hover states
  also change underline, position or opacity.
- Respect 200% zoom and 320px width. No horizontal scroll.
- Text remains readable when the viewport is short: hero uses `vh` caps and
  `min-height` guards.

### 7.5 Forms

- Every input has a visible `<label for>`.
- Validate on submit, not on every keystroke; clear errors on input.
- Focus the first invalid field.
- Success state is focused and announced by moving focus.
- Autocomplete tokens are set (`name`, `email`).
- Inputs are `16px` to prevent iOS zoom.

---

## 8. Voice, copy and content patterns

### 8.1 Voice

**Clipped, evidenced, quietly confident.** The tone of a good chair reading a
decision: short declaratives, concrete nouns, no throat-clearing, no hype.

- Prefer the short Anglo-Saxon word: *read*, *watch*, *score*, *judge*, *verdict*.
- Use the second person for the reader's event ("your rubric", "your hackathon").
- State a limitation or dissent where it strengthens credibility.
- Never use exclamation marks. Avoid "revolutionary", "seamless", "unlock",
  "supercharge", "game-changing", "AI-powered" as a compliment.

### 8.2 Vocabulary

| Use | Avoid |
| --- | --- |
| panel, judge, deliberation, verdict, dissent, rubric, evidence, record | leaderboard, ranking engine, scoring tool |
| convene, deliberate, resolve, ingest | onboard, leverage, optimize |
| plate, figure, archive, specimen, colophon | gallery, carousel, showcase |
| enquire, correspondence, studio | contact us, get in touch, book a demo |

### 8.3 Patterns that define the brand

- **Antithesis:** "Not a leaderboard. A reasoned verdict." / "Most hackathons
  judge the *demo.* We judge the *work.*"
- **Numbered method:** "One pipeline. *Four passes.*" / "Ingest → Convene →
  Deliberate → Resolve."
- **Record metadata:** "Panel 118", "No. 118", "Plate 01", "Fig. 03", "Specimen
  verdict", "Est. 2014", "47.3769° N, 8.5417° E".
- **Caveat as proof:** "1 dissent", "96% verdicts without appeal", "The rest are
  under NDA."
- **Availability:** "Two pilot events open for 2027."

### 8.4 Copy rules

- Sentence case for titles and buttons; uppercase only for labels.
- Full stops in headlines are part of the composition ("Every project deserves a
  verdict."). Do not add them to labels.
- Use em dashes with spaces (—) for asides; en dashes for ranges; typographic
  quotes.
- Numbers: spell out one to nine in prose, use numerals for scores, years,
  counts and data. Always pair a stat with a plain-language label.
- Contractions are allowed ("you're", "it's") but use them sparingly.
- Dates: "2027", "07:12", "2025" in captions. No ordinal suffixes.
- Email `studio@jury.studio`; phone `+41 44 505 21 40`; studios Zurich · London.
- Every fictional claim must stay clearly fictional. Keep the colophon disclosure
  and the footer disclaimer.

### 8.5 Micro-copy deck

| Context | Copy |
| --- | --- |
| Hero locale | Zurich · London |
| Hero CTA | Judge your hackathon |
| Hero secondary | Read the method |
| Section 01 | Position · Evidence over applause |
| Section 02 | Method · From repo to verdict |
| Section 03 | Oversight · Decision rights, always human |
| Section 04 | Panels · Selected records |
| Section 05 | Questions · Asked plainly |
| Section 06 | Enquire · Your next judging room |
| Oversight caveat | A necessary caveat: no scoring system can guarantee fairness. |
| Closing title | Give good work a fair hearing. |
| Form CTA | Request a walkthrough |
| Form note | No mailing lists. No follow-ups. Your submissions stay yours. |
| Success | Your event is with us. We will reply within two working days, from a person rather than a system. |

---

## 9. Implementation conventions

### 9.1 Files

```text
index.html      Landing page
credits.html    Colophon / secondary page
styles.css      Tokens, reset, components, responsive, reduced motion
main.js         Lenis, reveals, header, parallax, counters, menu, accordion, form, clocks, chapters
assets/img/     Local photography
assets/js/      Vendored Lenis 1.3.27
assets/favicon  Hand-authored SVG mark
docs/           README screenshots (not used by the site)
```

- No build step, no package manager, no framework. The only runtime code
  dependency is the vendored Lenis file; fonts come from Google Fonts.
- New pages are standalone `.html` files linking the same `styles.css`.
- Keep CSS in one file; add new component blocks in the matching commented section.
- Keep JS in the existing IIFE; guard every feature for the elements it needs.

### 9.2 CSS conventions

- Custom properties for every colour, font stack, spacing token, easing and z-index.
- BEM-ish naming: `.block`, `.block-element`, `.block--modifier`.
- State classes use `is-*` (`.is-scrolled`, `.is-open`, `.is-in`, `.is-active`).
- Utilities: `.shell`, `.sr-only`, `.icon`, `.micro`, `.eyebrow`, `.dot`.
- Mobile-first is not used; the base styles are desktop, with `max-width` queries
  that simplify. Keep new rules in the same descending-breakpoint order.
- Group rules with the section comment banner used throughout the file.
- Do not use `!important` except in the reduced-motion reset and the existing
  `.menu-note` overrides.

### 9.3 HTML conventions

- `<!doctype html>`, `lang="en"`, `class="no-js"` replaced inline by `js`.
- Head order: charset, viewport, title, description, theme-color, Open Graph,
  canonical, favicon, preloads, font preconnect/link, stylesheet, JS class swap.
- Inline SVG sprite immediately after the skip link.
- `<div class="grain" aria-hidden="true"></div>` before the header on every page.
- Sections carry both `id` and `data-chapter`.
- All anchors in the primary nav resolve to real section IDs.
- Images: explicit dimensions, descriptive alt, lazy below the fold.

### 9.4 JavaScript hooks

| Attribute | Owner | Behaviour |
| --- | --- | --- |
| `data-reveal` + `style="--d:n"` | Reveals | Fade/translate/blur in once |
| `data-parallax-media="16–30"` | Parallax | Scroll translation on the parent container |
| `data-hero` | Hero | Markup-only grouping hook for the hero entrance |
| `data-header` | Header | Scroll state + hide/show |
| `data-menu-toggle`, `data-menu`, `data-menu-close`, `data-menu-link` | Menu | Open/close, focus trap, inert |
| `data-count`, `data-suffix` | Counters | One-time count-up |
| `data-chapter`, `data-chapter-label` | Chapter rail | Active chapter label (`data-chapter-indicator` is markup only) |
| `data-tone="dark"` | Chapter rail | Switches the indicator to cream/sage on moss bands |
| `data-faq`, `data-faq-item` | Accordion | Single-open question list, `aria-expanded`, `inert` answers |
| `data-clock="Europe/Zurich"` | Footer clocks | Local time, 30s update |
| `data-footer` | Footer | Hides chapter rail |
| `data-back-top` | Footer | Smooth scroll to top |
| `data-enquiry-form`, `data-form-error`, `data-form-success`, `data-success-name`, `data-form-reset` | Form | Validation and success state |
| `data-work-list`, `data-work-preview`, `data-preview` | Legacy | Hover preview rail; not used on the current landing page |

Rules:
- Never bind behaviour without the matching element guard (`if (!el) return`).
- Do not add scroll listeners without rAF throttling and `{ passive: true }`.
- Respect `reduceMotion.matches` in every new animation.

### 9.5 Legacy selectors

`styles.css` still contains styles from earlier iterations that are **not used**
by the current landing page: `.section-grid`, `.statement`, `.manifesto-cols`,
`.signature`, `.stats`, `.method-*`, `.room-*`, `.work-*`, `.notes-*`,
`.preview-*`, and the corresponding rules inside media queries. Note that
`.stat` is still used — only the four-up `.stats` wrapper is legacy. `main.js`
likewise retains the work preview feature.

Do not reuse these for new work unless you are intentionally reviving that
pattern. New components should follow the current set documented above
(`section-top`, `wager`, `verdict-card`, `process`, `oversight`, `faq`,
`quote-band`, `cases`, `cta`, footer). When removing or reviving legacy rules,
update this document in the same commit.

---

## 10. Recipes and review checklist

### 10.1 Adding a new section to the landing page

1. Choose the next chapter number and add it to the chapter sequence; update the
   menu and footer navigation if it becomes a primary destination.
2. Copy the section skeleton from §3.1.
3. Write the label + micro pair first; it forces the section to have one idea.
4. Choose one body pattern: split, rail, mosaic, full-bleed figure. Do not invent
   a new grid unless the content genuinely needs it.
5. Add `data-reveal` to the headline, intro and body units — not every line.
6. Add `id` and `data-chapter` in the same style as neighbours.
7. Check desktop (`1440`), tablet (`900`), phone (`390`) and `320px`.
8. Run the checklist below.

### 10.2 Adding a new page

1. Duplicate the head metadata from `credits.html`; update title, description,
   canonical and OG values.
2. Include the skip link, grain, header, sprite and footer.
3. Use a page wrapper with top padding that clears the fixed header
   (`clamp(120px, 15vw, 190px)`).
4. Reuse `.credits-*` patterns for legal/colophon content or the landing section
   patterns for editorial content.
5. Add one `<h1>`. Keep the display scale and rule system consistent.
6. Only load `main.js` if the page uses its features; the credits page does not.
7. Add the page to the footer/colophon links and this document if it is permanent.

### 10.3 Review checklist

**Visual**
- [ ] Warm paper base, ink text, one ember accent moment per viewport.
- [ ] Moss bands invert to cream/sage; ember does not appear on moss.
- [ ] No pure black/white, no gradient text, no decorative glow or glass.
- [ ] Display type is Instrument Serif, body is Instrument Sans, data is mono.
- [ ] Headings use one italic emphasis at most.
- [ ] Section top has rule + index + label + micro note.
- [ ] Spacing follows the `--section` and `--gutter` tokens.
- [ ] Images are local, warm-graded and scrimmed under text.
- [ ] New surface uses a rule or paper tone before a shadow.

**Behaviour**
- [ ] Reveals are one-time, staggered 0–4, and disabled for reduced motion.
- [ ] Hover states have a resting equivalent on touch.
- [ ] No layout animation, no scroll hijacking, no attention loops.
- [ ] Lenis is absent under reduced motion; anchors still land correctly.
- [ ] Fixed header offset is respected by anchor links.
- [ ] FAQ opens one item at a time and closed answers are `inert`.

**Accessibility**
- [ ] Keyboard reaches everything; focus ring is visible.
- [ ] One `h1`; heading order is valid; landmarks are present.
- [ ] Decorative elements are `aria-hidden`.
- [ ] Menu traps focus, Escape closes, focus returns, background is inert.
- [ ] Form labels, `aria-invalid`, `role="alert"` and focused success work.
- [ ] Text contrast is at least 4.5:1; `--faint` is not used for instructions.
- [ ] No horizontal scroll at 320px or 200% zoom.

**Code**
- [ ] Uses tokens, not raw hex.
- [ ] Component follows existing class naming and state conventions.
- [ ] No new dependency, build step or framework.
- [ ] New behaviour is guarded and respects `prefers-reduced-motion`.
- [ ] This document is updated if a token, component or rule changed.

### 10.4 Do / don't quick reference

| Do | Don't |
| --- | --- |
| Let a hairline organise the page | Box every item in a card |
| Use one italic word to carry emphasis | Bold or italicise whole headings |
| Put text on a graded scrim | Put text directly on an untreated photo |
| Keep CTA labels specific and verb-first | Use "Learn more" / "Submit" |
| Use ember as a 5px status mark | Fill buttons or headings with ember |
| Reveal a section once | Animate every paragraph on scroll |
| Keep the form to three fields | Add steps, checkboxes or uploads |
| Label speculative content as a specimen | Present invented proof as real |
| Stack gracefully at 320px | Hide essential content on mobile |

---

## 11. Appendix: token reference

```css
:root {
  /* Colour */
  --paper: #f2ece1;
  --paper-soft: #f4efe6;
  --paper-deep: #ebe2d3;
  --paper-deeper: #e5dbc9;
  --ink: #22211d;
  --ink-soft: #4b4942;
  --muted: #716c60;
  --faint: #948d7f;
  --line: rgba(34, 33, 29, 0.17);
  --line-soft: rgba(34, 33, 29, 0.09);
  --ember: #a45c39;
  --dark: #191814;
  --moss: #2b312b;
  --moss-deep: #222722;
  --sage: #a7b69d;
  --cream: #f5efe4;
  --line-light: rgba(245, 239, 228, 0.16);

  /* Type */
  --serif: "Instrument Serif", "Iowan Old Style", "Baskerville",
    "Times New Roman", serif;
  --sans: "Instrument Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --mono: "SFMono-Regular", "SF Mono", ui-monospace, "Roboto Mono", Menlo,
    monospace;

  /* Space */
  --gutter: clamp(22px, 4.2vw, 76px);
  --section: clamp(84px, 9vw, 136px);

  /* Motion */
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-io: cubic-bezier(0.76, 0, 0.24, 1);
}
```

Canonical motion timings:

```css
/* Reveal */
opacity 1.2s var(--ease);
transform 1.3s var(--ease);
filter 1.2s var(--ease);
transition-delay: calc(var(--d, 0) * 110ms);

/* Hero line */
1.45s var(--ease);

/* Menu overlay */
clip-path 0.85s var(--ease-io);

/* Marquee */
46s linear infinite;

/* Hover feedback */
0.3s–0.65s var(--ease);

/* Smooth scroll (Lenis) */
duration 1.1; anchors 1.25;
```

Canonical utility classes:

```html
<div class="shell">…</div>
<p class="micro">…</p>
<p class="eyebrow">…</p>
<a class="btn">…</a>
<a class="btn btn--small">…</a>
<a class="text-link text-link--arrow">…</a>
<span class="dot" aria-hidden="true"></span>
```

---

*This document describes the design of `index.html` and `credits.html` as of
November 2026. If a future component needs to deviate, document the reason here
rather than letting the system drift silently.*
