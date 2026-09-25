import type { SyntheticEvent } from 'react';

/** Mirrors the reference markup's `onerror="this.style.display='none'"`. */
export function onImgErrorHide(e: SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.style.display = 'none';
}

/** Mirrors the reference markup's `onerror="this.removeAttribute('src')"`. */
export function onImgError(e: SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.removeAttribute('src');
}
