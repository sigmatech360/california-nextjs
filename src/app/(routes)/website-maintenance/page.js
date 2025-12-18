import WebsiteMaintenance from "@/src/Screen/InnerChildPages/WebsiteMaintenance";

export const metadata = {
  title: "Website Maintenance Services | California Web Coders",
  description:
    "Keep your website updated, secure, and running smoothly with our professional website maintenance services.",
  keywords: [
    "website maintenance",
    "website updates",
    "security monitoring",
    "performance optimization"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/website-maintenance",
  },
};

export default function WebsiteMaintenancePage() {
  return <WebsiteMaintenance />;
}
