import "./style.css";

export default function Course({ course }) {
  return (
    <li className="course_card">
      <h3>{course.title}</h3>
      <img src={course.coverImage} alt={`${course.title} cover`}/>
      <p>{course.description}</p>
      <p>This course lasts for <strong>{course.length}</strong> sessions</p>
      <p>The next course starts on: <strong>{course.startDate}</strong></p>
      <h4>Tags</h4>
      <ul> {course.tags.map((tag) => {
        return <li><em>{tag}</em></li>
      })}

      </ul>
      <br/>
      <button>Find out More</button>
    </li>
  );
}
