//RESPONSIVITY 
//in tablet version don't have hamburger menu for navbar (keep it the same as the desktop)
//(navbar) in mobile version have hamburger menu with drop down for donate, membership etcc
//when user opens hamburger menu they only have access to the navbar links 
//when the close the hamburger menu they will see the horizontal bar with sidebar links 
// in mobile version sidebar links turn into horizontal list bar 

//in 

//ASK DON
// external links opening in separate tabs


import { BrowserRouter as Router } from "react-router-dom"
// import Home from "./pages/Home"
// import Donate from "./pages/Donate"
// import Membership from "./pages/Membership"
// import Contact from "./pages/Contact"

import News from "./pages/News"
import Fascinating from "./pages/Fascinating"
import Recommended from "./pages/Recommended"
import Frequently from "./pages/Frequently"
import Local from "./pages/Local"
import Restaurants from "./pages/Restaurants"
import Article from "./pages/Article"
import UpcomingEvents from "./pages/UpcomingEvents"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Routes from "./components/Routes"
import Slideshow from "./components/Slideshow"
import RightSideBar from "./components/RightSideBar"
import LeftSideBar from "./components/LeftSideBar"

import './App.scss';

import { TiNews, 
         ImQuotesLeft, 
         GrResources, 
         BsQuestionSquare, 
         GiMedicalPackAlt, 
         BiRestaurant, 
         AiFillHeart } from "react-icons/all"

function App() {
  return (
    <Router>
      
      <Navbar />
      <div className="home-container">
        <LeftSideBar />
        <div>
          <Routes/>
          <Footer/>
        </div>
        <RightSideBar />
      </div>
        
    
    </Router>
  );
}

export default App;
