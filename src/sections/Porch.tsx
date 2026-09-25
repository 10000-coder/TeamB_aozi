import { PorchPost } from '../components/PorchPost';
import { sx } from '../lib/sx';
import { variantKey, type PorchThread, type Theme, type Variant } from '../types';
import { PorchHeadVmD, PorchHeadVmL } from './static/PorchHead';
import { PorchLeftVdD, PorchLeftVdL } from './static/PorchLeft';

const REPLY = 'position:relative;margin-top:14px';

function Thread({ thread, variant, theme }: { thread: PorchThread; variant: Variant; theme: Theme }) {
  const k = variantKey(variant, theme);
  const [first, ...rest] = thread.posts;
  return (
    <div style={sx(thread.cardStyle[k])}>
      {thread.badge && (
        <div style={sx(thread.badge.wrapStyle[k])}>
          <span style={sx(thread.badge.style[k])}>{thread.badge.label}</span>
        </div>
      )}
      <div style={sx('position:relative')}>
        <PorchPost post={first} variant={variant} theme={theme} />
        <div style={sx(thread.connector[k])} />
      </div>
      {rest.map((p, i) => (
        <div key={i} style={sx(REPLY)}>
          <PorchPost post={p} variant={variant} theme={theme} />
        </div>
      ))}
    </div>
  );
}

/**
 * Porch talk. On desktop a sticky intro column (with the mascot) sits beside the
 * thread column; on mobile the intro becomes a header above a single-column list.
 */
export function Porch({
  threads,
  variant,
  theme,
}: {
  threads: PorchThread[];
  variant: Variant;
  theme: Theme;
}) {
  if (variant === 'vd') {
    return (
      <div id="porch" data-anchor="porch">
        <div style={sx('max-width:1440px;margin:0 auto;padding:0 56px;')}>
          <div
            style={sx(
              'display:grid;grid-template-columns:minmax(0, 0.9fr) minmax(0, 1.25fr);gap:72px;align-items:start',
            )}
          >
            {theme === 'dark' ? <PorchLeftVdD /> : <PorchLeftVdL />}
            <div style={sx('display:flex;flex-direction:column;gap:22px')}>
              {threads.map((t, i) => (
                <Thread key={i} thread={t} variant={variant} theme={theme} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div id="porch" data-anchor="porch">
      <div style={sx('max-width:1440px;margin:0 auto;padding:0 16px;')}>
        {theme === 'dark' ? <PorchHeadVmD /> : <PorchHeadVmL />}
        <div style={sx('display:flex;flex-direction:column;gap:18px')}>
          {threads.map((t, i) => (
            <Thread key={i} thread={t} variant={variant} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
}
