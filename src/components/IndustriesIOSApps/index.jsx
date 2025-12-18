import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const IndustriesIOSApps = ({
  sectionTitle,
  highlightText,
  sectionTitleEnd,
  androidappicon,
  description,
  features,
  image,
}) => {
  return (
    <section className="iundustries-ios-apps">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div
            className="col-lg-7"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <div className="industries-iosapp-txt">
              <h4
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {sectionTitle} <span>{highlightText}</span> {sectionTitleEnd} 
              </h4>

              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {description}
              </p>

              <ul
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                {features?.map((item, index) => (
                  <li
                    key={index}
                    data-aos-delay={index * 150 + 300}
                  >
                    <span className={androidappicon || "ios-service-icon"}>{item.icon}</span>
                    <span className="ios-arrow-icon">
                      <HiOutlineArrowLongRight />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="col-lg-5"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <div
              className="ios-app-img"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img src={image.src} alt="App showcase" width="526" height="580" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesIOSApps;
