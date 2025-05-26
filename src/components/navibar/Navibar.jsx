import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" style={{backgroundColor: 'rgb(0, 136, 200)'}}>
            <Container>
                <Navbar.Brand href="#home">Rajesh Marudhachalam</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="justify-content-end">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#about">
                            About
                        </Nav.Link>

                        <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#work" style={{color: 'rgb(8,129,208'}}>
                                Work
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#education" style={{color: 'rgb(8,129,208'}}>
                                Education
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#accolades" style={{color: 'rgb(8,129,208'}}>
                                Accolades
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item href="#" style={{color: 'rgb(8,129,208'}}>
                                Skills
                            </NavDropdown.Item> */}
                            <NavDropdown.Item href="#projects" style={{color: 'rgb(8,129,208'}}>
                                Projects
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#testimonials" style={{color: 'rgb(8,129,208'}}>
                                Testimonials
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                        {/* <Nav.Link href="#testimonials">
                            Testimonials
                        </Nav.Link> */}

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