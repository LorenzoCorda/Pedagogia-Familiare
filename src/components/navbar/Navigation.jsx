import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/navigation.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="custom-bg-color position-relative">
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

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Pedagogia Familiare</Nav.Link>
            <Nav.Link href="#link">Chi è il pedagogista familiare?</Nav.Link>

            <Nav.Link href="#link">Servizi</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
