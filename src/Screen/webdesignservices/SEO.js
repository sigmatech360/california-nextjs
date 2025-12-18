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
import serviceBannerImg from "../../Assets/services-seo-banner-img.webp";
import performence from "../../Assets/service-seo-about-img.webp";
import wordpresssectionimg from "../../Assets/services-seo-about2-img.webp";
import creativethoughsec from "../../Assets/services-seo-creativeThrough-img.webp";
import { logoDesignPricingPlansData, seoPricingPlansData } from "../../data";

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

const SEO = () => {
  return (
    <>
      <Layout>
        <ServiceBanner
          bgImage={wordpressbg}
          title="Grow, Convert & Rank With Search Engine Optimization"
          description="What’s the point of decorating your website with beautiful designs and copy if it won’t rank on the search engines? With California Web Coders, your website not only works well, but also ranks high on the search engines and LLMS!"
          description2="Our team of Search Engine Optimization (SEO) integrates the best ranking strategies to your website, from keyword integration and content optimization, to technical SEO and backend optimization, we let no detail slip!"
          bannerList={[
            "Google-approved techniques, no shortcuts. ",
            "Implementation of the best strategies for lasting results.",
            "Regular audits, timely reporting, and real progress.",
          ]}
          image={serviceBannerImg}
        />

        <WordPressPerformanceSection
          secTitle1="SEO That Makes Your "
          secTitle2="Business Stand Out"
          // secTitle3=""
          description="With millions of search results for every query, if you are not ranking on the first page, you’re practically invisible. And that is where we come in. As a trusted SEO company in California, we provide targeted search engine optimization marketing that helps your business climb search engine rankings and maintain its position."
          description2="From optimizing your on-page content to building high-quality backlinks and analyzing technical SEO, we focus on every factor that impacts your visibility."
          image={performence}
          btnText="Boost Your Business"
        />

        <Growyourbusiness
          title1="Want To Rank High Among"
          title2="Millions?"
          // btnText="Sign Up With Our SEO Masters"
        />

        {/* <PixelPerfectSec
        secTitle="Get Found Fast By The"
        secTitleBlue="Digital Audience!"
        secDescription="Explore case studies of our clients who went from page 5 to page 1. From local businesses to e-commerce stores, our SEO services have helped brands improve their rankings, attract more qualified leads, and grow their online presence."
        projectsData={featuredProjectData}
        btnText="Witness Our Wins"
      /> */}

        <PricingPlans
          secTitle="Flexible Pricing for Fixed Ranking At The Top"
          secDescription="Whether you’re a startup trying to get noticed or an established brand looking to grow, we’ve got flexible plans that match your needs."
          image={wordpresssectionimg}
          whyWordressTitle="Choose SEO For The Win"
          question
          whyWordressDescription1="The one growth strategy that will never die? SEO! Regardless of the trends, ranking first on Google’s search results page will always benefit you in hundreds of ways! Our search engine optimization agency California ensures you are visible in your specific area, or even in a broader area!"
          whyWordressDescription2="We combine data, creativity, and experience to get your brand where it needs to be. Our team understands the ever-changing search algorithms and uses white-hat, effective practices to ensure your rankings improve steadily and safely."
          // whyWordressDescription3=""
          btnText="Start Now"
          btnLink="/get-intouch"
          pricingPlan={seoPricingPlansData}
        />

        <Creativitythrough
          title1="SEO Can Revamp Your Life on The"
          title2="Web"
          description1="Our team of SEO pros keeps things simple, strategic, and measurable. With us, you’re not just paying for traffic, you’re investing in long-term growth. From site structure to keyword targeting and content optimization, we make your site work smarter, not harder."
          description2="Let’s make your brand more visible, credible, and click-worthy. Your audience is searching. Let’s make sure they find you."
          image={creativethoughsec}
          btnText="Rank Your Website Now!"
          btnLink="/get-intouch"
        />

        <ContactForm
          secTitle="Ready To Discuss Your Search Engine Optimization Goals? Let’s Chat!"
          secDescription="Book a free consultation with our professionals in California Web Coders now to see how we can help your business maximize its growth."
          btnText="Let’s Chat"
        />

        <Suspense fallback={<Loader />}>
          <BlogSection categorySlug="seo" />
        </Suspense>
      </Layout>
    </>
  );
};

export default SEO;
