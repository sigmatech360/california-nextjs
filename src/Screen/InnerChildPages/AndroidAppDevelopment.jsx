'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import androidbanner from "@/Assets/newChildPagesAssets/androiddevelopment/android-banner-bg.webp";
import androidHerobanner from "@/Assets/newChildPagesAssets/androiddevelopment/android-hero-banner.webp";
import AboutFrontendOne from "@/Assets/newChildPagesAssets/androiddevelopment/about-img-1.webp";
import AboutFrontendTwo from "@/Assets/newChildPagesAssets/androiddevelopment/about-img-2.webp";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/androiddevelopment/pixel-1.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/androiddevelopment/pixel-2.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/androiddevelopment/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/androiddevelopment/pixel-4.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/androiddevelopment/pixel-5.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/androiddevelopment/pixel-6.webp";
import androidiosimg from "@/Assets/newChildPagesAssets/androiddevelopment/android-ios-img.webp";
import NativeApps from "@/Assets/newChildPagesAssets/webapp/nativeappsvg.svg";
import Ecommerce from "@/Assets/newChildPagesAssets/webapp/ecommerce.svg";
import Uiuxicon from "@/Assets/newChildPagesAssets/IOSDevelopment/uiux.svg";
import CustomAboutCompany from "../../components/CustomAboutCompany";
import OurAppServices from "../../components/OurAppServices";
import {
  FaApple,
  FaBus,
  FaHandHoldingHeart,
  FaLaptopCode,
} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { MdAppSettingsAlt, MdCastForEducation } from "react-icons/md";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import IndustriesIOSApps from "../../components/IndustriesIOSApps";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import { SlBasket } from "react-icons/sl";
import { FaBarsProgress } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { TbDeviceAnalytics } from "react-icons/tb";
import Image from "next/image";

export const faqHomeData = [
  {
    id: 1,
    question: "1. What technologies do you use for Android app development?",
    answer:
      "We use Kotlin, Java, Flutter, and React Native to build secure, scalable, and high-performance Android applications.",
  },
  {
    id: 2,
    question:
      "2. Why choose California Web Coders for Android app development?",
    answer:
      "As a trusted Android app development company California, we deliver apps that combine creativity, functionality, and measurable performance.",
  },
  {
    id: 3,
    question: "3. Do you offer both native and hybrid app development?",
    answer:
      "Yes, we specialize in Native Android app development in California and hybrid mobile app development in California for flexibility and cross-platform reach.",
  },
  {
    id: 4,
    question: "4. Can you develop apps for different Android devices?",
    answer:
      "Absolutely, our apps are optimized for all devices, screen sizes, and Android versions to ensure smooth performance everywhere.",
  },
  {
    id: 5,
    question: "5. Do you build enterprise-level Android applications?",
    answer:
      "Yes, we design secure, data-driven Android applications tailored for large-scale operations and enterprise needs.",
  },
  {
    id: 6,
    question: "6. Can you help publish the app on the Google Play Store?",
    answer:
      "Yes, we handle the full deployment process, from app optimization to Play Store submission and ongoing maintenance.",
  },
  {
    id: 7,
    question: "7. Do you offer post-launch support?",
    answer:
      "Yes, our team provides long-term updates, maintenance, and performance enhancements for all Android applications.",
  },
  {
    id: 8,
    question: "8. What’s the difference between Flutter and React Native apps?",
    answer:
      "Flutter offers faster performance and design flexibility, while React Native ensures smoother integration and quicker updates for cross-platform builds.",
  },
  {
    id: 9,
    question: "9. How long does it take to build an Android app?",
    answer:
      "Most Android apps take 6-10 weeks, depending on complexity, design, and required integrations.",
  },
  {
    id: 10,
    question:
      "10. Are your Android app development services affordable for startups?",
    answer:
      "Yes, it's affordable for startups as we offer customized, budget-friendly packages without compromising quality, performance, or scalability.",
  },
];

