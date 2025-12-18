import DomainRegistration from '@/src/Screen/InnerChildPages/DomainRegistration';

export const metadata = {
  title: "Domain Registration Services | California Web Coders",
  description: "Secure your online identity with our domain registration services. California Web Coders helps you find and register the perfect domain for your business or brand.",
  keywords: [
    "domain registration",
    "buy domain",
    "register domain",
    "website domain",
    "domain name services",
    "California Web Coders"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/domain-registration",
  },
};

export default function DomainRegistrationPage() {
  return <DomainRegistration />;
}
