import SSLCertificates from "@/src/Screen/InnerChildPages/SSLCertificates";

export const metadata = {
  title: "SSL Certificates | Secure Your Website with HTTPS",
  description:
    "Protect your website and users with trusted SSL certificates. California Web Coders offers affordable SSL installation for safe, encrypted online experiences.",
  keywords: [
    "SSL certificates",
    "HTTPS security",
    "website encryption",
    "install SSL",
    "secure website",
    "California Web Coders"
  ],
  alternates: {
    canonical: "https://californiawebcoders.com/ssl-certificates",
  },
};

export default function SSLCertificatesPage() {
  return <SSLCertificates />;
}
