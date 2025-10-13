import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../infoSection/infoSection.css";

const InfoSection = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="/Photo/Orange.jpeg"
                    alt=""
                    className="custom-info-img"
                  />
                </div>
                <div className="flip-card-back d-flex flex-wrap ">
                  <img src="/Photo/Orange3.jpg" alt="" />
                  <Link className="custom-link" to="/PedagogistPage">
                    Più Info
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="/Photo/Skyblue2.jpeg"
                    alt=""
                    className="custom-info-img"
                  />
                </div>
                <div className="flip-card-back2 d-flex flex-wrap ">
                  <img src="/Photo/Skyblue.jpeg" alt="" />
                  <Link className="custom-link" to="/WhoIsPedagogistPage">
                    Più Info
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="d-flex justify-content-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="/Photo/Orange5.jpeg"
                    alt=""
                    className="custom-info-img"
                  />
                </div>
                <div className="flip-card-back3 d-flex flex-wrap ">
                  <img src="/Photo/Orange2.jpeg" alt="" />
                  <Link className="custom-link" to="/EffectiveTeaching">
                    Più Info
                  </Link>
                </div>
              </div>
            </div>
            {/* <img
              className="custom-info-img mb-3"
              src="/Photo/Orange5.jpeg"
              alt=""
            /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoSection;
