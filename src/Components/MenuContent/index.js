import "./style.css";
import homeIcon from '../../assets/home.svg'
import courseListIcon from '../../assets/course_list.svg'
import contactIcon from '../../assets/contact.svg'
import aboutMeIcon from '../../assets/about_me.svg'

export default function MenuContent({ onClose }) {
  // const menuBox = document.querySelector('menu_modal')
    //close dialog modal when click outside
    // document.addEventListener("click", (e) => {
    //   const menuContentDimensions = menuBox.getBoundingClientRect();
    //   if (
    //     e.clientX < menuContentDimensions.left ||
    //     e.clientX > menuContentDimensions.right ||
    //     e.clientY < menuContentDimensions.top ||
    //     e.clientY > menuContentDimensions.bottom
    //   ) {
    //     onClose();
    //   }
    // });
  return (
    <div className="menu_modal">
      <ul>
        <li>
          <a href="/">Home <img src={homeIcon} alt="home icon"/></a>
        </li>
        <li>
          <a href="/">Course List <img src={courseListIcon} alt="course list icon"/></a>
        </li>
        <li>
          <a href="/">Contact <img src={contactIcon} alt="contact icon"/></a>
        </li>
        <li>
          <a href="/">About Me <img src={aboutMeIcon} alt="about me icon"/></a>
        </li>
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
