import React, { useEffect, useState } from "react";
import "./index.css";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { LiaPinterestP } from "react-icons/lia";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import ObfuscatedEmail from "../ObfuscatedEmail";

const Intouch = () => {
  
  return (
    <section className="intouch inTouch-sec">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="inTouch-content">
              <h6 className="sec-head-tag colorBlue">Get In Touch</h6>
              <h2
                className="title"
                data-aos="fade-right"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                Don’t hesitate to contact us for{" "}
                <span className="colorBlue"> more information </span>
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                We’re here to answer your questions and explore how we can help
                your business grow digitally and strategically.
              </p>
              <h3
                data-aos="fade-right"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                Follow our social network
              </h3>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                Stay connected with California Web Coders across all platforms
                for the latest updates, insights, and digital marketing tips
                tailored for your brand’s success.
              </p>
              <div
                className="connect-sm-icons justify-content-start"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                <a
                  href="https://www.facebook.com/people/California-Web-Coders/61560871757077/"
                  className="facebook-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/californiawebcoders1"
                  className="instagram-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/california-web-coders/"
                  className="linkedin-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/@CaliforniaWebCoders-e8v"
                  className="youtube-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://x.com/californiawebco"
                  className="twitter-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.pinterest.com/californiawebcoders/"
                  className="pinterest-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                >
                  <LiaPinterestP />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div
                  className="inTouch-icon-box"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  <div className="icon-container">
                    <FaMapMarkerAlt color={"#0504a5"} />
                  </div>
                  <div className="inTouch-icon-box-content">
                    <h4>Head Office</h4>
                    <p>225 Broadway, San Diego, CA 92101, United States</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div
                  className="inTouch-icon-box"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  <div className="icon-container">
                    <RiMailSendLine color={"#0504a5"} />
                  </div>
                  <div className="inTouch-icon-box-content">
                    <h4>Email Us</h4>
                    <p>
                      {/* <a href="mailto:support@californiawebcoders.com">
                        support<span class="at"></span>californiawebcoders<span class="dot"></span>com
                      </a> */}
                      <ObfuscatedEmail />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div
                  className="inTouch-icon-box"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  <div className="icon-container">
                    <FaPhoneAlt color={"#0504a5"} />
                  </div>
                  <div className="inTouch-icon-box-content">
                    <h4>Call Us</h4>
                    <p>
                      +1 (619) 335-2364
                      {/* <br />
                      +1 609-798-9688 */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div
                  className="inTouch-icon-box"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  <div className="icon-container">
                    <MdOutlineSupportAgent color={"#0504a5"} />
                  </div>
                  <div className="inTouch-icon-box-content">
                    <h4>Follow Us</h4>
                    <p>
                      Follow California Web Coders on Instagram to stay
                      connected with us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intouch;
