// import {Card} from 'react-bootstrap';
import linkedin from './linkedin.svg';
import github from './github.svg';
import uparrow from './uparrow.svg';
import "./footer.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer(){
  return(
    <Navbar expand="lg" variant="light" style={{backgroundColor: 'rgb(236,249,254)'}}>
      <Container>
        <Navbar.Brand href="#home">© Rajesh 2022😎</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/rajesh1804" target="_blank" rel="noopener noreferrer">
              <img src={github} className="appLogo" alt="Github" />
            </Nav.Link>
            <Nav.Link href="https://in.linkedin.com/in/rajesh1804" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className="appLogo" alt="LinkedIn" />
            </Nav.Link>
            <Nav.Link href="#home">
              <img src={uparrow} className="appLogo" alt="UpArrow" />
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    // <Card.Footer style={{backgroundColor: 'rgb(236,249,254)'}}>
    //   <span style={{color: 'rgb(8,129,208)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
    //     <div>© Rajesh 2021😎</div>
    //     <div>
    //       <a href="https://github.com/rajesh1804" target="_blank" rel="noopener noreferrer">
    //         <img src={github} className="appLogo" alt="Github" />
    //       </a>
    //       <a href="https://in.linkedin.com/in/rajeshm99" target="_blank" rel="noopener noreferrer">
    //         <img src={linkedin} className="appLogo" alt="LinkedIn" />
    //       </a>
    //       <a href="#home">
    //         <img src={uparrow} className="appLogo" alt="UpArrow" />
    //       </a>
    //     </div>
    //   </span>
    // </Card.Footer>
  )
}
