import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "./style.css";

import modalMobileImg from "../../Assets/modal-mobile-img.webp";
import { toast } from "react-toastify";

const FormModal = ({ show, handleClose }) => {
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
        handleClose();
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
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      className="formModal-sec"
      centered
    >
      <Modal.Header closeButton className="border-0" />

      <Modal.Body>
        <div className="formModal-formContent-circle">
          <div className="formModal-formContent-circle-1">
            <div className="formModal-formContent-circle-2"></div>
          </div>
        </div>
        <div className="formModal-content">
          <div className="formModal-imgDiv">
            <div className="formModalImg">
              <img
                src={modalMobileImg.src}
                className="img-fluid"
                alt="Mobile Image"
              />
            </div>
          </div>
          <div className="formModal-formContent">
            <div className="formModal-formContent-head">
              <h3>Ready to chat about your project?</h3>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="company_name">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Company Name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="phone">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="data_message">
                <textarea
                  className="form-control form-control-lg"
                  rows="3"
                  placeholder="Write Your Message..."
                  name="data_message"
                  value={formData.data_message}
                  onChange={handleChange}
                  required
                ></textarea>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn-theme">
                  Request a quote
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
