import { Link } from "react-router-dom";

import logo from "../../assets/images/earthsave-logo.jpg";

import "./styles.scss";

export default function Navbar2() {
  function showMenu() {
    const x = document.getElementById("mobile-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <>
      <div className="mobile-container">
        <div className="topnav">
          <a href="#home" className="active">
            <img src={logo} alt="Navbar Logo" />
          </a>

          <div id="mobile-links">
            <Link to="/">Home</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <a href="javascript:void(0);" className="icon" onClick={showMenu}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>

      <div className="desktop-container">
        <a href="#home" className="active">
          <img src={logo} className="navbar-logo" alt="Navbar Logo" />
        </a>
        <div className="desktop-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/donate" className="navbar-link">
            Donate
          </Link>
          <Link to="/membership" className="navbar-link">
            Membership
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
