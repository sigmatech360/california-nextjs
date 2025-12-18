import React from 'react'
import blockchain1 from "../../Assets/newChildPagesAssets/blockchaindevelopment/public-blockchain.svg"
import blockchain2 from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchain-integration.svg"
import blockchain3 from "../../Assets/newChildPagesAssets/blockchaindevelopment/maintaincesettingsvg.svg"
import blockchain4 from "../../Assets/newChildPagesAssets/mernstack/migration.svg"
import blockchaincalifornia from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchain-californa.webp"



const BlockchainChoose = () => {
  return (
    <section className='blockchain-choose-us'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="blockchain-choose-head">
                        <h6>Why Choose Us</h6>
                        <h2>California Web Coders, Your Trusted <span>Blockchain Development Company!</span></h2>
                        <p>Partner with California Web Coders for blockchain solutions engineered with precision, purpose, and long-term value. We combine deep technical expertise with practical innovation to deliver systems that don’t just function, they lead. Here’s why businesses choose us:</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="blockchain-choose-allpoints">
                        <div className="blockchain-choose-point">
                            <img src={blockchain1.src} alt="img" />
                            <div className="blockchain-point-txt">
                                <h4>Blockchain Expertise</h4>
                                <p>Delivering complete blockchain solutions, from concept and architecture to deployment, scaling, and post-launch optimization.</p>
                            </div>
                        </div>
                           <div className="blockchain-choose-point">
                            <img src={blockchain2.src} alt="img" />
                            <div className="blockchain-point-txt">
                                <h4>End-to-End Encryption</h4>
                                <p>Protect sensitive data with immutable ledgers and advanced cryptographic verification protocols.</p>
                            </div>
                        </div>
                           <div className="blockchain-choose-point">
                            <img src={blockchain3.src} alt="img" />
                            <div className="blockchain-point-txt">
                                <h4>Boost Operations</h4>
                                <p>Automate workflows with smart contracts that streamline processes and eliminate intermediaries.</p>
                            </div>
                        </div>
                           <div className="blockchain-choose-point">
                            <img src={blockchain4.src} alt="img" />
                            <div className="blockchain-point-txt">
                                <h4>Decentralized Data Storage</h4>
                                <p>Transfer data using secure paths to protect it from breaches, ensuring constant accessibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="blockchain-california-img">
                        <img src={blockchaincalifornia.src} alt="Blockchain California Img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlockchainChoose