import {Card, Accordion} from 'react-bootstrap';

export default function Internships(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}}>
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>👨‍💻Internships</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>JP Morgan Chase</strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer Intern - SEP<br />
              <strong>Duration: </strong>January 2020 - July 2020<br />
              <strong>Description: </strong><br />
              During my internship, I was given the task to build a one-stop web portal using React.js, that replaces the existing MS-Excel reports, thus making it much more easier
              and efficient for the end user to consume the same data.
              This multi-page and multi-section dashboard along with  <i>'filter'</i> functionality was build using the famous concepts React-Router & Redux.
              For each section of the dashboard, there happens a GET call to get data using the <i>'fetch'</i> API in React.js .
              This dashboard also caches the data already fetched from API calls in an active session, and uses it to dynamically to replace an API call when the user tried to hit
              an already hit API endpoint.<br />
              <b>🏆Accolade(s):</b> Execution excellence - SEP interns (2020)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>Heptagon Technologies Pvt Ltd</strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Data Science Intern<br />
              <strong>Duration: </strong>April 2019 - May 2019<br />
              <strong>Description: </strong><br />
              Here I worked on a model to determine the sentiment polarity of the data fetched from Twitter API.
              Developed python scripts to extract tweets and comments from Twitter, and performed NLP based Tokenization, Lemmatization, Vectorization and created
               higher dimensional word embeddings to capture fine grained relationships between tokens.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><strong>Acumen Technologies Pvt Ltd</strong> &nbsp; (Chennai, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Trainee<br />
              <strong>Duration: </strong>April 2017 - June 2019<br />
              <strong>Description: </strong><br />
              Was involved in developing smooth and seamless login page using HTML, CSS, PHP and Bootstrap.<br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
