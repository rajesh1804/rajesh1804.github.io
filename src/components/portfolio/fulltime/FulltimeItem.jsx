import { Accordion, ListGroup } from 'react-bootstrap';

export default function WorkItem({ job, index }) {
  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>
        <strong>{job.company}</strong> &nbsp; ({job.location})
      </Accordion.Header>
      {job.roles.map((role, idx) => (
        <Accordion.Body key={idx}>
          <strong>Designation: </strong>{role.title}<br />
          <strong>Duration: </strong>{role.duration}<br />
          {role.points && (
            <ListGroup variant="flush" className="mt-2">
              {role.points.map((point, i) => (
                <ListGroup.Item key={i}>o {point}</ListGroup.Item>
              ))}
            </ListGroup>
          )}
          {role.accolades && (
            <p className="mt-2">
              <b>🏆 Accolade(s):</b> {role.accolades.join(', ')}
            </p>
          )}
        </Accordion.Body>
      ))}
    </Accordion.Item>
  );
}
