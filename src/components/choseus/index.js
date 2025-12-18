import React from "react";
import smart from "../../Assets//smart.svg";
import Professiona from "../../Assets/Professiona.svg";
import Certified from "../../Assets/Certified.svg";
import Premium from "../../Assets/Premium.svg";
import "./index.css";
const WhychoseUs = () => {
  return (
    <section className="whychoseus">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="whychoseus-head text-center">
              <h2
                className="head1"
                data-aos="fade-up"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                Why Choose Us
              </h2> 
              <h3
                className=""
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                Unique Digital Solutions, Experienced Crew, <br />
                <span className="changewayspan">Long-Term Results</span>
              </h3>
            </div>
          </div>

          <div className=" col-md-6 col-lg-3 mb-3">
            <div
              className="card text-center border-0 text-white"
              data-aos="fade-up"
              // data-aos-duration="500"
              data-aos-offset="50"
            >
              <div className="card-body">
                <div
                  className=" custom-icon-wrapper"
                  // style={{ width: "60px", height: "60px" }}
                >
                  <img src={smart.src} className="img-fluid" alt="Creative Solutions" />
                </div>
                <h4 className="card-title  ">Creative Solutions</h4>
                <p className="card-text">
                  We blend creativity with clean code to build digital
                  experiences that are beautiful, brand-aligned, and function
                  perfectly across all devices.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-6 col-lg-3 mb-3 pt-lg-5">
            <div
              className="card cards text-center border-0 text-white "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              <div className="card-body">
                <div
                  className="custom-icon-wrapper"
                  // style={{ width: "60px", height: "60px" }}
                >
                  <img src={Professiona.src} className="img-fluid" alt="User-friendly Experience" />
                </div>
                <h4 className="card-title  ">User-friendly Experience</h4>
                <p className="card-text">
                  Our websites are built for easy updates, simple navigation,
                  and intuitive use, so you stay in control without the tech
                  stress.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-6 col-lg-3 mb-3">
            <div
              className="card text-center border-0 text-white "
              data-aos="fade-up"
              // data-aos-duration="500"
              data-aos-offset="50"
            >
              <div className="card-body">
                <div
                  className="custom-icon-wrapper"
                  // style={{ width: "60px", height: "60px" }}
                >
                  <img src={Certified.src} className="img-fluid" alt="CPerformance Driven" />
                </div>
                <h4 className="card-title  ">Performance Driven</h4>
                <p className="card-text">
                  From fast load times to SEO-ready frameworks, every site we
                  create is optimized to perform and scale with your growth.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-md-6 col-lg-3 mb-3 pt-lg-5">
            <div
              className="card cards text-center border-0 text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              <div className="card-body">
                <div
                  className="custom-icon-wrapper"
                  // style={{ width: "60px", height: "60px" }}
                >
                  <img src={Premium.src} className="img-fluid" alt="24/7 Customer Service" />
                </div>
                <h4 className="card-title  ">24/7 Customer Service</h4>
                <p className="card-text">
                  Our clients are our top priority; we offer 24/7 customer
                  support to maintain constant communication and ensure
                  transparency in all our projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhychoseUs;
