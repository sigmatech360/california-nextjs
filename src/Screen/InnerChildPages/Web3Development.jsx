'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import web3AboutImage from "@/Assets/newChildPagesAssets/web3development/buildweb-about.webp";
import BlockchainIcon  from "@/Assets/newChildPagesAssets/web3development/blockchain-svg.svg";
import WwwIcon  from "@/Assets/newChildPagesAssets/web3development/www-svg.svg";
import SmartContractIcon  from "@/Assets/newChildPagesAssets/web3development/smart-contract-svg.svg";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/web3development/pixel-1.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/web3development/pixel-2.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/web3development/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/web3development/pixel-4.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/web3development/pixel-5.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/web3development/pixel-6.webp";
import serviceCardOne from "@/Assets/newChildPagesAssets/web3development/service-img-1.webp";
import serviceCardTwo from "@/Assets/newChildPagesAssets/web3development/service-img-2.webp";
import serviceCardThree from "@/Assets/newChildPagesAssets/web3development/service-img-3.webp";
import webchooseabslt from "@/Assets/newChildPagesAssets/web3development/web-whychoose-abslt.webp";
import OurCustomService from "../../components/OurCustomService";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import BlogSection from "../../components/blogPosts";
import Loader from "../../components/Loader";
import Lightbox from "yet-another-react-lightbox";
import FrequentQuestions from "../../components/FrequentQuestions";
import Web3herobanner from "../../components/Web3herobanner";

import Image from "next/image";

export const faqHomeData = [
  {
    id: 1,
    question: "1. What exactly is Web 3.0?",
    answer:
      "Web 3.0 is the next internet era, decentralized, AI-driven, and built on blockchain technology, providing robust data security and faster communication.",
  },
  {
    id: 2,
    question:
      "2. What services do you offer for Web 3.0 development in California?",
    answer:
      "At California Web Coders, we provide dApp development, smart contracts, blockchain integration, and Web 3.0 consulting.",
  },
  {
    id: 3,
    question: "3. How is Web 3.0 different from Web 2.0?",
    answer:
      "Web 3.0 gives users the ultimate control over data, as it is decentralized, transparent, and not owned by a single entity.",
  },
  {
    id: 4,
    question: "4. Can you help me create a decentralized app (dApp)?",
    answer:
      "Yes, our team of blockchain developers builds secure, scalable dApps customized to your vision and business model.",
  },
  {
    id: 5,
    question: "5. What technologies power Web 3.0?",
    answer:
      "Blockchain, AI, machine learning, and IoT are key technologies behind the Web 3.0 ecosystem.",
  },
  {
    id: 6,
    question: "6. Are Web 3.0 solutions secure?",
    answer:
      "Yes, decentralization and encryption make any digital product far less vulnerable to traditional cyberattacks and impossible to corrupt data, as the data is not saved on a single source.",
  },
  {
    id: 7,
    question: "7. Do you build NFT or DeFi platforms?",
    answer:
      "Yes, we design and develop NFT marketplaces and DeFi applications with blockchain integration.",
  },
  {
    id: 8,
    question: "8. Can Web 3.0 help businesses improve efficiency?",
    answer:
      "Definitely, it automates processes, increases transparency, and improves trust between users and organizations.",
  },
  {
    id: 9,
    question: "9. How long does it take to build a Web 3.0 project?",
    answer:
      "Timelines vary, but we follow agile methods to ensure rapid and reliable development.",
  },
  {
    id: 10,
    question: "What makes your Web 3.0 developers different?",
    answer:
      "We blend blockchain expertise with design thinking, creating experiences that are both smart and scalable.",
  },
];

