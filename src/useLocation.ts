import { useEffect, useState } from 'react';

/**
 * Client-side location, for the ported routes.
 *
 * The reference is a Next.js app, so its links navigate without a reload. We
 * keep that behaviour with the History API: internal `<a href="/...">` clicks
 * are turned into pushState calls, and the app re-renders per path. The Vercel
 * rewrite still serves index.html for deep links, so a hard load works too.
 */
export interface Loc {
  path: string;
  hash: string;
}

const EVENT = 'aozi:navigate';

function read(): Loc {
  return { path: window.location.pathname, hash: window.location.hash };
}

export function useLocation(): Loc {
  const [loc, setLoc] = useState<Loc>(read);

  useEffect(() => {
    const update = () => setLoc(read());
    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);
    window.addEventListener(EVENT, update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
      window.removeEventListener(EVENT, update);
    };
  }, []);

  return loc;
}

/** Replace the current entry, used when an unknown path falls back to home. */
export function replace(href: string) {
  const url = new URL(href, window.location.origin);
  window.history.replaceState({}, '', url.pathname + url.search + url.hash);
  window.dispatchEvent(new Event(EVENT));
}

export function navigate(href: string) {
  const url = new URL(href, window.location.origin);
  if (url.pathname === window.location.pathname && url.search === window.location.search
      && url.hash === window.location.hash) {
    // same target — still re-run the anchor scroll so the click always lands
    window.dispatchEvent(new Event(EVENT));
    return;
  }
  window.history.pushState({}, '', url.pathname + url.search + url.hash);
  window.dispatchEvent(new Event(EVENT));
}

export { EVENT as NAVIGATE_EVENT };
