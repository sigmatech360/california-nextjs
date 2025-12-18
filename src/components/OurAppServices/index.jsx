import React from "react";

const OurAppServices = ({
  minihead,
  ourSectitleStart,
  ourSecTitleBlue,
  ourSecTitle,
  miniPara,
  secClass,
  OurServiceBtn,
  appServices = [],
}) => {
  return (
    <section className={secClass || "our-app-services"}>
      <div className="container">
        {/* Section Heading */}
        <div className="row align-items-center">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <div className="our-appservice-txt">
              <h6
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {minihead}
              </h6>
              <h4
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {ourSectitleStart} <span>{ourSecTitleBlue}</span>{" "}
                {ourSecTitle}
              </h4>
            </div>
          </div>

          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <div className="our-appservice-txt">
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                {miniPara}
              </p>
              {/* <button>{OurServiceBtn}</button> */}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row mt-4">
          {appServices.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={index}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={index * 150} 
              data-aos-offset="50"
            >
              <div className="our-appservice-box">
                <span>{service.icon}</span>
                <h5>{service.appServiceHead}</h5>
                <p>{service.appServicePara}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAppServices;
