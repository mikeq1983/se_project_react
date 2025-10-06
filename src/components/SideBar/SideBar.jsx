import "./SideBar.css";
import avatar from "../../assets/Ellipse 18.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="default avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
