'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
// import innerChildBannerBg from "../../Assets/services-cmsDev-banner-bg.webp";
import innerChildBannerBg from "../../Assets/newChildPagesAssets/wixImages/innerChildBannerBgWithImg.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";

import SinglePricingPlan from "../../components/SinglePricingPlan";

import pixleperfectimg1 from "../../Assets/newChildPagesAssets/wixImages/pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/wixImages/pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/wixImages/pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/wixImages/pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/wixImages/pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/wixImages/pixle-perfect-img6.webp";

import ourWorkheroImgWebp from "../../Assets/newChildPagesAssets/wixImages/innerChildAboutImg.webp";

import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import InnerChildAbout from "../../components/InnerChildAbout";

import innerChildAbtIcon1 from "../../Assets/newChildPagesAssets/wixImages/innerChildAbtIcon1.webp";
import innerChildAbtIcon2 from "../../Assets/newChildPagesAssets/wixImages/innerChildAbtIcon2.webp";
import innerChildAbtIcon3 from "../../Assets/newChildPagesAssets/wixImages/innerChildAbtIcon3.webp";
import innerChildAbtIcon4 from "../../Assets/newChildPagesAssets/wixImages/innerChildAbtIcon4.webp";
import innerChildAbtIcon5 from "../../Assets/newChildPagesAssets/wixImages/innerChildAbtIcon5.webp";
import innerChildAbtIcon6 from "../../Assets/newChildPagesAssets/wixImages/innerChildAbtIcon6.webp";

import Lightbox from "yet-another-react-lightbox";
import WhyItMatters from "../../components/WhyItMatters";

import InnerChildWhyMatterIcon1 from "../../Assets/newChildPagesAssets/wixImages/InnerChildWhyMatterIcon1.webp";
import InnerChildWhyMatterIcon2 from "../../Assets/newChildPagesAssets/wixImages/InnerChildWhyMatterIcon2.webp";
import InnerChildWhyMatterIcon3 from "../../Assets/newChildPagesAssets/wixImages/InnerChildWhyMatterIcon3.webp";

import { eCommerseWebsitePricingPlansData, wixWebsitePricingPlansData } from "../../data";


const aboutSectionData = [
  {
    id: 1,
    image: innerChildAbtIcon1,
    name: "Custom Designed",
    description: "100% custom-designed Wix websites",
  },
  {
    id: 2,
    image: innerChildAbtIcon2,
    name: "Performative UX",
    description: "Built for speed and responsiveness",
  },
  {
    id: 3,
    image: innerChildAbtIcon3,
    name: "Expertise-Backed",
    description: "Quick turnaround with expert support",
  },
  {
    id: 4,
    image: innerChildAbtIcon4,
    name: "Boosted For Growth",
    description: "Scalable for any business type",
  },
  {
    id: 5,
    image: innerChildAbtIcon5,
    name: "SEO Integration",
    description: "Integrated with highly researched SEO",
  },
  {
    id: 6,
    image: innerChildAbtIcon6,
    name: "Frequent Maintenance",
    description: "Easy website maintenance and upgrades",
  },
];

const whyMatterData = [
  {
    id: 1,
    image: InnerChildWhyMatterIcon1,
    title: "Drive Results",
    description:
      "Websites crafted to do more than just look good, our websites are made to deliver measurable business growth.",
  },
  {
    id: 2,
    image: InnerChildWhyMatterIcon2,
    title: "Fresh & Modern",
    description:
      "Creative layouts blended with seamless functionality, ensuring every site feels user-friendly.",
  },
  {
    id: 3,
    image: InnerChildWhyMatterIcon3,
    title: "Trusted by Many",
    description:
      "From startups to growing brands, our California-based developers are consistently in demand for quality work.",
  },
];

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

