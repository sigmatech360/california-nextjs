import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import FormModal from "../FormModal";

const BeautifullAppDesign = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="beautiful-app-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">
            <div className="beautiful-app-txt">
              <h2 data-aos="fade-up" data-aos-duration="800"   data-aos-delay="100">
                App Interfaces that Feel Effortless
             </h2>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                Our iOS apps feature intuitive, user-friendly interfaces built
                for interaction and conversion. Every element from layout to
                micro-animation is designed for simplicity, elegance, and easy
                navigation. We focus on fluid performance, accessibility, and
                user enjoyment to keep your audience engaged and loyal.
              </p>
              <div className="beautifull-app-flex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <button onClick={() => setShowModal(true)} data-aos="zoom-in" data-aos-delay="500">
                  Get App Design Quote
                </button>
                <div className="about-number about-number-anchor" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                  <a href={`tel:${props.phoneNumberLink || "+16193352364"}`}><span><FaPhoneAlt /></span>
                  <p>+1 (619) 335-2364</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
  );
};

export default BeautifullAppDesign;
