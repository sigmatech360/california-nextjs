'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import Serviceone from "@/Assets/newChildPagesAssets/mernstack/ecommerce.svg";
import Servicetwo from "@/Assets/newChildPagesAssets/mernstack/realtimeapp.svg";
import Servicethree from "@/Assets/newChildPagesAssets/mernstack/migration.svg";
import serviceCardOne from "@/Assets/newChildPagesAssets/nodejsdevelopment/ecommerce-inner-img.webp";
import serviceCardTwo from "@/Assets/newChildPagesAssets/mernstack/service-card-2.webp";
import serviceCardThree from "@/Assets/newChildPagesAssets/mernstack/migration-innerimg.webp";
import mernherobanner from "@/Assets/newChildPagesAssets/mernstack/mernstack-banner.webp";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/mernstack/pixel-1.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/mernstack/pixel-2.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/mernstack/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/mernstack/pixel-4.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/mernstack/pixel-5.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/mernstack/pixel-6.webp";
import Speedmeter from "@/Assets/newChildPagesAssets/mernstack/speedmeter.svg";
import Topbadge from "@/Assets/newChildPagesAssets/mernstack/topbadge.svg";
import ControlPanel from "@/Assets/newChildPagesAssets/mernstack/controlpanel.svg";
import mernchoose from "@/Assets/newChildPagesAssets/mernstack/mernchoice.webp";
import mernbuidimg from "@/Assets/newChildPagesAssets/mernstack/web-whychoose-abslt.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import OurCustomService from "../../components/OurCustomService";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import FrequentQuestions from "../../components/FrequentQuestions";

import Image from "next/image";

export const faqHomeData = [
  {
    id: 1,
    question: "1. What is the MERN stack?",
    answer:
      "MERN stands for MongoDB, Express.js, React.js, and Node.js, a full-stack JavaScript framework for fast, scalable apps.",
  },
  {
    id: 2,
    question: "2. Why choose MERN for web development?",
    answer:
      "It’s perfect for building modern, high-performance web apps that scale easily and load instantly.",
  },
  {
    id: 3,
    question: "3. Do you offer MERN stack development in California?",
    answer:
      "Yes, we’re a California-based company delivering top-quality MERN stack web and app solutions.",
  },
  {
    id: 4,
    question: "4. Can you upgrade my existing website to the MERN stack?",
    answer:
      "Yes, we can efficiently migrate your existing website to MERN without any major downtime or data loss.",
  },
  {
    id: 5,
    question: "5. What types of projects can you build with MERN?",
    answer:
      "From enterprise dashboards to eCommerce platforms and custom APIs, MERN can handle it all.",
  },
  {
    id: 6,
    question: "6. How fast can you deliver a MERN project?",
    answer:
      "Timelines vary by complexity, but we prioritize efficient sprints and fast, reliable delivery.",
  },
  {
    id: 7,
    question: "7. Do you provide post-launch support for MERN applications?",
    answer:
      "Yes, we offer ongoing support, updates, and performance optimization after deployment.",
  },
  {
    id: 8,
    question: "8. Can you integrate third-party APIs with MERN apps?",
    answer:
      "Definitely, we specialize in API integrations that enhance app functionality and connectivity.",
  },
  {
    id: 9,
    question: "9. Is MERN good for mobile development, too?",
    answer:
      "Yes, React, a framework of MERN, makes it possible to extend web codebases into mobile-friendly environments",
  },
  {
    id: 10,
    question: "10. What makes your MERN developers different?",
    answer:
      "We combine deep technical skill with design sense, building apps that are powerful and user-friendly.",
  },
];

