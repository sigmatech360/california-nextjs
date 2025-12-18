import React from "react";
import "./index.css";
// import { CiCircleCheck } from "react-icons/ci";
import wordpresssectionimg from "../../Assets/wordpresssectionimg.webp";
import PricePlanCard from "../PricePlanCard";
import Link from 'next/link';
import { smmPricingPlansData } from "../../data";

const pricingPlanData = [
  {
    id: 1,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 (619) 335-2364`,
  },
  {
    id: 2,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 (619) 335-2364`,
  },
  {
    id: 3,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 (619) 335-2364`,
  },
];
const PricingPlans = (props) => {
  return (
    <section className="PricingPlans">
      <div className="container">
        <div className="row justify-content-center mb-md-5 mb-3">
          <div className="pricing-plan-head">
            <p
              className="head-tag"
              data-aos="fade-up"
              // data-aos-duration="500"
              data-aos-offset="50"
            >
              Pricing Plans
            </p>
            <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">
              {props.secTitle || `That Fit All Budget Types`}
            </h3>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">
              {props.secDescription ||
                `No more budget issues, get your hands on the most Affordable Website Design Services online.`}
            </p>
          </div>

          
          {props.pricingPlan.map((item, index) => (
            <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
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

        {props.pricingPlan2 && (
          <div className="row mb-md-5 mb-3">
            {props.pricingPlan2.map((item, index) => (
            <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
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
        )}

        <div className="row">
          <div className="col-lg-6">
            <div
              className="why-wordpress-img"
              data-aos="fade-right"
              // data-aos-duration="500"
              data-aos-offset="50"
            >
              {props.image && (
                <img
                  // src={wordpresssectionimg}
                  src={props.image.src}
                  alt="Laptop Display"
                  className="img-fluid workpressimges"
                />
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-wordpress-content">
              <h2
                data-aos="fade-left"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                {/* Why WordPress */}
                {props.whyWordressTitle}{" "}
                {props.question && <span className="colorBlue">?</span>}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.whyWordressDescription1}
              </p>
              {props.whyWordressDescription2 && (
                <p
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  {props.whyWordressDescription2}
                </p>
              )}
              {props.whyWordressDescription3 && (
                <p
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  {props.whyWordressDescription3}
                </p>
              )}
              {/* <Link
                href={props.btnLink || "/our-work"}
                className="morebenifit"
              >
                {props.btnText || `See More Benefits`}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

