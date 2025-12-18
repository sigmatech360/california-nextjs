import React from "react";

import "./index.css";

import visaLogo from "../../Assets/visa-logo.webp";
import paypalLogo from "../../Assets/paypal-logo.webp";
import mastercardLogo from "../../Assets/mastercard-logo.webp";
import maestroLogo from "../../Assets/maestro-logo.webp";

const RefundPolicy = () => {
  return (
    <section className="RefundPolicy">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="RefundPolicy-content">
              <h3
                data-aos="fade-up"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                7-Day refund policy for all paid plans and packages
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                If you're not fully satisfied within the first 7 days of project
                initiation, we’ll issue a full refund. No hard feelings, no
                hassle. Your trust matters to us, and we believe in starting
                every partnership with fairness, transparency, and confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div
            className="rf-pay-logos"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="paymentway">
              <img src={visaLogo.src} alt="Visa" />
            </div>
            <div className="paymentway">
              <img src={paypalLogo.src} alt="PayPal" />
            </div>
            <div className="paymentway">
              <img src={mastercardLogo.src} alt="MasterCard" />
            </div>
            <div className="paymentway">
              <img src={maestroLogo.src} alt="Maestro" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
