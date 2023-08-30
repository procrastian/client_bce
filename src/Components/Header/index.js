import logo from "../../assets/BCP_LOGO_FINAL_SVG.svg";
import menu from "../../assets/Menu_Weight_Regular.svg";
import "./style.css";

export default function Header() {
  return (
    <div className="component" id="header">
      <div id="logo">
        <img src={logo} alt="BCE logo" />
      </div>
      <div id="buffer"></div>
      <div id="menu">
        <img src={menu} alt="Menu icon" />
      </div>
    </div>
  );
}
