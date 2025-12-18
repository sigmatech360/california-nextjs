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

import wordpressbg from "../../Assets/services-cmsDev-banner-bg.webp";
import serviceBannerImg from "../../Assets/services-digitalMarketing-banner-img.webp";
import performence from "../../Assets/service-digitalMarketing-about-img.webp";
import wordpresssectionimg from "../../Assets/services-digitalMarketing-about2-img.webp";
import creativethoughsec from "../../Assets/services-digitalMarketing-creativeThrough-img.webp";
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

const DigitalMarketing = () => {
  return (
    <>
      <Layout>
        <ServiceBanner
          bgImage={wordpressbg}
          title="Digital Marketing For Brand Perfection"
          description="California Web Coders is more than just a digital marketing company in California; we strive to be your partners in growth. Our custom digital marketing strategies help you connect with your ideal audience, build trust, and boost conversions across every platform that matters."
          bannerList={[
            "Award-winning digital marketing agency in California.",
            "Experts in ensuring user experience.",
            "Online marketing that gets real results.",
            "Trusted by California businesses.",
          ]}
          image={serviceBannerImg}
        />

        <WordPressPerformanceSection
          secTitle1="Strategic,"
          secTitle2="Creative,"
          secTitle3="Conversion-Focused"
          description="We take the time to understand your goals, then build a digital marketing strategy that aligns with your business, budget, and audience. From targeted SEO and paid ads to email campaigns and social media, we help you get found, followed, and chosen."
          // description2=""
          image={performence}
          btnText="Boost Your Business"
        />

        <Growyourbusiness
          title1="Let’s Get Your Brand"
          title2="Growing!"
          btnText="Book A Free Discovery Call"
        />

        {/* <PixelPerfectSec
        secTitle="From Clicks to Conversions - See What We’ve Done"
        secTitleBlue=""
        secDescription="Check out how we’ve helped brands grow through intentional marketing. From startups to established businesses, every campaign showcases how smoothly brand growth strategies, combined with creativity, are implemented at California Web Coders."
        projectsData={featuredProjectData}
        btnText="Browse Case Studies"
      /> */}

        {/* <PricingPlans
        secTitle="Flexible Packages, Big Results"
        secDescription="No hidden fees. No generic packages. Just transparent pricing tailored to your business stage and marketing goals."
        image={wordpresssectionimg}
        whyWordressTitle="Digital Marketing At California Web Coders"
        whyWordressDescription1="Your expectations, our results. Our team crafts custom campaigns that are thoughtful, well-researched, and focused on results. As a top-rated digital marketing company in California, we treat your business like it’s our own."
        whyWordressDescription2="Whether you're focused on traffic, engagement, or leads, our digital marketing strategy always puts performance first. You’ll never be left in the dark, we keep things transparent, collaborative, and full of fresh ideas."
        whyWordressDescription3="Let’s turn browsers into buyers and clicks into customers together!"
        btnText="Start Now"
        pricingPlan={smmPricingPlansData}
      /> */}

        <Creativitythrough
          title1="Made-To-Perform"
          title2="Marketing"
          description1="We believe in crafting personalized campaigns tailored to each business's specific goals and audience. Our online marketing team at California Web Coders builds strategies that reflect your brand’s voice, market trends, and customers’ needs."
          description2="From in-depth research to real-time optimization, we polish every campaign to ensure your marketing spend works harder and smarter. No guesswork, just growth."
          image={creativethoughsec}
          btnText="Get Your Strategy Now!"
          btnLink="/get-intouch"
        />

        <ContactForm
          secTitle="Let’s Discuss Your Strategy!"
          secDescription="Book a free consultation with our digital marketing experts and discover how easy it can be to grow your business in the digital world."
          btnText="Let’s Chat"
        />

        <Suspense fallback={<Loader />}>
          <BlogSection categorySlug="digital-marketing" />
        </Suspense>
      </Layout>
    </>
  );
};

export default DigitalMarketing;
