import './about.scss';
import {Container, Card, Row, Col} from 'react-bootstrap';

export default function About(){
  return(
      <Container id="about">
      <Card border="light" style={{backgroundColor: 'transparent'}}>
        <Card.Header as="h1" style={{backgroundColor: 'rgb(236,249,254)'}}>👋About</Card.Header>
        <Card.Body>
          <Card.Text>
            I am a <i><strong>Software Engineer</strong></i> with over a year of experience, and currently work at JP Morgan Chase.
            My works mainly entails using BigData and it's related technologies.
            I am a computer science engineer by degree from VIT, Vellore.
            Through various projects, courses and other hands-on exprience, I have made myself adept in various technologies like <i><strong>Apache Spark</strong>,&nbsp;
            <strong>Hadoop</strong>, <strong>HiveQL</strong>, <strong>Imapala</strong>, <strong>Sqoop</strong>, <strong>React.js</strong></i>&nbsp;
            and in various <i><strong>Python</strong> packages
            like <strong>Tensorflow</strong>, <strong>Keras</strong>, <strong>Pandas</strong>, <strong>Numpy</strong>, <strong>Scikit-learn</strong>
            , <strong>Matplotib</strong></i> and many more.
          </Card.Text>
          <Row>
            <Col>
              <Card border="light" className="text-center" style={{backgroundColor: 'transparent'}}>
                <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>📁Interests</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <ul><strong>
                      <li>Machine Learning</li>
                      <li>Neural Networks</li>
                      <li>Big Data</li>
                    </strong></ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="light" className="text-center" style={{backgroundColor: 'transparent'}}>
                <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>🏏Hobbies</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <ul><strong>
                      <li>Open World Gaming</li>
                      <li>Learning new stuff</li>
                      <li>Binge watching TV shows</li>
                      <li>Cricket</li>
                    </strong></ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </Container>
  )
}
