# Current state

**Status: built and verified; awaiting repository credentials to publish.**

## Done

* Reference package ingested: hydrated DOM, both stylesheets, fonts, artwork and
  the 47 coin covers / creator avatars, archived under `shared/aozi_reference/`.
* Offline-renderable copy of the reference page built from that DOM, so the
  target can be re-measured at any viewport and theme.
* Data model extracted from the DOM for all four layout variants (`coins.json`,
  `feed.json`, `hero.json`, `templates.json`).
* Static chrome ported 1:1 (nav, tickbar, hero, showcase, trending,
  how-it-works, footer, shell, porch intro/header).
* Data-driven components written against the extracted model (coin cards, thread
  posts, launch-card attachments, board with working sort tabs).
* Theme toggle, copy-contract toast and click targets implemented.
* `tsc --noEmit` clean; `vite build` produces `dist/`.

## Verification (latest run, production build)

| Layout | Elements | Tag | Class | Geometry ≤0.75px | Pixel-identical |
| --- | --- | --- | --- | --- | --- |
| Desktop 1440 light | 3799 / 3799 | 100% | 100% | 100% | 99.999% |
| Desktop 1440 dark | 3800 / 3800 | 100% | 100% | 100% | — |
| Mobile 375 light | 3543 / 3543 | 100% | 100% | 100% | 99.990% |
| Mobile 375 dark | 3544 / 3544 | 100% | 100% | 100% | — |

Method and tooling: `docs/VERIFICATION.md`.

## Superseded

An earlier attempt interpreted the target as a Twitter/X-style app (left nav,
feed, right rail). That was built without a usable reference and its "Round 2
sign-off, 96.8% fidelity" was an unfounded score taken against an invalid
baseline. It has been replaced by this port; the invalid numbers in the earlier
history are corrected by `docs/VERIFICATION.md`.

## Open items

* **Publish** — the delivery repo needs credentials to push (nothing else is
  outstanding).
* Landing page only: the reference's `/t/<address>` and static pages are out of
  scope (see `docs/SPEC.md`).
* The showcase panel's typed composer only exists as a static frame in the
  reference capture; the animation runs from the ported CSS keyframes.
* `Trending on Pons` renders the reference's captured empty state — the live
  board fills in when coins trade.
