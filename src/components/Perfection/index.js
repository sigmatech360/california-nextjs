import React from "react";
import "./index.css";
const Perfection = () => {
  return (
    <section className="prefection">
      <div className="container">
        <div className=" justify-content-center text-center ">
          <h3 className="title">
            From Pixels to <span> Perfection.</span>
          </h3>
          <p className="para">
            Each design is uniquely crafted to suit the specific needs of every
            business. We strive to showcase and enhance the individuality of
            your brand. Explore some of our recent projects below.
          </p>
        </div>

<div className="col-md-4">
        {/* <div key={news.id} className="p-4 mt-4">
                        <div className="news-card bg-white shadow-sm rounded">
                          <img src={news.image} alt=""   className="img-fluid rounded mb-2" />
                          <div className="p-3">
                            <p className="text-muted small mb-1">{news.date}</p>
                            <h5 className="fw-bold mb-2">{news.title}</h5>
                            <p className="small mb-3">{news.description}</p>
                            <button className="btn btn-outline-primary btn-sm">Learn More</button>
                          </div>
                        </div>
                      </div> */}
                      </div>

      </div>
    </section>
  );
};

export default Perfection;
