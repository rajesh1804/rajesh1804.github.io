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
              I'm a dedicated professional with a passion for data science and machine learning, with a <i><strong>Master's degree in Applied 
              Computing</strong></i> from the <i><strong>University of Toronto</strong></i> in the field of Machine Learning. Armed with a wealth of experience, I previously 
              served as a Software Engineer at JP Morgan Chase, honing my skills in Big Data and related technologies. <br />

              My academic journey includes an undergraduate degree in Computer Science from Vellore Institute of Technology, India. 
              Throughout my career, I've immersed myself in diverse projects, courses, and hands-on experiences, cultivating expertise 
              in technologies such as <i><strong>Apache Spark</strong>,&nbsp;
              <strong>Hadoop</strong>, <strong>HiveQL</strong>, <strong>Impala</strong>, <strong>Sqoop</strong>, <strong>React.js</strong>
              , <strong>Tensorflow</strong> and <strong>Keras</strong></i>&nbsp;. Additionally, I'm 
              well-versed in Python packages like <i><strong>Pandas</strong>, <strong>Numpy</strong>, <strong>Scikit-learn</strong>
              , <strong>Psycopg2</strong> and <strong>Matplotib</strong></i>. <br />

              Currently on the lookout for new opportunities, I am open to internships, part-time, or full-time roles in the dynamic realms 
              of data science, deep learning, and machine learning. Let's connect and explore the possibilities of making meaningful 
              contributions in these exciting fields!
            
            
            </Card.Text>
            <Row>
              <Col>
                <Card border="light" className="text-center" style={{backgroundColor: 'transparent'}}>
                  <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>📁Interests</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>
                      <ListGroup variant="flush" as="ul">
                        <ListGroup.Item as="li">Deep Learning</ListGroup.Item>
                        <ListGroup.Item as="li">Machine Learning</ListGroup.Item>
                        <ListGroup.Item as="li">Data Science</ListGroup.Item>
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
  