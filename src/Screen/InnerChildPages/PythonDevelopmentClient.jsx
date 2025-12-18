'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "@/Assets/newChildPagesAssets/pythondevelopment/landing-page-banner.webp";
import AboutFrontendOne from "@/Assets/newChildPagesAssets/pythondevelopment/about1.webp";
import AboutFrontendTwo from "@/Assets/newChildPagesAssets/pythondevelopment/about2.webp";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/pythondevelopment/pixel-1.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/pythondevelopment/pixel-2.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/pythondevelopment/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/pythondevelopment/pixel-4.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/pythondevelopment/pixel-5.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/pythondevelopment/pixel-6.webp";
import serviceCardOne from "@/Assets/newChildPagesAssets/pythondevelopment/service-customapi.webp";
import serviceCardTwo from "@/Assets/newChildPagesAssets/pythondevelopment/service-card-two.webp";
import serviceCardThree from "@/Assets/newChildPagesAssets/pythondevelopment/service-card-three.webp";
import CustomAboutCompany from "../../components/CustomAboutCompany";
import OurCustomService from "../../components/OurCustomService";
import { RiListSettingsLine } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import PersonalInformationBox from "../../components/PersonalInformationBox";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import { wordpressWebsitePricingPlansData } from "../../data";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import PythonMaintaince from "../../components/PythonMaintaince";
import Pyhthonservice1  from "@/Assets/newChildPagesAssets/pythondevelopment/python-service-1.svg";
import Pyhthonservice2  from "@/Assets/newChildPagesAssets/pythondevelopment/python-service-2.svg";
import Pyhthonservice3  from "@/Assets/newChildPagesAssets/pythondevelopment/python-service-3.svg";
import blognewbg from "@/Assets/newChildPagesAssets/pythondevelopment/blog-bg.webp";
import Roundmap  from "@/Assets/newChildPagesAssets/pythondevelopment/round-map.svg";
import Roundmail  from "@/Assets/newChildPagesAssets/pythondevelopment/round-email.svg";
import Roundphone  from "@/Assets/newChildPagesAssets/pythondevelopment/round-phone.svg";
import Roundmeter  from "@/Assets/newChildPagesAssets/pythondevelopment/round-meter.svg";

import Image from "next/image";

export const faqHomeData = [
  {
    id: 1,
    question:
      "1. Why should I choose Python for my web or app development project?",
    answer:
      "Python development offers speed and agility like no other development language. From web to apps, it loads every platform in milliseconds.",
  },
  {
    id: 2,
    question: "2. Why choose Python for web app development?",
    answer:
      "Python offers robust backend development and intuitive frontend development that works best for high-performance web and apps, such as single web applications, e-commerce platforms, and many others.",
  },
  {
    id: 3,
    question:
      "3. Do you provide custom Python development services in California?",
    answer:
      "Yes, our team delivers Python solutions for businesses across California and in USA.",
  },
  {
    id: 4,
    question: "4. Can you migrate my existing app to Python?",
    answer:
      "Yes, we can migrate and maintain your website into a Python-developed product without any major downtime and data loss.",
  },
  {
    id: 5,
    question: "5. What industries do you serve with Python development?",
    answer:
      "We’ve built web and app products for fintech, healthcare, logistics, retail, and SaaS, all powered by Python.",
  },
  {
    id: 6,
    question: "6. How do you ensure Python app security?",
    answer:
      "The best thing about Python is that it has limitless possibilities, making it easy to in-built security features in, rather than depending upon plugins.",
  },
  {
    id: 7,
    question: "7. Do you build both web and mobile applications with Python?",
    answer:
      "Yes, we develop scalable web platforms and backend systems that power modern mobile experiences.",
  },
  {
    id: 8,
    question: "8. Which Python frameworks do you use?",
    answer:
      "We specialize in Django, Flask, and FastAPI, depending on your project needs and performance goals.",
  },
  {
    id: 9,
    question: "9. Can you integrate AI or automation into my Python project?",
    answer:
      "Yes, the versatility of Python allows for any and all kinds of development, including chatbot development.",
  },
  {
    id: 10,
    question: "10. Do you offer ongoing Python app support?",
    answer:
      "Yes, we provide continuous maintenance, performance monitoring, and feature updates post-launch.",
  },
];

