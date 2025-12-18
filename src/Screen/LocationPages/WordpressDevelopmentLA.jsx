"use client";

import React, { useState } from "react";
import Layout from "../../components/layout";
import LocationHeroBanner from "../../components/LocationHeroBanner";
import herobanner from "../../Assets/locationpages/wordpress-development-location/herobanner.webp";
import chooseimg from "../../Assets/locationpages/wordpress-development-location/choose-img.webp";
import BookConsultation from "../../components/BookConsultation";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import pixleperfectimg1 from "../../Assets/locationpages/wordpress-development-location/portfolio-1.webp";
import pixleperfectimg2 from "../../Assets/locationpages/wordpress-development-location/portfolio-2.webp";
import pixleperfectimg3 from "../../Assets/locationpages/wordpress-development-location/portfolio-3.webp";
import pixleperfectimg4 from "../../Assets/locationpages/wordpress-development-location/portfolio-4.webp";
import pixleperfectimg5 from "../../Assets/locationpages/wordpress-development-location/portfolio-5.webp";
import pixleperfectimg6 from "../../Assets/locationpages/wordpress-development-location/portfolio-6.webp";
import support1 from "../../Assets/locationpages/mba-los-angeles/guarrantee.svg";
import support2 from "../../Assets/locationpages/mba-los-angeles/support.svg";
import support3 from "../../Assets/locationpages/mba-los-angeles/ownership.svg";
import support4 from "../../Assets/locationpages/mba-los-angeles/money.svg";
import support5 from "../../Assets/locationpages/mba-los-angeles/Pentool.svg";
import gooddesignbg from "../../Assets/locationpages/wordpress-development-location/gooddesign-bg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import ServiceBanner from "../../components/ServiceBanner";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import LocationSupport from "../../components/LocationSupport/Index";

import Lightbox from "yet-another-react-lightbox";

const WordpressDevelopmentLA = () => {
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
      header: "Can I create an eCommerce website with WordPress?",
      content:
        "Yes. WordPress has a platform called WooCommerce that is specifically designed to create eCommerce store, powered by thousands of developer-supported plugins for payment integration and many other things, making it a full-stack eCommerce development platform.",
    },
    {
      header: "Will I be able to manage my website after it’s built?",
      content:
        "Absolutely. We hand over full control with a clean, user-friendly dashboard and offer quick training, so you feel confident making updates anytime. You own your site, fully.",
    },
    {
      header: "Do you redesign existing websites or only build new ones?",
      content:
        "Both. Whether your current site just needs a facelift or a full rebuild, our WordPress development services in Los Angeles, CA, can modernize, reoptimize, and future-proof it without losing what works.",
    },
    {
      header: "How secure will my WordPress website be?",
      content:
        "Extremely. We implement enterprise-level security layers, SSL configurations, and regular updates to safeguard your site from threats. ",
    },
    {
      header: "Can you also build Custom WordPress Websites in Los Angeles, CA?",
      content:
        "Yes. We build both, drag-and-drop, and custom CMS solutions depending upon your business needs.",
    },
    {
      header: "Can a WordPress website really outperform a custom-coded one?",
      content:
        "In the right hands, absolutely. Our custom WordPress development services in Los Angeles, CA, blends flexibility with performance. With clean architecture, optimized databases, and precision coding, we make WordPress run like a bespoke system; scalable, fast, and future-proof.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed, 100%" },
    { image: support2, title: "24/7 Support" },
    { image: support3, title: "Your App, You Own It 100%" },
    { image: support4, title: "Power World’s 60% Web Page" },
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
          secClass="mad-la-herobanner locate-wordpress-herobanner"
          bgImage={herobanner}
          sectitle="Power Your Brand with WordPress Development in Los Angeles, CA"
          secPara="Redefine what a WordPress site can be. At California Web Coders, our WordPress development in Los Angeles, CA, develops high-performance, scalable platforms that are fast, optimized, and designed to put your brand in front of the world."
          bannerList={[
            "Pre-Built Themes",
            "1000s of Plugins",
            "Mobile Responsive",
          ]}
          anotherpara="Go beyond ordinary, scale with top WordPress development agencies in Los Angeles, CA. Click Now!"
          btntxt="Let’s Build"
        />
        <BookConsultation />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us"
          miniheadclass="shorttop-head"
          secTitle1="Not Just a Website,"
          secTitle2="Your Growth Engine"
          description="There’s no shortage of developers, but there’s only one California Web Coders."
          descriptiontwo="Trusted by Americans as the top WordPress development company in Los Angeles, CA, we obsess over details that most agencies overlook: speed architecture, crawl health, brand consistency, conversion flow, and emotional resonance. But not with us! Every build is a balance of logic and art, engineered to look flawless, rank faster, and deliver measurable business value. In Los Angeles’s competitive market, performance isn’t optional; it’s the foundation. Build it with California Web Coders!"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={chooseimg}
        />

        <PixelPerfectSec
          pixelSec="pixel-perfect-sec asetheic-portfolio-sec"
          minihead="Our Portfolio"
          secTitle="Our Collection of Designs That Attract and Code That Delivers"
          secDescription="Our portfolio is more than mere designs; it’s a testament to our commitment to powering businesses across the USA with WordPress website development in Los Angeles, CA."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <SinglePricingPlan
          secTitle="Affordable WordPress Development Services in Los Angeles, CA"
          secDescription="Our custom doesn’t mean costly. With flexible pricing, from startups to enterprises, we make premium WordPress development accessible to every business."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ServiceBanner
          secClass="herobanner-imghide"
          leftCol="col-lg-6"
          bgImage={gooddesignbg}
          btnClass="theme-light mt-3"
          title="Pixel-Perfect? Sure! Build to Dominate? Absolutely!"
          description="Great design increases conversion chance by 60%. We know that all of our WordPress websites have eye-catching designs. But that’s not all! Beyond striking visuals, speed, scalability, and responsiveness play an equally important part. Every build we create is optimized to work under pressure, with a single goal: to increase sales for your brand."
          description2="Good design catches the eye. Great development increases sales. Get both with California Web Coders. Click Now!"
          btnText="Talk to Us"
        />

        <LocationContact
          miniHead="Contact Us"
          mainHead="Get Your Business Online with WordPress"
          secPara="Serious about growth? Now we’re talking! Fill out the form and connect with us. You have the idea, we’ll show you the possibilities you can achieve with WordPress!"
        />

        <LocationFaqs
          miniHead="Frequently Asked Questions"
          mainHead="Before you ask Google,"
          mainHeadSpan="Ask Us!"
          secPara="It’s good to have reservations. Scroll through our FAQs to find the answer that you need. And if you don’t find your answer here. You can always contact us by filling out the form. Our team will be happy to assist you!"
          faqs={faqsData}
        />

        <LocationSupport
          minihead="The Best in the Business"
          mainheadSpan="Trusted by Americans,"
          mainhead="Driven by Results"
          mainPara="They say perfection doesn’t exist; we say they haven’t seen our web apps!"
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

export default WordpressDevelopmentLA;
