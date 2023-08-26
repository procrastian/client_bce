import "./style.css";
import { useState } from "react";

export default function CourseList() {
  const [coursesState, setCoursesState] = useState([]);

  return (
    <>
      <div className="card" id="course_list_card">
        <h1>This is the CourseList</h1>
        <ul className="course_list">
          {coursesState.map((item, index) => (
            <li key={index}>
              <div className="course_info">
                <img src="" alt="" />
                <p></p>
              </div>
              {/* <AddToCart id={`${item.id}`} coursesState={coursesState} cartState={cartState} setCartState={setCartState}/> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
