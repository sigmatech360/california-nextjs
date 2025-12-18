import WixDevelopment from "@/src/Screen/InnerChildPages/WixDevelopment";

export const metadata = {
  title: "Wix Website Development | California Web Coders",
  description:
    "Beautiful, user-friendly Wix websites designed to showcase your brand and grow your online presence. Get custom Wix solutions today.",
  keywords: [
    "Wix development",
    "Wix website design",
    "custom Wix website",
    "drag-and-drop website"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/wix-development",
  },
};

export default function WixDevelopmentPage() {
  return <WixDevelopment />;
}
