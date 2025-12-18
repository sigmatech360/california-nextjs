import React from 'react'
import { IoSearch } from 'react-icons/io5'
import club from "../../Assets/newChildPagesAssets/webmigration/club.webp"
import color from "../../Assets/newChildPagesAssets/webmigration/color.webp"
import online from "../../Assets/newChildPagesAssets/webmigration/online.webp"
import tv from "../../Assets/newChildPagesAssets/webmigration/tv.webp"
import ai from "../../Assets/newChildPagesAssets/webmigration/ai.webp"
import com from "../../Assets/newChildPagesAssets/webmigration/com.webp"
import trustpilotstar from "../../Assets/newChildPagesAssets/webmigration/trustpilot-star.svg"
import trustpilotstars from "../../Assets/newChildPagesAssets/webmigration/trustpilot-stars.svg"

const DomainSearchPrice = () => {
  return (
    <section className='domain-search-buy'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="domain-search-bar">
                        <input type="search" name="" id="" placeholder='Find your perfect domain name...'/>
                        <span><IoSearch /></span>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="domain-prices">
                        <div className="different-domain-price">
                            <img src={club.src} alt="club" />
                            <h6>$9.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={color.src} alt="color" />
                            <h6>$39.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={online.src} alt="online" />
                            <h6>$8.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={tv.src} alt="tv" />
                            <h6>$6.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={ai.src} alt="ai" />
                            <h6>$69.99</h6>
                        </div>
                         <div className="different-domain-price">
                            <img src={com.src} alt="com" />
                            <h6>$69.99</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="trustpilot-txt">
                        <p>Our customers say <span>Excellent</span> <img src={trustpilotstars.src} className='trustpilot-stars' alt="trustpilot review star" /> 4.7 out of 5 based on 7,560 reviews <img src={trustpilotstar.src} className='trustpilotstar' alt="trustpilot star" /> Trustpilot</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DomainSearchPrice