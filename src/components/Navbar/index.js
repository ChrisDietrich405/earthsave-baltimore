import { Link, BrowserRouter as Router} from "react-router-dom"

import logo from "../../assets/images/earthsave-logo.jpg"

import "./styles.scss"

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Navbar Logo" />
            </div>
            <ul className="links-list">
                <li>
                <Link to="/" className="nav-link">Home</Link>
                </li> 
                <li>
                    <Link to="/donate" className="nav-link">Donate</Link>
                </li> 
                <li>
                    <Link to="/membership" className="nav-link">Membership</Link>
                </li> 
                <li>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li> 
            </ul> 
        </nav>
    )
}