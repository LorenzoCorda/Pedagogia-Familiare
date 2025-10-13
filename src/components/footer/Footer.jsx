import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container fluid className="custom-bg-color-footer p-4">
        <Row>
          <Col md={4} className="text-center custom-info-title">
            <h4 className="text-info">Dott.ssa Marta Corda</h4>
            <p className="fs-5 text-white">
              Disegnamo progetti di Didattica Efficace e progetti in rete con le
              scuole, ascoltando gli studenti e le famiglie.
            </p>
          </Col>
          <Col md={4} className="text-center custom-info-title">
            <h4 className="fs-5 text-info">Esplora</h4>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="d-flex justify-content-center text-decoration-none text-white fs-5"
                >
                  Home
                </Link>

                <Link
                  to="/AboutMePage"
                  className="d-flex justify-content-center text-decoration-none text-white fs-5"
                >
                  Chi sono
                </Link>
                <Link
                  to="/WhoIsPedagogistPage"
                  className="d-flex justify-content-center text-decoration-none text-white fs-5"
                >
                  Chi è il pedagogista?
                </Link>
                <Link
                  to="/PedagogistPage"
                  className="d-flex justify-content-center text-decoration-none text-white fs-5"
                >
                  Pedagogia Familiare
                </Link>

                <Link
                  to="/EffectiveTeaching"
                  className="d-flex justify-content-center text-decoration-none text-white fs-5"
                >
                  Didatica Efficace
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center custom-info-title">
            <h4 className="text-info">Contatti</h4>

            <a
              className="text-decoration-none text-white fs-5"
              href="mailto:dott.ssamartacorda@gmail.com"
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
