import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
// import './about.scss';

function About() {
    return (
        <Container id="about">
        <Card border="light" style={{backgroundColor: 'transparent'}}>
          <Card.Header as="h1" style={{backgroundColor: 'rgb(236,249,254)'}}>👋About</Card.Header>
          <Card.Body>
            <Card.Text>
            <p>
              I’m a <strong>Data Scientist</strong> with a deep passion for building AI systems that go beyond experimentation—systems that solve real business problems at scale.
            </p>
            <p>
              My recent work centers around <strong>LLMs (Large Language Models)</strong> and <strong>Retrieval-Augmented Generation (RAG)</strong> architectures, where I’ve been exploring their application in network diagnostics, enterprise automation, and dynamic data interfaces. I’m particularly interested in bridging the gap between foundational models and production environments—making LLMs reliable, cost-efficient, and explainable in real-world systems.
            </p>
            <p>
              With over <strong>4 years of industry experience</strong>, I’ve worn many hats: from designing big data pipelines that process <strong>10M+ daily records</strong>, to developing anomaly detection models with <strong>90%+ precision</strong>, to deploying machine learning services in cloud-native environments like <strong>AWS (EKS, S3, Lambda)</strong>. I’ve led initiatives that translated directly into <strong>operational efficiency gains</strong> and <strong>cost savings</strong>, all while collaborating cross-functionally with engineers, analysts, and product managers.
            </p>
            <p>
              I hold a Master’s in Applied Computing from the <strong>University of Toronto</strong>, where I specialized in <strong>deep learning, neural networks, and scalable data systems</strong>. This academic foundation is reinforced by hands-on experience across tools like <strong>PySpark, TensorFlow, Keras, Scikit-learn, Hugging Face Transformers</strong>, and big data platforms such as <strong>Apache Spark, Trino, Hive, and Snowflake</strong>.
            </p>
            <p>
              Outside of work, I’m driven by curiosity. I frequently explore topics like <strong>weak supervision</strong>, <strong>zero-shot learning</strong>, and <strong>prompt engineering</strong>, and I enjoy staying on the cutting edge of ML trends—from fine-tuning LLMs with <strong>LoRA</strong> to experimenting with vector databases like <strong>FAISS</strong> and <strong>Weaviate</strong>.
            </p>
            <p>
              Currently, I’m looking to join a mission-driven team where I can help shape and ship intelligent systems—whether that’s enhancing personalization, accelerating automation, or building the ML infrastructure that powers tomorrow’s applications.
            </p>
            <p>
              <strong>Let’s connect</strong> if you’re working at the intersection of <em>machine learning, data engineering, and real-world impact</em>.
            </p>
            
            
            </Card.Text>
            <Row>
              <Col>
                <Card border="light" className="text-center" style={{backgroundColor: 'transparent'}}>
                  <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>📁Interests</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>
                      <ListGroup variant="flush" as="ul">
                        <ListGroup.Item as="li">LLMs & Retrieval-Augmented Generation (RAG) </ListGroup.Item>
                        <ListGroup.Item as="li">Scalable Machine Learning Systems</ListGroup.Item>
                        <ListGroup.Item as="li">ML Infrastructure & MLOps</ListGroup.Item>
                        <ListGroup.Item as="li">Time Series Forecasting & Anomaly Detection</ListGroup.Item>
                      </ListGroup>
                      </strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="light" className="text-center" style={{backgroundColor: 'transparent'}}>
                  <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>🏏Hobbies</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <strong>
                      <ListGroup variant="flush" as="ul">
                        <ListGroup.Item as="li">Open World Gaming</ListGroup.Item>
                        <ListGroup.Item as="li">Cricket</ListGroup.Item>
                        <ListGroup.Item as="li">Binge watching TV shows</ListGroup.Item>
                      </ListGroup>
                      </strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Container>
    );
  }
  
  export default About;
  