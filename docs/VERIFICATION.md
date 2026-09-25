# Verification

Every number below is produced by the tools in `tools/` and can be re-run by
anyone with this repo and Playwright. Nothing here is a self-assessment: the
harness measures both sides and diffs them element by element.

## Method

1. **Baseline.** The live site is captured as hydrated DOM (`reference/`) and
   kept as an offline-renderable copy, so the reference can be re-measured at any
   viewport and theme without the network. `tools/build_reference_page.py` builds
   the landing page; `tools/build_route_pages.py` the four top-bar pages.
2. **Geometry + computed styles.** `tools/measure.py` walks the rendered tree of
   the reference and of the production build (`dist/`) at the same viewport,
   recording each element's tag, class, box and 30 computed properties.
   `tools/compare.py` aligns them by document order and reports:
   - element counts and tag/class agreement,
   - how many boxes agree within 0.75 px,
   - how many elements have identical computed styles,
   - the worst geometry and style drift.
3. **Pixels.** `tools/shoot.py` captures each side as a full-page image built
   from viewport segments (Chromium cannot render a 23 000 px surface in one
   shot). `tools/pixel_diff.py` diffs them band by band.

The reference renders four complete layouts in one document (`.vdl` / `.vdd` /
`.vml` / `.vmd`) and hides three with CSS, so the reference side is measured with
the selector of the layout under test while the app renders only the active one.
For the prerendered token pages — which keep all four variants, as the reference
does — both sides are measured with the same selector.

## Results — landing page and top-bar routes

| Page | Viewport | Elements | Tag | Class | Geometry ≤0.75 px | Identical styles | docHeight (ref / app) |
|---|---|---|---|---|---|---|---|
| `/` | 1440 | 3799 | 100% | 100% | **100%** | 99.58% | 13869 / 13869 |
| `/` | 375 | 3543 | 100% | 100% | **100%** | 99.66% | 27678 / 27678 |
| `/docs` | 1440 | 1186 | 100% | 100% | **100%** | 100% | 22978 / 22978 |
| `/docs` | 375 | 1170 | 100% | 100% | **100%** | 100% | 31436 / 31436 |
| `/flywheel` | 1440 | 484 | 100% | 100% | **100%** | 99.59% | 6007 / 6007 |
| `/flywheel` | 375 | 478 | 100% | 100% | **100%** | 99.79% | 5547 / 5547 |
| `/profile` | 1440 | 114 | 100% | 100% | **100%** | 100% | 2094 / 2094 |
| `/profile` | 375 | 109 | 100% | 100% | **100%** | 100% | 1910 / 1910 |
| `/launch` | 1440 | 251 | 100% | 100% | **100%** | 100% | 3093 / 3093 |
| `/launch` | 375 | 245 | 100% | 100% | **100%** | 100% | 3666 / 3666 |

Pixels:

| Page | Viewport | Mean abs diff | Pixels > 8/255 | Identical |
|---|---|---|---|---|
| `/` | 1440 | 0.000 / 255 | 224 (0.001%) | 99.999% |
| `/` | 375 | 0.005 / 255 | 888 (0.009%) | 99.990% |
| `/docs` | 1440 | 0.000 / 255 | 0 | **100.000%** |
| `/t/0x3bfd…6969` | 1440 | 0.000 / 255 | 0 | **100.000%** |

## Results — token pages

The 47 `/t/<address>` pages are prerendered snapshots of the captured DOM
(see `docs/ROUTES.md` for why). Three captures of differing shape were kept in
`reference/routes/` and measured:

| Page | Viewport | Elements | Geometry ≤0.75 px | Identical styles | docHeight (ref / app) |
|---|---|---|---|---|---|
| `/t/0x3bfd…6969` (graduated, 50 trades) | 1440 | 372 | **100%** | 100% | 3027 / 3027 |
| `/t/0x3bfd…6969` | 375 | 345 | **100%** | 100% | 3445 / 3445 |
| `/t/0x1a7e…339f` (open curve, no trades) | 1440 | 285 | **100%** | 100% | 2578 / 2578 |
| `/t/0xa572…741a` | 1440 | 420 | **100%** | 100% | 3371 / 3371 |

Asset audit across all 47 pages: 93 distinct asset files referenced, 2 missing —
`2097588968703565824_cWNFSmL8_400x400.jpg` (12 references) and
`default_profile_400x400.png` (4 references). Both are `404` upstream on the live
site as well, and neither is in the archive; the reference itself therefore
renders those avatars blank.

## Residual differences (known, not defects)

- **Style-level rounding on flex rows.** 16 elements on `/` and 2 on `/flywheel`
  report `margin` values that differ by 0.031 px where the browser resolves
  `margin-left:auto`. Geometry is unaffected (100% within 0.75 px).
- **Landing-page text antialiasing.** The 224 / 888 differing pixels on the
  landing page are glyph rasterisation on four timestamp spans; three mobile
  clusters correspond to the two missing upstream avatars above.
- **`compare.py` does not compare text content.** A text dump diff shows
  whitespace-only differences (JSX collapses inter-element whitespace), no
  content differences. Tooling gap, tracked in the review notes.

## Reproducing

```sh
npm run build                       # dist/ is the candidate
python3 tools/build_route_pages.py  # offline reference copies
python3 tools/measure.py --root <dir> --path <path> --out <json> --width 1440 --height 900 --variant .vdl
python3 tools/compare.py <ref.json> <cand.json> --worst 10
```

The app is served from `dist/`; the rewrite in `vercel.json` serves
`index.html` for the four ported routes and leaves `t/` to the filesystem so the
prerendered token pages are served directly.
