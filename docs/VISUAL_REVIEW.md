# Visual Review — Round 3 (reproduction run)

Status: **reproduced, with one characterisation disagreement** (see §4).
Earlier rounds' fidelity score (96.8%) is withdrawn per TeamB_main; this document
contains measurements only, no scored verdict.

Environment: Playwright/Chromium headless, `device_scale_factor=1`, `--theme light`,
`--freeze` (animations disabled before measurement), reference = offline rebuild of
the captured hydrated DOM (`shared/aozi_reference/site`), candidate =
`shared/TeamB_aozi/dist` production build. Each page served over local HTTP.

---

## 1. Raw command output

### 1.1 Desktop 1440×900 — geometry

```
$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/measure.py --root shared/aozi_reference/site \
    --out /tmp/qa_ref1440.json --width 1440 --height 900 --dpr 1 --theme light --variant '.vdl' --freeze
measure -> /tmp/qa_ref1440.json elements: 3799 docHeight: 13869 docWidth: 1440

$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/measure.py --root shared/TeamB_aozi/dist \
    --out /tmp/qa_app1440.json --width 1440 --height 900 --dpr 1 --theme light --variant '.v' --freeze
measure -> /tmp/qa_app1440.json elements: 3799 docHeight: 13869 docWidth: 1440

$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/compare.py /tmp/qa_ref1440.json /tmp/qa_app1440.json --worst 10
ref  elements=3799 docHeight=13869 docWidth=1440
cand elements=3799 docHeight=13869 docWidth=1440
aligned          : 3799 / 3799
tag match        : 100.00%
class match      : 100.00%
rect within 0.75px : 100.00%  (3799/3799)
styles identical : 99.58%  (3783/3799)

--- worst geometry drift ---
(empty)

--- worst style drift ---
1 prop(s) div > div > div > div > div > div
        margin             ref=0px 0px 0px 419.547px cand=0px 0px 0px 419.531px
1 prop(s) div > div > div > div > div > div
        margin             ref=0px 0px 0px 482.078px cand=0px 0px 0px 482.047px
1 prop(s) div > div > div > div > div > div
        margin             ref=0px 0px 0px 338.016px cand=0px 0px 0px 338px
   (14 further entries in the same pattern; all `margin` on `auto`-resolved flex rows,
    worst absolute delta 0.031px)
```

### 1.2 Mobile 375×812 — geometry

```
$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/measure.py --root shared/aozi_reference/site \
    --out /tmp/qa_ref375.json --width 375 --height 812 --dpr 1 --theme light --variant '.vml' --freeze
measure -> /tmp/qa_ref375.json elements: 3543 docHeight: 27678 docWidth: 375

$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/measure.py --root shared/TeamB_aozi/dist \
    --out /tmp/qa_app375.json --width 375 --height 812 --dpr 1 --theme light --variant '.vml' --freeze
measure -> /tmp/qa_app375.json elements: 3543 docHeight: 27678 docWidth: 375

$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/compare.py /tmp/qa_ref375.json /tmp/qa_app375.json --worst 10
ref  elements=3543 docHeight=27678 docWidth=375
cand elements=3543 docHeight=27678 docWidth=375
aligned          : 3543 / 3543
tag match        : 100.00%
class match      : 100.00%
rect within 0.75px : 100.00%  (3543/3543)
styles identical : 99.66%  (3531/3543)

--- worst geometry drift ---
(empty)

--- worst style drift ---
1 prop(s) div > div > div > div > div > div
        margin             ref=0px 0px 0px 44.3281px cand=0px 0px 0px 44.3125px
1 prop(s) div > div > div > div > div > div
        margin             ref=0px 0px 0px 106.859px cand=0px 0px 0px 106.828px
   (11 further entries in the same pattern, worst absolute delta 0.031px)
```

### 1.3 Desktop — pixels

```
$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/shoot.py --root shared/TeamB_aozi/dist \
    --width 1440 --theme light --variant '.v' --out /tmp/qa_app.png --absolute-bg --freeze
shot -> /tmp/qa_app.png (1440, 13869) 9892304

$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/shoot.py --root shared/aozi_reference/site \
    --width 1440 --theme light --variant '.vdl' --out /tmp/qa_ref.png --absolute-bg --freeze
shot -> /tmp/qa_ref.png (1440, 13869) 9892300

$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/pixel_diff.py /tmp/qa_ref.png /tmp/qa_app.png --label qa-1440
qa-1440  ref=(1440, 13869) cand=(1440, 13869)
   mean abs diff  : 0.000 / 255
   pixels > 8/255 : 224 (0.001%)
   identical      : 99.999%
   band range with diffs: rows 10000..11200 (of 13869), worst band peak 112 px
```

