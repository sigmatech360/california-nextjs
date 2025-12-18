'use client';


import React, { lazy, Suspense, useState } from "react";
import "./index.css";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

// import pixleperfectimg1 from "../../Assets/service-mobileAppDev-pixle-perfect-img1.webp";
// import pixleperfectimg2 from "../../Assets/service-mobileAppDev-pixle-perfect-img2.webp";
// import pixleperfectimg3 from "../../Assets/service-mobileAppDev-pixle-perfect-img3.webp";
// import pixleperfectimg4 from "../../Assets/service-mobileAppDev-pixle-perfect-img4.webp";
// import pixleperfectimg5 from "../../Assets/service-mobileAppDev-pixle-perfect-img5.webp";
// import pixleperfectimg6 from "../../Assets/service-mobileAppDev-pixle-perfect-img6.webp";

import pixleperfectimg1 from "../../Assets/MobilePortfolio/service-mobileAppDev-pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/MobilePortfolio/service-mobileAppDev-pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/MobilePortfolio/service-mobileAppDev-pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/MobilePortfolio/service-mobileAppDev-pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/MobilePortfolio/service-mobileAppDev-pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/MobilePortfolio/service-mobileAppDev-pixle-perfect-img6.webp";

import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";

import wordpressbg from "../../Assets/services-cmsDev-banner-bg.webp";
import serviceBannerImg from "../../Assets/services-mobileApp-banner-img.webp";
import performence from "../../Assets/service-mobileAppDev-about-img.webp";
import wordpresssectionimg from "../../Assets/services-mobileAppDev-about2-img.webp";
import creativethoughsec from "../../Assets/services-mobileAppDev-creativeThrough-img.webp";

// import Lightbox from "react-image-lightbox";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Loader from "../../components/Loader";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
// import BlogSection from "../../components/blogPosts";
const BlogSection = lazy(() => import("../../components/blogPosts"));

export const mobileAppDevelopmentPortfolioData = [
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

const MobileAppDevelopment = () => {
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
          bgImage={wordpressbg}
          title="Innovative Mobile App Development For Business Growth"
          description="The world has shifted to mobile devices, and if you are still dependent on desktop screens, you might be setting yourself up for failure! California Web Coders offer exceptional mobile app development services that businesses count on. We build apps that are intuitive, scalable, and ready to grow with your audience."
          bannerList={[
            "Custom iOS and Android solutions.",
            "Expert mobile app developers on board.",
            "Streamlined UX for better engagement.",
          ]}
          image={serviceBannerImg}
        />

        <WordPressPerformanceSection
          secTitle1="We Make"
          secTitle2="App Experience"
          secTitle3="Worth Remembering"
          description="Bringing your mobile app to life doesn’t have to be complicated. Whether it’s your first build or a major upgrade, we simplify the entire process. Our mobile app development services cover everything from planning to launch."
          description2="From slick ios mobile app development to strong Android app development, we’ve got your tech covered."
          image={performence}
          btnText="Get Your Mobile App"
        />

        <Growyourbusiness
          title1="Planning Your Next Big Idea? Let’s Execute It With A"
          title2="Mobile App!"
          btnText="Start Now"
        />

        <PixelPerfectSec
          secTitle="Explore Our"
          secTitleBlue="Mobile Applications"
          secDescription="Want an e-commerce app, a business solution, or just an app to connect better with your audience? We have you covered! Our mobile app development services California cover every idea you dream of!"
          projectsData={mobileAppDevelopmentPortfolioData}
          onImageClick={handleImageClick}
          // btnText="A glimpse of our expertise!"
        />

        {/* <PricingPlans
        secTitle="Flexible Plans For Growing Ideas"
        secDescription="We offer straightforward pricing for apps of all sizes. Scalable, customizable, and built to match your vision."
        image={wordpresssectionimg}
        whyWordressTitle="Why Code Your App With Us?"
        whyWordressDescription1="We’re more than just coders, we’re your app partner. Whether you're launching a fresh concept or optimizing an existing app, we make the journey smooth, transparent, and efficient."
        whyWordressDescription2="With a team of skilled mobile app developers, we focus on delivering apps that work beautifully and deliver measurable impact. From strategy to store submission, we handle the heavy lifting so you can focus on growth."
        whyWordressDescription3="Get a custom-built solution with proven tech and real support."
        btnText="Witness Digital Success"
      /> */}

      

        <ContactForm
          secTitle="Chat With Our Professional Mobile App Developers!"
          secDescription="Schedule a free consultation with our team of mobile app developers California! Let’s lay out the plan for your next success story. "
          btnText="Let’s Chat"
        />

        
      {/* <SinglePricingPlan
        secTitle="Flexible Plans For Growing Ideas"
        secDescription="We offer straightforward pricing for apps of all sizes. Scalable, customizable, and built to match your vision."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      /> */}


        <Creativitythrough
          title1="Apps That Your"
          title2="Users Enjoy!"
          description1="Great apps aren’t just built, they’re engineered with purpose. At California Web Coders, we combine design, development, and user psychology to create seamless mobile experiences. Whether you need speed, security, or sleek design, we’re here to turn your ideas into high-performance apps."
          description2="Let’s make something users can’t stop tapping."
          image={creativethoughsec}
          // btnText="Sign Up For Your App"
        />

        <Suspense fallback={<Loader />}>
          <BlogSection categorySlug="mobile-app-development" />
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

export default MobileAppDevelopment;
