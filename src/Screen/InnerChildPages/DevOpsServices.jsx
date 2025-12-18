'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";

import ServiceBanner from "../../components/ServiceBanner";
import domaincard1 from "@/Assets/newChildPagesAssets/devopservices/ci.webp";
import domaincard2 from "@/Assets/newChildPagesAssets/devopservices/cd.webp";
import domaincard3 from "@/Assets/newChildPagesAssets/devopservices/infrastructureautomation.webp";
import domaincard4 from "@/Assets/newChildPagesAssets/devopservices/monitoring.webp";
import herobanner from "@/Assets/newChildPagesAssets/devopservices/devop-service-bg.webp";
import devopabout from "@/Assets/newChildPagesAssets/devopservices/devop-about.webp";
import chooseimg from "@/Assets/newChildPagesAssets/devopservices/choose-img.webp";
import devopsupport from "@/Assets/newChildPagesAssets/devopservices/devop-support-bg.webp";
import AiChip from "@/Assets/newChildPagesAssets/devopservices/aichip.svg";
import Fintech from "@/Assets/newChildPagesAssets/devopservices/fintech.svg";
import Healthcare from "@/Assets/newChildPagesAssets/devopservices/healthcare.svg";
import Saas from "@/Assets/newChildPagesAssets/devopservices/saas.svg";
import Sofwarecompany from "@/Assets/newChildPagesAssets/devopservices/sofwarecompany.svg";
import Speedmeter from "@/Assets/newChildPagesAssets/reactdevelopment/speedmeter.svg";
import Topmedal from "@/Assets/newChildPagesAssets/reactdevelopment/toppermedal.svg";
import Easycontrol from "@/Assets/newChildPagesAssets/reactdevelopment/easycontrol.svg";
import FederalGovernment from "@/Assets/newChildPagesAssets/devopservices/setup.svg";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import serviceimg1 from "@/Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "@/Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "@/Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
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
    question: "1. What is DevOps?",
    answer:
      "DevOps is a set of practices that integrate development and IT operations to shorten the development cycle and deliver faster, more reliable software.",
  },
  {
    id: 2,
    question: "2. Why do businesses need DevOps services?",
    answer:
      "DevOps improves efficiency, reduces deployment risks, and ensures faster delivery with fewer errors through automation and continuous integration.",
  },
  {
    id: 3,
    question: "3. Do you provide custom DevOps solutions?",
    answer:
      "Yes, we tailor pipelines, automation workflows, and cloud infrastructure based on your specific technology stack and business goals.",
  },
  {
    id: 4,
    question: "4. Can you manage cloud-based DevOps systems?",
    answer:
      "Yes, we specialize in AWS, Azure, and Google Cloud setup, configuration, and maintenance.",
  },
  {
    id: 5,
    question: "5. What tools do you use for DevOps implementation?",
    answer:
      "We use GitHub Actions, Jenkins, Docker, Kubernetes, Terraform, and other industry-leading tools for automation and monitoring.",
  },
  {
    id: 6,
    question: "6. Do you offer continuous integration and delivery (CI/CD)?",
    answer:
      "Yes, our CI/CD pipelines automate code integration, testing, and deployment for faster, error-free releases.",
  },
  {
    id: 7,
    question: "7. Is DevOps suitable for small businesses?",
    answer:
      "Yes, even small businesses benefit from DevOps efficiency, helping them scale faster with fewer resources.",
  },
  {
    id: 8,
    question: "8. Can you integrate DevOps into the existing infrastructure?",
    answer:
      "Yes, we can optimize and enhance your current systems with CI/CD automation and better monitoring tools.",
  },
  {
    id: 9,
    question: "9. How secure are your DevOps solutions?",
    answer:
      "All configurations are built with encryption, access control, and compliance measures for maximum protection.",
  },
  {
    id: 10,
    question:
      "10. Why choose California Web Coders for DevOps?",
    answer:
      "Because we blend experience, precision, and scalability, we offer continuous integration and deployment backed by full monitoring and technical support.",
  },
];


