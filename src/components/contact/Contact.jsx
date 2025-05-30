import {Card, Container} from 'react-bootstrap';
import './contact.scss'; // 👈 SCSS import

export default function Contact(){
  return(
    <Container id="contact">
    <Card border="light" className="contact-card">
        <Card.Header as="h1" className="contact-header">✉️ Contact</Card.Header>
        <Card.Body as="p">
            📧 Email: [first name] [dot] [last name] @ gmail [dot] com
        </Card.Body>
    </Card>
    </Container>
  )
}
