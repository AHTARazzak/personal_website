import React, { Component } from "react"
import {BrowserRouter as Router, Route } from "react-router-dom";
import { View } from 'react-native';
import '../App.css';

import Clocktick from "./clocktick"

export default class Toolbox extends Component {
  render() {
  return (
    <div className="projectwrap">
      <div className="projectbox">
        <div className="clockwrap">
          <div className="clockactual">
          <Clocktick />
          </div>
        </div>
        <div className="projectswrapper">
          <div className="projectitself">
            <p className="theprojectname">About</p>
          </div>
          <div className="projectyears">
          <p className="theprojectyears">Last updated</p>
          </div>
        </div>
        <div className="projectswrapper">
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
  )
}
}

