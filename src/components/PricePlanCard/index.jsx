// import React, { useState } from "react";
// import ListIcon from "../ListIcon";
// import FormModal from "../FormModal";
// import "./style.css"

// const PricePlanCard = (props) => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <>
//       <div className="price-plan-card">
//         <div className="price-plane-head">
//           {props.packageInfo && (<p className="price-plane-head-info">{props.packageInfo}</p>)}
//           <p className="price-plane-head-title">{props.name}</p>
//           <p className="price-card-discount">
//             <span>${props.actualPrice}</span> ONLY
//           </p>
//         </div>

//         <h4 className="price-plane-price">${props.discountPrice}</h4>

//         <div className="price-plan-list-section">
//           {props.servicesList.map((section, sectionIndex) => (
//             <div className="price-plan-list-section-content" key={sectionIndex}>
//               {/* Conditionally render section title if available */}
//               {section.title && (
//                 <h6 className="price-plan-section-title">{section.title}</h6>
//               )}

//               {/* Render each item in the section */}
//               <div className="price-plan-list">
//                 {section.items.map((item, itemIndex) => (
//                   <ListIcon
//                     key={itemIndex}
//                     text={item.name}
//                     included={item.included}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           type="button"
//           className="price-card-btn"
//           onClick={() => setShowModal(true)}
//         >
//           Order Now
//         </button>

//         <div className="price-card-footer">
//           <p className="shareidea">Share your idea?</p>
//           <p className="price-card-num">{props.number}</p>
//         </div>
//       </div>

//       <FormModal show={showModal} handleClose={() => setShowModal(false)} />
//     </>
//   );
// };

// export default PricePlanCard;

// New
import React, { useState } from "react";
import ListIcon from "../ListIcon";
import FormModal from "../FormModal";
import "./style.css";

const PricePlanCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="price-plan-card">
        <div className="price-plane-head">
          {props.packageInfo && (
            <p className="price-plane-head-info">{props.packageInfo}</p>
          )}

          <h2 className="price-plane-head-title">{props.name}</h2>

          <p className="price-card-discount">
            <span>${props.actualPrice}</span> ONLY
          </p>
        </div>

        <h4 className="price-plane-price">${props.discountPrice}</h4>

        <div className="price-plan-list-section">
          {props.servicesList.map((section, sectionIndex) => (
            <div className="price-plan-list-section-content" key={sectionIndex}>
              {section.title && (
                <h6 className="price-plan-section-title">{section.title}</h6>
              )}

              <div className="price-plan-list">
                {section.items.map((item, itemIndex) => (
                  <ListIcon
                    key={itemIndex}
                    text={item.name}
                    included={item.included}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="price-card-btn"
          onClick={() => setShowModal(true)}
          aria-label="Order Now"
        >
          Order Now
        </button>

        <div className="price-card-footer">
          <p className="shareidea">Share your idea?</p>
          <p className="price-card-num">{props.number}</p>
        </div>
      </div>

      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default PricePlanCard;
