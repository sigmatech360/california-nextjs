import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';

const DomainCards = ({ domainCards }) => {
  return (
    <section className="domain-cards-sec">
      <div className="container">
        <div className="row">
          {domainCards?.map((card, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="domain-card">
                <img src={card.domainCardImg.src} alt={card.domainCardHead} />
                <h4>{card.domainCardHead}</h4>
                <p>{card.domainCardPara}</p>
                <Link href={card.domainCardLink || "#"}><FaArrowRightLong />  {card.domainCardBtn}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainCards;

