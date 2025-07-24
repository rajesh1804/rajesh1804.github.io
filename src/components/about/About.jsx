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
              I’m a <strong>Machine Learning Engineer</strong> who builds AI that ships — not just notebooks. My systems are <em>real-time, drift-aware, latency-optimized, and deployed on the edge of what's possible</em>.
            </p>

            <p>
              I specialize in <strong>real-world ML & LLM systems</strong> — from Uber-style fare prediction and Netflix-style recommenders to Reddit thread analyzers and Instacart style semantic grocery search. Every project I build is <em>production-grade</em>: deployed on <strong>Hugging Face Spaces</strong>, optimized for <strong>free-tier latency</strong>, and equipped with tools like <strong>ONNX, river, LangGraph, OpenRouter</strong>, and <strong>vector DBs (FAISS, Weaviate)</strong>.
            </p>

            <p>
              At <strong>BlueCat Networks</strong>, I deployed AI that directly impacted product and ops teams: a <strong>RAG assistant</strong> that reduced triage time by 40%, <strong>ETS/ARIMA/STL forecasters</strong> that improved infra planning accuracy by 30%, and a <strong>weakly-supervised DNS anomaly detector</strong> that beat traditional baselines by 23%.
            </p>

            <p>
              Earlier, at <strong>JP Morgan Chase</strong>, I engineered Spark + Kafka pipelines that ingested 50M+ records/day and brought down pipeline runtimes from 45 minutes to just 4 — showing my ability to scale both ML and data infra at production velocity.
            </p>

            <p>
              I hold a Master’s in Applied Computing from the <strong>University of Toronto</strong> and build daily with <strong>Python, Hugging Face Transformers, LangGraph, OpenRouter, river, FAISS, Weaviate, PySpark, Docker, TensorFlow, Streamlit, AWS</strong>, and modern async-first ML tooling.
            </p>

            <p>
              These days, I'm focused on:
              <ul>
                <li>⚙️ Real-time ML systems with <strong>online learning + drift detection</strong></li>
                <li>🧠 <strong>Agentic LLM pipelines</strong> that reason, fact-check, and evaluate themselves</li>
                <li>📊 Evaluating production LLMs with robust metrics + user traceability</li>
              </ul>
            </p>

            <p>
              🎯 I’m exploring senior AI/ML roles where I can <strong>own end-to-end systems</strong> that think, adapt, and scale — in the spirit of what teams at <em>Uber, Stripe, Netflix, OpenAI, and Anthropic</em> are building.
            </p>

            <p>
              <strong>Let’s connect</strong> if you're building AI that’s intelligent, efficient, and ready to meet real-world demands.
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
                        <ListGroup.Item as="li">Cricket 🏏 – weekend player & World Cup junkie</ListGroup.Item>
                        <ListGroup.Item as="li">Open-world gaming 🎮 – especially GTA & Red Dead</ListGroup.Item>
                        <ListGroup.Item as="li">Binge-worthy TV 📺 – sci-fi, courtroom dramas</ListGroup.Item>
                        <ListGroup.Item as="li">AI podcasts 🎧 – Latent Space, Practical AI, Lex Fridman</ListGroup.Item>
                        <ListGroup.Item as="li">UI/UX design 💻 – love clean, minimal interfaces</ListGroup.Item>
                        <ListGroup.Item as="li">Tech & sci-fi books 📚 – from Naval to Neuromancer</ListGroup.Item>
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
