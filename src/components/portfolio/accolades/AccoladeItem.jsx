import { Accordion } from 'react-bootstrap';

export default function AccoladeItem({ accolade, index }) {
  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>
        <strong>{accolade.title}</strong> &nbsp; {accolade.company}
      </Accordion.Header>
      <Accordion.Body>
        {accolade.description}
      </Accordion.Body>
    </Accordion.Item>
  );
}
