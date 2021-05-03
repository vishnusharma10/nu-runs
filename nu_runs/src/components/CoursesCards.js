import React from "react";
import { Link } from "react-router-dom";

import { Card, Col, Jumbotron, Row } from "react-bootstrap";
import CourseCard from "./CoursePage";

const CoursesList = ({ courses, courseTitle }) => {
  return (
    <>
      <div>
          <div style={{border:"1px solid black", marginBottom:"20px", borderRadius:"20px"}}>
          <h3>{courseTitle}</h3>
          </div>
        
        <Row>
          {courses.map((url, key) => {
            if (url !== null) {
              return (
                <CourseCard
                  courseLink={Object.values(url)[0]}
                  courseTitle={Object.keys(url)[0]}
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
