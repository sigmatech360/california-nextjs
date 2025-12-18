'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";

import ServiceBanner from "../../components/ServiceBanner";
import serviceimg1 from "../../Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "../../Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "../../Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
import domaincard1 from "../../Assets/newChildPagesAssets/vpsserver/eccomerce.webp";
import domaincard2 from "../../Assets/newChildPagesAssets/vpsserver/saas.webp";
import domaincard3 from "../../Assets/newChildPagesAssets/vpsserver/databusiness.webp";
import domaincard4 from "../../Assets/newChildPagesAssets/vpsserver/hightrafficwebsites.webp";
import aboutCompany from "../../Assets/newChildPagesAssets/vpsserver/hosting-partner.webp";
import reliablehosting from "../../Assets/newChildPagesAssets/vpsserver/reliable-hosting.webp";
import herobanner from "../../Assets/newChildPagesAssets/vpsserver/vps-banner.webp";
import choose1 from "../../Assets/newChildPagesAssets/vpsserver/choose-us-1.webp";
import choose2 from "../../Assets/newChildPagesAssets/vpsserver/choose-us-2.webp";
import choose3 from "../../Assets/newChildPagesAssets/vpsserver/choose-us-3.webp";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import DomainService from "../../components/DomainService";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainChooseCard from "../../components/DomainChooseCard";
import DomainCards from "../../components/DomainCards";
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
    question: "1. What is a VPS server?",
    answer:
      "A Virtual Private Server (VPS) offers dedicated resources within a shared environment, providing more control and power than traditional shared hosting.",
  },
  {
    id: 2,
    question: "2. What’s the difference between VPS and dedicated servers?",
    answer:
      "VPS shares a physical server but operates independently, while a dedicated server gives you full control of all hardware and resources.",
  },
  {
    id: 3,
    question: "3. Why should I choose VPS hosting?",
    answer:
      "VPS hosting offers better performance, scalability, and security, ideal for websites with growing traffic or demanding applications.",
  },
  {
    id: 4,
    question: "4. Do I need technical skills to manage a VPS?",
    answer:
      "No, our managed VPS services include full setup, monitoring, and support; we handle the technical side for you.",
  },
  {
    id: 5,
    question: "5. Can I upgrade from shared hosting to VPS?",
    answer:
      "Yes, we handle migrations seamlessly without downtime or data loss when moving to a VPS or dedicated environment.",
  },
  {
    id: 6,
    question: "6. Is VPS hosting suitable for eCommerce websites?",
    answer:
      "Yes, VPS hosting ensures stability, speed, and data protection, critical for secure online transactions and smooth customer experiences.",
  },
  {
    id: 7,
    question: "7. What makes your VPS hosting secure?",
    answer:
      "We include DDoS protection, firewalls, SSL certificates, and encrypted access to keep your servers and data safe.",
  },
  {
    id: 8,
    question: "8. Can you help me choose the right plan?",
    answer:
      "Yes, our experts assess your website’s size, traffic, and technical needs to recommend the perfect VPS or dedicated hosting package.",
  },
  {
    id: 9,
    question: "9. Do you offer backups for VPS hosting?",
    answer:
      "Yes, automated daily backups are included with every plan to safeguard against accidental data loss or system errors.",
  },
  {
    id: 10,
    question: "10. Why choose California Web Coders for VPS hosting?",
    answer:
      "Because we blend hosting power with expert web development, we ensure fast, stable, and optimized performance for every client.",
  },
];



