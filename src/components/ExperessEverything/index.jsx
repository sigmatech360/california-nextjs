import React, { useEffect, useState } from "react";
import PersonalInformationBox from "../PersonalInformationBox";
import Securesystem from "../../Assets/newChildPagesAssets/smartaiintegration/securesystem.svg"
import Certifiedexpert from "../../Assets/newChildPagesAssets/smartaiintegration/certifiedexpert.svg"
import Professionalteam from "../../Assets/newChildPagesAssets/smartaiintegration/professionalteam.svg"
import Speedmeter from "../../Assets/newChildPagesAssets/smartaiintegration/speedmeter.svg"
import Image from "next/image";


const ProgressBar = ({ title, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      if (start < value) {
        start++;
        setProgress(start);
      } else {
        clearInterval(timer);
      }
    }, 15);
    return () => clearInterval(timer);
  }, [value]);


   return (
    <div className="service-progress-bar">
      <div className="progress-top">
        <h5>{title}</h5>
      </div>
      <div className="progress-container">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ><span>{progress}%</span></div>
      </div>
    </div>
  );
};


const ExperessEverything = () => {
  const infoData = [
    {
      Icon: <Image src={Securesystem.src} alt="Securesystem" width={40} height={40} />,
      miniHead: "Tailored AI Architecture",
      miniPara:
        "We design scalable AI frameworks built around your goals that are adaptable, secure, and built for long-term efficiency.",
    },
    {
      Icon: <Image src={Certifiedexpert.src} alt="Certifiedexpert" width={40} height={40} />,
      miniHead: "Cross-Platform Compatibility",
      miniPara:
        "Our AI integrates smoothly with CRMs, ERPs, eCommerce systems, and web apps, ensuring your entire digital ecosystem works intelligently.",
    },
    {
      Icon: <Image src={Professionalteam.src} alt="Professionalteam" width={40} height={40} />,
      miniHead: "Human + Machine Synergy",
      miniPara:
        "We combine strategic consulting with powerful automation, made to empower your team, not replacing it.",
    },
    {
      Icon: <Image src={Speedmeter.src} alt="Speedmeter" width={40} height={40} />,
      miniHead: "Continuous Optimization",
      miniPara:
        "AI evolves, and so do we. Our team monitors and updates integrations to keep your systems performing at their peak.",
    },
  ];

   const progressData = [
    { title: "Machine Learning ", value: 90 },
    { title: "Generative AI", value: 75 },
    { title: "NLP", value: 85 },
    { title: "Predictive Analytics", value: 95 },
    { title: "Chatbot Development", value: 75 },
  ];

  return (
    <section className="experess-everything-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="express-everything-txt">
              <h4>Why Choose Our AI Integration Services</h4>
              <p>
              AI isn’t just technology, for us it’s transformation. At California Web Coders, we blend technical precision with business insight to deliver measurable performance and smarter customer engagement.
              </p>
             {progressData.map((item, index) => (
                <ProgressBar key={index} title={item.title} value={item.value} />
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <PersonalInformationBox infoData={infoData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperessEverything;
