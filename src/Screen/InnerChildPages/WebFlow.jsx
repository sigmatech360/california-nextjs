'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import innerChildBannerBg from "../../Assets/newChildPagesAssets/webflow/innerChildBannerBg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/service-webDesign-pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/service-webDesign-pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/service-webDesign-pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/service-webDesign-pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/service-webDesign-pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/service-webDesign-pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/newChildPagesAssets/webflow/innerChildAboutImg.webp";

import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Home";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import InnerChildAbout from "../../components/InnerChildAbout";

import creativelogo from "../../Assets/creativelogo.svg";
import digitaltogo from "../../Assets/digitaltogo.svg";
import softwarelogo from "../../Assets/softwarelogo.svg";

import innerChildAbtIcon1 from "../../Assets/newChildPagesAssets/webflow/innerChildAbtIcon1.webp";
import innerChildAbtIcon2 from "../../Assets/newChildPagesAssets/webflow/innerChildAbtIcon2.webp";
import innerChildAbtIcon3 from "../../Assets/newChildPagesAssets/webflow/innerChildAbtIcon3.webp";
import innerChildAbtIcon4 from "../../Assets/newChildPagesAssets/webflow/innerChildAbtIcon4.webp";
import innerChildAbtIcon5 from "../../Assets/newChildPagesAssets/webflow/innerChildAbtIcon5.webp";
import innerChildAbtIcon6 from "../../Assets/newChildPagesAssets/webflow/innerChildAbtIcon6.webp";

import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import workflowImg1 from "../../Assets/workflowImg1.webp";
import workflowImg2 from "../../Assets/workflowImg2.webp";
import workflowImg3 from "../../Assets/workflowImg3.webp";

import smart from "../../Assets//smart.svg";
import InnerChildWhyMatterIcon1 from "../../Assets/newChildPagesAssets/webMaintenance/InnerChildWhyMatterIcon1.webp";
import InnerChildWhyMatterIcon2 from "../../Assets/newChildPagesAssets/webMaintenance/InnerChildWhyMatterIcon2.webp";
import InnerChildWhyMatterIcon3 from "../../Assets/newChildPagesAssets/webMaintenance/InnerChildWhyMatterIcon3.webp";
import {
  eCommerseWebsitePricingPlansData,
  informativeWebsitePricingPlansData,
} from "../../data";
import InnerServicesSec from "../../components/InnerServicesSec";
import WorkflowSec from "../../components/WorkflowSec";


const aboutSectionData = [
  {
    id: 1,
    image: innerChildAbtIcon1,
    name: "Custom Designs",
    description: "100% custom Webflow builds",
  },
  {
    id: 2,
    image: innerChildAbtIcon2,
    name: "SEO Ready",
    description: "Clean, optimized structures for search",
  },
  {
    id: 3,
    image: innerChildAbtIcon3,
    name: "Easy Editing",
    description: "Updates without technical hassle",
  },
  {
    id: 4,
    image: innerChildAbtIcon4,
    name: "Future Growth",
    description: "Scalable for business expansion",
  },
  {
    id: 5,
    image: innerChildAbtIcon5,
    name: "Responsive Layouts",
    description: "Designs that adapt to every device",
  },
  {
    id: 6,
    image: innerChildAbtIcon6,
    name: "Fast Performance",
    description: "Optimized speed and reliability.",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: InnerChildWhyMatterIcon1,
    title: "Growth-Focused",
    description:
      "We believe a website should be more than presence; it should actively drive measurable business growth.",
  },
  {
    id: 2,
    image: InnerChildWhyMatterIcon2,
    title: "Creative & Functional",
    description:
      "Our developers balance striking visual impact with seamless functionality, making sites both powerful and engaging.",
  },
  {
    id: 3,
    image: InnerChildWhyMatterIcon3,
    title: "Trusted Expertise",
    description:
      "With proven expertise, reliable support, and commitment to detail, we’re the top choice for Webflow development.",
  },
];

