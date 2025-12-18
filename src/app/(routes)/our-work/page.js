import OurWork from '@/src/Screen/ourWork';

export const metadata = {
  title: "Our Work | California Web Coders",
  description: "Explore portfolio and case studies showcasing work by California Web Coders.",
  keywords: [
    "portfolio",
    "case studies",
    "work",
    "California Web Coders"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/our-work",
  },
};

export default function OurWorkPage() {
  return <OurWork />;
}
