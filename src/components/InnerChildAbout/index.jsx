import React from "react";
import Link from "next/link";

const InnerChildAbout = (props) => {
  return (
    <section className={props.webpointsec || "WordPressPerformanceSection"}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-4">
            {props.image && (
              <div className={props.managewebimg || "services__about-img"}>
                <img
                  src={props.image.src}
                  alt="Service About"
                  className="img-fluid"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="50"
                />
              </div>
            )}
          </div>

          <div className="col-lg-6">
            <h2
              className="title"
              data-aos="fade-left"
              // data-aos-duration="500"
              data-aos-offset="50"
            >
              {props.secTitle1}{" "}
              {props.secTitle2 && <span>{props.secTitle2}</span>}{" "}
              {props.secTitle3 && props.secTitle3}
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              {props.description}
            </p>
            {props.description2 && (
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.description2}
              </p>
            )}
            {/* <Link
              href={"/pricing-plan"}
              className="btn-theme"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              {props.btnText || `Get In Touch`}
            </Link> */}
          </div>

          <div className="col-lg-12">
            <div className="innerAboutList">
              {props.aboutData.map((item, index) => (
                <div
                  className="innerAboutListItem"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 200}
                  data-aos-offset="50"
                >
                  <span className="innerAboutListItemImg">
                    <img
                      src={item.image.src}
                      alt={item.name}
                      // className=""
                    />
                  </span>
                  <div className="innerAboutListItemContent">
                    <h4 className="mb-0">{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerChildAbout;
