'use client';

import React, { Suspense, useState } from 'react'
import Layout from '../../components/layout'
import creativeAdsBanner from "../../Assets/designingpage-images/creativeads/creativeadsbanner.webp";
import creativeAdsAbout from "../../Assets/designingpage-images/creativeads/creativeadsabout.webp";
import pixleperfectimg1 from "../../Assets/designingpage-images/creativeads/creativeadsone.webp";
import pixleperfectimg2 from "../../Assets/designingpage-images/creativeads/creativeadstwo.webp";
import pixleperfectimg3 from "../../Assets/designingpage-images/creativeads/creativeadsthree.webp";
import pixleperfectimg4 from "../../Assets/designingpage-images/creativeads/creativeadsfour.webp";
import pixleperfectimg5 from "../../Assets/designingpage-images/creativeads/creativeadsfive.webp";
import pixleperfectimg6 from "../../Assets/designingpage-images/creativeads/creativeadssix.webp";
import launchadimg from "../../Assets/designingpage-images/creativeads/creactivelaunchads.webp";
import adsclienttrust from "../../Assets/designingpage-images/creativeads/creativebrandtrust.webp";
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection'
import ServiceBanner from '../../components/ServiceBanner'
import Ourservices from '../../components/ourservices/Index';
import PixelPerfectSec from '../../components/PixelPerfectSec';
import ContactForm from '../../components/readytocheat';
import SinglePricingPlan from '../../components/SinglePricingPlan';
import { wordpressWebsitePricingPlansData } from '../../data';
import FrequentQuestions from '../../components/FrequentQuestions';
import { faqHomeData } from '../Designing';
import Loader from '../../components/Loader';
import BlogSection from '../../components/blogPosts';
import Lightbox from 'yet-another-react-lightbox';

const CreativeAds = () => {

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
        leftCol="col-lg-8"
        bgImage={creativeAdsBanner}
        btnClass="theme-light mt-3"
        title="Creative Ads That Capture Attention & Convert"
        description="California Web Coders designs high-impact ads that stop the scroll, spark engagement and drive measurable results across every platform."
        btnText="Get A Free Ad Design Quote"
      />

      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Turning Ideas Into "
        secTitle2="Scroll-Stopping Ads"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        image={creativeAdsAbout}
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />


      
      <Ourservices
        serviceminihead="Our Services"
        serviceEndName="Newsletter Design"
        serviceMainHeadcom="Services We Offer"
        allservicelink="View All Services"
        serviceCountOne="01"
        firstServiceName="Social Media Ad Design"
        firstServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountTwo="02"
        secondServiceName="Print & Outdoor Ads"
        secondServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountThird="03"
        thirdServiceName="Animated & Video Ads"
        thirdServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <PixelPerfectSec
        secTitle="Recent Creative Ad Projects"
        secDescription="Explore our portfolio of high-performing ad designs that have helped brands grow their audience and revenue."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />


      <WordPressPerformanceSection
        reverse
        wordpresssecclass="letstogether-sec"
        miniheadclass="shorttop-head"
        secTitle1="Ready to Launch Ads That Get Results?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={launchadimg}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Get Started Today"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

        <WordPressPerformanceSection
        miniheadclass="shorttop-head"
        secTitle1="Why Brands Trust Our"
        secTitle2="Creative Ad Designs"
        description="A landing page isn’t just another web page—it’s your first impression, your sales pitch, and your conversion funnel all in one."
        designpointheadline="At California Web Coders, we focus on:"
        landingList="landing-design-points"
        landingListItems={[
          "Platform Expertise",
          "Conversion-Focused Design",
          "Fast Turnaround",
          "End-To-End Support",
        ]}
        image={adsclienttrust}
        TouchBtn="d-none"
        btntext="Let’s Design Your Next Campaign"
        learnmorebtn="aboutus-call"
      />


       <ContactForm
        secTitle="Discuss Your Creative Ad Project"
        secDescription="Tell us about your upcoming campaign or regular email needs. We’ll provide a free consultation and design plan."
      />

      <SinglePricingPlan
        secTitle="Flexible Creative Ad Packages"
        secDescription="Our pricing is based on the complexity of your email templates and the number of campaigns."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
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
  )
}

export default CreativeAds