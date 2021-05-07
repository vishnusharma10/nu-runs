import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/midsection.css";
import ChallengesImage from "../assets/challenges.png";
import WorkoutImage from "../assets/workouts.png"
const MidSection = () => {
  return (
    <>
      <Container className="steps">
        <Row>
          <Col>
            <div style={{textAlign:"center",marginTop:"30px"}}>
              <h1>Challenges to keep you motivated</h1>
              <p>
              Life is about accepting the challenges along the way,
              choosing to keep moving forward, and savoring the journey.
              </p>
            </div>
          </Col>
          <Col style={{textAlign:"center"}}>
          <img style={{marginTop:"10px",marginRight:"10px",borderRadius:"10px"}}src={ChallengesImage} alt="step 1 procedure"></img>
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:"center"}}>
          <img style = {{borderRadius:"20px", margin:"20px"}}src={WorkoutImage} alt="our editor"></img>
          </Col>
          <Col>
          <div style={{textAlign:"center", marginTop:"50px"}}>
              <h1>Personalized Workouts created by our Talented Trainers</h1>
              <p>
              Browse through millions of royalty-free illustrations, photos, footage, music and sounds to build the video you need in any style you like. Customize every single aspect of your video with full flexibility.
              </p>
            </div>
          </Col>
        </Row>
       
      </Container>
    </>
  );
};

export default MidSection;
