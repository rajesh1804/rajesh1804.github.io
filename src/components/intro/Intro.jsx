import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './intro.scss';

function Intro() {
    return (
      <div className="intro">
        <div className="intro2">
        <Container id="home">
            <Card border="light">
                <Row>
                    <Col>
                        <Card border="light">
                            {/* <Card.Img variant="top" src="assets/pic.png" /> */}
                            <Card.Body>
                                <div className="imgContainer">
                                    {/* <img src="assets/pic.jpg" alt="" /> */}
                                    <Image src="assets/pic.jpg" rounded/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <div className="introText">
                        <Card border="light">
                            <Card.Body>
                                <div className="introContainer" style={{backgroundColor: 'transparent'}}>
                                    <Card.Title>
                                        <h2>Hi there, I'm</h2>
                                        <h1>Rajesh </h1>
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
        </div>
      </div>
    );
  }
  
  export default Intro;