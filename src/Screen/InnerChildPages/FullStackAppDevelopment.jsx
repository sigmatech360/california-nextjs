'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "../../Assets/newChildPagesAssets/app-development/app-hero-banner.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import LandingAboutImage from "../../Assets/newChildPagesAssets/app-development/app-about.webp";
import LandingMindImg from "../../Assets/newChildPagesAssets/app-development/landingmind.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/app-development/Angelica Larrotta.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/app-development/Bobby Gilbreth.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/app-development/Cindy Manning.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/app-development/Lone Rock Landscaping.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/app-development/pixel5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/app-development/Betzy.webp";
import blogbgnew from "../../Assets/newChildPagesAssets/app-development/blog-bg-new.webp"
import mobilePic from "../../Assets/newChildPagesAssets/app-development/servicepoint-mobile.webp"
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import FrequentQuestions from "../../components/FrequentQuestions";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import { faqHomeData } from "../Designing";
import ContactForm from "../../components/readytocheat";
import OurAppServices from "../../components/OurAppServices";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { MdAppSettingsAlt } from "react-icons/md";
import AppServicePoint from "../../components/AppServicePoint";

const FullStackAppDevelopment = () => {
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
      appServiceHead: "iOS Devlopment",
      appServicePara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: <DiAndroid size={30}/>,
      appServiceHead: "Android Devlopment",
      appServicePara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      icon: <MdAppSettingsAlt size={30}/>,
      appServiceHead: "Native Apps",
      appServicePara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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


  return (
    <Layout>
      <ServiceBanner
        leftCol="col-lg-6"
        bgImage={landingPageBanner}
        btnClass="d-none"
        title="Full‑Stack App Development for Web, Mobile, iOS & Android"
      />

      <WordPressPerformanceSection
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Full-Stack Expertise with "
        secTitle2="MERN Development"
        description="The years of hands-on experience as a trusted WordPress web development company have brought us to this point where we can combine strategy, innovation, and technical prowess to create websites that look good and perform well. Whether it is a startup or an enterprise-level business, our WordPress web development services are designed so that you can scale, engage, and succeed. Let our WordPress web development agency in the USA turn your ideas into high-impact results."
        listItems={["Professional IT Solutions ", "Experience Team Members"]}
        image={LandingAboutImage}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <OurAppServices
        minihead="Our Services"
        ourSecTitleBlue="Mobile App Development"
        ourSecTitle="Services for Every Platform"
        miniPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
        OurServiceBtn="View All Services"
        appServices={serviceList}
      />

      
      <AppServicePoint
        AppServicePointSec="app-serivcepoint-sec"
        secTitle="We Create"
        secTitleBlue="Mind Blowing"
        pointPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        imageSrc={LandingMindImg}
        listItems={servicePoint}
      />

      <AppServicePoint
        reverse
        appServicePoinbg="appservice-pointtxt servicepoint-applight"
        AppServicePointSec="apppoint-servicebg"
        secTitle="Web, Mobile, iOS & Android — Full Coverage"
        pointPara="Hover over each category below to explore dedicated services and examples."
        imageSrc={mobilePic}
        listItems={servicePoint}
        servicePointClass="service-point-img"
        serviceImgBox="service-box-mobile"
      />

      <PixelPerfectSec
        minihead="Portfolio"
        secTitle="Get Inspired By Beautiful"
        secTitleBlue="Web Designs"
        secDescription="Take a look at some of the websites we’ve designed for businesses across various industries. Each project is crafted with a unique vision and attention to detail."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <ContactForm
        secTitle="Ready to chat about your project?"
        secDescription="Get in touch today to see how we can help your business achieve its full potential online."
        btnText="Let’s Chat"
      />

      {/* <SinglePricingPlan
        secTitle="Affordable Website Design Packages"
        secDescription="Choose the perfect plan that fits your needs and budget."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      /> */}

      <FrequentQuestions
        secTitle="You Will Find Our Client's Frequent Questions"
        FrequentQuestions="homeFrequentQuestions"
        faqData={faqHomeData}
      />

      <Suspense fallback={<Loader />}>
        <BlogSection categorySlug="cms-development" blogbgNew={blogbgnew} />
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
  );
};

export default FullStackAppDevelopment;
