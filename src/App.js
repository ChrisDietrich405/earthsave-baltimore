import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import RightSideBar from "./components/RightSideBar";
import LeftSideBar from "./components/LeftSideBar";
import HorizontalNavbar from "./components/HorizontalNavbar";
import "./App.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <HorizontalNavbar />
        <div className="home-container">
          <LeftSideBar />
          <div className="home-content">
            <Routes />
            <Footer />
          </div>
          <RightSideBar />
        </div>
      </Router>
    </div>
  );
}

export default App;
