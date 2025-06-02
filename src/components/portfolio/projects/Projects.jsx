import {Card, Accordion} from 'react-bootstrap';
import './projects.scss';

export default function Projects(){
  return(
    <Card border="light" className="projects-card" id="projects">
      <Card.Header as="h1" className="projects-header">💻Projects</Card.Header>
      <Card.Body>
        <Accordion flush className="projects-accordion">
        <Accordion.Item eventKey="0">
            <Accordion.Header><strong>Quantifying Uncertainty in Ensemble Learning </strong> &nbsp; </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>October 2022 - December 2022<br />
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
              <a href="https://github.com/rajesh1804/" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              The main objective is to explore the different types of uncertainties involved during training an ensemble
              model as well as those involved during predictions. The idea is to establish a comprehensive
              set of methodologies that track both the aleatoric (data uncertainty) and the epistemic (knowledge
              uncertainty). We start with a theoretical analysis of bayesian inference on an ensemble of probabilistic
              models, for both regression and classification establishing the mathematical definitions to compute the 
              aleatoric and epistemic uncertainties. Next we generate boosted ensembles
              of GBDT (Gradient Boosted Decision Trees) using two techniques: SGB (Stochastic Gradient
              Boosting) and SGLB(Stochastic Gradient Langevin Boosting) as well as bagged ensemble (specifically,
              Random Forests). Subsequently, we will analyze the models using synthetically generated data
              to empirically understand the different attributes of the ensembles for estimating data and knowledge
              uncertainties. Finally, we will evaluate the plausibility of using the uncertainty measures to
              detect errors (Prediction-Rejection Ratio - PRR) and out-of-domain inputs (AUC-ROC) on realworld
              data (such as prediction uncertainty for credit card fraud, uncertainty in prediction of medical
              diagnosis, etc).<br />
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header><strong>Active Learning Strategies for NLP Classification</strong> &nbsp; </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>October 2022 - December 2022<br />
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
              <a href="https://github.com/rajesh1804/" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              A common problem faced by the anyone wanting to train a machine learning model is obtaining labeled data, where unlabeled 
              data may be abundant, but labels are complex, time-consuming, or expensive to obtain. Weak Supervision and Active Learning  
              play a vital role in filling this gap. Weak supervision labels data using weak supervision sources for assigning noisy 
              labels to the unlabeled data. Snorkel, Snuba and ASTRA are the state of the art implementations of weak supervision. 
              On the flip side, Active Learning uses the input from human annotator to generate good quality labels. The key notion 
              behind active learning is that a machine learning algorithm can achieve greater accuracy with fewer labelled training 
              instances if they are allowed to choose the training data from which they learn. Through this study we aim to investigate 
              how different query strategies in Active Learning fare when labeling on a real-world dataset in addition to 2 benchmark 
              datasets. We develop an active learning module that queries instances from unlabeled dataset using multiple strategies on 
              multiple machine learning models. We compare the performance of the active learners to various weak supervision baselines. 
              And, we also try to implement Bayesian optimization on medical dataset to compare against the active learner due to their 
              similarity. Finally, we conclude that the active learner with actively sampled instances outperform the baselines for all 
              the datasets.<br />
            </Accordion.Body>
        </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><strong>Covid19 Stats Dashboard</strong> &nbsp; </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>May 2020<br />
              🔗 <a href="https://covid19app-5f5d3.web.app/" target="_blank" rel="noopener noreferrer">App Link</a> &nbsp;
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
                <a href="https://github.com/rajesh1804/covid19" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              Developed this progressive web app using React.js using React-Router and Redux.
              This PWA can be installed as an app in Windows, Mac, Android and IOS.
              This database less dashboard fetches data from open source APIs exposed by trustable sources and presents this data as in easily readable formats like tables and graphs.
              With the data being refreshed every 15 minutes, it always present only the latest stats<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <strong>Detection of Phishing in Websites</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>March 2019<br />
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
                <a href="https://github.com/rajesh1804/Detection-of-Phishing-in-Websites" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              Implemented using Python, uses machine learning to learn 17 attributes and predict whether the given URL is legitimate or not.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <strong>Image based attendance marker</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>February 2017 - April 2017<br />
              <strong>Description: </strong><br />
              Built using MATLAB, uses images taken from multiple webcams in a class room, processes them to segment out faces from the images, and
              finally return a boolean output for every matched segmented face when compared with the original student image database.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <strong>Realtime weather monitoring app</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>February 2018<br />
              <strong>Description: </strong><br />
              This project was implemented using Java and Arduino. The hardware components such as temperature sensor and humidity sensor were
              controlled by Arduino, a microcontroller. This microcontroller was coded to send the real-time data from sensors to the database (Firebase),
              which in turn was fetched by the designed android app in real-time to display.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              <strong>Classic Pong</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>June 2019<br />
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
                <a href="https://github.com/rajesh1804/Detection-of-Phishing-in-Websites" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              A simple and lightweight multiplayer Pong game built using the Turtle module in python.<br />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              <strong>Connect 4 game</strong> &nbsp;
            </Accordion.Header>
            <Accordion.Body>
              <strong>Duration: </strong>June 2019<br />
              <img src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
                <a href="https://github.com/rajesh1804/Connect-Four-Java-Application" target="_blank" rel="noopener noreferrer">Github</a>
              <br/ >
              <strong>Description: </strong><br />
              This project was implemented using Java and JavaFx, it consists three main modules and supporting libraries.
              This project is a computerized version of the classic ‘Connect 4’ game.<br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
