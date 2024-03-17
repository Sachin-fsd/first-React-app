import React from "react";
import './course.css'

import Course from "./course.render";

const CourseList = ({courses}) => {
  return (
    <div className="courseContainer">
      {courses.length === 0 ? (
        <p>No Courses Available</p>
      ) : (
        courses.map((course) => {
          return <Course
            key={course.code}
            code={course.code}
            name={course.name}
            des={course.description}
            enrolled={course.enrolled}
          />;
        })
      )}
    </div>
  );
};

export default CourseList;
