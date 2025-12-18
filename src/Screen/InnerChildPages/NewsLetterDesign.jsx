'use client';

import React, { Suspense, useState } from "react";
import newsletterbanner from "../../Assets/designingpage-images/newsletterdesign/newsletterdesignbanner.webp";
import newsletterAbout from "../../Assets/designingpage-images/newsletterdesign/newsletterdesignabout.webp";
import pixleperfectimg1 from "../../Assets/designingpage-images/newsletterdesign/newsletterdesignone.webp";
import pixleperfectimg2 from "../../Assets/designingpage-images/newsletterdesign/newsletterdesigntwo.webp";
import pixleperfectimg3 from "../../Assets/designingpage-images/newsletterdesign/newsletterdesignthree.webp";
import pixleperfectimg4 from "../../Assets/designingpage-images/newsletterdesign/newsletterdesignfour.webp";
import pixleperfectimg5 from "../../Assets/designingpage-images/newsletterdesign/newsletterdesignfive.webp";
import pixleperfectimg6 from "../../Assets/designingpage-images/newsletterdesign/newsletterdesignsix.webp";
import newsletterready from "../../Assets/designingpage-images/newsletterdesign/engageaudience.webp";
import newslettertrustclient from "../../Assets/designingpage-images/newsletterdesign/clienttrustnewsletter.webp";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Ourservices from "../../components/ourservices/Index";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import { faqHomeData } from "../Designing";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";

const NewsLetterDesign = () => {
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
        bgImage={newsletterbanner}
        btnClass="theme-light mt-3"
        title="Beautiful, Engaging Newsletter Designs That Drive Clicks"
        description="California Web Coders crafts email newsletters that grab attention, reflect your brand, and inspire readers to take action."
        btnText="See Our Work"
      />

      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Your Partner for Impactful"
        secTitle2="Email Marketing"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        image={newsletterAbout}
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
        firstServiceName="E-Commerce Newsletters"
        firstServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountTwo="02"
        secondServiceName="Custom Email Templates"
        secondServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountThird="03"
        thirdServiceName="Campaign Templates"
        thirdServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <PixelPerfectSec
        secTitle="Recent Packaging Projects"
        secDescription="Browse our latest packaging designs across industries—showcasing creativity, functionality and brand impact."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <WordPressPerformanceSection
        reverse
        miniheadclass="shorttop-head"
        secTitle1="Ready to"
        secTitle2="Engage Your Audience?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={newsletterready}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Get Started Today"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <WordPressPerformanceSection
        miniheadclass="shorttop-head"
        secTitle1="Why Clients Trust Our"
        secTitle2="Newsletter Designs"
        description="A landing page isn’t just another web page—it’s your first impression, your sales pitch, and your conversion funnel all in one."
        designpointheadline="At California Web Coders, we focus on:"
        landingList="landing-design-points"
        landingListItems={[
          "Strategic + Creative",
          "Optimized For All Platforms",
          "Fast Turnaround",
          "Full-Service Support",
        ]}
        image={newslettertrustclient}
        TouchBtn="d-none"
        btntext="Let’s Design Your Next Campaign"
        learnmorebtn="aboutus-call"
      />

      <ContactForm
        secTitle="Discuss Your Newsletter Design Project"
        secDescription="Tell us about your upcoming campaign or regular email needs. We’ll provide a free consultation and design plan."
      />

      <SinglePricingPlan
        secTitle="Flexible Newsletter Design Packages"
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
  );
};

export default NewsLetterDesign;
