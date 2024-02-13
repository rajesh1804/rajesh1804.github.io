import {Card, Accordion, ListGroup} from 'react-bootstrap';

export default function Fulltime(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}} id="work">
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>👨‍💻Full-time</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>BlueCat Networks</strong> &nbsp; (Toronto, Canada)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Data Science Developer<br />
              <strong>Duration: </strong>January 2024 - Present<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Utilized a range of time series forecasting methodologies to accurately predict CPU and memory usage patterns in 
                    network devices, effectively mitigating network downtime for customer devices.<br />
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>JP Morgan Chase </strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer 2 - SEP<br />
              <strong>Duration: </strong>January 2022 - August 2022<br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Spearheaded the design and establishment of a comprehensive datalake leveraging the Hadoop Distributed File System (HDFS) 
              across multiple clustered compute nodes. This innovative solution served as a cornerstone for efficiently processing and 
              storing both relational and nonrelational data. The architecture, tailored for analytics applications, seamlessly supports 
              a diverse range of structured, unstructured, and semi-structured data, enhancing operational efficiency compared to traditional, 
              narrowly-focused data warehouses. <br/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Implemented a monitoring system for tracking data ingestion and storage in the datalake. This proactive approach significantly 
              reduced the time and effort required to discern the nature of stored data and its associated schema details, ensuring a 
              streamlined and well-documented data management process. <br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Led the redesign of RDBMS SQL queries to seamlessly transition to HIVE/Impala queries. This transformation resulted in a 
              remarkable reduction in query run time by at least threefold, enhancing the speed and efficiency of on-demand data insights. <br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Successfully perfomed a POC to port a custom Pyspark-based ETL framework from an on-premise environment to the cloud 
              using Amazon Web Services (AWS). Leveraged Amazon EMR, EKS, S3, and Snowflake to seamlessly transition and optimize data 
              processing workflows, demonstrating the feasibility and benefits of cloud-based operations. <br />
                    </ListGroup.Item>
              </ListGroup>
              <b>🏆Accolade(s):</b> Execution excellence (Q1 2022)
            </Accordion.Body>
            <hr />
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer - SEP<br />
              <strong>Duration: </strong>August 2020 - January 2022<br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Conceptualized and developed a metadata-driven, reusable ETL framework utilizing PySpark. This innovative solution efficiently 
              manages the ingestion and transformation of terabytes of data on a daily basis. The framework accommodates structured, 
              unstructured, and semi-structured data, offering seamless connectivity to various data sources including databases, APIs, 
              flat-files, and JSON. This adaptability ensures robust data processing capabilities across diverse data formats.<br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Engineered a PySpark-based reconciliation framework to harmonize data from disparate database systems. The reconciliation 
              process culminates in the generation of comprehensive data reports distributed to end-users. This strategic initiative ensures 
              data integrity and provides stakeholders with accurate, actionable insights.<br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Successfully migrated existing Informatica/Pentaho pipelines to leverage the PySpark ETL framework. This migration resulted in 
              a remarkable 5x reduction in runtime, significantly enhancing the efficiency and speed of data processing workflows. This 
              transition underscores a commitment to modernizing and optimizing data processing infrastructure. <br />
                    </ListGroup.Item>
                </ListGroup>
              <b>🏆Accolade(s):</b> Execution excellence (Q4 2020)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
