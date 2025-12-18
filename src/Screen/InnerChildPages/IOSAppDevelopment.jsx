'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "@/Assets/newChildPagesAssets/IOSDevelopment/landingbanner.webp";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/IOSDevelopment/AngelicaLarrotta.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/IOSDevelopment/BobbyGilbreth.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/IOSDevelopment/CindyManning.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/IOSDevelopment/LoneRockLandscaping.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/IOSDevelopment/EricCorwinSOLAR.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/IOSDevelopment/Betzy.webp";
import iosappimg from "@/Assets/newChildPagesAssets/IOSDevelopment/industriesiosapp.webp";
import iosNexthero from "@/Assets/newChildPagesAssets/IOSDevelopment/ios-next-hero.webp";
import NativeApps from "@/Assets/newChildPagesAssets/webapp/nativeappsvg.svg";
import Uiuxicon from "@/Assets/newChildPagesAssets/IOSDevelopment/uiux.svg";
import IOSAboutCompany from "../../components/IOSAboutCompany";
import Growyourbusiness from "../../components/growyourbusiness";
import OurAppServices from "../../components/OurAppServices";
import { FaApple, FaBus, FaHandHoldingHeart } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { MdAppSettingsAlt, MdCastForEducation } from "react-icons/md";
import IndustriesIOSApps from "../../components/IndustriesIOSApps";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import Lightbox from "yet-another-react-lightbox";
import { wordpressWebsitePricingPlansData } from "../../data";
import BlogSection from "../../components/blogPosts";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import BeautifullAppDesign from "../../components/BeautifullAppDesign";
import { SlBasket } from "react-icons/sl";

import { ImPower } from "react-icons/im";
import { CgScreen } from "react-icons/cg";
import { IoIosLock } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import Image from "next/image";

export const faqHomeData = [
  {
    id: 1,
    question:
      "1. What is included in your iOS app development services California?",
    answer:
      "Our iOS development includes design, development, testing, deployment, and post-launch support to deliver high-performing, reliable iOS applications.",
  },
  {
    id: 2,
    question:
      "2. Why should we choose California Web Coders for iOS mobile app development California?",
    answer:
      "We build elegant, user-focused iOS apps backed by strong performance, security, and long-term scalability.",
  },
  {
    id: 3,
    question: "3. Do you create apps for both iPhone and iPad?",
    answer:
      "Yes, our iOS app development company California builds applications optimized for all Apple devices and screen sizes.",
  },
  {
    id: 4,
    question: "4. Which language do you use for development?",
    answer:
      "We specialize in Swift app development California, ensuring speed, stability, and full compatibility with Apple’s frameworks.",
  },
  {
    id: 5,
    question: "5. Do you design iOS UI/UX as part of the package?",
    answer:
      "Yes, our iOS UI/UX design services California are integrated into every project for smooth, visually engaging user experiences.",
  },
  {
    id: 6,
    question: "6. Can you integrate APIs or third-party tools?",
    answer:
      "Yes, we integrate analytics, payment gateways, and CRMs for seamless functionality and automation.",
  },
  {
    id: 7,
    question: "7. How long does it take to develop an iOS app?",
    answer:
      "Most apps take between 6-10 weeks, depending on scope, design complexity, and feature requirements.",
  },
  {
    id: 8,
    question: "8. Do you offer post-launch support for iOS apps?",
    answer:
      "Yes, we provide continuous maintenance, performance optimization, and feature updates to keep your app relevant and stable.",
  },
  {
    id: 9,
    question: "9. Can you develop custom enterprise-level iOS apps?",
    answer:
      "Yes, we build secure, high-performance apps for enterprises requiring scalability, multi-user systems, and advanced analytics.",
  },
  {
    id: 10,
    question:
      "10. Are your iOS app development services affordable for small businesses?",
    answer:
      "Yes, we offer flexible pricing tailored to startups and small businesses looking for professional, scalable iOS solutions.",
  },
];

const IOSAppDevelopment = () => {
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
      appServiceHead: "IOS Development",
      appServicePara:
        "We design and develop iOS apps with speed, aesthetics, and advanced functionality, ensuring seamless performance and a consistent experience across all Apple devices.",
    },
    {
      icon: <Image src={NativeApps.src} alt="NativeApps" width={40} height={40} />,
      appServiceHead: "Mobile App Development",
      appServicePara:
        "As an established iOS mobile app development company in California, we deliver high-performing cross-platform applications that unify your business presence across iOS, Android, and web platforms.",
    },
    {
      icon: <Image src={Uiuxicon.src} alt="Uiuxicon" width={40} height={40} />,
      appServiceHead: "UI/UX Designing",
      appServicePara:
        "Our iOS UI/UX design services in California focus on storytelling through visuals — delivering sleek, functional interfaces that improve retention, interaction, and brand recall.",
    },
  ];

  const servicePoint = [
    "Graphic Design Template",
    "Motion Ui Design",
    "Theme Template Design",
    "User Interface Design",
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

  const iosFeatures = [
    { icon: <ImPower />, text: "Performance Tracking" },
    { icon: <CgScreen />, text: "Interactive UI" },
    { icon: <IoIosLock />, text: "Payment and Security Systems" },
    { icon: <SiSimpleanalytics />, text: "Data Analytics and User Insights" },
  ];

  return (
    <>
  
      <Layout>
        <ServiceBanner
          secClass="ios-next-herobanner"
          leftCol="col-lg-8"
          bgImage={landingPageBanner}
          rowClass="row justify-content-center text-center"
          btnClass="d-none"
          innerServicetxt="inner-next-txt"
          innerheroimg={iosNexthero}
          title="IOS Development Services in California"
          description="We build seamless and easy-to-use iOS applications that blend creativity, functionality, and flawless design, built to engage your audience and enhance your brand’s digital presence."
        />

        <IOSAboutCompany />

        <Growyourbusiness
          title1="Need an iOS Application for Your"
          title2="Audience?"
        />

        <OurAppServices
          secClass="ios-app-services"
          minihead="Our Services"
          ourSectitleStart="Complete "
          ourSecTitleBlue="IOS Development"
          ourSecTitle="Expertise in California"
          miniPara="At California Web Coders, we deliver iOS apps built to bring the best results. Each iOS app combines innovation, design, and technical excellence. As a leading iOS app development company in California, we build apps that scale with your business and evolve with user trends."
          OurServiceBtn="View All Services"
          appServices={serviceList}
        />

        <IndustriesIOSApps
          sectionTitle="Our"
          highlightText="IOS Applications"
          sectionTitleEnd="Include"
          description="We build iOS mobile app development in California that combines innovation with usability. Every app we design delivers exceptional speed, functionality, and aesthetics for a seamless mobile experience."
          features={iosFeatures}
          image={iosappimg}
        />

        <ContactForm
          secTitle="Start Your IOS Project Today"
          secDescription="Let’s build your iOS app with precision and creativity. Fill out the form below and start your journey with California’s trusted iOS app development agency."
          btnText="Let’s Build It Together"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitleBlue="IOS Apps"
          secTitle2="that Redefined Experiences"
          secDescription="We’ve built iOS apps that define user experience. 
        See how our designs meet real-world business goals."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <BeautifullAppDesign />

        {/* <SinglePricingPlan
        secTitle="Smart Packages for Every Business"
        secDescription="Affordable, transparent, and tailored iOS app development services in California. Choose a plan that fits your project size and vision."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      /> */}

        <FrequentQuestions
          secTitle="Frequently Asked Questions for IOS App Development"
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

export default IOSAppDevelopment;
