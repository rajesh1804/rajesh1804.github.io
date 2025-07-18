// src/components/ProjectItem.jsx
import { Accordion } from 'react-bootstrap';

export default function ProjectItem({ project, index }) {
  const { title, duration, links, description, details } = project;

  const renderLinks = () => (
    <>
      {links?.article && (
        <>
          <img src="https://img.icons8.com/?size=25&id=XVNvUWCvvlD9&format=png&color=000000" alt="" />
          <a href={links.article} target="_blank" rel="noopener noreferrer">Article</a>&nbsp;
        </>
      )}
      {links?.live && (
        <>
          <img src="https://img.icons8.com/?size=25&id=sop9ROXku5bb&format=png&color=000000" alt="" />
          <a href={links.live} target="_blank" rel="noopener noreferrer">Live App</a>&nbsp;
        </>
      )}
      {links?.github && (
        <>
          <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt="" />
          <a href={links.github} target="_blank" rel="noopener noreferrer">Github</a>
        </>
      )}
    </>
  );

  return (
    <Accordion.Item eventKey={index.toString()}>
      <Accordion.Header>
        <strong>{title}</strong>
      </Accordion.Header>
      <Accordion.Body>
        <strong>Duration:</strong> {duration}<br />
        {links && renderLinks()}<br /><br />
        <strong>Description:</strong><br />
        {description ? (
          <>
            {description.what && (
              <>
                <h6>🚀 What it is:</h6>
                <p>{description.what}</p>
              </>
            )}
            {description.why && (
              <>
                <h6>💡 Why it matters:</h6>
                <p>{description.why}</p>
              </>
            )}
            {description.highlights?.length > 0 && (
              <>
                <h6>🧠 Highlights:</h6>
                <ul>
                  {description.highlights.map((item, idx) => (
                    <li key={idx}>✅ {item}</li>
                  ))}
                </ul>
              </>
            )}
          </>
        ) : (
          <p>{details}</p>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}
