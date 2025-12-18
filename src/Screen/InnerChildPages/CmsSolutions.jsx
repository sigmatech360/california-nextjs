'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import innerChildBannerBg from "../../Assets/newChildPagesAssets/cmsSolutions/innerChildBannerBg.webp";
import innerChildBannerImg from "../../Assets/newChildPagesAssets/cmsSolutions/innerChildBannerImg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/newChildPagesAssets/cmsSolutions/pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/cmsSolutions/pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/cmsSolutions/pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/cmsSolutions/pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/cmsSolutions/pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/cmsSolutions/pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/newChildPagesAssets/cmsSolutions/innerChildAboutImg.webp";

import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Home";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import InnerChildAbout from "../../components/InnerChildAbout";

import innerChildAbtIcon1 from "../../Assets/newChildPagesAssets/cmsSolutions/innerChildAbtIcon1.webp";
import innerChildAbtIcon2 from "../../Assets/newChildPagesAssets/cmsSolutions/innerChildAbtIcon2.webp";
import innerChildAbtIcon3 from "../../Assets/newChildPagesAssets/cmsSolutions/innerChildAbtIcon3.webp";
import innerChildAbtIcon4 from "../../Assets/newChildPagesAssets/cmsSolutions/innerChildAbtIcon4.webp";
import innerChildAbtIcon5 from "../../Assets/newChildPagesAssets/cmsSolutions/innerChildAbtIcon5.webp";
import innerChildAbtIcon6 from "../../Assets/newChildPagesAssets/cmsSolutions/innerChildAbtIcon6.webp";

import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import InnerChildWhyMatterIcon1 from "../../Assets/newChildPagesAssets/cmsSolutions/InnerChildWhyMatterIcon1.webp";
import InnerChildWhyMatterIcon2 from "../../Assets/newChildPagesAssets/cmsSolutions/InnerChildWhyMatterIcon2.webp";
import InnerChildWhyMatterIcon3 from "../../Assets/newChildPagesAssets/cmsSolutions/InnerChildWhyMatterIcon3.webp";

import { eCommerseWebsitePricingPlansData } from "../../data";


const aboutSectionData = [
  {
    id: 1,
    image: innerChildAbtIcon1,
    name: "WordPress",
    description: "Custom themes, plugins, SEO",
  },
  {
    id: 2,
    image: innerChildAbtIcon2,
    name: "Shopify",
    description: "Online stores, integrations, checkout UX",
  },
  {
    id: 3,
    image: innerChildAbtIcon3,
    name: "Wix",
    description: "Fast, creative, easy builds",
  },
  {
    id: 4,
    image: innerChildAbtIcon4,
    name: "Custom CMS",
    description: "Tailored for advanced use cases",
  },
  {
    id: 5,
    image: innerChildAbtIcon5,
    name: "WooCommerce",
    description: "Scalable e-commerce for WordPress",
  },
  {
    id: 6,
    image: innerChildAbtIcon6,
    name: "Squarespace",
    description: "Clean, elegant portfolio sites",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: InnerChildWhyMatterIcon1,
    title: "Control Your Content",
    description: "Manage text, images, pages & blogs instantly.",
  },
  {
    id: 2,
    image: InnerChildWhyMatterIcon2,
    title: "Fast Time to Market",
    description: "Launch or update your site faster than ever.",
  },
  {
    id: 3,
    image: InnerChildWhyMatterIcon3,
    title: "Boost SEO & Rankings",
    description: "Structured data and easy meta controls.",
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

const CmsSolutions = () => {
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
          secClass="cmsSolutionBanner"
          bgImage={innerChildBannerBg}
          title="Flexible, Scalable, & Easy‑to‑Manage CMS Solutions"
          image={innerChildBannerImg}
          // description=""
          // bannerList={[
          //   "",
          // ]}
        />

        <InnerChildAbout
          secTitle1="We Specialize In All Major"
          secTitle2="CMS Platforms"
          // secTitle3=""
          description="We offer development across today’s top CMS platforms. Whether you're looking for open-source flexibility or drag-and-drop ease, we’ve got you covered."
          // description2=""
          image={ourWorkheroImgWebp}
          aboutData={aboutSectionData}
        />

        <WhyItMatters
          secTitle1="Why"
          secTitle2="CMS"
          secTitle3="Matters"
          secDescription="A well-built CMS puts you in control. Update content, upload media, or post a blog anytime—without relying on a developer. For growing businesses, content flexibility and SEO-readiness are game changers."
          cardData={whyMatterData}
        />

        <PixelPerfectSec
          secTitle="Get Inspired By Beautiful"
          secTitleBlue="Web Designs"
          secDescription="Each design is uniquely crafted to suit the specific needs of every business. We strive to showcase and enhance the individuality of your brand. Explore some of our recent projects below."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ContactForm
          secTitle="Ready To Discuss Your Project?"
          secDescription="Book a free consultation with our professionals in California Web Coders now to see how we can help your business maximize its growth"
          btnText="Let’s Chat"
        />

        <SinglePricingPlan
          secTitle="Smart Pricing for Smarter Control"
          secDescription="We offer flexible CMS packages tailored to match your business stage, whether you're a startup, a growing store, or an enterprise platform, we got a plan suitable just for you"
          pricingPlanData={eCommerseWebsitePricingPlansData}
        />

        <FrequentQuestions
          FrequentQuestions="homeFrequentQuestions"
          secTitle="Got Questions? We Are Happy To Answer!"
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

export default CmsSolutions;
