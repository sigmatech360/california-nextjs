import React from "react";

const WhyItMatters = (props) => {
  return (
    <section className="WhyItMattersSec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="secHead">
              <h3
                className="secTitle"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.secTitle1}{" "}
                {props.secTitle2 && (
                  <span className="colorBlue">{props.secTitle2}</span>
                )}{" "}
                {props.secTitle3 && props.secTitle3}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="50"
              >
                {props.secDescription}
              </p>
            </div>
          </div>
          {props.cardData.map((item, index) => (
            <div className="col-lg-4 mb-lg-0 mb-3" key={index}>
              <div
                className="WhyItMattersCard"
                data-aos="fade-up"
                data-aos-duration={index * 1000}
                data-aos-offset="50"
              >
                <div className="WhyItMattersCardIcon">
                  <img src={item.image.src} alt={item.title} />
                </div>
                <div className="WhyItMattersCardContent">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
