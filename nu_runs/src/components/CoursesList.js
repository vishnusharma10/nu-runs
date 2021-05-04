import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Card, Col, Jumbotron, Row } from "react-bootstrap";
import CourseCard from "./CourseCard";

const CoursesList = ({ courses, courseTitle, id }) => {
  const [userId, setUserId] = useState("");

  const getEnrolled = async (userId, courseId) => {
    console.log(userId, courseId);
    const result = await axios.post(
      "http://localhost:8000/api/profile/course-enroll/" +
        userId +
        "/" +
        courseId
    );
    console.log(result.data);
  };

  useEffect(() => {
    const getUserId = async () => {
      const result = await axios.get("http://localhost:8000/auth");
      setUserId(result.data.id);
    };
    getUserId();
  }, []);


  return (
    <>
      <div>
        <div
          style={{
            border: "1px solid black",
            marginBottom: "20px",
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <h3 style={{ display: "inline-block", paddingRight: "20px" }}>
            {courseTitle}
          </h3>{" "}
          <button onClick={()=>getEnrolled(userId,id)}
            style={{ border: "1px solid black", display: "inline-block" }}
          >
            <strong>Enroll</strong>
          </button>
        </div>

        <Row>
          {courses.map((url, key) => {
            if (url !== null) {
              return (
                <CourseCard
                  courseLink={Object.values(url)[0]}
                  courseTitle={Object.keys(url)[0].toUpperCase()}
                ></CourseCard>
              );
            } else {
              return <h1>Loading Courses</h1>;
            }
          })}
        </Row>
      </div>
    </>
  );
};
export default CoursesList;
