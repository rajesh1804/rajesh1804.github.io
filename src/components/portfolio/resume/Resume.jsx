import {Card} from 'react-bootstrap';
import './resume.scss';

export default function Resume(){
  return(
    <Card border="light" className="resume-card" id="resume">
      <Card.Header as="h1" className="resume-header">📝Resume</Card.Header>
      <Card.Body>
        <Card border="secondary" style={{backgroundColor: 'transparent'}}>
          <Card.Body>
            🔗
            <Card.Link href="/assets/RajeshM_Resume_Website.pdf" target="_blank" rel="noopener noreferrer">
              Resume.pdf
            </Card.Link>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  )
}
