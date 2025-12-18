'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import productDesignbanner from "../../Assets/designingpage-images/productdesign/productdesignbanner.webp";
import productDesignAbout from "../../Assets/designingpage-images/productdesign/productdesignabout.webp";
import pixleperfectimg1 from "../../Assets/designingpage-images/productdesign/productdesignone.webp";
import pixleperfectimg2 from "../../Assets/designingpage-images/productdesign/productdesigntwo.webp";
import pixleperfectimg3 from "../../Assets/designingpage-images/productdesign/productdesignthree.webp";
import pixleperfectimg4 from "../../Assets/designingpage-images/productdesign/productdesignfour.webp";
import pixleperfectimg5 from "../../Assets/designingpage-images/productdesign/productdesignfive.webp";
import pixleperfectimg6 from "../../Assets/designingpage-images/productdesign/productdesignsix.webp";
import ProductReady from "../../Assets/designingpage-images/productdesign/readyproductpackage.webp";
import productTrustClient from "../../Assets/designingpage-images/productdesign/productclienttrust.webp";
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

const ProductPackagingDesign = () => {
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
        leftCol="col-lg-6"
        bgImage={productDesignbanner}
        btnClass="theme-light mt-3"
        title="Eye-Catching Product Packaging That Sells"
        description="“California Web Coders creates innovative packaging designs that attract attention, communicate your brand story, and drive purchases."
        btnText="Request A Free Packaging Quote"
      />

      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Blending Creativity and Brand Strategy"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        image={productDesignAbout}
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <Ourservices
        serviceminihead="Our Services"
        serviceEndName="Packaging Design "
        serviceMainHeadcom="Services We Offer"
        allservicelink="View All Services"
        serviceCountOne="01"
        firstServiceName="Custom Box Design"
        firstServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountTwo="02"
        secondServiceName="3D Mockups"
        secondServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountThird="03"
        thirdServiceName="Label & Sticker Design"
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
        secTitle1="Ready to Transform Your"
        secTitle2="Product Packaging?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={ProductReady}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <WordPressPerformanceSection
        miniheadclass="shorttop-head"
        secTitle1="Why Brands Choose"
        secTitle2="California Web Coders"
        description="A landing page isn’t just another web page—it’s your first impression, your sales pitch, and your conversion funnel all in one."
        designpointheadline="At California Web Coders, we focus on:"
        landingList="landing-design-points"
        landingListItems={[
          "Experienced Designers",
          "Brand-Focused Solutions",
          "Print-Ready Deliverables",
          "Sustainable Options",
        ]}
        image={productTrustClient}
        TouchBtn="d-none"
        btntext="Let’s Create Something Amazing"
        learnmorebtn="aboutus-call"
      />

      <ContactForm
        secTitle="Discuss Your Packaging Project"
        secDescription="Tell us about your product and vision. We’ll provide a free consultation and custom design plan."
      />

      <SinglePricingPlan
        secTitle="Flexible Packaging Design Packages"
        secDescription="Our pricing depends on size, complexity, and printing requirements. Choose a package or request a custom estimate."
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

export default ProductPackagingDesign;
