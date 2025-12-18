// import React from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { SiTicktick } from "react-icons/si";
// import Link from 'next/link';

// const CustomAboutCompany = (props) => {


//   const isReversed = props.reverse;

//   const rowClasses = isReversed
//     ? "row align-items-center flex-lg-row-reverse flex-column-reverse"
//     : "row align-items-center flex-lg-row flex-column-reverse";

//   const textAos = isReversed ? "fade-left" : "fade-right";
//   const imageAos = isReversed ? "fade-right" : "fade-left";

//   return (
//     <section className={props.CustomFrontendSec || "custom-frontend-about"}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="frontend-about-company">
//               <h6>{props.miniHead}</h6>
//               <h2>{props.mainHeadStart} <span>{props.mainHeadBlue}</span> {props.mainHead} <span>{props.mainHeadLastBlue}</span>  {props.mainHeadLast}</h2>
//               <img src={props.frontendAboutImg} alt="About Company" />
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="frontend-about-company">
//               <img src={props.frontendAboutImgtwo} alt="img" />
//               <p>{props.aboutPara}</p>
//               <ul
//                 className={props.listClass || ""}
//                 data-aos={textAos}
//                 data-aos-duration="1000"
//                 data-aos-offset="50"
//               >
//                 {props.listItems &&
//                   props.listItems.map((item, index) => (
//                     <li key={index}>
//                       <SiTicktick /> {item}
//                     </li>
//                   ))}
//               </ul>
//               <div className={props.learnmorebtn}>
//                 <Link href="/about">{props.btntext}</Link>
//                 {(props.phoneNumber || props.phoneLink) && (
//                   <div className="about-number">
//                     <span>
//                       <FaPhoneAlt />
//                     </span>
//                     <p>{props.phoneNumber || "+1 (619) 335-2364"}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomAboutCompany;


import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import Link from 'next/link';

const CustomAboutCompany = (props) => {
  const isReversed = props.reverse;

  const rowClasses = isReversed
    ? "row align-items-center flex-lg-row-reverse flex-column-reverse"
    : "row align-items-center flex-lg-row";

  const textAos = isReversed ? "fade-left" : "fade-right";
  const imageAos = isReversed ? "fade-right" : "fade-left";

  return (
    <section className={props.CustomFrontendSec || "custom-frontend-about"}>
      <div className="container">
        <div className={rowClasses}>
          <div className="col-lg-6">
            <div
              className="frontend-about-company"
              data-aos={imageAos}
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              <h6
                data-aos={textAos}
                data-aos-duration="800"
                data-aos-offset="30"
              >
                {props.miniHead}
              </h6>
              <h2
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="40"
              >
                {props.mainHeadStart}{" "}
                <span>{props.mainHeadBlue}</span>{" "}
                {props.mainHead}{" "}
                <span>{props.mainHeadLastBlue}</span>{" "}
                {props.mainHeadLast}
              </h2>
              <img
                src={props.frontendAboutImg.src}
                alt="About Company"
                data-aos={imageAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="frontend-about-company"
              data-aos={textAos}
              data-aos-duration="1000"
              data-aos-offset="50"
            >
              <img
                src={props.frontendAboutImgtwo.src}
                alt="img"
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              />
              <p
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.aboutPara}
              </p>

              <ul
                className={props.listClass || ""}
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.listItems &&
                  props.listItems.map((item, index) => (
                    <li
                      key={index}
                      data-aos={textAos}
                      data-aos-duration="800"
                      data-aos-delay={index * 100}
                    >
                      <SiTicktick /> {item}
                    </li>
                  ))}
              </ul>

              <div
                className={props.learnmorebtn}
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                <Link href="/about">{props.btntext}</Link>

                {(props.phoneNumber || props.phoneLink) && (
                  <div
                    className="about-number about-number-anchor"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="50"
                  >
                    <a href={`tel:${props.phoneNumberLink || "+16193352364"}`}><span>
                      <FaPhoneAlt />
                    </span>
                    <p>{props.phoneNumber || "+1 (619) 335-2364"}</p></a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAboutCompany;


