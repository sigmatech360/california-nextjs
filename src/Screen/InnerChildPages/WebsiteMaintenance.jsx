'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import innerChildBannerBg from "../../Assets/newChildPagesAssets/webMaintenance/innerChildBannerBg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/newChildPagesAssets/webMaintenance/pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/webMaintenance/pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/webMaintenance/pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/webMaintenance/pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/webMaintenance/pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/webMaintenance/pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/newChildPagesAssets/webMaintenance/innerChildAboutImg.webp";

import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import InnerChildAbout from "../../components/InnerChildAbout";

import innerChildAbtIcon1 from "../../Assets/newChildPagesAssets/webMaintenance/innerChildAbtIcon1.webp";
import innerChildAbtIcon2 from "../../Assets/newChildPagesAssets/webMaintenance/innerChildAbtIcon2.webp";
import innerChildAbtIcon3 from "../../Assets/newChildPagesAssets/webMaintenance/innerChildAbtIcon3.webp";
import innerChildAbtIcon4 from "../../Assets/newChildPagesAssets/webMaintenance/innerChildAbtIcon4.webp";
import innerChildAbtIcon5 from "../../Assets/newChildPagesAssets/webMaintenance/innerChildAbtIcon5.webp";
import innerChildAbtIcon6 from "../../Assets/newChildPagesAssets/webMaintenance/innerChildAbtIcon6.webp";

import creativelogo from "../../Assets/creativelogo.svg";
import digitaltogo from "../../Assets/digitaltogo.svg";
import softwarelogo from "../../Assets/softwarelogo.svg";
import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import InnerChildWhyMatterIcon1 from "../../Assets/newChildPagesAssets/webMaintenance/InnerChildWhyMatterIcon1.webp";
import InnerChildWhyMatterIcon2 from "../../Assets/newChildPagesAssets/webMaintenance/InnerChildWhyMatterIcon2.webp";
import InnerChildWhyMatterIcon3 from "../../Assets/newChildPagesAssets/webMaintenance/InnerChildWhyMatterIcon3.webp";

import smart from "../../Assets//smart.svg";
import { eCommerseWebsitePricingPlansData, maintenanceWebsitePricingPlansData } from "../../data";


const aboutSectionData = [
  {
    id: 1,
    image: innerChildAbtIcon1,
    name: "Security Enhancements",
    description: "Regular security checks and updates.",
  },
  {
    id: 2,
    image: innerChildAbtIcon2,
    name: "Speed Optimization",
    description: "Speed optimization for better performance.",
  },
  {
    id: 3,
    image: innerChildAbtIcon3,
    name: "Technical Support",
    description: "Quick fixes and reliable technical support.",
  },
  {
    id: 4,
    image: innerChildAbtIcon4,
    name: "Monitoring and Analysis",
    description: "Proactive monitoring to prevent downtime.",
  },
  {
    id: 5,
    image: innerChildAbtIcon5,
    name: "Content Upgrades",
    description: "Regular updates to keep you relevant.",
  },
  {
    id: 6,
    image: innerChildAbtIcon6,
    name: "Backup and Recovery",
    description: "To safeguard your data.",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: InnerChildWhyMatterIcon1,
    title: "Proactive Care",
    description:
      "Routine updates, security monitoring, and optimization to keep websites secure and smooth.",
  },
  {
    id: 2,
    image: InnerChildWhyMatterIcon2,
    title: "Responsive Support",
    description:
      "Fast troubleshooting and ongoing support so your site never misses a beat.",
  },
  {
    id: 3,
    image: InnerChildWhyMatterIcon3,
    title: "Trusted Expertise",
    description:
      "A proven process built on consistency, transparency, and long-term reliability.",
  },
];

const webDesignPortfolioData = [
  {
    id: 1,
    image: pixleperfectimg1,
  },
  {
    id: 2,
    image: pixleperfectimg2,
  },
  {
    id: 3,
    image: pixleperfectimg3,
  },
  {
    id: 4,
    image: pixleperfectimg4,
  },
  {
    id: 5,
    image: pixleperfectimg5,
  },
  {
    id: 6,
    image: pixleperfectimg6,
  },
];

