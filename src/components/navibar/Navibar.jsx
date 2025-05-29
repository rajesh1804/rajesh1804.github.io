import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navibar.scss'; // 👈 Import the SCSS file

function Navibar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" className="navibar">
            <Container>
                <Navbar.Brand href="#intro">Rajesh Marudhachalam</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="justify-content-end">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#about">
                            About
                        </Nav.Link>

                        <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#work" className="dropdown-item">
                                Work
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#education" className="dropdown-item">
                                Education
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#accolades" className="dropdown-item">
                                Accolades
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#projects" className="dropdown-item">
                                Projects
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#testimonials" className="dropdown-item">
                                Testimonials
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#resume">
                            Resume
                        </Nav.Link>

                        <Nav.Link href="#contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navibar;
