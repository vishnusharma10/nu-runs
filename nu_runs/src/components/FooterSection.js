import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/nuruns.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "../css/footersection.css";
const FooterSection = () => {
  return (
    <>
      <Jumbotron>
        <Container>
          <Row>
            <Col xs={12} md={3} lg={3}>
              <Link to="/">
                <div className="center-cropped">
                  <img alt="logo" src={logo}></img>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <h6>Features</h6>

              <Link
                to="/challenges"
                className="links"
                style={{ color: "#353535" }}
              >
                Challenges
              </Link>
              <br></br>
              <Link to="/courses"className="links" style={{ color: "#353535" }}>
                Courses
              </Link>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <h6>Resources</h6>
              <Link className="links">Blog</Link>
              <br></br>
              <Link className="links"> User Gallery</Link>
              <br></br>
              <Link className="links">Reviews</Link>
              <br></br>
              <Link className="links">Partner With Us</Link>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <h6>Social Media</h6>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <FaFacebookF></FaFacebookF>
                </li>
                <li>
                  <FaInstagram></FaInstagram>
                </li>
                <li>
                  <FaLinkedin></FaLinkedin>
                </li>
                <li>
                  <FaTwitter></FaTwitter>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};
export default FooterSection;
