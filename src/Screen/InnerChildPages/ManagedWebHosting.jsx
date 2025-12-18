'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";

import herobanner from "@/Assets/newChildPagesAssets/managewebhosting/manage-web-herobanner.webp";
import questiondomain from "@/Assets/newChildPagesAssets/managewebhosting/question-about-domain.webp";
import hostingabout from "@/Assets/newChildPagesAssets/managewebhosting/hosting-about.webp";
import managehost from "@/Assets/newChildPagesAssets/managewebhosting/managed-hosting.webp";
import choose1 from "@/Assets/newChildPagesAssets/managewebhosting/choose-1.svg";
import choose2 from "@/Assets/newChildPagesAssets/managewebhosting/choose-2.svg";
import choose3 from "@/Assets/newChildPagesAssets/managewebhosting/choose-3.svg";
import choose4 from "@/Assets/newChildPagesAssets/managewebhosting/choose-4.svg";
import choose5 from "@/Assets/newChildPagesAssets/managewebhosting/choose-5.svg";
import choose6 from "@/Assets/newChildPagesAssets/managewebhosting/choose-6.svg";
import serviceimg1 from "@/Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "@/Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "@/Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
import innerChildAbtIcon1 from "@/Assets/newChildPagesAssets/managewebhosting/speedmeter.svg";
import innerChildAbtIcon2 from "@/Assets/newChildPagesAssets/managewebhosting/backup.svg";
import innerChildAbtIcon3 from "@/Assets/newChildPagesAssets/managewebhosting/ssl.svg";
import innerChildAbtIcon4 from "@/Assets/newChildPagesAssets/managewebhosting/optimize.svg";
import innerChildAbtIcon5 from "@/Assets/newChildPagesAssets/managewebhosting/securitymalware.svg";
import innerChildAbtIcon6 from "@/Assets/newChildPagesAssets/managewebhosting/technicalsupport.svg";
import domainchoose1 from "@/Assets/newChildPagesAssets/managewebhosting/choose-1.svg";
import domainchoose2 from "@/Assets/newChildPagesAssets/managewebhosting/choose-2.svg";
import domainchoose3 from "@/Assets/newChildPagesAssets/managewebhosting/choose-3.svg";
import domainchoose4 from "@/Assets/newChildPagesAssets/managewebhosting/choose-4.svg";
import domainchoose5 from "@/Assets/newChildPagesAssets/managewebhosting/choose-5.svg";
import domainchoose6 from "@/Assets/newChildPagesAssets/managewebhosting/choose-6.svg";
import ServiceBanner from "../../components/ServiceBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainService from "../../components/DomainService";
import InnerChildAbout from "../../components/InnerChildAbout";
import DomainChooseCard from "../../components/DomainChooseCard";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import { wordpressWebsitePricingPlansData } from "../../data";
import Loader from "../../components/Loader";
import Lightbox from "yet-another-react-lightbox";
import BlogSection from "../../components/blogPosts";


export const faqHomeData = [
  {
    id: 1,
    question: "1. What is managed web hosting?",
    answer:
      "Managed hosting means we handle server setup, security, updates, and performance optimization while you focus on your website.",
  },
  {
    id: 2,
    question: "2. Why should we choose California Web Coders for our managed hosting needs?",
    answer:
      "We offer high-speed servers, 24/7 monitoring, backups, and personalized support, ensuring your website performs at its best.",
  },
  {
    id: 3,
    question: "3. Is managed hosting secure?",
    answer:
      "Yes, we use firewalls, SSL encryption, and continuous malware scans to keep your data protected.",
  },
  {
    id: 4,
    question: "4. Can I migrate my existing website?",
    answer:
      "Yes, our team handles website migration with zero downtime and complete data preservation.",
  },
  {
    id: 5,
    question: "5. Do you provide backups?",
    answer:
      "Yes, we perform daily automated backups to secure your data and ensure fast recovery if needed.",
  },
  {
    id: 6,
    question: "6. What if my website traffic grows suddenly?",
    answer:
      "Our scalable hosting infrastructure adjusts resources automatically to handle increased traffic.",
  },
  {
    id: 7,
    question: "7. Do you offer domain registration with hosting?",
    answer:
      "Yes, you can register and host your domain under one account for simplicity and full control.",
  },
  {
    id: 8,
    question: "8. How is managed hosting different from shared hosting?",
    answer:
      "Managed hosting includes full maintenance and support, while shared hosting requires you to handle setup and updates.",
  },
  {
    id: 9,
    question: "9. Can you help optimize my site speed?",
    answer:
      "Yes, we provide performance optimization through caching, CDN setup, and code-level enhancements.",
  },
  {
    id: 10,
    question:
      "10. Do you offer 24/7 support?",
    answer:
      "Yes, our expert team is available 24/7 to resolve issues, monitor performance, and provide technical guidance.",
  },
];