const faqWixDevData = [
  {
    id: 1,
    question: "1. Do you provide support after launching my Wix website?",
    answer:
      "Yes, we provide reliable post-launch support and guidance to ensure your Wix website runs smoothly and efficiently.",
  },
  {
    id: 2,
    question: "2. Is Wix good for professional websites?",
    answer:
      "Yes, Wix is great for professional websites, offering responsive design, flexibility, and built-in tools for business growth.",
  },
  {
    id: 3,
    question: "3. Can Wix handle large business websites?",
    answer:
      "Yes, Wix supports scalability with apps, features, and integrations suitable for businesses of any size or complexity.",
  },
  {
    id: 4,
    question:
      "4. What industries has California Web Coders built Wix websites for?",
    answer:
      "We’ve built Wix websites for startups, e-commerce brands, small businesses, and creative professionals across California.",
  },
  {
    id: 5,
    question: "5. Can Wix websites rank on Google?",
    answer:
      "Yes, Wix websites can rank on Google when optimized properly with SEO best practices and quality content.",
  },
  {
    id: 6,
    question:
      "6. Can you redesign outdated Wix websites for California businesses?",
    answer:
      "Absolutely. We modernize old Wix sites with updated designs, smooth navigation, and improved performance.",
  },
  {
    id: 7,
    question: "7. Why choose California Web Coders for Wix development?",
    answer:
      "Because we combine creativity with functionality, delivering Wix websites that look stunning and drive measurable results.",
  },
  {
    id: 8,
    question: "8. Is Wix good for e-commerce?",
    answer:
      "Yes, Wix supports e-commerce with secure checkout, product management, and integrated tools for online sales.",
  },
  {
    id: 9,
    question: "9. Do you build custom Wix designs without templates?",
    answer:
      "Yes, every Wix website we design is custom-built to match your brand style and unique requirements.",
  },
  {
    id: 10,
    question: "10. Is Wix better than WordPress for beginners?",
    answer:
      "For beginners, Wix is easier with drag-and-drop editing, while WordPress offers more flexibility and advanced customization.",
  },
];

const WixDevelopment = () => {
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
          secClass="bannerOverlay"
          bgImage={innerChildBannerBg}
          title="The Best Wix Website Development in California!"
          btnText="Learn More"
          leftCol="col-lg-7"
          // description=""
          // bannerList={[
          //   "",
          // ]}
        />

        <InnerChildAbout
          secTitle1="Flexibility,"
          secTitle2="Design Freedom,"
          secTitle3="and Unlimited Ideas!"
          description="With our Wix website development services in California, you’re not boxed into templates. We take full creative control to build visually stunning and functionally strong websites that match your brand vibe, engage your audience, and grow your business."
          // description2=""
          image={ourWorkheroImgWebp}
          aboutData={aboutSectionData}
        />

        <WhyItMatters
          secTitle1="The Most In-Demand"
          secTitle2="Wix Website Developers"
          secTitle3="in California Now!"
          secDescription="We’ve built our reputation as California’s trusted Wix developers by creating websites that look great, function smoothly, and deliver measurable results."
          cardData={whyMatterData}
        />

        <PixelPerfectSec
          secTitle="View Our Best"
          secTitleBlue="Wix Website Developments"
          secTitle2="in California"
          secDescription="Our creations include clean corporate designs, funky websites built for engagement, bold creative layouts, and everything else our clients expect from us. Explore what we’ve already created and imagine the possibilities we can bring to your project."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ContactForm
          secTitle="Fill the Form to Get Started Today."
          secDescription="Our Wix Website Developers in California will reach out to you as soon as possible."
          btnText="Let’s Chat"
        />

        <SinglePricingPlan
          secTitle="Package Prices to Your Liking"
          secDescription="We offer custom packages designed to match your scope, needs, and budget. Every package is tailored to give you clarity and value, ensuring you get exactly what you need."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wixWebsitePricingPlansData}
        />

        <FrequentQuestions
          FrequentQuestions="homeFrequentQuestions"
          secTitle="Answering Our Most Asked Queries"
          faqData={faqWixDevData}
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
    </>
  );
};

export default WixDevelopment;
