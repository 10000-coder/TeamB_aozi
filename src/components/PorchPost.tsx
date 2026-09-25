import { postTemplates } from '../data';
import { sx } from '../lib/sx';
import { variantKey, type PorchMedia, type PorchPostData, type Theme, type Variant } from '../types';
import { Dots, Robot } from './Icons';
import { Segments } from './Segments';

/** The attached "coin launched" card: the house art with the coin showing
 *  through its window, plus a caption strip. */
function LaunchCard({ media }: { media: PorchMedia }) {
  return (
    <div style={sx(media.wrapperStyle)}>
      <div style={sx(media.frameStyle)}>
        <div style={sx(media.centerStyle)}>
          <div style={sx(media.houseStyle)}>
            <img
              alt=""
              src={media.house}
              style={sx('position:absolute;inset:0;width:100%;height:100%;display:block')}
            />
            <div style={sx(media.windowStyle)}>
              <div style={sx('position:absolute;inset:0')}>
                <div style={sx(`position:absolute;inset:0;background:${media.windowGradient}`)}>
                  <svg
                    aria-hidden="true"
                    preserveAspectRatio="xMidYMid meet"
                    style={sx('position:absolute;inset:0;width:100%;height:100%;display:block')}
                    viewBox="0 0 100 100"
                  >
                    <text
                      dominantBaseline="middle"
                      fill="#0f4d46"
                      fillOpacity=".7"
                      fontFamily="Geist, system-ui, sans-serif"
                      fontSize={media.labelFontSize ?? undefined}
                      fontWeight="700"
                      letterSpacing="-0.5"
                      textAnchor="middle"
                      x="50"
                      y="52"
                    >
                      {media.label}
                    </text>
                  </svg>
                </div>
                {media.cover && (
                  <img
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    src={media.cover}
                    style={sx(media.coverStyle ?? '')}
                  />
                )}
              </div>
              <div style={sx(media.glossStyle)} />
            </div>
          </div>
        </div>
        <span style={sx(media.captionStyle)}>{media.caption}</span>
      </div>
      <div style={sx(media.footerStyle)}>{media.footer}</div>
    </div>
  );
}

export function PorchPost({
  post,
  variant,
  theme,
}: {
  post: PorchPostData;
  variant: Variant;
  theme: Theme;
}) {
  const k = variantKey(variant, theme);
  const p = theme === 'dark' ? post.dark : post;
  const t = postTemplates[k];
  const media = post.media[k];

  return (
    <div aria-label="Open this post on X" data-href={p.url} role="link" tabIndex={0} style={sx(t.wrapper)}>
      <div style={sx(t.row)}>
        {p.avatar.kind === 'image' ? (
          <img
            alt=""
            loading="lazy"
            onError={(e) => e.currentTarget.removeAttribute('src')}
            src={p.avatar.src ?? undefined}
            style={sx(p.avatar.style ?? t.avatarImg ?? '')}
          />
        ) : (
          <span style={sx(p.avatar.style ?? t.avatarWrap ?? '')}>
            {p.avatar.img && <img alt="" src={p.avatar.img} style={sx(p.avatar.imgStyle ?? '')} />}
          </span>
        )}
        <div style={sx(t.body)}>
          <div style={sx(t.headRow)}>
            <span style={sx(t.author)}>{p.author}</span>
            <span style={sx(t.handle)}>
              {p.handle} · {p.time}
            </span>
            <span style={sx(t.dotsWrap ?? '')}>
              <Dots width={17} height={17} style={{ display: 'block', flex: 'none' }} />
            </span>
          </div>
          {p.automated && (
            <div style={sx(t.automatedRow ?? '')}>
              <Robot width={14} height={14} style={{ display: 'block', flex: 'none' }} />
              Automated
            </div>
          )}
          <div style={sx(t.text)}>
            <Segments parts={p.text} />
          </div>
          {media && <LaunchCard media={media} />}
        </div>
      </div>
    </div>
  );
}
