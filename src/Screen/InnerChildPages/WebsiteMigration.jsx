"use client";

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";

import ServiceBanner from "../../components/ServiceBanner";
import herobanner from "../../Assets/newChildPagesAssets/webmigration/web-migrate-herobanner.webp";
import aboutimg from "../../Assets/newChildPagesAssets/webmigration/web-migrate-about.webp";
import serviceimg1 from "../../Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "../../Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "../../Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
import buydomain from "../../Assets/newChildPagesAssets/webmigration/buy-domain.webp";
import findhosting from "../../Assets/newChildPagesAssets/webmigration/find-hosting.webp";
import professionalemail from "../../Assets/newChildPagesAssets/webmigration/professional-email.webp";
import migratemoniter from "../../Assets/newChildPagesAssets/webmigration/migrate-moniter.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainService from "../../components/DomainService";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import DomainSearchPrice from "../../components/DomainSearchPrice";
import DomainPricingCards from "../../components/DomainPricingCards";

export const faqHomeData = [
  {
    id: 1,
    question: "1. What is website migration?",
    answer:
      "Website migration is the process of moving your site to a new server, domain, or platform while preserving all data, functionality, and SEO performance.",
  },
  {
    id: 2,
    question: "2. How long does a website migration take?",
    answer:
      "Depending on the website size and complexity, migrations typically take 24 to 72 hours for complete testing and optimization.",
  },
  {
    id: 3,
    question: "3. Will my website experience downtime?",
    answer:
      "No, our website migration services ensure zero downtime and full accessibility throughout the process.",
  },
  {
    id: 4,
    question: "4. Can I migrate from WordPress to Shopify or Wix?",
    answer:
      "Yes, we handle migrations between all major platforms, including WordPress, Shopify, Squarespace, and Wix, while maintaining data and design integrity.",
  },
  {
    id: 5,
    question: "5. What happens to my SEO during migration?",
    answer:
      "We preserve URLs, meta tags, and redirects to retain your SEO rankings and search visibility after migration.",
  },
  {
    id: 6,
    question: "6. Do you help with DNS and hosting setup?",
    answer:
      "Yes, our team manages DNS updates, hosting configuration, and server optimization post-migration.",
  },
  {
    id: 7,
    question: "7. What if something breaks during migration?",
    answer:
      "Our staging and testing process ensures every issue is resolved before launch. You’ll never go live with broken elements.",
  },
  {
    id: 8,
    question: "8. Can you migrate eCommerce websites?",
    answer:
      "Yes, we migrate stores with product data, customer records, and transactions, keeping every detail secure and intact.",
  },
  {
    id: 9,
    question: "9. Do I need technical knowledge for migration?",
    answer:
      "No, our experts handle everything, from planning and setup to redirects and post-launch testing.",
  },
  {
    id: 10,
    question: "10. Why choose California Web Coders for website migration?",
    answer:
      "Because we ensure safe transfers, no data loss, and 100% uptime, supported by experts who treat your website like their own.",
  },
];

