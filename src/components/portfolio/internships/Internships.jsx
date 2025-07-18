import { Card, Accordion } from 'react-bootstrap';
import { internships } from './internshipsData';
import InternshipItem from './InternshipItem';
import './internship.scss';

export default function Internships() {
  return (
    <Card border="light" className="internship-card">
      <Card.Header as="h1" className="internship-header">👨‍💻 Internships</Card.Header>
      <Card.Body>
        <Accordion flush>
          {internships.map((internship, index) => (
            <InternshipItem key={index} internship={internship} index={index} />
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
}
