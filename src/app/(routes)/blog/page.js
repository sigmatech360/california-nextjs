export const revalidate = 300;

import NewsandTrends from '@/src/Screen/newsandtrends';

async function fetchBlogs() {
  let posts = [];

  const catRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/categories`,
     {
      next: { revalidate: 60 },
    }
  );
  const categories = await catRes.json();


  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts?_embed`,
     {
      next: { revalidate: 60 },
    }
  );
  let data = await res.json();

  posts = await data;
  return {posts, categories};
}


export default async function BlogPage() {

  let {posts, categories } = await fetchBlogs();

  return <NewsandTrends posts={posts} categories={categories} />;
}
