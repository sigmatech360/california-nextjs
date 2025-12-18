import React, { useState } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { LiaPinterestP } from "react-icons/lia";
import contactimg from "../../Assets/locationpages/mba-los-angeles/contact-follow.webp";
import { toast } from "react-toastify";

const LocationContact = (props) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    service: "",
    hearAbout: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple front-end validation
    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company: formData.company,
        website: formData.website,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        about_cwc: formData.hearAbout,
        business: formData.message,
      };

      const response = await axios.post(`${API_BASE_URL}/let-connect`, payload);

      if (response.data?.status) {
        toast.success(response.data.message || "Your query has been submitted successfully, we will contact you shortly");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          website: "",
          email: "",
          phone: "",
          service: "",
          hearAbout: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="location-contact-sec">
      <div className="container">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="location-contact-txt">
              <h6>{props.miniHead}</h6>
              <h3>{props.mainHead}</h3>
              <p>{props.secPara}</p>

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
              <img src={contactimg.src} alt="img" />
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className="location-contact-form">
              <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company / Organization"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="website"
                        placeholder="Website"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="location-form-field">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select Your Services</option>
                        <option value="logo design">Logo Design</option>
                        <option value="website design">Web Design</option>
                        <option value="cms development">CMS Development</option>
                        <option value="digital marketing">Digital Marketing</option>
                        <option value="custom web development">Custom Web Development</option>
                        <option value="app development">App Development</option>
                        <option value="hosting & domain">Hosting & Domain</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="hearAbout"
                        placeholder="How Did You Hear About California Web Coders?"
                        value={formData.hearAbout}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="location-form-field">
                      <textarea
                        name="message"
                        placeholder="Tell Us About Your Business *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="location-form-btn">
                      <button type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Get In Touch"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
