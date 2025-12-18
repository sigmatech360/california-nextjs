import React from 'react';

const LocationExpertise = ({
  shortTopHead,
  mainHead,
  mainPara1,
  mainPara2,
  expertiseItems,
}) => {
  return (
    <section className='location-expertise-sec'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="location-expertise-head">
            <h6 className='shorttop-head text-white'>{shortTopHead}</h6>
            <h2 className='mainhead text-white'>{mainHead}</h2>
            <p>{mainPara1}</p>
            <p>{mainPara2}</p>
            </div>
          </div>
        </div>

        <div className="row">
          {expertiseItems?.map((item, index) => (
            <div className="col-lg-4  col-md-6" key={index}>
              <div className="location-expertise-box">
                <img src={item.img.src} alt="img" />
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LocationExpertise;
