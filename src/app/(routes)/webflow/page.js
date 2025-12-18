import WebFlow from "@/src/Screen/InnerChildPages/WebFlow";

export const metadata = {
  title: "Webflow Website Development | California Web Coders",
  description:
    "Custom Webflow websites designed for businesses, startups, and eCommerce. Build a modern, responsive, and high-performing website with our Webflow experts.",
  keywords: [
    "Webflow development",
    "Webflow design",
    "custom Webflow website"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/webflow",
  },
};

export default function WebFlowPage() {
  return <WebFlow />;
}
