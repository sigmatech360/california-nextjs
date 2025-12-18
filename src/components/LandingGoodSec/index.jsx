import React from 'react'
import GoodCardSec from '../GoodCardSec'
import goodimg1 from "../../Assets/designingpage-images/landingpage/good-img-1.webp"
import goodimg2 from "../../Assets/designingpage-images/landingpage/good-img-2.webp"

const LandingGoodSec = () => {
     const cardData = [
    { 
        cardhead: "Types Of Websites", 
        cardPara: "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market." 
    },
    { 
        cardhead: "Types Of Websites", 
        cardPara: "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market." 
    },
    {   
        cardhead: "Web Design Colors", 
        cardPara: "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market." 
    },
  ];
  return (
    <section className='landing-good-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="good-sec-img">
                        <img src={goodimg1.src} alt="good image one" />
                        <img src={goodimg2.src} alt="good image two" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="good-sec-txt">
                        <h2>What Makes A Good Landing Page Website?</h2>
                        <p>With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps.</p>
                        <p>With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices.</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <GoodCardSec  cards={cardData} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default LandingGoodSec