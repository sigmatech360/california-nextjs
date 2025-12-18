'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import herobanner from "../../Assets/newChildPagesAssets/domainregistration/domain-register-herobanner.webp";
import domainsupport from "../../Assets/newChildPagesAssets/domainregistration/hosting-support-bg.webp";
import aboutCompany from "../../Assets/newChildPagesAssets/domainregistration/about-domain-register.webp";
import serviceimg1 from "../../Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "../../Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "../../Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
import chooseimg1 from "../../Assets/newChildPagesAssets/domainregistration/domain-performance.webp";
import chooseimg2 from "../../Assets/newChildPagesAssets/domainregistration/domain-security.webp";
import chooseimg3 from "../../Assets/newChildPagesAssets/domainregistration/domain-web-creation.webp";
import chooseimg4 from "../../Assets/newChildPagesAssets/domainregistration/domain-tool-plugins.webp";
import trustpartner from "../../Assets/newChildPagesAssets/domainregistration/select-domain-img.webp";
import ServiceBanner from "../../components/ServiceBanner";

import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainService from "../../components/DomainService";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";


export const faqHomeData = [
  {
    id: 1,
    question: "1. What is domain registration?",
    answer:
      "Domain registration is the process of reserving a unique web address for your business or brand online.",
  },
  {
    id: 2,
    question: "2. Why should I register my domain with California Web Coders?",
    answer:
      "We ensure quick activation, secure management, and complete ownership of your domain with ongoing support from our experts.",
  },
  {
    id: 3,
    question: "3. Can I transfer my existing domain to CWC?",
    answer:
      "Yes. We provide smooth domain transfer assistance with zero downtime and full protection of your data.",
  },
  {
    id: 4,
    question: "4. Do you offer privacy protection for domains?",
    answer:
      "Absolutely. Your personal details are protected through domain privacy services that hide sensitive data from public databases.",
  },
  {
    id: 5,
    question: "5. How long does it take to register a domain?",
    answer:
      "Typically, domain registration is completed within minutes after verification and payment confirmation.",
  },
  {
    id: 6,
    question: "6. Can I manage my DNS settings easily?",
    answer:
      "Yes. Our user-friendly dashboard gives you full control over DNS records and domain management tools.",
  },
  {
    id: 7,
    question: "7. Do you provide SSL certificates with domains?",
    answer:
      "Yes. We offer SSL certificates to ensure your website is secure and trusted by users and search engines.",
  },
  {
    id: 8,
    question: "8. What happens when my domain expires?",
    answer:
      "We send reminders well before expiration and offer easy renewals to prevent service interruptions.",
  },
  {
    id: 9,
    question: "9. Do you provide hosting along with domain registration?",
    answer:
      "Yes. You can combine our managed web hosting and domain registration services for a complete setup.",
  },
  {
    id: 10,
    question:
      "10. Can I register multiple domains at once?",
    answer:
      "Yes. We support bulk domain registration for businesses managing multiple brands or extensions.",
  },
];

