import DevOpsServices from "@/src/Screen/InnerChildPages/DevOpsServices";

export const metadata = {
  title: "DevOps Services | Automation & CI/CD Solutions",
  description:
    "Accelerate your development pipeline with our expert DevOps services. California Web Coders implements CI/CD, automation, and cloud solutions for faster deployments and scalability.",
  keywords: [
    "DevOps services",
    "CI/CD pipelines",
    "cloud automation",
    "infrastructure as code",
    "continuous integration",
    "California Web Coders"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/devop-services",
  },
};

export default function DevOpsServicesPage() {
  return <DevOpsServices />;
}
