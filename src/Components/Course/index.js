import "./style.css";

export default function Course({ course }) {
  return (
    <li className="course_card">
      <h3>{course.title}</h3>
      <img src={course.coverImage} alt={`${course.title} cover`}/>
      <p>{course.description}</p>
      <p>This course lasts for {course.length} sessions</p>
      <p>The next course starts on: {course.startDate}</p>
      <h4>Tags</h4>
      <ul> {course.tags.map((tag) => {
        return <li>{tag}</li>
      })}

      </ul>
      <button>Find out More</button>
    </li>
  );
}
