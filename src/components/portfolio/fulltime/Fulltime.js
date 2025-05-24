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
              <strong>Designation: </strong>Data Scientist II<br />
              <strong>Duration: </strong>July 2024 - Present<br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o At Bluecat, I designed and deployed a Retrieval-Augmented Generation (RAG) chatbot to streamline real-time 
                    network diagnostics. This helped reduce incident triage time by <strong>40%</strong>, significantly boosting the 
                    efficiency of our support teams. <br/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o I also built time series forecasting models (Exponential Smoothing, ARIMA) to predict infrastructure metrics 
                    like bandwidth and device load—these models improved our capacity planning accuracy by over <strong>30%</strong>. <br/>
                    </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
            <hr />
            <Accordion.Body>
              <strong>Designation: </strong>Data Scientist<br />
              <strong>Duration: </strong>January 2024 - July 2024<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o During this phase, I focused on building an anomaly detection system for network packet drops and TCP anomalies. 
                    The model achieved <strong>92% precision</strong>, helping cut false alerts by <strong>40%</strong> and making monitoring way more reliable 
                    across <strong>500+ client devices</strong>.<br />
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
                    o Here, I led the design of a centralized data lake (HDFS/YARN) serving <strong>15+ TB</strong> of structured data across 
                    10+ teams. I also optimized legacy SQL queries for Hive and Impala, cutting their runtime by <strong>60%</strong>. <br/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o I  drove a successful PoC to migrate our custom ETL framework to <strong>AWS EKS + Snowflake</strong>, boosting scalability and 
                    reducing costs by <strong>~20%</strong>. <br />
                    </ListGroup.Item>
              </ListGroup>
              <b>🏆Accolade(s):</b> Execution excellence (Q1 2022) for outstanding delivery in cross-functional initiatives.
            </Accordion.Body>
            <hr />
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer - SEP<br />
              <strong>Duration: </strong>August 2020 - January 2022<br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o I built a production-ready, reusable ETL framework in PySpark that handled over <strong>10 million records per day</strong>, 
                    storing <strong>5+ TB</strong> of data.<br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o I migrated legacy Informatica and Pentaho jobs into this new system—this reduced runtime from 45 minutes to 
                    just 4 (<strong>11x speedup</strong>), while adding schema validation and automated alerts to catch issues proactively.<br />
                    </ListGroup.Item>
                </ListGroup>
              <b>🏆Accolade(s):</b> Execution excellence (Q4 2020) for outstanding delivery in cross-functional initiatives.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