### 1.4 Mobile — pixels

```
$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/shoot.py --root shared/TeamB_aozi/dist \
    --width 375 --height 812 --theme light --variant '.vml' --out /tmp/qa_app375.png --absolute-bg --freeze
shot -> /tmp/qa_app375.png (375, 27678) 6060225

$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/shoot.py --root shared/aozi_reference/site \
    --width 375 --height 812 --theme light --variant '.vml' --out /tmp/qa_ref375.png --absolute-bg --freeze
shot -> /tmp/qa_ref375.png (375, 27678) 6061428

$ python3 bots/cmuf1u390004c2ko2cge57dyz/tools/pixel_diff.py /tmp/qa_ref375.png /tmp/qa_app375.png --label qa-375
qa-375  ref=(375, 27678) cand=(375, 27678)
   mean abs diff  : 0.005 / 255
   pixels > 8/255 : 888 (0.009%)
   identical      : 99.990%
   band range with diffs: rows 17200..26000 (of 27678), worst band peak 217 px
```

All four command groups ran without error.

---

## 2. Determinism check (not part of VERIFICATION.md)

Each side captured twice, independently:

```
cand run1 md5 ec074e034097b3ea21838eb7706b2053
cand run2 md5 ec074e034097b3ea21838eb7706b2053   -> byte-identical
ref  run1 md5 b1e2bdc3c0e7a2849db21251e3eba68c
ref  run2 md5 b1e2bdc3c0e7a2849db21251e3eba68c   -> byte-identical
```

Both captures are deterministic, so the residual pixel differences below are not
sampling noise from animation or paint timing.

---

## 3. What the residual pixels actually are (independent decomposition)

Banded diff with a higher threshold (page decomposed into 400/500px strips):

| Layout | any Δ>0 | Δ>8 | Δ>32 | Δ>64 | Δ>128 | max Δ |
| --- | --- | --- | --- | --- | --- | --- |
| 1440×13869 (19,971,360 px) | 236 | 224 | 76 | 0 | 0 | 45 |
| 375×27678 (10,379,250 px) | 1012 | 888 | 509 | 264 | 90 | 190 |

### 3.1 Desktop 1440 — consistent with glyph antialiasing

All 224 pixels sit in four identical 8×11 blocks, 184px apart:

```
y 10387..10397 x 997..1004  n=56  maxdelta=45
y 10571..10581 x 997..1004  n=56  maxdelta=45
y 10755..10765 x 997..1004  n=56  maxdelta=45
y 10939..10949 x 997..1004  n=56  maxdelta=45
```

Each block is the tail glyph of a timestamp span (`@KingNavid_ · 18h` / `· 19h`).
Those spans have identical text and identical computed styles except the resolved
inline width:

```
idx 3408  span  rect=[874.7, 10384.4, 130.3, 17]  text '@KingNavid_ · 18h'
   width  ref=130.312px   cand=130.328px   (Δ 0.016px)
```

A 1/64px inline-width difference moves the last glyph across a pixel-snapping
boundary; the resulting AA change is bounded by max Δ 45/255 on a light background.
This matches VERIFICATION.md's desktop explanation.

### 3.2 Mobile 375 — 264 of the 888 pixels are NOT antialiasing

The mobile residual contains three identical clusters of 88 px each (16×16 box),
far above antialiasing magnitude:

```
cluster 0: n=88  y 17444..17459  x 38..53  maxdelta=190
cluster 1: n=88  y 17908..17923  x 38..53  maxdelta=190
cluster 2: n=88  y 19284..19299  x 38..53  maxdelta=190
```

Evidence that this is a real rendering difference and not a capture artifact:

1. **Not stitching.** A direct single-viewport capture (scroll + `clip`, no frame
   stitching) reproduces it. Same numbers at all three positions.
2. **Not stale paint.** A forced repaint (hide/show `documentElement`, rescroll)
   reproduces the same pixels; `ref plain == ref forced repaint` was True.
3. **Content, not noise.** In the same 44×44 region: reference = 167 distinct
   colours including a 24px green blob `(88,174,57)`; candidate = 36 distinct
   colours, i.e. the flat placeholder `#e2f1f6` and nothing else.

Artifacts (left = reference, right = candidate, 6× nearest-neighbour):
`docs/qa_round3/mobile_avatar_1.png`, `mobile_avatar_2.png`, `mobile_avatar_3.png`,
plus full heatmaps `heatmap_1440.png`, `heatmap_375.png`.