const MERNStackDevelopment = () => {
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
      icon: <Image src={Serviceone.src} alt="Serviceone" width={40} height={40} />,
      serviceCardHead: "E-commerce Platform",
      serviceCardPara:
        "Give your online store the performance it deserves with MERN stack web development in California. We build scalable, secure, and fast e-commerce platforms designed to handle scalability like it’s nothing! From seamless product management to secure payment integrations, MERN development makes sure your business sells smarter and faster.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <Image src={Servicetwo.src} alt="Servicetwo" width={40} height={40} />,
      serviceCardHead: "Real-Time Applications",
      serviceCardPara:
        "Let’s turn your ideas into intuitive experiences with MERN stack app development in California. Need to integrate chat? Dashboards? Or AI tools? We develop real-time applications that respond instantly. Because in the real world, every second counts!",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <Image src={Servicethree.src} alt="Servicethree" width={40} height={40} />,
      serviceCardHead: "Migration & Maintenance",
      serviceCardPara:
        "Switching stacks shouldn’t slow you down. Our MERN stack developers in California are here to make sure a smooth migration from decade-old systems to a powerful MERN without data loss or downtime. Furthermore, we also provide continuous maintenance and optimization, keeping your web and app performance at its peak, round the clock.",
      serviceCardImg: serviceCardThree,
    },
  ];

  const cardsData = [
    {
      icon: <Image src={Speedmeter.src} alt="Speedmeter" width={40} height={40} />,
      cardTitle: "Round-the-Clock Support",
      cardPara:
        "24/7 technical assistance from real engineers and not chatbots. Doesn’t matter if it’s a quick fix or a complete query, our team is always up and working.",
    },
    {
      icon: <Image src={Topbadge.src} alt="Topbadge" width={40} height={40} />,
      cardTitle: "99.9% Uptime",
      cardPara:
        "Our systems are built for performance and reliability. Through protective maintenance, weekly backups, and continuous monitoring, we make sure your web app is always running.",
    },
    {
      icon: <Image src={ControlPanel.src} alt="ControlPanel" width={40} height={40} />,
      cardTitle: "Intuitive Dashboard",
      cardPara:
        "Manage everything in one place. Our interactive dashboard gives you real-time project insights, progress tracking, and seamless communication with your development team.",
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
          secClass="mernstack-hero-banner"
          leftCol="col-lg-6"
          bgImage={mernherobanner}
          btnClass="theme-light mt-3"
          title="Build Fast & Scale Faster with MERN Stack"
          description="Develop intuitive and deploy powerful web and app solutions with California’s top MERN stack developers: fast, scalable, and built to outperform your competitors!"
          btnText="Outperform Your Competition"
        />

        <WordPressPerformanceSection
          wordpresssecclass="mern-about-sec"
          minihead="About Company"
          miniheadclass="shorttop-head"
          secTitle1="Power Your Web & Apps with"
          secTitle2="MERN"
          description="Are you in need of experienced MERN stack developers in California for your next project? Look no further! Our team of highly skilled and talented developers can help bring your project to life with their expertise in building MERN Stack Development Solutions."
          descriptiontwo="As a professional company, we have delivered high-quality and scalable applications using the MERN full-stack development in the past, which includes MongoDB, Express, React, and Node.js. "
          listItems={["Intuitive Frontend", "Powerful Backend"]}
          listClass="aboutCompanylist"
          serviceImg="d-none"
          TouchBtn="d-none"
          btntext="Let’s Get Started"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <OurCustomService
          miniHead="Our Services"
          secMainTitle="Our"
          secTitleBlue="MERN Stack Development "
          secLastTitle="Services"
          customServicePara="With our deep knowledge and experience in MERN, we provide solutions that cater even to specific business needs and requirements. In addition to technical skills, our developers have excellent communication and collaboration abilities, ensuring a seamless and productive working relationship with you."
          customServiceBtn="Start Your Project"
          serviceCards={serviceCards}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Recent Projects Powered by"
          secTitleBlue="MERN"
          secDescription="See our fast, intuitive, and powerful MERN stack projects that are disrupting the competition!"
          btnText="Explore Services"
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <section className="why-choose-react-card">
          <WordPressPerformanceSection
            wordpresssecclass="react-choose-sec"
            secTitle1="California Web Coders:"
            secTitle2="The Smart Choice for MERN"
            description="Partner with California Web Coders, the smart choice for MERN stack development in California. As a full-spectrum development agency, we balance innovation with performance to develop one-of-a-kind solutions that help businesses grow faster, scale smoothly, and lead the digital change! "
            image={mernchoose}
            landingList="landing-design-points"
            landingListItems={["MongoDB", "Express.js", "React.js", "Node.js"]}
            listClass="d-none"
            TouchBtn="d-none"
            btntext=" Let’s Engage"
            learnmorebtn="aboutus-call"
            phoneNumber="+1 (619) 335-2364"
          />
          <CustomCustomerCard cardsData={cardsData} />
        </section>

        <WordPressPerformanceSection
          wordpresssecclass="mernstack-build-sec"
          afterConainerClass="react-build-bg"
          secTitle1="Technology that Disrupts the Competition!"
          description="At California Web Coders, we treat MERN not as a stack, but as a strategy. Every line of code we write is meant to simplify what’s complex, accelerate what’s slow, and make your product ready to disrupt the competition. Need a dynamic single-page application to enterprise-grade dashboards? Or a high-performing website with AI chatbots? Whatever you need, our MERN stack developers in California develop systems that never get under pressure. That’s how fast our systems are!"
          listClass="d-none"
          TouchBtn="d-none"
          serviceImg="mern-build-img"
          btntext="Talk to Us"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
        />

        <ContactForm
          secTitle="Got a MERN Project? Let’s Talk."
          secDescription="We are the dream team you need to turn your idea into a fast, scalable product."
          btnText="Let’s Chat"
        />

        {/* <SinglePricingPlan
          secTitle="MERN Packages"
          secTitleEnd=" that Fit Your Ambitions "
          secDescription="Our packages are designed to fit every pocket and fulfil every ambitious project for startups to enterprises."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="All Your MERN Stack Questions, Answered!"
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

export default MERNStackDevelopment;
