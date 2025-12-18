import WordPressDevelopment from "@/src/Screen/InnerChildPages/WordPressDevelopment";

export const metadata = {
  title: "WordPress Development Services | California Web Coders",
  description:
    "Custom WordPress websites built for performance, scalability, and SEO. From themes to plugins, we deliver full-scale WordPress solutions.",
  keywords: [
    "WordPress development",
    "custom WordPress themes",
    "WordPress plugins",
    "blog development"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/wordpress-development",
  },
};

export default function WordPressDevelopmentPage() {
  return <WordPressDevelopment />;
}
