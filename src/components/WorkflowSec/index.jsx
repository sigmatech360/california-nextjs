import React from "react";

import workflowImg from "../../Assets/workflowImg.webp";
import workflowImgInverted from "../../Assets/workflowImgInverted.webp";

const WorkflowSec = (props) => {
  return (
    <section className="workflowSec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="secHead">
              <h3 className="secTitle">
                {props.title1}{" "}
                {props.title2 && (
                  <span className="colorBlue">{props.title2}</span>
                )}{" "}
                {props.title3}
              </h3>
              <p>{props.description}</p>
            </div>
          </div>
          <div className="workflowSecBoxes">
            <div className="row justify-content-center">
              {props.data.map((item, index) => (
                <div className="col-xl-3 col-lg-4 mb-4" key={index}>
                  <div
                    className={`workflowBox ${
                      item.inverted ? "workflowBoxInverted" : ""
                    }`}
                  >
                    <div className="workflowBoxContent">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                    <div className="workflowBoxImg">
                      <img
                        // src={item.inverted ? workflowImgInverted : workflowImg}
                        src={item.image.src}
                        alt={item.title}
                      />
                    </div>
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

export default WorkflowSec;
