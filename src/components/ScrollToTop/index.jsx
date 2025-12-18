// src/components/ScrollToTop.js
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to the top when the path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
