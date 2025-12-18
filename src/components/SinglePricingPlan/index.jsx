import React from "react";
import PricePlanCard from "../PricePlanCard";



const SinglePricingPlan = (props) => {
    // const pricingPlanData = props.pricingPlanData || [];
  return (
    <section className={props.pricingSecClass || "PricingPlans singlePricingPlan"}>
      <div className="container">
        <div className="row justify-content-center">
             <div className="col-md-8">
            <div className="pricing-plan-head">
              <p
                className="head-tag"
                data-aos="fade-up"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                Pricing Plans
              </p>
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.secTitle || `That Fit All Budget Types`} <span>{props.secTitleBlue}</span>  {props.secTitleEnd}</h3>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.secDescription ||
                  `No more budget issues, get your hands on the most Affordable Website Design Services online.`}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {props.pricingPlanData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={index}>
              <PricePlanCard
                packageInfo={item.packageInfo}
                name={item.name}
                actualPrice={item.price.actualPrice}
                discountPrice={item.price.disountPrice}
                servicesList={item.servicesList}
                number={item.number}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglePricingPlan;
