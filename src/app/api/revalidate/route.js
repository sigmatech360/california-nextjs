import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { secret, slug, categorySlug } = body;

    // 🔐 Security check
    if (secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 401 }
      );
    }

    /**
     * 1️⃣ Blog listing page
     * /blog
     */
    revalidatePath("/blog");

    /**
     * 2️⃣ Single blog page
     * /blog/blog-slug
     */
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    /**
     * 3️⃣ Category page
     * /blog/category/category-slug
     */
    if (categorySlug) {
      revalidatePath(`/blog/category/${categorySlug}`);
    }

    return NextResponse.json({
      revalidated: true,
      paths: {
        blog: "/blog",
        blogSlug: slug ? `/blog/${slug}` : null,
        category: categorySlug
          ? `/blog/category/${categorySlug}`
          : null,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Revalidation failed" },
      { status: 500 }
    );
  }
}
