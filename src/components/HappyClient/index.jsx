import React from 'react'
import construction from "../../Assets/designingpage-images/landingpage/construction.svg"
import dental from "../../Assets/designingpage-images/landingpage/dental.svg"
import business from "../../Assets/designingpage-images/landingpage/business.svg"
import healthcare from "../../Assets/designingpage-images/landingpage/healthcare.svg"
import entertainment from "../../Assets/designingpage-images/landingpage/entertainment.svg"
import restaurants from "../../Assets/designingpage-images/landingpage/restaurant.svg"
import filmstudio from "../../Assets/designingpage-images/landingpage/filmstudio.svg"
import law from "../../Assets/designingpage-images/landingpage/law.svg"
import consulting from "../../Assets/designingpage-images/landingpage/consulting.svg"
import drug from "../../Assets/designingpage-images/landingpage/drug.svg"
import clothing from "../../Assets/designingpage-images/landingpage/cloth.svg"
import spa from "../../Assets/designingpage-images/landingpage/spa.svg"
import automobile from "../../Assets/designingpage-images/landingpage/automobile.svg"
import fourbusiness from "../../Assets/designingpage-images/landingpage/fourbusiness.svg"
import photography from "../../Assets/designingpage-images/landingpage/photography.svg"
import art from "../../Assets/designingpage-images/landingpage/art.svg"
import hotel from "../../Assets/designingpage-images/landingpage/hotels.svg"
import food from "../../Assets/designingpage-images/landingpage/food.svg"
import ecommerce from "../../Assets/designingpage-images/landingpage/ecommerce.svg"
import education from "../../Assets/designingpage-images/landingpage/education.svg"

const HappyClient = () => {
  return (
    <section className='happy-client-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="happy-client-head">
                        <h6>A Web Design Agency That Turn Ideas & Dreams in Reality</h6>
                        <h2>From Concept To Completion, We Cater To Entire <span>Landing Page</span> Process</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="happy-clients">
                        <div className="happy-client-box">
                            <h3>400+</h3>
                            <h5>Projects Ordered</h5>
                        </div>
                        <div className="happy-client-box">
                            <h3>1000+</h3>
                            <h5>Happy Clients</h5>
                        </div>
                        <div className="happy-client-box">
                            <h3>900+</h3>
                            <h5>Projects Completed</h5>
                        </div>
                        <div className="happy-client-box">
                            <h3>300+</h3>
                            <h5>Comments</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="happy-client-logotxt">
                        <div className="logotxt-box">
                            <img src={construction.src} alt="img" />
                            <h5>Construcation</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={dental.src} alt="img" />
                            <h5>Dental</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={business.src} alt="img" />
                            <h5>Business</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={healthcare.src} alt="img" />
                            <h5>Healthcare</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={entertainment.src} alt="img" />
                            <h5>Entertainment</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={restaurants.src} alt="img" />
                            <h5>Resturants</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={filmstudio.src} alt="img" />
                            <h5>Film & Studio</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={law.src} alt="img" />
                            <h5>Law</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={consulting.src} alt="img" />
                            <h5>Consultating</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={drug.src} alt="img" />
                            <h5>Drug</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={clothing.src} alt="img" />
                            <h5>Clothing</h5>
                        </div><div className="logotxt-box">
                            <img src={spa.src} alt="img" />
                            <h5>Spa</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={automobile.src} alt="img" />
                            <h5>Automobile</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={fourbusiness.src} alt="img" />
                            <h5>Business</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={photography.src} alt="img" />
                            <h5>Photography</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={art.src} alt="img" />
                            <h5>Art</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={hotel.src} alt="img" />
                            <h5>Hotels</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={food.src} alt="img" />
                            <h5>Food</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={ecommerce.src} alt="img" />
                            <h5>E-Commerce</h5>
                        </div>
                        <div className="logotxt-box">
                            <img src={education.src} alt="img" />
                            <h5>Education</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HappyClient