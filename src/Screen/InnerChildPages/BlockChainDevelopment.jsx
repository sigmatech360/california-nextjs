"use client";

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import blockchainbanner from "@/Assets/newChildPagesAssets/blockchaindevelopment/blockchain-hero-banner.webp";
import blockchainAbout1 from "@/Assets/newChildPagesAssets/blockchaindevelopment/blockchain-about-1.webp";
import blockchainAbout2 from "@/Assets/newChildPagesAssets/blockchaindevelopment/blockchain-about-2.webp";
import serviceCardOne from "@/Assets/newChildPagesAssets/blockchaindevelopment/blockchain-service-1.webp";
import serviceCardTwo from "@/Assets/newChildPagesAssets/blockchaindevelopment/blockchain-integrate-innerimg.webp";
import serviceCardThree from "@/Assets/newChildPagesAssets/blockchaindevelopment/public-blockchain-innerimg.webp";
import pixleperfectimg1 from "@/Assets/newChildPagesAssets/blockchaindevelopment/pixel-1.webp";
import pixleperfectimg2 from "@/Assets/newChildPagesAssets/blockchaindevelopment/pixel-2.webp";
import pixleperfectimg3 from "@/Assets/newChildPagesAssets/blockchaindevelopment/pixel-3.webp";
import pixleperfectimg4 from "@/Assets/newChildPagesAssets/blockchaindevelopment/pixel-4.webp";
import pixleperfectimg5 from "@/Assets/newChildPagesAssets/blockchaindevelopment/pixel-5.webp";
import pixleperfectimg6 from "@/Assets/newChildPagesAssets/blockchaindevelopment/pixel-6.webp";
import blockchainbuildimg from "@/Assets/newChildPagesAssets/blockchaindevelopment/build-blockchain.webp";
import  BlockchainIcon  from "@/Assets/newChildPagesAssets/blockchaindevelopment/nft.svg";
import  BlockIntegrate  from "@/Assets/newChildPagesAssets/blockchaindevelopment/blockchain-integration.svg";
import  PublicBlockchain  from "@/Assets/newChildPagesAssets/blockchaindevelopment/public-blockchain.svg";
import CustomAboutCompany from "../../components/CustomAboutCompany";
import OurCustomService from "../../components/OurCustomService";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import { wordpressWebsitePricingPlansData } from "../../data";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import BlockchainChoose from "../../components/BlockchainChoose";


export const faqHomeData = [
  {
    id: 1,
    question: "1. What is blockchain technology in simple terms?",
    answer:
      "It’s a decentralized system that records data securely and transparently across multiple nodes.",
  },
  {
    id: 2,
    question: "2. Why should my business adopt blockchain?",
    answer:
      "Blockchain improves security, transparency, and efficiency by removing intermediaries and central points of failure.",
  },
  {
    id: 3,
    question: "3. Do you offer blockchain development services in California?",
    answer:
      "Yes, we’re a trusted blockchain development company based in California, serving clients worldwide.",
  },
  {
    id: 4,
    question: "4. What industries can benefit from blockchain?",
    answer:
      "Finance, healthcare, logistics, supply chain, real estate, and government can all use blockchain effectively.",
  },
  {
    id: 5,
    question: "5. How secure are your blockchain solutions?",
    answer:
      "Nothing is more secure than blockchain technology, as each transaction is encrypted and verified across a distributed network.",
  },
  {
    id: 6,
    question: "6. Can you integrate blockchain with existing systems?",
    answer:
      "Absolutely. We offer seamless blockchain integration to modernize your existing digital infrastructure.",
  },
  {
    id: 7,
    question: "7. Do you develop private or public blockchain networks?",
    answer:
      "Depending on your use case, we build customized public or private networks. ",
  },
  {
    id: 8,
    question: "8. How much does blockchain development cost?",
    answer:
      "Pricing depends on complexity and scope, but we always provide transparent, scalable pricing models.",
  },
  {
    id: 9,
    question: "9. What ongoing support do you offer?",
    answer:
      "We provide continuous maintenance, updates, and scaling assistance for all blockchain solutions post-deployment.",
  },
  {
    id: 10,
    question: "10. What is blockchain development, and how does it work?",
    answer:
      "Blockchain development involves creating secure, decentralized systems that record and verify data across a network, ensuring transparency, trust, and tamper-proof transactions.",
  },
];

