import { cardTemplates } from '../data';
import { sx } from '../lib/sx';
import type { Coin, Theme, Variant } from '../types';
import { CoverArt } from './CoverArt';
import { Home, User, XGrey } from './Icons';
import { PayIcon } from './PayIcon';
import { Segments } from './Segments';

export function CoinCard({ coin, variant, theme }: { coin: Coin; variant: Variant; theme: Theme }) {
  const c = theme === 'dark' ? coin.dark : coin;
  const t = cardTemplates[theme];
  const av = c.creatorAvatar;
  const coverHeight = coin.coverHeight[variant];

  return (
    <div
      className="coin lift"
      data-href={c.href}
      style={sx(
        `${t.rootPrefix}background:${c.cardBackground};box-shadow:${c.cardShadow};` +
          'overflow:hidden;display:flex;flex-direction:column',
      )}
    >
      <div className="coin-img" style={sx(`${t.imgWrap};height:${coverHeight}`)}>
        <CoverArt coin={c} />

        <div style={sx(t.badgesRow)}>
          {c.badges.map((b) => (
            <span key={b.kind} style={sx(b.style)}>
              {b.kind === 'live' && <span className="live-dot" />}
              {b.kind === 'house' && (
                <Home width={13} height={13} strokeWidth={2.2} style={{ display: 'block', flex: 'none' }} />
              )}
              {b.label}
            </span>
          ))}
        </div>

        <div style={sx(t.mcapWrap)}>
          <span style={sx(c.mcapStyle)}>
            <span className="num">{c.mcap}</span>
            <span style={sx(t.mcapLabel)}>mcap</span>
          </span>
        </div>

        <a className="b b1 qb" href={c.href} style={sx(t.buyBtn)}>
          {c.buyLabel}
        </a>
      </div>

      <div style={sx(t.bodyRow)}>
        <div style={sx(t.titleRow)}>
          <div style={sx(t.titleBlock)}>
            <div style={sx(t.name)}>{c.name}</div>
            <div style={sx(t.nameTicker)}>{c.nameTicker}</div>
          </div>
          <span className="num" style={sx(t.repliesWrap)}>
            <User width={14} height={14} style={{ display: 'block', flex: 'none' }} />
            {c.replies}
          </span>
        </div>

        <div style={sx(t.quoteRow)}>
          {av.kind === 'image' ? (
            <img
              alt=""
              loading="lazy"
              onError={(e) => e.currentTarget.removeAttribute('src')}
              src={av.src ?? undefined}
              style={sx(av.style ?? '')}
            />
          ) : (
            <span style={sx(av.style ?? '')}>
              {av.img && <img alt="" src={av.img} style={sx(av.imgStyle ?? '')} />}
            </span>
          )}
          <div style={sx(t.quoteBody)}>
            <div style={sx(t.creatorHeadRow)}>
              <b style={sx(t.creatorName)}>{c.creatorName}</b>
              <span style={sx(t.creatorRole)}>{c.creatorRole}</span>
              <span style={sx(t.xWrap)}>
                <XGrey width={12} height={12} style={{ display: 'block', flex: 'none' }} />
              </span>
            </div>
            <div style={sx(t.tweetText)}>
              <Segments parts={c.tweetText} />
            </div>
          </div>
        </div>

        <div style={sx(t.progWrap)}>
          <div style={sx(t.progHead)}>
            <span style={sx(t.progLabel)}>{c.progress.label}</span>
            <span className="num" style={sx(t.progRange)}>
              {c.progress.range}
            </span>
          </div>
          <div style={sx(t.barTrack)}>
            <div style={sx(`width:${c.progress.width};background:${c.progress.gradient};${t.barFillTail}`)} />
          </div>
        </div>

        <div style={sx(t.footRow)}>
          <span className="num" style={sx(t.priceWrap)}>
            {c.price.head}
            <sub style={sx('font-size:.64em;vertical-align:-.28em;line-height:0;margin:0 .06em')}>{c.price.sub}</sub>
            {c.price.tail}{' '}
            <span style={sx(t.priceUnit)}>{c.price.unit}</span>
          </span>
          <span style={sx(t.payWrap)}>
            pay with
            <PayIcon icon={c.payWith.icon} />
          </span>
        </div>
      </div>
    </div>
  );
}
