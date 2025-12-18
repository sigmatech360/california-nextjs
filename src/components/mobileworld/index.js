import React from "react";
import "./index.css";


const Mobileworld = (props) => {
  return (
    <section className="Mobileworld">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="para0">Pricing Plans</p>
            <h3
              className="title"
              data-aos="fade-up"
              // data-aos-duration="500"
              data-aos-offset="50"
            >
              {props.title}
            </h3>
          </div>
          <div className="col-lg-6">
            <p
              className="para1 mobileworld-head-p ps-xxl-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              {props.description}
            </p>
          </div>
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Mobileworld;
