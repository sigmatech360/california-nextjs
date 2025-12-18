import React from "react";

const OurProcess = ({
  sectitle,
  sectitleblue,
  absltImg,
  videoSrc,
  processSteps = [], 
}) => {
  return (
    <section className="our-process-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="our-process-videotxt">
              <h3>
                {sectitle} <br /> <span>{sectitleblue}</span>
              </h3>
                <video src={videoSrc} autoPlay muted loop className="w-100"></video>
                <div className="our-process-absltimg">
                  <img src={absltImg.src} alt="process visual" className="img-fluid" />
                </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="our-process-txt">
              <ul>
                {processSteps.map((step, index) => (
                  <li key={index}>
                    <h4>
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                      {step.title}
                    </h4>
                    <p>{step.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
