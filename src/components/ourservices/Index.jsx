import React from "react";
import Link from 'next/link';

const Ourservices = (props) => {

  const isReversed = props.reverse;
  const textAos = isReversed ? "fade-left" : "fade-right";
  const imageAos = isReversed ? "fade-right" : "fade-left";

  return (
    <section className={props.OurServicesSec || "our-services"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="our-service-allhead">
              <h6>{props.serviceminihead}</h6>
              <div className="our-service-flex">
                <h3 data-aos={textAos} data-aos-duration="1000" data-aos-offset="50">
                  {props.serviceMainHead} <span>{props.serviceEndName}</span> {props.serviceMainHeadcom}{" "}
                </h3>
                <Link href="#" data-aos={imageAos} data-aos-duration="1000" data-aos-offset="50">{props.allservicelink}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="service-name-flex">
              <h6 data-aos={textAos} data-aos-duration="1000" data-aos-offset="50">{props.serviceCountOne}</h6>
              <h3 data-aos={textAos} data-aos-duration="1000" data-aos-offset="50">{props.firstServiceName}</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-para-detail">
              <p data-aos={imageAos} data-aos-duration="1000" data-aos-offset="50">{props.firstServicePara}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="service-para-detail">
              <p  data-aos={textAos} data-aos-duration="1000" data-aos-offset="50">{props.secondServicePara}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-name-flex">
              <h6 data-aos={imageAos} data-aos-duration="1000" data-aos-offset="50">{props.serviceCountTwo}</h6>
              <h3 data-aos={imageAos} data-aos-duration="1000" data-aos-offset="50">{props.secondServiceName}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="service-name-flex">
              <h6  data-aos={textAos} data-aos-duration="1000" data-aos-offset="50">{props.serviceCountThird}</h6>
              <h3  data-aos={textAos} data-aos-duration="1000" data-aos-offset="50">{props.thirdServiceName}</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-para-detail">
              <p data-aos={imageAos} data-aos-duration="1000" data-aos-offset="50">{props.thirdServicePara}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourservices;

