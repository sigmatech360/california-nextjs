'use client';


import React, { lazy, Suspense, useState } from "react";
import "./index.css";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

import pixleperfectimg1 from "../../Assets/service-cmsDev-pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/service-cmsDev-pixle-perfect-img2.webp";
// import pixleperfectimg3 from "../../Assets/service-cmsDev-pixle-perfect-img3.webp";
// import pixleperfectimg4 from "../../Assets/service-cmsDev-pixle-perfect-img4.webp";
// import pixleperfectimg5 from "../../Assets/service-cmsDev-pixle-perfect-img5.webp";
// import pixleperfectimg6 from "../../Assets/service-cmsDev-pixle-perfect-img6.webp";

import pixleperfectimg3 from "../../Assets/CMSPortfolio/service-cmsDev-pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/CMSPortfolio/service-cmsDev-pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/CMSPortfolio/service-cmsDev-pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/CMSPortfolio/service-cmsDev-pixle-perfect-img6.webp";

// Croped Images
import pixleperfectimg3croped from "../../Assets/CMSPortfolio/service-cmsDev-pixle-perfect-img3-crop.webp";
import pixleperfectimg4croped from "../../Assets/CMSPortfolio/service-cmsDev-pixle-perfect-img4-crop.webp";
import pixleperfectimg5croped from "../../Assets/CMSPortfolio/service-cmsDev-pixle-perfect-img5-crop.webp";
import pixleperfectimg6croped from "../../Assets/CMSPortfolio/service-cmsDev-pixle-perfect-img6-crop.webp";

import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";

import wordpressbg from "../../Assets/services-cmsDev-banner-bg.webp";
import serviceBannerImg from "../../Assets/services-cmsDev-banner-img.webp";
import performence from "../../Assets/service-cmsDev-about-img.webp";
import wordpresssectionimg from "../../Assets/services-cmsDev-about2-img.webp";
import creativethoughsec from "../../Assets/services-cmsDev-creativeThrough-img.webp";
import { eCommerseWebsitePricingPlansData } from "../../data";

// import Lightbox from "react-image-lightbox";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Loader from "../../components/Loader";
// import BlogSection from "../../components/blogPosts";
const BlogSection = lazy(() => import("../../components/blogPosts"));

export const cmsDevelopmentPortfolioData = [
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
    image: pixleperfectimg3croped,
    fullimage: pixleperfectimg3,
  },
  {
    id: 4,
    image: pixleperfectimg4croped,
    fullimage: pixleperfectimg4,
  },
  {
    id: 5,
    image: pixleperfectimg5croped,
    fullimage: pixleperfectimg5,
  },
  {
    id: 6,
    image: pixleperfectimg6croped,
    fullimage: pixleperfectimg6,
  },
];

const CMSDevelopment = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [images, setImages] = useState([]);

  // const handleImageClick = (index, imageArray) => {
  //   const imageList = imageArray.map((item) => ({
  //     src: item.image,
  //   }));
  //   setImages(imageList);
  //   setIsOpen(true);
  // };

  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index, imageArray) => {
    // const imageList = imageArray.map((item) => ({
    //   src: item.image,
    // }));
    const imageList = imageArray.map((item) => ({
      src: item.fullimage || item.image, // 👈 fallback to `image` if no `fullImage`
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
          title="CMS Development That Puts You In Control"
          description="California Web Coders offers intuitive and innovative CMS solutions that make website management easy. From content edits to full-scale updates, our platforms are designed to keep you in control. We specialize in user-friendly systems built for performance and growth."
          bannerList={[
            "Expert in custom CMS solutions.",
            "Seamless Shopify and WordPress development setup.",
            "Simple content control, no tech skills needed.",
            "Ongoing support and upgrades included.",
          ]}
          image={serviceBannerImg}
        />

        <WordPressPerformanceSection
          secTitle1="Custom"
          secTitle2="CMS Development"
          secTitle3="With Real Flexibility"
          description="We specialize in CMS platforms that let you run your site without running to your developer for every update. Our custom website development California services are perfect for businesses that want beautiful websites backed by powerful, user-friendly content management systems."
          // description2=""
          image={performence}
          btnText="Get Your CMS"
        />

        <Growyourbusiness
          title1="Want To Simplify Your Website"
          title2="Management?"
          btnText="Book A Free Consultation"
        />

        <PixelPerfectSec
          secTitle="Smart, Custom Websites Made to Perform"
          // secTitleBlue="Perfection."
          secDescription="Explore our CMS-powered websites, ranging from sleek blogs to full-scale e-commerce website development projects. Whether it's custom Shopify stores or advanced WordPress platforms, every project reflects our design quality, smart structure, and easy-to-manage content flow."
          projectsData={cmsDevelopmentPortfolioData}
          // btnText="View Our Portfolio"
          imgClass="landingWebImg-div"
          onImageClick={handleImageClick}
        />

        <PricingPlans
          secTitle="Smart Pricing for Smarter Control"
          secDescription="We offer flexible CMS packages tailored to match your business stage, whether you're a startup, a growing store, or an enterprise platform, we got a plan suitable just for you"
          image={wordpresssectionimg}
          whyWordressTitle="Why Choose California Web Coders"
          whyWordressDescription1="You want a site that works hard behind the scenes, and we get that. Our CMS development services are built on real-world experience, creative problem-solving, and a passion for clean, intuitive design. Whether you need Shopify development, WordPress development, or a fully custom website development solution in California, we tailor every project to your goals."
          whyWordressDescription2="We focus on systems you’ll love using, websites that grow with you, and solutions that look as good as they perform. At California Web Coders, we keep it simple, smart, and designed with you in mind."
          // whyWordressDescription3=""
          pricingPlan={eCommerseWebsitePricingPlansData}
        />

        <ContactForm
          secTitle="Ready to Take Control of Your Website?"
          secDescription="Book a free consultation with our CMS pros and discover how easy managing your site can be."
          btnText="Let’s Chat"
        />

        <Creativitythrough
          title1="Website Management"
          title2="Made Simpler"
          description1="Managing your website shouldn’t feel like a full-time job. At California Web Coders, we’re a website development agency that believes in giving you control, without the chaos. Whether you're running a blog, online store, or business platform, our systems are built to be intuitive, flexible, and stress-free."
          description2="Our expert website developers in California create smart CMS solutions that allow you to update content, launch new pages, and manage media with just a few clicks. No coding. No confusion. Just powerful tools tailored to your needs."
          image={creativethoughsec}
          btnText="Start Your Journey With Us"
          btnLink="/get-intouch"
        />

        <Suspense fallback={<Loader />}>
          <BlogSection categorySlug="cms-development" />
        </Suspense>

        {/* {isOpen && images.length > 0 && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
          />
        )} */}

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

export default CMSDevelopment;
