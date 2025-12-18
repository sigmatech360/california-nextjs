import React, { useState } from "react";
import "./index.css";

import { MdEdit } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import { RiSeoFill } from "react-icons/ri";
import Link from 'next/link';
import FormModal from "../FormModal";

const webSolutionsData = [
  {
    id: 1,
    name: "Website Design And Development:",
    description:
      "We create fast, responsive websites that look amazing and perform flawlessly. Clean code, smart design, and smooth functionality ensure your site runs like a pro.",
    icon: <MdEdit />,
  },
  {
    id: 2,
    name: "Digital Marketing:",
    description:
      "Our digital marketing services help you attract, engage, and convert your ideal audience. Strategy meets creativity to drive growth, leads, and measurable business results.",
    icon: <CiMobile3 />,
  },
  {
    id: 3,
    name: "Social Media Marketing:",
    description:
      "We manage social media marketing for California brands that rely on it. From strategy to content and ads, we help grow your presence and build real customer relationships online.",
    icon: <MdOutlineComputer />,
  },
  {
    id: 4,
    name: "Logo Design:",
    description:
      "We design impactful, scalable logos for your brand. A strong logo design for website and beyond builds recognition, trust, and visual identity from day one.",
    icon: <RiToolsLine />,
  },
  {
    id: 5,
    name: "Search Engine Optimization:",
    description:
      "As a top SEO company in California, we help businesses rank higher with smart keyword strategies, technical optimization, and powerful, relevant content that drives traffic.",
    icon: <RiSeoFill />,
  },
  {
    id: 6,
    name: "Mobile App Development:",
    description:
      "We build smart mobile apps with sleek design, smooth performance, and strong backend support, offering mobile app development services that match your vision and business goals.",
    icon: <MdEdit />,
  },
];

const Designsolutions = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="Designsolutions">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <p className="para">What we do</p>

              <h2
                className="title"
                data-aos="fade-right"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                <span> Optimized Website Designs </span>For Peak Performance
              </h2>

              <p
                className="para2 mb-2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                The team at <span>California Web Coders,</span> does more than
                just crafting beautiful websites; we ensure that your web
                performance boosts your business! With collaborative efforts, we
                smartly design every element, every line of code, so that your
                business growth is never compromised.
              </p>

              <p
                className="para2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                And guess what? Our expertise doesn't end at web design. We
                offer digital marketing services, including SEO, Social Media
                Marketing, CMS development, and more personalized growth
                strategies tailored to your business.
              </p>
              <p
                className="para2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                Our primary goal is to combine a sleek, responsive website
                design with a marketing strategy that converts every visitor
                into a loyal customer.
              </p>
              <p
                className="para2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                From startups to established brands, we work closely with you to
                build a digital presence that reflects your voice and drives
                real results.
              </p>
              <p
                className="paratitle"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                Your website should work as hard as you do.
              </p>

              <p
                className="para2  mb-3"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                Contact us today for a free consultation and discover how our
                web design and digital marketing expertise can help your
                business grow to another level of success.
              </p>

              <button
                // href={"/get-intouch"}
                onClick={() => setShowModal(true)}
                className="freecons"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                Book Your FREE Consultation
              </button>
            </div>

            <div className="col-lg-6">
              {webSolutionsData.map((item, index) => (
                <div
                  className="solution d-flex mb-2"
                  key={index}
                  data-aos="fade-up"
                  // data-aos-duration="500"
                  data-aos-offset="50"
                >
                  <span>{item.icon}</span>{" "}
                  <span className=" ">
                    <h3 className="solution-heading">{item.name}</h3>
                    <p className="para3">{item.description}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}; 

export default Designsolutions;

