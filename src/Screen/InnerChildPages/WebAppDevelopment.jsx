'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "@/Assets/designingpage-images/landingpage/landingpage-banner.webp";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/webapp/Angelica Larrotta.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/webapp/BobbyGilbreth.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/webapp/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/webapp/LoneRockLandscaping.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/webapp/EricCorwinSOLAR.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/webapp/Betzy.webp";
import bannervideo from "@/Assets/newChildPagesAssets/webapp/hero-banner-video.mp4";
import NativeApps  from "@/Assets/newChildPagesAssets/webapp/nativeappsvg.svg";
import WebAppAbout from "../../components/WebAppAbout";
import OurAppServices from "../../components/OurAppServices";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { MdAppSettingsAlt } from "react-icons/md";
import AppServicePoint from "../../components/AppServicePoint";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import ContactForm from "../../components/readytocheat";
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
    question: "1. What is web application development?",
    answer:
      "Web application development involves building browser-based platforms that allow users to interact dynamically with data, tools, and content over the internet.",
  },
  {
    id: 2,
    question: "2. Why choose California Web Coders for web app development?",
    answer:
      "We’re a web app development company in California focused on performance, scalability, and user experience, delivering solutions that align with your business goals.",
  },
  {
    id: 3,
    question: "3. What technologies do you use for web apps?",
    answer:
      "We use React and Angular for the frontend and tools like Node.js, Laravel, or others for the backend to create fast, scalable, and interactive web applications.",
  },
  {
    id: 4,
    question: "4. Do you provide full-stack web app development in California?",
    answer:
      "Yes, our full-stack web app development covers everything from design and coding to deployment and maintenance.",
  },
  {
    id: 5,
    question: "5. Can you integrate third-party tools or APIs?",
    answer:
      "Yes, we integrate CRMs, payment systems, and other APIs to streamline your app’s functionality.",
  },
  {
    id: 6,
    question: "6. Do you offer mobile app versions of web apps?",
    answer:
      "Yes, as a web and mobile app development company in California, we create hybrid and responsive applications for cross-device performance.",
  },
  {
    id: 7,
    question: "7. How long does it take to develop a web app?",
    answer:
      "Most web app development projects take 6-10 weeks, depending on their complexity, integration requirements, and custom feature requirements.",
  },
  {
    id: 8,
    question: "8. Do you provide maintenance and post-launch support?",
    answer:
      "Yes, we offer ongoing updates, bug fixes, and optimization to ensure your web app runs smoothly.",
  },
  {
    id: 9,
    question:
      "9. Can you create custom web app development services in California for enterprises?",
    answer:
      "Yes, we develop tailored enterprise-grade applications designed for scalability, speed, and secure data handling.",
  },
  {
    id: 10,
    question:
      "10. Are your web app development services affordable for startups?",
    answer:
      "Yes, we offer flexible packages suitable for startups, small businesses, and growing brands across California.",
  },
];

const WebAppDevelopment = () => {
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

  const serviceList = [
    {
      icon: <FaApple size={30} />,
      appServiceHead: "iOS App Devlopment",
      appServicePara:
        "We develop fast, secure, and feature-rich iOS applications that integrate seamlessly with your web systems, delivering consistent performance and flawless user experiences across devices.",
    },
    {
      icon: <DiAndroid size={30} />,
      appServiceHead: "Android App Devlopment",
      appServicePara:
        "Our Android solutions are engineered for flexibility, supporting diverse devices and business needs. We ensure every app functions smoothly, runs securely, and scales efficiently.",
    },
    {
      icon: <Image src={NativeApps.src} alt="NativeApps" width={40} height={40} />,
      appServiceHead: "Mobile App Development",
      appServicePara:
        "As a web and mobile app development company California, we create unified digital ecosystems that deliver seamless, high-performing applications built for modern users, meaningful engagement, and measurable growth.",
    },
  ];

  const servicePoint = [
    "End-to-End Full Stack Expertise",
    "Transparent Communication and Workflow",
    "Dedicated Project Management",
    "Long-Term Support and Maintenance",
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
          secClass="webapp-herobanner"
          leftCol="col-lg-6"
          btnClass="d-none"
          herobannervideo={bannervideo}
          title="Innovative and Performative Web App Development Services in California"
        />

        <WebAppAbout />

        <OurAppServices
          minihead="Our Services"
          ourSectitleStart="Transforming Code into Intelligent"
          ourSecTitleBlue="Web Experiences"
          miniPara="At California Web Coders, our development projects are more than just code; our primary focus is always creating intelligent and connected web experiences. As one of the most trusted web app development agencies in California, we build flexible and engaging digital systems that perform effectively on every platform."
          OurServiceBtn="View all services"
          appServices={serviceList}
        />

        <AppServicePoint
          reverse
          miniHead="Why Choose Us?"
          appContainerClass="choose-web-container"
          AppServicePointSec="whychoose-webapp"
          appServicePoinbg="appservice-pointtxt servicepoint-applight webchoose-txt"
          secTitle="Web App Development Expertise that Translates to Performance"
          pointPara="At California Web Coders, we combine creativity, coding precision, and strategies based on real data to deliver full stack web app development in California that performs flawlessly and scales with your business."
          listItems={servicePoint}
          serviceImgBox="choose-web-video"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitleBlue="Web Applications"
          secTitle2="We’re Proud Of"
          secDescription="View our web app development services in California that have powered multiple businesses with interactive, scalable, and secure digital solutions designed to deliver measurable impact."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ContactForm
          secTitle="Want Your Own Web App?"
          secDescription="Let’s turn your idea into a digital experience that your audience will love. Start your custom web app development journey with California Web Coders today."
          btnText="Send Message"
        />

        {/* <SinglePricingPlan
        secTitle="Flexible Packages for Every Business"
        secDescription="We offer transparent, customizable pricing designed to fit your goals and scale. Choose from the packages below to find what’s best for you."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      /> */}

        <FrequentQuestions
          secTitle="Frequently Asked Questions for Web Application Development"
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

export default WebAppDevelopment;
