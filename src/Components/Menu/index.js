import "./style.css";
import menu from "../../assets/Menu_Weight_Regular.svg";
import { useState } from "react";
import MenuContent from "../MenuContent";

export default function Menu() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        MENU
        <span>
          <img src={menu} alt="menu icon" />
        </span>
      </button>
      {showModal && <MenuContent onClose={() => setShowModal(false)} />}
    </>
  );
}
