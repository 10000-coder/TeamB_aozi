import { useEffect, useState } from 'react';
import type { Variant } from './types';

/**
 * The reference ships four complete layouts in one document and reveals one by
 * CSS breakpoint. We render only the active one, so the breakpoint must match
 * the stylesheet exactly (`max-width: 899px`).
 */
const QUERY = '(max-width: 899px)';

function current(): Variant {
  if (typeof window === 'undefined') return 'vd';
  return window.matchMedia(QUERY).matches ? 'vm' : 'vd';
}

export function useViewport() {
  const [variant, setVariant] = useState<Variant>(current);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = () => setVariant(mql.matches ? 'vm' : 'vd');
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return variant;
}
