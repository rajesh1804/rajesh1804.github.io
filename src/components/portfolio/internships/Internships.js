import {Card, Accordion, ListGroup} from 'react-bootstrap';

export default function Internships(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}}>
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>👨‍💻Internships</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>BlueCat Networks</strong> &nbsp; (Toronto, Canada)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Machine Learning Researcher Intern<br />
              <strong>Duration: </strong>May 2023 - December 2023<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Spearheaded research to assess the potential of leveraging deep learning techniques to tackle the issue of DNS Tunnels. 
                    This involved a thorough examination of the problem landscape and the formulation of innovative approaches to address the
                     challenges associated with detecting these tunnels.<br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Modeled and implemented a weakly-supervised learning method to detect DNS Tunnels. Employed a pairwise 
                    relation prediction technique to prototype a system capable of identifying both previously encountered and previously 
                    unseen DNS tunnels. Achieved a notable 67% hit rate, showcasing the efficacy of the developed approach.<br />
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><strong>JP Morgan Chase</strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Software Engineer Intern - SEP<br />
              <strong>Duration: </strong>January 2020 - July 2020<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Undertook the responsibility of building a centralized web portal using React.js during my internship. This dynamic portal 
              served as a one-stop solution, replacing traditional MS-Excel reports. The transition not only streamlined data access but also 
              significantly improved user efficiency in consuming relevant information. <br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Engineered a multi-page and multi-section dashboard incorporating advanced features such as a filtering mechanism. Leveraged 
              React-Router and Redux to implement seamless navigation and state management, enhancing user experience and interaction with 
              the portal.<br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Implemented GET calls for each section of the dashboard using the 'fetch' API in React.js. This approach ensured real-time 
              data retrieval, keeping the information up-to-date and relevant to the user's needs.<br />
                    </ListGroup.Item>
                    <ListGroup.Item>
                    o Introduced an active session-based data caching mechanism within the dashboard. This innovative approach involved storing 
              previously fetched data from API calls, dynamically replacing subsequent API calls with cached data when the user revisited the 
              same endpoint. This optimization significantly reduced redundant API calls, contributing to a more responsive and efficient 
              web portal.<br />
                    </ListGroup.Item>
                </ListGroup>
              <b>🏆Accolade(s):</b> Execution excellence - SEP interns (2020)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><strong>Heptagon Technologies Pvt Ltd</strong> &nbsp; (Bangalore, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Data Science Intern<br />
              <strong>Duration: </strong>April 2019 - May 2019<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Developed a sophisticated sentiment analysis model designed to assess the sentiment polarity of data obtained through the 
              Twitter API. This intricate task involved a multi-step process, including tokenization, lemmatization, and vectorization. 
              By employing these techniques, the model created higher-dimensional word embeddings, enabling it to capture nuanced 
              relationships between tokens and extract fine-grained insights from the text data.<br />
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><strong>Acumen Technologies Pvt Ltd</strong> &nbsp; (Chennai, India)</Accordion.Header>
            <Accordion.Body>
              <strong>Designation: </strong>Trainee<br />
              <strong>Duration: </strong>April 2017 - June 2019<br />
              <strong>Description: </strong><br />
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                    o Developed a smooth and seamless login page using a blend of HTML, CSS, PHP, and Bootstrap. This collaborative effort 
              resulted in an aesthetically pleasing and responsive interface that enhances the user experience during the 
              authentication process.<br />
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
