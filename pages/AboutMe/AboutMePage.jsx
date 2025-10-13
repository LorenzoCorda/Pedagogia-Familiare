import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../src/components/navbar/Navigation";
import Footer from "../../src/components/footer/Footer";

const AboutMePage = () => {
  return (
    <>
      <Navigation />
      <Container>
        <h1 className="custom-question order-2 text-center display-3 mb-4">
          Chi sono
        </h1>

        <Row className="mb-5">
          <Col md={8} className="mx-auto">
            <p className="lead text-center order-2">
              BreakMeet nasce dalla passione per la street dance e dal desiderio
              di creare connessioni reali tra ballerini e ballerine. Il nostro
              obiettivo è facilitare l’incontro tra dancer, ovunque si trovino,
              per condividere sessioni, allenamenti e ispirazione.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <div className="mb-5 order-2">
              <h2 className="custom-question">Chi c’è dietro BreakMeet?</h2>
              <p>
                BreakMeet è un'idea che si è accesa in Irlanda. <br />
                <br />
                Conoscere altri breaker in giro per il mondo è un'esperienza
                incredibile, ma anche estremamente difficile. Ci si incontrava
                solo tramite passaparola, e io sento l'esigenza di connetterci
                sul serio. <br />
                <br />
                Io sono Lorenzo, breaker e sviluppatore, e questo è BreakMeet.
                Creato
                <strong> dai ballerini, per ballerini</strong>.
              </p>
            </div>

            <div className="mb-5 order-2">
              <h2 className="custom-question">I nostri valori</h2>
              <ul>
                <li>
                  <strong>Comunità:</strong> lo spirito del breaking vive
                  nell’unione.
                </li>
                <li>
                  <strong>Accessibilità:</strong> chiunque può trovare o creare
                  sessioni.
                </li>
                <li>
                  <strong>Inclusività:</strong> ogni stile, ogni background è
                  benvenuto.
                </li>
              </ul>
            </div>
            <div className="mt-5 order-2">
              <h3 className="custom-question">Contattaci</h3>
              <p>
                Hai domande o proposte? Scrivimi a:
                <br />
                <a href="mailto:dott.ssamartacorda@gmail.com">
                  dott.ssamartacorda@gmail.com
                </a>
              </p>
            </div>
          </Col>
          <Col className="order-1" md={6}>
            <img
              src="/Photo/AboutMe.jpg"
              alt="Founder breaking"
              className="img-fluid align-items-center rounded shadow"
              style={{
                height: "500px",
              }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutMePage;
