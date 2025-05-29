import { Card, Accordion, ListGroup } from 'react-bootstrap';
import './ta.scss';

export default function Ta() {
  return (
    <Card border="light" className="ta-card" id="work">
      <Card.Header as="h1" className="ta-header">🧑‍🏫Teaching Assistantship</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <strong>University of Toronto</strong> &nbsp; (Toronto, Canada)
            </Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Teaching Assistant - CSC301 (Introduction to Software Engineering)<br />
              <strong>Duration: </strong>Sept 2022 - Dec 2022, Jan 2023 - Apr 2023, Sept 2023 - Dec 2023, Jan 2024 - Apr 2024<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  o Led tutorials for 50+ students, delivering insights on software engineering principles to ensure a deep understanding of development practices.
                </ListGroup.Item>
                <ListGroup.Item>
                  o Mentored and advised student teams on real-world projects, fostering a collaborative, results-oriented learning environment.
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
