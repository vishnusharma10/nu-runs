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
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import UserContext from "../context/userContext";
import axios from "axios";
import CoursesList from "../components/CoursesList";
import EnrolledChallengeCard from "../components/EnrolledChallengeCard";
import BackgroundImage from "../assets/img/theme/profile-cover.jpg";
import "../css/profile.css";
import ProfilePic from "../assets/img/theme/team-4-800x800.jpg";
// reactstrap components
import {
  Button,
  Card,
  FormGroup,
  Form,
  Container,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";
// core components
import UserHeader from "../components/UserHeader.js";

const Profile = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");

  const [enrolledChallenges, setEnrolledChallenges] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const fetchChallenges = async (userId) => {
    const result = await axios.get(
      "http://localhost:8000/api/profile/enrolled-challenges/" + userId
    );
    console.log(result.data.challenges);
    setEnrolledChallenges(result.data.challenges);
  };
  const fetchCourses = async (userId) => {
    const result = await axios.get(
      "http://localhost:8000/api/profile/enrolled-courses/" + userId
    );
    console.log(result.data.courses);
    setEnrolledCourses(result.data.courses);
  };
  useEffect(() => {
    const getCookie = async () => {
      const result = await axios.get("http://localhost:8000/auth");
      const userInfo = await axios.post("http://localhost:8000/api/profile", {
        id: result.data.id,
      });
      setFirstName(userInfo.data.userInfo.firstname);
      setlastName(userInfo.data.userInfo.lastname);
      setEmail(userInfo.data.userInfo.email);
      setUserId(result.data.id);
    };
    if (!userData.user) history.push("/login");
    getCookie(userId);
    fetchChallenges(userId);
    fetchCourses(userId);
  }, [userData, firstname, userId]);

  return (
    <>
      <div
        id="profile"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          paddingBottom: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "20px",
        }}
      >
        <UserHeader firstname={firstname} />
        {/* Page content */}
        <br></br>
        <Container className="mt--7" fluid>
          <Row>
            <Col>
              <h2>Courses Enrolled</h2>
              {enrolledCourses !== undefined ? (
                enrolledCourses.map((course, key) => {
                  console.log(course);
                  return (
                    <CoursesList
                      courses={course.coursesUrls}
                      courseTitle={course.title}
                      id={course._id}
                    ></CoursesList>
                  );
                })
              ) : (
                <h6>No Courses Enrolled</h6>
              )}
            </Col>
          </Row>
          <div
            style={{
              width: "100%",
              border: "1px solid white",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          ></div>
          <Row>
            <Col style={{ paddingBottom: "40px" }}>
              <h2> On-Going Challenges </h2>
              {enrolledChallenges !== undefined ? (
                enrolledChallenges.map((challenge, key) => {
                  if (challenge !== null) {
                    return (
                      <EnrolledChallengeCard
                        key={key}
                        challenge={challenge["img"]}
                        distance={challenge["distance"]}
                        challengeType={challenge["challengeType"]}
                        id={challenge["_id"]}
                      ></EnrolledChallengeCard>
                    );
                  } else {
                    return <h6>No Challenge Found</h6>;
                  }
                })
              ) : (
                <h6>No Challenges enrolled</h6>
              )}
            </Col>
          </Row>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          style={{ width: "100px", height: "100px" }}
                          src={ProfilePic}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <Card.Body className="pt-0 pt-md-4">
                  <div className="text-center">
                    <h1>{firstname}</h1>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      India
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                    </div>
                    <hr className="my-4" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card>
                <Card.Header className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0" style={{ color: "#284B63" }}>
                        My account
                      </h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <button
                        style={{backgroundColor:"#284B63",color:"white"}}
                       
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Settings
                      </button>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <input
                              className="form-control-alternative"
                              defaultValue="lucky.jesse"
                              value={firstname + lastname}
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="jesse@example.com"
                              value={email}
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <input
                              className="form-control-alternative"
                              defaultValue="Lucky"
                              id="input-first-name"
                              placeholder="First name"
                              value={firstname}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <input
                              className="form-control-alternative"
                              defaultValue="Jesse"
                              id="input-last-name"
                              placeholder="Last name"
                              value={lastname}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Profile;
