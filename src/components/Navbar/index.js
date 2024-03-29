import { Link } from "react-router-dom";

import navbar from "../../assets/images/new-banner.jpg";

import "./styles.scss";

export default function Navbar() {
  const showMenu = () => {
    const x = document.getElementById("mobile-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  return (
    <header className="header-container">
      <nav className="mobile-container">
        <div className="topnav">
          <div className="topnav-header">
            <button className="icon" onClick={showMenu}>
              <i className="fa fa-bars"></i>
            </button>
          </div>

          <div id="mobile-links">
            <Link to="/">Home</Link>

            <Link to="/frequently">FAQ</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/email-newsletter">E-mail Newsletter</Link>
            <a
              href="https://www.facebook.com/ConsciousFoodChoices"
              target="_blank"
              rel="noreferrer"
              className="facebook"
            >
              On Facebook
            </a>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <div
        className="image-container"
        style={{
          backgroundImage: `url("${navbar}")`,
        }}
      >
        <nav className="desktop-container">
          <div className="home-links">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </div>
          <div className="space"></div>
          <div className="FAQ-links">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
            <Link to="/frequently" className="navbar-link">
              FAQ
            </Link>
            {/* <Link to="/membership" className="navbar-link">
              Membership
            </Link>
            <Link to="/donate" className="navbar-link">
              Donate
            </Link> */}
            <Link to="/email-newsletter" className="navbar-link">
              Subscribe
            </Link>
            <a
              href="https://www.facebook.com/groups/EarthsaveBaltimore/"
              className="navbar-link facebook"
              rel="noreferrer"
              target="_blank"
            >
              On Facebook
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
