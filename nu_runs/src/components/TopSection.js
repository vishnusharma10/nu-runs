import React from "react";
import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import doodle from "../assets/doodle.png";
import "../css/topsection.css";
const TopSection = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
          <div style={{textAlign:"center"}}>
                <iframe
                  width="1000"
                  height="500"
                  src="https://www.youtube.com/embed/dU7wjTRfU4o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
            </div></Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <div style={{textAlign:"center"}}>
              <Jumbotron className="topjumbo">
                <h1>Never miss the Leg Day</h1>
                <p>
                  As the youth of the world’s population we take it upon
                  ourselves to carry on uninterrupted in our goal towards health
                  for all.
                </p>
                <p>
                  <Link to="/auth">
                    <button>Get Started</button>
                  </Link>
                </p>
              </Jumbotron>
            </div>
          </Col>
        </Row>
        <hr className="solid"></hr>
        <Row>
          <Jumbotron className="secondJumbo">
            <h1>
              If you want something you’ve never had, you must be willing to do
              something you’ve never done.
            </h1>
            <p>— Thomas Jefferson, Third President of the United States</p>
          </Jumbotron>
        </Row>
        <hr className="solid"></hr>
      </Container>
    </>
  );
};
export default TopSection;
