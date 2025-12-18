"use client";

import React from 'react'
import Layout from '../../components/layout'
import LocationHeroBanner from '../../components/LocationHeroBanner'
import BookConsultation from '../../components/BookConsultation'
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection'
import LocationExpertise from '../../components/LocationExpertise'
import SinglePricingPlan from '../../components/SinglePricingPlan'
import { wordpressWebsitePricingPlansData } from '../../data'
import LocalSpecialist from '../../components/LocalSpecialist'
import LocationContact from '../../components/LocationContact'
import LocationFaqs from '../../components/LocationFaqs'
import LocationSupport from '../../components/LocationSupport/Index'
import support1 from "../../Assets/locationpages/mba-los-angeles/guarrantee.svg";
import support2 from "../../Assets/locationpages/mba-los-angeles/support.svg";
import support3 from "../../Assets/locationpages/mba-los-angeles/ownership.svg";
import support4 from "../../Assets/locationpages/mba-los-angeles/money.svg";
import support5 from "../../Assets/locationpages/mba-los-angeles/Pentool.svg";
import expertise1 from "../../Assets/locationpages/domain-registeration-location/expertise1.svg";
import expertise2 from "../../Assets/locationpages/domain-registeration-location/expertise2.svg";
import expertise3 from "../../Assets/locationpages/domain-registeration-location/expertise3.svg";
import herobanner from "../../Assets/locationpages/domain-registeration-location/herobannerbg.webp";
import chooseimg from "../../Assets/locationpages/domain-transfer-location/aboutimg.webp";



const DomainTransferLA = () => {


  const expertise = [
    {
      img: expertise1,
      title: "Local Expert Guidance",
      desc: "Local experts guide you through choosing and securing the perfect domain name for your business.",
    },
    {
      img: expertise2,
      title: "Fast and Easy Setup",
      desc: "Fast approval and smooth setup so your domain is ready to use without delays.",
    },
    {
      img: expertise3,
      title: "Strong Domain Protection",
      desc: "Strong security measures protect your domain ownership from risks and unauthorized access.",
    },
  ];


    const specialData = [
      {
        header: "Local Specialists Who Understand Your Market",
        content:
          "We offer support from local domain specialists who understand Los Angeles businesses, helping you choose a name that matches your brand, improves online visibility and supports long-term growth. This ensures your domain name registration Los Angeles, CA feels simple and stress-free.",
      },
      {
        header: "Quick and Easy Domain Purchase",
        content:
          "Our platform makes it easy to buy the domain name Los Angeles with clear steps and no confusion. You receive instant confirmation and simple control settings, helping you move forward quickly without delays. ",
      },
      {
        header: "Reliable and Secure Domain Ownership",
        content:
          "We are one of the trusted domain providers in Los Angeles, giving you stable, secure and reliable service. Your domain stays protected and always accessible. This helps your business maintain a strong presence and avoids issues that may affect your online performance.",
      },
      {
        header: "Clear Pricing and Full Value",
        content:
          "We keep pricing clear and honest, so you know exactly what you are paying for. Whether you need basic or advanced options, you get full value and a domain that supports your goals. It makes managing your domain simple and worry-free.",
      },
    ];

    const faqsData = [
    {
      header:
        "How do I register a domain in Los Angeles?",
      content:
        "You can register a domain by choosing a name, checking availability and completing the purchase. We guide you through each step and ensure your domain is activated smoothly.",
    },
    {
      header: "How long does domain registration take?",
      content:
        "Most domains activate within minutes after payment. Our system processes your request quickly, giving you fast access so you can start building your website right away.",
    },
    {
      header: "Can you help me choose the right domain name?",
      content:
        "Yes, our local team helps you select a clear and memorable name that fits your business. We make sure it supports your branding and future online growth.",
    },
    {
      header:
        "Are your domain registration services secure?",
      content:
        "Yes, we use strong security protections to keep your domain safe from unauthorized changes. Your ownership stays protected, and you get full control through your account settings.  ",
    },
    {
      header:
        "Can I transfer my existing domain to California Web Coders?",
      content:
        "Yes, you can transfer your domain easily. We handle the technical steps, keep the process smooth and ensure your domain stays active during the transfer.",
    },
     {
      header:
        "Do you offer customer support after registration?",
      content:
        "Yes, we provide continuous support for any domain questions. Whether you need help managing settings or solving issues, our team is available to guide you with simple instructions.",
    },
  ];


    const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed" },
    { image: support2, title: "24/7 Customer Support" },
    { image: support3, title: "Ownership Rights" },
    { image: support4, title: "Money Back Guarantee" },
    { image: support5, title: "Industry Specific Experts" },
  ];

  return (
    <>
      <Layout>
        <LocationHeroBanner
          secClass="mad-la-herobanner"
          bgImage={herobanner}
          sectitle="Easily Register Your Domain in Los Angeles with Us! "
          secPara="Get fast and reliable Domain Registration Los Angeles services with California Web Coders. Because we are here to help businesses in LA secure powerful and relevant domain names for their brand. We work with local experts across California that understand exactly who to target and where to grow your business."
          btntxt="Talk to Us"
        />
        <BookConsultation />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us?"
          miniheadclass="shorttop-head"
          secTitle1="Why Us For Domain Registration"
          secTitle2="in Los Angeles, CA?"
          description="We provide trusted domain registration services in Los Angeles. Each step of our registration is planned thoroughly to bring you ease and a hassle-free kickstart of your digital plan. Our execution includes expertise from local web experts who understand the business requirements in each region of Los Angeles, California. "
          TouchBtn="d-none"
          btntext="Get Your Domain with Us"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={chooseimg}
        />

         <LocationExpertise
          shortTopHead="Our Edge"
          mainHead="Standing Out Among Your Competitors"
          mainPara1="We offer quick registration, expert help and strong protection for your Los Angeles domain."
          expertiseItems={expertise}
        />

    

        {/* <SinglePricingPlan
          secTitle="Find the"
          secTitleBlue="Perfect"
          secTitleEnd="Package"
          secDescription="IChoose a plan that fits your goals and helps you register a domain easily."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

       <LocalSpecialist
        shortHeading="Register with Us"
          mainHeading="The Advantage of Securing Your Domain in Los Angeles with Us"
          description="When you register a domain in Los Angeles, you want a partner who understands your local market. We offer guidance, support and fast processing so you can get your domain and start building your online presence with confidence and convenience."
          expertise={specialData}
        />

        <LocationContact
          miniHead="Contact Us"
          mainHead="Ready to Get Your Own Domain in Los Angeles?"
          secPara="Reach out to our team for quick help and easy domain guidance. Fill out the form, and we will contact you soon."
        />

        <LocationFaqs
          miniHead="FAQs"
          mainHead="Got Related Questions?"
          mainHeadSpan="We Are Here to Answer Everything!"
          secPara="We are here to answer your questions and clear any concerns you may have. Our simple explanations help you understand everything about registering and managing your domain in Los Angeles."
          faqs={faqsData}
        />

        <LocationSupport
          minihead="Secure Your Domain"
          mainheadSpan="What are You Waiting For?"
          mainhead=" Let’s Collaborate! "
          mainPara="Start building your online identity today with trusted Domain Registration Los Angeles services from California Web Coders."
          supportCards={supportCardsData}
        />

   
      </Layout>
    </>
  )
}

export default DomainTransferLA