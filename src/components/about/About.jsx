import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
// import './about.scss';

function About() {
    return (
        <Container id="about">
        <Card border="light" style={{backgroundColor: 'transparent'}}>
          <Card.Header as="h1" style={{backgroundColor: 'rgb(236,249,254)'}}>👋About</Card.Header>
          <Card.Body>
            <Card.Text>
              I'm a data science enthusiast who also happens to be a <i><strong>Graduate student</strong></i> currently in the 
              department of Computer Science at the <i><strong>University of Toronto</strong></i> pursuing 
              an <i><strong>MSc in Applied Computing</strong></i> (MScAC).
              Previously, I wa a <i><strong>Software Engineer</strong></i> for a little over 2 years at JP Morgan Chase.
              My works their mainly entailed using BigData and it's related technologies.
              I also have an undergraduate degree in computer science from Vellore Institue of Technology, Vellore, India.
              Through various projects, courses and other hands-on exprience, I have made myself adept in various technologies like <i><strong>Apache Spark</strong>,&nbsp;
              <strong>Hadoop</strong>, <strong>HiveQL</strong>, <strong>Impala</strong>, <strong>Sqoop</strong>, <strong>React.js</strong>
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
                      <strong>
                      <ListGroup variant="flush" as="ul">
                        <ListGroup.Item as="li">Data Science</ListGroup.Item>
                        <ListGroup.Item as="li">Machine Learning</ListGroup.Item>
                        <ListGroup.Item as="li">Neural Networks</ListGroup.Item>
                        <ListGroup.Item as="li">Big Data</ListGroup.Item>
                      </ListGroup>
                      </strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="light" className="text-center" style={{backgroundColor: 'transparent'}}>
                  <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>🏏Hobbies</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>
                      <ListGroup variant="flush" as="ul">
                        <ListGroup.Item as="li">Open World Gaming</ListGroup.Item>
                        <ListGroup.Item as="li">Cricket</ListGroup.Item>
                        <ListGroup.Item as="li">Binge watching TV shows</ListGroup.Item>
                      </ListGroup>
                      </strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Container>
    );
  }
  
  export default About;
  