// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// /**
//  * Hook to track router navigation events and show loading state
//  * Helps with performance monitoring and user feedback
//  */
// export const useRouterEvents = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Track navigation start
//     const handleStart = () => setIsLoading(true);
    
//     // Track navigation end
//     const handleComplete = () => setIsLoading(false);

//     // For Next.js 13+ we use router events via a different approach
//     // Store original push/prefetch methods
//     const originalPush = router.push;
//     const originalPrefetch = router.prefetch;

//     // Wrap push to track loading state
//     router.push = async (...args) => {
//       handleStart();
//       try {
//         const result = await originalPush.apply(router, args);
//         handleComplete();
//         return result;
//       } catch (error) {
//         handleComplete();
//         throw error;
//       }
//     };

//     // Wrap prefetch to maintain references
//     router.prefetch = async (...args) => {
//       return originalPrefetch.apply(router, args);
//     };

//     return () => {
//       router.push = originalPush;
//       router.prefetch = originalPrefetch;
//     };
//   }, [router]);

//   return { isLoading };
// };

// export default useRouterEvents;
