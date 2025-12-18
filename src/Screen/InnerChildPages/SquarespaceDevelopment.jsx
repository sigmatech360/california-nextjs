'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import innerChildBannerBg from "../../Assets/newChildPagesAssets/squareSpaceImages/innerChildBannerBg.webp";
import innerChildBannerImg from "../../Assets/newChildPagesAssets/squareSpaceImages/innerChildBannerImg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/newChildPagesAssets/squareSpaceImages/pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/squareSpaceImages/pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/squareSpaceImages/pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/squareSpaceImages/pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/squareSpaceImages/pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/squareSpaceImages/pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/newChildPagesAssets/squareSpaceImages/innerChildAboutImg.webp";

import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import InnerChildAbout from "../../components/InnerChildAbout";

import innerChildAbtIcon1 from "../../Assets/newChildPagesAssets/squareSpaceImages/innerChildAbtIcon1.webp";
import innerChildAbtIcon2 from "../../Assets/newChildPagesAssets/squareSpaceImages/innerChildAbtIcon2.webp";
import innerChildAbtIcon3 from "../../Assets/newChildPagesAssets/squareSpaceImages/innerChildAbtIcon3.webp";
import innerChildAbtIcon4 from "../../Assets/newChildPagesAssets/squareSpaceImages/innerChildAbtIcon4.webp";
import innerChildAbtIcon5 from "../../Assets/newChildPagesAssets/squareSpaceImages/innerChildAbtIcon5.webp";
import innerChildAbtIcon6 from "../../Assets/newChildPagesAssets/squareSpaceImages/innerChildAbtIcon6.webp";

import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import InnerChildWhyMatterIcon1 from "../../Assets/newChildPagesAssets/squareSpaceImages/InnerChildWhyMatterIcon1.webp";
import InnerChildWhyMatterIcon2 from "../../Assets/newChildPagesAssets/squareSpaceImages/InnerChildWhyMatterIcon2.webp";
import InnerChildWhyMatterIcon3 from "../../Assets/newChildPagesAssets/squareSpaceImages/InnerChildWhyMatterIcon3.webp";

import { eCommerseWebsitePricingPlansData, squareWebsitePricingPlansData } from "../../data";


