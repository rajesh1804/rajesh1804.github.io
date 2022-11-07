import {Card, Accordion} from 'react-bootstrap';

export default function Projects(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}} id="projects">
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>💻Projects</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>Covid19 Stats Dashboard</strong> &nbsp; </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>May 2020<br />
              🔗 <a href="https://covid19app-5f5d3.web.app/" target="_blank" rel="noopener noreferrer">App Link</a> &nbsp;
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
                <a href="https://github.com/rajesh1804/covid19" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              Developed this progressive web app using React.js using React-Router and Redux.
              This PWA can be installed as an app in Windows, Mac, Android and IOS.
              This database less dashboard fetches data from open source APIs exposed by trustable sources and presents this data as in easily readable formats like tables and graphs.
              With the data being refreshed every 15 minutes, it always present only the latest stats<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <strong>Detection of Phishing in Websites</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>March 2019<br />
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
                <a href="https://github.com/rajesh1804/Detection-of-Phishing-in-Websites" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              Implemented using Python, uses machine learning to learn 17 attributes and predict whether the given URL is legitimate or not.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <strong>Image based attendance marker</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>February 2017 - April 2017<br />
              <strong>Description: </strong><br />
              Built using MATLAB, uses images taken from multiple webcams in a class room, processes them to segment out faces from the images, and
              finally return a boolean output for every matched segmented face when compared with the original student image database.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <strong>Realtime weather monitoring app</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>February 2018<br />
              <strong>Description: </strong><br />
              This project was implemented using Java and Arduino. The hardware components such as temperature sensor and humidity sensor were
              controlled by Arduino, a microcontroller. This microcontroller was coded to send the real-time data from sensors to the database (Firebase),
              which in turn was fetched by the designed android app in real-time to display.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <strong>Classic Pong</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>June 2019<br />
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
                <a href="https://github.com/rajesh1804/Detection-of-Phishing-in-Websites" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              A simple and lightweight multiplayer Pong game built using the Turtle module in python.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <strong>Connect 4 game</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>June 2019<br />
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
                <a href="https://github.com/rajesh1804/Connect-Four-Java-Application" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              This project was implemented using Java and JavaFx, it consists three main modules and supporting libraries.
              This project is a computerized version of the classic ‘Connect 4’ game.<br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
