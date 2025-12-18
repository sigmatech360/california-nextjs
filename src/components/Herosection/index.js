import React from "react";
import "./index.css";

const HeroSection = (props) => {
  return (
    <section
      className={`HeroSection ${props.className}`}
      style={{ backgroundImage: `url(${props?.bgImage?.src})` }}
    >
      {props.innerBgLayer && <div className="innerBgLayer"></div>}
      <div className="container">
        <div className="row align-items-center justify-content-center flex-lg-row flex-column-reverse gap-lg-0 gap-4">
          <div className={`${props.leftCol || `col-lg-8`}`}>
            <div className="HeroSection-content">
              <h1
                data-aos="fade-right"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                {props?.title}
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props?.para}
              </p>
            </div>
          </div>

          <div className={`${props.rightCol || `col-lg-4`}`}>
            {props?.heroimg && (
              <div
                className="HeroSection-img"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                <img
                  src={props?.heroimg.src}
                  alt="Web Design"
                  className={`img-fluid`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
