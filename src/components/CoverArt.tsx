import { onImgErrorHide } from '../lib/img';
import { sx } from '../lib/sx';
import type { CoinFields } from '../types';

const LAYER = 'position:absolute;inset:0';
const COVER_IMG = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block';

export type CoverCoin = Pick<
  CoinFields,
  'coverGradient' | 'coverLabel' | 'coverFontSize' | 'coverImage'
>;

/**
 * A coin's artwork: a tinted gradient plate with the ticker set in SVG text and
 * the cover image layered on top (hidden on load failure, as in the reference).
 */
export function CoverArt({ coin, imgStyle = COVER_IMG }: { coin: CoverCoin; imgStyle?: string }) {
  return (
    <div style={sx(LAYER)}>
      <div style={sx(`${LAYER};background:${coin.coverGradient}`)}>
        <svg
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
          style={sx(`${LAYER};width:100%;height:100%;display:block`)}
          viewBox="0 0 100 100"
        >
          <text
            dominantBaseline="middle"
            fill="#0f4d46"
            fillOpacity=".7"
            fontFamily="Geist, system-ui, sans-serif"
            fontSize={coin.coverFontSize}
            fontWeight="700"
            letterSpacing="-0.5"
            textAnchor="middle"
            x="50"
            y="52"
          >
            {coin.coverLabel}
          </text>
        </svg>
      </div>
      <img alt="" loading="lazy" onError={onImgErrorHide} src={coin.coverImage} style={sx(imgStyle)} />
    </div>
  );
}
