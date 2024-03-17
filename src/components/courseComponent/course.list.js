import React, { useState } from "react";

import "./course.css";

import Course from "./course.render";

const CourseList = ({ courses }) => {
  let [changeCourse, setIndexCourse] = useState(0);

  function toogleCourseIndex(ind, e) {
    setIndexCourse(ind);
    e.target.parentNode.children[0].classList.remove("activeCourse");
    e.target.parentNode.children[1].classList.remove("activeCourse");
    e.target.classList.add("activeCourse");
  }

  return (
    <div>
      <div className="toogleCourse ">
        <button
          onClick={(e) => toogleCourseIndex(0, e)}
          className="toogleCourse activeCourse"
        >
          Btech_Courses
        </button>
        <button
          onClick={(e) => toogleCourseIndex(1, e)}
          className="toogleCourse"
        >
          Mbbs_Courses
        </button>
      </div>

      <div className="courseContainer">
        {courses[0].length === 0 ? (
          <p>No Courses Available</p>
        ) : (
          courses[changeCourse].map((course) => {
            return (
              <Course
                key={course.code}
                code={course.code}
                name={course.name}
                des={course.description}
                enrolled={course.enrolled}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CourseList;
