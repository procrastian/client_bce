import "./style.css";
import menu from "../../assets/menu.svg";
import { useState } from "react";
import MenuContent from "../MenuContent";

export default function Menu() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="menu_button" onClick={() => setShowModal(true)}>
        <img src={menu} alt="menu icon" />
      </button>
      {showModal && <MenuContent onClose={() => setShowModal(false)} />}
    </>
  );
}
