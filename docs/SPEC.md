# Spec — what "the same page" means here

## The contract

The replica is defined against **the reference document**, not against a
screenshot or a description of the page:

`shared/aozi_reference/rendered.html` — the live page captured after
hydration (Playwright, `networkidle`, scrolled to the end so the virtualised
coin board rendered all of its cards).

Everything below is derived from that document, and any disagreement between a
screenshot, a summary and the document is resolved in the document's favour.

## Layout model

The reference is one document containing four complete layouts:

| Class | Layout | Shown when |
| --- | --- | --- |
| `.vdl` | desktop light | `html[data-theme="light"]` and viewport > 899px |
| `.vdd` | desktop dark | `html[data-theme="dark"]` and viewport > 899px |
| `.vml` | mobile light | `html[data-theme="light"]` and viewport ≤ 899px |
| `.vmd` | mobile dark | `html[data-theme="dark"]` and viewport ≤ 899px |

They are not a CSS-variable swap: the markup itself carries per-theme colours
(light `#68716c` vs dark `#8a908c` for secondary text, `#ffffff` vs `#101212`
card faces, sun instead of moon in the theme button, and so on). So the port
carries four data passes and four sets of generated chrome, and `App.tsx`
renders exactly the active one.

Theme is `html[data-theme]`, persisted in `localStorage` under `aozi-theme`.
The breakpoint is `max-width: 899px` — `useViewport()` must use the same value.

## Page structure (desktop)

| # | Section | Notes |
| --- | --- | --- |
| 1 | shell wash + decorative floaties | fixed `body:before` with 9 radial gradients; 4 `.floaty` stickers |
| 2 | nav | logo, 6 links, theme button, "Tag @aozibot", profile button |
| 3 | `.aozi-tick` | "the flywheel buys back" + copy-contract button + "Its page" |
| 4 | hero | "aozi is on X" pill, 164px `Meet <mascot> aozi bot`, copy, 2 CTAs, "Just built" chips |
| 5 | showcase | 1240px black panel: a mock X client with sidebar, composer and widgets |
| 6 | `Launched by aozi` (`#coins`) | sort tabs + 3-column grid of 47 coin cards, height 214px covers |
| 7 | `Trending on Pons` | header + panel; the reference was captured with the empty state |
| 8 | `Porch talk` (`#porch`) | sticky intro column with 300px mascot + 8 threads / 16 posts |
| 9 | `How it works` | two cards: the two launch routes, then how buying works |
| 10 | footer | dark panel, mascot artwork, CTAs, disclaimer, link row |

Mobile reflows: 1 floaty, compact nav, 72px hero type, 358px showcase, one
column of 190px-cover cards, header-only Porch talk, stacked cards, and full
width footer buttons.

## Design tokens (light)

* page wash `#f3f7fa`; dark `#050606`
* text `#111713` / secondary `#68716c` / tertiary `#39413c`
* link blue `#1d9bf0`
* coin card: warm face `linear-gradient(180deg,#fff8e6,#ffffff 62%)`,
  ring `0 0 0 1.5px rgba(206,158,36,.7)`
* graduating bar `linear-gradient(180deg,#4fe39a,#149a5b)`,
  graduated bar `linear-gradient(180deg,#f6d77a,#d9a21b)`
* radii: 26px coin card, 22px post, 24–28px panels, 999px pills
* type: Geist Variable (UI), Geist Mono (numbers), Instrument Serif (display)

## Data contract

`src/data/coins.json` — 47 coins. Each record holds the light rendering plus a
`dark` twin and the per-layout cover height. Fields include ticker, name,
address, cover art (image + gradient + SVG label), badges, market cap, creator
identity and avatar, the quoted tweet (as styled runs), graduation progress and
bar gradient, price (split so the subscript glyph lands correctly) and the
"pay with" mark.

`src/data/feed.json` — 8 Porch talk threads: glow flag, card/connector/badge
styles per layout, and posts with author, handle, time, avatar, automated flag,
text runs and an optional attached launch card (per layout, since the desktop
frame is 160px and the mobile frame 124px).

`src/data/templates.json` — the repeated inline styles for coin cards, posts and
the board, captured per theme/layout instead of being re-authored.

## Interactions

* **theme toggle** — flips `data-theme`, writes `aozi-theme`
* **sort tabs** — Newest (source order) / Most active (replies) / Biggest (mcap)
* **copy contract** — clipboard + `.lv-toast` confirmation
* **card / post clicks** — coin cards and X posts are clickable regions
* **hover** — `.lift` and `.b` transitions, ported from the reference CSS

## Out of scope

The reference's other routes (`/t/<address>`, `/docs`, `/launch`, `/flywheel`,
`/profile`, `/terms`, `/privacy`) are not reimplemented. Links keep the
original relative paths; `vercel.json` rewrites unknown paths to `index.html`
so the site never hard-404s.
