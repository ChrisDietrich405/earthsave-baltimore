import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import Home from "./pages/Home"
import Donate from "./pages/Donate"
import Membership from "./pages/Membership"
import Contact from "./pages/Contact"

import Navbar from "./components/Navbar"


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/donate" component={Donate}/>
            <Route path="/membership" component={Membership}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
