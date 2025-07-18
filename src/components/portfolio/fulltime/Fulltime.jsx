import { Card, Accordion } from 'react-bootstrap';
import { fulltimeJobs } from './fulltimeData';
import WorkItem from './FulltimeItem';
import './fulltime.scss';

export default function Fulltime() {
  return (
    <Card border="light" className="fulltime-card" id="work">
      <Card.Header as="h1" className="fulltime-header">👨‍💻 Full-time</Card.Header>
      <Card.Body>
        <Accordion flush>
          {fulltimeJobs.map((job, index) => (
            <WorkItem key={index} job={job} index={index} />
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
}
