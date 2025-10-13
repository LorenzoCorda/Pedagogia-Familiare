import { Container, Row, Col } from "react-bootstrap";
import "../heroSection/heroSection.css";

const HeroSection = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="hero-section">
              <img
                src="/Photo/LogoWriteBG.png"
                alt="Hero"
                className="img-fluid hero-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroSection;
