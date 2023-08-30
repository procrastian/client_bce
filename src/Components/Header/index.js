import logo from "../../assets/BCP_LOGO_FINAL_SVG.svg";
import Menu from "../Menu";
import "./style.css";

export default function Header() {
  return (
    <div className="component" id="header">
      <div id="logo">
        <img src={logo} alt="BCE logo" />
      </div>
      <div id="buffer"></div>
      <Menu />
    </div>
  );
}
