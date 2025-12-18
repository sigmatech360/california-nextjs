"use client";

import React, { useState } from "react";

import Layout from "../../components/layout";
import LocationHeroBanner from "../../components/LocationHeroBanner";
import BookConsultation from "../../components/BookConsultation";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import ServiceBanner from "../../components/ServiceBanner";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import LocationSupport from "../../components/LocationSupport/Index";
import Lightbox from "yet-another-react-lightbox";
import support1 from "../../Assets/locationpages/mba-los-angeles/guarrantee.svg";
import support2 from "../../Assets/locationpages/mba-los-angeles/support.svg";
import support3 from "../../Assets/locationpages/mba-los-angeles/ownership.svg";
import support4 from "../../Assets/locationpages/mba-los-angeles/money.svg";
import support5 from "../../Assets/locationpages/mba-los-angeles/Pentool.svg";
import herobanner from "../../Assets/locationpages/ecommerce-development-location/herobannerbg.webp";
import chooseimg from "../../Assets/locationpages/ecommerce-development-location/aboutimg.webp";
import pixleperfectimg1 from "../../Assets/locationpages/ecommerce-development-location/portfolio-1.webp";
import pixleperfectimg2 from "../../Assets/locationpages/ecommerce-development-location/portfolio-2.webp";
import pixleperfectimg3 from "../../Assets/locationpages/ecommerce-development-location/portfolio-3.webp";
import pixleperfectimg4 from "../../Assets/locationpages/ecommerce-development-location/portfolio-4.webp";
import pixleperfectimg5 from "../../Assets/locationpages/ecommerce-development-location/portfolio-5.webp";
import pixleperfectimg6 from "../../Assets/locationpages/ecommerce-development-location/portfolio-6.webp";
import gooddesignbg from "../../Assets/locationpages/ecommerce-development-location/good-design-bg.webp";



const ECommerceDevelopmentLA = () => {

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

  const faqsData = [
    {
      header:
        "Can you help me choose the right e-commerce platform?",
      content:
        "Yes, that’s what we do! We understand your idea, business goals, scalability needs, customer behavior, and the product you need to recommend the most optimized platform that gives you the best growth while not draining your budget.",
    },
    {
      header: "Do you optimize my store for speed and conversions?",
      content:
        "Absolutely, every store we build is engineered for fast load times, intuitive paths, reduced friction, and strategic UX that boosts conversions naturally.",
    },
    {
      header: "Can you integrate third party tools like CRMs, inventory systems, and marketing apps?",
      content:
        "Yes, we can integrate everything, such as CRM and ERP systems, payment gateways, analytics tools, subscriptions, and automation apps, everything your business needs.",
    },
    {
      header:
        "Will my store be ready for SEO and future marketing?",
      content:
        "Absolutely, all of our projects are responsive, built with a clean structure, schema support, strong product metadata, and optimized user experience so you can launch with an SEO advantage.",
    },
    {
      header:
        "What happens if I need new features later?",
      content:
        "Your store is built to evolve. We can add custom features, redesign pages, enhance performance, or expand your platform whenever your business grows.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed, 100%" },
    { image: support2, title: "24/7 Support" },
    { image: support3, title: "Your Web, You Own It 100%" },
    { image: support4, title: "Affordable and Reliable" },
    { image: support5, title: "Build for Growth & Scalability" },
  ];

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
        <LocationHeroBanner
          secClass="mad-la-herobanner reacjs-location-herobanner"
          bgImage={herobanner}
          sectitle="Build a Store that Performs Like a Hollywood Star"
          secPara="LA does not slow down, and neither should your store. Thus, we design e-commerce experiences that are easy to navigate, move fast, and look like they actually belong in California’s creative capital. Partner with an expert e-commerce website development agency in Los Angeles, CA, and watch your store rule the digital space."
          anotherpara="Sell fast, like a Hollywood star in Hollywood!"
          btntxt="Develop Your Store"
        />

        <BookConsultation />

        <WordPressPerformanceSection
          reverse
          minihead="The Best in Business"
          miniheadclass="shorttop-head"
          secTitle1="Big, Small, Custom, or Crazy Creative."
          secTitle2="We Build Them All!"
          description="There are a number of e-commerce platforms you can develop and deploy, but not all suit your business. Our e-commerce website development services in Los Angeles, CA, cover every store style worth building. From fast micro interactions to smooth buying paths, we craft digital experiences that feel intentional, modern, and unmistakably built for LA shoppers. We build:"
          landingList="landing-design-points domain-register-list"
          landingListItems={[
            "Shopify Stores",
            "WooCommerce Development",
            "Custom E-commerce Stores",
            "Wix Development",
            "Web Apps",
          ]}
          TouchBtn="d-none"
          btntext="Talk to Our Developers"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={chooseimg}
        />

        <PixelPerfectSec
          pixelSec="pixel-perfect-sec asetheic-portfolio-sec"
          minihead="Portfolio"
          secTitle="Stores So Good, Shoppers Just Can’t Ignore"
          secDescription="Scroll through some of our best e-commerce websites in Los Angeles, CA, all started with an idea, supported by a brand, and powered by our tech-stack!"
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <SinglePricingPlan
          secTitle="Affordable"
          secTitleBlue="Pricing that Makes"
          secTitleEnd="Growing Your Brand Easy"
          secDescription="Our React native development services in Los Angeles, CA, offer packages tailored to startups, scale-ups, and enterprises alike. Different stages, one unwavering goal: driving more sales."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ServiceBanner
          secClass="herobanner-imghide intelligent-banner"
          leftCol="col-lg-6"
          bgImage={gooddesignbg}
          btnClass="theme-light mt-3"
          title="Team Behind LA’s Most Reliable E-Commerce Stores"
          description="Our e-commerce website development company in Los Angeles, CA, is known for turning ambitious ideas into high-performing online stores, powering hundreds of businesses in California. We craft fast, intuitive shopping experiences using strategy, clarity, and modern design, making us the go-to choice for brands serious about winning online."
          btnText="Deploy Your Website"
        />

        <LocationContact
          miniHead="Contact Us"
          mainHead="Get Your Business Online"
          secPara="Serious about growth? Now we’re talking! Fill out the form and connect with us. You have the idea, we’ll show you the possibilities you can achieve with e-commerce website development."
        />

        <LocationFaqs
          miniHead="FAQs"
          mainHead="All Your Questions, Answered Here!"
          mainHeadSpan="Answer Here!"
          secPara="Here’s everything you usually wonder about before building your store, explained simply so you can move forward."
          faqs={faqsData}
        />

        <LocationSupport
          minihead="We Do What Others Can’t"
          mainheadSpan="Trusted by Americans,"
          mainhead="Driven by Results"
          mainPara="They say perfection doesn’t exist; we say they haven’t seen our webs!"
          supportCards={supportCardsData}
        />

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

export default ECommerceDevelopmentLA;
