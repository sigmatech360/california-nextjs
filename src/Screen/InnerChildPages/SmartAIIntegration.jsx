'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import Growyourbusiness from "../../components/growyourbusiness";
import CustomExperience from "../../components/CustomExperience";
import OurCustomService from "../../components/OurCustomService";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/smartaiintegration/pixel-1.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/smartaiintegration/pixel-2.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/smartaiintegration/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/smartaiintegration/pixel-4.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/smartaiintegration/pixel-5.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/smartaiintegration/pixel-6.webp";
import Restfulapi from "@/Assets/newChildPagesAssets/laraveldevelopment/restfulapis.svg";
import Webdesign from "@/Assets/newChildPagesAssets/smartaiintegration/web-design.svg";
import Seoicon from "@/Assets/newChildPagesAssets/smartaiintegration/seoicon.svg";
import serviceCardOne from "@/Assets/newChildPagesAssets/smartaiintegration/webapp-inner-img.webp";
import serviceCardTwo from "@/Assets/newChildPagesAssets/smartaiintegration/webdesign-inner-img.webp";
import serviceCardThree from "@/Assets/newChildPagesAssets/smartaiintegration/seo-inner-img.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import CustomGetInTouch from "../../components/CustomGetInTouch";
import ExperessEverything from "../../components/ExperessEverything";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";

import Image from "next/image";

export const faqHomeData = [
  {
    id: 1,
    question: "1. What are AI integration services?",
    answer:
      "AI integration connects machine learning tools with existing systems to automate tasks, analyze data, and enhance business intelligence.",
  },
  {
    id: 2,
    question: "2. Why choose California Web Coders for AI integration?",
    answer:
      "We deliver custom AI integration services California that merge automation, analytics, and strategy for measurable business growth.",
  },
  {
    id: 3,
    question: "3. Do you offer AI chatbot integration for websites California?",
    answer:
      "Yes, we build AI chatbots that handle real-time queries, support customers, and boost website engagement.",
  },
  {
    id: 4,
    question: "4. What industries benefit from AI integration?",
    answer:
      "AI is used in eCommerce, healthcare, real estate, finance, and logistics to improve performance, insights, and user experience.",
  },
  {
    id: 5,
    question:
      "5. Do you provide generative AI integration services California?",
    answer:
      "Yes, we develop generative AI solutions for content automation, predictive modeling, and intelligent data systems.",
  },
  {
    id: 6,
    question: "6. Can AI integrate with my current CRM or website?",
    answer:
      "Absolutely. Our AI integration agency California ensures smooth integration with your CRM, ERP, or web platform.",
  },
  {
    id: 7,
    question:
      "7. Do you offer AI data integration services California for analytics?",
    answer:
      "Yes, we unify all data points across tools and platforms, creating centralized systems for better decision-making.",
  },
  {
    id: 8,
    question: "8. What’s the timeline for an AI integration project?",
    answer:
      "Most integrations take 4-8 weeks, depending on system complexity, data structure, and AI capabilities required.",
  },
  {
    id: 9,
    question: "9. Do you provide ongoing AI maintenance or optimization?",
    answer:
      "Yes, our team continuously refines AI models and systems to maintain accuracy, speed, and performance.",
  },
  {
    id: 10,
    question:
      "10. Are your AI integration solutions affordable for small businesses?",
    answer:
      "Yes, our affordable AI integration services California are scalable for startups and enterprises alike, results first, costs transparent.",
  },
];

const SmartAIIntegration = () => {
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

  const serviceCards = [
    {
      id: 1,
      icon: <Image src={Restfulapi.src} alt="Restfulapi" width={40} height={40} />,
      serviceCardHead: "Web App Development",
      serviceCardPara:
        "We develop powerful web applications designed for performance, scalability, and intelligence. Every app integrates with AI tools to enhance automation, analytics, and real-time decision-making for your business.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <Image src={Webdesign.src} alt="Webdesign" width={40} height={40} />,
      serviceCardHead: "Website Design",
      serviceCardPara:
        "Our website design team blends creativity and strategy to build visually stunning, conversion-focused websites that complement your AI-driven experiences while reinforcing your brand identity and user engagement.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <Image src={Seoicon.src} alt="Seoicon" width={40} height={40} />,
      serviceCardHead: "Search Engine Optimization",
      serviceCardPara:
        "Through smart automation and data analysis, our SEO experts use AI to identify opportunities, improve rankings, and create content strategies that deliver consistent, measurable growth for your business.",
      serviceCardImg: serviceCardThree,
    },
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
        <ServiceBanner
          secClass="smartai-hero-sec"
          leftCol="col-lg-8"
          rowClass="row justify-content-center text-center"
          btnClass="theme-light mt-3"
          title="Smarter Systems Through AI Integration"
          description="Ai is your growth partner, not your competition. Our AI integration services in California help businesses automate, analyze, and adapt faster with intelligent, data-driven solutions that enhance performance and decision-making."
          btnText="Get A Free React Quote"
        />

        <Growyourbusiness
          title1="Wanna Make AI Your Best Friend in"
          title2="Productivity? "
          btnText="Get Started!"
        />

        <CustomExperience />

        <OurCustomService
          miniHead="Our Services"
          secTitleBlue="Smarter Integrations,"
          secLastTitle="Stronger Results"
          customServicePara="At California Web Coders, our AI integration agency in California connects intelligence with innovation. We combine AI, web development, and automation to build smarter ecosystems that enhance business efficiency and customer experiences."
          customServiceBtn="Start Your Project"
          serviceCards={serviceCards}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="AI Projects That Redefined Efficiency"
          secDescription="From chatbots to predictive analytics, our projects reflect how AI turns complex systems into simple, scalable, and impactful business tools."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ExperessEverything />

        <WordPressPerformanceSection
          afterConainerClass="aipower-bg-sec"
          secTitle1="Ready to Bring AI Into Your Business?"
          description="AI is only powerful when it’s purposeful. Let our AI integration company in California show you how intelligence, strategy, and automation can work together for results that matter"
          listClass="d-none"
          TouchBtn="d-none"
          serviceImg="d-none"
          btntext="Let’s Integrate AI Today"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <CustomGetInTouch />

        {/* <SinglePricingPlan
          pricingSecClass="smartai-pricing-sec"
          secTitle="Explore The"
          secTitleBlue="Packages"
          secDescription="We customize our AI integration services pricing for every business size and requirement ensuring flexible, scalable solutions that deliver tangible returns."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          faqsSecClass="smartai-faqs-sec faqs-sec"
          secTitle="Frequently Asked Questions For AI Integration Services."
          FrequentQuestions="homeFrequentQuestions"
          faqData={faqHomeData}
        />

        <Suspense fallback={<Loader />}>
          <BlogSection categorySlug="cms-development" />
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

export default SmartAIIntegration;
