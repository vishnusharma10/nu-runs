/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Jumbotron } from "react-bootstrap";
import ProfilePic from "../assets/img/theme/team-4-800x800.jpg";
const UserHeader = ({ firstname }) => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <Jumbotron>
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="8" md="8" >
                <h1 className="display-2">Hello {firstname}</h1>
                <p className=" mt-0 mb-5">
                  This is your profile page. You can see the progress you've
                  made with your health and manage your courses you have
                  enrolled and challenges you participated in it.
                </p>
              </Col>
              <Col>
                <img
                  alt="..."
                  className="rounded-circle"
                  style={{ width: "300px", height: "300px" }}
                  src={ProfilePic}
                />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </>
  );
};

export default UserHeader;
