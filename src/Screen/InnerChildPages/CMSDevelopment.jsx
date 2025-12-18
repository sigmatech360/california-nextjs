'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import innerChildBannerBg from "../../Assets/services-cmsDev-banner-bg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/service-webDesign-pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/service-webDesign-pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/service-webDesign-pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/service-webDesign-pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/service-webDesign-pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/service-webDesign-pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/ourworkheroimg.webp";

import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Home";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import InnerChildAbout from "../../components/InnerChildAbout";

import creativelogo from "../../Assets/creativelogo.svg";
import digitaltogo from "../../Assets/digitaltogo.svg";
import softwarelogo from "../../Assets/softwarelogo.svg";
import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import smart from "../../Assets//smart.svg";
import { eCommerseWebsitePricingPlansData } from "../../data";

const aboutSectionData = [
  {
    id: 1,
    image: creativelogo,
    name: "WordPress",
    description: "Custom themes, plugins, SEO",
  },
  {
    id: 2,
    image: digitaltogo,
    name: "WordPress",
    description: "Custom themes, plugins, SEO",
  },
  {
    id: 3,
    image: softwarelogo,
    name: "WordPress",
    description: "Custom themes, plugins, SEO",
  },
  {
    id: 4,
    image: creativelogo,
    name: "WordPress",
    description: "Custom themes, plugins, SEO",
  },
  {
    id: 5,
    image: digitaltogo,
    name: "WordPress",
    description: "Custom themes, plugins, SEO",
  },
  {
    id: 6,
    image: softwarelogo,
    name: "WordPress",
    description: "Custom themes, plugins, SEO",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: smart,
    title: "Control Your COntent",
    description: "Manage text, images, pages & blogs instantly",
  },
  {
    id: 2,
    image: smart,
    title: "Control Your COntent",
    description: "Manage text, images, pages & blogs instantly",
  },
  {
    id: 3,
    image: smart,
    title: "Control Your COntent",
    description: "Manage text, images, pages & blogs instantly",
  },
];

export const webDesignPortfolioData = [
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

const CMSDevelopment = () => {
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
    <Layout>
      <ServiceBanner
        bgImage={innerChildBannerBg}
        title="Creative Website Designs That Work Right"
        description="California Web Coders is the top web design agency in California, creating fast, visually stunning, and high-performing websites that help businesses grow, engage their audience, and stand out online."
        // bannerList={[
        //   "",
        // ]}
      />

      <InnerChildAbout
        secTitle1="Web Designs That Build"
        secTitle2="Trust"
        secTitle3="With Results"
        description="Our reputation as a results-driven website design company is built on experience, creativity, and innovation. We craft responsive web designs that not only look flawless across all devices but also boost engagement, improve user experience, and drive meaningful conversions."
        // description2=""
        image={ourWorkheroImgWebp}
        aboutData={aboutSectionData}
      />

      <WhyItMatters
        secTitle1="Why"
        secTitle2="CMS"
        secTitle3="Matters"
        secDescription="Our websites are built for easy updates, simple navigation, and intuitive use, so you stay in control without the tech stress."
        cardData={whyMatterData}
      />

      <PixelPerfectSec
        secTitle="Get Inspired By Our Beautiful"
        secTitleBlue="Website Designs"
        secDescription="Explore our hand-picked portfolio featuring sleek and high-performing websites built for our esteemed clients. Each project highlights our commitment to design excellence, responsive layouts, and results that drive growth."
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
  );
};

export default CMSDevelopment;
