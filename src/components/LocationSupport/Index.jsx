import React from "react";

const LocationSupport = ({
  minihead,
  mainhead,
  mainheadSpan,
  mainPara,
  supportCards = [],
}) => {
  return (
    <section className="location-support-sec">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-12">
            <div className="location-support-head text-center">
              {minihead && <h6>{minihead}</h6>}
              {mainhead && (
                <h3>
                  <span>{mainheadSpan}</span> {mainhead}
                </h3>
              )}
              {mainPara && <p>{mainPara}</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12"> 
            <div className="location-support-grid">
              {supportCards.map((card, index) => (
                <div className="location-support-card" key={index}>
                  <img src={card.image.src} alt={card.title || "Support"} />
                  <h6>{card.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSupport;
