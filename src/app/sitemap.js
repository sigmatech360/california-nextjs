import fs from "fs";
import path from "path";

export const dynamic = "force-static";
const BASE_URL = "https://californiawebcoders.com";
const APP_DIR = path.join(process.cwd(), "src/app");

function getRoutes(dir, currentRoute = "") {
  let routes = [];
  for (const entry of fs.readdirSync(dir)) {
    if (entry.startsWith("_")) continue;
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    const isRouteGroup = entry.startsWith("(") && entry.endsWith(")");

    if (stat.isDirectory()) {
      const nextRoute = isRouteGroup
        ? currentRoute
        : `${currentRoute}/${entry}`;
      routes.push(...getRoutes(fullPath, nextRoute));
    }
    if (entry === "page.js") routes.push(currentRoute || "/");
  }
  return routes;
}

// 2️⃣ required for static export
export async function generateStaticParams() {
  return [{}];
}

// 3️⃣ sitemap generation
export default async function sitemap() {
  const staticRoutes = getRoutes(APP_DIR);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  // 3a. Fetch all blogs
  const blogsRes = await fetch(`${baseURL}/posts`);
  const blogs = await blogsRes.json();
  const blogRoutes = blogs.map((blog) => `/blog/${blog.slug}`);

  // 3b. Fetch all categories
  const catsRes = await fetch(`${baseURL}/categories`);
  const categories = await catsRes.json();
  const categoryRoutes = categories.map((cat) => `/blog/category/${cat.slug}`);

  // 4️⃣ combine all routes
  let allRoutes = [...staticRoutes, ...blogRoutes, ...categoryRoutes];

  // remove any leftover placeholders
  allRoutes = allRoutes.filter((route) => !route.includes("["));

  // 5️⃣ format sitemap
  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    // lastModified: new Date(),
    priority: route === "/" ? 1.0 : 0.8,
  }));
}
