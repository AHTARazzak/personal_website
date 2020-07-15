import React, { Component } from "react"
import {BrowserRouter as Router, Route } from "react-router-dom";
import { View } from 'react-native';

export default class Projectbox extends Component {
  render() {
  return (
    <div className="projectwrap">
      <div className="projectbox">
        <div className="projectitlewrap">
          <div className="projectname">
            <p className="projecttitletext">PROJECTS</p>
          </div>
        </div>
        <div className="projectswrapper">
          <div className="projectitself">
            <p className="theprojectname">TEETH TOOTH</p>
          </div>
          <div className="projectyears">
          <p className="theprojectyears">07/2020 - ongoing</p>
          </div>
        </div>
        <div className="projectswrapper">
          <div className="projectitself">
            <p className="theprojectname">MUJRIMEEN</p>
          </div>
          <div className="projectyears">
          <p className="theprojectyears">05/2020 - ongoing</p>
          </div>
        </div>
        <div className="projectswrapper">
          <div className="projectitself">
            <p className="theprojectname">SCREEN SCRYING</p>
          </div>
          <div className="projectyears">
          <p className="theprojectyears">04/2020 - 05/2020</p>
          </div>
        </div>
        <div className="projectswrapper">
          <div className="projectitself">
            <p className="theprojectname">ALLOSTERY MAP</p>
          </div>
          <div className="projectyears">
          <p className="theprojectyears">06/2019 - 06/2020</p>
          </div>
        </div>
        <div className="projectswrapper">
          <div className="projectitself">
            <p className="theprojectname">SELF HARM</p>
          </div>
          <div className="projectyears">
          <p className="theprojectyears">03/2018 - ongoing</p>
          </div>
        </div>
        <div className="projectswrapper">
          <div className="projectitself">
            <p className="theprojectname">KSTR DYNAMICS</p>
          </div>
          <div className="projectyears">
          <p className="theprojectyears">10/2016 - 03/2018</p>
          </div>
        </div>
        <div className="projectswrapper">
          <div className="projectitself">
            <p className="theprojectname">STREET SYMPH.</p>
          </div>
          <div className="projectyears">
          <p className="theprojectyears">06/2014 - ongoing</p>
          </div>
        </div>
        <div className="projectswrapper">
          <div className="projectitself">
            <p className="theprojectname">CUT THWICE</p>
          </div>
          <div className="projectyears">
          <p className="theprojectyears">02/2014 - 10/2019</p>
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

