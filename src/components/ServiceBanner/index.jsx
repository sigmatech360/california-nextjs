import React from "react";
import Link from "next/link";
import whiteCheck from "../../Assets/white-check.webp";
import smartaivideo from "../../Assets/newChildPagesAssets/smartaiintegration/ai-integration-video.mp4";
import { CiCircleCheck } from "react-icons/ci";

const ServiceBanner = (props) => {
  return (
    <section className={`wordpress-web-design ${props.secClass}`}>
      <div className="smart-ai-video">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={smartaivideo} type="video/mp4" />
        </video>
      </div>
      {props.bgImage && (
        <img
          src={props.bgImage?.src}
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
      )}

      <div className="container">
        <div className={props.rowClass || "row align-items-center"}>
          <div className={`${props.leftCol || "col-lg-6"}`}>
            <div
              className={
                props.innerServicetxt || "inner-services-banner-content"
              }
            >
              <h1
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                {props.title}
              </h1>

              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {props.description}
              </p>

              {props.description2 && (
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {props.description2}
                </p>
              )}

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
                href="/get-intouch"
                className={props.btnClass || "btn-theme"}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                {props.btnText || `Contact Us`}
              </Link>

              {props.innerheroimg && (
                <img
                  src={props.innerheroimg.src}
                  className="next-inner-hero"
                  alt="Inner Hero"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                  decoding="async"
                  fetchpriority="high"
                  loading="eager"
                />
              )}
            </div>
          </div>

          {(props.image || props.herobannervideo) && (
            <div
              className={`${props.rightCol || "col-lg-6"}`}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              {props.image && (
                <div
                  className="services__banner-img"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <img
                    src={props.image.src}
                    alt="Services Banner Img"
                    className="img-fluid"
                    fetchpriority="high"
                    width="336"
                    height="252"
                  />
                </div>
              )}

              {props.herobannervideo && (
                <div
                  className="hero-banner-video"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <video
                    src={props.herobannervideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                  ></video>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