const Web3Development = () => {
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

  const serviceCards = [
    {
      id: 1,
      icon: <Image src={BlockchainIcon.src} alt="BlockchainIcon" width={40} height={40} />,
      serviceCardHead: "Blockchain ",
      serviceCardPara:
        "Gone are the days when data was saved on servers that were far from secure. With our web 3.0 design and development company in California, data is decentralized, meaning every transaction, record, and interaction is transparent, traceable, and tamper-proof, giving businesses and users confidence in a world filled with cyber attacks.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <Image src={WwwIcon.src} alt="WwwIcon" width={40} height={40} />,
      serviceCardHead: "DeFi Solutions",
      serviceCardPara:
        "Let’s reinvent finance through Web3.0 technology services in California that enable open, borderless financial ecosystems. Our DeFi platforms eliminate intermediaries, enhance transparency, and empower users to lend, trade, and invest securely, all through blockchain-powered smart automation.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <Image src={SmartContractIcon.src} alt="SmartContractIcon" width={40} height={40} />,
      serviceCardHead: "Smart Contracts Development",
      serviceCardPara:
        "Utilize the best of Web 3.0 solutions in California to develop smart contracts that are highly secure, upgradable, and dependable.",
      serviceCardImg: serviceCardThree,
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
    <>


      <Layout>
        <Web3herobanner />

        <WordPressPerformanceSection
          wordpresssecclass="future-web-sec"
          minihead="About Company"
          secTitle1="Transforming the Future with Web"
          description="The internet is growing, and it’s only going to grow more. Our Web 3.0 development services make sure that it grows smarter, giving users control, security, and ownership while connecting businesses and people in ways the old web never could."
          landingList="landing-design-points python-development-points"
          landingListItems={["Scalable & Secure", "Improved Web Connectivity"]}
          TouchBtn="d-none"
          serviceImg="d-none"
          btntext="Explore Services"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Company"
          miniheadclass="shorttop-head"
          secTitle1="Achieve Your Goals with the Right"
          secTitle2="Tech-Stack"
          description="Every company has goals, and at California Web Coders, we help businesses achieve them with the right combination of tools, technology, and talent. As a leading Web3.0 company in California, we build ecosystems that empower innovation, security, and performance at every layer. "
          descriptiontwo="Our expert Web3.0 developers in California design tech stacks tailored to your project’s needs, ensuring seamless integration, future scalability, and long-term efficiency. Whether you’re building decentralized apps, smart contracts, or blockchain-driven platforms, we’ll help you harness the true potential of Web 3.0 to achieve results that are as smart as they are sustainable."
          image={web3AboutImage}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Let’s Get Started"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <OurCustomService
          miniHead="Our Services"
          secMainTitle="Full-Spectrum"
          secTitleBlue="Web 3.0"
          secLastTitle="Services"
          customServicePara="Recognized as one of the leading Web 3.0 development companies, California Web Coders balances creative vision with advanced technical expertise to build feature-rich, business-driven custom web applications that maximize your ROI. Our team delivers Web 3.0 solutions powered by AI and blockchain, ensuring every platform we create is secure, intelligent, and designed for long-term digital growth."
          customServiceBtn="Start Your Project"
          serviceCards={serviceCards}
        />

          <PixelPerfectSec
            minihead="Portfolio"
            secTitle="Glimpse at What"
            secTitleBlue="Web 3.0"
            secTitle2="Can Do"
            secDescription="Explore projects that define the next era of decentralized digital innovation."
            projectsData={webDesignPortfolioData}
            onImageClick={handleImageClick}
          />

        <WordPressPerformanceSection
          wordpresssecclass="web3-whychooseus"
          leftCol="col-lg-6"
          minihead="Why Choose Us"
          secTitle1="Lead the"
          secTitle2="Web 3.0"
          secTitle3="Revolution with California Web Coders"
          description="At California Web Coders, we help users implement all the best Web 3.0 services in California, increasing user experience in a way that has never been done before by utilizing:"
          listClass="aboutCompanylist"
          image={webchooseabslt}
          TouchBtn="d-none"
          btntext="Let’s Get Started"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        {/* <SinglePricingPlan
          secTitle="Web 3.0"
          secTitleEnd="is Smart. So is Our Pricing"
          secDescription="Click the link and invest in smart, secure Web 3.0 technology built for growth."
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
    </>
  );
};

export default Web3Development;
