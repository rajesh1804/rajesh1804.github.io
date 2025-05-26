import {Card, Accordion} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Ta(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}} id="work">
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>🧑‍🏫Teaching Assistanship</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>University of Toronto</strong> &nbsp; (Toronto, Canada) </Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Teaching Assistant - CSC301 (Introduction to Software Engineering)<br />
              <strong>Duration: </strong>September 2022 - December 2022, January 2023 - April 2023, September 2023 - December 2023, January 2024 - April 2024<br /> 
              <strong>Description: </strong><br />
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Took charge of organizing and leading tutorials for a diverse group of 50+ students, imparting knowledge and insights into 
              various aspects of software development and engineering. These interactive sessions aimed to foster a comprehensive 
              understanding of software development principles and practices.<br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Assumed a leadership role in managing and advising multiple groups, each comprising 50+ students, on real-world software 
              engineering projects. Provided mentorship and expertise to ensure the successful execution of projects, fostering a 
              collaborative and learning-focused environment. <br />
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
