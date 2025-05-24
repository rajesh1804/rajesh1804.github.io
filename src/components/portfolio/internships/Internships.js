import {Card, Accordion, ListGroup} from 'react-bootstrap';

export default function Internships(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}}>
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>👨‍💻Internships</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>BlueCat Networks</strong> &nbsp; (Toronto, Canada)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Machine Learning Researcher Intern<br />
              <strong>Duration: </strong>May 2023 - December 2023<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o I explored weakly-supervised learning techniques to detect DNS tunneling attacks. Using pairwise 
                    relation prediction, the model hit a <b>67% detection rate</b> on unseen threats—an improvement of <b>23% </b>over 
                    our baseline.<br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o To support this, I wrangled billions of DNS records via Trino and built the pipeline with PySpark and Python.<br />
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>JP Morgan Chase</strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer Intern - SEP<br />
              <strong>Duration: </strong>January 2020 - July 2020<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Built a React.js dashboard that replaced manual Excel reporting, saving analysts about <b>2 hours/day</b>. <br />
                    </ListGroup.Item>
                </ListGroup>
              <b>🏆Accolade(s):</b> Execution excellence - SEP interns (2020) for high-impact contributions.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><strong>Heptagon Technologies Pvt Ltd</strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Data Science Intern<br />
              <strong>Duration: </strong>April 2019 - May 2019<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o My first real taste of NLP! I built a sentiment analysis classifier for political tweets using <b>TF-IDF + SVM</b>, 
                    hitting <b>85%</b> accuracy. I also applied NLP techniques like lemmatization and token co-occurrence embeddings 
                    to improve model robustness.<br />
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><strong>Acumen Technologies Pvt Ltd</strong> &nbsp; (Chennai, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Trainee<br />
              <strong>Duration: </strong>April 2017 - June 2019<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Developed a smooth and seamless login page using a blend of HTML, CSS, PHP, and Bootstrap. This collaborative effort 
              resulted in an aesthetically pleasing and responsive interface that enhances the user experience during the 
              authentication process.<br />
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
