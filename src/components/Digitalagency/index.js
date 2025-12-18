import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FaFaceSmile } from "react-icons/fa6";
import { TbSpeakerphone } from "react-icons/tb";
import { IoBagRemoveSharp } from "react-icons/io5";

import video from "../../Assets/digitalvideo.mp4";
import "./index.css";
const Digitalagency = () => {
  return (
    <section>
      <div className="digitalagency">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-6 ">
              <h2
                className="title"
                data-aos="fade-right"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                Web Designs That are Loved By All Of <span>California</span>{" "}
              </h2>
            </div>
            <div className="col-lg-6 ">
              <div
                className="d-flex gap-md-4 gap-2"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                <span className="twentypls"> 20+</span>
                <div className=" align-content-center justify-content-center">
                  {" "}
                  <p className="para mb-1"> 20+ Years of Experience</p>
                  <p className="para1">
                    Don’t believe our words, believe the experience and
                    expertise. Combining functionality and aesthetics, we get
                    what you want!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <div className="col-md-4">
              <div className="satisfiedpara  d-flex justify-content-between  align-content-center">
                <p className="para2 ">
                  {" "}
                  <span>350+ </span>satisfied clients who love our services.
                </p>
                <span className="facespan    ">
                  <FaFaceSmile />
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="satisfiedpara  d-flex justify-content-between  align-content-center">
                <p className="para2 ">
                  {" "}
                  <span>750+ </span>completed projects that showcase our expertise.
                </p>
                <span className="facespan    ">
                  <TbSpeakerphone />
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="satisfiedpara  d-flex justify-content-between  align-content-center">
                <p className="para2 ">
                  {" "}
                  <span>100+ </span> awards and certificates in Web Design.
                </p>
                <span className="facespan    ">
                  <IoBagRemoveSharp />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="video-container">
          <video src={video} autoPlay loop muted width="100%" />
          {/* <video width="100%" height="auto" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
    </section>
  );
};

export default Digitalagency;
