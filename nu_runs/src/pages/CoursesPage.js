import React, { useState,useEffect } from "react";
import axios from "axios";

import { Jumbotron } from "react-bootstrap";
import CoursesList from "../components/CoursesCards";

const CoursesPage = () => {
  const [newCourses, setNewCourses] = useState([]);

  useEffect(()=>{
    fetchData();
},[]);

const fetchData = async()=>{
    const result = await axios.get("http://localhost:8000/api/courses");
    const newCourses = result.data;
    setNewCourses(newCourses);
}

  return (
    <>
      <Jumbotron style={{ textAlign: "center"}}>
        <h1 style={{ padding: "20px" }}>Courses</h1>
        
            {newCourses.map((course, key) => {
              console.log(course);
              return <CoursesList courses={course.coursesUrls} courseTitle={course.title}>
                
              </CoursesList>
            })}
      </Jumbotron>
    </>
  );
};

export default CoursesPage;
