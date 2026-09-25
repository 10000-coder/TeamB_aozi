# Verification — how the replica was checked

The rule for this project: **no fidelity claim without a measurement**. A result
is only accepted when it comes from comparing the real page against the port,
not from looking at a screenshot and judging.

## The baseline problem

The live site cannot be reached from the build container, and the first pass of
screenshots turned out to be unusable (they had been stitched with a CSS-pixel
step against device-pixel-ratio-2 segment heights, so the full-page images were
vertically squashed 2x, and the "reference" pair was 1536×643 for both a desktop
and a mobile shot — i.e. not reference material at all).

So the baseline is rebuilt from the captured hydrated DOM:

* `tools/build_reference_page.py` writes `shared/aozi_reference/site/index.html`
  — the captured DOM with the framework scripts removed, the two real
  stylesheets inlined, and remote image URLs rewritten to the archived assets.
  It renders offline and is byte-equivalent to what the live page painted.
* `tools/restitch.py` rebuilds correct full-page images from the fetcher's
  untouched viewport segments.

Both a reference and a candidate page are then measured with the same code, so
every comparison is apples to apples.

## Method 1 — structural + geometric diff

`tools/measure.py` walks every element of the active layout and records its tag,
its class list, its bounding box (0.1px resolution) and 27 computed style
properties. `tools/compare.py` aligns the two element lists by document order
and reports match rates and the worst offenders; `tools/struct_div.py` and
`tools/first_shift.py` locate the first structural divergence or vertical shift.

`--freeze` disables CSS animations before measuring: the page has a drifting
background (`skin-drift`), a pausable typing animation in the hero mock
(`fT1/fT2/fT3`) and hover transitions, which would otherwise be sampled at
different animation phases and produce false differences.

## Method 2 — pixel diff

`tools/shoot.py` captures a full-page image by scrolling viewport frames and
stitching them at the correct stride (Chrome's own full-page capture crashes on
these documents). `tools/pixel_diff.py` compares two images in horizontal bands
and reports mean absolute difference, the share of pixel-identical pixels and a
band histogram of the differences.

## Results

Latest run, candidate = `dist/` production build, reference = the offline page
built from the captured DOM. Elements are counted inside the active layout root.

| Layout | Elements | Tag | Class | Geometry ≤0.75px | Styles identical | Mean pixel Δ | Pixel-identical |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Desktop 1440 light | 3799 / 3799 | 100% | 100% | 100% | 99.58% | 0.000/255 | 99.999% |
| Desktop 1440 dark | 3800 / 3800 | 100% | 100% | 100% | 99.58% | — | — |
| Mobile 375 light | 3543 / 3543 | 100% | 100% | 100% | 99.66% | 0.005/255 | 99.990% |
| Mobile 375 dark | 3544 / 3544 | 100% | 100% | 100% | 99.66% | — | — |

Residual differences, all sub-pixel and non-visual:

* **styles 99.6%** — the remaining 16 elements per layout differ only in
  `margin-left` values resolved by `auto` in a flex row (`419.547px` vs
  `419.531px`), i.e. 1/64 px of layout rounding.
* **pixels 99.99%** — the 224 differing pixels (desktop) and 888 (mobile) are
  text antialiasing on a handful of glyph edges; mean absolute difference is
  0.000/255 and 0.005/255.

## What had to be corrected during verification

The measuring loop caught real defects that a visual skim would have missed:

1. the coin card's market-cap chip rendered `3.80 SPYmcap` (the extractor grabbed
   the wrapper span instead of the `.num` child);
2. `$APPLE` uses a third "pay with" mark — an initial chip, not the ETH glyph;
3. price rows need a literal space before the unit span (`0.0838 SPY`), which JSX
   strips between an expression and an element;
4. thread cards are `<div>`, not `<article>`, and carry a "Launched" pill plus a
   2px connector spine;
5. the mobile attachment frame is 124px tall with a 126.48px house, not the
   desktop 160px / 163.2px;
6. the hero mascot's drop shadow scales with its size (78px mascot → 6px/8px,
   150px → 12px/15px);
7. dark mode is separate markup with its own inline colours, and its theme
   button uses a sun glyph instead of the moon — so it needed its own data pass.
