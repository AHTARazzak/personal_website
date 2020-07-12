import React from "react"
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

import Titlebox from "./components/titlebox"
import Headline from "./components/headlinebox"
import DetandToolbox from "./components/detailandtoolbox"
import Footdetail from "./components/footerdetails"

function App() {
  return (
    <Router>
      <div className="bodyfake">
        <div className="headline">
          <Headline />
        </div>
        <div className="flexbody">
          <div className="leftbox">
            <Titlebox />
          </div>
          <DetandToolbox />
        </div>
        <div className="footer">
          <Footdetail />
        </div>
      </div>
    </Router>
  );
}

export default App;
