import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "../footer/footer.css";

const Footer = () => {
  return (
    <>
      <Container fluid className="custom-bg-color-footer p-4">
        <Row>
          <Col md={4} className="text-center custom-info-title">
            <h4 className="text-info">Dott.ssa Marta Corda</h4>
            <p className="fs-5 text-white">
              Disegnamo progetti di Didatica Efficace e progetti in rete con le
              scuole, ascoltando gli studenti e le famiglie.
            </p>
          </Col>
          <Col md={4} className="text-center custom-info-title">
            <h4 className="fs-5 text-info">Explore</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light fs-5 text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-light fs-5 text-decoration-none"
                >
                  Chi siamo
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center custom-info-title">
            <h4 className="text-info">Contatti</h4>

            <a
              className="text-decoration-none text-white fs-5"
              href="mailto:breakmeet.contact@gmail.com"
            >
              dott.ssamartacorda@gmail.com
            </a>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center text-white">
          &copy; {new Date().getFullYear()} Pedagogia Familiare. Tutti i diritti
          riservati.
        </p>
      </Container>
    </>
  );
};

export default Footer;
