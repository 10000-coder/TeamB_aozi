import { useCallback, useEffect, useRef, useState } from 'react';

/** Canonical token pages live on the real site; the clone links out to them. */
const ORIGIN = 'https://www.aozi.family';

function external(href: string) {
  return href.startsWith('/') ? ORIGIN + href : href;
}

/**
 * Behaviour for the ported static chrome: the theme button, the copy-contract
 * button and the clickable coin cards / X posts. Delegating from one listener
 * keeps the generated markup byte-identical to the reference.
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

      const link = target.closest<HTMLElement>('[data-href]');
      if (!link) return;
      // Let real anchors (Buy buttons, nav) keep their default behaviour.
      if (target.closest('a[href]')) return;
      const href = link.dataset.href ?? '';
      if (!href) return;
      const url = external(href);
      if (link.getAttribute('role') === 'link') window.open(url, '_blank', 'noopener');
      else window.location.href = url;
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
