'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import bannerBgImage from "../../Assets/designingpage-images/herobanner.webp";
import aboutCompany from "../../Assets/designingpage-images/aboutcompany.webp";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import FrequentQuestions from "../../components/FrequentQuestions";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import pixleperfectimg1 from "../../Assets/designingpage-images/AngelicaLarrotta.webp";
import pixleperfectimg2 from "../../Assets/designingpage-images/BobbyGilbreth.webp";
import pixleperfectimg3 from "../../Assets/designingpage-images/CindyManning.webp";
import pixleperfectimg4 from "../../Assets/designingpage-images/LoneRock-Landscaping.webp";
import pixleperfectimg5 from "../../Assets/designingpage-images/EricCorwinSOLAR.webp";
import pixleperfectimg6 from "../../Assets/designingpage-images/diabolical-wear.webp";
import Ourservices from "../../components/ourservices/Index";
import letsworktogether from "../../Assets/designingpage-images/letsworktogether.webp";
import hensfin from "../../Assets/designingpage-images/hensfin.webp";
import Lightbox from "yet-another-react-lightbox";

export const faqHomeData = [
  {
    id: 1,
    question: "1. How Much Does Data Analytics Cost?",
    answer:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
  },
  {
    id: 2,
    question: "2. What Kind Of Data Is Needed For Analysis?",
    answer:
      "Yes, we use SEO-friendly web design techniques to ensure smooth transitions and preserve your existing rankings.",
  },
  {
    id: 3,
    question: "3. Dedicated IT Solution?",
    answer:
      "Absolutely. Our mobile app developers in California build fully customized features tailored to your business goals and user needs.",
  },
  {
    id: 4,
    question: "4. IT Industry Expertise?",
    answer:
      "Most websites are completed in 3–6 weeks, depending on scope and complexity. We prioritize quality with fast turnaround.",
  },
  {
    id: 5,
    question: "5. IT Industry Expertise?",
    answer:
      "Yes, all logo packages include flexible files, full ownership rights, and multiple rounds of revisions.",
  },
  {
    id: 6,
    question: "6. What Kind Of Data Is Needed For Analysis?",
    answer:
      "We focus on long-term results through data-driven strategy, content optimization, and tailored keyword targeting, not just temporary ranking boosts.",
  },
  {
    id: 7,
    question: "7. Will I Need A Credit Check?",
    answer:
      "Yes, we offer post-launch support plans including updates, troubleshooting, and ongoing optimization for your site or app.",
  },
  {
    id: 8,
    question: "8. What Kind Of Data Is Needed For Analysis?",
    answer:
      "Yes, definitely, we build CMS interfaces that are intuitive and easy to manage, with no coding skills required.",
  },
  {
    id: 9,
    question: "9. Can you match the design with my existing branding?",
    answer:
      "Yes, we ensure consistency by aligning every design element with your current branding, tone, and visual identity.",
  },
  {
    id: 10,
    question:
      "10. Do you offer scalable pricing for startups or small businesses?",
    answer:
      "Yes, we do. Our pricing plans are flexible and scalable to fit early-stage budgets while still delivering expert results.",
  },
];

const Designing = () => {
  const webDesignPortfolioData = [
    {
      id: 1,
      image: pixleperfectimg1,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 2,
      image: pixleperfectimg2,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 3,
      image: pixleperfectimg3,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 4,
      image: pixleperfectimg4,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 5,
      image: pixleperfectimg5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 6,
      image: pixleperfectimg6,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
    <Layout>
      <ServiceBanner
        bgImage={bannerBgImage}
        btnClass="theme-light mt-3"
        title="Creative Designs That Inspire & Convert"
        description="Reach billions of users worldwide with scalable, secure, and high-performing Android applications tailored to your business needs."
        btnText="View Portfolio"
      />

      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="We’re Awards Winning"
        secTitle2="IT Solutions"
        secTitle3="Agency"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listItems={["Professional IT Solutions ", "Experience Team Members"]}
        image={aboutCompany}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <Ourservices
        serviceminihead="Our Services"
        serviceMainHead="Our"
        serviceEndName="Designing Services"
        allservicelink="View All Services"
        serviceCountOne="01"
        firstServiceName="Logo Design"
        firstServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountTwo="02"
        secondServiceName="Website Design"
        secondServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountThird="03"
        thirdServiceName="Video Animation"
        thirdServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <PixelPerfectSec
        secTitle="Designs That Speak Louder Than Words"
        secDescription="Each design is uniquely crafted to suit the specific needs of every business. We strive to showcase and enhance the individuality of your brand. Explore some of our recent projects below."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <WordPressPerformanceSection
        reverse
        wordpresssecclass="letstogether-sec"
        miniheadclass="shorttop-head"
        secTitle1="Let’s Work Together"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        descriptiontwo="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={letsworktogether}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <WordPressPerformanceSection
        miniheadclass="shorttop-head"
        secTitle1="Why"
        secTitle2="Social Media"
        secTitle3="Marketing"
        description="One of the strengths of WordPress is that it is fully customisable. This means we can build bespoke websites tailored specifically to our client’s goals."
        descriptiontwo="Our WordPress developers ensure that your design and website functionality works across all devices, allowing you to stand out from the competition."
        image={hensfin}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="See More Benefits"
        learnmorebtn="aboutus-call"
      />

      <ContactForm
        secTitle="Ready to chat about your project?"
        secDescription="Get in touch today to see how we can help your business achieve its full potential online."
        btnText="Let’s Chat"
      />

      <SinglePricingPlan
        secTitle="That Fit All Budget Types"
        secDescription="No more budget issues, get your hands on the most Affordable Website Design Services online."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      />

      <FrequentQuestions
        secTitle="You Will Find Our Client's Frequent Questions"
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
  );
};

export default Designing;
