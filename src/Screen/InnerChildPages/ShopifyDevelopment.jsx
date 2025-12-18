'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";

// import innerChildBannerBg from "../../Assets/services-cmsDev-banner-bg.webp";

import innerChildBannerBg from "../../Assets/newChildPagesAssets/shopifyImages/shopifyBannerBgWithImage.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/newChildPagesAssets/shopifyImages/pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/shopifyImages/pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/shopifyImages/pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/shopifyImages/pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/shopifyImages/pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/shopifyImages/pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/newChildPagesAssets/shopifyImages/shopifyAboutImg.webp";

import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import InnerChildAbout from "../../components/InnerChildAbout";

import shopifyAbtIcon1 from "../../Assets/newChildPagesAssets/shopifyImages/shopifyAbtIcon1.webp";
import shopifyAbtIcon2 from "../../Assets/newChildPagesAssets/shopifyImages/shopifyAbtIcon2.webp";
import shopifyAbtIcon3 from "../../Assets/newChildPagesAssets/shopifyImages/shopifyAbtIcon3.webp";
import shopifyAbtIcon4 from "../../Assets/newChildPagesAssets/shopifyImages/shopifyAbtIcon4.webp";
import shopifyAbtIcon5 from "../../Assets/newChildPagesAssets/shopifyImages/shopifyAbtIcon5.webp";
import shopifyAbtIcon6 from "../../Assets/newChildPagesAssets/shopifyImages/shopifyAbtIcon6.webp";

import shopifyWhyMatterIcon1 from "../../Assets/newChildPagesAssets/shopifyImages/shopifyWhyMatterIcon1.webp";
import shopifyWhyMatterIcon2 from "../../Assets/newChildPagesAssets/shopifyImages/shopifyWhyMatterIcon2.webp";
import shopifyWhyMatterIcon3 from "../../Assets/newChildPagesAssets/shopifyImages/shopifyWhyMatterIcon3.webp";

import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import { eCommerseWebsitePricingPlansData, shopifyWebsitePricingPlansData } from "../../data";


const aboutSectionData = [
  {
    id: 1,
    image: shopifyAbtIcon1,
    name: "Custom Designs",
    description:
      "Pre-built and mobile-optimized themes for every business need.",
  },
  {
    id: 2,
    image: shopifyAbtIcon2,
    name: "Store Integration",
    description:
      "Plugin Support for payment integration and other performance features.",
  },
  {
    id: 3,
    image: shopifyAbtIcon3,
    name: "Smart Management",
    description: "Easy-to-manage layout, product pages, and store operations.",
  },
  {
    id: 4,
    image: shopifyAbtIcon4,
    name: "No-Code & Low-Code",
    description: "Faster Shopify deployment with built-in drag-and-drop tools.",
  },
  {
    id: 5,
    image: shopifyAbtIcon5,
    name: "Increased Conversions",
    description:
      "Optimized shopping experience that leads customers to make purchases.",
  },
  {
    id: 6,
    image: shopifyAbtIcon6,
    name: "24/7 Support",
    description:
      "Round-the-clock expert assistance to keep your store up and running.",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: shopifyWhyMatterIcon1,
    title: "Fast & Secure",
    description: "Built, launched, and live, all just in a few days.",
  },
  {
    id: 2,
    image: shopifyWhyMatterIcon2,
    title: "Customizable & Scalable",
    description: "Packed with tools that make customization easy for everyone.",
  },
  {
    id: 3,
    image: shopifyWhyMatterIcon3,
    title: "Customer-Friendly",
    description:
      "Easy to navigate, intuitive stores that increase customer satisfaction.",
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

const faqHomeData = [
  {
    id: 1,
    question: "What does a Shopify development company do?",
    answer:
      "A Shopify development company in California designs, develops, deploys, and maintains e-commerce stores.",
  },
  {
    id: 2,
    question: "Why choose professional Shopify development services?",
    answer:
      "A professional Shopify development service in California focuses on a fast and scalable store that is built to increase sales.",
  },
  {
    id: 3,
    question: "How can a Shopify development agency help?",
    answer:
      "A Shopify development agency in California offers end-to-end services, allowing you to start selling in weeks.",
  },
  {
    id: 4,
    question: "Can you help me migrate my existing store to Shopify?",
    answer:
      "Yes, we can migrate your existing store to Shopify without any data loss or downtime.",
  },
  {
    id: 5,
    question: "How fast can you build a Shopify store?",
    answer:
      "It depends on the project scope, but from design to deployment, a Shopify store can take 2 weeks to 2 months.",
  },
];

const ShopifyDevelopment = () => {
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
          secClass="shopifyDevBanner bannerOverlay"
          bgImage={innerChildBannerBg}
          title="Reach Millions of Customers with Shopify Development"
          // btnText=""
          // description=""
          // bannerList={[
          //   "",
          // ]}
        />

        <InnerChildAbout
          secTitle1="Your Partner for  "
          secTitle2="Shopify Development"
          secTitle3="in California"
          description="A Shopify store is more than what you see on the screens. Apart from the stunning design, it’s the clean code and smart functionality that make it a success. Our Shopify website development services in California are built to give you exactly that:"
          // description2=""
          image={ourWorkheroImgWebp}
          aboutData={aboutSectionData}
        />

        <WhyItMatters
          secTitle1="Why Do You Need"
          secTitle2="Shopify?"
          // secTitle3=""
          secDescription="Shopify gives you access to the world's largest e-commerce platform, developed to simplify management, drive sales, and scale globally."
          cardData={whyMatterData}
        />

        <PixelPerfectSec
          secTitle="Where Great Ideas Meet"
          secTitleBlue="Great Execution"
          secDescription="Explore the top brands we’ve helped increase sales via Shopify Development in California."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ContactForm
          secTitle="Hire Shopify Experts Today!?"
          secDescription="Want to reach millions of customers? Connect with, build a Shopify store, and start selling right away!"
          btnText="Let’s Connect"
        />

        <SinglePricingPlan
          secTitle="Affordable, Flexible, and Built to Scale"
          secDescription="From startups to enterprises looking to scale through Shopify, we’ve got a plan that fits right for everyone!"
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={shopifyWebsitePricingPlansData}
        />

        <FrequentQuestions
          FrequentQuestions="homeFrequentQuestions"
          secTitle="Have a question? We have all the answers!"
          faqData={faqHomeData}
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

export default ShopifyDevelopment;
