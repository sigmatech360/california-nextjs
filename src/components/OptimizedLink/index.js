// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// /**
//  * Optimized Link component with built-in prefetching
//  * Automatically prefetches on hover/focus for better performance
//  */
// export const OptimizedLink = ({ 
//   href, 
//   children, 
//   className = '',
//   prefetch = true,
//   ...props 
// }) => {
//   const router = useRouter();

//   const handleMouseEnter = () => {
//     if (prefetch && href) {
//       router.prefetch(href);
//     }
//   };

//   return (
//     <Link
//       href={href}
//       className={className}
//       onMouseEnter={handleMouseEnter}
//       onFocus={handleMouseEnter}
//       prefetch={prefetch}
//       {...props}
//     >
//       {children}
//     </Link>
//   );
// };

// export default OptimizedLink;
