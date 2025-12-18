'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "../../Assets/newChildPagesAssets/frontenddevelopment/landingbanner.webp";
import AboutFrontendOne from "../../Assets/newChildPagesAssets/frontenddevelopment/person-front-about.webp";
import AboutFrontendTwo from "../../Assets/newChildPagesAssets/frontenddevelopment/front-about-two.webp";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/frontenddevelopment/pixel-one.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/frontenddevelopment/pixel-two.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/frontenddevelopment/pixel-three.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/frontenddevelopment/pixel-four.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/frontenddevelopment/pixel-five.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/frontenddevelopment/pixel-six.webp";
import DesignBrandMove from "../../Assets/newChildPagesAssets/frontenddevelopment/design-brand-move.webp";
import serviceCardOne from "../../Assets/newChildPagesAssets/frontenddevelopment/serviceOne.webp";
import laptopVideo from "../../Assets/newChildPagesAssets/frontenddevelopment/process-side.mp4";
import processFrontendPlug from "../../Assets/newChildPagesAssets/frontenddevelopment/frontend-plug.webp";
import CustomAboutCompany from "../../components/CustomAboutCompany";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import { faqHomeData } from "../Designing";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import OurCustomService from "../../components/OurCustomService";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import OurProcess from "../../components/OurProcess";


const FrontendDevelopment = () => {
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
      icon: <TbDeviceDesktopCog size={40} />,
      serviceCardHead: "Custom UI Development",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <TiHtml5 size={40} />,
      serviceCardHead: "HTML5, CSS3 & JavaScript",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 3,
      icon: <TbDeviceDesktopCog size={40} />,
      serviceCardHead: "Cross-Browser Compatibility",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
  ];


  const processStepsData = [
  {
    title: "Starting with a Clear Roadmap",
    description:
      "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth.",
  },
  {
    title: "Design & Prototype",
    description:
      "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth.",
  },
  {
    title: "Development & Testing",
    description:
      "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth.",
  },
  {
    title: "Launch & Continuous Improvement",
    description:
      "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth.",
  },
];


  return (

    <>

    <Layout>
      <ServiceBanner
        leftCol="col-lg-6"
        bgImage={landingPageBanner}
        btnClass="theme-light mt-3"
        title="Front-End Development for Fast, Modern & Responsive Websites"
        description="Our expert front-end developers craft interactive, pixel-perfect interfaces that deliver seamless user experiences on every device."
        btnText="Get A Free React Quote"
      />

      <CustomAboutCompany
        miniHead="About Company"
        mainHead="Specialists in High Performance User Interfaces"
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
        secTitleBlue="Python Development"
        secLastTitle="Services"
        customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        customServiceBtn="View All Services"
        serviceCards={serviceCards}
      />

      <PixelPerfectSec
        minihead="Portfolio"
        secTitle="Recent"
        secTitleBlue="Front-End Projects"
        secDescription="See how we’ve helped clients build cutting-edge, high-performance React applications."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <WordPressPerformanceSection
        wordpresssecclass="designmove-sec"
        miniheadclass="shorttop-head"
        secTitle1="We"
        secTitle2="Design the Web"
        secTitle3="That Moves Your Brand Forward"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        descriptiontwo="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement."
        image={DesignBrandMove}
        listClass="d-none"
        TouchBtn="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 (619) 335-2364"
      />

      <OurProcess
        sectitle="Our"
        sectitleblue="Process"
        absltImg={processFrontendPlug}
        videoSrc={laptopVideo}
        processSteps={processStepsData}
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

export default FrontendDevelopment;
