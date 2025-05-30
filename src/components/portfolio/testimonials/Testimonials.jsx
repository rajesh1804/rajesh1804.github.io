import {Card, Accordion} from 'react-bootstrap';
import './testimonials.scss';

export default function Testimonials(){
  return(
    <Card border="light" className="testimonials-card" id="testimonials">
      <Card.Header as="h1" className="testimonials-header">❝❞ Testimonials</Card.Header>
      <Card.Body as="p">
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header><strong>Kapil Agarwal</strong> &nbsp;Jp Morgan Chase</Accordion.Header>
            <Accordion.Body>
              Rajesh & Myself worked together in multiple projects for more than 2 years. He joined as fresher in the team & learnt lot 
              of new technologies(Hadoop, Spark, Python, SQL etc) with in short span of time & delivered an reusable/configurable end to 
              end product for the business. He was a very productive person and is a multi-skilled person with vast knowledge. 
              Rajesh is careful, proactive, self motivated and intelligent team player. He has always helped his team members 
              whenever its required. He made a good relationship with business as well. It’s was pleasure working with him. 
              Rajesh is a great asset to any company.<br /><br />
                <footer className="blockquote-footer">
                    Kapil Agarwal (via LinkedIn) 
                    <cite title="Testimonial Author">
                    &nbsp;🔗 <a href="https://www.linkedin.com/in/rajesh1804/details/recommendations/" target="_blank" rel="noopener noreferrer">Link</a>
                    </cite>
                </footer>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
          <Accordion.Header><strong>Venkataramana Gosukonda</strong> &nbsp;Jp Morgan Chase</Accordion.Header>
            <Accordion.Body>
              Rajesh took the lead and worked on critical projects in WM Controls Analytics at JPMC. 
              He is a strong engineer with in-depth knowledge in Python, Spark, AI/ML and engineering techniques with great analytical skills. 
              He learned Bigdata (Hadoop and Cloud) in a short span of time and delivered Configurable Ingestion Framework in a 
              short span of time becoming a key engineer in the team. He is a dedicated, hard working technology professional. 
              He is a go to person for anything, be it consulting or trouble shooting issues. 
              His humble attitude makes him a valuable asset in the company. 
              Any day, he would be someone you can count on, I did and was never disappointed.<br /><br />
              <footer className="blockquote-footer">
                    Venkataramana Gosukonda (via LinkedIn) 
                  <cite title="Testimonial Author">
                  &nbsp;🔗 <a href="https://www.linkedin.com/in/rajesh1804/details/recommendations/" target="_blank" rel="noopener noreferrer">Link</a>
                  </cite>
              </footer>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
