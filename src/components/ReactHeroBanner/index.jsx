import React from 'react'
import Link from 'next/link'
import reactbanner1 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-1.webp"
import reactbanner2 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-2.webp"
import reactbanner3 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-3.webp"
import reactbanner4 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-4.webp"
import reactbanner5 from "../../Assets/newChildPagesAssets/reactdevelopment/react-banner-5.webp"


const ReactHeroBanner = () => {
  return (
    <section className='react-hero-banner'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12">
                    <div className="react-hero-banner-txt">
                        <h1>Professional  <span>React Developers</span> California Business Can Rely On</h1>
                        <p>Your business deserves a website that feels fast, modern, and dynamic. With our React development California services, we create interactive websites and applications that load quickly, scale effortlessly, and deliver seamless user experiences.</p>
                        <Link href="/get-intouch">Talk to us</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="react-banner-images">
                        <img src={reactbanner5.src} alt="img" />
                        <img src={reactbanner4.src} alt="img" />
                        <img src={reactbanner3.src} alt="img" />
                        <img src={reactbanner2.src} alt="img" />
                        <img src={reactbanner1.src} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReactHeroBanner
