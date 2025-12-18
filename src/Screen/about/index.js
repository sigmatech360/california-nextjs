'use client';

import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import aboutheroimg from "../../Assets/aboutheroimg.webp";
import ItSolutions from "../../components/itsolutions";
import WhychoseUs from "../../components/choseus";
import Testimonial from "../../components/Testimonials";
const About = () => {
  return (
    <>

      <Layout>
        <section className="about-banner">
          <div className="container">
            <div className="row align-items-center flex-lg-row flex-column-reverse">
              <div className="col-lg-6">
                <h1
                  className="about-title"
                  data-aos="fade-right"
                  // data-aos-duration="500"
                  data-aos-offset="50"
                >
                  About <br /> <span>California Web Coders</span>
                </h1>
                <p
                  className="about-subtitle"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  Providing innovative and high-performing web design and
                  marketing services that give businesses a strong digital
                  presence.
                </p>
              </div>

              <div className="col-lg-6">
                <div
                  className=""
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  <img
                    src={aboutheroimg.src}
                    alt="Laptop"
                    className="img-fluid main-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ItSolutions />

        <WhychoseUs />

        <Testimonial />
      </Layout>
    </>
  );
};

export default About;