const aboutSectionData = [
  {
    id: 1,
    image: innerChildAbtIcon1,
    name: "Fresh Designs",
    description: "Clean and trendy Squarespace designs",
  },
  {
    id: 2,
    image: innerChildAbtIcon2,
    name: "SEO Perfection",
    description: "Optimized for SEO and performance",
  },
  {
    id: 3,
    image: innerChildAbtIcon3,
    name: "Post-Launch Support",
    description: "Simple to manage after launch",
  },
  {
    id: 4,
    image: innerChildAbtIcon4,
    name: "Diverse Design Options",
    description: "Perfect fit for any business type",
  },
  {
    id: 5,
    image: innerChildAbtIcon5,
    name: "Customizable Sites",
    description: "Customizable for your needs",
  },
  {
    id: 6,
    image: innerChildAbtIcon6,
    name: "Results Oriented",
    description: "Result-oriented strategies",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: InnerChildWhyMatterIcon1,
    title: "Strategic Design",
    description:
      "Squarespace websites that combine elegant design with measurable business results.",
  },
  {
    id: 2,
    image: InnerChildWhyMatterIcon2,
    title: "Performance-Driven",
    description:
      "Creativity blended with functionality ensures every project performs at its absolute best.",
  },
  {
    id: 3,
    image: InnerChildWhyMatterIcon3,
    title: "Trusted in California",
    description:
      "Known for expertise, consistency, and detail, we’re the go-to choice for California businesses.",
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

const faqSquareSpaceData = [
  {
    id: 1,
    question:
      "1. Why choose California Web Coders for Squarespace development?",
    answer:
      "Because our Squarespace development in California blends elegant design with functionality, creating websites that look stunning and deliver results.",
  },
  {
    id: 2,
    question: "2. Can Squarespace websites rank on Google?",
    answer:
      "Yes, with proper SEO optimization, Squarespace websites can achieve strong rankings and visibility across Google search results.",
  },
  {
    id: 3,
    question:
      "3. Do you provide support after launching my Squarespace website?",
    answer:
      "Yes, our Squarespace development in California includes post-launch support, making it simple for clients to manage and grow.",
  },
  {
    id: 4,
    question: "4. Is Squarespace good for professional business websites?",
    answer:
      "Yes, Squarespace is excellent for professional businesses, offering design flexibility, SEO features, and reliable hosting in one platform.",
  },
  {
    id: 5,
    question: "5. Can you redesign my old Squarespace website?",
    answer:
      "Absolutely. We modernize outdated Squarespace websites with fresh layouts, improved performance, and features tailored to business goals.",
  },
  {
    id: 6,
    question:
      "6. What industries has California Web Coders built Squarespace websites for?",
    answer:
      "We’ve built Squarespace websites for small businesses, startups, e-commerce brands, and professionals across California’s diverse industries.",
  },
  {
    id: 7,
    question: "7. Is Squarespace better than WordPress for beginners?",
    answer:
      "For beginners, Squarespace is simpler due to drag-and-drop tools, though WordPress offers deeper customization and scalability.",
  },
  {
    id: 8,
    question: "8. Do you build fully custom Squarespace designs?",
    answer:
      "Yes, every Squarespace website we build is 100% custom-designed, reflecting brand identity and specific client requirements.",
  },
  {
    id: 9,
    question: "9. Is Squarespace good for e-commerce websites?",
    answer:
      "Yes, Squarespace is perfect for e-commerce with secure checkout, product management, and built-in tools for online growth.",
  },
  {
    id: 10,
    question: "10. How long does it take to build a Squarespace website?",
    answer:
      "Most Squarespace websites are completed within 3–5 weeks, depending on complexity, features, and specific business requirements.",
  },
];

const SquarespaceDevelopment = () => {
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
          title="California’s Trusted Squarespace Website Experts!"
          btnText="Learn More"
          // description=""
          // bannerList={[
          //   "",
          // ]}
          image={innerChildBannerImg}
        />

        <InnerChildAbout
          secTitle1="Squarespace Websites With Beauty and Brains"
          // secTitle2=""
          // secTitle3=""
          description="Squarespace offers endless creative options, but using them effectively is what sets a website apart. Through our Squarespace development services in California, we align the platform’s design flexibility with your unique business needs. The result is a site that not only looks stunning but also works efficiently to achieve results."
          // description2=""
          image={ourWorkheroImgWebp}
          aboutData={aboutSectionData}
        />

        <WhyItMatters
          secTitle1="The"
          secTitle2="Choice of Businesses"
          secTitle3="Across California"
          secDescription="California brands trust us because we build websites that are not only stylish but also strategic, user-friendly, and growth-focused."
          cardData={whyMatterData}
        />

        <PixelPerfectSec
          secTitle="See How We’ve"
          secTitleBlue="Transformed Businesses"
          secDescription="We make sure every part of your brand is customized to meet your goals, so your site feels like a true extension of your business. Take a look at our portfolio to see how we’ve transformed these features into real results."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ContactForm
          secTitle="Connect With California Web Developers Now"
          secDescription="Our Squarespace web developer in California will reach out to you as soon as possible to plan your next step to success."
          btnText="Let’s Chat"
        />

        <SinglePricingPlan
          secTitle="Flexible Options for Any Budget"
          secDescription="Our packages are built for flexibility, giving you exactly what you need without unnecessary extras. They’re designed to deliver value while keeping your goals front and center."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={squareWebsitePricingPlansData}
        />

        <FrequentQuestions
          FrequentQuestions="homeFrequentQuestions"
          secTitle="Answering Your Common Queries"
          faqData={faqSquareSpaceData}
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

export default SquarespaceDevelopment;
