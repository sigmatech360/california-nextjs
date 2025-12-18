'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";

import ServiceBanner from "../../components/ServiceBanner";
import herobanner from "../../Assets/newChildPagesAssets/servermanage/server-management-bg.webp";
import serviceimg1 from "../../Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "../../Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "../../Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
import serverabout from "../../Assets/newChildPagesAssets/servermanage/server-about.webp";
import serversmooth from "../../Assets/newChildPagesAssets/servermanage/server-smooth.webp";
import serverseo from "../../Assets/newChildPagesAssets/servermanage/server-seo.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainService from "../../components/DomainService";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import ContactForm from "../../components/readytocheat";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import CoreCapabilities from "../../components/CoreCapabilities";

export const faqHomeData = [
  {
    id: 1,
    question: "1. What is server management?",
    answer:
      "Server management involves maintaining, monitoring, and securing servers to ensure consistent performance, uptime, and data protection.",
  },
  {
    id: 2,
    question: "2. Do you offer 24/7 server monitoring?",
    answer:
      "Yes, our team continuously monitors your servers and responds immediately to any potential issues.",
  },
  {
    id: 3,
    question: "3. Can you manage cloud-based servers?",
    answer:
      "Absolutely, we manage servers across AWS, Google Cloud, Azure, and private infrastructures.",
  },
  {
    id: 4,
    question: "4. Do I lose control of my server?",
    answer:
      "No, you retain full ownership. We simply handle technical operations to ensure smooth performance.",
  },
  {
    id: 5,
    question: "5. How do you ensure server security?",
    answer:
      "We use firewalls, malware detection, SSL integration, and regular audits to maintain full server security.",
  },
  {
    id: 6,
    question: "6. Can you optimize server performance?",
    answer:
      "Yes, we analyze and adjust server settings, caching, and load balancing for optimal speed and efficiency.",
  },
  {
    id: 7,
    question: "7. Do you manage VPS and dedicated servers?",
    answer:
      "Yes, we handle both VPS and dedicated environments with equal precision and care.",
  },
  {
    id: 8,
    question: "8. What happens if my server crashes?",
    answer:
      "Our backup and recovery system ensures quick restoration with minimal data loss and zero downtime.",
  },
  {
    id: 9,
    question: "9. Do you provide monthly server reports?",
    answer:
      "Yes, we deliver detailed reports on server performance, uptime, and optimization activities.",
  },
  {
    id: 10,
    question: "10. Why choose California Web Coders for server management?",
    answer:
      "Because we combine expertise, proactive monitoring, and full support, we keep your servers fast, stable, and protected around the clock.",
  },
];

const ServerManagement = () => {
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
          title="Reliable Server Management for Uninterrupted Performance"
          description="Keep your digital infrastructure stable and high-performing with our server management services in California, trusted by businesses for proactive monitoring and 24/7 technical support."
          btnText="Get Easy Server Management"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us:"
          miniheadclass="shorttop-head"
          secTitle1="Expert Management for Modern Servers"
          secTitle2="Verified Domain"
          description="At California Web Coders, we specialize in managing servers that keep your websites, applications, and databases running at peak performance. Our service includes regular maintenance, security patches, monitoring, and performance tuning,  ensuring your business operates smoothly and securely at all times."
          descriptiontwo="Why Businesses Choose CWC:"
          landingList="landing-design-points domain-register-list"
          landingListItems={[
            "Dedicated Management Team",
            "24/7 Support",
            "Performance-First Approach",
          ]}
          TouchBtn="d-none"
          btntext="More About Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={serverabout}
        />

        <DomainService
          domainserviceminihead="More of Our Services:"
          domainservicelargehead="Keeping Your Systems Strong With a Broad Skill Set"
          serviceImgone={serviceimg1}
          shorthead="Domain Transfer"
          bighead="Backed Up Transfer"
          servicepara="We handle all DNS, registrar updates, and configuration changes securely. Our experts ensure zero downtime while keeping your ownership, data integrity, and domain"
          btntext="Explore more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="Web Hosting"
          bigheadtwo="Optimized Hosting Plan"
          serviceparatwo="Our managed web hosting ensures optimized performance, scalability, and constant uptime. With integrated server management, you get seamless hosting operations without worrying about security or performance issues."
          btntwotxt="Explore more"
          serviceImgthree={serviceimg3}
          shortheadthree="DevOps Services"
          bigheadthree="Faster, Smoother Deployment"
          serviceparathree="We integrate DevOps practices for faster deployment, automated updates, and better collaboration. This ensures your servers stay agile, adaptive, and capable of handling continuous software delivery and scaling."
          btnthreetxt="Explore more"
        />

        <WordPressPerformanceSection
          secTitle1="Complete Control, Continuous"
          secTitle2="Optimization"
          description="We maintain servers and enhance their potential for better performance. Through consistent updates, proactive monitoring, and timely troubleshooting, we ensure your web infrastructure grows with your business needs."
          TouchBtn="d-none"
          learnmorebtn="d-none"
          image={serverseo}
        />

        <WordPressPerformanceSection
          reverse
          secTitle1="Bringing Websites to"
          secTitle2="Performance-Perfection"
          description="Our server management services go beyond maintenance, because we’re all about proactive improvement. From resource optimization to risk prevention, we make sure your systems stay healthy, responsive, and efficient every single day."
          descriptiontwo="Our process includes detailed reporting, continuous patch management, and 24/7 oversight to ensure no issue ever goes unnoticed. Every decision we make prioritizes speed, safety, and stability."
          TouchBtn="d-none"
          btntext="Talk to an Expert"
          learnmorebtn="aboutus-call"
          aboutbtnlink="/get-intouch"
          phoneNumber="+1 (619) 335-2364"
          image={serversmooth}
        />


        <CoreCapabilities />
{/* 
        <SinglePricingPlan
          secTitle="Flexible Packages for Every Infrastructure"
          secDescription="Our server management services come with customizable plans designed to fit your business scale at competitive prices."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ContactForm
          secTitle="Get the Server Stability You Deserve"
          secDescription="Fill out the form below, and our experts will help you design a server management plan that guarantees uptime and efficiency."
          btnText="Let’s Manage It Together"
        />

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

export default ServerManagement;
