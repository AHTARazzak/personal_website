import React, {Component} from "react"
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

import Titlebox from "./components/titlebox"
import DetandToolbox from "./components/detailandtoolbox"
import Footdetail from "./components/footerdetails"



export default class Collection extends Component {
    constructor(props) {
    super(props);
    this.state = {
      newheadline : "",
    }
    this.getThumbText = this.getThumbText.bind(this)
}

  getThumbText = (theTB) => {
        this.setState({newheadline: theTB});
    }



  render() {
  return (
    <Router>
      <div className="bodyfake">
        <div className="headline">
          <div className="headlineboxwrap">
            {this.state.newheadline}
          </div>
        </div>
        <div className="flexbody">
          <div className="leftbox">
            <Titlebox onSelectTB={this.getThumbText} />
          </div>
          <DetandToolbox onSelectTB={this.getThumbText} />
        </div>
        <div className="footer">
          <Footdetail onSelectTB={this.getThumbText} />
        </div>
      </div>
    </Router>
  );
}
}
