import React from "react";

const DomainChooseCard = ({ cards, webHostingBox, webCardCol }) => {
  return (
    <section className="domainchoose-card-sec">
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div className={webCardCol || "col-lg-6 col-md-6"} key={index}>
              <div className={webHostingBox || "domain-choose-card"}>
                {card.icon && (

                  <img src={card.icon.src} alt={card.head} />
                )}
                <h5>{card.head}</h5>
                <p>{card.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainChooseCard;
