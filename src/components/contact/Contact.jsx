import {Card, Container} from 'react-bootstrap';

export default function Contact(){
  return(
    <Container id="contact">
    <Card border="light" style={{backgroundColor: 'transparent'}}>
        <Card.Header as="h1" style={{backgroundColor: 'rgb(0, 136, 200)'}}>✉️ Contact</Card.Header>
        <Card.Body as="p">
            📧 Email: [first name] [dot] [last name] at gmail [dot] com
        </Card.Body>
    </Card>
    </Container>
  )
}
