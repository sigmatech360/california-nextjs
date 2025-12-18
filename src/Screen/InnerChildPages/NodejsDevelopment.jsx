'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "@/Assets/newChildPagesAssets/nodejsdevelopment/nodejs-herobanner.webp";
import processFrontendPlug from "@/Assets/newChildPagesAssets/frontenddevelopment/frontend-plug.webp";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/nodejsdevelopment/pixel-1.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/nodejsdevelopment/pixel-2.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/nodejsdevelopment/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/nodejsdevelopment/pixel-4.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/nodejsdevelopment/pixel-5.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/nodejsdevelopment/pixel-6.webp";
import laptopVideo from "@/Assets/newChildPagesAssets/frontenddevelopment/process-side.mp4";
import serviceCardOne from "@/Assets/newChildPagesAssets/laraveldevelopment/ai-inner-img.webp";
import serviceCardTwo from "@/Assets/newChildPagesAssets/nodejsdevelopment/ecommerce-inner-img.webp";  
import serviceCardThree from "@/Assets/newChildPagesAssets/nodejsdevelopment/customweb-inner-img.webp";
import Custumweb  from "@/Assets/newChildPagesAssets/nodejsdevelopment/custom-web-icon.svg";
import Ecommerce  from "@/Assets/newChildPagesAssets/nodejsdevelopment/ecommerce.svg";
import Realtimeapp  from "@/Assets/newChildPagesAssets/nodejsdevelopment/realtimeapp.svg";
import Aiintegrate  from "@/Assets/newChildPagesAssets/laraveldevelopment/aiintegrate.svg";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import OurProcess from "../../components/OurProcess";
import OurCustomService from "../../components/OurCustomService";
import { TbApi } from "react-icons/tb";
import { FaAppStoreIos, FaNode } from "react-icons/fa";
import PixelPerfectSec from "../../components/PixelPerfectSec";
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
    question: "1. What is Node.js used for in web development?",
    answer:
      "Node.js is used to build fast, scalable, and real-time web applications that handle multiple users and heavy data efficiently.",
  },
  {
    id: 2,
    question: "2. Why choose California Web Coders for Node.js development?",
    answer:
      "We deliver performance-driven Node.js solutions with clean code, scalability, and reliable support to ensure your platform runs smoothly and grows with your business.",
  },
  {
    id: 3,
    question: "3. Is Node.js good for enterprise-level web applications?",
    answer:
      "Yes. Node.js is ideal for enterprise apps that need real-time functionality, fast data processing, and easy scalability.",
  },
  {
    id: 4,
    question: "4. Do you offer custom Node.js development services?",
    answer:
      "Yes. We build custom Node.js applications tailored to your business goals, from eCommerce systems to API-driven enterprise platforms.",
  },
  {
    id: 5,
    question: "5. Can Node.js handle large-scale web applications?",
    answer:
      "Absolutely Node.js is designed for high-performance applications that process large data sets and thousands of concurrent connections efficiently.",
  },
  {
    id: 6,
    question: "6. How long does a Node.js development project take?",
    answer:
      "Most Node.js projects take between 4-8 weeks, depending on complexity, integrations, and custom functionality required.",
  },
  {
    id: 7,
    question: "7. Do you provide post-launch Node.js support?",
    answer:
      "Yes. We offer 24/7 maintenance, updates, and performance monitoring to keep your Node.js application secure and optimized.",
  },
  {
    id: 8,
    question: "8. Can Node.js be integrated with AI or APIs?",
    answer:
      "Yes. We specialize in integrating Node.js applications with APIs, AI tools, and third-party services to enhance performance and automation.",
  },
  {
    id: 9,
    question: "9. What industries use Node.js development services?",
    answer:
      "Our Node.js web development services are trusted by eCommerce, SaaS, fintech, education, and healthcare brands across California.",
  },
  {
    id: 10,
    question: "10. Do you provide migration or upgrade services for Node.js?",
    answer:
      "Yes. We handle smooth Node.js version upgrades and app migrations without downtime or data loss.",
  },
];

