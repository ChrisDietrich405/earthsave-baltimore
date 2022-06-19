import { BrowserRouter as Router } from "react-router-dom";

import News from "./pages/News";
import Fascinating from "./pages/Fascinating";
import Recommended from "./pages/Recommended";
import Frequently from "./pages/Frequently";
import Local from "./pages/Local";
import Restaurants from "./pages/Restaurants";
import Article from "./pages/Article";
import UpcomingEvents from "./pages/UpcomingEvents";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import Slideshow from "./components/Slideshow";
import RightSideBar from "./components/RightSideBar";
import LeftSideBar from "./components/LeftSideBar";
import HorizontalNavbar from "./components/HorizontalNavbar";
import "./App.scss";

import {
  TiNews,
  ImQuotesLeft,
  GrResources,
  BsQuestionSquare,
  GiMedicalPackAlt,
  BiRestaurant,
  AiFillHeart,
} from "react-icons/all";

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
