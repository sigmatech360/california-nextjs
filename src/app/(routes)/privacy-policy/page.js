import PrivacyPolicy from "@/src/Screen/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy",
  description: "We are committed to protecting your personal information.",
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
    canonical: "https://californiawebcoders.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
