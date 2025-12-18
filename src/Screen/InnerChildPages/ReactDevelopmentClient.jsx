"use client";

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import CustomAboutCompany from "../../components/CustomAboutCompany";
import AboutFrontendOne from "@/Assets/newChildPagesAssets/reactdevelopment/aboutone.webp";
import AboutFrontendTwo from "@/Assets/newChildPagesAssets/reactdevelopment/abouttwo.webp";
import serviceCardOne from "@/Assets/newChildPagesAssets/reactdevelopment/nodejs-inner-img.webp";
import serviceCardTwo from "@/Assets/newChildPagesAssets/reactdevelopment/customui-inner-service.webp";
import serviceCardThree from "@/Assets/newChildPagesAssets/laraveldevelopment/ai-inner-img.webp";
import reactChoose from "@/Assets/newChildPagesAssets/reactdevelopment/reactchoose.webp";
import Apiintegrate from "@/Assets/newChildPagesAssets/reactdevelopment/apiintegration.svg";
import Customui from "@/Assets/newChildPagesAssets/reactdevelopment/customui.svg";
import Nodejs from "@/Assets/newChildPagesAssets/laraveldevelopment/nodejs.svg";
import Aiintegrate from "@/Assets/newChildPagesAssets/laraveldevelopment/aiintegrate.svg";
import Speedmeter from "@/Assets/newChildPagesAssets/reactdevelopment/speedmeter.svg";
import Topmedal from "@/Assets/newChildPagesAssets/reactdevelopment/toppermedal.svg";
import Easycontrol from "@/Assets/newChildPagesAssets/reactdevelopment/easycontrol.svg";
import OurCustomService from "../../components/OurCustomService";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import FrequentQuestions from "../../components/FrequentQuestions";
// import SinglePricingPlan from "../../components/SinglePricingPlan";
// import { wordpressWebsitePricingPlansData } from "../../data";
import ContactForm from "../../components/readytocheat";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import ReactHeroBanner from "../../components/ReactHeroBanner";
import Image from "next/image";
// 

export const faqHomeData = [
  {
    id: 1,
    question: "1. What is React used for in web development?",
    answer:
      "React is used to build fast, dynamic, and interactive user interfaces that improve engagement and performance across web and mobile applications.",
  },
  {
    id: 2,
    question: "2. Why choose California Web Coders for React development?",
    answer:
      "We create high-performance React applications focused on scalability, design precision, and measurable business outcomes for every client.",
  },
  {
    id: 3,
    question: "3. Do you build custom React applications?",
    answer:
      "Yes. We specialize in custom React web applications tailored to your business goals, from startups to large-scale enterprise systems.",
  },
  {
    id: 4,
    question: "4. Is React good for SEO?",
    answer:
      "Yes. With tools like Next.js, React supports server-side rendering, improving SEO visibility and page load performance.",
  },
  {
    id: 5,
    question: "5. Do you integrate AI with React applications?",
    answer:
      "Absolutely. We enhance React apps with AI integration to enable smarter user experiences, automation, and predictive analytics.",
  },
  {
    id: 6,
    question: "6. Can React be used for eCommerce websites?",
    answer:
      "Yes. React is ideal for eCommerce platforms that need interactive product displays, fast navigation, and real-time data updates.",
  },
  {
    id: 7,
    question: "7. Do you offer React maintenance and support?",
    answer:
      "Yes. We provide ongoing maintenance, optimization, and updates to keep your React application performing at its best.",
  },
  {
    id: 8,
    question: "8. How long does a React project take?",
    answer:
      "Most React projects are completed within 4-8 weeks, depending on complexity, integrations, and required features.",
  },
  {
    id: 9,
    question:
      "9. Can React integrate with backend technologies like Node.js or Laravel?",
    answer:
      "Yes. React connects seamlessly with Node.js, Laravel, and other backend frameworks for full-stack performance.",
  },
  {
    id: 10,
    question:
      "10. Do you provide React development for startups and small businesses?",
    answer:
      "Yes. Our React development services in California are scalable and affordable for startups and small businesses across California.",
  },
];

