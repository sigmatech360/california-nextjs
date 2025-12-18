import React from 'react'
import plusimg1 from "../../Assets/newChildPagesAssets/emailhosting/professional-1.webp"
import plusimg2 from "../../Assets/newChildPagesAssets/emailhosting/send.webp"
import plusimg3 from "../../Assets/newChildPagesAssets/emailhosting/follow-up.webp"
import plusimg4 from "../../Assets/newChildPagesAssets/emailhosting/authentication.webp"
import plusimg5 from "../../Assets/newChildPagesAssets/emailhosting/html.webp"
import Link from 'next/link'

const EmailProfessionalPlus = () => {
  return (
    <section className='email-professional-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="profesional-plus-box1">
                        <div className="professional-plus-txt">
                            <h4>Custom Domains</h4>
                            <p>Our custom domain email hosting gives your business a professional identity by aligning every email address with your brand name. It builds trust, strengthens recognition, and ensures all communication looks consistent, credible, and uniquely yours.</p>
                            <Link href="/about">More About Us</Link>
                        </div>
                        <div className="professional-plus-img">
                            <img src={plusimg1.src} alt="Custom Domains" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="email-send-box">
                        <div className="email-send-txt">
                            <h4>Spam filtering</h4>
                            <Link href="/about">More About Us</Link>
                        </div>
                        <div className="email-send-img">
                            <img src={plusimg2.src} alt="Spam filtering" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="email-followup-box">
                        <div className="email-followup-txt">
                            <h4>Data encryption</h4>
                             <Link href="/about">More About Us</Link>
                        </div>
                        <div className="email-followup-img">
                            <img src={plusimg3.src} alt="Data encryption" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="email-authenticate-box">
                        <div className="email-authenticate-txt">
                            <h4>Cross-device access</h4>
                             <Link href="/about">More About Us</Link>
                        </div>
                        <div className="email-authenticate-img">
                            <img src={plusimg4.src} alt="Cross-device access" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="email-html-box">
                        <div className="email-html-txt">
                            <h4>Cloud storage integration</h4>
                             <Link href="/about">More About Us</Link>
                        </div>
                        <div className="email-html-img">
                            <img src={plusimg5.src} alt="Cloud storage integration" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EmailProfessionalPlus
