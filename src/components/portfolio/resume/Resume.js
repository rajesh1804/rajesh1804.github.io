import {Card} from 'react-bootstrap';

export default function Resume(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}} id="resume">
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>📝Resume</Card.Header>
      <Card.Body>
        <Card border="secondary" style={{backgroundColor: 'transparent'}}>
          <Card.Body>
            🔗
            <Card.Link href="/assets/RajeshM_Resume.pdf">
            {/* <Card.Link href="https://in.linkedin.com/in/rajesh1804"> */}
              Resume.pdf
            </Card.Link>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  )
}