const NodejsDevelopment = () => {
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

  const processStepsData = [
    {
      title: "Discovery & Planning",
      description:
        "We begin by understanding your goals, audience, and technical requirements. This helps us define a roadmap that ensures your Node.js application meets both user needs and business objectives.",
    },
    {
      title: "Architecture & Design",
      description:
        "Our developers design a robust, modular architecture optimized for performance. We focus on scalability, flexibility, and speed, ensuring every component of your backend is efficient and future-ready.",
    },
    {
      title: "Development & Integration",
      description:
        "We build your Node.js application with clean, maintainable code and integrate third-party APIs, databases, and tools, ensuring smooth performance and real-time functionality across all systems.",
    },
    {
      title: "Testing & Deployment",
      description:
        "Before launch, we rigorously test for speed, reliability, and security. Once deployed, our support team ensures your Node.js application performs flawlessly under real-world conditions.",
    },
  ];

  const serviceCards = [
    {
      id: 1,
      icon: <Image src={Aiintegrate.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "AI Integration",
      serviceCardPara:
        "We combine Node.js with artificial intelligence to create smarter, more adaptive systems. From predictive analytics to chatbots, AI integration helps automate workflows and enhance user engagement.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <Image src={Ecommerce.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "E-Commerce Website Development",
      serviceCardPara:
        "We develop fast, secure, and scalable e-commerce platforms powered by Node.js. From product management to payment gateways, we build systems designed for growth and seamless shopping experiences.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <Image src={Custumweb.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "Custom Web Development",
      serviceCardPara:
        "We build tailored Node.js web applications that align perfectly with your brand and goals. Every line of code is crafted for performance, user experience, and long-term scalability.",
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
          leftCol="col-lg-8"
          rowClass="row justify-content-center text-center"
          bgImage={landingPageBanner}
          btnClass="theme-light mt-3"
          title="Your Place for a Data-Intensive Solution with Node.js"
          description="Our Node js development services in California create high-performance applications that manage heavy traffic with ease, deliver fast results, and keep your users engaged every step of the way."
          btnText="Get A Free React Quote"
        />

        <WordPressPerformanceSection
          wordpresssecclass="nodejs-about-sec"
          minihead="About Company"
          miniheadclass="shorttop-head"
          secTitle2="Backends"
          secTitle3="That Make Your Sites Unbreakable"
          description="Node.js powers some of the world’s most popular platforms because it’s fast, reliable, and built to grow. At California Web Coders, we use Node.js to create applications that run smoothly, handle data in real time, and expand effortlessly with your business. With Node.js, we ensure that the digital future of your brand is absolutely secure."
          listItems={[
            "Secure and efficient coding",
            "Perfect for modern web and mobile apps",
          ]}
          listClass="aboutCompanylist"
          serviceImg="nodejs-about-img"
          TouchBtn="d-none"
          btntext="Sign up Now"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <OurProcess
          sectitle="Our "
          sectitleblue="Node.js Development Process"
          absltImg={processFrontendPlug}
          videoSrc={laptopVideo}
          processSteps={processStepsData}
        />

        <OurCustomService
          miniHead="Our Services"
          secMainTitle="Building the Future of "
          secTitleBlue="Web Development"
          secLastTitle="Services"
          customServicePara="Node.js powers some of the world’s most popular platforms because it’s fast, reliable, and built to grow. At California Web Coders, we use Node.js, integrating it with other skills to create applications that run smoothly, handle data in real time, and expand effortlessly with your business."
          customServiceBtn="Start Your Project"
          serviceCards={serviceCards}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Our Portfolio of"
          secTitleBlue="Node.js"
          secTitle2="Development"
          secDescription="Explore Node Js development services in California portfolio to see how businesses across the state are thriving with Node.js development."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <WordPressPerformanceSection
          afterConainerClass="node-build-bg"
          secTitle1="Sign Now for Your Own Node.Js Site"
          description="To proceed to the next step of getting a strong backend with Node js development, all you have to do is fill the form below. And we will get back to you with a comprehensive plan! "
          listClass="d-none"
          TouchBtn="d-none"
          serviceImg="d-none"
          btntext="Ready to Chat?"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        {/* <SinglePricingPlan
          secTitle="Pricing Options Built Around Your Business"
          secDescription="Our Node.js development packages are simple, affordable, and tailored for long-term performance."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="Most Asked Questions About Node.js Web Development"
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

export default NodejsDevelopment;
