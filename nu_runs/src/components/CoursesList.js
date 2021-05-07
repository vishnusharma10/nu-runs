import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Row } from "react-bootstrap";

import CourseCard from "./CourseCard";


const CoursesList = ({ courses, courseTitle, id }) => {

  const [courseEnrolled, setCourseEnrolled] = useState(false)
  
  const [userId, setUserId] = useState("");
  const [coursesLoaded, setCoursesLoadee] = useState(false);

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
      if (result) {
        setCoursesLoadee(true);
      }
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
          <h3 style={{ display: "inline-block", paddingRight: "20px", color:"white"}}>
            {courseTitle}
          </h3>{" "}
          <button
            onClick={() => getEnrolled(userId, id)}
            style={{ border: "1px solid black", display: "inline-block" }}
          >
            <strong>Enroll</strong>
          </button>
        </div>

        {coursesLoaded ? (
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
        ) : (
          <Loader
            type="Puff"
            color="#284B63"
            height={100}
            width={100}
            timeout={5000} //5 secs
          />
        )}
      </div>
    </>
  );
};
export default CoursesList;
