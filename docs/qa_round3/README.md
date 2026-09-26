# Round 3 residual evidence

Inspected by `TeamB_qa` (independent reproduction) and by the orchestrator. These
are the crops behind the residual-pixel numbers in `docs/VERIFICATION.md` §Pixels
and `docs/VISUAL_REVIEW.md` (Round 3).

## Committed here

| File | Size | What it shows |
|---|---|---|
| `mobile_avatar_1.png` | 3.9 KB | 6× crop of mobile-light cluster 1 (the avatar box of a card whose avatar is a missing upstream file) |
| `mobile_avatar_2.png` | 4.0 KB | same, cluster 2 |
| `mobile_avatar_3.png` | 4.0 KB | same, cluster 3 |
| `mobile_light_avatar_spots.png` | 22 KB | 4× side-by-side, reference (left) vs candidate (right), for all four affected avatar boxes |
| `desktop_glyph_1.png` … `_4.png` | 3.5–4.2 KB | the four 8×11 desktop residual blocks, all on `@KingNavid_ · 1Xh` timestamp spans (glyph snapping; `_3` and `_4` are byte-identical) |

Reference side is the offline copy of the captured DOM; candidate side is the
production build. Left column = reference, right = candidate.

## Deliberately not committed

| File | Size | Dimensions | Why |
|---|---|---|---|
| `heatmap_1440.png` | 3.45 MB | 1440 × 13869 | full-resolution diff map; excluded to keep the repo small |
| `heatmap_375.png` | 2.42 MB | 375 × 27678 | same |

Both are **deterministically regenerable** from committed inputs (the captures
are byte-identical across repeated runs — md5-checked during review), by
`tools/pixel_diff.py --diff`, which writes exactly this heat format:

```sh
# reference side (offline copy of the captured DOM)
python3 tools/shoot.py --root shared/aozi_reference/site --width 1440 --theme light \
    --variant '.vdl' --out /tmp/ref1440.png --absolute-bg --freeze
# candidate side (production build)
python3 tools/shoot.py --root dist --width 1440 --theme light \
    --variant '.v' --out /tmp/cand1440.png --absolute-bg --freeze
python3 tools/pixel_diff.py /tmp/ref1440.png /tmp/cand1440.png \
    --diff docs/qa_round3/heatmap_1440.png --label 1440
```

Mobile uses `--width 375 --height 812`, variant `.vml` for the reference and
`.v` for the candidate.

## What the evidence established

- Desktop residual: 224 px over 8/255, all four blocks glyph-level (max Δ 45/255).
- Mobile residual: 888 px over 8/255; **264 of them are not antialiasing** — three
  identical 88-px clusters inside 16×16 avatar boxes, max channel Δ 190/255,
  at doc rows 17444 / 17908 / 19284, x 38–53.
- Those clusters sit on the four cards whose avatar `src` points at the two
  upstream-404 files (`2097588968703565824_cWNFSmL8_400x400.jpg`, referenced by
  CHINA1 / STRAWNANA / STRAWBERRY dark variants, and `default_profile_400x400.png`
  for SQUID). In the reference copy that box paints 167–601 distinct colours
  (a real image); in the candidate it is the flat `#e2f1f6` placeholder.
- Both pages expose an **identical** `<img>` at those boxes (no `src`,
  `naturalWidth 0`, same box and styles) — so the difference cannot be attributed
  from the DOM alone. Ruled out: stitching artifact (single-viewport capture
  reproduces it), stale paint (forced repaint does not change either side),
  capture noise (repeat captures are byte-identical).
- Open: whether the live site paints a real avatar there. Needs a browser with
  egress; the local box has no egress and the Composio sandbox has no Chromium.
