import EmailHosting from "@/src/Screen/InnerChildPages/EmailHosting";

export const metadata = {
  title: "Business Email Hosting | Secure & Professional Mail",
  description:
    "Boost your brand credibility with professional business email hosting. California Web Coders provides reliable, secure, and scalable email solutions for your organization.",
  keywords: [
    "email hosting",
    "business email",
    "secure email",
    "corporate email hosting",
    "professional email",
    "California Web Coders"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/email-hosting",
  },
};

export default function EmailHostingPage() {
  return <EmailHosting />;
}
