"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "./index.css";

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    company_name: "",
    data_message: "",
  });
  const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/submit-query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      // alert("Form Submitted Successfully");

      if (result.status) {
        toast.success(result.message);
        setFormData({
          username: "",
          email: "",
          phone: "",
          company_name: "",
          data_message: "",
        });
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
      //   toast.error("Submission failed. Please try again.");
      toast.error(error.message);
    }
  };

  return (
    <section className="ContactForm text-white py-5">
      <div className="container">
        <div className="innercontainer">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-4">
                <h3 className="title">
                  {props.secTitle || `Ready to chat about your project?`}
                </h3>
                <p className="lead">
                  {props.secDescription ||
                    `Get in touch today to see how we can help your business achieve
              its full potential online.`}
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Name"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Company Name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control form-control-lg"
                      rows="5"
                      placeholder="Write Your Message..."
                      name="data_message"
                      value={formData.data_message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="sendmessage btn   btn-lg">
                    {props.btnText || `Send Message`}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
