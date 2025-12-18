import TermsAndConditions from '@/src/Screen/TermsAndConditions';

export const metadata = {
  title: "Terms & Conditions | California Web Coders",
  description: "Read the terms and conditions for using California Web Coders' website and services.",
  keywords: ["terms and conditions", "legal", "policies", "California Web Coders"],
  alternates: {
    canonical: "https://californiawebcoders.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditions />;
}
