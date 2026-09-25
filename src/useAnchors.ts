import { useEffect } from 'react';
import { NAVIGATE_EVENT, type Loc } from './useLocation';

/**
 * The reference marks its scroll targets with `data-anchor` (the coin board is
 * `data-anchor="coins"`, the timeline `data-anchor="porch"`, every docs section
 * its own slug) and resolves `#hash` links against those markers. It has no
 * `id` attributes anywhere, so the port must do the same to stay DOM-identical.
 */
function target(hash: string): Element | null {
  const name = decodeURIComponent(hash.replace(/^#/, ''));
  if (!name) return null;
  return document.querySelector('[data-anchor="' + name.replace(/["\\]/g, '') + '"]');
}

export function useAnchors(loc: Loc) {
  useEffect(() => {
    const go = () => {
      const el = target(window.location.hash);
      if (el) el.scrollIntoView({ block: 'start' });
      else window.scrollTo(0, 0);
    };
    go();
    window.addEventListener(NAVIGATE_EVENT, go);
    window.addEventListener('hashchange', go);
    return () => {
      window.removeEventListener(NAVIGATE_EVENT, go);
      window.removeEventListener('hashchange', go);
    };
  }, [loc.path, loc.hash]);
}
