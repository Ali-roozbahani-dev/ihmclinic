'use client';

import { useEffect, useState } from 'react';

/** وضعیت `prefers-reduced-motion: reduce` را دنبال می‌کند. */
export function usePrefersReducedMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);

    return () => {
      mediaQuery.removeEventListener('change', update);
    };
  }, []);

  return reduceMotion;
}
