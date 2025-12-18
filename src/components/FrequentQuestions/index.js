"use client";

import React, { useState } from "react";
import "./index.css";

import smartcard from "../../Assets/smart.svg";
import cartified from "../../Assets/Certified.svg";
import prfreesional from "../../Assets/Professiona.svg";
import primium from "../../Assets/Premium.svg";

import Accordion from "react-bootstrap/Accordion";

const faqData = [
  {
    id: 1,
    question: "1. What industries does California Web Coders specialize in?",
    answer:
      "We specialize in eCommerce, tech startups, real estate, and service-based businesses seeking high-performance digital solutions.",
  },
  {
    id: 2,
    question:
      "2. Can you redesign my existing website without losing SEO rankings?",
    answer:
      "Yes, we use SEO-friendly web design techniques to ensure smooth transitions and preserve your existing rankings.",
  },
  {
    id: 3,
    question: "3. Do you offer custom features for mobile apps?",
    answer:
      "Absolutely. Our mobile app developers in California build fully customized features tailored to your business goals and user needs.",
  },
  {
    id: 4,
    question: "4. How long does a typical web project take?",
    answer:
      "Most websites are completed in 3–6 weeks, depending on scope and complexity. We prioritize quality with fast turnaround.",
  },
  {
    id: 5,
    question: "5. Do your logo designs include source files and revisions?",
    answer:
      "Yes, all logo packages include flexible files, full ownership rights, and multiple rounds of revisions.",
  },
  {
    id: 6,
    question:
      "6. What makes your SEO services different from others in California?",
    answer:
      "We focus on long-term results through data-driven strategy, content optimization, and tailored keyword targeting, not just temporary ranking boosts.",
  },
  {
    id: 7,
    question: "7. Do you provide support after launch?",
    answer:
      "Yes, we offer post-launch support plans including updates, troubleshooting, and ongoing optimization for your site or app.",
  },
  {
    id: 8,
    question: "8. Is your CMS development beginner-friendly?",
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

const   FrequentQuestions = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [activeTab, setActiveTab] = useState("Basic");

  const [faqState, setFaqState] = useState(props.faqData);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className={props.faqsSecClass || "faqs-sec"} id="cwc-faq">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-lg-6">
              <div className="sec-head">
                <p className="sec-head-tag colorBlue">FAQS</p>
                <h2
                  data-aos="fade-right"
                  // data-aos-duration="500"
                  data-aos-offset="50"
                >
                  {props.secTitle ||
                    `Curious About Our Services? We Are Here To Answer!`}
                </h2>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="faqs-tabs-btns d-flex justify-content-evenly">
                <button className="faqs-tabs-btn">Basic</button>
                <button className="faqs-tabs-btn">Service</button>
                <button className="faqs-tabs-btn">Price</button>
                <button className="faqs-tabs-btn">Benefits</button>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Accordion defaultActiveKey="0">
                {faqState
                  ?.slice(0, Math.ceil(faqState.length / 2))
                  .map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={item.id}>
                      <Accordion.Header as="h4">
                        {item.question}
                      </Accordion.Header>
                      {/* <h4 className="accordion-header">
                        <Accordion.Button as="div" className="w-100 text-start">
                          {item.question}
                        </Accordion.Button>
                      </h4> */}
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>
            </div>

            <div className="col-lg-6">
              <Accordion>
                {faqState
                  ?.slice(Math.ceil(faqState.length / 2))
                  .map((item, index) => (
                    <Accordion.Item
                      eventKey={(index + faqState.length / 2).toString()}
                      key={item.id}
                    >
                      <Accordion.Header as="h4">
                        {item.question}
                      </Accordion.Header>
                      {/* <h4 className="accordion-header">
                        <Accordion.Button as="div" className="w-100 text-start">
                          {item.question}
                        </Accordion.Button>
                      </h4> */}
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrequentQuestions;
