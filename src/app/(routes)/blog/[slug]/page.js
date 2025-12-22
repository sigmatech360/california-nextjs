export const revalidate = 60;
// export const revalidate = 0;

import BlogDetail from "@/src/Screen/BlogDetail";

async function fetchPost(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts?slug=${slug}&_embed`,
     {
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();

  const categoryId = data[0].categories?.[0];
  let relatedPosts = [];
  if (categoryId) {
    relatedPosts = await fetchRelatedPost(categoryId, data[0].id);
  }
  return { post: data[0], relatedPosts: relatedPosts };
}

async function fetchRelatedPost(categoryId, currentPostId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts?categories=${categoryId}&_embed`,
     {
      next: { revalidate: 60 },
    }
  );
  let data = await res.json();

  const related = await data.filter((post) => post.id !== currentPostId);

  return related;
}

export default async function BlogDetailPage({ params }) {
  let { post, relatedPosts } = await fetchPost(params.slug);

  return (
    <BlogDetail slug={params.slug} post={post} relatedPosts={relatedPosts} />
  );
}
