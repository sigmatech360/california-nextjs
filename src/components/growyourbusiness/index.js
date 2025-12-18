import React, { useState } from "react";
import "./index.css";
import Link from 'next/link';
import FormModal from "../FormModal";
const Growyourbusiness = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="gorwyourbusiness">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="grow-business-content d-flex justify-content-md-between justify-content-center align-items-center flex-lg-row flex-column gap-3">
                <h2
                  className="title m-0"
                  // data-aos="fade-right"
                  // // data-aos-duration="500"
                  // data-aos-offset="50"
                >
                  {props.title1} {props.title2 && <span>{props.title2}</span>}{" "}
                  {props.title3}
                </h2>
                <button
                  // href={"/get-intouch"}
                  onClick={() => setShowModal(true)}
                  className="clickhere"
                  // data-aos="fade-left"
                  // // data-aos-duration="500"
                  // data-aos-offset="50"
                >
                  {props.btnText || `Click Here To Get Started`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default Growyourbusiness;

