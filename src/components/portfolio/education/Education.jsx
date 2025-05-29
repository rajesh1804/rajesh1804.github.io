import { Card, Accordion } from 'react-bootstrap';
import './education.scss';

export default function Education() {
  return (
    <Card border="light" className="education-card" id="education">
      <Card.Header as="h1" className="education-header">🏫Education</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <strong>Master of Science in Applied Computing </strong> &nbsp; (MScAC)
            </Accordion.Header>
            <Accordion.Body>
              <strong>University of Toronto</strong>, Toronto, Canada<br />
              <strong>September, 2022 - December, 2023 </strong><br />
              <strong>Coursework</strong>: Introduction to Machine Learning, Advanced Data Systems, Cloud based Data Analytics, Neural Networks and Deep Learning, Natural Language Computation
              <br />
              <b>🏆Accolade(s):</b>  Mitacs Accelerate grant worth $18,000
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <strong>B.Tech Computer Science and Engineering </strong>
            </Accordion.Header>
            <Accordion.Body>
              <strong>Vellore Institute of Technology</strong>, Vellore, India<br />
              <strong>August 2016 - May 2020 </strong><br />
              <strong>Coursework</strong>: Statistics for Engineers, Calculus for Engineers, Linear Algebra, Discrete Mathematics & Graph theory, Data Mining, Natural Language Processing
              <br />
              <b>🏆Accolade(s):</b>  Merit Scholarship for Academic Excellence (2017)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
