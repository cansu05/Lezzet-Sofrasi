import React from "react";
import "../../styles/hero.css";
import { Col, Container, Row } from "reactstrap";

const Hero = () => {
  return (
    <section className="hero__container">
      <Container>
        <Row>
          <Col lg='12'> 
            <h2>
              İlham alın, tutkuyla yemek yapın ve sofrada <br /> unutulmaz
              anların tadını çıkarın.
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