const PythonDevelopment = () => {
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
      icon: <Image src={Pyhthonservice1.src} alt="Pyhthonservice1" width={40} height={40} />,
      serviceCardHead: "API Development & Integration",
      serviceCardPara:
        "Think of APIs as digital bridges; we’re the ones who build them using frameworks such as React and Angular, connecting your web apps with in-house or 3rd party applications. That’s how our Python backend development services in California turn disconnected systems into a whole ecosystem, built for speed, security, and serious scalability.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <Image src={Pyhthonservice2.src} alt="Pyhthonservice2" width={40} height={40} />,
      serviceCardHead: "Automation & Scripting",
      serviceCardPara:
        "Why work with other web development languages when Python can do it better? Our Python application development in California makes repeated tasks vanish with the help of automation and cleans up coding chaos, keeping your digital operations performing like a perfectly tuned engine, always roaring!",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <Image src={Pyhthonservice3.src} alt="Pyhthonservice3" width={40} height={40} />,
      serviceCardHead: "Migration and Support",
      serviceCardPara:
        "Shifting your digital products to Python is not an upgrade; it’s an evolution. With California Web Coders, you get a partner that migrates all your systems without any data loss, offers weekly backups, and maintains everything so your web app is always up and running.",
      serviceCardImg: serviceCardThree,
    },
  ];

  const infoData = [
    {
      Icon: <Image src={Roundmap.src} alt="Roundmap" width={40} height={40} />,
      miniHead: "Head Office",
      miniPara: "225 Broadway, San Diego, CA 92101, United States",
      sizeChange: "col-lg-3 col-md-6",
    },
    {
      Icon: <Image src={Roundmail.src} alt="Roundmail" width={40} height={40} />,
      miniHead: "Share Your Project",
      miniPara: "supportcaliforniawebcoderscom",
      sizeChange: "col-lg-3 col-md-6",
    },
    {
      Icon: <Image src={Roundphone.src} alt="Roundphone" width={40} height={40} />,
      miniHead: "Get in Touch",
      miniPara: "+1(619)335-2364",
      sizeChange: "col-lg-3 col-md-6",
    },
    {
      Icon: <Image src={Roundmeter.src} alt="speedmeter" width={40} height={40} />,
      miniHead: "Support You can Count on",
      miniPara:
        "Reliable, responsive, and always ready to sort out any problem causing delay.",
      sizeChange: "col-lg-3 col-md-6",
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
          secClass="python-banner-sec"
          leftCol="col-lg-6"
          bgImage={landingPageBanner}
          btnClass="theme-light mt-3"
          title="Custom Python Development that Scales Like Crazy!"
          description="Build secure, scalable solutions with one of the world’s most versatile technologies, offering limitless functionalities for Web & App solutions."
          btnText="Let’s Talk Python"
        />

        <PythonMaintaince />

        <CustomAboutCompany
          miniHead="About Company"
          mainHeadStart="Go-To"
          mainHeadBlue="Python Experts"
          mainHeadLast="in California"
          frontendAboutImg={AboutFrontendOne}
          frontendAboutImgtwo={AboutFrontendTwo}
          aboutPara="We leverage our Python development service in California to develop scalable systems, automate workflows, and build web apps that take you way ahead of your competition. So ahead, you won’t be able to find them in the rear-view mirror!"
          listItems={["Smart & Scalable", "Built for Performance"]}
          listClass="aboutCompanylist"
          btntext="Explore Services"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <OurCustomService
          miniHead="Our Services"
          secMainTitle="Engineering the Backbone of"
          secTitleBlue="Modern Business with Python!"
          customServicePara="Develop any type of solution quickly, cost-effectively, and securely with a trusted Python software development company in California. With its open-source flexibility and framework-rich ecosystem, Python fuels the creation of intelligent, high-performing digital experiences."
          customServiceBtn="Start Your Project"
          serviceCards={serviceCards}
        />

        <section className="python-personal-information">
          <PersonalInformationBox infoData={infoData} />
        </section>

        <WordPressPerformanceSection
          wordpresssecclass="python-development-bg"
          minihead="California Web Coders:"
          secTitle1="The Smarter Choice for Python Development"
          description="As a leading Python development company in California, we have powered numerous website and application development projects. Over 300 clients consider us a trusted development company they can count on for all things Python."
          listClass="d-none"
          landingList="landing-design-points python-development-points"
          landingListItems={[
            "Intuitive Frontend",
            "High-Performing Backend",
            "Process Automations",
            "AI Integration",
            "Secure & Scalable",
          ]}
          TouchBtn="d-none"
          serviceImg="d-none"
          btntext="Let’s Code"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="See "
          secTitleBlue="Python Projects"
          secTitle2="in Action"
          secDescription="Take a sneak peek at our Python Projects that have made waves around the industry"
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
          btnText="We Can Build One for You"
        />

        <ContactForm
          secTitle="Discuss Your Python Project with Us!"
          secDescription="If you want to go unstoppable, let’s talk, and together we’ll make your brand go lightning fast!"
          btnText="Let’s Chat"
        />

        {/* <SinglePricingPlan
          secTitle="Python Development"
          secTitleEnd="Packages for Every Business"
          secDescription="Our packages are flexible, making it easier for any business to implement Python"
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="Myths, Misconceptions, and the Python Truth"
          FrequentQuestions="homeFrequentQuestions"
          faqData={faqHomeData}
        />

        <Suspense fallback={<Loader />}>
          <BlogSection categorySlug="cms-development" blogbgNew={blognewbg} />
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

export default PythonDevelopment;
