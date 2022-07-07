import {Card, Accordion} from 'react-bootstrap';

export default function Accolades(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}}>
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>🏆Accolades</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>Execution excellence - SEP Engineers (Q1 2022)</strong> &nbsp; JP Morgan Chase</Accordion.Header>
            <Accordion.Body>
              Recognised under the category of 'Execution excellence' for my work as a Software Engineer in the Student Engineer Program (SEP).
              This happens once every quater, where a select number of Engineers in the SEP program are recognised for their work at the firm<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>Execution excellence - SEP Engineers (Q4 2020)</strong> &nbsp; JP Morgan Chase</Accordion.Header>
            <Accordion.Body>
              Recognised under the category of 'Execution excellence' for my work as a Software Engineer in the Student Engineer Program (SEP).
              This happens once every quater, where a select number of Engineers in the SEP program are recognised for their work at the firm<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <strong>Execution excellence - SEP interns (2020)</strong> &nbsp; JP Morgan Chase
            </Accordion.Header>
            <Accordion.Body>
              Recognised under the category of 'Execution excellence' for my work as a Software Engineer in the Student Engineer Program (SEP).
              This happens once towards the end of the internship, where a select number of interns in the SEP program are recognised for their work at the firm<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <strong>Code for Good - Finalist (2019)</strong> &nbsp; JP Morgan Chase
            </Accordion.Header>
            <Accordion.Body>
              Upon going undergoing a rigorous selection process, I was inivited to participate in this hackathon.
              At this hackathon, we are teamed with a bunch of students from various universities and are tasked to solve a real-world problem for nonprofits within 24 hours.
              My team and I developed a web portal that automates most of the manual work done by the NGO, thus increases their efficiency in minimal time.
              We reached the finals of this competition after 2 presentation rounds - technical & non-technical.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <strong>Merit Scholarship for Academic Excellence (2017)</strong> &nbsp; Vellore Institute of Technology
            </Accordion.Header>
            <Accordion.Body>
              Awared Merit Scholarship, a prestigious scholarship awared to a select number of students each year at the university for excelling in academics.<br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
