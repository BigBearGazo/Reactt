import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Caramel() {
  return (
    <Navbar className="top">
      <Container>
        <Navbar.Brand href="#home"><img src="./logo.jpg" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="about">A propos</Nav.Link>
            <Nav.Link href="condition">Conditions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Caramel;