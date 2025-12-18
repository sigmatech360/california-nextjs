import React from 'react'

const DomainPricingCards = () => {
  return (
    <section className='domain-pricing-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="domain-pricing-card">
                        <h4>.com</h4>
                        <p>Special Price  <span>$5.99</span></p>
                    </div>
                </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="domain-pricing-card">
                        <h4>WordPress Hosting</h4>
                        <p>Starting   <span>$2.99/mo</span></p>
                    </div>
                </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="domain-pricing-card">
                        <h4>Web Hosting</h4>
                        <p>Starting   <span>$2.99/mo</span></p>
                    </div>
                </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="domain-pricing-card">
                        <h4>FreeWordPress</h4>
                        <p>migration  </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DomainPricingCards