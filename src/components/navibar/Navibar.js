import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import {GitHub, LinkedIn, FiberManualRecord} from '@material-ui/icons';

export default function Navibar(){
  return(
      <Container>
        <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" style={{backgroundColor: 'rgb(236,249,254)'}}>
          <Navbar.Brand href="/#home" style={{color: 'rgb(8,129,208)'}}>&nbsp;Rajesh Marudhachalam</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/#home" style={{color: 'rgb(8,129,208'}}>Home</Nav.Link>
            <Nav.Link href="/#about" style={{color: 'rgb(8,129,208)'}}>About</Nav.Link>
            <Nav.Link href="/#portfolio" style={{color: 'rgb(8,129,208)'}}>Porfolio</Nav.Link>
            {
            <a href="https://rajesh1804.github.io/blog" target="_blank" style={{color: 'rgb(8,129,208)', textDecoration: 'None'}} rel="noreferrer">Blog</a>
            // <Nav.Link href="https://github.com/rajesh1804" target="_blank" rel="noopener noreferrer"><GitHub /></Nav.Link>
            // <Nav.Link href="https://in.linkedin.com/in/rajeshm99" target="_blank" rel="noopener noreferrer"><LinkedIn /></Nav.Link>
            }
          </Navbar.Collapse>
        </Navbar>
      </Container>
  )
}
