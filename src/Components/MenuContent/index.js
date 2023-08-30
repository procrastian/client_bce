import "./style.css";

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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Course List</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About Me</a>
        </li>
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
