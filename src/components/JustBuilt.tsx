import { coins } from '../data';
import { sx } from '../lib/sx';
import type { HeroStrip, Theme } from '../types';
import { CoverArt } from './CoverArt';

/** The hero's "Just built" chip strip — the only dynamic part of the hero. */
export function JustBuilt({ strip, theme }: { strip: HeroStrip; theme: Theme }) {
  return (
    <>
      {strip.chips.map((chip) => {
        const coin = coins.find((c) => c.href === chip.href);
        if (!coin) return null;
        return (
          <a key={chip.href} className="lift" href={chip.href} style={sx(chip.style)}>
            <div style={sx(strip.coverWrapStyle)}>
              <CoverArt coin={theme === 'dark' ? coin.dark : coin} />
            </div>
            {chip.label}
            <span className="num" style={sx(strip.percentStyle)}>
              {chip.percent}
            </span>
          </a>
        );
      })}
    </>
  );
}
