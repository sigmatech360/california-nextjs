'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";

import ServiceBanner from "../../components/ServiceBanner";
import Speedmeter from "@/Assets/newChildPagesAssets/reactdevelopment/speedmeter.svg";
import Topmedal from "@/Assets/newChildPagesAssets/reactdevelopment/toppermedal.svg";
import Easycontrol from "@/Assets/newChildPagesAssets/reactdevelopment/easycontrol.svg";
import herobanner from "@/Assets/newChildPagesAssets/domaintransfer/domain-transfer-herobanner.webp";
import aboutCompany from "@/Assets/newChildPagesAssets/domaintransfer/trusted-domain-transfer.webp";
import serviceimg1 from "@/Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "@/Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "@/Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
import domaincard1 from "@/Assets/newChildPagesAssets/domaintransfer/com.webp";
import domaincard2 from "@/Assets/newChildPagesAssets/domaintransfer/org.webp";
import domaincard3 from "@/Assets/newChildPagesAssets/domaintransfer/net.webp";
import domaincard4 from "@/Assets/newChildPagesAssets/domaintransfer/earth-red-pointers.webp";
import secureimg from "@/Assets/newChildPagesAssets/domaintransfer/buy-domain.webp";
import readytransfer from "@/Assets/newChildPagesAssets/domaintransfer/ready-transfer-domain.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainCards from "../../components/DomainCards";
import DomainService from "../../components/DomainService";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";

export const faqHomeData = [
  {
    id: 1,
    question: "1. What is a domain transfer?",
    answer:
      "A domain transfer moves your registered domain from one registrar to another without affecting your website’s data or uptime.",
  },
  {
    id: 2,
    question: "2. Why should I transfer my domain to California Web Coders?",
    answer:
      "We offer secure transfers, quick verification, and 24/7 technical support to ensure a smooth and stress-free experience.",
  },
  {
    id: 3,
    question: "3. Will my website go down during the transfer?",
    answer:
      " No, our experts ensure zero downtime and maintain full accessibility throughout the transfer process.",
  },
  {
    id: 4,
    question: "4. How long does a domain transfer take?",
    answer:
      "Most domain transfers are completed within 5-7 business days after verification and approval.",
  },
  {
    id: 5,
    question: "5. Can I transfer multiple domains at once?",
    answer:
      "Yes, we support bulk domain transfers for businesses managing multiple websites or online properties.",
  },
  {
    id: 6,
    question: "6. Do you help with DNS and email setup after transfer?",
    answer:
      "Yes, we assist with DNS configuration, email routing, and all technical details post-transfer.",
  },
  {
    id: 7,
    question: "7. Is transferring my domain safe?",
    answer:
      "Yes, our domain transfer services include ownership verification, lock protection, and full data security.",
  },
  {
    id: 8,
    question: "8. Do I need to unlock my domain before the transfer?",
    answer:
      "Yes, domains must be unlocked by the current registrar before initiating the transfer.",
  },
  {
    id: 9,
    question: "9. Can you transfer my website content along with the domain?",
    answer:
      "Yes, through our website migration service, we move your entire site, including content, databases, and settings.",
  },
  {
    id: 10,
    question: "10. What if my transfer request gets delayed?",
    answer:
      "Our support team monitors the entire process and resolves any issues with your current registrar quickly.",
  },
];

