import React, { Component } from "react"
import {BrowserRouter as Router, Route } from "react-router-dom";
import { View } from 'react-native';
import '../App.css';

import Clocktick from "./clocktick"

import Aboutme from "./About"
import Portfoliohere from "./Portfolio"

export default class DetandToolbox extends Component {
constructor(props) {
    super(props);
    this.state = {
      components : [<Aboutme />],
    }
    this.onClickPortfolio = this.onClickPortfolio.bind(this);
    this.onClickAbout = this.onClickAbout.bind(this);
}
  onClickAbout() {
    this.setState({
      components:[<Aboutme />]
    })
  }

  onClickPortfolio() {
    this.setState({
      components:[<Portfoliohere />]
    })
  }

  render() {
  return (
  <div className="bigtoolbox">
    <div className="middlebox">
      <div className="contextbox">
        {this.state.components[0]}
      <div className="detlinksbox">
      </div>
    </div>
    </div>
    <div className="rightbox">
      <div className="projectwrap">
        <div className="projectbox">
          <div className="clockwrap">
            <div className="clockactual">
            <Clocktick />
            </div>
          </div>
          <div onClick={this.onClickAbout} className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname">About</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div>
          </div>
          <div onClick={this.onClickPortfolio} className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname">Portfolio</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div>
          </div>
          <div className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname">Resume</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div>
          </div>
          <div className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname">Other</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div>
          </div>
          <div className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname">Diatribe</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div>
          </div>
          <div className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname"></p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears"></p>
            </div>
          </div>
          <div className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname"></p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears"></p>
            </div>
          </div>
          <div className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname"></p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears"></p>
            </div>
          </div>
          <div className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname"></p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
}

