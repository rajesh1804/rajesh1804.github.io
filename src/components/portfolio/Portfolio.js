import {Container, Card, Row} from 'react-bootstrap';
import Fulltime from './fulltime/Fulltime';
import Internships from './internships/Internships';
import Publications from './publications/Publications';
import Accolades from './accolades/Accolades';
import Projects from './projects/Projects';
import Resume from './resume/Resume';

export default function Portfolio(){
  return(
    <Container id="portfolio">
    <Card border="light" style={{backgroundColor: 'transparent'}}>
      <Card.Header as="h1" style={{backgroundColor: 'rgb(236,249,254)'}}>📓Portfolio</Card.Header>
      <Card.Body>
        <Row>
          <Fulltime />
        </Row>
        <br />
        <Row>
          <Internships />
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
          <Resume />
        </Row>
      </Card.Body>
    </Card>
    </Container>
  )
}
