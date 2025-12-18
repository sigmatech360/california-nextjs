import React from "react";
import "./index.css";
import servicesimg from "../../Assets/servicesimg.webp";

import creativelogo from "../../Assets/creativelogo.svg";
import digitaltogo from "../../Assets/digitaltogo.svg";
import softwarelogo from "../../Assets/softwarelogo.svg";

import websitelogo from "../../Assets/websitelogo.svg";
import graphiclogo from "../../Assets/graphiclogo.svg";
import mrketinglogo from "../../Assets/mrketinglogo.svg";
import mobileservicesimg from "../../Assets/mobileservicesimg.webp";

const creativeSectionData = [
  {
    id: 1,
    image: creativelogo,
    name: "Creative Solutions",
    description:
      "We bring fresh, creative solutions that help your brand stand out and connect with your audience.",
  },
  {
    id: 2,
    image: digitaltogo,
    name: "Digital Marketing",
    description:
      "From strategy to results, our digital marketing helps you get noticed and stay top of mind.",
  },
  {
    id: 3,
    image: softwarelogo,
    name: "Software Integration",
    description:
      "We streamline your systems with smart software integration that improves workflow and boosts efficiency instantly.",
  },
];

const Servies = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row  services-row-1">
          <div className="col-lg-8">
            <div className="services-heading">
              <p className="para">Services</p>
              <h2
                className="title"
                data-aos="fade-right"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                Smart Digital Services and Premium Web Design Always Delivered
                on Time
              </h2>
              <p
                className="para2 mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                We can revamp your existing website or build a new one from
                scratch, and the one thing that stays uncompromised is Quality!
              </p>
            </div>

            {creativeSectionData.map((item, index) => (
              <div
                className="creativesection d-flex"
                key={index}
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                <span className="creativelg">
                  <img src={item.image.src} alt="Digital Services" className="creativelogo" />
                </span>
                <span>
                  <p className="para4 d-flex gap-3 mb-0">{item.name}</p>
                  <p className="para3">{item.description}</p>
                </span>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div
              className="services-right-img"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              <img className="servicesheroimg img-fluid" alt="Digital Services" src={servicesimg.src} />
            </div>
          </div>
        </div>

        <div className="row justify-content-center  compservices">
          <div className="col-lg-4 mb-4 ">
            <div
              className="graphic-services-outer"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              <div className="graphicservices graphic-bg">
                <div className="graphicservices-icon">
                  <img src={graphiclogo.src} alt="Graphic Design" className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <h4 className="graphicgesigntitle">Graphic Design</h4>
                  <p className="graphicservicespara">
                    We deliver striking graphic design that enhances your
                    brand’s identity and supports your digital presence.
                  </p>
                </div>
              </div>
              <div className="graphicservices">
                <div className="graphicservices-icon">
                  <img src={mrketinglogo.src} alt="Online Marketing" className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <h4 className="graphicgesigntitle">Online Marketing</h4>
                  <p className="graphicservicespara">
                    Our online marketing strategies drive engagement, increase
                    visibility, and convert visitors into loyal customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 compservices-col-3">
            <div
              className="mobileservices-outer h-100 d-flex flex-column"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              <div className="mobileservices flex-grow-1">
                <div className="mobile-services-content">
                  <h4>Mobile App Developments</h4>
                  <p className="graphicservicespara">
                    Our mobile app developers in California create intuitive,
                    scalable apps that deliver seamless user experiences.
                  </p>
                </div>
                <div className="mobile-services-image">
                  <img src={mobileservicesimg.src} alt="Mobile App Developments" className="mobileservicesimg" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 ">
            <div
              className="graphic-services-outer"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              <div className="graphicservices">
                <div className="graphicservices-icon">
                  <img src={websitelogo.src} alt="Website Developments" className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <h4 className="graphicgesigntitle">Website Developments</h4>
                  <p className="graphicservicespara">
                    As a custom web development company, we build responsive,
                    high-performing websites tailored to your needs.
                  </p>
                </div>
              </div>
              {/* This Div bg image class */}
              {/* web-dev-bg */}
              <div
                className={`
                graphicservices 
              `}
              >
                <div className="graphicservices-icon">
                  <img src={websitelogo.src} alt="CMS Developments" className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <h4 className="graphicgesigntitle">CMS Developments</h4>
                  <p className="graphicservicespara">
                    We offer CMS development services to help you manage content
                    easily, boosting efficiency and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servies;
