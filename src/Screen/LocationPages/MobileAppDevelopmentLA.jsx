"use client";

import React, { useState } from "react";
import Layout from "../../components/layout";
import LocationHeroBanner from "../../components/LocationHeroBanner";
import herobanner from "../../Assets/locationpages/mba-los-angeles/herobannerbg.webp";
import chooseimg from "../../Assets/locationpages/mba-los-angeles/aboutimg.webp";
import BookConsultation from "../../components/BookConsultation";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import pixleperfectimg1 from "../../Assets/locationpages/mba-los-angeles/portfolio-1.webp";
import pixleperfectimg2 from "../../Assets/locationpages/mba-los-angeles/portfolio-2.webp";
import pixleperfectimg3 from "../../Assets/locationpages/mba-los-angeles/portfolio-3.webp";
import pixleperfectimg4 from "../../Assets/locationpages/mba-los-angeles/portfolio-4.webp";
import pixleperfectimg5 from "../../Assets/locationpages/mba-los-angeles/portfolio-5.webp";
import pixleperfectimg6 from "../../Assets/locationpages/mba-los-angeles/portfolio-6.webp";
import support1 from "../../Assets/locationpages/mba-los-angeles/guarrantee.svg";
import support2 from "../../Assets/locationpages/mba-los-angeles/support.svg";
import support3 from "../../Assets/locationpages/mba-los-angeles/ownership.svg";
import support4 from "../../Assets/locationpages/mba-los-angeles/money.svg";
import support5 from "../../Assets/locationpages/mba-los-angeles/Pentool.svg";
import gooddesignbg from "../../Assets/locationpages/mba-los-angeles/good-design-bg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import ServiceBanner from "../../components/ServiceBanner";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import LocationSupport from "../../components/LocationSupport/Index";
import Lightbox from "yet-another-react-lightbox";


