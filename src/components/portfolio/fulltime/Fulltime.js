import {Card, Accordion} from 'react-bootstrap';

export default function Fulltime(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}}>
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>👨‍💻Full-time</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>JP Morgan Chase </strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer - SEP<br />
              <strong>Duration: </strong>August 2020 - Present<br />
              o Developed a complete ETL framework to replace existing tools like Informatica, developed using PySpark to handle batch & data processing workloads,
              with ability to connect to any database, Rest APIs, CSV files & HDFS.<br />
              o Developed a python reconciliation framework using Spark to reconcile data from different systems.<br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
