import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Fulltime from './fulltime/Fulltime';
import Internships from './internships/Internships';
import Ta from './ta/Ta';
import Publications from './publications/Publications';
import Accolades from './accolades/Accolades';
import Projects from './projects/Projects';
import Resume from './resume/Resume';
import Education from './education/Education';
import Testimonials from './testimonials/Testimonials';

function Portfolio() {
    return (
        <Container id="portfolio">
        <Card border="light" style={{backgroundColor: 'transparent'}}>
          <Card.Header as="h1" style={{backgroundColor: 'rgb(236,249,254)'}}>📓Portfolio</Card.Header>
          <Card.Body>
            <Row>
                <Education />
            </Row>
            <br />
            <Row>
                <Fulltime />
            </Row>
            <br />
            <Row>
                <Internships />
            </Row>
            <br />
            <Row>
                <Ta />
            </Row>
            <br />
            <Row>
                <Publications />
            </Row>
            <br />
            <Row>
                <Accolades />
            </Row>
            <br />
            <Row>
                <Projects />
            </Row>
            <br />
            <Row>
                <Testimonials />
            </Row>
            <br />
            <Row>
                <Resume />
            </Row>
        </Card.Body>
        </Card>
        </Container>
    );
  }
  
  export default Portfolio;