

import About from '@/src/Screen/about';

export const metadata = {
  title: "About Us | Expert Web Solutions | California Web Coders",
  description:
    "Learn about California Web Coders, your partner for custom web and app development. Discover our mission, values, and commitment to delivering digital success.",
  keywords:
    ["web development", "custom website", "react development", "logo design", "digital marketing", "social media marketing", "web design"],
   alternates: {
    canonical: "https://californiawebcoders.com/about",
  },
};

export default function AboutPage() {
  return <About />;
}
