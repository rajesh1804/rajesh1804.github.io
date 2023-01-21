import {Card, Accordion} from 'react-bootstrap';

export default function Fulltime(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}} id="work">
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>👨‍💻Work</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>University of Toronto</strong> &nbsp; (Toronto, Canada)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>CSC301 (Introduction to Software Engineering) - Teaching Assistant<br />
              <strong>Duration: </strong>September 2022 - December 2022, January 2023 - Present<br />
              <strong>Description: </strong><br />
              o Organized and lead tutorials for 50+ students on software development and engineering.<br />
              o Managed and advised multiple groups of 50+ students on real-world software engineering projects. <br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>JP Morgan Chase </strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer 2 - SEP<br />
              <strong>Duration: </strong>January 2022 - August 2022<br />
              o Designed and setup a datalake that involves storing data in the Hadoop Distributed File System comprising of 
              multiple clustered compute nodes. This is principally used to process and store relational and nonrelational data.
              This architecture is designed to for analytics applications, supporting a variety of structured, unstructured and 
              semi-structured data making them more suitable for certain operations than narrowly focused data warehouses.<br />
              o Implemented a monitor jobs to keep track of the data along with schema details being ingested and stored in the 
              datalake, saving the time and effort needed to later on figure out the data being stored. <br />
              o Led the effort to redesign RDBMS SQL queries for on demand data insights to HIVE/Impala queries, reducing run time by 
              at least 3 folds. <br/>
              o Succesfully performed a POC to port previously build custom Pyspark based ETL framework to run on AWS using 
              Amazon EMR, EKS, S3 and Snowflake. <br />
              <b>🏆Accolade(s):</b> Execution excellence (Q1 2022)
            </Accordion.Body>
            <hr />
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer - SEP<br />
              <strong>Duration: </strong>August 2020 - January 2022<br />
              o Developed metadata driven resusable ETL framework that handles ingestion & transformation of terabytes of data on daily 
              basis using PySpark. It supports structured, unstructured & ssemi-structured data with connectors to databases, APIs, 
              flat-files, json, etc.,<br />
              o Developed a reconciliation framework using PySpark to reconcile data from different database systems and sends this as 
              data reports to the users.<br />
              o Migrated existing Informatica/Pentaho pipelines to use the former PySpark ETL framework, this cut the run time 5x. <br />
              <b>🏆Accolade(s):</b> Execution excellence (Q4 2020)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
