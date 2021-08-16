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

import Navbar from "./components/Navbar"
import SidebarLinks from "./components/SidebarLinks"


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SidebarLinks />
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
          </Switch>
      </div>
    </Router>
  );
}

export default App;
