'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";

import innerChildBannerBg from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildBannerBg.webp";

import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/newChildPagesAssets/eCommerceImages/pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/eCommerceImages/pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/eCommerceImages/pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/eCommerceImages/pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/eCommerceImages/pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/eCommerceImages/pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildAboutImg.webp";

import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import InnerChildAbout from "../../components/InnerChildAbout";

import innerChildAbtIcon1 from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildAbtIcon1.webp";
import innerChildAbtIcon2 from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildAbtIcon2.webp";
import innerChildAbtIcon3 from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildAbtIcon3.webp";
import innerChildAbtIcon4 from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildAbtIcon4.webp";
import innerChildAbtIcon5 from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildAbtIcon5.webp";
import innerChildAbtIcon6 from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildAbtIcon6.webp";

import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import InnerChildWhyMatterIcon1 from "../../Assets/newChildPagesAssets/eCommerceImages/InnerChildWhyMatterIcon1.webp";
import InnerChildWhyMatterIcon2 from "../../Assets/newChildPagesAssets/eCommerceImages/InnerChildWhyMatterIcon2.webp";
import InnerChildWhyMatterIcon3 from "../../Assets/newChildPagesAssets/eCommerceImages/InnerChildWhyMatterIcon3.webp";

import { eCommerseWebsitePricingPlansData } from "../../data";


const aboutSectionData = [
  {
    id: 1,
    image: innerChildAbtIcon1,
    name: "WordPress Development",
    description:
      "The most trusted platform for all kinds of website development.",
  },
  {
    id: 2,
    image: innerChildAbtIcon2,
    name: "Shopify Development",
    description:
      "Start selling in days with the words largest e-commerce platform.",
  },
  {
    id: 3,
    image: innerChildAbtIcon3,
    name: "Wix Development",
    description: "Drag, drop, done. Just like magic.",
  },
  {
    id: 4,
    image: innerChildAbtIcon4,
    name: "WooCommerce Development",
    description: "Build bold, scalable stores for bigger growth.",
  },
  {
    id: 5,
    image: innerChildAbtIcon5,
    name: "BigCommerce Development",
    description:
      "E-commerce platform that offers robust scalability to businesses.",
  },
  {
    id: 6,
    image: innerChildAbtIcon6,
    name: "Custom Development",
    description:
      "High-performance stores with endless creative and implementation freedom.",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: InnerChildWhyMatterIcon1,
    title: "Global Reach",
    description: "Sell anywhere, anytime, without limits.",
  },
  {
    id: 2,
    image: InnerChildWhyMatterIcon2,
    title: "Mobile First Solutions",
    description: "Built to perform equally good on all devices.",
  },
  {
    id: 3,
    image: InnerChildWhyMatterIcon3,
    title: "Reliable Gateways",
    description: "Secure payment integration customers can trust.",
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

const faqECommerceData = [
  {
    id: 1,
    question: "What does an e-commerce development company do?",
    answer:
      "An e-commerce development company designs, builds, and optimizes online stores for better reach and conversions.",
  },
  {
    id: 2,
    question: "What are e-commerce development services?",
    answer:
      "E-commerce development services include design, development, plugin integration, and optimization of the store for sales.",
  },
  {
    id: 3,
    question: "How long does e-commerce development take?",
    answer:
      "E-commerce development timelines vary, but most stores launch within weeks, depending on complexity.",
  },
  {
    id: 4,
    question: "What platforms do e-commerce development companies use?",
    answer:
      "The platform depends on the client’s needs and project scope, but common options include Shopify, WooCommerce, BigCommerce, Wix, WordPress, and Custom Development.",
  },
  {
    id: 5,
    question: "Can an e-commerce development agency migrate my store?",
    answer:
      "Yes, an e-commerce development agency can safely migrate your store without data loss or downtime.",
  },
];

const ECommerceDevelopment = () => {
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
          secClass="bannerOverlay"
          leftCol="col-lg-8"
          // rightCol=""
          bgImage={innerChildBannerBg}
          title="Custom-Build, Conversion Optimized E-commerce Websites"
          // description=""
          // bannerList={[
          //   "",
          // ]}
        />

        <InnerChildAbout
          secTitle1="Platforms"
          secTitle2="We Reign Over"
          // secTitle3=""
          description="Our e-commerce website development services in California are built for businesses that want reliable, scalable online stores through custom solutions or builders, such as:"
          // description2=""
          image={ourWorkheroImgWebp}
          aboutData={aboutSectionData}
        />

        <WhyItMatters
          secTitle1="Dominate"
          secTitle2="Online Sales"
          secTitle3="with E-commerce"
          secDescription="Billions of people in the world means billions of potential customers. Reach them wherever they are with smart e-commerce solutions built to maximize your revenue."
          cardData={whyMatterData}
        />

        <PixelPerfectSec
          secTitle="Explore E-commerce Projects Powered by"
          secTitleBlue="California Web Coders"
          secDescription="Be it minimalist, shape, or bold designs, our portfolio is filled with creative websites that perform as beautifully as they look."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ContactForm
          secTitle="Want to be the Next E-commerce Giant??"
          secDescription="California Web Coders has the expertise and tools you need to launch a successful online store. Reach out to us and start selling in days."
          btnText="Let’s Connect"
        />

        <SinglePricingPlan
          secTitle="Plan that Fits Your Goals"
          secDescription="We offer flexible pricing for businesses of all sizes. Choose a plan that works for you and get started with expert e-commerce website development in California."
          pricingPlanData={eCommerseWebsitePricingPlansData}
        />

        <FrequentQuestions
          FrequentQuestions="homeFrequentQuestions"
          secTitle="The Answers You’ve Been Searching For"
          faqData={faqECommerceData}
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

export default ECommerceDevelopment;
