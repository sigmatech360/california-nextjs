import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import FormModal from "../FormModal";

const DomainService = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="domain-service-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="domain-service-head">
              <h6>{props.domainserviceminihead}</h6>
              <h3>{props.domainservicelargehead}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="domain-service-one">
            <div className="row">
              <div className="col-lg-6 pl-0">
                <div className="domain-service-img">
                  <img src={props.serviceImgone.src} alt={props.bighead} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="domain-service-txt">
                  <h6>{props.shorthead}</h6>
                  <h4>{props.bighead}</h4>
                  <p>{props.servicepara}</p>
                  <button  onClick={() => setShowModal(true)}><FaArrowRightLong /> {props.btntext}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="domain-service-box">
              <div className="service-domain-img">
                <img src={props.serviceImgtwo.src} alt={props.bigheadtwo} />
              </div>
              <div className="domain-service-txt">
                <h6>{props.shortheadtwo}</h6>
                <h4>{props.bigheadtwo}</h4>
                <p>{props.serviceparatwo}</p>
                <button  onClick={() => setShowModal(true)}><FaArrowRightLong /> {props.btntwotxt}</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="domain-service-box">
              <div className="service-domain-img">
                <img src={props.serviceImgthree.src} alt={props.bigheadthree} />
              </div>
              <div className="domain-service-txt">
                <h6>{props.shortheadthree}</h6>
                <h4>{props.bigheadthree}</h4>
                <p>{props.serviceparathree}</p>
                <button  onClick={() => setShowModal(true)}><FaArrowRightLong /> {props.btnthreetxt}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </section>
  );
};

export default DomainService;

