import { useCallback, useEffect, useState } from 'react';
import type { Theme } from './types';

const KEY = 'aozi-theme';

function read(): Theme {
  try {
    return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

/**
 * Theme lives on <html data-theme>, and in localStorage under `aozi-theme`,
 * exactly like the reference so the ported stylesheet keeps working verbatim.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'dark'
      : read(),
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const color = theme === 'dark' ? '#050606' : '#f4f8f6';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* storage unavailable (private mode) — theme still applies for the session */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
