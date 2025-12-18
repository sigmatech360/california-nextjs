'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";

import ServiceBanner from "../../components/ServiceBanner";
import herobanner from "@/Assets/newChildPagesAssets/sslcertificate/herobanner.webp";
import serviceimg1 from "@/Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "@/Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "@/Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
import about1 from "@/Assets/newChildPagesAssets/sslcertificate/about-1.webp";
import about2 from "@/Assets/newChildPagesAssets/sslcertificate/about-2.webp";
import setup from "@/Assets/newChildPagesAssets/sslcertificate/nosetup.svg";
import alwayssecure from "@/Assets/newChildPagesAssets/sslcertificate/alwayssecure.svg";
import quickacces from "@/Assets/newChildPagesAssets/sslcertificate/quickaccess.svg";
import Quickacces from "@/Assets/newChildPagesAssets/sslcertificate/quickaccess.svg";
import Alwayssecure from "@/Assets/newChildPagesAssets/sslcertificate/alwayssecure.svg";
import Attack from "@/Assets/newChildPagesAssets/sslcertificate/preventattack.svg";


import DomainService from "../../components/DomainService";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainChooseCard from "../../components/DomainChooseCard";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import { wordpressWebsitePricingPlansData } from "../../data";
import SSLBrowser from "../../components/SSLBrowser";
import Image from "next/image";



export const faqHomeData = [
  {
    id: 1,
    question: "1. What is an SSL certificate?",
    answer:
      "An SSL certificate encrypts communication between your website and users, securing sensitive data like passwords and payment information.",
  },
  {
    id: 2,
    question: "2. Why do I need SSL for my website?",
    answer:
      "SSL protects your data, improves search rankings, and builds visitor trust through HTTPS and browser validation symbols.",
  },
  {
    id: 3,
    question: "3. Do all websites need SSL certificates?",
    answer:
      "Yes, even non-eCommerce sites benefit from SSL since it secures login forms, user data, and SEO credibility.",
  },
  {
    id: 4,
    question: "4. Can you install SSL certificates for my website?",
    answer:
      "Yes, our team handles SSL purchase, setup, and installation across all hosting platforms.",
  },
  {
    id: 5,
    question: "5. How long does it take to issue SSL certificates?",
    answer:
      "Most SSL certificates are issued within minutes once domain ownership is verified.",
  },
  {
    id: 6,
    question: "6. Do SSL certificates help with SEO?",
    answer:
      "Yes, Google prioritizes HTTPS websites in rankings, giving SSL-secured sites a visibility advantage.",
  },
  {
    id: 7,
    question: "7. What happens if my SSL expires?",
    answer:
      "Your website may show “Not Secure” warnings. We manage renewals to ensure this never happens.",
  },
  {
    id: 8,
    question: "8. Do you offer wildcard SSL certificates?",
    answer:
      "Yes, wildcard SSLs secure your main domain and all associated subdomains under one certificate.",
  },
  {
    id: 9,
    question: "9. Is there any downtime during SSL installation?",
    answer:
      "No, uninstallation is seamless, with no disruption to your website or user sessions.",
  },
  {
    id: 10,
    question:
      "10. Why choose California Web Coders for SSL services?",
    answer:
      "We combine encryption, hosting, and server management expertise to deliver security that’s efficient, compliant, and future-ready.",
  },
];


