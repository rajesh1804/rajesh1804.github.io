import { Card, Accordion } from 'react-bootstrap';
import { publications } from './publicationsData';
import PublicationItem from './PublicationItem';
import './publications.scss';

export default function Publications() {
  return (
    <Card border="light" className="publications-card">
      <Card.Header as="h1" className="publications-header">📜 Publications</Card.Header>
      <Card.Body>
        <Accordion flush>
          {publications.map((pub, index) => (
            <PublicationItem key={index} publication={pub} index={index} />
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
}
