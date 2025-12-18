import ServerManagement from "@/src/Screen/InnerChildPages/ServerManagement";

export const metadata = {
  title: "Server Management Services | 24/7 Monitoring & Support",
  description:
    "Keep your servers running smoothly with our expert management services. California Web Coders provides 24/7 monitoring, maintenance, and optimization for all server types.",
  keywords: [
    "server management",
    "server monitoring",
    "server maintenance",
    "managed servers",
    "IT support",
    "California Web Coders"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/server-management",
  },
};

export default function ServerManagementPage() {
  return <ServerManagement />;
}
