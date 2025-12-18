import React, { useState } from "react";
import { TbDeviceDesktopCog } from "react-icons/tb";
import FormModal from "../FormModal";

const OurCustomService = ({
  miniHead,
  secMainTitle,
  secTitleBlue,
  secLastTitle,
  customServicePara,
  customServiceBtn,
  serviceCards,
  CustomFrontendSec
}) => {

   const [showModal, setShowModal] = useState(false);
  return (
    <>
    <section className={CustomFrontendSec || "our-custom-service"}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="our-custom-servicetxt">
              <h6>{miniHead}</h6>
              <h2>
                {secMainTitle} <span>{secTitleBlue}</span> {secLastTitle}
              </h2>
              <p>{customServicePara}</p>
              <button onClick={() => setShowModal(true)}>{customServiceBtn}</button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="custom-service-scroll">
              {serviceCards.map((card, index) => (
                 <React.Fragment key={card.id}>
                    {/* {index === 2 && (
                      <h4 className="related-services-heading">
                        Related Services
                      </h4>
                    )} */}
                    <div className="custom-service-box">
                      <div className="customservice-boxtxt">
                        <span className="service-icon">{card.icon}</span>
                        <h5>{card.serviceCardHead}</h5>
                        <p>{card.serviceCardPara}</p>
                      </div>
                      <div className="custom-right-img">
                        <img
                          src={card.serviceCardImg.src}
                          alt={card.serviceCardHead}
                        />
                      </div>
                    </div>
                  </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
     <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default OurCustomService;
