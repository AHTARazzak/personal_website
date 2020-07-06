import React from "react"
import './App.css';

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
