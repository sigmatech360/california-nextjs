'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import innerChildBannerBg from "../../Assets/newChildPagesAssets/websiteRevamp/innerChildBannerBg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/newChildPagesAssets/websiteRevamp/pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/websiteRevamp/pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/websiteRevamp/pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/websiteRevamp/pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/websiteRevamp/pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/websiteRevamp/pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/newChildPagesAssets/websiteRevamp/innerChildAboutImg.webp";

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

import workflowImg1 from "../../Assets/workflowImg1.webp";
import workflowImg2 from "../../Assets/workflowImg2.webp";
import workflowImg3 from "../../Assets/workflowImg3.webp";

import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import InnerChildWhyMatterIcon1 from "../../Assets/newChildPagesAssets/webMaintenance/InnerChildWhyMatterIcon1.webp";
import InnerChildWhyMatterIcon2 from "../../Assets/newChildPagesAssets/webMaintenance/InnerChildWhyMatterIcon2.webp";
import InnerChildWhyMatterIcon3 from "../../Assets/newChildPagesAssets/webMaintenance/InnerChildWhyMatterIcon3.webp";

import { eCommerseWebsitePricingPlansData, informativeWebsitePricingPlansData } from "../../data";

import InnerServicesSec from "../../components/InnerServicesSec";
import WorkflowSec from "../../components/WorkflowSec";

