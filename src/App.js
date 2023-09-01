import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import RightSideBar from "./components/RightSideBar";
import LeftSideBar from "./components/LeftSideBar";

import "./App.scss";

function App() {
  return (
    <main className="app-wrapper">
      <Router>
        <Navbar />
        <div className="home-container">
          <LeftSideBar />
          <div className="home-content">
            <Routes />
            <Footer />
          </div>
          <RightSideBar />
        </div>
      </Router>
    </main>
  );
}

export default App;
