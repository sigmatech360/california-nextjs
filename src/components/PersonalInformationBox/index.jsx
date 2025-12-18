import React from "react";

const PersonalInformationBox = ({ infoData = [] }) => {
  return (
    <section className="personal-information-boxes">
      <div className="container">
        <div className="row">
          {infoData.map((item, index) => (
            <div className={item.sizeChange || "col-lg-6 col-md-6"} key={index}>
              <div className="personal-information-box">
                <span>{item.Icon}</span>
                <h5>{item.miniHead}</h5>
                <p dangerouslySetInnerHTML={{ __html: item.miniPara }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInformationBox;
