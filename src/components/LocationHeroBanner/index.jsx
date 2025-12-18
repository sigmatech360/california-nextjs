import React from "react";
import Link from 'next/link';
import BookConsultation from "../BookConsultation";
import { CiCircleCheck } from "react-icons/ci";

const LocationHeroBanner = (props) => {
  return (
    <section className={`wordpress-web-design ${props.secClass}`}>
      <img
        src={props.bgImage.src}
        className="servicesBanner-bgImage"
        alt="Services Background Img"
        fetchpriority="high"
        width="1920"
        height="1080"
        data-aos="fade-in"
        data-aos-duration="1000"
        decoding="async"
        loading="eager"
      />
      <div className="container">
        <div className="row">
          <div className={props.columnLeft || "col-lg-6"}>
            <div
              className={props.herobannertxt || "inner-services-banner-content"}
            >
              <h1>{props.sectitle}</h1>
              <p>{props.secPara}</p>
              {props.bannerList && (
                <ul
                  className="list-unstyled wordpress-web-design-list"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  {props.bannerList.map((item, index) => (
                    <li
                      className="d-flex align-items-center mb-2"
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 150 + 400}
                      data-aos-duration="900"
                    >
                      <span className="d-flex align-items-center gap-2">
                        <CiCircleCheck />
                        <p className="para4 mb-0 align-self-baseline">{item}</p>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="service-another-para d-none">{props.anotherpara}</p>
              <Link
                href={props.btnLink || "/get-intouch"}
                className="theme-light"
              >
                {props.btntxt}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHeroBanner;

