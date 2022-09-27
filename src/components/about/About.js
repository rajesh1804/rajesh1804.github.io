import './about.scss';
import {Container, Card, Row, Col} from 'react-bootstrap';

export default function About(){
  return(
      <Container id="about">
      <Card border="light" style={{backgroundColor: 'transparent'}}>
        <Card.Header as="h1" style={{backgroundColor: 'rgb(236,249,254)'}}>👋About</Card.Header>
        <Card.Body>
          <Card.Text>
            I'm a data science enthusiast who also happens to be a graduate student currently in the department of Computer Science at the University of Toronto
            pursuing an MSc in Applied Computing (MScAC).
            Previously, I wa a <i><strong>Software Engineer</strong></i> for a little over 2 years at JP Morgan Chase.
            My works their mainly entailed using BigData and it's related technologies.
            I also have an undergraduate degree in computer science from VIT, Vellore.
            Through various projects, courses and other hands-on exprience, I have made myself adept in various technologies like <i><strong>Apache Spark</strong>,&nbsp;
            <strong>Hadoop</strong>, <strong>HiveQL</strong>, <strong>Imapala</strong>, <strong>Sqoop</strong>, <strong>React.js</strong>
            , <strong>Tensorflow</strong>, <strong>Keras</strong></i>&nbsp;
            and in various <i><strong>Python</strong> packages
            like <strong>Pandas</strong>, <strong>Numpy</strong>, <strong>Scikit-learn</strong>
            , <strong>Psycopg2</strong>, <strong>Matplotib</strong></i> etc.
          </Card.Text>
          <Row>
            <Col>
              <Card border="light" className="text-center" style={{backgroundColor: 'transparent'}}>
                <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>📁Interests</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <ul><strong>
                      <li>Data Science</li>
                      <li>Machine Learning</li>
                      <li>Neural Networks</li>
                      <li>Natural Language Processing</li>
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
