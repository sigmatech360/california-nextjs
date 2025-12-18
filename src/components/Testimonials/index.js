import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/free-mode";
// import { Autoplay } from "swiper/modules";

import testimonialimg1 from "../../Assets/testimonialimg1.webp";
import beauCooper from "../../Assets/beauCooper.webp";
import Carlo from "../../Assets/Carlo.webp";
import joe from "../../Assets/joe.webp";

import HoldenHoffington from "../../Assets/HoldenHoffington.webp";
import RicardoMineriello from "../../Assets/RicardoMineriello.webp";
import JessyMatayer from "../../Assets/JessyMatayer.webp";

import HelenaSoretti from "../../Assets/HelenaSoretti.webp";
import BillNewman from "../../Assets/BillNewman.webp";
import AllineMccoy from "../../Assets/AllineMccoy.webp";

import "./index.css";

const testimonials = [
  {
    name: "Nelson Ventura",
    title: "E-commerce owner",
    text: "Troy and Jay from California Web Coders were quick, professional, and truly understood my logo vision. The final design was high-quality and spot-on. Highly efficient and collaborative team.",
    image: HoldenHoffington.src,
  },
  {
    name: "Jessy Matayer",
    title: "Businessman",
    text: "Troy Maxwell created an amazing logo and flyer for me. The work was excellent, and I’m very happy with the result. Highly recommended for anyone needing design help.😊",
    image: RicardoMineriello.src,
  },
  {
    name: "Eduardo Domingo",
    title: "Marketing director",
    text: "Troy and Matthew guided me through logo design with helpful advice and fair pricing. The final result exceeded my expectations. I truly appreciated their attention and professionalism.",
    image: BillNewman.src,
  },
  {
    name: "LJC Homes",
    title: "Data analyst",
    text: "The team went beyond expectations to perfect my logo design. Their dedication and flexibility impressed me. I’ll definitely work with them again for future logo projects and design needs.",
    image: AllineMccoy.src,
  },
];
const testimonials2 = [
  {
    name: "Rodney Winston",
    title: "Digital strategist",
    text: "Working with John Byers and California Web Coders was seamless. They answered all my questions promptly and delivered exactly what I needed. Looking forward to collaborating with them again soon.",
    image: HelenaSoretti.src,
  },
  {
    name: "Beau Cooper",
    title: "Businessman",
    text: "California Web Coders built my website fast and made it look great. The price was fair, and the team was easy to work with. I’m very satisfied with the outcome.",
    image: beauCooper.src,
  },
  {
    name: "Joe Joe",
    title: "Creative director",
    text: "Web Coders delivered excellent work for the ABA Caribbean League. Special thanks to Troy Maxwell and Jay Scott. We’ll definitely be coming back to them for future projects.",
    image: joe.src,
  },
  {
    name: "Carlo Grassetti",
    title: "Content creator",
    text: "Alex was patient, knowledgeable, and supportive throughout the process. He went above and beyond to meet my needs. Great experience working with him and California Web Coders overall.",
    image: Carlo.src,
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="testimonial-head">
              <h2
                className="testimonialhead1"
                data-aos="fade-right"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                Testimonials
              </h2>
              <h3
                className="title"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                Our <span className=" ">clients love working</span> with us
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="testimonial-cards mb-4">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div className="testimonial-card" key={index}>
                    <div className="testimonial-card-head">
                      <div className="testimonial-img">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-card-head-text">
                        <p className="name">{testimonial.name}</p>
                        <p className="business ">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="testimonial-card-body">{testimonial.text}</p>
                  </div>
                ))}
              </Slider>
              {/* <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={8000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={false}
                freeMode={true}
                freeModeMomentum={false}
                allowTouchMove={false}
                grabCursor={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                className="mySwiper"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-card">
                      <div className="testimonial-card-head">
                        <div className="testimonial-img">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className="testimonial-card-head-text">
                          <p className="name">{testimonial.name}</p>
                          <p className="business">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="testimonial-card-body">
                        {testimonial.text}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
            <div className="testimonial-cards">
              <Slider {...settings} rtl={true}>
                {testimonials2.map((testimonial, index) => (
                  <div className="testimonial-card" key={index}>
                    <div className="testimonial-card-head">
                      <div className="testimonial-img">
                        <img
                          src={testimonial.image}
                          loading="lazy"
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="testimonial-card-head-text">
                        <p className="name">{testimonial.name}</p>
                        <p className="business ">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="testimonial-card-body">{testimonial.text}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
