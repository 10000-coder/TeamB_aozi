import { useCallback, useEffect, useRef, useState } from 'react';
import { navigate } from './useLocation';

/**
 * Behaviour for the ported static chrome: the theme button, the copy-contract
 * button and the clickable coin cards / X posts. Delegating from one listener
 * keeps the generated markup byte-identical to the reference.
 *
 * Link handling mirrors the reference's split:
 *  - the site's own routes (/docs, /flywheel, /profile, /launch, /#coins, ...)
 *    navigate client-side, the way the reference's Next.js <Link> does;
 *  - /t/<address> pages are prerendered files, so they get a real document load;
 *  - anything else (X, Pons, DexScreener) is left to the browser.
 */
export function useSiteChrome(toggleTheme: () => void) {
  const [toasts, setToasts] = useState<{ id: number; text: string }[]>([]);
  const seq = useRef(0);

  const push = useCallback((text: string) => {
    const id = ++seq.current;
    setToasts((t) => [...t, { id, text }]);
    window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const themeBtn = target.closest('[aria-label="Switch theme"]');
      if (themeBtn) {
        toggleTheme();
        return;
      }

      const copyBtn = target.closest<HTMLElement>('[data-copy]');
      if (copyBtn) {
        const address = copyBtn.dataset.copy ?? '';
        navigator.clipboard?.writeText(address).catch(() => undefined);
        push(`Copied ${address.slice(0, 6)}…${address.slice(-4)}`);
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href]');
      if (anchor) {
        const href = anchor.getAttribute('href') ?? '';
        const blank = anchor.getAttribute('target') === '_blank';
        const plainClick = event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey;
        if (href.startsWith('/') && !href.startsWith('//') && !blank && plainClick) {
          event.preventDefault();
          if (href.startsWith('/t/')) window.location.assign(href);
          else navigate(href);
        }
        return;
      }

      const link = target.closest<HTMLElement>('[data-href]');
      if (!link) return;
      const href = link.dataset.href ?? '';
      if (!href) return;
      // Coin cards point at the clone's own /t/<address> pages.
      if (href.startsWith('/')) {
        if (link.getAttribute('role') === 'link') window.open(href, '_blank', 'noopener');
        else window.location.assign(href);
        return;
      }
      if (link.getAttribute('role') === 'link') window.open(href, '_blank', 'noopener');
      else window.location.href = href;
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [push, toggleTheme]);

  return (
    <div className="lv-toasts">
      {toasts.map((t) => (
        <div key={t.id} className="lv-toast">
          {t.text}
        </div>
      ))}
    </div>
  );
}
