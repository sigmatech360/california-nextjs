import React from "react";
import { Accordion } from "react-bootstrap";

const InnerServicesSec = (props) => {
  const allOpenKeys = props.serviceData.map((_, index) => index.toString());
  return (
    <section className="innerServicesSec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="secHead">
              <h3 className="secTitle">{props.title}</h3>
              <p>{props.description}</p>
            </div>
          </div>

          <div className="col-md-12">
            <Accordion activeKey={allOpenKeys} alwaysOpen>
              {props.serviceData.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={item.id}>
                  <Accordion.Header as="h4">{item.question}</Accordion.Header>
                  {/* <h4 className="accordion-header">
                        <Accordion.Button as="div" className="w-100 text-start">
                          {item.question}
                        </Accordion.Button>
                      </h4> */}
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServicesSec;