const DomainTransfer = () => {
  const cardsData = [
    {
      icon: <Image src={Speedmeter.src} alt="speedmeter" width={40} height={40} />,
      cardTitle: "Trusted Expertise",
      cardPara:
        "We’ve handled hundreds of domain transfers with precision, ensuring stability and smooth transitions every time, so you can maintain your credibility and brand value.",
    },
    {
      icon: <Image src={Topmedal.src} alt="Topmedal" width={40} height={40} />,
      cardTitle: "Advanced Tools",
      cardPara:
        "Our team uses advanced automation techniques and registrar-level integrations to enhance the speed and accuracy of our processes, ensuring zero discrepancies.",
    },
    {
      icon: <Image src={Easycontrol.src} alt="Easycontrol" width={40} height={40} />,
      cardTitle: "End-to-End Support",
      cardPara:
        "From the initial verification process through to the final setup, we are dedicated to supporting you every step of the way.",
    },
  ];

  const domainCardsData = [
    {
      domainCardImg: domaincard1,
      domainCardHead: ".com Transfers: ",
      domainCardPara:
        "Easily transfer your business’s primary domain with zero hassle. We’ll make sure everything stays connected and running smoothly.",
      domainCardBtn: "Learn More",
      domainCardLink: "/get-intouch",
    },
    {
      domainCardImg: domaincard2,
      domainCardHead: ".org Transfers:",
      domainCardPara:
        "Perfect for organizations and non-profits that want a reliable, worry-free move.",
      domainCardBtn: "Learn More",
      domainCardLink: "/get-intouch",
    },
    {
      domainCardImg: domaincard3,
      domainCardHead: ".NET Transfers:",
      domainCardPara:
        "Ideal for tech-driven brands that rely on stability and performance throughout every step of the migration.",
      domainCardBtn: "Learn More",
      domainCardLink: "/get-intouch",
    },
    {
      domainCardImg: domaincard4,
      domainCardHead: "Country-Specific Transfers:  ",
      domainCardPara:
        "Whether it’s .us, .co, uk, or .ca, we handle regional requirements and ensure your transfer is verified and active in no time.",
      domainCardBtn: "Learn More",
      domainCardLink: "/get-intouch",
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
          title="Simplify Your Domain Transfer with California Web Coders"
          description="Transfer your website’s domain quickly, securely, and without downtime, handled by experts who make every step seamless."
          btnText="Connect Now"
        />

        <DomainCards domainCards={domainCardsData} />

        <WordPressPerformanceSection
          reverse
          minihead="About section"
          miniheadclass="shorttop-head"
          secTitle1="Move Your"
          secTitle2="Website"
          secTitle3="Without Losing a Step"
          description="Our domain transfer services make it easy to move your domain between registrars while maintaining uptime and control. At California Web Coders, we ensure every detail, from DNS setup to renewal synchronization, is handled accurately and securely. Whether it’s a single site or multiple domains, we make transfers smooth and worry-free."
          descriptiontwo="Why Businesses Choose CWC:"
          landingList="landing-design-points domain-register-list"
          landingListItems={[
            "Zero Downtime Transfers",
            "Secure and Verified Ownership",
            "Expert Technical Suppor",
          ]}
          TouchBtn="d-none"
          btntext="Start Your Domain Transfer"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={aboutCompany}
        />

        <DomainService
          domainserviceminihead="More of Our Services:"
          domainservicelargehead="Everything You Need to Move Smoothly"
          serviceImgone={serviceimg1}
          shorthead="Managed Web Hosting"
          bighead="Easier Access, Secure Hosting"
          servicepara="We provide reliable, fast, and secure hosting with 24/7 uptime monitoring, ensuring your website performs flawlessly after the transfer."
          btntext="Learn more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="Website Migration"
          bigheadtwo="Move Without the Hassle"
          serviceparatwo="Our migration experts handle website content, databases, and settings with precision, ensuring a seamless transition of your entire online presence with no data loss or downtime."
          btntwotxt="Learn more"
          serviceImgthree={serviceimg3}
          shortheadthree="Domain Registration"
          bigheadthree="Claim Your Identity"
          serviceparathree="Secure your perfect domain name with ease. Our domain registration services help you find, claim, and protect your brand identity online with instant activation and complete ownership."
          btnthreetxt="Learn more"
        />

        <section className="domain-transfer-choose">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="domaintransfer-choose-head">
                  <h6>Why Choose Us</h6>
                  <h4>
                    Your Transfer <span>Done Right and Done Fast</span>
                  </h4>
                  <p>
                    With years of experience in domain management and hosting,
                    we understand how critical uptime and performance are. Our
                    experts ensure every transfer is secure, quick, and built
                    with full control retained by you.
                  </p>
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

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="domain-secure-sec"
          domainRow="row justify-content-center"
          secureminihead="Secure Your Authority"
          securebighead="Need to Transfer Your Domain While Keeping Your Credibility? "
          minihead="Secure Your Authority"
          miniheadclass="shorttop-head"
          secTitle1="Buy or Transfer a Domain With Confidence"
          description="When it’s time to transfer your domain, maintaining brand trust and search visibility is crucial. California Web Coders ensures smooth transitions, secure handling, and complete control. From name server updates to email setup, we help you move your domain safely and efficiently."
          TouchBtn="d-none"
          btntext="Talk to Our Experts"
          learnmorebtn="aboutus-call"
          aboutbtnlink="/get-intouch"
          phoneNumber="+1 (619) 335-2364"
          image={secureimg}
        />

        <WordPressPerformanceSection
          reverse
          minihead="About section"
          miniheadclass="shorttop-head"
          secTitle1="Ready to"
          secTitle2="Transfer Domain?"
          description="Moving your domain doesn’t have to be complicated, not when you have experts handling it. We’ll manage the technical process, confirm ownership verification, and ensure uninterrupted service."
          descriptiontwo="At California Web Coders, we ensure every domain transfer is fast, secure, and completely transparent from start to finish."
          TouchBtn="d-none"
          btntext="Start Your Domain Transfer"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={readytransfer}
        />

        <ContactForm
          secTitle="Make Your Move Swift Across the Web"
          secDescription="Get your domain transferred securely and stress-free. Fill out the form below to begin your transfer today."
          btnText="Transfer Now With Confidence"
        />

        {/* <SinglePricingPlan
          secTitle="Flexible Options for Every Transfer"
          secDescription="We offer affordable, transparent pricing for domain transfer services with no hidden fees, designed to fit businesses of all sizes."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="Frequently Asked Questions for Domain Transfer"
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

export default DomainTransfer;
