'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "../../Assets/newChildPagesAssets/frontenddevelopment/landingbanner.webp";
import AboutFrontendTwo from "../../Assets/newChildPagesAssets/backenddevelopment/aboutOne.webp";
import AboutFrontendOne from "../../Assets/newChildPagesAssets/backenddevelopment/aboutTwo.webp";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/backenddevelopment/pixel-1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/backenddevelopment/pixel-2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/backenddevelopment/pixel-3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/backenddevelopment/pixel-4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/backenddevelopment/pixel-5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/backenddevelopment/pixel-6.webp";
import reactChoose from "../../Assets/newChildPagesAssets/reactdevelopment/reactchoose.webp";
import serviceCardOne from "../../Assets/newChildPagesAssets/backenddevelopment/service-cloud-box.png";
import serviceCardTwo from "../../Assets/newChildPagesAssets/backenddevelopment/service-maintaince-box.png";
import serviceCardThree from "../../Assets/newChildPagesAssets/backenddevelopment/service-serverside-box.png";
import CustomAboutCompany from "../../components/CustomAboutCompany";
import OurCustomService from "../../components/OurCustomService";
import { RiFileCloudFill } from "react-icons/ri";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { FaMedal, FaServer, FaTachometerAlt } from "react-icons/fa";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import { IoSettingsSharp } from "react-icons/io5";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Designing";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";


const BackendDevelopment = () => {
  const webDesignPortfolioData = [
    {
      id: 1,
      image: pixleperfectimg1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      image: pixleperfectimg2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      image: pixleperfectimg3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      image: pixleperfectimg4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      image: pixleperfectimg5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      image: pixleperfectimg6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const cardsData = [
    {
      icon: <FaTachometerAlt />,
      cardTitle: "24/7 Expert Customer Support",
      cardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .",
    },
    {
      icon: <FaMedal />,
      cardTitle: "99.9% Uptime Guarantee",
      cardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .",
    },
    {
      icon: <IoSettingsSharp />,
      cardTitle: "Easy-to-Use Control Panel",
      cardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .",
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

  const serviceCards = [
    {
      id: 1,
      icon: <RiFileCloudFill size={40} />,
      serviceCardHead: "Cloud & Hosting Solutions",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <TbDeviceDesktopCog size={40} />,
      serviceCardHead: "Maintenance & Support",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <FaServer size={40} />,
      serviceCardHead: "Server-Side Programming",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardThree,
    },
  ];

  return (
    <>

      <Layout>
        <ServiceBanner
          leftCol="col-lg-6"
          bgImage={landingPageBanner}
          btnClass="theme-light mt-3"
          title="Secure, Scalable & High-Performance Backend Development"
          description="Our backend experts build powerful, reliable server-side solutions that keep your applications fast, stable, and ready to scale."
          btnText="Get A Free React Quote"
        />

        <CustomAboutCompany
          miniHead="About Company"
          mainHead="Building the Core That Powers "
          mainHeadLastBlue="Your Applications"
          frontendAboutImg={AboutFrontendTwo}
          frontendAboutImgtwo={AboutFrontendOne}
          aboutPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          listItems={["Professional IT Solutions ", "Experience Team Members"]}
          listClass="aboutCompanylist"
          btntext="Learn More About Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <OurCustomService
          miniHead="Our Services"
          secMainTitle="Our"
          secTitleBlue="Backend Development"
          secLastTitle="Services"
          customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
          customServiceBtn="View All Services"
          serviceCards={serviceCards}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Recent"
          secTitleBlue="Backend Projects"
          secDescription="See how we’ve helped clients build cutting-edge, high-performance React applications."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <section className="why-choose-react-card">
          <WordPressPerformanceSection
            wordpresssecclass="react-choose-sec"
            miniheadclass="shorttop-head"
            minihead="Why Choose Us"
            secTitle1="Why Choose Our"
            secTitle2="React Development"
            secTitle3="Services"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            image={reactChoose}
            listClass="d-none"
            TouchBtn="d-none"
            btntext="Register With Confidence"
            learnmorebtn="aboutus-call"
            phoneNumber="+1 (619) 335-2364"
          />
          <CustomCustomerCard cardsData={cardsData} />;
        </section>

        <WordPressPerformanceSection
          afterConainerClass="react-build-bg"
          secTitle1="Ready to Build a Powerful React App?"
          description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
          listClass="d-none"
          TouchBtn="d-none"
          serviceImg="d-none"
          btntext="Let's Talk With Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        {/* <SinglePricingPlan
          secTitle="Affordable Website Design Packages"
          secDescription="Choose the perfect plan that fits your needs and budget."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ContactForm
          secTitle="Ready to chat about your project?"
          secDescription="Get in touch today to see how we can help your business achieve its full potential online."
          btnText="Let’s Chat"
        />

        <FrequentQuestions
          secTitle="You Will Find Our Client's Frequent Questions"
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

export default BackendDevelopment;