**What I could not establish.** Both pages expose, at each of those three boxes,
exactly one `<img>` with an inline `background:#e2f1f6` / `26×26` / `border-radius:50%`,
**no `src` attribute** and `naturalWidth = 0` (audit: 132 `<img>` per page, 128 loaded,
4 with empty src at the same four rects in both). Element stacks
(`elementsFromPoint`), element-by-element box containment scans (including
`::before`/`::after`), and the recorded rect/style lists agree element-for-element at
that point. I therefore could not attribute the visible content in the reference to a
specific element from the DOM alone, so the mechanism remains open — but the pixel
difference is real and reproducible.

Adjacent build-level observation (link not confirmed): the reference page issues one
request the candidate never issues —

```
reference 404: twimg/2097588968703565824_cWNFSmL8_400x400.jpg, twimg/default_profile_400x400.png
candidate 404: twimg/default_profile_400x400.png
```

That URL appears 10× in `shared/aozi_reference/site/index.html`, is absent from
`shared/aozi_reference/site/twimg/` (hence 404 + the page's own
`onerror="this.removeAttribute('src')"`), and is present in the candidate bundle
(`dist/assets/index-eF83eaR9.js`). Worth checking against the three affected coin
cards on the mobile board (document y ≈ 17442, 17906, 19282 at 375px).

---

## 4. Disagreement with docs/VERIFICATION.md

Every headline **number** in `docs/VERIFICATION.md` reproduced exactly:

| Metric | VERIFICATION.md | This run | Agreement |
| --- | --- | --- | --- |
| Desktop elements | 3799 / 3799 | 3799 / 3799 | ✅ |
| Desktop geometry ≤0.75px | 100% | 100.00% (3799/3799) | ✅ |
| Desktop styles identical | 99.58% | 99.58% (3783/3799) | ✅ |
| Desktop mean pixel Δ | 0.000/255 | 0.000/255 | ✅ |
| Desktop pixels >8/255 | 224 | 224 (0.001%) | ✅ |
| Desktop pixel-identical | 99.999% | 99.999% | ✅ |
| Mobile elements | 3543 / 3543 | 3543 / 3543 | ✅ |
| Mobile geometry ≤0.75px | 100% | 100.00% (3543/3543) | ✅ |
| Mobile styles identical | 99.66% | 99.66% (3531/3543) | ✅ |
| Mobile mean pixel Δ | 0.005/255 | 0.005/255 | ✅ |
| Mobile pixels >8/255 | 888 | 888 (0.009%) | ✅ |
| Mobile pixel-identical | 99.990% | 99.990% | ✅ |
| Residual cause (desktop) | "text antialiasing on glyph edges" | confirmed | ✅ |
| Residual cause (mobile) | "text antialiasing on a handful of glyph edges" | **does not hold for 264 of the 888 px** | ⚠️ |

`docs/VERIFICATION.md` states the mobile residual is text antialiasing. 264 of those
888 pixels (three 16×16 clusters, max channel Δ 190/255, 90 px above Δ128) are a
reproducible content difference in three coin-avatar boxes; the remaining 624 px are
consistent with AA. The reported percentages are unaffected — only the explanation is
incomplete.

Also not covered by the harness: `compare.py` compares tag, class, rect and 24 style
properties but **not text content**. A text-only diff of the two dumps shows 254
(desktop) / 245 (mobile) textContent mismatches, all of them whitespace-only
(JSX drops the whitespace text nodes the captured HTML has, e.g. `'…More Post you…'`
vs `'…MorePostyou…'`). All of those elements have identical rects and styles, so
nothing reflows — but the check is currently blind to real text differences.

---

## 5. Scope of this measurement

The reference is an offline rebuild of the captured hydrated DOM with the framework
scripts removed and remote URLs rewritten to archived assets — not the live
`aozi.family`. This run therefore establishes **candidate ≡ captured DOM rendering**;
it does not establish candidate ≡ live site (the live site is unreachable from this
container). The reference rebuild itself serves two assets that are missing from its
archive (the 404s in §3.2).

## 6. Incidental tooling failures (not among the requested commands)

* A full-image numpy diff of the desktop pair was SIGKILLed (exit 137, memory); the
  banded decomposition in §3 is the working replacement, matching `pixel_diff.py`'s
  own banding strategy.
* An extra request-audit probe of the reference at 1440×900 crashed the render target
  (`TargetClosedError: Page crashed`) after a scroll loop; the same audit at 375 and
  for the candidate at 1440 completed normally. No requested measurement is affected.