const faqWebMaintenanceData = [
  {
    id: 1,
    question: "1. Do you provide ongoing support for website maintenance?",
    answer:
      "Yes, our website maintenance in California includes continuous monitoring, updates, and reliable technical support for your site.",
  },
  {
    id: 2,
    question: "2. Why choose California Web Coders for website maintenance?",
    answer:
      "Because we combine proactive care with responsive support, we keep websites secure, updated, and performing at their best.",
  },
  {
    id: 3,
    question: "3. How often should websites be maintained?",
    answer:
      "Websites should be maintained monthly with regular updates, security checks, and optimizations to ensure smooth performance.",
  },
  {
    id: 4,
    question: "4. Do you offer backup and recovery services?",
    answer:
      "Yes, our maintenance packages include backup and recovery to safeguard important data and prevent unexpected losses.",
  },
  {
    id: 5,
    question: "5. Can website maintenance improve site performance?",
    answer:
      "Absolutely. Maintenance enhances speed, reliability, and user experience, ensuring your website continues to perform at peak standards.",
  },
  {
    id: 6,
    question:
      "6. What industries use your website maintenance services in California?",
    answer:
      "We provide website maintenance in California for startups, small businesses, e-commerce brands, and established professional organizations.",
  },
  {
    id: 7,
    question: "7. Can you fix issues on my existing website?",
    answer:
      "Yes, our maintenance services include troubleshooting and quick fixes to resolve technical issues effectively.",
  },
  {
    id: 8,
    question: "8. Is website maintenance important for SEO rankings?",
    answer:
      "Yes, regular updates, security enhancements, and speed optimization all contribute to maintaining strong SEO rankings.",
  },
  {
    id: 9,
    question: "9. Do you handle content updates during maintenance?",
    answer: "9. Do you handle content updates during maintenance?",
  },
  {
    id: 10,
    question: "10. What makes California Web Coders different for maintenance?",
    answer:
      "Our approach blends proactive monitoring with consistent support, delivering reliability and long-term trust for California businesses.",
  },
];

const WebsiteMaintenance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index, imageArray) => {
    const imageList = imageArray.map((item) => ({
      src: item.image.src,
    }));
    setImages(imageList);
    setCurrentIndex(index);
    setIsOpen(true);
  };
  return (
    <>

      <Layout>
        <ServiceBanner
          bgImage={innerChildBannerBg}
          title="Professional Website Maintenance Made Simple"
          btnText="Learn More"
          // description=""
          // bannerList={[
          //   "",
          // ]}
        />

        <InnerChildAbout
          secTitle1="Stay"
          secTitle2="Protected, Updated,"
          secTitle3="and Ahead"
          description="Your website should never feel outdated or stuck in the past. With our website maintenance services in California, we keep your site secure, fast, and optimized for performance. Our team manages ongoing updates, improvements, and monitoring, giving you peace of mind while ensuring your business maintains a strong and competitive presence online."
          // description2=""
          image={ourWorkheroImgWebp}
          aboutData={aboutSectionData}
        />

        <WhyItMatters
          secTitle1="Keeping"
          secTitle2="Websites Strong"
          secTitle3="Across California"
          secDescription="Across California, businesses trust us because we treat every site like our own, ensuring security, performance, and reliability at all times."
          cardData={whyMatterData}
        />

        <PixelPerfectSec
          secTitle="Proof that Smart"
          secTitleBlue="Maintenance"
          secTitle2="Works"
          secDescription="From local startups to established California brands, we help businesses keep their websites smooth, secure, and reliable. Explore our portfolio below for web maintenance in California."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ContactForm
          secTitle="Get the Support Your Website Deserves"
          secDescription="If you need website maintenance services, then you are at the absolute right place! Fill out the form below and let our web experts guide you further."
          btnText="Let’s Chat"
        />

        <SinglePricingPlan
          secTitle="Plans Designed for Every Business Size"
          secDescription="Our website maintenance packages in California are designed to fit businesses of all sizes. No matter the need, our plans are simple, affordable, and focused on keeping websites secure, reliable, and performing at their best."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={maintenanceWebsitePricingPlansData}
        />

        <FrequentQuestions
          FrequentQuestions="homeFrequentQuestions"
          secTitle="Frequently Asked Questions"
          faqData={faqWebMaintenanceData}
        />

        <Suspense fallback={<Loader />}>
          <BlogSection categorySlug="blogs" />
        </Suspense>

        {isOpen && images.length > 0 && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
            index={currentIndex}
          />
        )}
      </Layout>
    </>
  );
};

export default WebsiteMaintenance;
