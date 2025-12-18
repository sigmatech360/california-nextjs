import React from 'react';

const GoodCardSec = ({ cards, cardSecBox }) => {
  return (
    <section className='good-card-sec'>
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-lg-4" key={index}>
              <div className={cardSecBox || "good-card-box"}>
                <h4>{card.cardhead}</h4>
                <p>{card.cardPara}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoodCardSec;
