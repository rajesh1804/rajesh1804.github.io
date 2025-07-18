import { Accordion, ListGroup } from 'react-bootstrap';

export default function InternshipItem({ internship, index }) {
  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>
        <strong>{internship.company}</strong> &nbsp; ({internship.location})
      </Accordion.Header>
      <Accordion.Body>
        <strong>Designation: </strong>{internship.role}<br />
        <strong>Duration: </strong>{internship.duration}<br />
        {internship.description && (
          <ListGroup variant="flush" className="mt-2">
            {internship.description.map((item, idx) => (
              <ListGroup.Item key={idx}>o {item}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
        {internship.accolades && (
          <p className="mt-2">
            <b>🏆 Accolade(s):</b> {internship.accolades.join(', ')}
          </p>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}
