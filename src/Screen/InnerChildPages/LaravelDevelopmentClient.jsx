'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "@/Assets/newChildPagesAssets/laraveldevelopment/laravel-hero-banner.webp";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/laraveldevelopment/pixel-1.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/laraveldevelopment/pixel-2.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/laraveldevelopment/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/laraveldevelopment/pixel-4.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/laraveldevelopment/pixel-5.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/laraveldevelopment/pixel-6.webp";
import serviceCardOne from "@/Assets/newChildPagesAssets/reactdevelopment/nodejs-inner-img.webp";
import serviceCardTwo from "@/Assets/newChildPagesAssets/laraveldevelopment/ai-inner-img.webp";
import serviceCardThree from "@/Assets/newChildPagesAssets/laraveldevelopment/blockchain-inner-img.webp";
import ChooseSecImg from "@/Assets/newChildPagesAssets/laraveldevelopment/choose-sec-img.webp";
import powerfulimg from "@/Assets/newChildPagesAssets/laraveldevelopment/powerfull-laravelapp-bg.webp";
import aboutvideo from "@/Assets/newChildPagesAssets/laraveldevelopment/about-video.mp4";
import aboutsmallimg from "@/Assets/newChildPagesAssets/laraveldevelopment/aboutshortimg.webp";
import Speedmeter  from "@/Assets/newChildPagesAssets/reactdevelopment/speedmeter.svg";
import Topmedal  from "@/Assets/newChildPagesAssets/reactdevelopment/toppermedal.svg";
import Easycontrol  from "@/Assets/newChildPagesAssets/reactdevelopment/easycontrol.svg";
import Nodejs  from "@/Assets/newChildPagesAssets/laraveldevelopment/nodejs.svg";
import Aiintegrate  from "@/Assets/newChildPagesAssets/laraveldevelopment/aiintegrate.svg";
import Blockchain  from "@/Assets/newChildPagesAssets/laraveldevelopment/blockchain.svg";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import { FaMedal, FaTachometerAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import OurCustomService from "../../components/OurCustomService";
import { TbApi } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import { GrHostMaintenance } from "react-icons/gr";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import { wordpressWebsitePricingPlansData } from "../../data";

import Image from "next/image";

export const faqHomeData = [
  {
    id: 1,
    question: "1. What is Laravel web development used for?",
    answer:
      "Laravel is used to build secure, scalable, and high-performing web applications with clean architecture, efficient APIs, and modern backend functionality.",
  },
  {
    id: 2,
    question: "2. Why choose California Web Coders for Laravel development?",
    answer:
      "We combine technical expertise, proven frameworks, and tailored support to create Laravel solutions that balance innovation, speed, and long-term reliability.",
  },
  {
    id: 3,
    question: "3. Is Laravel good for enterprise web applications?",
    answer:
      "Yes, Laravel is ideal for enterprise apps due to its scalability, built-in security, and ability to handle complex data and user management.",
  },
  {
    id: 4,
    question: "4. Do you offer custom Laravel web development?",
    answer:
      "Absolutely. We specialize in custom Laravel web development to meet each client’s specific goals, features, and performance needs.",
  },
  {
    id: 5,
    question: "5. How long does a Laravel project take?",
    answer:
      "Most Laravel project timelines vary by complexity, usually a project is completed within 4-8 weeks after the initial planning and design phase.",
  },
  {
    id: 6,
    question: "6. Can Laravel integrate with third-party APIs?",
    answer:
      "Yes, Laravel integrates seamlessly with CRMs, payment gateways, and analytics tools for smooth and automated business operations.",
  },
  {
    id: 7,
    question: "7. Do you provide post-launch Laravel support?",
    answer:
      "Yes, we offer 24/7 Laravel maintenance, updates, and performance monitoring to ensure continuous stability and reliability.",
  },
  {
    id: 8,
    question: "8. Is Laravel secure for online businesses?",
    answer:
      "Yes, Laravel includes built-in authentication, encryption, and data protection features that make it one of the most secure PHP frameworks available.",
  },
  {
    id: 9,
    question: "9. Do you offer Laravel migration or upgrades?",
    answer:
      "Yes, we handle Laravel version upgrades and migrations with zero downtime to keep your systems optimized and up-to-date.",
  },
  {
    id: 10,
    question: "10. What industries use Laravel development services?",
    answer:
      "We serve eCommerce, SaaS, healthcare, finance, and enterprise clients, building Laravel platforms designed for speed, security, and scalability.",
  },
];

const LaravelDevelopment = () => {
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

  const cardsData = [
    {
      icon: <Image src={Speedmeter.src} alt="speedmeter" width={40} height={40} />,
      cardTitle: "Lightning-Fast Performance",
      cardPara:
        "We optimize Laravel applications for speed, efficiency, and stability, ensuring your platform handles growth effortlessly while keeping users engaged.",
    },
    {
      icon: <Image src={Topmedal.src} alt="speedmeter" width={40} height={40} />,
      cardTitle: "Enterprise-Grade Security",
      cardPara:
        "Every Laravel build we deliver includes advanced protection measures, from encrypted routes to secure authentication, keeping your data and users safe.",
    },
    {
      icon: <Image src={Easycontrol.src} alt="speedmeter" width={40} height={40} />,
      cardTitle: "24/7 Expert Support",
      cardPara:
        "Our team monitors, maintains, and updates your Laravel system around the clock so your business runs smoothly, without interruptions.",
    },
  ];

  const serviceCards = [
    {
      id: 1,
      icon: <Image src={Nodejs.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "Node.js Development",
      serviceCardPara:
        "Other than Laravel, our Node.js development services keeps your backend lightweight, scalable, and efficient. It’s the technology behind high-speed platforms and data-heavy systems that demand performance.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <Image src={Aiintegrate.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "AI Integration",
      serviceCardPara:
        "We bring intelligence to your Laravel applications through AI integration, automating workflows, predicting user behavior, and delivering personalized experiences that help your business make smarter, faster decisions.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <Image src={Blockchain.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "Blockchain Development",
      serviceCardPara:
        "For businesses that value transparency and trust, our blockchain development services introduce secure, traceable, and verifiable systems. From smart contracts to decentralized apps, we merge innovation with reliability.",
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
          secClass="laravel-herobanner"
          leftCol="col-lg-6"
          bgImage={landingPageBanner}
          btnClass="theme-light mt-3"
          title="The Most Trusted Laravel Development Experts in California"
          description="Our Angular development services in California are made to deliver powerful enterprise-ready platforms such as apps and websites that are designed for results."
          btnText="Contact us now"
        />
        <CustomCustomerCard cardsData={cardsData} />;
        <WordPressPerformanceSection
          wordpresssecclass="laravel-about-sec"
          minihead="About us"
          miniheadclass="shorttop-head"
          secTitle1="Building with"
          secTitle2="Laravel"
          secTitle3="for Stronger Digital Foundations"
          description="Laravel is known for speed, security, and flexibility. At California Web Coders, we use Laravel development services in California to create websites and apps that are scalable, easy to manage, and designed to grow with your business. Strong foundations mean lasting digital success."
          listItems={[
            "Custom web application development",
            "API integration and development",
          ]}
          anotherFlexClass="about-another-flex"
          aboutSmall="about-small-img"
          aboutSmallImg={aboutsmallimg}
          videoSrc={aboutvideo}
          listClass="aboutCompanylist"
          TouchBtn="d-none"
          serviceImg="laravel-about-img"
          btntext="More About Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />
        <OurCustomService
          miniHead="Our Services"
          secMainTitle="Powering Modern Web Development With"
          secTitleBlue="Laravel"
          customServicePara="Businesses need solutions that do more than just function, they need to perform, adapt, and grow. At California Web Coders, we use Laravel to build secure, scalable, and high-performing systems designed to support businesses at every stage. Whether it’s powering a custom e-commerce platform or managing complex data workflows, our combine efforts give your business the strong foundation it needs."
          customServiceBtn="Start Your Project"
          serviceCards={serviceCards}
        />
        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="See"
          secTitleBlue="Laravel"
          secTitle2="in Action"
          secDescription="Explore our portfolio below to see how Laravel turns ideas into lasting growth."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />
        <WordPressPerformanceSection
          wordpresssecclass="laravel-choose-us"
          miniheadclass="shorttop-head"
          minihead="Why Choose Us"
          secTitle1="Reliable Laravel Development Across Industries"
          description="Businesses need more than backend functionality, they need systems that perform, adapt, and scale. At California Web Coders, we build Laravel applications that combine power, flexibility, and precision."
          designpointheadline="Our Laravel development services in California are focused on:"
          landingList="landing-design-points laravel-choose-points"
          landingListItems={[
            "Experienced Laravel Developers",
            "Pixel-Perfect Execution",
            "Scalable & Secure Architecture",
            "Reliable Support",
          ]}
          serviceImg="laravel-choose-video"
          image={ChooseSecImg}
          TouchBtn="d-none"
          btntext="See More Benefits"
          learnmorebtn="aboutus-call"
        />
        <WordPressPerformanceSection
          reverse
          minihead="About Company"
          miniheadclass="shorttop-head"
          secTitle1="Let’s Build Your"
          secTitle2="Laravel Project"
          secTitle3="Together"
          description="Want your business to run smoothly across the web with no issues on the backend? Fill out the form below to let our Laravel development agency in California contact you for your own successful and growing website."
          image={powerfulimg}
          listClass="d-none"
          TouchBtn="d-none"
          aboutbtnlink="/get-intouch"
          btntext="Contact Us Now"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />
        {/* <SinglePricingPlan
          secTitle="Development Options Built Around Your Business"
          secDescription="Our Laravel application development company in California is all about your convenience. Our pricing is transparent, flexible, and designed to deliver maximum value at every stage of growth."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}
        <FrequentQuestions
          secTitle="Laravel Web Development FAQs"
          FrequentQuestions="homeFrequentQuestions"
          faqData={faqHomeData}
        />
        <ContactForm
          secTitle="Ready to chat about your project?"
          secDescription="Get in touch today to see how we can help your business achieve its full potential online."
          btnText="Let’s Chat"
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

export default LaravelDevelopment;