const aboutSectionData = [
  {
    id: 1,
    image: innerChildAbtIcon1,
    name: "Reliable Revamp:",
    description: "Full website revamp services California brands rely on",
  },
  {
    id: 2,
    image: innerChildAbtIcon2,
    name: "UI/UX Enhancement",
    description: "Visual and user interface enhancements for better engagement",
  },
  {
    id: 3,
    image: innerChildAbtIcon3,
    name: "Mobile-First Approach",
    description: "Mobile-first responsive redesign for all devices",
  },
  {
    id: 4,
    image: innerChildAbtIcon4,
    name: "SEO Optimization:",
    description: "SEO-focused redesign for higher search visibility",
  },
  {
    id: 5,
    image: innerChildAbtIcon5,
    name: "E-Commerce Experience",
    description: "E-commerce redesign with seamless shopping experiences",
  },
  {
    id: 6,
    image: innerChildAbtIcon6,
    name: "Conversion Focused",
    description: "Conversion-driven redesign to increase leads and sales",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: InnerChildWhyMatterIcon1,
    title: "Clear Process",
    description: "Clear, step-by-step redesign process",
  },
  {
    id: 2,
    image: InnerChildWhyMatterIcon2,
    title: "Experienced Team",
    description: "Dedicated support from start to finish",
  },
  {
    id: 3,
    image: InnerChildWhyMatterIcon3,
    title: "Industry Experience",
    description: "Proven experience across industries",
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

const faqRedesignWebsiteData = [
  {
    id: 1,
    question: "What is included in your website redesign services California?",
    answer:
      "We include a complete audit, design updates, UX/UI improvements, SEO adjustments, and performance enhancements tailored to your business needs.",
  },
  {
    id: 2,
    question: "How much does a website redesign cost California?",
    answer:
      "Costs vary depending on project size and complexity. We provide transparent pricing after reviewing your website and business goals.",
  },
  {
    id: 3,
    question: "Do you offer website revamp services California for e-commerce?",
    answer:
      "Yes, we specialize in e-commerce redesigns, including checkout optimization, product page improvements, and mobile-friendly experiences.",
  },
  {
    id: 4,
    question: "How long does a typical website redesign take?",
    answer:
      "Most redesigns take 4-8 weeks, depending on the complexity and scope of updates required.",
  },
  {
    id: 5,
    question: "Will my website lose SEO rankings during redesign?",
    answer:
      "No. We take steps to protect and improve SEO during the redesign, ensuring your visibility is maintained or improved.",
  },
  {
    id: 6,
    question: "Why should I choose your website redesign agency California?",
    answer:
      "We combine design expertise, technical knowledge, and a collaborative approach to deliver results-focused redesigns that align with your business.",
  },
  {
    id: 7,
    question: "Can you redesign my site without changing the CMS?",
    answer: "Can you redesign my site without changing the CMS?",
  },
  {
    id: 8,
    question: "How do you ensure the redesign reflects my brand?",
    answer:
      "We align all design elements, including colors, visuals, layouts, and messaging, with your brand identity and audience expectations.",
  },
  {
    id: 9,
    question: "Do you offer support after the redesign is complete?",
    answer:
      "Yes, we provide ongoing website maintenance, updates, and performance monitoring to ensure your site continues to perform.",
  },
  {
    id: 10,
    question: "What’s the difference between a website redesign and a revamp?",
    answer:
      "A redesign often involves structural and design changes, while a revamp can be more focused on visuals, speed, or functionality improvements.",
  },
];

const servicesSecData = [
  {
    id: 1,
    question: "Website Design",
    answer:
      "We create new websites from scratch, combining engaging visuals with user-friendly navigation and strong performance to attract and convert customers.",
  },
  {
    id: 2,
    question: "CMS Development",
    answer:
      "Our CMS development services make content management simple and scalable, giving you full control of updates without technical challenges.",
  },
  {
    id: 3,
    question: "Website Maintenance",
    answer:
      "From regular updates to monitoring and fixes, we keep websites secure, fast, and reliable, so they always support your business.",
  },
];

const wrokflowData = [
  {
    id: 1,
    title: "Plan & Discover",
    description:
      "Fill out our quick, no-obligation form with basic business details. Takes less than 2 minutes.",
    image: workflowImg1,
  },
  {
    id: 2,
    title: "Design & Build",
    description:
      "Our experts match you with the best lenders and products that fit your unique goals.",
    inverted: true,
    image: workflowImg2,
  },
  {
    id: 3,
    title: "Test & Launch",
    description:
      "Once approved, funding can be deposited into your account in as little as 24 hours.",
    image: workflowImg3,
  },
];

const WebsiteRevamp = () => {
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
          title="Website Redesign Services in California for Clarity, Functionality, and Growth"
          btnText="Learn More"
          // description=""
          // bannerList={[
          //   "",
          // ]}
        />

        <InnerChildAbout
          // secTitle1=""
          secTitle2="Redesign"
          secTitle3="that Turns Clicks into Customers"
          description="Our website redesign services in California that businesses trust are built to improve visuals, boost performance, and align every detail with your brand identity. Whether you need a complete overhaul or targeted upgrades, California Web Coders makes websites more engaging, user-friendly, and ready to support business growth."
          // description2=""
          image={ourWorkheroImgWebp}
          aboutData={aboutSectionData}
        />

        <WhyItMatters
          secTitle1="Why Trust CWC for"
          secTitle2="Website Redesign"
          // secTitle3=""
          secDescription="At California Web Coders, we deliver website revamp services in California with a balance of strategy and creativity. Businesses trust us because we combine expertise, communication, and measurable results."
          cardData={whyMatterData}
        />

        <WorkflowSec
          title1="3-Step"
          title2="Workflow"
          description="A slow, clunky, or outdated website turns visitors away. A fresh, engaging, and optimized site increases trust, conversions, and search engine visibility."
          data={wrokflowData}
        />

        

        <InnerServicesSec
          title="Complete Digital Solutions Tailored to Your Business"
          description="California Web Coders provides end-to-end digital solutions that help businesses stand out and grow online. From concept to launch, our team blends creativity and technology to deliver custom websites that are fast, secure and search-engine friendly."
          serviceData={servicesSecData}
        />

        <PixelPerfectSec
          secTitle="Recent"
          secTitleBlue="Website Redesigns"
          // secTitle2=""
          secDescription="We’ve helped brands across industries refresh their web presence and boost performance. Check out our before/after revamp highlights."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <SinglePricingPlan
          secTitle="Website Redesign Cost Made Clear"
          secDescription="Our website redesign cost California is customized to match your business needs and goals. Our packages include:"
          pricingPlanData={informativeWebsitePricingPlansData}
        /> */}

        <ContactForm
          secTitle="Begin Your Website Revamp With Us"
          secDescription="Take the first step toward a more effective website. Fill out the form below, and our team will connect with you shortly."
          btnText="Let’s Chat"
        />

        <FrequentQuestions
          FrequentQuestions="homeFrequentQuestions"
          secTitle="Frequently Asked Questions About Website Redesign Services"
          faqData={faqRedesignWebsiteData}
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

export default WebsiteRevamp;
