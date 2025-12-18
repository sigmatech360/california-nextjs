import React from 'react'
import Image from "next/image";
import Advantagepython1 from "../../Assets/newChildPagesAssets/pythondevelopment/advantage-python-1.svg";
import Advantagepython2 from "../../Assets/newChildPagesAssets/pythondevelopment/advantage-python-2.svg";
import Advantagepython3 from "../../Assets/newChildPagesAssets/pythondevelopment/advantage-python-3.svg";


const PythonMaintaince = () => {

     const maintainCards = [
        {
            id: 1,
            icon: <Image src={Advantagepython2.src} alt="Intelligence" width={40} height={40} />,
            title: "Intelligence",
            description: "Build smarter systems powered by data and automation",
        },
        {
            id: 2,
            icon: <Image src={Advantagepython1.src} alt="Integration" width={40} height={40} />,
            title: "Integration",
            description: "Python is open source and compatible with major frameworks such as React, Angular, and others.",
        },
        {
            id: 3,
            icon: <Image src={Advantagepython3.src} alt="Innovation" width={40} height={40} />,
            title: "Innovation",
            description: "Transform creative concepts into high-performing solutions.",
        },
  ];

  return (
    <section className='python-maintaince-sec'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="python-maintaince-head">
                        <h2>Advantages of <span>Python Development </span></h2>
                        <p>Simplify custom web development with intelligent automation, seamless integration, and innovative frameworks that create digital solutions for every industry.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {maintainCards.map((card) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={card.id}>
                        <div className="python-maintaince-box">
                            <span role="img" aria-label={card.title}>
                            {card.icon}</span>
                            <h4>{card.title}</h4>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default PythonMaintaince