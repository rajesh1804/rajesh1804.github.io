import './intro.scss';
import {Container, Card, Row, Col} from 'react-bootstrap';
import {useEffect, useRef} from 'react';
import {init} from 'ityped';
import {KeyboardArrowDown} from '@material-ui/icons';

export default function Intro(){
  const textRef = useRef();

  useEffect(() => {
    // console.log(textRef)
    init(textRef.current, {
      strings: ['Data Science enthusiast', 'Eager learner', 'Ex - Big Data Engineer'],
      backDelay: 1000,
      backSpeed: 60,
      showCursor: true
    })
  }, [])

  return(
    <div className="intro">
    <div className="intro2">
      <Container id="home">
        <Card border="light" style={{backgroundColor: 'transparent'}}>
          <Card.Body>
              <Row>
                  <Col>
                    <Card border="light" style={{backgroundColor: 'transparent'}}>
                      <Card.Body>
                        <div className="imgContainer">
                          <img src="assets/pic.png" alt="" />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col><div className="introText">
                    <Card border="light" style={{backgroundColor: 'transparent'}}>
                      <Card.Body>
                        <div className="introContainer" style={{backgroundColor: 'transparent'}}>
                          <Card.Title>
                            <h1>Hi there, I'm</h1>
                            <h2>Rajesh </h2>
                          </Card.Title>
                          <Card.Text>
                            <h3><span ref={textRef}></span></h3>
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </div></Col>
              </Row>
          </Card.Body>
        </Card>
        <Row>
          <a href="#about" style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
            <KeyboardArrowDown style={{ color: 'rgb(8,129,208)', animation: 'arrowBlink 2s infinite' }}/>
          </a>
        </Row>
      </Container>
    </div>
    </div>
  )
}
