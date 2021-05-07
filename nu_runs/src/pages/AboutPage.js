import React from "react";
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-dom";
import NuRuns from "../assets/img/nuruns.png";
import BackgroundImage from "../assets/img/theme/profile-cover.jpg";
const AboutPage = () => (
  <React.Fragment>
    <div>
      <Container>
        <Row style={{ marginBottom: "20px", borderRadius: "50px" }}>
          <Col
            xs={12}
            md={4}
            lg={4}
            style={{
              textAlign: "center",
              marginTop: "150px",
              width: "200px",
              height: "200px",
            }}
          >
            <div>
              <Card.Img variant="top" src={NuRuns} />
            </div>
          </Col>

          <Col
            xs={12}
            md={8}
            lg={8}
            style={{
              backgroundImage: `url(${BackgroundImage})`,
              padding: "40px",
              marginBotttom: "20px",
            }}
          >
            <div>
              <Jumbotron>
                <h1 style={{ color: "#284B63" }}>About Us</h1>
                <p>
                  nu_runs is a student led college fitness initiative that was
                  launched by the very members of this group in 2019. Its
                  founders include computer science undergraduate students who
                  are fitness enthusiasts. Initially started off as a running
                  group, now also extends to strength training and flexibility
                  exercises. Building a larger student community, we believe
                  will increase the reach of our club and also enable us to
                  perform our duties better. As the youth of the world’s
                  population we take it upon ourselves to carry on uninterrupted
                  in our goal towards health for all.
                </p>
                <h3 style={{ color: "#284B63" }}>Roles and Deliverables :</h3>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    Provide guidance to potential runners on running techniques
                    including breathing control (like Box breathing),
                    stretching, proper warm-up and cool down sessions before and
                    after run respectively.
                  </li>
                  <li>
                    Enhance physical fitness that is evidently being neglected
                    in coming generations.
                  </li>
                  <li>
                    Provide guidance for strength building and weight training.{" "}
                  </li>
                  <li>
                    Providing a stress-free environment by encouraging running
                    as a group activity.
                  </li>
                  <li>
                    Offer students motivation and company during running by club
                    members.
                  </li>
                  <li>
                    Promote the spirit of adventure and build self-confidence.
                  </li>
                  <li>Identify talent for higher level competitions.</li>
                </ul>
              </Jumbotron>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
);
export default AboutPage;
