import { Accordion } from 'react-bootstrap';

export default function EducationItem({ education, index }) {
  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>
        <strong>{education.degree}</strong>
      </Accordion.Header>
      <Accordion.Body>
        <strong>{education.institution}</strong>, {education.location}<br />
        <strong>Duration:</strong> {education.duration}<br />
        <strong>Coursework:</strong><br />
        <ul>
          {education.coursework.map((course, idx) => (
            <li key={idx}>{course}</li>
          ))}
        </ul>
        {education.accolades && education.accolades.length > 0 && (
          <div>
            <b>🏆 Accolade(s):</b> {education.accolades.join(', ')}
          </div>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}