const WebsiteMigration = () => {
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
          title="Move Your Website Without Losing Momentum"
          description="Migrate your website securely and reliably, ensuring zero errors, no downtime, and no data loss, while giving you complete peace of mind throughout the entire process."
          btnText="Start Your Web Migration"
        />

        <DomainSearchPrice />

        <WordPressPerformanceSection
          reverse
          minihead="About Us"
          miniheadclass="shorttop-head"
          secTitle1="Safe and Smooth"
          secTitle2="Migration"
          description="At California Web Coders, our website migration services ensure every file, database, and setting moves securely from one server or platform to another. We manage technical details, preserve SEO rankings, and keep your site online throughout the process, so you never lose visibility, traffic, or trust."
          descriptiontwo="Why Businesses Choose CWC:"
          landingList="landing-design-points domain-register-list manage-web-list"
          landingListItems={[
            "Zero Downtime Guarantee",
            "Data Protection",
            "Full SEO Retention",
            "Cross-Platform Expertise",
            "Performance Optimization",
            "End-to-End Support",
          ]}
          TouchBtn="d-none"
          btntext="Start Your Migration Today"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 (619) 335-2364"
          image={aboutimg}
        />

        <DomainService
          domainserviceminihead="More of Our Services:"
          domainservicelargehead="Explore Related Hosting and Web Services"
          serviceImgone={serviceimg1}
          shorthead="Domain Transfer"
          bighead="Same Name, Different Place"
          servicepara="We handle domain transfers securely, ensuring full ownership, uninterrupted accessibility, and zero disruptions during the process. Our experts protect your brand reputation, update DNS configurations, and verify proper linkage across platforms."
          btntext="Learn more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="VPS & Dedicated Hosting"
          bigheadtwo="Secure VPS Plans"
          serviceparatwo="Upgrade your hosting experience with powerful VPS and dedicated server solutions. We offer optimized environments, custom configurations, and secure scalability, ensuring your website performs efficiently even during high-traffic periods."
          btntwotxt="Learn more"
          serviceImgthree={serviceimg3}
          shortheadthree="Server Management"
          bigheadthree="Stable Server Management"
          serviceparathree="Our server management services cover configuration, monitoring, and maintenance to ensure stable uptime and performance. We handle patching, backups, and troubleshooting, giving you total confidence in your website’s infrastructure and reliability."
          btnthreetxt="Learn more"
        />

        <DomainPricingCards />

        <section className="web-migration-proceess">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="web-migrate-head">
                  <h3>
                    Website Migration Process at{" "}
                    <span>California Web Coders</span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-12">
                <WordPressPerformanceSection
                  reverse
                  minihead="Step 1:"
                  miniheadclass="shorttop-head"
                  secTitle1="Pre-Migration"
                  secTitle2="Audit & Planning"
                  description="Before we begin, our team conducts a comprehensive audit of your website’s current setup, including databases, configurations, and SEO structure. We identify potential issues and build a migration roadmap that minimizes risk and ensures nothing gets lost."
                  TouchBtn="d-none"
                  btntext="Get a Pre-Migration Check"
                  aboutbtnlink="/get-intouch"
                  learnmorebtn="aboutus-call"
                  image={buydomain}
                />

                <WordPressPerformanceSection
                  minihead="Step 2:"
                  miniheadclass="shorttop-head"
                  secTitle1="Setup & Staging"
                  description="We prepare a secure staging environment to test the migration before going live. Our team ensures every plugin, theme, and functionality works perfectly, maintaining both performance and user experience during the transition."
                  TouchBtn="d-none"
                  btntext="Begin Your Setup"
                  aboutbtnlink="/get-intouch"
                  learnmorebtn="aboutus-call"
                  image={findhosting}
                />

                <WordPressPerformanceSection
                  reverse
                  minihead="Step 3:"
                  miniheadclass="shorttop-head"
                  secTitle1="Launch & Redirect"
                  description="Once tested, we launch your new setup seamlessly. Our experts set up 301 redirects, verify links, and optimize DNS configurations to maintain SEO rankings and prevent any accessibility interruptions."
                  TouchBtn="d-none"
                  btntext="Launch With Us"
                  aboutbtnlink="/get-intouch"
                  learnmorebtn="aboutus-call"
                  image={professionalemail}
                />

                <WordPressPerformanceSection
                  minihead="Step 4:"
                  miniheadclass="shorttop-head"
                  secTitle1="Post-Migration"
                  secTitle2="Monitoring"
                  description="After the migration, our job isn’t done. We monitor website uptime, speed, and SEO performance for several days to ensure stability, reliability, and flawless functionality, long after the move is complete."
                  TouchBtn="d-none"
                  btntext="Start Website Migration Now"
                  aboutbtnlink="/get-intouch"
                  learnmorebtn="aboutus-call"
                  image={migratemoniter}
                />
              </div>
            </div>
          </div>
        </section>

        <ContactForm
          secTitle="Ready to Migrate Without Losing Your Authority?"
          secDescription="Let our experts handle your website migration safely and efficiently. Fill out the form below to start your seamless transfer today."
          btnText="Migrate With Confidence"
        />

        {/* <SinglePricingPlan
          secTitle="Flexible"
          secTitleBlue="Migration Options"
          secTitleEnd="for Every Business"
          secDescription="We offer transparent, scalable pricing based on your platform, data volume, and hosting needs, ensuring reliable migration solutions at fair, predictable costs."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <FrequentQuestions
          secTitle="Frequently Asked Questions for Website Migration"
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

export default WebsiteMigration;
