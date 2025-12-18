export const revalidate = 60;

import CategoryPage from "@/src/Screen/CategoryPage";

async function fetchPosts(categorySlug) {
  let posts = [];
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  let categoryId = data.find((cat) => cat.slug === categorySlug)?.id;
  if (categoryId) {
    // categoryId = matched.id;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts?categories=${categoryId}&_embed`,
      {
        next: { revalidate: 60 },
      }
    );
    let data = await res.json();

    posts = data;
  }
  return posts;
}

export default async function BlogCategoryPage({ params }) {
  const posts = await fetchPosts(params.categorySlug);

  return <CategoryPage categorySlug={params.categorySlug} posts={posts} />;
}
