import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Fulltime from './fulltime/Fulltime';
import Internships from './internships/Internships';
import Ta from './ta/Ta';
import Publications from './publications/Publications';
import Accolades from './accolades/Accolades';
import Projects from './projects/Projects';
import Resume from './resume/Resume';
import Education from './education/Education';
import Testimonials from './testimonials/Testimonials';
import './portfolio.scss'; // 👈 SCSS import

function Portfolio() {
    return (
        <Container id="portfolio">
            <Card border="light" className="portfolio-card">
                <Card.Header as="h1" className="portfolio-header">🧠Portfolio</Card.Header>
                <Card.Body>
                    <Row><Fulltime /></Row>
                    <div className="spacer" />
                    <Row><Internships /></Row>
                    <div className="spacer" />
                    <Row><Ta /></Row>
                    <div className="spacer" />
                    <Row><Education /></Row>
                    <div className="spacer" />
                    <Row><Publications /></Row>
                    <div className="spacer" />
                    <Row><Accolades /></Row>
                    <div className="spacer" />
                    <Row><Projects /></Row>
                    <div className="spacer" />
                    <Row><Testimonials /></Row>
                    <div className="spacer" />
                    <Row><Resume /></Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Portfolio;
