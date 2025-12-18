import React from "react";

const CustomCustomerCard = ({ cardsData, cardClass }) => {
  return (
    <section className="custom-customer-sec">
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className={cardClass || "custom-customer-card"}>
                <span>{card.icon}</span>
                <img src={card?.Image?.src} alt={card.cardTitle} className="d-none" />
                <h4>{card.cardTitle}</h4>
                <p>{card.cardPara}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomCustomerCard;
