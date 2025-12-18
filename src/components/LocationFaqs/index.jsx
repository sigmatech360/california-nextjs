
import React from "react";
import { Accordion, AccordionItem } from "react-bootstrap";

const LocationFaqs = ({ miniHead, mainHead, mainHeadSpan, secPara, faqs = [] }) => {
  return (
    <section className="location-faqs-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="location-faqs-txt">
                        {miniHead && <h6>{miniHead}</h6>}
                        {mainHead && <h3>{mainHead} <span>{mainHeadSpan}</span></h3>}
                        {secPara && <p>{secPara}</p>}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="location-faqs">
                        <Accordion defaultActiveKey="0" alwaysOpen>
                            {faqs.map((faq, index) => (
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
  );
};

export default LocationFaqs;
