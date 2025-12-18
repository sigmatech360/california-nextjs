import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import portfolioimg1 from "../../Assets/designingpage-images/landingpage/portfolio-design-img1.webp"

const DesignPortfolio = () => {
  return (
    <section className="design-portfolio-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="design-portfolio-head">
              <h6>Portfolio</h6>
              <h2>Create Visually Captivating Designs With Ease</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </p>
            </div>
          </div>
        </div>
        <Tabs>
          <div className="row">
            <div className="col-lg-3">
              <div className="design-portfolio-tabtxt">
                <TabList>
                  <Tab>E-Commerce</Tab>
                  <Tab>Construcation</Tab>
                  <Tab>Resturants</Tab>
                  <Tab>Consultating</Tab>
                  <Tab>Spa</Tab>
                  <Tab>Education</Tab>
                  <Tab>Hotels</Tab>
                  <Tab>Education</Tab>
                  <Tab>Hotels</Tab>
                </TabList>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="design-portfolio-tabimg">
                <TabPanel>
                  <img src={portfolioimg1.src} alt="design portfolio img" />
                </TabPanel>
                <TabPanel>
                  <img src={portfolioimg1.src} alt="design portfolio img" />
                </TabPanel>
                <TabPanel>
                  <img src={portfolioimg1.src} alt="design portfolio img" />
                </TabPanel>
                <TabPanel>
                  <img src={portfolioimg1.src} alt="design portfolio img" />
                </TabPanel>
                <TabPanel>
                  <img src={portfolioimg1.src} alt="design portfolio img" />
                </TabPanel>
                <TabPanel>
                  <img src={portfolioimg1.src} alt="design portfolio img" />
                </TabPanel>
                <TabPanel>
                  <img src={portfolioimg1.src} alt="design portfolio img" />
                </TabPanel>
                <TabPanel>
                  <img src={portfolioimg1.src} alt="design portfolio img" />
                </TabPanel>
                <TabPanel>
                  <img src={portfolioimg1.src} alt="design portfolio img" />
                </TabPanel>

                <div className="design-portfolio-end">
                  <Link href="/get-intouch" className="portofolio-quote-btn">Request A Quote</Link>
                  <div className="about-number about-number-anchor">
                    <a href="tel:+16193352364">
                      <span>
                        <FaPhoneAlt />
                      </span>
                      <p>+1 (619) 335-2364</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default DesignPortfolio;