export const webDesignPortfolioData = [
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

const faqWebflowData = [
  {
    id: 1,
    question: "1. Is Webflow good for professional business websites?",
    answer:
      "Yes, Webflow is excellent for professional websites, offering design flexibility, scalability, and SEO-friendly structures for businesses.",
  },
  {
    id: 2,
    question: "2. Do you provide support after launching a Webflow website?",
    answer:
      "Yes, our Webflow development in California includes post-launch support, ensuring your website runs smoothly and remains easy to manage.",
  },
  {
    id: 3,
    question: "3. Why choose California Web Coders for Webflow development?",
    answer:
      "Because our Webflow development in California combines creative design with smart strategy, delivering websites that drive measurable growth.",
  },
  {
    id: 4,
    question: "4. Can Webflow websites rank on Google?",
    answer:
      "Yes, Webflow websites rank well on Google when properly optimized with SEO-friendly code, clean structures, and quality content.",
  },
  {
    id: 5,
    question: "5. Can you redesign an existing Webflow website?",
    answer:
      "Absolutely. We refresh outdated Webflow sites with modern layouts, improved performance, and features designed to match your goals.",
  },
  {
    id: 6,
    question:
      "6. What industries has California Web Coders built Webflow websites for?",
    answer:
      "We’ve developed Webflow websites for startups, e-commerce stores, small businesses, and established brands across California.",
  },
  {
    id: 7,
    question: "7. Is Webflow better than WordPress for design flexibility?",
    answer:
      "Yes, Webflow offers more design freedom with visual control, while WordPress focuses on themes and plugin customization.",
  },
  {
    id: 8,
    question: "8. Do you build fully custom Webflow websites?",
    answer:
      "Yes, every Webflow project we deliver in California is fully custom, designed to match unique brand identity and goals.",
  },
  {
    id: 9,
    question: "9. Is Webflow good for e-commerce businesses?",
    answer:
      "Yes, Webflow supports e-commerce with customizable checkout, product pages, and integrated tools for scaling online stores.",
  },
  {
    id: 10,
    question: "10. How long does it take to build a Webflow website?",
    answer:
      "Most Webflow websites are built in 3–5 weeks, depending on the project’s complexity and required features.",
  },
];

const servicesSecData = [
  {
    id: 1,
    question: "Custom Web Design & Development",
    answer:
      "Every business is unique—your website should be too. We craft visually appealing, user-focused designs and pair them with clean, high-performance code. From dynamic landing pages to full-scale web applications, we create solutions that work across all devices and browsers.",
  },
  {
    id: 2,
    question: "E-commerce & Online Stores",
    answer:
      "Sell smarter with an e-commerce website built for speed and conversions. We integrate secure payment gateways, intuitive product catalogs and SEO-ready product pages to give customers a seamless shopping experience.",
  },
  {
    id: 3,
    question: "SEO & Performance Optimization",
    answer:
      "A beautiful website is only effective if people can find it. Our SEO-friendly development, fast loading times and on-page optimization help you rank higher on search engines and reach the right audience.",
  },
];

const wrokflowData = [
  {
    id: 1,
    title: "Identifying Gaps",
    description:
      "We analyze your current site for weak design, slow performance, and missing features.",
    image: workflowImg1,
  },
  {
    id: 2,
    title: "Aligning Brand Values",
    description:
      "Your website is restructured to reflect your vision, identity, and customer expectations.",
    inverted: true,
    image: workflowImg2,
  },
  {
    id: 3,
    title: "Redesigning with Improvements",
    description:
      "From visuals to functionality, we deliver a website that enhances experience and drives results.",
    image: workflowImg3,
  },
];

const WebFlow = () => {
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
        bgImage={innerChildBannerBg}
        title="Stand Out Online with Webflow in California"
        btnText="Learn More"
        // description=""
        // bannerList={[
        //   "",
        // ]}
      />

      <InnerChildAbout
        secTitle1="Creativity and Strategy in Every"
        secTitle2="Webflow"
        secTitle3="Build"
        description="At California Web Coders, we use Webflow’s advanced features to create sites that look original, feel intuitive, and work flawlessly. We place every element carefully with your brand and goals in mind."
        // description2=""
        image={ourWorkheroImgWebp}
        aboutData={aboutSectionData}
      />

      <WhyItMatters
        secTitle1="California’s Go-To"
        secTitle2="Webflow"
        secTitle3="Developers"
        secDescription="Across California, brands rely on us as a trusted Webflow development company that blends design freedom with real business strategy."
        cardData={whyMatterData}
      />

      {/* <PixelPerfectSec
        secTitle="Explore Our California"
        secTitleBlue="Webflow"
        secTitle2="Portfolio"
        secDescription="Through our Webflow design and development services in California, we have delivered everything from sleek landing pages to comprehensive business platforms. Explore our portfolio to see how Webflow can bring your brand’s story to life with maximum impact."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      /> */}

      <InnerServicesSec
        title="Complete Digital Solutions Tailored to Your Business"
        description="California Web Coders provides end-to-end digital solutions that help businesses stand out and grow online. From concept to launch, our team blends creativity and technology to deliver custom websites that are fast, secure and search-engine friendly."
        serviceData={servicesSecData}
      />

      <WorkflowSec
        title1="The Process Behind Every"
        title2="Successful Redesign"
        description="With our three-step approach, we transform outdated websites into modern, growth-ready platforms that balance usability, design, and long-term performance."
        data={wrokflowData}
      />

      {/* <SinglePricingPlan
        secTitle="Pricing that Fits Your Goals"
        secDescription="Our Webflow development packages in California are designed to match your project scope. Some clients need a one-page showcase, while others require a dynamic business website. In every case, our pricing is simple, transparent, and built to deliver value."
        pricingPlanData={informativeWebsitePricingPlansData}
      /> */}

      <ContactForm
        secTitle="Your Webflow Website Begins Here"
        secDescription="Fill out the form below, and one of our Webflow experts will get back to you with a free consultation."
        btnText="Let’s Chat"
      />

      <FrequentQuestions
        FrequentQuestions="homeFrequentQuestions"
        secTitle="Webflow Development FAQs"
        faqData={faqWebflowData}
      />

      <Suspense fallback={<Loader />}>
        <BlogSection categorySlug="blogs" />
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

export default WebFlow;
