import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./index.css"; 
import footerlogo from "../../Assets/footerlogo.webp";
import footerlogo1 from "../../Assets/footerlogo2.webp";
import footerlogo2 from "../../Assets/footerlogo3.webp";
import footertrustpilot from "../../Assets/trustpilot-logo-white-icon.webp"
import footercrunchbase from "../../Assets/crunchbase.webp"
import footeryelp from "../../Assets/Yelp.png"
import footerclutch from "../../Assets/clutch.webp"
import footerbehance from "../../Assets/behance.webp"
import footerlogo3 from "../../Assets/footerlofo3.webp";
import { SiCrunchbase, SiMinutemailer } from "react-icons/si";
import '../../Screen/newsandtrends/index.css';
import Link from 'next/link';
import {
  FaBehance,
  FaBehanceSquare,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYelp,
  FaYoutube,
} from "react-icons/fa";
import { LiaPinterestP } from "react-icons/lia";
import { CiAt } from "react-icons/ci";
import ObfuscatedEmail from "../ObfuscatedEmail";

function Footer() {
  const [email, setEmail] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/newsletter-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      // alert("Email Submitted Successfully");
      if (result.status) {
        toast.success("Thank you for subscribing to our newsletter!");
        setEmail("");
      } else {
        const messages = result.message;
        Object.keys(messages).forEach((field) => {
          messages[field].forEach((msg) => {
            toast.error(msg);
          });
        });
      }
    } catch (error) {
      // alert("Submission failed. Please try again.");
      toast.error("Submission failed. Please try again.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://images.dmca.com/Badges/DMCABadgeHelper.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="main-footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <Link href={"/"} className="main-footer-logo">
              <img src={footerlogo.src} alt="Footer Logo" />
            </Link>
            <p className="para mt-2">
              Delivering custom digital solutions with creativity, precision,
              and passion. Your success is our mission.
            </p>

            <div className="connect-sm-icons justify-content-start">
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
               <a href="https://www.behance.net/californiawebcoders" target="_blank" rel="noreferrer"
                className="behance-badge" title="California Web Coders on Trustpilot">
                <FaBehance />
              </a>
              <a href="https://clutch.co/profile/california-web-coders" target="_blank" rel="noreferrer"
                className="clutch-badge" title="California Web Coders on Trustpilot">
                <img src={footerclutch.src} alt="Trustpilot Reviews" className="footer-protect-img"/>
              </a>
                <a href="https://www.crunchbase.com/organization/california-web-coders" target="_blank" rel="noreferrer"
                className="crunchbase-badge" title="California Web Coders on Trustpilot">
                <SiCrunchbase />
              </a>
              <a href="https://www.yelp.com/biz/california-web-coders-san-diego" target="_blank" rel="noreferrer"
                className="yelp-badge" title="California Web Coders on Trustpilot">
                <FaYelp />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5>Quick Links</h5>
                <div className="main-footer-links">
                  <Link href={"/"} className="main-footer-link">
                    Home
                  </Link>
                  <Link href={"/about"} className="main-footer-link">
                    About Us
                  </Link>
                  <Link href={"/our-work"} className="main-footer-link">
                    Our Work
                  </Link>
                  {/* <Link href={"/blog"} className="main-footer-link">
                    Blogs
                  </Link> */}
                  {/* <Link href={"/services"} className="main-footer-link">
                    Services
                  </Link> */}
                  <Link href={"/pricing-plan"} className="main-footer-link">
                    Packages
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Info</h5>
                <div className="main-footer-links">
                  {/* <Link href="/?scrollhref=cwc-faq" className="main-footer-link">
                    FAQ's
                  </Link> */}
                  <Link href={"/blog"} className="main-footer-link">
                    Blog
                  </Link>
                  <Link href={"/get-intouch"} className="main-footer-link">
                    Contact
                  </Link>
                  <Link
                    href={"/terms-and-conditions"}
                    className="main-footer-link"
                  >
                    Terms & Conditions
                  </Link>
                  <Link href={"/privacy-policy"} className="main-footer-link">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Contact</h5>
                <p className="contectpara">
                  225 Broadway, San Diego,
                  <br />
                  CA 92101, United States
                  <br />
                  <a href="tel:+16193352364" className="footer_list_item">
                    <i className="fas fa-phone-alt"></i> +1 (619) 335-2364
                  </a>
                  {/* <a
                    href="mailto:support@californiawebcoders.com"
                    className="footer_list_item"
                  >
                    support<span class="at"></span>californiawebcoders
                    <span class="dot"></span>com
                  </a> */}
                  <ObfuscatedEmail className="footer_list_item" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom py-4">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            {/* Logos Section */}
            <div className="d-flex align-items-center gap-2 mb-3 mb-md-0 footer-dmca-images">
              <a href="https://upcity.com/profiles/california-web-coders"  target="_blank" rel="noreferrer">
                <img src={footerlogo1.src} alt="WEBSITE DEVELOPMENT" className="footer-logo"/>
              </a>
              <a href="https://www.dmca.com/r/8mj38w0" title="DMCA.com Protection Status" target="_blank" className="dmca-badge"rel="noreferrer">
                <img src={footerlogo3.src} alt="DMCA Verified" className="footer-protect-img"/>
              </a>
               <a href="https://www.trustpilot.com/review/californiawebcoders.com" target="_blank" rel="noreferrer"
                  className="trustpilot-badge" title="California Web Coders on Trustpilot">
                  <img src={footertrustpilot.src} alt="Trustpilot Reviews" className="footer-protect-img"/>
                </a>
            </div>

            {/* Newsletter Signup */}
            <div className="newsletter-signup text-center text-md-start">
              <h5 className="mb-2">Subscribe to Our Newsletter</h5>
              <form
                className="d-flex justify-content-center"
                onSubmit={handleSubmit}
              >
                <div className="sendmailtab">
                  <input
                    type="email"
                    className="emailsend"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="sendbtn btn"
                    aria-label="Subscribe to newsletter"
                  >
                    <SiMinutemailer />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer Links */}
        <div className="container d-flex flex-wrap justify-content-md-between justify-content-center align-items-center gap-1">
          <div className="    ">
            <p className="mb-1 d-flex">
              <Link
                href="/terms-and-conditions"
                className="footer_list_item  text-white text-decoration-none me-3"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="footer_list_item  text-white text-decoration-none me-3"
              >
                Privacy Policy
              </Link>
              {/* <a
                href="#support"
                className="footer_list_item  text-white text-decoration-none"
              >
                Support
              </a> */}
            </p>
          </div>
          <div className="  justify-content-end">
            {" "}
            <p className="mb-0">
              Copyright © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

