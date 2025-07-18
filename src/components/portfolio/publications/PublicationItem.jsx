import { Accordion } from 'react-bootstrap';

export default function PublicationItem({ publication, index }) {
  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>
        <strong>{publication.title}</strong> &nbsp; ({publication.journal})
      </Accordion.Header>
      <Accordion.Body>
        <strong>Published: </strong>{publication.published}<br />
        🔗 <a href={publication.link} target="_blank" rel="noopener noreferrer">Link</a><br />
        <strong>Abstract: </strong><br />
        {publication.abstract}
      </Accordion.Body>
    </Accordion.Item>
  );
}
