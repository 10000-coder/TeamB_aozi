import { sx } from '../lib/sx';

const FACE = 'position:absolute;inset:0;width:100%;height:100%;display:block';
const LAYER = 'position:absolute;inset:0';
const PUFF =
  'position:absolute;left:62%;top:4%;width:18%;height:18%;border-radius:50%;' +
  'background:radial-gradient(closest-side, rgba(255,255,255,.95), rgba(255,255,255,.4) 55%, rgba(255,255,255,0));' +
  'filter:blur(1px)';
const PUPIL = 'position:absolute;inset:0;transition:transform .25s cubic-bezier(.2,.8,.2,1)';

type Kind = 'hero' | 'porch' | 'resting';

/**
 * The aozi mascot. `hero` (looking, puffing), `porch` (larger, with mouth) and
 * `resting` (eyes closed, used in the Trending empty state) are the three
 * arrangements the reference renders.
 */
export function Mascot({
  size,
  kind = 'hero',
  shadowOverride,
}: {
  size: number;
  kind?: Kind;
  shadowOverride?: string;
}) {
  const shadow =
    shadowOverride ??
    (kind === 'porch'
      ? 'drop-shadow(0 24px 30px rgba(16,40,28,.22))'
      : kind === 'hero'
        ? 'drop-shadow(0 12px 15px rgba(16,40,28,.22))'
        : undefined);
  return (
    <div
      aria-label="aozi"
      style={sx(
        `position:relative;width:${size}px;height:${size}px;flex:none` +
          (shadow ? `;filter:${shadow}` : ''),
      )}
    >
      {kind !== 'resting' && (
        <div className={kind === 'porch' ? 'm-puff' : 'f-puff'} style={sx(PUFF)} />
      )}
      <img alt="" src="/img/m-base.webp" style={sx(FACE)} />
      {kind === 'resting' ? (
        <img alt="" src="/img/m-closed.webp" style={sx(FACE)} />
      ) : (
        <div className="m-eye" style={sx(LAYER)}>
          <div className={kind === 'hero' ? 'f-look' : undefined} style={sx(LAYER)}>
            <div data-pupil="" style={sx(PUPIL)}>
              <img alt="" src="/img/m-eyes.webp" style={sx(FACE)} />
            </div>
          </div>
        </div>
      )}
      <img alt="" src="/img/m-front.webp" style={sx(FACE)} />
      {kind === 'porch' && <img alt="" src="/img/m-mouth.webp" style={sx(FACE)} />}
    </div>
  );
}
