'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import innerChildBannerBg from "../../Assets/newChildPagesAssets/wordpressImages/innerChildBannerBg.webp";
import innerChildBannerImg from "../../Assets/newChildPagesAssets/wordpressImages/innerChildBannerImg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/newChildPagesAssets/wordpressImages/pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/wordpressImages/pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/wordpressImages/pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/wordpressImages/pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/wordpressImages/pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/wordpressImages/pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/newChildPagesAssets/wordpressImages/innerChildAboutImg.webp";

import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Home";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import InnerChildAbout from "../../components/InnerChildAbout";

import innerChildAbtIcon1 from "../../Assets/newChildPagesAssets/wordpressImages/innerChildAbtIcon1.webp";
import innerChildAbtIcon2 from "../../Assets/newChildPagesAssets/wordpressImages/innerChildAbtIcon2.webp";
import innerChildAbtIcon3 from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildAbtIcon1.webp";
import innerChildAbtIcon4 from "../../Assets/newChildPagesAssets/wordpressImages/innerChildAbtIcon4.webp";
import innerChildAbtIcon5 from "../../Assets/newChildPagesAssets/wordpressImages/innerChildAbtIcon5.webp";
import innerChildAbtIcon6 from "../../Assets/newChildPagesAssets/eCommerceImages/innerChildAbtIcon6.webp";

import creativelogo from "../../Assets/creativelogo.svg";
import digitaltogo from "../../Assets/digitaltogo.svg";
import softwarelogo from "../../Assets/softwarelogo.svg";
import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import smart from "../../Assets//smart.svg";

import InnerChildWhyMatterIcon1 from "../../Assets/newChildPagesAssets/wordpressImages/InnerChildWhyMatterIcon1.webp";
import InnerChildWhyMatterIcon2 from "../../Assets/newChildPagesAssets/wordpressImages/InnerChildWhyMatterIcon2.webp";
import InnerChildWhyMatterIcon3 from "../../Assets/newChildPagesAssets/wordpressImages/InnerChildWhyMatterIcon3.webp";

import { eCommerseWebsitePricingPlansData, informativeWebsitePricingPlansData } from "../../data";


const aboutSectionData = [
  {
    id: 1,
    image: innerChildAbtIcon1,
    name: "Leading Platform",
    description: "World’s top website development platform.",
  },
  {
    id: 2,
    image: innerChildAbtIcon2,
    name: "Design Flexibility",
    description: "Thousands of pre-built templates to choose from.",
  },
  {
    id: 3,
    image: innerChildAbtIcon3,
    name: "Plugin Ecosystem",
    description:
      "Packed with developer-supported plugins to enhance performance and security.",
  },
  {
    id: 4,
    image: innerChildAbtIcon4,
    name: "SEO Advantage",
    description: "Built with SEO tools that drive organic traffic.",
  },
  {
    id: 5,
    image: innerChildAbtIcon5,
    name: "Smart Dashboard",
    description: "User-friendly dashboard for simple updates and control.",
  },
  {
    id: 6,
    image: innerChildAbtIcon6,
    name: "Scalability",
    description:
      "Drag-and-drop tools that expand with your website as your business grows.",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: InnerChildWhyMatterIcon1,
    title: "Unlimited Customization",
    description: "Unlimited Customization",
  },
  {
    id: 2,
    image: InnerChildWhyMatterIcon2,
    title: "Performance Optimizations",
    description: "Increased performance for quick, smooth browsing anywhere.",
  },
  {
    id: 3,
    image: InnerChildWhyMatterIcon3,
    title: "Easy Management",
    description:
      "The drop-and-drop feature makes it easy for anyone to manage.",
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

const faqWordpressData = [
  {
    id: 1,
    question: "What does a WordPress development company do?",
    answer:
      "A WordPress company in California builds, launches, and optimizes websites for increased performance.",
  },
  {
    id: 2,
    question: "What services are included in WordPress development?",
    answer:
      "WordPress development service covers design, development, coding, optimization, launching, and maintenance of the website.",
  },
  {
    id: 3,
    question: "Is WordPress good for my business website?",
    answer:
      "Yes, WordPress is flexible and doesn’t require coding knowledge to manage the website.",
  },
  {
    id: 4,
    question: "Does WordPress support online stores?",
    answer:
      "Yes, through WooCommerce and with the support of thousands of plugins, WordPress has become the largest e-commerce website development platform.",
  },
  {
    id: 5,
    question: "What are the top 5 website development companies?",
    answer:
      "The top website development companies include California Web Coders, Texas Web Studios, NY Web Experts, Hyperlink InfoSystem, and Konstant Infosolutions.",
  },
];

const WordPressDevelopment = () => {
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
          title="Build, Customize, and Grow with WordPress Development"
          // description=""
          // bannerList={[
          //   "",
          // ]}
          image={innerChildBannerImg}
        />

        <InnerChildAbout
          secTitle1="The Ranking"
          secTitle2="WordPress Development"
          secTitle3="Company in California"
          description="We provide solid WordPress websites with strong SEO! If you’re looking for a website that loads fast, runs smoothly, and looks great on every device, then this is the one. You’ll get it all here."
          // description2=""
          image={ourWorkheroImgWebp}
          aboutData={aboutSectionData}
        />

        <WhyItMatters
          secTitle1="Why California"
          secTitle2="Trusts Us"
          secTitle3="for WordPress"
          // secDescription="Our websites are built for easy updates, simple navigation, and intuitive use, so you stay in control without the tech stress."
          cardData={whyMatterData}
        />

        <PixelPerfectSec
          secTitle="What Our WordPress"
          secTitleBlue="Websites Look Like"
          secDescription="Explore a showcase of WordPress websites we’ve built from scratch. Each one is crafted for speed, style, and function, built to reflect the brand, engage users, and deliver real business results."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ContactForm
          secTitle="Want to Stay Ahead with a High-Quality Website?"
          secDescription="Book a free consultation with our website development experts to explore the opportunities for your unique website!"
          btnText="Let’s Connect"
        />

        <SinglePricingPlan
          secTitle="Choose the Package of Your Choice!"
          secDescription="Our custom WordPress Development services in California include a range of features, designs, and functionalities. Explore the packages below to find the one that fits your requirements!"
          pricingPlanData={informativeWebsitePricingPlansData}
        />

        <FrequentQuestions
          FrequentQuestions="homeFrequentQuestions"
          secTitle="Everything You Need to Know about WordPress Development"
          faqData={faqWordpressData}
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

export default WordPressDevelopment;