const BlockChainDevelopment = () => {
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
      // icon: <BlockchainIcon />,
      icon: <img src={BlockchainIcon.src} />,
      serviceCardHead: "NFT Development",
      serviceCardPara:
        "As a leading blockchain development company in California, we help brands and creators mint, secure, and establish digital ownership of their NFTs with complete transparency and trust.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      // icon: <BlockIntegrate />,
      icon: <img src={BlockIntegrate.src} />,
      serviceCardHead: "Blockchain Integration",
      serviceCardPara:
        "Data protection is the need of the hour. We offer blockchain software development in California to integrate blockchain technology into your existing systems, ensuring smooth data flow, enhanced transparency, and secure transactions.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      // icon: <PublicBlockchain />,
      icon: <img src={PublicBlockchain.src} />,
      serviceCardHead: "Public Blockchain Development",
      serviceCardPara:
        "Our blockchain development services in California help businesses build public blockchain systems that connect users directly, remove unnecessary layers, and ensure your data stays secure and verifiable at every step.",
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
        <ServiceBanner
          leftCol="col-lg-6"
          bgImage={blockchainbanner}
          btnClass="theme-light mt-3"
          title="Create a Safe Digital Future with Blockchain Development"
          description="Build decentralized solutions, powered by blockchain development in California for better security, transparency, and business automation."
          btnText="Protect Your Data"
        />

        <CustomAboutCompany
          miniHead="About Company"
          mainHeadStart="Drive Digital Innovation with"
          mainHeadBlue="Blockchain"
          mainHeadLast="Solutions"
          frontendAboutImg={blockchainAbout1}
          frontendAboutImgtwo={blockchainAbout2}
          aboutPara="As an experienced blockchain development agency in California, we help businesses increase efficiency, agility, and security through custom blockchain development services. By understanding the need of the hour, where data protection has become a top priority, we create solutions that help businesses transfer and save their data in a decentralized way, making it way more secure and accessible only to authorized users."
          listItems={["Professional IT Solutions ", "Experience Team Members"]}
          listClass="aboutCompanylist"
          btntext="Talk to Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <OurCustomService
          miniHead="Our Services"
          secMainTitle="Custom"
          secTitleBlue="Blockchain Development"
          secLastTitle="Solutions"
          customServicePara="We offer future-proof custom blockchain development services in California, including private, public, and hybrid blockchain solutions, smart contracts, dApps, tokenization, and more. Our team of blockchain experts designs and builds decentralized networks and applications using platforms like Ethereum, Hyperledger, and Corda, ensuring scalability, transparency, and secure digital innovation."
          customServiceBtn="Start Your Project"
          serviceCards={serviceCards}
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Latest"
          secTitleBlue="Blockchain"
          secTitle2="Projects"
          secDescription="See our recent projects that have empowered businesses by helping them secure this data and business transactions."
          btnText="Explore Services"
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <BlockchainChoose />

        <WordPressPerformanceSection
          reverse
          minihead="About Company"
          miniheadclass="shorttop-head"
          secTitle1="Make Data Protection Built-In with"
          secTitle2="Blockchain"
          description="We make blockchain the first and most secure line of defense for your business. Our blockchain solutions in California turn every transaction, record, and interaction into a self-verifying system of truth. No centralized weak points. No silent breaches. Just a network where data protects itself, transparent, traceable, and tamper-proof."
          image={blockchainbuildimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
        />

        <ContactForm
          secTitle="Want to Go Fast and Secure? Talk to Us!"
          secDescription="Share your idea, and we’ll turn it into a blockchain-powered product that no one can break into!"
          btnText="Let’s Chat"
        />

        {/* <SinglePricingPlan
          secTitle="Blockchain Development Pricing"
          secTitleEnd="for Businesses"
          secDescription="No more budget issues, get your hands on the most Affordable Website Design Services online."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="Answers to all Your Questions"
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

export default BlockChainDevelopment;
