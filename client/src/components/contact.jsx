import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Webheader from "./webheader";

export default function Contact() {
  return (
    <>
      <Webheader />
      <Container className="my-5">
        <h1>Contact Us</h1>
        <Row className="my-4">
          <Col md={6}>
            <h3>Our Office Address</h3>
            <p>Mala-Gov.Hospital road</p>
            <p>Thrissur, Kerala</p>
          </Col>
          <Col md={6}>
            <h3>Email Us</h3>
            <p>
              <a href="mailto:info@abheesinteriors.com">
                info@abheesinteriors.com
              </a>
            </p>
            <p>
              <a href="mailto:saju@abheesinteriors.com">
                saju@abheesinteriors.com
              </a>
            </p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={6}>
            <h3>Call Us</h3>
            <p>
              <a href="tel:+919544595880">+91 9544595880</a>
            </p>
            <p>
              <a href="tel:+917907534215">+91 7907534215</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
