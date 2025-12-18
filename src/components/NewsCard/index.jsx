import React from "react";
import "./style.css"

const NewsCard = (props) => {
  return (
    <div className="news-card">
      <div className={`news-card-img ${props.imgClass}`}>
        <img src={props.image.src} alt="img" className="img-fluid rounded" />
      </div>
      {/* <img src={props.image} className="img-fluid rounded" /> */}
      {props.description && (
        <div className="news-card-content">
          <p className="projectpara mb-0">{props.description}</p>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
