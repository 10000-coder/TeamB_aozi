# aozi.family — high-fidelity front-end replica

A React + Vite reproduction of <https://www.aozi.family/> (the aozi bot launch
page: "Meet aozi bot" hero, the 47-coin "Launched by aozi" board, Trending on
Pons, Porch talk, How it works and the footer).

The target is reproduced from a captured, fully hydrated copy of the live page
rather than from screenshots: the real DOM, the real stylesheets, the real fonts
and imagery. Where the original expresses its design as inline styles, those
strings are carried over verbatim through the `sx()` helper, so the port cannot
drift from the reference by transcription error.

## Provenance

| Input | Where it came from |
| --- | --- |
| `rendered.html` | 3.9 MB hydrated DOM captured from the live site (Playwright, networkidle + scroll) |
| `src/styles/base.css` | the site's external stylesheet chunk (`0k0o2lnumc6kf.css`), verbatim |
| `src/styles/site.css` | the page's own inline `<style>` block, verbatim |
| `public/{fonts,img,i,twimg}` | the site's fonts, artwork and coin covers / creator avatars |
| `src/data/*.json` | generated from that DOM (`tools/extract_all.py`, `tools/extract_templates.py`) |

Nothing in `src/data` is invented: coin names, tickers, creator handles, tweet
text, graduation progress, market caps, prices, thread posts and every inline
style string are read out of the reference DOM.

## How it is built

The original ships **four complete layouts in one document** (`vdl` desktop
light, `vdd` desktop dark, `vml` mobile light, `vmd` mobile dark) and reveals one
with `html[data-theme]` plus a `max-width: 899px` media query. It also inlines
per-theme colours, so light and dark are genuinely different markup, not a CSS
variable swap.

This port keeps that contract — the ported stylesheet is unmodified — but
renders only the active layout, selected with `useViewport()` and `useTheme()`:

```
src/
  App.tsx                 layout chooser: variant x theme -> section components
  useTheme.ts             html[data-theme] + localStorage `aozi-theme`
  useViewport.ts          the same 899px breakpoint as the stylesheet
  useSiteChrome.ts        delegated behaviour for the ported chrome
  lib/sx.ts               inline style string -> React style object (memoised)
  components/             Icons, Mascot, CoverArt, CoinCard, PorchPost, PayIcon
  sections/               CoinBoard, Porch (hand-written, data driven)
  sections/static/        Nav, Tickbar, Hero, Showcase, Trending, HowItWorks,
                          Footer, Shell, PorchLeft, PorchHead (ported 1:1)
  styles/                 the reference stylesheets, verbatim
  data/                   generated content + style templates
```

`src/sections/static/*` is generated from the reference DOM by
`tools/gen_sections.py`: the markup is faithful by construction, and the only
hand-written pieces are the ones that render repeated data (coin cards, thread
posts) plus the hero's dynamic "Just built" chip strip.

## Interactions

* theme toggle (writes `aozi-theme`, exactly like the original)
* coin board sort tabs — Newest / Most active / Biggest
* copy-contract button with the reference's `.lv-toast` styling
* coin cards and X posts are clickable; token links resolve to the canonical
  pages on the live site (this replica does not implement the `/t/<address>`
  routes)

## Verification

Fidelity is measured, not asserted. Each layout is rendered offline and compared
against the same page rendered from the captured DOM:

| Layout | Elements | Tag match | Class match | Geometry (≤0.75px) | Pixel-identical |
| --- | --- | --- | --- | --- | --- |
| Desktop 1440 light | 3799 / 3799 | 100% | 100% | 100% | 99.999% |
| Desktop 1440 dark | 3800 / 3800 | 100% | 100% | 100% | — |
| Mobile 375 light | 3543 / 3543 | 100% | 100% | 100% | 99.990% |
| Mobile 375 dark | 3544 / 3544 | 100% | 100% | 100% | — |

"Pixel-identical" is the share of pixels that are bit-for-bit equal in a
full-page render of both pages with CSS animations frozen; the remainder are
sub-pixel text rasterisation differences. See `docs/VERIFICATION.md`.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc --noEmit && vite build
npm run preview
```

## Scope

The landing page only. The reference's `/t/<address>`, `/docs`, `/launch`,
`/flywheel`, `/profile`, `/terms` and `/privacy` routes are not reimplemented;
those links are left pointing at the original paths.

## Pages

Six kinds of page are reproduced: the landing page `/`, the four pages behind the
top bar (`/docs`, `/flywheel`, `/profile`, `/launch`), and the 47 token pages
`/t/<address>`. The top bar, in-page hashes (`/#coins`, `/#porch`) and the token
pages all navigate inside the clone; nothing links back out to the original site
except the external services the reference itself links to (X, Pons,
DexScreener, Blockscout). See `docs/ROUTES.md` for the technique used per page
and `docs/VERIFICATION.md` for the measured fidelity.
