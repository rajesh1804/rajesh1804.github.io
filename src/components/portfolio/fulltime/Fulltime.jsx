import {Card, Accordion} from 'react-bootstrap';

export default function Fulltime(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}} id="work">
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>👨‍💻Full-time</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>JP Morgan Chase </strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer 2 - SEP<br />
              <strong>Duration: </strong>January 2022 - August 2022<br />
              o Setup a Hadoop datalake that involves storing data in the Hadoop Distributed File Syste comprising of multiple clustered compute nodes.
              This is principally used to process and store relational and nonrelational data.
              This architecture is designed to for analytics applications, supporting a variety of structured, unstructured and semi-structured data making them more
              suitable for certain operations than narrowly focused data warehouses.<br />
              o Developed custom ETL framework – handles ingestion & transformation of terabytes of data on daily basis using metadata - using PySpark supports structured
              & unstructured data and connections with databases, APIs, flat-files, json and HDFS to pump data into the data-lake.<br />
              <b>🏆Accolade(s):</b> Execution excellence (Q1 2022)
            </Accordion.Body>
            <hr />
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer - SEP<br />
              <strong>Duration: </strong>August 2020 - January 2022<br />
              o Developed custom ETL framework – handles ingestion & transformation of terabytes of data on daily basis using metadata - using PySpark supports structured
              & unstructured data and connections with databases, APIs, flat-files, json and HDFS to pump data into the data-lake.<br />
              o Developed a reconciliation framework using PySpark to reconcile data from different database systems and sends this as data reports to the users.<br />
              <b>🏆Accolade(s):</b> Execution excellence (Q4 2020)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
