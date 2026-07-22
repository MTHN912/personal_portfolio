

'use client';

import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '@/shared/constants';

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width < BREAKPOINTS.sm,
    isTablet: windowSize.width >= BREAKPOINTS.sm && windowSize.width < BREAKPOINTS.lg,
    isDesktop: windowSize.width >= BREAKPOINTS.lg,
    isUltraWide: windowSize.width >= BREAKPOINTS['2xl'],
  };
}
