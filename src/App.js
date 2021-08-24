import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import Home from "./pages/Home"
import Donate from "./pages/Donate"
import Membership from "./pages/Membership"
import Contact from "./pages/Contact"

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


import './App.scss';

/////////////////////////////////////////

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
      <div className="App">
        <Navbar />
        <div className="app-container">
          <div className="app-sidebar">
          <Sidebar links={
            [
                {
                    icon: (<TiNews/>),
                    title: "News & Events Update",
                    path: "/news/news",
                    component: News
                },
                {
                    icon: (<ImQuotesLeft/>),
                    title: "Fascinating Facts & Quotes",
                    path: "/fascinating/fascinating",
                    component: Fascinating
                },
                { 
                    icon: (<GrResources/>),
                    title: "Recommended Resources",
                    path: "/recommended/recommended",
                    component: Recommended
                },
                {
                    icon: (<BsQuestionSquare/>),
                    title: "Frequently Asked Questions",
                    path: "/frequently/frequently",
                    component: Frequently
                },
                {
                    icon: (<GiMedicalPackAlt/>),
                    title: "Local Nutrition &<br> Medical Professionals",
                    path: "/local/local",
                    component: Local
                },
                {
                    icon: (<BiRestaurant/>),
                    title: "Local Restaurants",
                    path: "/restaurants/restaurants",
                    component: Restaurants
                },
                {
                    icon: (<AiFillHeart/>),
                    title: "Article: The He(art) <br> of Gentle Persuasion",
                    path: "/article/article",
                    component: Article
                }

            ]
        }/>
          </div>
          <div className="app-switch">
            <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/donate" component={Donate}/>
              <Route path="/membership" component={Membership}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/news" component={News}/>
              <Route path="/fascinating" component={Fascinating}/>
              <Route path="/recommended" component={Recommended}/>
              <Route path="/frequently" component={Frequently}/>
              <Route path="/local" component={Local}/>
              <Route path="/restaurants" component={Restaurants}/>
              <Route path="/article" component={Article}/>
              <Route path="/upcoming-events" component={UpcomingEvents}/>
            </Switch>
          </div>
          <div className="app-sidebar">
          <h3>Upcoming Events</h3>  
          <Sidebar links={
            [
                {
                    icon: (<TiNews/>),
                    title: "No Upcoming Events Available",
                    path: "/upcoming-events/upcoming-events",
                    component: UpcomingEvents                },      
            ]
        }/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
