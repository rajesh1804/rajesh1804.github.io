import {Card, Accordion} from 'react-bootstrap';

export default function Publications(){
  return(
    <Card border="light" style={{backgroundColor: 'transparent'}}>
      <Card.Header as="h1" style={{backgroundColor: 'rgb(217,242,254)'}}>📜Publications</Card.Header>
      <Card.Body>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>YouTube Video Ranking: An NLP based system</strong> &nbsp; (IJRTE)</Accordion.Header>
            <Accordion.Body>
              <strong>Published: </strong>November 2019<br />
              🔗 <a href="https://www.ijrte.org/wp-content/uploads/papers/v8i4/D7303118419.pdf" target="_blank" rel="noopener noreferrer">Link</a><br/ >
              <strong>Abstract: </strong><br />
              YouTube is an acclaimed video information source on the web among various social media sites, where users are sharing, commenting and
              liking/dis-liking the video along with the continuous uploading of videos in real-time.
              Generally, the quality, popularity and relevance of results obtained from searching a query are obtained based on a rating system.
              Now and then few irrelevant and substandard videos are ranked higher because of higher views and likes.
              To address this issue, a new sentiment analysis approach on the user comments based on Natural Language Processing has been put forth.
              The suggested analysis will be helpful in providing a desirable result to the search query.
              The effectuality of the system has been proved in this paper using a data driven approach in terms of accuracy.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <strong>Prediction of Survivors in the Titanic Cruise</strong> &nbsp; (IJRTE)
            </Accordion.Header>
            <Accordion.Body>
              <strong>Published: </strong>September 2019<br />
              🔗 <a href="https://www.ijrte.org/wp-content/uploads/papers/v8i3/C4408098319.pdf" target="_blank" rel="noopener noreferrer">Link</a><br />
              <strong>Abstract: </strong><br />
              On the 15th of April, 1912 the titanic witnessed a
              disaster resulting in the sinking of her passengers on the maiden
              voyage near North Atlantic. Even though it is a very long time
              since this maritime disaster took place, the idea behind what
              impacts each individual survival is still a great research attracting
              researcher’s attention. The approach taken in this paper is to
              utilize the publically available data set from website called Kaggle.
              Kaggle is a popular data science webpage that put together
              information of people in the titanic into a data set for the data
              mining competition: “Titanic: Machine Learning from Disaster”.
              The research and comparisons in this paper uses a few machine
              learning techniques and algorithms to analyse the data for
              classification and prediction of survivors. The prediction and
              efficiency of these algorithms depend greatly on data analysis and
              model. The techniques used to do so are Random Forest, Support
              Vector Machine, Gradient Boosting Machine.<br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
