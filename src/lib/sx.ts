import type { CSSProperties } from 'react';

/**
 * The reference build keeps its whole design system in inline style strings.
 * Porting them verbatim (instead of re-authoring them as objects) removes any
 * chance of a transcription drift, so `sx` parses the original declaration
 * string once and hands React the equivalent style object.
 */
const cache = new Map<string, CSSProperties>();

export function sx(css: string, extra?: CSSProperties): CSSProperties {
  if (typeof css !== 'string') {
    // Loud in development, harmless in production: an undefined style would
    // otherwise surface as a blank page.
    // A missing style string is a bug, but it must not blank the whole page.
    if (import.meta.env.DEV) throw new Error(`sx() expected a style string, got ${String(css)}`);
    console.warn(`sx() expected a style string, got ${String(css)}`);
    return {};
  }
  if (extra) return { ...sx(css), ...extra };
  const hit = cache.get(css);
  if (hit) return hit;
  const out: Record<string, string> = {};
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i < 1) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop || !value) continue;
    const key = prop.startsWith('--')
      ? prop
      : prop.replace(/^-/, '').replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = value;
  }
  const style = out as unknown as CSSProperties;
  cache.set(css, style);
  return style;
}
