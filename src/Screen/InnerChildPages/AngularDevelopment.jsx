'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "@/Assets/newChildPagesAssets/angulardevelopment/angular-herobanner.webp";
import angularaboutvideo from "@/Assets/newChildPagesAssets/angulardevelopment/video-about.mp4";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import serviceCardOne from "@/Assets/newChildPagesAssets/angulardevelopment/laraveldev-inner-img.webp";
import serviceCardTwo from "@/Assets/newChildPagesAssets/angulardevelopment/custom-webapp-inner-img.webp";
import serviceCardThree from "@/Assets/newChildPagesAssets/angulardevelopment/backend-integration-inner-img.webp";
import OurCustomService from "@/components/OurCustomService";
import PixelPerfectSec from "@/components/PixelPerfectSec";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/angulardevelopment/pixel-1.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/angulardevelopment/pixel-2.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/angulardevelopment/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/angulardevelopment/pixel-4.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/angulardevelopment/pixel-5.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/angulardevelopment/pixel-6.webp";
import angularbuildlaptop from "@/Assets/newChildPagesAssets/angulardevelopment/360laptop.webp";
import Angular  from "@/Assets/newChildPagesAssets/angulardevelopment/angular.svg";
import Backend  from "@/Assets/newChildPagesAssets/angulardevelopment/backenddatabase.svg";
import CustomWeb  from "@/Assets/newChildPagesAssets/angulardevelopment/customwebapp.svg";
import FrequentQuestions from "../../components/FrequentQuestions";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";

import Image from "next/image";

export const faqHomeData = [
  {
    id: 1,
    question: "1. What is Angular used for in web development?",
    answer:
      "Angular is used to build dynamic, scalable, and enterprise-level applications that deliver consistency and top-tier performance.",
  },
  {
    id: 2,
    question: "2. Why choose California Web Coders for Angular development?",
    answer:
      "We combine technical precision and design strategy to build powerful Angular apps that grow with your business.",
  },
  {
    id: 3,
    question: "3. Do you create custom Angular web applications?",
    answer:
      "Yes. Our team builds custom Angular applications tailored to your industry, workflows, and target audience.",
  },
  {
    id: 4,
    question: "4. Can Angular work with Laravel backend?",
    answer:
      "Absolutely. We integrate Angular with Laravel for fast, secure, and full-stack web solutions.",
  },
  {
    id: 5,
    question: "5. Is Angular good for large enterprise systems?",
    answer:
      "Yes. Angular’s modular architecture makes it perfect for enterprise-scale apps that require stability and scalability.",
  },
  {
    id: 6,
    question: "6. Do you offer migration from older Angular versions?",
    answer:
      "Yes. We handle Angular migrations and upgrades seamlessly, keeping performance intact while modernizing your codebase.",
  },
  {
    id: 7,
    question: "7. Can you integrate AI with Angular apps?",
    answer:
      "Yes. Our team implements AI integration for automation, analytics, and real-time data experiences in Angular apps.",
  },
  {
    id: 8,
    question: "8. How long does an Angular development project take?",
    answer:
      "Most Angular projects take 6-10 weeks depending on the complexity, integrations, and custom functionality required.",
  },
  {
    id: 9,
    question: "9. Do you provide post-launch Angular support?",
    answer:
      "Yes. We offer ongoing support, updates, and performance optimization to keep your Angular apps running efficiently.",
  },
  {
    id: 10,
    question: "10. Do you work with startups and small businesses?",
    answer:
      "Yes. We provide Angular development services in California for startups, SMEs, and enterprises across California looking for reliability and speed.",
  },
];

