import React from "react";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";
import Speedmeter  from "@/Assets/newChildPagesAssets/smartaiintegration/speedmeter.svg";
import Mapicon  from "@/Assets/newChildPagesAssets/smartaiintegration/mapicon.svg";
import Emailus  from "@/Assets/newChildPagesAssets/smartaiintegration/emailus.svg";
import Phoneicon  from "@/Assets/newChildPagesAssets/smartaiintegration/phoneicon.svg";
import { FaSquarePinterest, FaSquareXTwitter } from "react-icons/fa6";
import PersonalInformationBox from "../PersonalInformationBox";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { LiaPinterestP } from "react-icons/lia";
import Image from "next/image";

const CustomGetInTouch = () => {
  const infoData = [
    {
      Icon: <Image src={Mapicon.src} alt="Mapicon" width={40} height={40} />,
      miniHead: "Head Office",
      miniPara: "225 Broadway, San Diego, CA 92101, United States",
    },
    {
      Icon: <Image src={Emailus.src} alt="Emailus" width={40} height={40} />,
      miniHead: "Email Us",
      miniPara: "supportcaliforniawebcoderscom",
    },
    {
      Icon: <Image src={Phoneicon.src} alt="Phoneicon" width={40} height={40} />,
      miniHead: "Call us",
      miniPara: "+1 (619) 335-2364",
    },
    {
      Icon: <Image src={Speedmeter.src} alt="Speedmeter" width={40} height={40} />,
      miniHead: "Support You can Count on",
      miniPara:
        "Reliable, responsive, and always ready to sort out any problem causing delay.",
    },
  ];

  return (
    <section className="custom-getintouch-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <PersonalInformationBox infoData={infoData} />
          </div>
          <div className="col-lg-6">
            <div className="custom-getintouch-txt">
              <h6>Contact us</h6>
              <h2>
                Let’s Build What’s Next,<span>Together.</span>
              </h2>
              <p>
                Have a project in mind? Reach out to California Web Coders
                today. We’d love to learn about your goals and explore how our
                expertise can support them.
              </p>
              <div className="getintouch-follow">
                <h4>Follow Our Socials</h4>
                <p>
                  Stay inspired with our latest projects, insights, and creative
                  breakthroughs, connect with us on LinkedIn, Instagram, and
                  Facebook.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomGetInTouch;
