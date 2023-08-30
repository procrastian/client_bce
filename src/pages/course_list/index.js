import "./style.css";
import { useState } from "react";


const initialCourses = [
  {
    title: "course 1",
    description: "this is an example course, where you learn things",
    length: 4,
    coverImage:
      "https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    tags: ["Meditation"],
  },
  {
    title: "course 2",
    description: "this is an example course, where you learn things",
    length: 8,
    coverImage:
      "https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    tags: ["Meditation"],
  },
  {
    title: "course 3",
    description: "this is an example course, where you learn things",
    length: 4,
    coverImage:
      "https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    tags: ["Mindfullness"],
  },
  {
    title: "course 4",
    description: "this is an example course, where you learn things",
    length: 8,
    coverImage:
      "https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    tags: ["Mindfullness"],
  },
];

export default function CourseList() {
  const [coursesState] = useState([initialCourses]);

  return (
    <>
      <div className="card" id="course_list_card">
        <h1>Check out some of our availble courses below!</h1>
        <ul className="course_list">
          {coursesState.map((course, index) => (
            <li key={index}>
              <h1>{`${course.title}`}</h1>
              <img
                src={course.coverImage}
                alt={`this is the cover for the ${course.title} course`}
              />
              <p>{`${course.description}`}</p>
              <p>{`This course is ${course.length} weeks long`}</p>
              {/* <ul className="tags">
                {course.tags.map((tag, index) => (
                  <li key={index}>
                    <p>{`${tag}`}</p>
                  </li>
                ))}
              </ul> */}
              <button>Find out More</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
