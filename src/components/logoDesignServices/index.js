import React from "react";
import "./index.css";
import logodesignimg from "../../Assets/logodesignimg.webp";

const LogoDesignServices = () => {
  return (
    <section className="LogoDesignServices mt-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7 ">
            <p className="para">Say No To Logo Template Scams</p>

            <h2
              className="title"
              data-aos="fade-right"
              // data-aos-duration="500"
              data-aos-offset="50"
            >
              A Logo Design That Reflects Your Brand Personality
            </h2>

            <p
              className="para2 mb-2"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              It’s easy to fall for the allure of cheap, pre-made logos, but
              those designs come at a cost. In a world flooded with
              cookie-cutter options, finding true professional logo design
              services is essential. At California Web Coders, we offer more
              than just a logo; we deliver a visual representation of your
              brand’s unique identity. Unlike template-based services that
              recycle designs, we ensure originality with every logo we create.
            </p>

            <p
              className="para2"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              Our business logo design team approaches each project with a fresh
              perspective, tailoring every design to reflect your brand’s
              essence and vision. We don’t believe in shortcuts; we believe in
              creating logos from scratch, collaborating with you to tell your
              brand’s story. Expect a logo that stands out, one that is
              memorable and meaningful.
            </p>
            <p
              className="para3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              Choose California Web Coders for a creative solution that leaves
              an unforgettable impression.
            </p>
          </div>

          <div className="col-xl-6 col-lg-5 logoServiceCol-2">
            <img
              className="img-fluid  LogoDesignServicesimg"
              alt={"img"}
              src={logodesignimg.src}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-offset="50"
            />
          </div>

          {/* <div className="col-md-12">
            <p
              className="para3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              Choose California Web Coders for a creative solution that leaves
              an unforgettable impression.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LogoDesignServices;
