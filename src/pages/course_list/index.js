import "./style.css";
import { useState, useEffect } from "react";
import Course from "../../Components/Course";
import { get } from "../../service/apiClient";

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    get("").then((item) => {
      console.log(item);
      setCourses(item.data);
    });
  }, []);

  return (
    <>
      <div className="card" id="course_list_card">
        <h1>Check out our available courses!</h1>
        <ul className="course_list">
          {courses.map((course) => {
            console.log(course)
            return <Course
            key={course.id}
            course={course} />;
          })}
        </ul>
      </div>
    </>
  );
}
