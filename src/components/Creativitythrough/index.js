import React from "react";
import "./index.css";
import creativethoughsec from "../../Assets/creativethoughsec.webp";
import Link from 'next/link';

const Creativitythrough = (props) => {
  return (
    <section className="Creativitythrough">
      <div className="container">
        <div className="row Creativitythrough-row">
          <div className="col-xxl-4 col-lg-5">
            <div className="creativitythrough-content pt-lg-3 pt-0">
              <h2
                className="title"
                data-aos="fade-right"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                {props.title1} {props.title2 && <span>{props.title2}</span>}
              </h2>
              <p
                className="para mt-3"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.description1}
              </p>

              {props.description2 && (
                <p
                  className="para"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  {props.description2}
                </p>
              )}

              {/* <Link href={props.btnLink || "/our-work"}
                className="intouch btn   btn-lg mt-3"
              >
                {props.btnText || `View Our Latest Work`}
              </Link> */}
            </div>
          </div>

          <div className="col-xxl-8 col-lg-7">
            {props.image && (
              <div
                className="creativitythrough-content"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                <img
                  src={props.image.src}
                  alt="Image"
                  className="img-fluid workpressimges"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creativitythrough;

