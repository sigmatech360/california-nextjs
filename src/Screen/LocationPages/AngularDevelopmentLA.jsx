"use client";

import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Layout from '../../components/layout'
import LocationHeroBanner from '../../components/LocationHeroBanner'
import BookConsultation from '../../components/BookConsultation'
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection'
import PixelPerfectSec from '../../components/PixelPerfectSec'
import SinglePricingPlan from '../../components/SinglePricingPlan'
import { wordpressWebsitePricingPlansData } from '../../data'
import ServiceBanner from '../../components/ServiceBanner'
import LocationContact from '../../components/LocationContact'
import LocationFaqs from '../../components/LocationFaqs'
import LocationSupport from '../../components/LocationSupport/Index'
import support1 from "../../Assets/locationpages/mba-los-angeles/guarrantee.svg";
import support2 from "../../Assets/locationpages/mba-los-angeles/support.svg";
import support3 from "../../Assets/locationpages/mba-los-angeles/ownership.svg";
import support4 from "../../Assets/locationpages/mba-los-angeles/money.svg";
import support5 from "../../Assets/locationpages/mba-los-angeles/Pentool.svg";
import pixleperfectimg1 from "../../Assets/locationpages/angular-development-location/portfolio-1.webp";
import pixleperfectimg2 from "../../Assets/locationpages/angular-development-location/portfolio-2.webp";
import pixleperfectimg3 from "../../Assets/locationpages/angular-development-location/portfolio-3.webp";
import pixleperfectimg4 from "../../Assets/locationpages/angular-development-location/portfolio-4.webp";
import pixleperfectimg5 from "../../Assets/locationpages/angular-development-location/portfolio-5.webp";
import pixleperfectimg6 from "../../Assets/locationpages/angular-development-location/portfolio-6.webp";
import herobanner from "../../Assets/locationpages/angular-development-location/herobanner.webp";
import chooseimg from "../../Assets/locationpages/angular-development-location/aboutimg.webp";
import gooddesignbg from "../../Assets/locationpages/angular-development-location/good-design-bg.webp";



const AngularDevelopmentLA = () => {

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
      header: " Why is Angular ideal for complex digital builds?",
      content:
        "Its structured architecture excels at managing heavy features without slowing down.",
    },
    {
      header: "Does Angular support fast, responsive interfaces?",
      content:
        "Yes, Angular keeps user experiences smooth and instant, even under load.",
    },
    {
      header: "Is Angular right for startups and enterprises alike?",
      content:
        "Absolutely, it scales beautifully regardless of company size.",
    },
    {
      header: "How does Angular compare to other frameworks?",
      content:
        "Angular remains stable across large modules and complex logic, where many frameworks lag.",
    },
    {
      header: " Will my Angular project need ongoing support?",
      content:
        "Ongoing updates maintain performance, security, and long-term reliability, which we provide.",
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
          secClass="mad-la-herobanner locate-wordpress-herobanner"
          bgImage={herobanner}
          sectitle="Outperform and Outpace Your Competition with Angular Development"
          secPara="Speed shapes user satisfaction, and Angular is built for brands that refuse to slow down. If you want digital experiences that react instantly, handle advanced logic with confidence, and stay reliable as your product grows, Angular delivers that level of performance. California Web Coders brings this capability to life as the trusted Angular development company in Los Angeles, CA, for businesses ready to build something powerful."
          btntxt="Start Your Angular Project"
        />
        <BookConsultation />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Development Designed for"
          secTitle2="Serious Performance"
          description="Angular rewards discipline, strong architecture, and long-term thinking, values we’ve shaped into the heart of our development process. When your project demands clean structure, dependable functionality, and a future-ready foundation, Angular becomes the smartest choice. And California Web Coders ensures you use it where it creates real impact."
          TouchBtn="d-none"
          btntext="Talk to Our Developers"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={chooseimg}
        />

        <PixelPerfectSec
          pixelSec="pixel-perfect-sec asetheic-portfolio-sec"
          minihead="Portfolio"
          secTitle="Angular That Powers Complex Builds"
          secDescription="Explore how we transform ideas into fast, stable, and intuitive products through expert Angular website development in Los Angeles, CA."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <SinglePricingPlan
          secTitle="Reliable & Affordable Pricing for Angular Projects"
          secDescription="Swipe through our pricing options and select the one that suits your business needs. Whatever you choose, you’ll receive the same commitment to quality, performance, and dependable Angular development."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ServiceBanner
          secClass="herobanner-imghide"
          leftCol="col-lg-6"
          bgImage={gooddesignbg}
          btnClass="theme-light mt-3"
          title="Why Angular Remains a Leader in Frontend Engineering"
          description="Google built Angular because no other framework supported the level of capability they needed. That same strength is now available for your product. Angular enables clear structure, smooth performance, and dependable scaling, perfect for complex digital experiences. With Angular, you can develop:"
           bannerList={[
            "Custom Websites",
            "Mobile Apps",
            "Single Page Applications",
            "Dashboards",
            "Online Tools",
          ]}
          description2="And More!"
          btnText="Start Your Project"
        />

        <LocationContact
          miniHead="Connect With Us"
          mainHead="Your Project Deserves the Right Framework"
          secPara="Choose California Web Coders for Angular development in Los Angeles, CA and experience the confidence of working with a top development agency in USA."
        />

        <LocationFaqs
          miniHead="Frequently Asked Questions"
          mainHead="Answered All Your Angular-Related"
          mainHeadSpan="Queries"
          secPara="Browse our FAQs for quick answers to your Angular questions. Didn’t find what you were looking for? Send us your query through the form, and we’ll make sure you get the right answer."
          faqs={faqsData}
        />

        <LocationSupport
          minihead="We Do What Others Can’t"
          mainheadSpan="Trusted by Americans,"
          mainhead="Driven by Results"
          mainPara="They say perfection doesn’t exist; we say they haven’t seen our Angular development."
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
  )
}

export default AngularDevelopmentLA