import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './intro.scss';

function Intro() {
    const fullText = "Rajesh";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [erasing, setErasing] = useState(false);

    useEffect(() => {
        let timeout;

        const handleTyping = () => {
        if (!erasing) {
            if (index < fullText.length) {
            setDisplayedText((prev) => prev + fullText[index]);
            setIndex((prev) => prev + 1);
            timeout = setTimeout(handleTyping, 100); // smooth 150ms per letter
            } else {
            timeout = setTimeout(() => setErasing(true), 500); // pause before erasing
            }
        } else {
            if (index > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
            setIndex((prev) => prev - 1);
            timeout = setTimeout(handleTyping, 50); // slightly faster erase
            } else {
            setErasing(false);
            timeout = setTimeout(handleTyping, 250); // pause before re-typing
            }
        }
        };

        timeout = setTimeout(handleTyping, 500);
        return () => clearTimeout(timeout);
    }, [index, erasing]);

    return (
      <div className="intro" id="intro">
        <div className="intro2">
        <Container id="home">
            <Card border="light">
                <Row>
                    <Col>
                        <Card border="light">
                            {/* <Card.Img variant="top" src="assets/pic.png" /> */}
                            <Card.Body>
                                <div className="imgContainer">
                                    <Image src="assets/pic.jpeg" rounded />
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
                                        <h1>
                                            {displayedText}
                                            <span className="blinking-cursor">_</span>
                                        </h1>
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