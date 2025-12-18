import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import nextlevelabout from "../../Assets/newChildPagesAssets/IOSDevelopment/nextlevel-about.webp";
import Link from 'next/link';

const IOSAboutCompany = (props) => {
  return (
    <section
      className="iosaboutcompany-sec"
      id="ios-about-company"
      aria-label="About iOS App Development Company in California"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div
            className="col-lg-4"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <figure
              className="ios-about-bannerimg"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img
                src={nextlevelabout.src}
                alt="Expert iOS app development company in California"
                loading="lazy"
                decoding="async"
                width="600"
                height="500"
              />
              <figcaption className="visually-hidden">
                Professional iOS app development team creating scalable iPhone
                and iPad apps in California.
              </figcaption>
            </figure>
          </div>

          {/* Right Text Section */}
          <div
            className="col-lg-8"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <article className="ios-about-txt">
              <h6
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                About iOS App Development
              </h6>
              <h2
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                 Crafting  Next-Level <span>iOS Applications</span> for Modern
                Users
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                At <strong>California Web Coders</strong>, we build smooth,
                scalable, and high-performance <strong>iOS applications</strong>{" "}
                tailored for modern businesses. As a leading{" "}
                <strong>Swift app development company in California</strong>, we
                focus on speed, reliability, and elegant design. Our dedicated{" "}
                <strong>iOS UI/UX design services</strong> ensure seamless
                navigation, delightful experiences, and maximum engagement across
                all Apple devices.
              </p>
            </article>

            <div
              className="ios-about-pointflex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div
                className="ios-about-points"
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="900"
              >
                <span>01</span>
                <div className="iosabout-point-txt">
                  <h3>Exceptional Performance</h3>
                  <p>
                    Every app is optimized for <strong>speed</strong>,
                    responsiveness, and stable performance across iPhone and
                    iPad devices.
                  </p>
                </div>
              </div>
              <div
                className="ios-about-points"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="900"
              >
                <span>02</span>
                <div className="iosabout-point-txt">
                  <h3>Custom Features</h3>
                  <p>
                    We build <strong>custom iOS app features</strong> designed to
                    align with your brand and audience needs.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ios-about-pointflex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div
                className="ios-about-points"
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="900"
              >
                <span>03</span>
                <div className="iosabout-point-txt">
                  <h3>End-to-End Security</h3>
                  <p>
                    Built-in <strong>data encryption</strong> and secure coding
                    practices ensure complete user protection throughout the
                    development lifecycle.
                  </p>
                </div>
              </div>
              <div
                className="ios-about-points"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="900"
              >
                <span>04</span>
                <div className="iosabout-point-txt">
                  <h3>Native Experience</h3>
                  <p>
                    We leverage Apple's latest frameworks to ensure{" "}
                    <strong>native performance</strong> and flawless compatibility
                    across iOS versions.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="webapp-btnflex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <Link
                href="/about"
                aria-label="Learn more about California Web Coders iOS development team"
              >
                Learn More About Us
              </Link>

              <div
                className="about-number about-number-anchor"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <a
                  href={`tel:${props.phoneNumberLink || "+16193352364"}`}
                  aria-label="Call California Web Coders iOS App Development Company"
                >
                  <span>
                    <FaPhoneAlt aria-hidden="true" />
                  </span>
                  <p>+1 (619) 335-2364</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IOSAboutCompany;

