import { useMemo, useState } from 'react';
import { CoinCard } from '../components/CoinCard';
import { boardTemplates, coins as allCoins } from '../data';
import { sx } from '../lib/sx';
import { variantKey, type Coin, type Theme, type Variant } from '../types';
import { TrendingVdD, TrendingVdL, TrendingVmD, TrendingVmL } from './static/Trending';

type SortKey = 'new' | 'hot' | 'top';

const SORTS: { key: SortKey; label: string }[] = [
  { key: 'new', label: 'Newest' },
  { key: 'hot', label: 'Most active' },
  { key: 'top', label: 'Biggest' },
];

/** first number inside a string such as "1.68 ETH" / "3.80 SPY". */
function num(value: string): number {
  const m = value.match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : 0;
}

function sortCoins(coins: Coin[], key: SortKey): Coin[] {
  const list = coins.slice();
  if (key === 'new') return list; // board order is the captured (newest-first) order
  if (key === 'hot') {
    return list.sort(
      (a, b) => num(b.dark.replies) - num(a.dark.replies) || b.ticker.localeCompare(a.ticker),
    );
  }
  return list.sort((a, b) => num(b.mcap) - num(a.mcap));
}

/**
 * "Launched by aozi": the sort tabs, the coin grid and the Trending on Pons
 * block, which shares this section's container in the reference.
 */
export function CoinBoard({
  coins,
  variant,
  theme,
}: {
  coins: Coin[];
  variant: Variant;
  theme: Theme;
}) {
  const [sort, setSort] = useState<SortKey>('new');
  const ordered = useMemo(() => sortCoins(coins, sort), [coins, sort]);
  const t = boardTemplates[variantKey(variant, theme)];
  const isDesktop = variant === 'vd';

  return (
    <div id="coins" data-anchor="coins">
      <div style={sx(t.container)}>
        <div data-board="" data-source="aozi" data-sort={sort} data-all="1">
          <div style={sx(t.head)}>
            <div>
              <h2 className="serif" style={sx(t.h2)}>
                Launched by <em>aozi</em>
              </h2>
              <p style={sx(t.titleP)}>Straight from a post on X. Nothing else gets on this list.</p>
            </div>
            <div aria-label="Sort coins" role="group" style={sx(t.sortGroup)}>
              {SORTS.map((s) => (
                <button
                  key={s.key}
                  aria-pressed={sort === s.key}
                  className="lv-tab"
                  data-sort-by={s.key}
                  onClick={() => setSort(s.key)}
                  type="button"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <div data-grid="" style={sx(t.grid)}>
            {ordered.map((c) => (
              <CoinCard key={c.address} coin={c} variant={variant} theme={theme} />
            ))}
          </div>
        </div>
        <div style={sx(t.spacer)} />
        {isDesktop ? (
          theme === 'dark' ? (
            <TrendingVdD />
          ) : (
            <TrendingVdL />
          )
        ) : theme === 'dark' ? (
          <TrendingVmD />
        ) : (
          <TrendingVmL />
        )}
      </div>
    </div>
  );
}

export { allCoins };
