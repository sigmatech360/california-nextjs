'use client';


import React, { useState } from "react";
import "./index.css";

// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

import Layout from "../../components/layout";
import ourworkheroimg from "../../Assets/ourworkheroimg.webp";

import pixleperfectimg1 from "../../Assets/ourWork-pixle-perfect-img1.webp";
import pixleperfectimg2 from "../../Assets/ourWork-pixle-perfect-img2.webp";
import pixleperfectimg3 from "../../Assets/ourWork-pixle-perfect-img3.webp";
import pixleperfectimg4 from "../../Assets/ourWork-pixle-perfect-img4.webp";
import pixleperfectimg5 from "../../Assets/ourWork-pixle-perfect-img5.webp";
import pixleperfectimg6 from "../../Assets/ourWork-pixle-perfect-img6.webp";
import pixleperfectimg7 from "../../Assets/ourWork-pixle-perfect-img7.webp";
import pixleperfectimg8 from "../../Assets/ourWork-pixle-perfect-img8.webp";
import pixleperfectimg9 from "../../Assets/ourWork-pixle-perfect-img9.webp";
import pixleperfectimg10 from "../../Assets/ourWork-pixle-perfect-img10.webp";
import pixleperfectimg11 from "../../Assets/ourWork-pixle-perfect-img11.webp";
import pixleperfectimg12 from "../../Assets/ourWork-pixle-perfect-img12.webp";
import pixleperfectimg13 from "../../Assets/ourWork-pixle-perfect-img13.webp";
import pixleperfectimg14 from "../../Assets/ourWork-pixle-perfect-img14.webp";
import pixleperfectimg15 from "../../Assets/ourWork-pixle-perfect-img15.webp";

import PortfolioTabs from "../../components/PortfolioTabs";


const featuredProjectData = [
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
  {
    id: 7,
    image: pixleperfectimg7,
  },
  {
    id: 8,
    image: pixleperfectimg8,
  },
  {
    id: 9,
    image: pixleperfectimg9,
  },
  {
    id: 10,
    image: pixleperfectimg10,
  },
  {
    id: 11,
    image: pixleperfectimg11,
  },
  {
    id: 12,
    image: pixleperfectimg12,
  },
  {
    id: 13,
    image: pixleperfectimg13,
  },
  {
    id: 14,
    image: pixleperfectimg14,
  },
  {
    id: 15,
    image: pixleperfectimg15,
  },
];

const OurWork = () => {
  return (
    <>
      <Layout>
        <section className="OurWork">
          <div className="container">
            <div className="row align-items-center flex-lg-row flex-column-reverse gap-lg-0 gap-4">
              <div className="col-xl-4 col-lg-5">
                <div className="OurWork-content">
                  <h1
                    className="title "
                    data-aos="fade-right"
                    // data-aos-duration="500"
                    data-aos-offset="50"
                  >
                    Our work
                  </h1>
                  <p
                    className=""
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-offset="50"
                  >
                    From startups to enterprises, our work showcases powerful
                    websites built with purpose, precision, and performance at
                    every digital touchpoint.
                  </p>
                </div>
              </div>

              <div className="col-xl-8 col-lg-7">
                <div
                  className="OurWork-image"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  <img
                    src={ourworkheroimg.src}
                    alt="Web Design"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pixel-perfect-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="pixel-perfect-head text-center">
                  <h2
                    data-aos="fade-up"
                    // data-aos-duration="500"
                    data-aos-offset="50"
                  > 
                    A Glimpse Into Our <span>Expertise</span>
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="50"
                  >
                    At California Web Coders, we bring visions to life with
                    innovative web design, custom software development, and
                    seamless digital solutions. From sleek eCommerce platforms
                    to powerful business apps, our portfolio showcases diverse
                    projects tailored to meet our clients' unique needs. Every
                    project reflects our commitment to creativity, quality, and
                    cutting-edge technology.
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <PortfolioTabs />
              </div>

              {/* <div className="col-md-12 mt-3">
              <div className="justify-content-center d-flex flex-wrap gap-4">
                <Link href={"/web-design"} className="viewbtn">View All Projects</Link>
              </div>
            </div> */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default OurWork;
