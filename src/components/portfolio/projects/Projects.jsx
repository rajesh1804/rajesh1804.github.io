import { projects } from './projectData';
import ProjectItem from './ProjectItem';
import {Card, Accordion} from 'react-bootstrap';
import './projects.scss';


export default function Projects() {
  return (
    <Card border="light" className="projects-card" id="projects">
      <Card.Header as="h1" className="projects-header">💻 Projects</Card.Header>
      <Card.Body>
        <Accordion flush className="projects-accordion">
          {projects.map((proj, idx) => (
            <ProjectItem key={idx} project={proj} index={idx} />
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
}