const VPSDedicatedServers = () => {
  const cardsData = [
    {
      Image: choose1,
      cardTitle: "Scalable Infrastructure",
      cardPara:
        "Whether you’re managing a growing eCommerce store or an enterprise platform, our VPS solutions scale instantly to meet increasing performance demands without affecting uptime.",
    },
    {
      Image: choose2,
      cardTitle: "Advanced Server Monitoring",
      cardPara:
        "We track server activity 24/7 using intelligent monitoring tools that detect performance issues before they affect your site, ensuring smooth operation and maximum availability.",
    },
    {
      Image: choose3,
      cardTitle: "Customized Configuration",
      cardPara:
        "Our experts modify VPS and dedicated environments for specific frameworks and applications, ensuring your system runs with peak efficiency and resource optimization.",
    },
  ];

  const vpscardsData = [
    {
      head: "Full Root Access",
      para: "Total control over your hosting environment for seamless customization and advanced features, ensuring optimal performance, security, and scalability tailored precisely to your needs.",
    },
    {
      head: "24/7 Server Monitoring",
      para: "Continuous monitoring to detect and fix performance or security problems proactively, ensuring system reliability and safeguarding data integrity through ongoing assessments and prompt issue resolution.",
    },
    {
      head: "Automated Backups",
      para: "Daily backups enable quick restoration, preventing data loss and ensuring system reliability. Regular backups are essential for safeguarding information against hardware failures, cyberattacks, or accidental deletion.",
    },
    {
      head: "Enhanced Security Layers",
      para: "Firewalls, malware detection, and DDoS protection provide comprehensive security measures to safeguard your network from various cyber threats, ensuring maximum safety and resilience.",
    },
  ];

  const domainCardsData = [
    {
      domainCardImg: domaincard1,
      domainCardHead: "E-Commerce Platforms",
      domainCardPara:
        "VPS Servers power online stores with secure payment processing and consistent uptime.",
      domainCardBtn: "Explore Now",
      domainCardLink: "/get-intouch",
    },
    {
      domainCardImg: domaincard2,
      domainCardHead: "SaaS Applications",
      domainCardPara:
        "It can run scalable apps with dedicated computing resources and smooth performance.",
      domainCardBtn: "Explore More",
      domainCardLink: "/get-intouch",
    },
    {
      domainCardImg: domaincard3,
      domainCardHead: "Data-Intensive Businesses",
      domainCardPara:
        "These servers can handle analytics, backups, and large databases efficiently with VPS resources.",
      domainCardBtn: "Explore More",
      domainCardLink: "/get-intouch",
    },
    {
      domainCardImg: domaincard4,
      domainCardHead: "High-Traffic Websites",
      domainCardPara:
        "Keeps the high-traffic sites fast and responsive even during heavy visitor surges.",
      domainCardBtn: "Explore More",
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
          title="Empower Your Website With Reliable VPS and Dedicated Server Hosting"
          description="Upgrade to high-speed VPS or dedicated hosting built for stability, scalability, and control, perfect for businesses that demand peak performance every day."
          btnText="Chat With Our VPS Experts"
        />

        <section className="domain-transfer-choose">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="domaintransfer-choose-head">
                  <h6>Why Choose Us:</h6>
                  <h4>
                    <span>Hosting Expertise</span>Backed by Exceptional Web
                    Skills
                  </h4>
                  <p>
                    At California Web Coders, we bring deep experience in web
                    development and VPS management, helping businesses achieve
                    unmatched reliability, speed, and security. Our team ensures
                    every setup is customized, secure, and optimized for your
                    site’s specific needs.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <CustomCustomerCard
                  cardClass="vps-choose-card"
                  cardsData={cardsData}
                />
              </div>
            </div>
          </div>
        </section>

        <DomainService
          domainserviceminihead="More of Our Services:"
          domainservicelargehead="Our Services Beyond VPS and Hosting"
          serviceImgone={serviceimg1}
          shorthead="Web Development"
          bighead="Powerful Web Presence"
          servicepara="From backend frameworks like Laravel and Node.js to frontend builds in React and Angular, our developers craft high-performing, dynamic websites designed for speed, stability, and user engagement."
          btntext="Learn more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="Digital Marketing"
          bigheadtwo="Grow Rapidly"
          serviceparatwo="Our marketing specialists use SEO, paid ads, and data-driven strategies to boost your visibility, generate leads, and keep your business top of mind for customers across California and beyond."
          btntwotxt="Learn more"
          serviceImgthree={serviceimg3}
          shortheadthree="Designing Services"
          bigheadthree="Look Flawless"
          serviceparathree="We design websites, interfaces, and branding materials that are visually engaging and user-centric. Every design is built to align with your brand story and improve digital experiences."
          btnthreetxt="Learn more"
        />

        <WordPressPerformanceSection
          reverse
          minihead="About Us:"
          miniheadclass="shorttop-head"
          secTitle2="Power, Control, and Flexibility"
          secTitle3="in One Place"
          description="Our VPS and dedicated server solutions give you complete control over your hosting environment, without the restrictions of shared hosting. With dedicated resources, custom configurations, and full scalability, these setups are ideal for websites demanding reliability, security, and high-speed performance."
          TouchBtn="d-none"
          btntext="More About California Web Coders"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={aboutCompany}
        />

        <WordPressPerformanceSection
          reverse
          miniheadclass="shorttop-head"
          secTitle1="Take Control of Your"
          secTitle2="Website’s Performance"
          description="Your website deserves an infrastructure built to handle growth and complexity. Our VPS and dedicated hosting plans are designed to meet business demands without limits."
          descriptiontwo="Enjoy complete control, lightning-fast speed, and high security with servers optimized by our expert engineers. Whether you’re running an eCommerce platform or a custom-built application, we deliver hosting that powers performance."
          TouchBtn="d-none"
          btntext="Get Your Own VPS"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={reliablehosting}
        />

        <section className="vps-dedication-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="web-hosting-head">
                  <h6>VPS & Dedication</h6>
                  <h2>
                    What’s Included in Our <span>VPS & Dedicated Hosting</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <DomainChooseCard
                  cards={vpscardsData}
                  webHostingBox="vps-dedicated-box"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="vps-essential-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="vps-essential-txt">
                  <h2>
                    Where <span>VPS Hosting</span> is Essential
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <DomainCards domainCards={domainCardsData} />
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          secTitle="Your Website Deserves a Stronger Backbone"
          secDescription="Upgrade your infrastructure today with a VPS or dedicated server setup that delivers stability managed by California’s trusted web experts. Fill the form now!"
          btnText="Message Us"
        />
{/* 
        <SinglePricingPlan
          secTitle="Flexible VPS & Dedicated Hosting Packages"
          secDescription="Choose from our scalable pricing plans tailored for startups, growing businesses, and enterprise websites, offering predictable costs with exceptional performance value."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="Frequently Asked Questions for VPS & Dedicated Hosting"
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

export default VPSDedicatedServers;