const MobileAppDevelopmentLA = () => {
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
        "How long does it take to develop a mobile app in Los Angeles, CA?",
      content:
        "The duration depends on the project's complexity, but ideally, a medium-sized app takes between 8 and 16 weeks from design to deployment. For larger apps or ERP solutions, we create a detailed roadmap by breaking the project into sprints. This way, development stays transparent, and you can see your app come to life with every implementation phase clearly demonstrated.",
    },
    {
      header: "What platforms do you specialize in for app development?",
      content:
        "We offer both Android and iOS app development in Los Angeles, CA, along with cross-platform solutions built for speed, scalability, and consistent user experience across devices.",
    },
    {
      header: "Do you offer post-launch app support and maintenance?",
      content:
        "Yes, we believe app maintenance is as vital as good app development, as it keeps the platform fast and reliable! We offer ongoing technical support, updates, and optimization services to ensure your app stays fast, secure, and compatible with the latest operating systems.",
    },
    {
      header:
        "Can you integrate my app with existing business systems or APIs?",
      content:
        "Absolutely, whether it’s CRM, ERP, or custom APIs, our custom mobile app development services in Los Angeles, CA, ensure smooth integration with your existing ecosystem, without any downtime.",
    },
    {
      header:
        "What makes California Web Coders different from other app development companies in Los Angeles?",
      content:
        "We don’t just build apps; we build growth engines. Every decision is made to maximize engagement, retention, and conversions. That’s what makes us more than developers; we’re your strategic tech partners.",
    },
    {
      header: "Do you help with app uploading and publishing on app stores?",
      content:
        "Yes, publishing the app on the App Store and Google Play is part of our process. We handle the entire submission, optimization, and approval steps to ensure your app meets all platform guidelines and goes live smoothly without delays.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed, 100%" },
    { image: support2, title: "Round-the-Clock Support" },
    { image: support3, title: "Your App, You Own It!" },
    { image: support4, title: "54% Increase in Sales" },
    { image: support5, title: "Build for Growth" },
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
          secClass="mad-la-herobanner"
          bgImage={herobanner}
          sectitle="Turn that Spark of an Idea into Mobile Apps Developed to Win!"
          secPara="Big idea? Let’s turn it into something people can tap, swipe, and love! Our mobile app development company in Los Angeles builds sleek, smart, and scalable apps that people love to keep coming back to. Built for performance, security, and growth, our mobile apps are like your business, right in the palm of their hands, very accessible, and designed to convert!"
          btntxt="Let’s Develop & Deploy"
        />
        <BookConsultation />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Because Ordinary Apps Don’t"
          secTitle2="Live on Every Device!"
          description="We’re not just a mere mobile app development agency in Los Angeles, CA. We’re your long-term tech partner, and the powerhouse of thousands of American businesses that have chosen growth through custom mobile app development services in Los Angeles, CA, powered by California Web Coders."
          descriptiontwo="With 20+ years of digital experience, our team combines innovation with execution to deliver apps that perform flawlessly across devices. We build, optimize, and evolve your app to dominate the market."
          landingList="landing-design-points domain-register-list"
          landingListItems={[
            "End-to-end iOS and Android app development",
            "Optimized for performance, UX, and conversions",
            "Scalable architecture for startups and enterprises",
          ]}
          TouchBtn="d-none"
          btntext="Let’s Touch New Heights"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={chooseimg}
        />

        <PixelPerfectSec
          pixelSec="pixel-perfect-sec asetheic-portfolio-sec"
          minihead="Our Portfolio"
          secTitle="Businesses We Have Empowered Across America"
          secDescription="Swipe through and see stunning UIs, high-performing UXs, and powerful mobile apps that have played a great part in taking business to new heights!"
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />
{/* 
        <SinglePricingPlan
          secTitle="Invest in"
          secTitleBlue="Apps"
          secTitleEnd="That Pay You Back"
          secDescription="Invest in Apps That Pay You Back
          Affordable, transparent, and flexible plans designed to fit your project scale. Discover your mobile app development cost in Los Angeles, CA, today!"
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ServiceBanner
          secClass="herobanner-imghide intelligent-banner"
          leftCol="col-lg-6"
          bgImage={gooddesignbg}
          btnClass="theme-light mt-3"
          title="California Web Coders: Your Growth Engine for Intelligent Apps"
          description="As the leading choice for native and cross-platform app development in Los Angeles, CA, we collaborate, innovate, and accelerate. You might call us a development company, but we like to call ourselves the architects. Each design, every button placement, and every pixel we create has a single purpose: to make your app so fast, intuitive, and easy to navigate that people just can’t get enough of it."
          anotherpara="Whatever app you need, be it iOS or Android app development in Los Angeles, CA, we do it with one goal in mind: to make your app pay for itself and for your business too."
          bannerList={[
            "If it’s a retail app, people keep coming back, even for window shopping.",
            "If it’s a medical app, we make sure it integrates smoothly with your existing systems.",
            "If it’s a manufacturing app, we make sure it drives the workflow.",
          ]}
          btnText="Get Free Consultation"
        />

        <LocationContact
          miniHead="Let’s Connect"
          mainHead="Ready to Take a Leap Towards the Future?"
          secPara="Your next big app starts with a hello. Fill out the form and let’s make something incredible together!"
        />

        <LocationFaqs
          miniHead="FAQs"
          mainHead="All Your Mobile App-Related Queries,"
          mainHeadSpan="Answer Here!"
          secPara="Scroll through our FAQs to get all the answers. And if you can’t find your answer here, simply fill out the form and ask your question directly; we’re sure you’ll get your answers and your growth there!"
          faqs={faqsData}
        />

        <LocationSupport
          minihead="No One Does it Better than Us"
          mainheadSpan="Trusted by Americans,"
          mainhead=" Driven by Results"
          mainPara="They say perfection doesn’t exist; we say they haven’t seen our apps!"
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

export default MobileAppDevelopmentLA;