const AngularDevelopment = () => {
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
      icon: <Image src={Angular.src} alt="speedmeter" width={40} height={40} />,
      // icon: <Angular size={40} />,
      serviceCardHead: "Laravel  Development",
      serviceCardPara:
        "Our backend experts use Laravel to power your Angular apps with secure, scalable architectures. Together, they create dynamic, full-stack systems that balance performance and flexibility.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon:  <Image src={CustomWeb.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "Custom Web App Development",
      serviceCardPara:
        "From dashboards to enterprise portals, our Angular web app solutions are designed to enhance workflow, performance, and usability while staying aligned with your business goals.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon:  <Image src={Backend.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "Backend Integration",
      serviceCardPara:
        "We integrate your Angular applications with Node.js or Laravel systems to enable seamless data exchange, real-time updates, and consistent backend stability.",
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
          secClass="angular-herobanner"
          leftCol="col-lg-6"
          bgImage={landingPageBanner}
          btnClass="theme-light mt-3"
          title="Build Scalable Websites and Apps With Angular"
          description="Your business deserves a website or app that doesn’t fall apart after a year. With our Angular development services in California, we build fast, reliable, and easy-to-use platforms that actually help your business grow. "
          btnText="Talk to Our Experts"
        />

        <WordPressPerformanceSection
          wordpresssecclass="react-specialist-sec"
          miniheadclass="shorttop-head"
          secTitle1="Give Your Web App a Mind of It’s Own with"
          secTitle2="Angular"
          description="Developed by Google to enhance efficiency and performance, Angular powers some of the fastest platforms online, including Google’s own product; this can give you an idea of how fast it really is…. Very fast!"
          listItems={[
            "Dynamic Web Pages",
            "Lightning Fast Single Page Applications",
          ]}
          listClass="aboutCompanylist"
          videoSrc={angularaboutvideo}
          serviceImg="angular-aboutimg"
          TouchBtn="d-none"
          btntext=" Let’s Go Angular"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <OurCustomService
          miniHead="More of Our Services: "
          secMainTitle="Scalable"
          secTitleBlue="Frontends"
          secLastTitle="for Modern Businesses"
          customServicePara="Angular helps us build structured, high-performance web applications that grow with your business. At California Web Coders, our Angular development services combine precision, flexibility, and innovation to deliver clean code, dynamic experiences, and futuristic solutions."
          serviceCards={serviceCards}
          customServiceBtn="Start Your Project"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Explore Our"
          secTitleBlue="Angular"
          secTitle2="Portfolio"
          secDescription="Our portfolio Angular website development in California shows apps, business platforms, and websites, all made with Angular and designed to deliver real results for businesses."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <WordPressPerformanceSection
          wordpresssecclass="angular-build-sec"
          miniheadclass="shorttop-head"
          secTitle1="Take the Next Step Today to Get Your Own"
          secTitle2="Angular Development!"
          description="Your next big project deserves more than standard code… it deserves precision, speed, and creativity. Partner with California Web Coders to bring your Angular vision to life with performance, scalability, and reliability that truly stand out."
          serviceImg="angular-video-hide"
          image={angularbuildlaptop}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Sign Up and Start Today"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <FrequentQuestions
          secTitle="Common Questions Related to Angular Development"
          FrequentQuestions="homeFrequentQuestions"
          faqData={faqHomeData}
        />

        <WordPressPerformanceSection
          wordpresssecclass="angular-choose-bg"
          miniheadclass="shorttop-head"
          minihead="Why Choose Us"
          secTitle1="The Smart Choice for Reliable"
          secTitle2="Angular Development"
          description="Businesses today need dynamic, scalable systems that perform flawlessly. That’s where California Web Coders comes in. Our Angular development company in California focuses on creating fast and flexible applications that keep your business competitive and relevant."
          serviceImg="angular-choose-imghide"
          image={angularbuildlaptop}
          designpointheadline="At California Web Coders, we focus on:"
          listFlex="angular-choose-list"
          landingList="landing-design-points"
          landingListItems={[
            "Certified Angular Developers",
            "Enterprise-Ready Solutions",
          ]}
          AngularChooseListItems={[
            "Performance Focused",
            "Comprehensive Support",
          ]}
          TouchBtn="d-none"
          btntext="Let's Talk With Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        {/* <SinglePricingPlan
          secTitle="Flexible Pricing for Maximum Value"
          secDescription="Our Angular development packages in California are designed to suit you. Our pricing is transparent, flexible, and designed to deliver maximum value at every stage of growth."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

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

export default AngularDevelopment;
