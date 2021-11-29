import { Link, BrowserRouter as Router } from "react-router-dom";

import logo from "../../assets/images/earthsave-logo.jpg";

import "./styles.scss";

export default function Navbar() {
  window.onload = function () {
    document.querySelector(".menu-mobile").addEventListener("click", function () {
      if (document.querySelector(".menu ul").style.display == "flex") {
        document.querySelector(".menu ul").style.display = "none";
      } else {
        document.querySelector(".menu ul").style.display = "flex";
      }
    });
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Navbar Logo" />
      </div>
      <div className="menu">
        <div className="menu-mobile">
          <div className="mm-line"></div>
          <div className="mm-line"></div>
          <div className="mm-line"></div>
        </div>
        <div className="menu-desktop">
          <ul className="links-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/donate" className="nav-link">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/membership" className="nav-link">
                Membership
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
