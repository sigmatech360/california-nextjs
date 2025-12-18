import React from 'react'
import { Accordion } from 'react-bootstrap'

const LocalSpecialist = ({ shortHeading , mainHeading , description, expertise = [] }) => {
  return (
    <section className='local-specialist-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="local-specialist-txt">
                        <h6 className='shorttop-head text-white'>{shortHeading}</h6>
                        <h2 className='mainihead text-white'>{mainHeading}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="location-expertises mt-4">
                        <Accordion defaultActiveKey="0" alwaysOpen>
                            {expertise.map((faq, index) => (
                            <Accordion.Item eventKey={String(index)} key={index}>
                                <Accordion.Header as="h3">{faq.header}</Accordion.Header>
                                <Accordion.Body>{faq.content}</Accordion.Body>
                            </Accordion.Item>
                            ))}
                        </Accordion>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LocalSpecialist