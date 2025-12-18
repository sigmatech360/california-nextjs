"use client";

import React, { useState } from "react";
import Layout from "../../components/layout";
import LocationHeroBanner from "../../components/LocationHeroBanner";
import herobanner from "../../Assets/locationpages/reactjs-development-location/herobannerbg.webp";
import chooseimg from "../../Assets/locationpages/reactjs-development-location/aboutimg.webp";
import pixleperfectimg1 from "../../Assets/locationpages/reactjs-development-location/portfolio-1.webp";
import pixleperfectimg2 from "../../Assets/locationpages/reactjs-development-location/portfolio-2.webp";
import pixleperfectimg3 from "../../Assets/locationpages/reactjs-development-location/portfolio-3.webp";
import pixleperfectimg4 from "../../Assets/locationpages/reactjs-development-location/portfolio-4.webp";
import pixleperfectimg5 from "../../Assets/locationpages/reactjs-development-location/portfolio-5.webp";
import pixleperfectimg6 from "../../Assets/locationpages/reactjs-development-location/portfolio-6.webp";
import support1 from "../../Assets/locationpages/mba-los-angeles/guarrantee.svg";
import support2 from "../../Assets/locationpages/mba-los-angeles/support.svg";
import support3 from "../../Assets/locationpages/mba-los-angeles/ownership.svg";
import support4 from "../../Assets/locationpages/mba-los-angeles/money.svg";
import support5 from "../../Assets/locationpages/mba-los-angeles/Pentool.svg";
import gooddesignbg from "../../Assets/locationpages/reactjs-development-location/good-design-bg.webp";
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




const ReactDevelopmentLA = () => {

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
        "Why choose React over other frameworks?",
      content:
        "React loads faster, scales easier, and future-proofs your investment. Component reusability means we build once, deploy everywhere. Plus, the world's largest developer community ensures you're never stuck with outdated tech.",
    },
    {
      header: "How long does a typical React development project take?",
      content:
        "Most projects take 6-8 weeks. Complex enterprise apps run 3-6 months. We map timelines upfront, hit milestones religiously, and keep you updated weekly.",
    },
    {
      header: "Which are the leading React.js Development Companies in Los Angeles?",
      content:
        "The leading React development companies in Los Angeles are United Web Geeks, NY Web Experts, California Web Coders, and Texas Web Studio.",
    },
    {
      header:
        "Can you integrate React with my existing systems?",
      content:
        "Absolutely, React plays nicely with legacy systems, APIs, databases, and third-party platforms. We architect seamless integrations that enhance your current setup without requiring a complete overhaul.",
    },
    {
      header:
        "Do you offer maintenance after launch?",
      content:
        "Yes, launch is day one, not the finish line. Our maintenance packages cover updates, security patches, performance monitoring, and feature additions so your app evolves with your business.",
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
          secClass="mad-la-herobanner reacjs-location-herobanner"
          bgImage={herobanner}
          sectitle="Build Websites That Simply Skip the Loading Part"
          secPara="Slow websites lose customers. Fast ones build momentum. And when you want real speed, nothing beats a platform that practically skips the loading part. With our expert React development in Los Angeles, CA, your website becomes sharper, quicker, and far more powerful than anything built on traditional stacks."
          anotherpara="High-Speed Interfaces Built for High-Speed Ambitions."
          btntxt="Let’s React Now"
        />

        <BookConsultation />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="React Dev Company"
          secTitle2="Trusted by Americans"
          description="We don't just write code, we architect experiences that convert. As Los Angeles's premier React.js development company, we've mastered the art of building lightning-fast, scalable applications that users love and Google rewards. Your competition uses templates. We build competitive advantages."
          TouchBtn="d-none"
          btntext="Talk to Our Developers"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={chooseimg}
        />

        <PixelPerfectSec
          pixelSec="pixel-perfect-sec asetheic-portfolio-sec"
          minihead="Portfolio"
          secTitle="React Dev That Turned Ambitious Ideas Into Market Leaders"
          secDescription="Our React native app development services in Los Angeles, CA, have transformed concepts into powerful digital products that dominate their industries."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />


        
        {/* <SinglePricingPlan
          secTitle="Affordable"
          secTitleBlue="React Development"
          secTitleEnd="Packages"
          secDescription="Our React native development services in Los Angeles, CA, offer packages tailored to startups, scale-ups, and enterprises alike. Different stages, one unwavering goal: driving more sales."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ServiceBanner
          secClass="herobanner-imghide intelligent-banner"
          leftCol="col-lg-6"
          bgImage={gooddesignbg}
          btnClass="theme-light mt-3"
          title="Your One-Stop Shop for React Excellence in Los Angeles"
          description="As the leading React development company in Los Angeles, CA, we build performance right in the code, like it's non-negotiable. We build lightning-fast, zero-lag applications powered by cutting-edge workflow automation, intelligent chatbots, and seamless AI integration. While others struggle with sluggish interfaces, our React solutions deliver instant responsiveness, component reusability, and scalability that grows with your ambition. "
          btnText="Get Free Consultation"
        />

        <LocationContact
          miniHead="Connect With Us"
          mainHead="Develop Your Zero-Lag Website with California Web Coders"
          secPara="Have a question? What to show us your project? Or simply curious? Fill out the form and connect with us. We’ll help you unlock new possibilities with React."
        />

        <LocationFaqs
          miniHead="FAQs"
          mainHead="Got Questions? We've Got Answers!"
          mainHeadSpan="Answer Here!"
          secPara="Every React project starts with curiosity, but that curiosity ends here! We've rounded up the questions Los Angeles-based businesses ask the most."
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

export default ReactDevelopmentLA;
