import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PricePlanCard from "../PricePlanCard";
import '../featureproject/index.css';
import {
  eCommerseWebsitePricingPlansData,
  logoDesignPricingPlansData,
  seoPricingPlansData,
  smmPricingPlansData,
  customWebDevPricingPlansData,
  comboPricingPlansData,
  informativeWebsitePricingPlansData,
  shopifyWebsitePricingPlansData,
  wixWebsitePricingPlansData,
  squareWebsitePricingPlansData,
  maintenanceWebsitePricingPlansData,
} from "../../data";

const PackagesTabs = () => {
  return (
    <div className="col-lg-12">
      <Tabs
        defaultActiveKey="logo-design"
        className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="50"
      >
        <Tab eventKey="logo-design" title="Logo Design">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            {logoDesignPricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>

        <Tab eventKey="informative-websites" title="Informative Websites">
          <div className="row justify-content-center">
            {informativeWebsitePricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="eCommerce-website" title="E Commerce Website">
          <div className="row justify-content-center">
            {eCommerseWebsitePricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="custom-web" title="Custom Web Development">
          <div className="row justify-content-center">
            {customWebDevPricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="seo-tab" title="SEO">
          <div className="row justify-content-center">
            {seoPricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="smm-tab" title="SMM">
          <div className="row justify-content-center">
            {smmPricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="combo-packages" title="Combo Packages">
          <div className="row justify-content-center">
            {comboPricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>
        {/* New */}

        <Tab eventKey="shopify-website" title="Shopify Website">
          <div className="row justify-content-center">
            {shopifyWebsitePricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="wix-website" title="Wix Website">
          <div className="row justify-content-center">
            {wixWebsitePricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="squarespace" title="Squarespace Website">
          <div className="row justify-content-center">
            {squareWebsitePricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="maintenance" title="Website Maintenance">
          <div className="row justify-content-center">
            {maintenanceWebsitePricingPlansData.map((item, index) => (
              <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                <PricePlanCard
                  name={item.name}
                  actualPrice={item.price.actualPrice}
                  discountPrice={item.price.disountPrice}
                  servicesList={item.servicesList}
                  number={item.number}
                />
              </div>
            ))}
          </div>
        </Tab>

        {/*  */}
      </Tabs>
    </div>
  );
};

export default PackagesTabs;
