'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import LandingAboutImage from "../../Assets/designingpage-images/landingpage/landingabout.webp";
import landingPageBanner from "../../Assets/designingpage-images/landingpage/landingpage-banner.webp";
import aboutCompany from "../../Assets/designingpage-images/landingpage/letswork.webp";
import ServiceBanner from "../../components/ServiceBanner";
import Ourservices from "../../components/ourservices/Index";
import pixleperfectimg1 from "../../Assets/designingpage-images/landingpage/Ronda.webp";
import pixleperfectimg2 from "../../Assets/designingpage-images/landingpage/Queeneth.webp";
import pixleperfectimg3 from "../../Assets/designingpage-images/landingpage/SUEClothing.webp";
import pixleperfectimg4 from "../../Assets/designingpage-images/landingpage/LatonyaDavis.webp";
import pixleperfectimg5 from "../../Assets/designingpage-images/landingpage/LylPolanco.webp";
import pixleperfectimg6 from "../../Assets/designingpage-images/landingpage/GrantWritingProfessionals.webp";
import letsworktogether from "../../Assets/designingpage-images/landingpage/letsworktogether.webp";
import focuslanding from "../../Assets/designingpage-images/landingpage/focus-landing.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import Lightbox from "yet-another-react-lightbox";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import BlogSection from "../../components/blogPosts";
import Loader from "../../components/Loader";
import { faqHomeData } from "../Designing";
import { wordpressWebsitePricingPlansData } from "../../data";
import DesignPortfolio from "../../components/DesignPortfolio";
import LandingGoodSec from "../../components/LandingGoodSec";
import HappyClient from "../../components/HappyClient";

const LandingPageDesign = () => {
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

  return (
    <Layout>


      <ServiceBanner
        secClass="landing-pg-herobanner"
        leftCol="col-lg-6"
        bgImage={landingPageBanner}
        btnClass="theme-light mt-3"
        title="Transform Clicks into Conversions with Stunning Landing Pages"
        description="We design  high-converting landing pages tailored to your business goals. From product launches to lead generation campaigns, our designs are built to maximize engagement and drive measurable results."
        btnText="Get Your Landing Page Now"
      />

      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="We’re Awards Winning"
        secTitle2="IT Solutions"
        secTitle3="Agency"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listItems={["Professional IT Solutions ", "Experience Team Members"]}
        image={LandingAboutImage}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />


        <DesignPortfolio />


      <WordPressPerformanceSection
          reverse
          minihead="About"
          miniheadclass="shorttop-head"
          secTitle1="Let’s Work Together"
          description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
          landingList="landing-design-points domain-register-list"
          landingListItems={[
            "No coding skills needed",
            "Mobile-friendly website",
            "All-in-one package",
            "Easy step-by-step guide",
            "Get 24 hours web design",
          ]}
          TouchBtn="d-none"
          btntext="Let's Talk With Us"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={aboutCompany}
        />


        <LandingGoodSec/>

      {/* <Ourservices
        serviceminihead="Our Services"
        serviceMainHead="Types of"
        serviceEndName="Landing Pages"
        serviceMainHeadcom="We Design"
        allservicelink="View All Services"
        serviceCountOne="01"
        firstServiceName="Event/Promotion Pages"
        firstServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountTwo="02"
        secondServiceName="E-Commerce"
        secondServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountThird="03"
        thirdServiceName="Lead Generation"
        thirdServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      /> */}

      <HappyClient/>

      {/* <PixelPerfectSec
        secTitle="Our Work Speaks For Itself"
        secDescription="Take a look at some of the websites we’ve designed for businesses across various industries. Each project is crafted with a unique vision and attention to detail."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      /> */}

      {/* <WordPressPerformanceSection
        reverse
        wordpresssecclass="letstogether-sec"
        miniheadclass="shorttop-head"
        secTitle1="Let’s Work Together"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        descriptiontwo="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={letsworktogether}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <WordPressPerformanceSection
        miniheadclass="shorttop-head"
        secTitle1="Why Choose Our"
        secTitle2="Landing Page Design?"
        description="A landing page isn’t just another web page—it’s your first impression, your sales pitch, and your conversion funnel all in one."
        designpointheadline="At California Web Coders, we focus on:"
        landingList="landing-design-points"
        landingListItems={[
          "Conversion-Focused Design",
          "Mobile-Responsive Layouts",
          "Fast Loading Speed",
          "User-Friendly Flow",
          "SEO Optimization",
        ]}
        image={focuslanding}
        TouchBtn="d-none"
        btntext="See More Benefits"
        learnmorebtn="aboutus-call"
      /> */}

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
  );
};

export default LandingPageDesign;
