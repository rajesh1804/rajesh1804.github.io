import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './about.scss'; // ✅ Import the new CSS file

function About() {
  return (
    <Container id="about">
      <Card border="light" className="bg-transparent">
        <Card.Header as="h1" className="main-heading">👋About</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              I’m a <strong>Machine Learning Engineer</strong> who builds AI systems that go beyond the notebook — systems that are <em>deployed, fast, and impact-driven</em>.
            </p>
            <p>
              I’ve developed and shipped <strong>4 full-stack ML/LLM applications</strong> across domains like personalized recommendation, real-time forecasting, semantic search, and agentic RAG — all deployed on <strong>Hugging Face Spaces</strong> using open-source, cost-efficient tooling.
            </p>
            <p>
              My recent work spans:
              <ul>
                <li>🧵 <strong>ThreadNavigatorAI</strong> – Reddit-style summarizer, moderator & reply assistant built with <strong>LangGraph</strong>, <strong>OpenRouter</strong>, and <strong>Weaviate</strong></li>
                <li>🎬 <strong>StreamWiseAI</strong> – Netflix-style movie recommender + Retention Coach powered by <strong>RAG</strong></li>
                <li>🚕 <strong>RideCastAI</strong> – Uber-style fare + ETA predictor with geospatial heatmaps and latency tracking</li>
                <li>🛒 <strong>GroceryGPT+</strong> – Semantic grocery search engine using <strong>Sentence-BERT</strong> and LLM reranker</li>
              </ul>
            </p>
            <p>
              At <strong>BlueCat Networks</strong>, I built a <strong>RAG-based assistant</strong> that cut support triage time by 40%, architected <strong>time series models</strong> (ETS, ARIMA, STL) for predictive infrastructure planning, and deployed anomaly detection using <strong>weak supervision</strong> — outperforming traditional baselines.
            </p>
            <p>
              Previously at <strong>JP Morgan Chase</strong>, I engineered high-throughput ETL systems using <strong>Spark, Kafka, and Snowflake</strong> to automate ingestion of 50M+ daily records, reducing pipeline runtime by 11x.
            </p>
            <p>
              I hold a Master’s in Applied Computing from the <strong>University of Toronto</strong> and work fluently across <strong>Python, Hugging Face, LangGraph, OpenRouter, TensorFlow, PySpark, Docker, AWS</strong>, and modern LLM pipelines.
            </p>
            <p>
              I stay sharp by experimenting with <strong>LoRA fine-tuning</strong>, multi-agent workflows, and new ways to evaluate and deploy production-grade LLMs using <strong>RAG + vector DBs</strong> like <strong>FAISS</strong> and <strong>Weaviate</strong>.
            </p>
            <p>
              🎯 I’m currently exploring senior roles in AI/ML where I can own and deploy intelligent systems that are fast, explainable, and scalable.
            </p>
            <p>
              <strong>Let’s connect</strong> if you're building at the intersection of <em>machine learning, user experience, and real-world impact</em>.
            </p>
          </Card.Text>

          <Row>
            <Col>
              <Card border="light" className="text-center bg-transparent">
                <Card.Header as="h1" className="sub-heading">📁Interests</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <strong>
                      <ListGroup variant="flush" as="ul">
                        <ListGroup.Item as="li">LLM Architectures & Agentic RAG Workflows</ListGroup.Item>
                        <ListGroup.Item as="li">Production-Ready ML & Recommender Systems</ListGroup.Item>
                        <ListGroup.Item as="li">Time Series Forecasting & Real-Time Prediction</ListGroup.Item>
                        <ListGroup.Item as="li">Vector Databases (Weaviate, FAISS) & Semantic Search</ListGroup.Item>
                        <ListGroup.Item as="li">LLM Fine-Tuning (LoRA, PEFT) & Evaluation</ListGroup.Item>
                        <ListGroup.Item as="li">LangGraph, OpenRouter, Hugging Face Transformers</ListGroup.Item>
                      </ListGroup>
                    </strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="light" className="text-center bg-transparent">
                <Card.Header as="h1" className="sub-heading">🏏Hobbies</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <strong>
                      <ListGroup variant="flush" as="ul">
                        <ListGroup.Item as="li">Cricket 🏏 – lifelong fan, weekend player, and World Cup obsessive</ListGroup.Item>
                        <ListGroup.Item as="li">Open World Gaming 🎮 – love exploring AI mechanics in games like GTA & RDR2</ListGroup.Item>
                        <ListGroup.Item as="li">TV Show Bingeing 📺 – from sci-fi to courtroom dramas, I break down plot like a data flow</ListGroup.Item>
                        <ListGroup.Item as="li">AI Podcast Listening 🎧 – regular listener of Latent Space, Practical AI, and Lex Fridman</ListGroup.Item>
                        <ListGroup.Item as="li">Designing Clean UI/UX 💻 – streamlining user experiences in Streamlit & front-end tools</ListGroup.Item>
                        <ListGroup.Item as="li">Reading Tech & Sci-Fi Books 📚 – from “The Almanack of Naval” to “Neuromancer”</ListGroup.Item>
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
