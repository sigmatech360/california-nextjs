'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import videoAnimationBanner from "../../Assets/designingpage-images/videoanimationpage/videoanimationbannr.webp";
import videoAnimationAbout from "../../Assets/designingpage-images/videoanimationpage/videoanimationabout.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Ourservices from "../../components/ourservices/Index";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import pixleperfectimg1 from "../../Assets/designingpage-images/videoanimationpage/animatepixelone.webp";
import pixleperfectimg2 from "../../Assets/designingpage-images/videoanimationpage/animatepixeltwo.webp";
import pixleperfectimg3 from "../../Assets/designingpage-images/videoanimationpage/animatepixelthree.webp";
import pixleperfectimg4 from "../../Assets/designingpage-images/videoanimationpage/animatepixelfour.webp";
import pixleperfectimg5 from "../../Assets/designingpage-images/videoanimationpage/animatepixelfive.webp";
import pixleperfectimg6 from "../../Assets/designingpage-images/videoanimationpage/animatepixelsix.webp";
import readyAnimate from "../../Assets/designingpage-images/videoanimationpage/best-video-img.webp"
import animationaboutvideo from "../../Assets/designingpage-images/videoanimationpage/video-animation-aboutvideo.mp4"
import clientTrust from "../../Assets/designingpage-images/videoanimationpage/high-quality-animation.webp"
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Designing";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import { wordpressWebsitePricingPlansData } from "../../data";
import VideoAnimationService from "../../components/VideoAnimationService";


const VideoAnimation = () => {

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



  return (
    <Layout>
      <ServiceBanner
        leftCol="col-lg-5"
        bgImage={videoAnimationBanner}
        btnClass="theme-light mt-3"
        title="Bring Your Ideas to Life with Stunning Video Animation"
        description="We design high-converting landing pages tailored to your business goals. From product launches to lead generation campaigns, our designs are built to maximize engagement and drive measurable results."
        btnText="Get A Free Animation Quote"
      />

      <WordPressPerformanceSection
        reverse
        afterConainerClass="video-animation-about"
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Creative Animations Built by Experts"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        descriptiontwo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        videoSrc={animationaboutvideo}
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <VideoAnimationService/>

      {/* <Ourservices
        serviceminihead="Our Services"
        serviceEndName="Video Animation"
        serviceMainHeadcom="Services We Offer"
        allservicelink="View All Services"
        serviceCountOne="01"
        firstServiceName="Explainer Videos"
        firstServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountTwo="02"
        secondServiceName="2D & 3D Animation"
        secondServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountThird="03"
        thirdServiceName="Logo Animation"
        thirdServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      /> */}

        <PixelPerfectSec
        secTitle="Recent Animation Projects"
        secDescription="Explore our latest animated videos and motion graphics that have helped brands tell their stories with impact."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />


        <WordPressPerformanceSection
        wordpresssecclass="best-animation-sec"
        miniheadclass="shorttop-head"
        secTitle1="Get The Best Video Animation Services In California"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
        bestvideohead="2D And 3D Custom Video Animation Services"
        descriptiontwo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing."
        image={readyAnimate}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        learnmorebtn="d-none"
      />

      <WordPressPerformanceSection
        reverse
        miniheadclass="shorttop-head"
        secTitle1="Want Your Story Told Through"
        secTitle2="High-Quality Animation?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        descriptiontwo="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={clientTrust}
        TouchBtn="d-none"
        btntext=""
        learnmorebtn="d-none"
      />


        <ContactForm
        secTitle="Discuss Your Video Animation Project"
        secDescription="Tell us about your idea and get a free consultation. We’ll help you choose the perfect animation style for your brand."
      />

      {/* <SinglePricingPlan
        secTitle="Flexible Video Animation Packages"
        secDescription="Every project is unique. Our pricing is transparent and tailored to your needs. Choose a package or request a custom quote."
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

export default VideoAnimation;