const DevOpsServices = () => {
  const domainCardsData = [
    {
      domainCardImg: domaincard1,
      domainCardHead: "Continuous Integration (CI)",
      domainCardPara:
        "Automating code integration, testing, and validation to maintain consistent build quality and reduce manual errors.",
      domainCardBtn: "Learn more",
      domainCardLink: "/get-intouch",
    },
    {
      domainCardImg: domaincard2,
      domainCardHead: "Continuous Deployment (CD)",
      domainCardPara:
        "Streamlining deployment pipelines for faster, error-free releases across all environments.",
      domainCardBtn: "Learn more",
      domainCardLink: "/get-intouch",
    },
    {
      domainCardImg: domaincard3,
      domainCardHead: "Infrastructure Automation",
      domainCardPara:
        "Using tools like Docker, Kubernetes, and Terraform for scalable, automated infrastructure management.",
      domainCardBtn: "Learn more",
      domainCardLink: "/get-intouch",
    },
    {
      domainCardImg: domaincard4,
      domainCardHead: "Monitoring & Optimization",
      domainCardPara:
        "Monitoring app performance, tracking uptime, and optimizing system efficiency through real analytics and alerts.",
      domainCardBtn: "Learn more",
      domainCardLink: "/get-intouch",
    },
  ];

  const cardsData = [
    {
      icon: <Image src={Fintech.src} alt="Fintech" width={40} height={40} />,
      cardTitle: "Fintech",
      cardPara:
        "From payment gateways to trading platforms, we help Fintech companies automate processes, strengthen security, and ensure compliance while supporting high-volume transactions and real-time data handling.",
    },
    {
      icon: <Image src={Saas.src} alt="Saas" width={40} height={40} />,
      cardTitle: "SaaS",
      cardPara:
        "Our DevOps strategies empower SaaS platforms with continuous delivery, automatic scaling, and performance monitoring, enabling smooth user experiences and faster updates with minimal downtime.",
    },
    {
      icon: <Image src={Healthcare.src} alt="Healthcare" width={40} height={40} />,
      cardTitle: "Healthcare & Aesthetics",
      cardPara:
        "We provide HIPAA-compliant infrastructure management and secure cloud integrations that help healthcare and aesthetics businesses run digital systems without performance compromise.",
    },
  ];

  const extracardsData = [
    {
      icon: <Image src={AiChip.src} alt="AiChip" width={40} height={40} />,
      cardTitle: "Automobiles",
      cardPara:
        "From connected car systems to supply chain portals, we build reliable DevOps pipelines that streamline production processes and improve real-time performance analytics.",
    },
    {
      icon: <Image src={Fintech.src} alt="Fintech" width={40} height={40} />,
      cardTitle: "Real Estate",
      cardPara:
        "We support real estate tech platforms with scalable cloud infrastructure and deployment automation that enhance listing performance, speed, and user experience.",
    },
    {
      icon: <Image src={FederalGovernment.src} alt="FederalGovernment" width={40} height={40} />,
      cardTitle: "Other Emerging Sectors",
      cardPara:
        "Our adaptable DevOps solutions extend to retail, logistics, and education, supporting innovative businesses with infrastructure that grows as they do, without losing speed or control.",
    },
  ];

  const choosecarddata = [
    {
      icon: <Image src={Sofwarecompany.src} alt="Sofwarecompany" width={40} height={40} />,
      cardTitle: "CI/CD Pipeline Automation ",
      cardPara:
        "Build, test, and deploy updates automatically to reduce manual errors and accelerate delivery.",
    },
    {
      icon: <Image src={Topmedal.src} alt="Topmedal" width={40} height={40} />,
      cardTitle: "Cloud Infrastructure Management ",
      cardPara:
        "Optimize scalability and performance through AWS, Azure, and Google Cloud configurations.",
    },
    {
      icon: <Image src={Easycontrol.src} alt="Easycontrol" width={40} height={40} />,
      cardTitle: "Monitoring and Log Management ",
      cardPara:
        "Track system performance and identify potential issues with real-time alerts and analytics.",
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
          title="DevOps Services for Smarter, Faster Development"
          description="Streamline workflows, boost team collaboration, and deploy faster with our DevOps services in California, made for scalable, secure, and smoothly performing web applications."
          btnText="Chat With an Expert"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us:"
          miniheadclass="shorttop-head"
          secTitle1="Bridging Innovation & Efficiency With"
          secTitle2="DevOps"
          description="At California Web Coders, our DevOps services transform the way your teams build, test, and release software. We bring automation, monitoring, and integration into one unified ecosystem that increases agility, improves delivery, and reduces downtime. From cloud deployment to CI/CD pipelines, we handle it all efficiently."
          descriptiontwo="Why Businesses Trust CWC:"
          landingList="landing-design-points domain-register-list"
          landingListItems={[
            "Dedicated DevOps Team",
            "24/7 Monitoring and Support",
            "Agile Workflow Integration",
          ]}
          TouchBtn="d-none"
          btntext="More About Us"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={devopabout}
        />

        <DomainCards domainCards={domainCardsData} />

        <DomainService
          domainserviceminihead="More of Our Services:"
          domainservicelargehead="Your Starter Kit to Go Online"
          serviceImgone={serviceimg1}
          shorthead="VPS Hosting"
          bighead="Powerful VPS Management"
          servicepara="Host applications on powerful, scalable servers. Our VPS solutions deliver enhanced performance, security, and flexibility to meet your application’s growing demands."
          btntext="Learn more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="SSL Certificates"
          bigheadtwo="Data Security"
          serviceparatwo="Protect all communication channels across your infrastructure with SSL encryption, ensuring complete data security, authenticity, and compliance across networks."
          btntwotxt="Learn more"
          serviceImgthree={serviceimg3}
          shortheadthree="Website Migration"
          bigheadthree="Swift Web Migration"
          serviceparathree="We handle full-scale migrations with zero downtime. From configuration updates to environment sync, your transition is seamless, stable, and stress-free."
          btnthreetxt="Learn more"
        />

        <section className="domain-transfer-choose">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="domaintransfer-choose-head">
                  <h6>Industries We Serve </h6>
                  <h4>
                    Industries Where Our <span>Systems Thrive</span>
                  </h4>
                  <p>
                    We’ve partnered with diverse industries across California to
                    deliver fast, reliable, and automated DevOps solutions. Our
                    expertise ensures security, scalability, and efficiency,
                    helping every business achieve smoother workflows and faster
                    deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <CustomCustomerCard cardsData={cardsData} />
              </div>
              <div className="col-lg-12">
                <CustomCustomerCard cardsData={extracardsData} />
              </div>
            </div>
          </div>
        </section>

        <section className="email-hosting-choose-sec">
          <WordPressPerformanceSection
            wordpresssecclass="react-choose-sec"
            miniheadclass="shorttop-head"
            minihead="Why Choose Us"
            secTitle1="Because Innovation Needs Reliability to Scale"
            description="At California Web Coders, our DevOps engineers bridge innovation with reliability. We implement best practices, cloud automation, and focused monitoring, ensuring your development pipelines run efficiently, securely, and continuously for faster deployment and smoother collaboration."
            image={chooseimg}
            listClass="d-none"
            TouchBtn="d-none"
            btntext="More About Us"
            learnmorebtn="aboutus-call"
          />
          <CustomCustomerCard cardsData={choosecarddata} />
        </section>

        <ServiceBanner
          leftCol="col-lg-6"
          innerServicetxt="inner-services-banner-content domain-support-txt"
          bgImage={devopsupport}
          btnClass="theme-light mt-3"
          title="Dedicated DevOps Support for Growing Businesses"
          description="Our DevOps support team keeps everything running smooth from deployment to everyday optimization. We blend technical skill with proactive guidance so your systems stay stable, secure, and ready for whatever comes next. Whether you are growing fast or locking things down, we make sure your operations stay smart, efficient, and always a step ahead."
          btnText="Book a Consultation"
        />

        <ContactForm
          secTitle="Let’s Build a Better Workflow Together"
          secDescription="Simplify infrastructure, speed up delivery, and scale confidently with expert DevOps integration. Fill out the form below to get started with our engineers."
          btnText="Get Started With DevOps"
        />

        {/* <SinglePricingPlan
          secTitle="Flexible Packages for Every Business"
          secDescription="Choose from scalable DevOps plans built for startups, growing teams, and enterprises, all focused on performance, automation, and secure operations."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="Frequently Asked Questions for DevOps Services"
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

export default DevOpsServices;
