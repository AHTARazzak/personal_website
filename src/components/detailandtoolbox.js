import React, { Component } from "react"
import '../App.css';
import { Link, Route, Redirect } from 'react-router-dom';


import Clocktick from "./clocktick"

import Aboutme from "./About"
import Portfoliohere from "./Portfolio"
import Resume from "./Resume"
import Aptitude from "./Aptitude"
import Aspiredom from "./Aspiredom"
import Contact from "./Contact"

export default class DetandToolbox extends Component {

  render() {
  return (
  <div className="bigtoolbox">
    <Redirect to="/about" />
    <div className="middlebox">
      <div className="contextbox">
        <Route path="/about" component={Aboutme} />
        <Route path="/portfolio" exact component={Portfoliohere} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/aptitude" exact component={Aptitude} />
        <Route path="/aspiredom" exact component={Aspiredom} />
        <Route path="/contact" exact component={Contact} />
      <div className="detlinksbox">
        <div className="linkboxwrap1">
          <a className="detthumbnail" target="_blank" rel="noopener noreferrer" href="https://github.com/ternlef11"><div className="linkbox1"></div></a>
        </div>
        <div className="linkboxwrap2">
          <a className="detthumbnail" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ali-razzak-datasci/"><div className="linkbox2"></div></a>
        </div>
        <div className="linkboxwrap3">
          <a className="detthumbnail" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/slimenbile/"><div className="linkbox3"></div></a>
        </div>
        <div className="linkboxwrap4">
          <Link to="/contact"><div className="linkbox4"></div></Link>
        </div>
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
          <div className="projectswrapper">
            <Link to="/about"><div className="projectitself">
              <p className="theprojectname">ABOUT</p>
            </div>
            <div className="projectyears">
              <p className="theprojectyears">Last updated</p>
            </div></Link>
          </div>
          <div className="projectswrapper">
            <Link to="/portfolio"><div className="projectitself">
              <p className="theprojectname">PROJECTS</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div></Link>
          </div>
          <div className="projectswrapper">
            <Link to="/resume"><div className="projectitself">
              <p className="theprojectname">RESUME</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div></Link>
          </div>
          <div className="projectswrapper">
            <Link to="/aptitude"><div className="projectitself">
              <p className="theprojectname">APTITUDE</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div></Link>
          </div>
          <div className="projectswrapper">
            <Link to="/aspiredom"><div className="projectitself">
              <p className="theprojectname">ASPIREDOM</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div></Link>
          </div>
          <div className="projectswrapper">
            <div className="projectitself">
              <p className="theprojectname">Log in(?)</p>
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
        </div>
      </div>
    </div>
  </div>
  )
}
}

