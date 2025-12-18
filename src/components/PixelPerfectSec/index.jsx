import React, { useState } from "react";
import NewsCard from "../NewsCard";
import { FaPhoneAlt, FaPhoneSquareAlt } from "react-icons/fa";
import Link from 'next/link';

const PixelPerfectSec = (props) => {
  return (
    <>
      <section className={props.pixelSec || "pixel-perfect-sec"}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pixel-perfect-head text-center mb-4">
                <h6  data-aos="fade-right" data-aos-duration="800" data-aos-delay="100" className={props.miniheadClass}>{props.minihead}</h6>
                <h2
                  data-aos="fade-up"
                  // data-aos-duration="500"
                  data-aos-offset="50"
                >
                  {props.secTitle}{" "}
                  {props.secTitleBlue && <span>{props.secTitleBlue}</span>}{" "}
                  {props.secTitle2 && props.secTitle2}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  {props.secDescription}
                </p>
              </div>
            </div>
            {props.projectsData.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="50"
                onClick={() => props.onImageClick(index, props.projectsData)}
              >
                <NewsCard
                  image={item.image}
                  imgClass={props.imgClass}
                  description={item.description}
                />
              </div>
            ))}
            <div className="col-md-12">
              <div className="justify-content-center d-flex flex-wrap gap-4 pixel-button-div">
                <Link href={"/get-intouch"} className="viewbtn">
                  {props.btnText || "Request A Quote"}
                </Link>
                <div className="d-flex align-items-center gap-2 packages-number">
                  <FaPhoneAlt className="callicon " />
                  <a
                    href="tel:+16193352364"
                    className="para4 mb-0  align-items-center"
                  >
                    +1 (619) 335-2364
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PixelPerfectSec;

