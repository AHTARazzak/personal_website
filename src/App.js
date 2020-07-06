import React, { Component } from "react"
import {BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Detailbox from "./components/detailbox";
import Toolbox from "./components/toolbox";
import Titlebox from "./components/titlebox"
import Headline from "./components/headlinebox"
import DetandToolbox from "./components/detailandtoolbox"

function App() {
  return (
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
        </div>
      </div>
  );
}

export default App;