const DomainRegistration = () => {
  

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
          title="Claim Your Perfect Domain Name Now"
          description="Secure your perfect domain name with California Web Coders and give your brand a powerful start online."
          btnText="Claim Your Domain"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About"
          miniheadclass="shorttop-head"
          secTitle1="Establish Authority with a"
          secTitle2="Verified Domain"
          description="At California Web Coders, we make domain registration easy, secure, and hassle-free. Our services include domain search, registration, renewal, transfer support, and every web support that comes beyond. We ensure your business owns a credible online identity. Get full domain ownership with multiple benefits and stress-free management at California Web Coders!"
          descriptiontwo="Why Businesses Choose CWC:"
          landingList="landing-design-points domain-register-list"
          landingListItems={[
            "Instant Domain Activation",
            "Full Ownership Guarantee",
            "Protected Data Privacy",
          ]}
          TouchBtn="d-none"
          btntext="Register Your Domain Now"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={aboutCompany}
        />

        <DomainService
          domainserviceminihead="More of Our Services:"
          domainservicelargehead="Your Starter Kit to Go Online"
          serviceImgone={serviceimg1}
          shorthead="Domain Transfer"
          bighead="Move Your Domain Swiftly"
          servicepara="For brands that want a change, we simplify it with secure domain transfers and ongoing management, all designed to keep your website running smoothly. Our goal is to make your launch as smooth as your business plan."
          btntext="Learn more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="Managed Web Hosting"
          bigheadtwo="Simple & Accessible Hosting"
          serviceparatwo="Our managed hosting ensures your website stays fast, secure, and optimized, so your online presence is always stable and accessible."
          btntwotxt="Learn more"
          serviceImgthree={serviceimg3}
          shortheadthree="Server Management"
          bigheadthree="Simple Web Management "
          serviceparathree="We provide end-to-end server support to keep your hosting environment performing at its peak, minimizing downtime and maximizing reliability."
          btnthreetxt="Learn more"
        />

        <WordPressPerformanceSection
          reverse
          miniheadclass="shorttop-head"
          textClassbox="abouttxt-data select-domain-txt"
          minihead="California Web Coders:"
          secTitle1="Your Trusted Partner for"
          secTitle2="Domain Registration"
          description="Selecting the right domain name is more than just a URL; it’s your digital identity. Our experts help you choose a name that reflects your brand, guide you through availability checks, and ensure a safe registration process. With California Web Coders, your domain is secured, managed, and protected at every step."
          descriptiontwo=""
          TouchBtn="d-none"
          btntext="Find My Domain"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={trustpartner}
        />

        <ServiceBanner
          leftCol="col-lg-6"
          innerServicetxt="inner-services-banner-content domain-support-txt"
          bgImage={domainsupport}
          btnClass="theme-light mt-3"
          title="Expert Help Anytime of the Day! "
          description="For our web experts, managing your online presence doesn’t stop at a domain name. We also assist with web hosting, domain transfers, and SSL certificates, ensuring your website runs securely and efficiently. We handle every technical detail of your project, so you can focus on growing your vision with ease."
          btnText="Create My Own Domain"
        />

        <WordPressPerformanceSection
          miniheadclass="shorttop-head"
          leftCol="col-lg-7"
          textClassbox="abouttxt-data domain-choose-head"
          minihead="Why Choose Us? "
          secTitle1="Why Choose"
          secTitle2="California Web Coders"
          secTitle3="for Domain Registration?"
          TouchBtn="d-none"
          serviceImg="d-none"
        />

        <WordPressPerformanceSection
          minihead="Advanced Security"
          miniheadclass="shorttop-head"
          secTitle1="High Security With Every"
          secTitle2="Domain Registered"
          description="Advanced encryption protocols, robust data protection systems, and comprehensive DNS security measures protect every domain. These layers of security work together to defend against a wide range of cyber threats, including hacking, malware, and phishing attacks. They also prevent unauthorized access to your online assets, ensuring that your business remains safe, reliable, and available to your customers at all times."
          TouchBtn="d-none"
          learnmorebtn="d-none"
          image={chooseimg1}
        />

        <WordPressPerformanceSection
          reverse
          minihead="High-End Technology"
          miniheadclass="shorttop-head"
          secTitle1="Advanced Technology for"
          secTitle2="Modern Businesses"
          description="We utilize innovative infrastructure and automated systems to facilitate a seamless experience for registration, renewals, and DNS management. This approach guarantees quick activation times and makes long-term management effortless for our users."
          TouchBtn="d-none"
          learnmorebtn="d-none"
          image={chooseimg2}
        />

        <WordPressPerformanceSection
          minihead="Quick Acquisition"
          miniheadclass="shorttop-head"
          secTitle1="Faster and Smoother"
          secTitle2="Domain Acquisition"
          description="With our streamlined system, you can quickly search for available domains, register your preferred choice, and activate it within just a few minutes. This efficient process significantly saves your time, reduces hassle, and simplifies the entire setup, making it easier than ever to establish your online presence seamlessly."
          TouchBtn="d-none"
          learnmorebtn="d-none"
          image={chooseimg3}
        />


        <WordPressPerformanceSection
          reverse
          minihead="High-End Technology"
          miniheadclass="shorttop-head"
          secTitle1="24/7 Customer Support"
          secTitle2="Customer Support"
          secTitle3="You Can Rely On"
          description="We utilize innovative infrastructure and automated systems to facilitate a seamless experience for registration, renewals, and DNS management. This approach guarantees quick activation times and makes long-term management effortless for our users."
          TouchBtn="d-none"
          learnmorebtn="d-none"
          image={chooseimg4}
        />



        
      <ContactForm
        secTitle="Get Your Domain Registered Today"
        secDescription="Secure your business name before someone else does. Fill out the form below, and our experts will handle the rest."
        btnText="Let’s Get Started"
      />

      {/* <SinglePricingPlan
        secTitle="Simple Packages for Every Business"
        secDescription="Our domain registration services come with flexible pricing options, transparent renewals, and valuable features. "
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      /> */}

      <FrequentQuestions
        secTitle="Frequently Asked Questions for Domain Registration"
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

export default DomainRegistration;
