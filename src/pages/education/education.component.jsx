import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import MCA from "../../assets/img/skills/mca.png";
import Tilt from "react-tilt";
import "./education.style.css";

const Education = () => {
  return (
    <div id="education">
      <h1 className="pt-3 text-center font-details-b pb-3">Education Details</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={MCA} alt="MCA LOGO" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Master Of Computer Applications</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    
                    <strong>Duration:</strong> June 2016 - May 2019
                    <br/>
                    
                    <ul className="text-left">
                    <strong>Personal Qualities</strong>
                      <li> <li>Smart Worker</li>
<li>Adaptability, Knowledge and Focus on work.</li>
<li>Excellent communication skills in written and verbal both.</li>
<li>Keep myself calm in pressure situation.</li>
</li>
<strong>Academic Qualification
</strong>
                      <li> <li>MCA from JNTU University with 60% in 2019.</li>
<li>BSc from ANU University with 70% in 2015.</li>
<li>HSC from Intermediate Board with 91% in 2012. </li>
<li>SSC from SSC Board with 90% in 2010.</li>
                      </li>
                     
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Education;