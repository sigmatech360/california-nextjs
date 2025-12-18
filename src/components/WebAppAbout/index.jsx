import React from "react";
import webappabout from "../../Assets/newChildPagesAssets/webapp/webappabout.webp";
import { SiTicktick } from "react-icons/si";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

const WebAppAbout = (props) => {
  return (
    <div className="web-app-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
             <div className="webapp-abouttxt">
              <h6 data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                About Web Development
              </h6>

              <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
                Powering Businesses with Smart <span>Web Applications</span>
              </h2>

              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                At California Web Coders, we are proud to offer comprehensive and
                custom web application development services in California. Our
                team specializes in creating solutions that prioritize speed,
                security, and scalability to meet your business's unique needs.
                Each web app we develop is designed not only to simplify your
                operations but also to enhance the overall user experience,
                ensuring that your customers enjoy seamless and engaging
                interactions. Additionally, our focus is on delivering measurable
                business value while carefully aligning with your brand's goals
                and vision.
              </p>

              <ul
                className="webap-list-flex"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <li>
                  <SiTicktick /> Professional IT Solutions
                </li>
                <li>
                  <SiTicktick /> Experienced Team Members
                </li>
              </ul>

              <div
                className="webapp-btnflex"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <Link href="/about" data-aos="zoom-in" data-aos-delay="600">
                  Learn More About Us
                </Link>
                <div
                  className="about-number about-number-anchor"
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="900"
                >
                 <a href={`tel:${props.phoneNumberLink || "+16193352364"}`}><span><FaPhoneAlt /></span><p> +1 (619) 335-2364</p></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"  data-aos="zoom-in" data-aos-duration="1000"  data-aos-delay="300">
            <div className="webapp-centermob">
              <img src={webappabout.src} alt="Web application development"  fetchpriority="high" decoding="async" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="webapp-aboutend">
              <p  data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
               From frontend to backend, we focus on building web applications that are fast, reliable, and easy to use. Our React developers create smooth, interactive designs that keep users engaged, while Node.js powers the backend to handle performance and scalability. Together, they create a full-stack solution that looks amazing, runs efficiently, and grows with your business, so you can focus on results instead of worrying about tech slowing you down.
              </p>
              <ul data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <li><FaCheckCircle/> Scalable architecture for long-term growth</li>
                <li><FaCheckCircle/> Secure backend infrastructure</li>
                <li><FaCheckCircle/> User-centered design with intuitive workflows</li>
                <li><FaCheckCircle/> Integration with APIs and third-party tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppAbout;