const ManagedWebHosting = () => {

  const aboutSectionData = [
    {
      id: 1,
      image: innerChildAbtIcon1,
      name: "Server Provisioning ",
      description: "Quick setup with the latest hosting technologies.",
    },
    {
      id: 2,
      image: innerChildAbtIcon2,
      name: "Updates and Patches",
      description:
        "Regular updates to prevent vulnerabilities and improve performance.",
    },
    {
      id: 3,
      image: innerChildAbtIcon3,
      name: "Security Advancements",
      description:
        "24/7 monitoring, firewalls, and SSL encryption for total protection.",
    },
    {
      id: 4,
      image: innerChildAbtIcon4,
      name: "Performance Optimization",
      description:
        "Load balancing and caching for faster, smoother experiences.",
    },
    {
      id: 5,
      image: innerChildAbtIcon5,
      name: "Backups",
      description: "Automated daily backups with instant recovery options.",
    },
    {
      id: 6,
      image: innerChildAbtIcon6,
      name: "Web Support",
      description:
        "Expert help for troubleshooting, maintenance, and scalability planning.",
    },
  ];

  const cardsData = [
    {
      icon: domainchoose1,
      head: "Time-Saving Efficiency",
      para: "We promptly handle all technical aspects, including server configuration, updates, and security patches, so your team can focus entirely on business growth. Our proactive management eliminates downtime risks, saving you valuable time and effort every day.",
    },
    {
      icon: domainchoose2,
      head: "Improved Security",
      para: "Our hosting environments are protected by advanced firewalls, real-time malware scanning, and SSL encryption. We actively monitor and patch vulnerabilities to prevent breaches, ensuring that your website and customer data remain safe under 24/7 protection.",
    },
    {
      icon: domainchoose3,
      head: "Risk Reduction",
      para: "With continuous monitoring, automated backups, and instant restore options, your website stays protected from unexpected issues. Our infrastructure reduces the risk of data loss, downtime, and performance instability, keeping your business consistently online and resilient.",
    },
    {
      icon: domainchoose4,
      head: "Peace of Mind",
      para: "You never have to worry about your website’s performance or safety. Our managed hosting specialists handle every detail, from daily maintenance to crisis recovery, ensuring your site runs smoothly, securely, and reliably around the clock.",
    },
    {
      icon: domainchoose5,
      head: "Reliable Performance",
      para: "Our servers are optimized for maximum speed, bandwidth management, and uptime. Through caching, load balancing, and performance audits, we ensure every website runs efficiently, delivering fast, seamless experiences to users across all devices. ",
    },
    {
      icon: domainchoose6,
      head: "Offloading Server Maintenance",
      para: "We manage all system updates, patches, and configurations to maintain stability and security. By offloading server maintenance to our team, you eliminate technical burdens and guarantee uninterrupted website performance backed by expert oversight.",
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
          title="Powerful Web Hosting for a Smooth Web Experience"
          description="Experience smooth, secure, and fully managed web hosting that keeps your website online, fast, and performing at its best."
          btnText="Claim Your Domain"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="shorttop-head"
          secTitle1="Fully"
          secTitle2="Managed Hosting"
          secTitle3="Built for Reliability"
          description="At California Web Coders, we provide fully managed hosting that goes beyond uptime, covering everything from setup and optimization to backups and security. We handle the technical side, so you can focus on growth while we keep your site fast and protected."
          descriptiontwo="Our Core Advantages:"
          landingList="landing-design-points domain-register-list manage-web-list"
          landingListItems={[
            "24/7 Monitoring",
            "Automatic Backups",
            "Advanced Security",
            "Scalable Resources",
            "Performance Optimization",
            "Personalized Support",
          ]}
          TouchBtn="d-none"
          btntext="Get Managed Hosting Today"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={hostingabout}
        />

        <DomainService
          domainserviceminihead="More of Our Services:"
          domainservicelargehead="Connected Web Solutions for a Complete Experience"
          serviceImgone={serviceimg1}
          shorthead="Website Migration"
          bighead="Backed Up Web Migration"
          servicepara="We safely migrate your existing website and databases to our servers with zero downtime, ensuring a smooth transition and instant performance boost."
          btntext="Learn more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="Domain Registration"
          bigheadtwo="Simple Web Ownership"
          serviceparatwo="Secure your domain easily with complete ownership and renewal protection. Our registration process is fast, simple, and supported by our hosting team."
          btntwotxt="Learn more"
          serviceImgthree={serviceimg3}
          shortheadthree="Email Hosting"
          bigheadthree="Dependable Email Servers"
          serviceparathree="Our email hosting services ensure reliable, secure, and professional communication for your business. Enjoy custom email domains, spam protection, and fast delivery, all powered by dependable server performance."
          btnthreetxt="Learn more"
        />

        <WordPressPerformanceSection
          wordpresssecclass="hosting-management-sec"
          reverse
          minihead="Hosting"
          miniheadclass="shorttop-head"
          secTitle1="Our"
          secTitle2="Hosting Management"
          secTitle3="Services Include"
          description="At California Web Coders, we provide fully managed hosting that goes beyond uptime, covering everything from setup and optimization to backups and security. We handle the technical side, so you can focus on growth while we keep your site fast and protected."
          TouchBtn="d-none"
          image={managehost}
        />

        <InnerChildAbout
          webpointsec="webhost-points-sec"
          managewebimg="d-none"
          aboutData={aboutSectionData}
        />

        <WordPressPerformanceSection
          wordpresssecclass="domain-question-sec"
          minihead="Secure Your Authority"
          miniheadclass="shorttop-head"
          secTitle1="Dependable Hosting Backed by Real Results"
          description="Our hosting infrastructure is built for performance and reliability, with redundant systems, real-time monitoring, and 24/7 technical support. We ensure your website remains live, secure, and delivers a seamless user experience, regardless of traffic volume or time of day."
          TouchBtn="d-none"
          btntext="Talk to Us"
          learnmorebtn="aboutus-call"
          aboutbtnlink="/get-intouch"
          phoneNumber="+1 (619) 335-2364"
          image={questiondomain}
        />

        <section className="domain-transfer-choose">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="domaintransfer-choose-head">
                  <h6>Why Choose Us</h6>
                  <h4>
                    Because Your Website Deserves <span>Expert Hosting</span>
                  </h4>
                  <p>
                    At California Web Coders, we take hosting seriously because
                    it is the foundation of your web presence. We begin by
                    combining modern infrastructure, proactive management, and
                    real-time support to ensure your website performs optimally.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <DomainChooseCard cards={cardsData} />
              </div>
            </div>
          </div>
        </section>


           
      <ContactForm
        secTitle="Ready for Reliable Hosting?"
        secDescription="Host your website with confidence, fast, secure, and fully managed by experts. Fill out the form below to get started."
        btnText="Host With Confidence"
      />

      {/* <SinglePricingPlan
        secTitle="Flexible"
        secTitleBlue="Hosting Packages"
        secTitleEnd="for Every Business"
        secDescription="Choose from our transparent managed hosting plans. No matter the size of your website, we’ve got the perfect plan to keep you online and optimized."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      /> */}

      <FrequentQuestions
        secTitle="Frequently Asked Questions for Managed Web Hosting"
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

export default ManagedWebHosting;
