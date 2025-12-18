'use client';

import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import videoEditBanner from "../../Assets/designingpage-images/videoediting/videoeditingbanner.webp";
import videoEditAbout from "../../Assets/designingpage-images/videoediting/videoeditabout.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Ourservices from "../../components/ourservices/Index";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import pixleperfectimg1 from "../../Assets/designingpage-images/videoediting/videoeditone.webp";
import pixleperfectimg2 from "../../Assets/designingpage-images/videoediting/videoedittwo.webp";
import pixleperfectimg3 from "../../Assets/designingpage-images/videoediting/videoeditthree.webp";
import pixleperfectimg4 from "../../Assets/designingpage-images/videoediting/videoeditfour.webp";
import pixleperfectimg5 from "../../Assets/designingpage-images/videoediting/videoeditfive.webp";
import pixleperfectimg6 from "../../Assets/designingpage-images/videoediting/videoeditsix.webp";
import readyEdit from "../../Assets/designingpage-images/videoediting/elevateedit.webp";
import editclienttrust from "../../Assets/designingpage-images/videoediting/clienttrustvideoedit.webp";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Designing";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";

const VideoEditing = () => {
  const webDesignPortfolioData = [
    {
      id: 1,
      image: pixleperfectimg1,
    },
    {
      id: 2,
      image: pixleperfectimg2,
    },
    {
      id: 3,
      image: pixleperfectimg3,
    },
    {
      id: 4,
      image: pixleperfectimg4,
    },
    {
      id: 5,
      image: pixleperfectimg5,
    },
    {
      id: 6,
      image: pixleperfectimg6,
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
        leftCol="col-lg-6"
        bgImage={videoEditBanner}
        btnClass="theme-light mt-3"
        title="Professional Video Editing That Tells Your Story"
        description="From raw footage to polished production, California Web Coders transforms your videos into captivating, high-quality content ready for any platform."
        btnText="Get A Free Editing Quote"
      />

      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Creative Animations Built by Experts"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        image={videoEditAbout}
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <Ourservices
        serviceminihead="Our Services"
        serviceEndName="Video Editing "
        serviceMainHeadcom="Services We Offer"
        allservicelink="View All Services"
        serviceCountOne="01"
        firstServiceName="Corporate Video Editing"
        firstServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountTwo="02"
        secondServiceName="Ad Editing"
        secondServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountThird="03"
        thirdServiceName="Social Media Video Edits"
        thirdServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <PixelPerfectSec
        secTitle="Recent Video Editing Projects"
        secDescription="Take a look at our latest edits—each project is a testament to our precision and storytelling skills."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <WordPressPerformanceSection
        reverse
        wordpresssecclass="letstogether-sec"
        miniheadclass="shorttop-head"
        secTitle1="Ready to Elevate Your Footage?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={readyEdit}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <WordPressPerformanceSection
        miniheadclass="shorttop-head"
        secTitle1="Why"
        secTitle2="Clients Trust"
        secTitle3="Our Video Editing"
        description="A landing page isn’t just another web page—it’s your first impression, your sales pitch, and your conversion funnel all in one."
        designpointheadline="At California Web Coders, we focus on:"
        landingList="landing-design-points"
        landingListItems={[
          "Experienced Editors",
          "Story-Driven Approach",
          "Quick Turnaround",
          "Full Post-Production Support",
        ]}
        image={editclienttrust}
        TouchBtn="d-none"
        btntext="Let’s Create Something Amazing"
        learnmorebtn="aboutus-call"
      />

      <ContactForm
        secTitle="Discuss Your Video Editing Needs"
        secDescription="Tell us about your project and get a free consultation. We’ll recommend the right editing style and timeline for your goals."
      />

      <SinglePricingPlan
        secTitle="Flexible Video Editing Packages"
        secDescription="Every project is unique. Our pricing is transparent and tailored to your needs. Choose a package or request a custom quote."
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

export default VideoEditing;
