'use client';

import React, { lazy, Suspense } from "react";
import "./index.css";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

import pixleperfectimg1 from "../../Assets/service-webDesign-pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/service-webDesign-pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/service-webDesign-pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/service-webDesign-pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/service-webDesign-pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/service-webDesign-pixle-perfect-img6.webp";

import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";

import wordpressbg from "../../Assets/services-smm-banner-bg.webp";
import performence from "../../Assets/service-smm-about-img.webp";
import wordpresssectionimg from "../../Assets/services-smm-about2-img.webp";
import creativethoughsec from "../../Assets/services-smm-creativeThrough-img.webp";
import { smmPricingPlansData } from "../../data";

import Loader from "../../components/Loader";
// import BlogSection from "../../components/blogPosts";
const BlogSection = lazy(() => import("../../components/blogPosts"));

const featuredProjectData = [
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

const SocialMediaMarketing = () => {
  return (
    <>
      <Layout>
        <ServiceBanner
          bgImage={wordpressbg}
          title="Social Media Marketing To Boost Your Brand"
          description="At California Web Coders, we help you shine and stand out on social media. As a leading social media marketing agency, we craft content that makes people stop scrolling, we create ad strategies that build your brand uniquely, and engage your audience in ways that spark conversions and build lasting relationships."
          bannerList={[
            "Platform-specific content and campaigns.",
            "Strategic content blended with immense creativity.",
            "Daily engagement and content creation.",
            "Trusted by California businesses. ",
          ]}
        />

        <WordPressPerformanceSection
          secTitle1="Content That"
          secTitle2="Engages, Grows,"
          secTitle3="And Converts"
          description="Being a known and loved social media marketing company in California, we partner with you to develop social media strategies that enhance your digital presence and grow trust among your customers. From trendy Instagram reels to compelling Facebook ads, we blend storytelling with strategy to turn your audience into loyal customers."
          // description2=""
          image={performence}
          btnText="Boost Your Business"
        />

        <Growyourbusiness
          title1="Elevate Your Social Media"
          title2="Game!"
          btnText="The First Step To Growth"
        />

        {/* <PixelPerfectSec
        secTitle="Real Brands. Real Engagement."
        secTitleBlue=""
        secDescription="We’ve helped brands grow faster, look better, and connect deeper with standout social media campaigns. From polished visuals to high-performing ads, we make every post count."
        projectsData={featuredProjectData}
        btnText="Browse Case Studies"
      /> */}

        <PricingPlans
          secTitle="Social Strategy That Fits Your Budget"
          secDescription="From startups looking to build awareness to brands ready for paid growth, we’ve got a package for every stage."
          image={wordpresssectionimg}
          whyWordressTitle="Why Choose California Web Coders?"
          whyWordressDescription1="Because your brand deserves more than generic posts and inconsistent messaging, we’re a social media marketing agency that takes time to understand your audience, create content that aligns with your goals and audience, and turn insights into impact."
          whyWordressDescription2="Whether it’s organic growth or paid campaigns, we offer comprehensive, consistent, and customised services that amplify your brand voice and help you achieve your goals."
          whyWordressDescription3="We're not here to fill your calendar, we’re here to build your community."
          btnText="Start Now"
          btnLink="/get-intouch"
          pricingPlan={smmPricingPlansData}
        />

        <Creativitythrough
          title1="Social Media Marketing Beyond"
          title2="Hashtags"
          description1="Our approach to social media marketing services is all about authenticity and results. From organic content to ad management, we keep things consistent, creative, and completely aligned with your brand’s voice."
          description2="Our campaigns are made to connect directly with the audience you desire for your brand; we make personalized posts, reels, engagement campaigns, and even paid ad campaigns, all to bring you the results your brand craves!"
          image={creativethoughsec}
          btnText="Get Your Strategy Now!"
          btnLink="/get-intouch"
        />

        <ContactForm
          secTitle="Craft Your Social Media Marketing Campaign With Us!"
          secDescription="Sign up to chat with our social media experts now, get a free consultation, and take your step toward business growth, entirely at your choice!"
          btnText="Let’s Chat"
        />

        <Suspense fallback={<Loader />}>
          <BlogSection categorySlug="social-media-marketing" />
        </Suspense>
      </Layout>
    </>
  );
};

export default SocialMediaMarketing;
