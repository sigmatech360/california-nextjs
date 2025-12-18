'use client';

import { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';

const ScrollToTop = lazy(() => import('@/src/components/ScrollToTop'));

export default function ClientLayout({ children }) {
  useEffect(() => {
    // Initialize AOS with optimized settings
    AOS.init({
      duration: 1500,
      disable: 'phone', // Disable on mobile for better performance
      once: true, // Only animate once when scrolling down
    });
    
    const handleLoad = () => AOS.refresh();
    window.addEventListener('load', handleLoad);
    
    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
      {children}
    </>
  );
}
