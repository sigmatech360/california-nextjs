import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import serviceimg1 from "../../Assets/designingpage-images/videoanimationpage/service-img-1.webp"
import serviceimg2 from "../../Assets/designingpage-images/videoanimationpage/service-img-2.webp"
import serviceimg3 from "../../Assets/designingpage-images/videoanimationpage/service-img-3.webp"
import serviceimg4 from "../../Assets/designingpage-images/videoanimationpage/service-img-4.webp"

const VideoAnimationService = () => {
  return (
    <section className="video-animation-services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="videoanimation-service-head">
              <h6>Services</h6>
              <h2>Video Animation Services</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="video-animation-tabs">
              <Tabs>
                <div className="row">
                  <div className="col-lg-12">
                    <TabList>
                      <Tab>2D Animation Videos</Tab>
                      <Tab>3D Animation Videos</Tab>
                      <Tab>Reels Videos</Tab>
                      <Tab>Explainer Videos</Tab>
                    </TabList>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <TabPanel>
                        <div className="animation-service-tabpanel">
                            <div className="animation-service-txt">
                                <h4>2D Animated Videos</h4>
                                <p>We create the best 2D animated videos. Animation experts at Logo Leagues can provide the perfect video animation services for your business with a wide range of styles and themes. Whether it's an explainer video, a company video animation, or a marketing piece, we've got everything you need with our video animated production.</p>
                            </div>
                            <div className="animation-service-images">
                                <img src={serviceimg1.src} alt="service img 1" />
                                <img src={serviceimg2.src} alt="service img 2" />
                                <img src={serviceimg3.src} alt="service img 3" />
                                <img src={serviceimg4.src} alt="service img 4" />
                            </div>
                        </div>
                    </TabPanel>
                   <TabPanel>
                        <div className="animation-service-tabpanel">
                            <div className="animation-service-txt">
                                <h4>3D Animated Videos</h4>
                                <p>We create the best 2D animated videos. Animation experts at Logo Leagues can provide the perfect video animation services for your business with a wide range of styles and themes. Whether it's an explainer video, a company video animation, or a marketing piece, we've got everything you need with our video animated production.</p>
                            </div>
                            <div className="animation-service-images">
                                <img src={serviceimg1.src} alt="service img 1" />
                                <img src={serviceimg2.src} alt="service img 2" />
                                <img src={serviceimg3.src} alt="service img 3" />
                                <img src={serviceimg4.src} alt="service img 4" />
                            </div>
                        </div>
                    </TabPanel>
                     <TabPanel>
                        <div className="animation-service-tabpanel">
                            <div className="animation-service-txt">
                                <h4>4D Animated Videos</h4>
                                <p>We create the best 2D animated videos. Animation experts at Logo Leagues can provide the perfect video animation services for your business with a wide range of styles and themes. Whether it's an explainer video, a company video animation, or a marketing piece, we've got everything you need with our video animated production.</p>
                            </div>
                            <div className="animation-service-images">
                                <img src={serviceimg1.src} alt="service img 1" />
                                <img src={serviceimg2.src} alt="service img 2" />
                                <img src={serviceimg3.src} alt="service img 3" />
                                <img src={serviceimg4.src} alt="service img 4" />
                            </div>
                        </div>
                    </TabPanel>
                     <TabPanel>
                        <div className="animation-service-tabpanel">
                            <div className="animation-service-txt">
                                <h4>5D Animated Videos</h4>
                                <p>We create the best 2D animated videos. Animation experts at Logo Leagues can provide the perfect video animation services for your business with a wide range of styles and themes. Whether it's an explainer video, a company video animation, or a marketing piece, we've got everything you need with our video animated production.</p>
                            </div>
                            <div className="animation-service-images">
                                <img src={serviceimg1.src} alt="service img 1" />
                                <img src={serviceimg2.src} alt="service img 2" />
                                <img src={serviceimg3.src} alt="service img 3" />
                                <img src={serviceimg4.src} alt="service img 4" />
                            </div>
                        </div>
                    </TabPanel>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAnimationService;
