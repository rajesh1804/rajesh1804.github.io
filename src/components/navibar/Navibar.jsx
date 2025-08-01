import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navibar.scss';

function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navibar shadow-sm bg-white">
      <Container>
        <Navbar.Brand href="/">Rajesh Marudhachalam</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">

            <Nav.Link href="#about" className="nav-link-smooth">About</Nav.Link>

            <NavDropdown title="Portfolio" id="nav-dropdown" className="nav-dropdown-smooth">
              <NavDropdown.Item href="#work">Work</NavDropdown.Item>
              <NavDropdown.Item href="#education">Education</NavDropdown.Item>
              <NavDropdown.Item href="#accolades">Accolades</NavDropdown.Item>
              <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#resume" className="nav-link-smooth">Resume</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-smooth">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
