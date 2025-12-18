import PricingPlan from "@/src/Screen/Pricingplan";

export const metadata = {
  title: "Pricing Plans | Affordable Packages | California Web Coders",
  description:
    "Choose from flexible, affordable pricing plans tailored to your needs. California Web Coders offers high-quality digital solutions to fit every business budget.",
  keywords: [
    "web development",
    "custom website",
    "react development",
    "logo design",
    "digital marketing",
    "social media marketing",
    "web design"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/pricing-plan",
  },
};

export default function PricingPage() {
  return <PricingPlan />;
}
