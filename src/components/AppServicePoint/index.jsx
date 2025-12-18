// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import webchoosvideo from "../../Assets/newChildPagesAssets/webapp/choosewebvideo.mp4"

// const AppServicePoint = ({
//   AppServicePointSec,
//   secTitle,
//   secTitleBlue,
//   pointPara,
//   listItems = [],
//   imageSrc,
//   reverse,
//   appServicePoinbg,
//   appContainerClass,
//   servicePointClass,
//   miniHead,
//   serviceImgBox,
//   imageAlt = "Service Illustration",
// }) => {
//   const isReversed = reverse;

//   const rowClasses = isReversed
//     ? "row align-items-center flex-lg-row-reverse flex-column-reverse"
//     : "row align-items-center flex-lg-row flex-column-reverse";

//   return (
//     <section className={AppServicePointSec}>
//       <div className="container">
//         <div className={appContainerClass}>
//           <div className={rowClasses}>
//             <div className="col-lg-6">
//               <div className={serviceImgBox || "app-service-pointimg"}>
//                 <img
//                   src={imageSrc}
//                   alt={imageAlt}
//                   className={servicePointClass || "img-fluid"}
//                 />
//                 <video src={webchoosvideo} autoPlay muted loop playsInline className="w-100 webchoosevideo h-auto"></video>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className={appServicePoinbg || "appservice-pointtxt"}>
//                 <h6>{miniHead}</h6>
//                 <h4>
//                   {secTitle} <span>{secTitleBlue}</span>
//                 </h4>
//                 <p>{pointPara}</p>
//                 <ul>
//                   {listItems.map((item, index) => (
//                     <li key={index}>
//                       {" "}
//                       <FaCheckCircle /> {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppServicePoint;


import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import webchoosvideo from "../../Assets/newChildPagesAssets/webapp/choosewebvideo.mp4";

const AppServicePoint = ({
  AppServicePointSec,
  secTitle,
  secTitleBlue,
  pointPara,
  listItems = [],
  imageSrc,
  reverse,
  appServicePoinbg,
  appContainerClass,
  servicePointClass,
  miniHead,
  serviceImgBox,
  imageAlt = "Service Illustration",
}) => {
  const isReversed = reverse;

  const rowClasses = isReversed
    ? "row align-items-center flex-lg-row-reverse flex-column-reverse"
    : "row align-items-center flex-lg-row flex-column-reverse";

  const textAos = isReversed ? "fade-left" : "fade-right";
  const imgAos = isReversed ? "fade-right" : "fade-left";

  return (
    <section className={AppServicePointSec}>
      <div className="container">
        <div className={appContainerClass}>
          <div className={rowClasses}>
            {/* IMAGE / VIDEO SIDE */}
            <div
              className="col-lg-6"
              data-aos={imgAos}
              data-aos-duration="1000"
              data-aos-offset="100"
            >
              <div className={serviceImgBox || "app-service-pointimg"}>
                <img
                  src={imageSrc?.src}
                  alt={imageAlt}
                  className={servicePointClass || "img-fluid"}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
                <video
                  src={webchoosvideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-100 webchoosevideo h-auto"
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                ></video>
              </div>
            </div>

            {/* TEXT CONTENT SIDE */}
            <div
              className="col-lg-6"
              data-aos={textAos}
              data-aos-duration="1000"
              data-aos-offset="100"
            >
              <div className={appServicePoinbg || "appservice-pointtxt"}>
                <h6 data-aos="fade-up" data-aos-delay="100">
                  {miniHead}
                </h6>

                <h4 data-aos="fade-up" data-aos-delay="200">
                  {secTitle} <span>{secTitleBlue}</span>
                </h4>

                <p data-aos="fade-up" data-aos-delay="300">
                  {pointPara}
                </p>

                <ul data-aos="fade-up" data-aos-delay="400">
                  {listItems.map((item, index) => (
                    <li
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={500 + index * 100} 
                    >
                      <FaCheckCircle /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppServicePoint;

