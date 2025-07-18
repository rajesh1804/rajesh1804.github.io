import { Card, Accordion } from 'react-bootstrap';
import { education } from './educationData';
import EducationItem from './EducationItem';
import './education.scss';

export default function Education() {
  return (
    <Card border="light" className="education-card" id="education">
      <Card.Header as="h1" className="education-header">🏫 Education</Card.Header>
      <Card.Body>
        <Accordion flush>
          {education.map((edu, index) => (
            <EducationItem key={index} education={edu} index={index} />
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
}
