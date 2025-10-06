import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/Ellipse 18.png";
import groupButton from "../../assets/groupButton.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="header logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__button-container">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      </div>
      <Link className="header__link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img className="header__avatar" src={avatar} alt="Terrence Tegegne" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