const AndroidAppDevelopment = () => {
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

  const serviceList = [
    {
      icon: <DiAndroid size={30} />,
      appServiceHead: "Android Development",
      appServicePara:
        "Our Android solutions focus on versatility and reach. We create responsive, feature-rich apps that perform across devices and provide consistent user experiences for growing brands.",
    },
    {
      icon: <Image src={NativeApps.src} alt="NativeApps" width={40} height={40} />,
      appServiceHead: "Mobile App Development",
      appServicePara:
        "Our hybrid mobile app development California team builds unified, multi-platform apps that merge performance, adaptability, and modern design for the best user experience.",
    },
    {
      icon: <FaLaptopCode size={30} />,
      appServiceHead: "Web App Development",
      appServicePara:
        "Our full-stack developers build web applications that integrate seamlessly with Android apps, combining back-end strength and front-end excellence for superior digital performance.",
    },
  ];

  const iosFeatures = [
    { icon: <Image src={Uiuxicon.src} alt="Uiuxicon" width={40} height={40} />, text: "Custom UI & Material Design" },
    { icon: <FaBarsProgress />, text: "Fast, Stable App Architecture" },
    { icon: <IoNotifications />, text: "Integrated Push Notifications" },
    { icon: <TbDeviceAnalytics />, text: "Data-Driven Insights & Analytics" },
  ];

  return (
    <>


      <Layout>
        <ServiceBanner
          secClass="android-main-banner"
          leftCol="col-lg-6"
          bgImage={androidbanner}
          rightCol="col-lg-6"
          btnClass="d-none"
          title="Innovating, Building, & Dominating the Android Applications Market"
          description="We design and develop powerful Android applications that connect brands with users in meaningful ways. Our Android app development company in California focuses on speed, performance, and scalability, creating apps that look modern, run smoothly, and grow effortlessly with your business. We make native, hybrid and cross-platform apps, bringing your mobile vision to life through clean code and human-centred design."
          image={androidHerobanner}
        />

        <CustomAboutCompany
          miniHead="About Company"
          mainHeadStart="Smart, Intuitive"
          mainHeadBlue="Android Applications"
          mainHeadLast="that Deliver Results"
          frontendAboutImg={AboutFrontendOne}
          frontendAboutImgtwo={AboutFrontendTwo}
          aboutPara="We specialize in building seamless Android applications with advanced features and superior usability. Our Android app development company California focuses on speed, stability, and design excellence, ensuring every app we build stands out in the Play Store and delivers meaningful user engagement."
          listItems={[
            "Native Android Development ",
            "Cross-Platform Flexibility",
          ]}
          listClass="aboutCompanylist"
          btntext="Learn More About Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <OurAppServices
          secClass="our-android-appservice"
          minihead="Our Services"
          ourSecTitleBlue="Mobile Solutions"
          ourSecTitle="Built for Every Platform"
          miniPara="At California Web Coders, we bring precision, creativity, and innovation to every project. Our Android application development services in California are designed to help businesses build apps that perform flawlessly, look exceptional, and deliver real results."
          OurServiceBtn="View All Services"
          appServices={serviceList}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Our"
          secTitleBlue="Android Development"
          secTitle2="Portfolio"
          secDescription="We build Android apps that inspire, engage, and perform at their best. Check out how our work drives life-changing results."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <WordPressPerformanceSection
          afterConainerClass="android-build-bg"
          secTitle1="Smart Interfaces with Effortless Experiences!"
          description="Our Android applications are designed with an intuitive, user-friendly interface that enhances engagement and accessibility. Every screen, tap, and interaction is built for flow, ensuring speed, clarity, and satisfaction across devices. By combining stunning UI design with powerful backend logic, we deliver Android apps that work as beautifully as they look."
          listClass="d-none"
          TouchBtn="d-none"
          serviceImg="d-none"
          btntext="Let's Talk With Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          aboutbtnlink="/get-intouch"
        />

        <IndustriesIOSApps
          sectionTitle="Our "
          highlightText="Android Applications Include"
          description="We develop Native Android app development California solutions and hybrid mobile app development California systems with a balance of design, functionality, and performance to match your brand vision."
          androidappicon="ios-service-icon android-service-icon"
          features={iosFeatures}
          image={androidiosimg}
        />

        <ContactForm
          secTitle="Start Your Android App Project Today"
          secDescription="Let’s build your Android app with performance, precision, and creativity. Fill out the form below, and our experts will reach out to start your project."
          btnText="Send Message"
        />

        {/* <SinglePricingPlan
        secTitle="Flexible Options for Every Business"
        secDescription="We provide Android app development services California with tailored plans for businesses, offering transparent pricing that fits every budget."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      /> */}

        <FrequentQuestions
          secTitle="Frequently Asked Questions for Android App Development"
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

export default AndroidAppDevelopment;
