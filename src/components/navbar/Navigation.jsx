import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="custom-bg-color position-relative"
    >
      <img className="custom-img-details-sun" src="/Photo/Sun.png" alt="" />
      <img className="custom-img-details-cloud" src="/Photo/Cloud.png" alt="" />
      <img
        className="custom-img-details-flower"
        src="/Photo/Flower.png"
        alt=""
      />
      <img className="custom-img-details-line" src="/Photo/Line.png" alt="" />

      <Container>
        <Navbar.Brand href="/">
          <img className="custom-logo" src="/Photo/LogoWithoutBG.png" alt="" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/AboutMePage"
              className="d-flex align-items-center text-decoration-none text-white me-3"
            >
              Chi sono
            </Link>
            <Link
              to="/WhoIsPedagogistPage"
              className="d-flex align-items-center text-decoration-none text-white me-3"
            >
              Chi è il pedagogista?
            </Link>
            <Link
              to="/PedagogistPage"
              className="d-flex align-items-center text-decoration-none text-white me-3"
            >
              Pedagogia Familiare
            </Link>

            <Link
              to="/EffectiveTeaching"
              className="d-flex align-items-center text-decoration-none text-white"
            >
              Didatica Efficace
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
