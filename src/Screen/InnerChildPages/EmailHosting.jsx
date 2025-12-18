'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";

import ServiceBanner from "../../components/ServiceBanner";
import FederalGovernment  from "@/Assets/newChildPagesAssets/devopservices/setup.svg";
import Easycontrol  from "@/Assets/newChildPagesAssets/reactdevelopment/easycontrol.svg";
import Alwayssecure from "@/Assets/newChildPagesAssets/sslcertificate/alwayssecure.svg";
import herobanner from "@/Assets/newChildPagesAssets/domaintransfer/domain-transfer-herobanner.webp";
import serviceimg1 from "@/Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "@/Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "@/Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
import reactChoose from "@/Assets/newChildPagesAssets/emailhosting/chooose-email.webp";
import aboutCompany from "@/Assets/newChildPagesAssets/emailhosting/email-business-img.webp";
import DomainService from "../../components/DomainService";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import EmailProfessionalPlus from "../../components/EmailProfessionalPlus";
import Image from "next/image";



export const faqHomeData = [
  {
    id: 1,
    question: "1. What is email hosting?",
    answer:
      "Email hosting stores and manages your business emails on secure servers with enhanced privacy, uptime, and delivery performance.",
  },
  {
    id: 2,
    question: "2. Why should I choose California Web Coders for email hosting?",
    answer:
      "We combine hosting reliability with strong server management to ensure your business communication is always secure and uninterrupted.",
  },
  {
    id: 3,
    question: "3. Can I use my existing domain for email hosting?",
    answer:
      "Yes, we integrate your current domain into our hosting system for smooth setup and consistent branding.",
  },
  {
    id: 4,
    question: "4. Do you provide spam protection?",
    answer:
      "Yes, every mailbox includes advanced spam filtering and virus protection to keep your inbox clean and safe.",
  },
  {
    id: 5,
    question: "5. How secure is your email hosting?",
    answer:
      "Our servers are protected by SSL encryption, firewalls, and daily security audits for maximum safety.",
  },
  {
    id: 6,
    question: "6. Can I access my email on mobile devices?",
    answer:
      "Yes, our email hosting services support full synchronization across Android, iOS, and desktop clients.",
  },
  {
    id: 7,
    question: "7. Do you offer email migration services?",
    answer:
      "Yes, we can transfer your existing emails, contacts, and folders to our secure hosting without downtime.",
  },
  {
    id: 8,
    question: "8. Is storage expandable?",
    answer:
      "Yes, plans can be upgraded anytime to increase mailbox storage or add new users as your team grows.",
  },
  {
    id: 9,
    question: "9. Do you provide backup and recovery options?",
    answer:
      "Yes, we perform daily backups and offer easy recovery for deleted emails or lost data.",
  },
  {
    id: 10,
    question: "10. Can you integrate my email with marketing tools?",
    answer:
      "Yes, our email hosting supports integration with major email marketing and CRM platforms for seamless workflows.",
  },
];




const EmailHosting = () => {


   const cardsData = [
      {
        icon: <Image src={Alwayssecure.src} alt="Alwayssecure" width={40} height={40} />,
        cardTitle: "Advanced Security Controls",
        cardPara:
          "We protect all hosted mailboxes with multi-layer firewalls, SSL encryption, and anti-spam tools that ensure only safe and verified communication reaches your inbox.",
      },
      {
        icon: <Image src={FederalGovernment.src} alt="FederalGovernment" width={40} height={40} />,
        cardTitle: "Scalable Storage Options",
        cardPara:
          "Our plans adapt to your growth. From startups to enterprises, enjoy scalable cloud storage that expands with your data and collaboration needs.",
      },
      {
        icon: <Image src={Easycontrol.src} alt="Easycontrol" width={40} height={40} />,
        cardTitle: "Cross-Platform Compatibility",
        cardPara:
          "Access your emails easily from desktop, tablet, or mobile, with automatic syncing across all devices and operating systems.",
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
          secClass="herobanner-imghide"
          leftCol="col-lg-6"
          bgImage={herobanner}
          btnClass="theme-light mt-3"
          title="Professional Email Hosting for Every Business"
          description="Host your business emails on secure, high-speed servers designed for privacy, reliability, and long-term scalability."
          btnText="Get Personal Email Hosting"
        />


        <EmailProfessionalPlus/>


         <DomainService
          domainserviceminihead="More of Our Services:"
          domainservicelargehead="Strengthening Your Online Communication "
          serviceImgone={serviceimg1}
          shorthead="Email Marketing"
          bighead="Speak To Your Audience"
          servicepara="Our integrated email marketing solutions let you reach your audience directly from a secure hosting setup. Design campaigns, automate sequences, and measure engagement, all within a protected and optimized environment."
          btntext="Learn more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="Web Hosting"
          bigheadtwo="Secure Web Hosting"
          serviceparatwo="Keep your website and email hosting under one secure roof. Our web hosting infrastructure ensures your emails are delivered quickly and consistently while your site remains fast and accessible."
          btntwotxt="Learn more"
          serviceImgthree={serviceimg3}
          shortheadthree="Server Management"
          bigheadthree="Manageable Web Control"
          serviceparathree="We handle all aspects of server performance, updates, and security so your hosted emails never experience downtime. Expect constant monitoring, proactive fixes, and full technical support."
          btnthreetxt="Learn more"
        />


        <WordPressPerformanceSection
          minihead="About Us:"
          miniheadclass="shorttop-head"
          secTitle1="The Backbone of"
          secTitle2="Reliable Communication"
          description="Our email hosting services provide a centralized, protected environment for managing professional communication. Every account includes encryption, virus scanning, and uptime monitoring, keeping your messages safe, synchronized, and always available."
          descriptiontwo="Why Businesses Choose California Web Coders:"
          landingList="landing-design-points domain-register-list"
          landingListItems={[
            "Dedicated Support Team",
            "24/7 Monitoring",
            "Scalable cloud storage",
          ]}
          TouchBtn="d-none"
          btntext="Register Your Domain Now"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={aboutCompany}
        />


         <section className="email-hosting-choose-sec">
          <WordPressPerformanceSection
            wordpresssecclass="react-choose-sec"
            miniheadclass="shorttop-head"
            minihead="Why Choose Us:"
            secTitle1="Why Choose California Web Coders for"
            secTitle2="Email Hosting"
            description="With our deep expertise in web hosting and server management, we deliver unmatched reliability for business communications. Our systems are optimized for performance, security, and scalability, ensuring your emails are sent, received, and synced without interruptions. Every email plan is managed by professionals who understand the value of secure, uninterrupted digital correspondence."
            image={reactChoose}
            listClass="d-none"
            TouchBtn="d-none"
            btntext="Talk to an Expert"
            aboutbtnlink="/get-intouch"
            learnmorebtn="aboutus-call"
          />
          <CustomCustomerCard cardsData={cardsData} />
        </section>



          <ContactForm
          secTitle="Upgrade Your Email Experience"
          secDescription="Secure, professional, and always connected, that’s how business communication should feel. Fill out the form below, and let’s get your inbox powered by California Web Coders."
          btnText="Host My Emails Now"
        />

        {/* <SinglePricingPlan
          secTitle="Email Hosting Packages for Every Team"
          secDescription="Our plans include encrypted storage, fast delivery, and 24/7 monitoring, offering professional reliability at affordable rates"
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="Frequently Asked Questions for Email Hosting"
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

export default EmailHosting;
