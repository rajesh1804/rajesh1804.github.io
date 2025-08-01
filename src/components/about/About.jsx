import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './about.scss';

function About() {
  return (
    <Container id="about">
      <Card border="light" className="bg-transparent fade-in">
        <Card.Header as="h1" className="main-heading">👋 About</Card.Header>
        <Card.Body>
          <Card.Text as="div">
            <section>
              <p>
                I’m a <strong>Machine Learning Engineer</strong> who builds AI that ships — not just notebooks. My systems are <em>real-time, drift-aware, latency-optimized</em>, and deployed at the edge of what’s possible.
              </p>
            </section>

            <section>
              <p>
                I specialize in <strong>production-grade ML & LLM systems</strong> — from Uber-style fare prediction and Netflix-style recommenders to agentic Reddit analyzers and semantic grocery search. Every project is <strong>live on Hugging Face Spaces</strong>, optimized for <strong>free-tier latency</strong>, and powered by tools like <strong>ONNX, river, LangGraph, OpenRouter, FAISS, and Weaviate</strong>.
              </p>
            </section>

            <section>
              <p>
                At <strong>BlueCat Networks</strong>, I delivered real impact:
              </p>
              <ul>
                <li>📌 RAG assistant cut triage time by <strong>40%</strong></li>
                <li>📈 Time series forecasters improved infra planning by <strong>30%</strong></li>
                <li>🔍 Weakly-supervised DNS anomaly detector beat baseline by <strong>23%</strong></li>
              </ul>
            </section>

            <section>
              <p>
                At <strong>JP Morgan Chase</strong>, I built Spark + Kafka pipelines that handled 50M+ records/day and cut runtimes from 45 minutes to 4 — scaling ML infra at production velocity.
              </p>
            </section>

            <section>
              <p>
                I hold an MSc in Applied Computing from the <strong>University of Toronto</strong> and build daily with <strong>Python, Transformers, LangGraph, river, FAISS, Weaviate, Docker, Streamlit, and AWS</strong>.
              </p>
            </section>

            <section>
              <p>Right now, I’m focused on:</p>
              <ul>
                <li>⚙️ Real-time ML with <strong>online learning + drift detection</strong></li>
                <li>🧠 <strong>Agentic LLM pipelines</strong> that reason, fact-check, and evaluate themselves</li>
                <li>📊 LLM observability: traceable evaluations, metrics, and feedback loops</li>
              </ul>
            </section>

            <section>
              <p>
                🎯 I’m exploring senior AI/ML roles where I can <strong>own end-to-end systems</strong> that think, adapt, and scale — like the work being done at <em>Uber, Stripe, Netflix, OpenAI, and Anthropic</em>.
              </p>
              <p>
                <strong>Let’s connect</strong> if you’re building AI that’s intelligent, efficient, and deployment-ready.
              </p>
            </section>
          </Card.Text>

          <Row>
            <Col md={6}>
              <Card border="light" className="text-center bg-transparent subcard">
                <Card.Header as="h1" className="sub-heading">📁 Interests</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush" as="ul">
                    <ListGroup.Item>Agentic LLMs, RAG Workflows & LLM Evaluation</ListGroup.Item>
                    <ListGroup.Item>Real-Time ML, Online Learning & Drift Detection</ListGroup.Item>
                    <ListGroup.Item>Semantic Search, Vector DBs (FAISS, Weaviate)</ListGroup.Item>
                    <ListGroup.Item>LLM Fine-Tuning (LoRA, PEFT), LangGraph & OpenRouter</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card border="light" className="text-center bg-transparent subcard" id="resume">
                <Card.Header as="h1" className="sub-heading">📝 Resume</Card.Header>
                <Card.Body>
                  <Card.Link
                    href="/assets/RajeshM_Resume_Website.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link"
                  >
                    View Resume (PDF)
                  </Card.Link>
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
