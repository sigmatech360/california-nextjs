import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    referral: "",
    businessDetails: "",
  });

  const [loading, setLoading] = useState(false);

  const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/free-Consultation`,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          about_cwc: formData.referral,
          business: formData.businessDetails,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Your query has been submitted successfully! We’ll contact you shortly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          referral: "",
          businessDetails: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        // Backend responded with an error status (e.g., 419, 500, etc.)
        if (error.response.status === 419) {
          toast.error("CSRF token mismatch — please ask backend to whitelist this API route.");
        } else {
          toast.error(error.response.data.message || "Server error. Please try again later.");
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="book-consultation-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="book-consultation-box">
              <h3>Book A Free Consultation</h3>
              <div className="book-consultation-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="">Select Your Service</option>
                          <option value="logo design">Logo Design</option>
                          <option value="website design">Web Design</option>
                          <option value="cms development">CMS Development</option>
                          <option value="digital marketing">Digital Marketing</option>
                          <option value="custom web development">Custom Web Development</option>
                          <option value="app development">App development</option>
                          <option value="hosting & domain">Hosting & Domain</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="referral"
                          placeholder="How Did You Hear About CWC?"
                          value={formData.referral}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="businessDetails"
                          placeholder="Tell Us About Your Business"
                          value={formData.businessDetails}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-form-btn">
                        <button type="submit" disabled={loading}>
                          {loading ? "Submitting..." : "Submit Your Request"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
