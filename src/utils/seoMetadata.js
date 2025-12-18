/**
 * SEO Metadata Helper for Next.js Pages
 * Use this in your page.js files to generate proper metadata
 * 
 * Example usage in app/(routes)/web-design/page.js:
 * 
 * import { generatePageMetadata } from '@/src/utils/seoMetadata';
 * 
 * export const metadata = generatePageMetadata({
 *   title: "Web Design Services",
 *   description: "Professional web design services...",
 *   keywords: "web design, ui, ux",
 *   pathname: "/web-design",
 * });
 */

const baseUrl = "https://californiawebcoders.com";

export function generatePageMetadata({
  title = "California Web Coders",
  description = "Professional web development and design services",
  keywords = "web development, web design",
  pathname = "/",
  image = "/og-image.png",
  type = "website",
}) {
  const fullUrl = `${baseUrl}${pathname}`;

  return {
    title,
    description,
    keywords,
    canonical: fullUrl,
    openGraph: {
      title,
      description,
      url: fullUrl,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "California Web Coders",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@CaliforniaWebCoders",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

/**
 * Generate metadata for blog posts
 * 
 * Example usage:
 * export const metadata = generateBlogMetadata({
 *   title: "Blog Post Title",
 *   description: "Post description",
 *   author: "Author Name",
 *   publishedDate: "2024-01-15",
 *   slug: "blog-post-slug",
 * });
 */
export function generateBlogMetadata({
  title,
  description,
  author = "California Web Coders",
  publishedDate,
  modifiedDate,
  slug,
  image = "/og-image.png",
}) {
  const pathname = `/blog/${slug}`;
  const fullUrl = `${baseUrl}${pathname}`;

  return {
    title,
    description,
    keywords: "blog, web development, web design, tutorials",
    canonical: fullUrl,
    authors: [{ name: author }],
    publishedTime: publishedDate,
    modifiedTime: modifiedDate || publishedDate,
    openGraph: {
      title,
      description,
      url: fullUrl,
      type: "article",
      authors: [author],
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "California Web Coders",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@CaliforniaWebCoders",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