const ReactDevelopment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const serviceCards = [
    {
      id: 1,
      icon: <Image src={Nodejs.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "Node.js Development",
      serviceCardPara:
        "We use Node.js to create fast, SEO-friendly React apps with superior rendering performance, ideal for businesses that need scalable and search-optimized digital platforms.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <Image src={Customui.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "UI/UX Design",
      serviceCardPara:
        "Our design team blends creativity with usability, ensuring every interface is intuitive, visually appealing, and optimized for conversion, built to make every user interaction feel effortless.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <Image src={Aiintegrate.src} alt="speedmeter" width={40} height={40} />,
      serviceCardHead: "AI Integration",
      serviceCardPara:
        "We combine React interfaces with AI integration to create smart, adaptive web applications. From predictive interactions to personalized dashboards, we help your platform think and respond intelligently.",
      serviceCardImg: serviceCardThree,
    },
  ];

  const cardsData = [
    {
      icon: <Image src={Speedmeter.src} alt="speedmeter" width={40} height={40} />,
      cardTitle: "Scalable Interfaces",
      cardPara:
        "We build React applications optimized for speed, performance, and scalability, ensuring your platform handles traffic, data, and user interactions effortlessly for a seamless experience. ",
    },
    {
      icon: <Image src={Topmedal.src} alt="speedmeter" width={40} height={40} />,
      cardTitle: "Conversion-Focused",
      cardPara:
        "Every interface we design is guided by strategy and behavior. From layout to micro-interactions, we craft user journeys that engage visitors and turn them into loyal customers.",
    },
    {
      icon: <Image src={Easycontrol.src} alt="speedmeter" width={40} height={40} />,
      cardTitle: "Seamless Integration",
      cardPara:
        "Our React developers combine innovation with intelligence, integrating AI, APIs, and backend systems to create interactive, data-driven applications that adapt and evolve with your business needs.",
    },
  ];

  return (
    <>


      <Layout>
        <ReactHeroBanner />

        <CustomAboutCompany
          CustomFrontendSec="react-about-sec"
          miniHead="About Us"
          mainHeadStart="Making Interactive Websites With"
          mainHeadBlue="React’s Power"
          frontendAboutImg={AboutFrontendOne}
          frontendAboutImgtwo={AboutFrontendTwo}
          aboutPara="React is widely known for powering some of the world’s most advanced websites, and we are here to bring that same power to your business. At California Web Coders, our developers create websites that look sharp, run fast, and keep users engaged across industries and business stages alike."
          listItems={[
            "Modern, interactive user interfaces",
            "Optimized for performance and SEO",
          ]}
          listClass="aboutCompanylist"
          btntext="More About Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <OurCustomService
          CustomFrontendSec="react-service-sec"
          miniHead="More of Our Services:"
          secMainTitle="Building"
          secTitleBlue="Dynamic Frontends"
          secLastTitle="That Perform"
          customServicePara="React powers seamless, interactive web experiences. At California Web Coders, our React development services focus on crafting lightning-fast interfaces that engage users, scale effortlessly, and deliver measurable performance across every device and screen size."
          customServiceBtn="Start Your Project"
          serviceCards={serviceCards}
        />

        <section className="why-choose-react-card">
          <WordPressPerformanceSection
            wordpresssecclass="react-choose-sec"
            miniheadclass="shorttop-head"
            minihead="Why Choose Us"
            secTitle1="Why Brands Across California Choose"
            secTitle2="React With Us"
            description="Across California, brands partner with us to create React websites that combine speed, interactivity, and rock-solid reliability. At California Web Coders, we are a trusted React JS development company in California, delivering digital experiences that are scalable, secure, and custom made for each business’s goals. Every project undergoes attentive testing and is built using modern development practices to ensure long-lasting quality."
            image={reactChoose}
            listClass="d-none"
            TouchBtn="d-none"
            btntext="Talk to us"
            aboutbtnlink="/get-intouch"
            learnmorebtn="aboutus-call"
            phoneNumber="+1 (619) 335-2364"
          />
          <CustomCustomerCard cardsData={cardsData} />
        </section>

        <FrequentQuestions
          secTitle="Our Most Asked Questions About React Development"
          FrequentQuestions="homeFrequentQuestions"
          faqData={faqHomeData}
        />

        <WordPressPerformanceSection
          afterConainerClass="react-build-bg"
          secTitle1="Ready to Take Over With A Seamless Web Experience?"
          description="Your website deserves to do more than just look good, it should perform, convert, and evolve with your business. Let California Web Coders build a high-performing web experience that turns visitors into loyal customers."
          listClass="d-none"
          TouchBtn="d-none"
          serviceImg="d-none"
          btntext="Talk to Our Experts"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <ContactForm
          secTitle="Fill The Contact Form to Get Started"
          secDescription="Our experts are ready for a conversation with you! Fill out the form below for a consultation. "
          btnText="Send Message"
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

export default ReactDevelopment;
