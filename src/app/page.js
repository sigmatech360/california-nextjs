
// "use client";
import "@/src/Screen/Home/index.css";
import Home from "@/src/Screen/Home";


// const BlogSection = lazy(() => import("@/src/components/blogPosts"));

export const metadata = {
  title: "California Web Coders | Custom Web & App Solutions",
  description:
    "California Web Coders offers expert web design, development, and mobile app solutions to grow your business online. Get reliable, tailored digital services today.",
  keywords:
   [ "web development", "custom website", "react development", "logo design"," digital marketing", "social media marketing", "web design"],
   alternates: {
    canonical: "https://californiawebcoders.com/",
  },
};



export default function MainHome() {
  return (
    <>
     <Home />

    </>
  );
}