const SSLCertificates = () => {

    const cardsData = [
    {
      icon: <Image src={Alwayssecure.src} alt="Alwayssecure" width={40} height={40} />,
      cardTitle: "One-Step Validation",
      cardPara:
        "Simplified verification ensures smooth issuance and renewal with no complex technical setup required.",
    },
    {
      icon: <Image src={Attack.src} alt="Attack" width={40} height={40} />,
      cardTitle: "ACME Integrations",
      cardPara:
        "Automate SSL provisioning and renewals through ACME protocols for continuous protection.",
    },
    {
      icon: <Image src={Quickacces.src} alt="Quickacces" width={40} height={40} />,
      cardTitle: "SSL Monitoring",
      cardPara:
        "Real-time monitoring prevents expiry risks and instantly alerts you about potential security vulnerabilities.",
    },
  ];


    const vpscardsData = [
    {
      icon: setup,
      head: "Quick Access",
      para: "Immediate activation and fast certificate issuance to get your website secured quickly.",
    },
    {
      icon: alwayssecure,
      head: "Always Secure",
      para: "256-bit encryption guarantees full protection across every transaction and connection.",
    },
    {
      icon: quickacces,
      head: "Full Validation",
      para: "Extended validation options confirm domain ownership and business legitimacy for user trust.",
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
          title="SSL Certificates for Secure Online Connections"
          description="Get trusted SSL certificates for your website to ensure data encryption, visitor confidence, and full browser compatibility."
          btnText="Get Your SSL Certificate"
        />

        <SSLBrowser />

        <DomainService
          domainserviceminihead="More of Our Services:"
          domainservicelargehead="Building a Safer Digital Infrastructure"
          serviceImgone={serviceimg1}
          shorthead="Server Management"
          bighead="Controlled Web Management"
          servicepara="Our server management services include SSL deployment, renewals, and configuration support. We ensure encryption protocols are active across all endpoints to protect user data and maintain compliance with global web security standards."
          btntext="Learn more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="Web Hosting"
          bigheadtwo="Powerful Hosting "
          serviceparatwo="Our managed web hosting solutions include pre-installed SSL certificates for instant security and encrypted data flow. Enjoy fast, secure hosting that strengthens both website performance and customer trust."
          serviceImgthree={serviceimg3}
          shortheadthree="Backend Development"
          bigheadthree="Robust Web Backend"
          serviceparathree="We integrate SSL encryption directly into backend frameworks for APIs, databases, and applications. That ensures full protection for sensitive information and secure connections between your systems and users."
        />


         <WordPressPerformanceSection
          minihead="SSL"
          miniheadclass="shorttop-head"
          secTitle1="The"
          secTitle2="Shield That Protects"
          secTitle3="Your Website"
          description="An SSL (Secure Sockets Layer) certificate encrypts all communication between your website and its visitors. It prevents data interception, securing information such as login details, payments, and personal data against cyber threats."
          descriptiontwo="Once installed, SSL activates HTTPS, builds credibility with a visible padlock symbol, and signals browsers that your site is authentic and safe. It’s the foundation of trust and security in today’s web experience."
          TouchBtn="d-none"
          learnmorebtn="d-none"
          image={about1}
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="shorttop-head"
          secTitle1="Reliable Encryption Backed by"
          secTitle2="Trusted Authorities"
          description="Our SSL certificate services provide verified encryption that protects websites, users, and data integrity. We manage installation, configuration, and renewals, ensuring full browser trust, PCI compliance, and uninterrupted website access for your visitors."
          TouchBtn="d-none"
          btntext="Learn More About California Web Coders"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={about2}
        />


         <section className="vps-dedication-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="web-hosting-head">
                  <h6>Key Features</h6>
                  <h2>SSL Is Non-Negotiable for Your Business.</h2>
                  <p>Our SSL services ensure full security, seamless performance, and verified authenticity for your website, protecting your brand and your users.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <DomainChooseCard
                  cards={vpscardsData}
                  webCardCol="col-lg-4 col-md-6"
                  webHostingBox="ssl-secure-box"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="domain-transfer-choose">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="domaintransfer-choose-head">
                  <h6>Protection Maximized</h6>
                  <h4>Keeping Your Business <span>Secure 24/7</span></h4>
                  <p>Our SSL solutions go beyond encryption; they safeguard brand reputation, maintain uptime, and ensure long-term reliability for all online activity.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <CustomCustomerCard cardsData={cardsData} />
              </div>
            </div>
          </div>
        </section>



  <ContactForm
          secTitle="Secure Your Website Today"
          secDescription="Protect your brand, boost user trust, and maintain compliance. Fill out the form below to get your SSL certificate activated by our experts."
          btnText="Get SSL Protection Now"
        />

        {/* <SinglePricingPlan
          secTitle="Affordable"
          secTitleBlue="SSL Packages"
          secTitleEnd="for Every Business"
          secDescription="Choose from standard, wildcard, or EV SSL certificates, all with automatic renewals, installation assistance, and dedicated support."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="Frequently Asked Questions for SSL Certificates"
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

export default SSLCertificates;
