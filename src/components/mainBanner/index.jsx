import React, { useEffect, useState } from "react";

// import heroimgDesktop from "../../Assets/heroimg-desktop.webp";
// import heroimgTablet from "../../Assets/heroimg-tablet.webp";
// import heroimgMobile from "../../Assets/heroimg-mobile.webp";

import heroimg2 from "../../Assets/heroimg2.webp";
import Link from 'next/link';

import heroimgMobile from "../../Assets/heroimg-320.webp";
import heroimgTablet from "../../Assets/heroimg-480.webp";
import heroimgDesktop from "../../Assets/heroimg-636.webp";

const MainBanner = () => {
  const [imageSrc, setImageSrc] = useState(heroimgDesktop);

  const updateImage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      setImageSrc(heroimgMobile);
      console.log("mobile screen");
    } else if (screenWidth <= 768) {
      console.log("tablet screen");
      setImageSrc(heroimgTablet);
    } else {
      console.log("desktop screen");
      setImageSrc(heroimgDesktop);
    }
  };

  useEffect(() => {
    // Run on mount
    updateImage();

    // Listen to window resize
    window.addEventListener("resize", updateImage);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", updateImage);
  }, []);
  return (
    <section className="hero">
      <div className="container">
        <div className="heroinner">
          <div className="row justify-content-center  align-items-cener">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="hero-content">
                <div>
                  <h1
                    className="title"
                    // data-aos="fade-up"
                    // // data-aos-duration="500"
                    // data-aos-offset="50"
                  >
                    Your Growth Starts <span>With</span> A Great Web Design
                  </h1>
                  <p
                    className="para me-lg-5 me-0 pe-lg-5 pe-0"
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                    // data-aos-offset="50"
                  >
                    <span>California Web Coders</span> excel at creating
                    websites that build connections, fuel growth, and ensure
                    long-term success.
                  </p>
                  <Link
                    href={"/our-work"}
                    className="herobtn"
                    // data-aos="fade-up"
                    // data-aos-duration="1000"
                    // data-aos-offset="50"
                  >
                    View Our Work
                  </Link>
                </div>
                <div className="google-review mt-4">
                  <img
                    src={heroimg2.src}
                    alt="Google Logo"
                    className="google-logo"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="hero-img-right"
                // data-aos="fade-left"
                // data-aos-duration="1000"
                // data-aos-offset="50"
              >
                {/* <img
                  src={heroimgDesktop}
                  alt="Responsive Design Showcase"
                  className="heroimg"
                  width={360}
                  height={196}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                /> */}
                {/* <img
                  src={heroimgMobile} // Default image for smaller screens
                  srcSet={`${heroimgDesktop} 1024w, ${heroimgTablet} 768w, ${heroimg2} 480w`} // Dynamic srcset for responsive images
                  sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 50vw,
                  33vw"
                  alt="Responsive Design Showcase"
                  className="heroimg"
                  width={360}
                  height={196}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                /> */}
                {/* <img
                  src={heroimgMobile} // Fallback image for small screens
                  srcSet={`${heroimgMobile} 336w, ${heroimgDesktop} 696w`}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  alt="Responsive Design Showcase"
                  className="heroimg"
                  width={360}
                  height={196}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                /> */}
                <img
                  src={imageSrc.src}
                  alt="Responsive Design Showcase"
                  className="heroimg"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;

