import { Card, Accordion } from 'react-bootstrap';
import { accolades } from './accoladesData';
import AccoladeItem from './AccoladeItem';
import './accolades.scss';

export default function Accolades() {
  return (
    <Card border="light" className="accolades-card" id="accolades">
      <Card.Header as="h1" className="accolades-header">🏆 Accolades</Card.Header>
      <Card.Body>
        <Accordion flush>
          {accolades.map((acc, index) => (
            <AccoladeItem key={index} accolade={acc} index={index} />
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
}
