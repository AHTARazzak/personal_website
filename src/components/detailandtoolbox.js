import React, { Component } from "react"
import { Link, Route, Redirect } from 'react-router-dom';

import Clocktick from "./clocktick"

import Aboutme from "./About"
import Portfoliohere from "./Portfolio"
import Resume from "./Resume"
import Aptitude from "./Aptitude"
import Aspiredom from "./Aspiredom"
import Contact from "./Contact"

export default class DetandToolbox extends Component {
  constructor(props){
    super(props);
    this.onHoverChangeTBgit = this.onHoverChangeTBgit.bind(this)
    this.onHoverLeave = this.onHoverLeave.bind(this)
    this.onHoverChangeTBinsta = this.onHoverChangeTBinsta.bind(this)
    this.onHoverChangeTBln = this.onHoverChangeTBln.bind(this)
    this.onHoverChangeTBmail = this.onHoverChangeTBmail.bind(this)
    this.onHoverChangeTBclock = this.onHoverChangeTBclock.bind(this)
    this.onHoverChangeTBabout = this.onHoverChangeTBabout.bind(this)
    this.onHoverChangeTBproj = this.onHoverChangeTBproj.bind(this)
    this.onHoverChangeTBresume = this.onHoverChangeTBresume.bind(this)
    this.onHoverChangeTBaptit = this.onHoverChangeTBaptit.bind(this)
    this.onHoverChangeTBaspir = this.onHoverChangeTBaspir.bind(this)
    this.onHoverChangeTBlog = this.onHoverChangeTBlog.bind(this)
    this.getThumbTexttodetbox = this.getThumbTexttodetbox.bind(this)

}

  getThumbTexttodetbox = (deboxTB) => {
        this.props.onSelectTB(deboxTB);
    }

  onHoverChangeTBgit() {
        var tb = <div className="headlinebox"><p className="headlinetext">Check out what codes I've got in the works</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBln() {
        var tb = <div className="headlinebox"><p className="headlinetext">My more professional side (?)</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBinsta() {
        var tb = <div className="headlinebox"><p className="headlinetext">A day in the life of my lense</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBmail() {
        var tb = <div className="headlinebox"><p className="headlinetext">Drop me a line or whatever's on your mind</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBclock() {
        var tb = <div className="headlinebox"><p className="headlinetext">Tick Tock</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBabout() {
        var tb = <div className="headlinebox"><p className="headlinetext">A little bit of nothing much about me</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBproj() {
        var tb = <div className="headlinebox"><p className="headlinetext">Things I am working on (aside from this site)</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBresume() {
        var tb = <div className="headlinebox"><p className="headlinetext">I'm your multidisciplinary structural bioinformatician</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBaptit() {
        var tb = <div className="headlinebox"><p className="headlinetext">Bunch of things I reckon are rad</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBaspir() {
        var tb = <div className="headlinebox"><p className="headlinetext">Sites I look to for "inspiration"</p></div>;
        this.props.onSelectTB(tb);
}

onHoverChangeTBlog() {
        var tb = <div className="headlinebox"><p className="headlinetext">For me to handle you (MIA)</p></div>;
        this.props.onSelectTB(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTB(tb);
}

componentWillMount() {
         if(window.innerWidth>1900 && window.innerHeight >1000 ) {
            require('../App.css');
         } else {
            require('../App.css');
         }
    }

  render() {
  return (
  <div className="bigtoolbox">
    <Redirect to="/about" />
    <div className="middlebox">
      <div className="contextbox">
        <div className="contentinside">
          <Route path="/about" render={() => <Aboutme onSelectTBdetbox={this.getThumbTexttodetbox} />} />
          <Route path="/portfolio" render={() => <Portfoliohere onSelectTBdetbox={this.getThumbTexttodetbox} />} />
          <Route path="/resume" render={() => <Resume onSelectTBdetbox={this.getThumbTexttodetbox} />} />
          <Route path="/aptitude" render={() => <Aptitude onSelectTBdetbox={this.getThumbTexttodetbox} />} />
          <Route path="/aspiredom" render={() => <Aspiredom onSelectTBdetbox={this.getThumbTexttodetbox}/>} />
          <Route path="/contact" render={() => <Contact onSelectTBdetbox={this.getThumbTexttodetbox} />} />
      <div className="detlinksbox">
        <div className="linkboxwrap1">
          <a className="detthumbnail" target="_blank" rel="noopener noreferrer" href="https://github.com/ternlef11"><div onMouseEnter={this.onHoverChangeTBgit} onMouseLeave={this.onHoverLeave} className="linkbox1"></div></a>
        </div>
        <div className="linkboxwrap2">
          <a className="detthumbnail" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ali-razzak-datasci/"><div onMouseEnter={this.onHoverChangeTBln} onMouseLeave={this.onHoverLeave} className="linkbox2"></div></a>
        </div>
        <div className="linkboxwrap3">
          <a className="detthumbnail" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/slimenbile/"><div onMouseEnter={this.onHoverChangeTBinsta} onMouseLeave={this.onHoverLeave} className="linkbox3"></div></a>
        </div>
        <div className="linkboxwrap4">
          <Link style={{ textDecoration: 'none' }} to="/contact"><div onMouseEnter={this.onHoverChangeTBmail} onMouseLeave={this.onHoverLeave} className="linkbox4"></div></Link>
        </div>
        </div>
      </div>
    </div>
    </div>
    <div className="rightbox">
      <div className="projectwrap">
        <div className="projectbox">
          <div className="clockwrap">
            <div onMouseEnter={this.onHoverChangeTBclock} onMouseLeave={this.onHoverLeave} className="clockactual">
            <Clocktick />
            </div>
          </div>
          <div className="projectswrapper">
            <Link style={{ textDecoration: 'none' }} to="/about" onMouseEnter={this.onHoverChangeTBabout} onMouseLeave={this.onHoverLeave}><div className="projectitself">
              <p className="theprojectname">ABOUT</p>
            </div>
            <div className="projectyears">
              <p className="theprojectyears">03/05/2021</p>
            </div></Link>
          </div>
          <div className="projectswrapper">
            <Link style={{ textDecoration: 'none' }} to="/portfolio" onMouseEnter={this.onHoverChangeTBproj} onMouseLeave={this.onHoverLeave}><div className="projectitself">
              <p className="theprojectname">PROJECTS</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">25/04/2021</p>
            </div></Link>
          </div>
          <div className="projectswrapper">
            <Link style={{ textDecoration: 'none' }} to="/resume" onMouseEnter={this.onHoverChangeTBresume} onMouseLeave={this.onHoverLeave}><div className="projectitself">
              <p className="theprojectname">RESUME</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">03/05/2021</p>
            </div></Link>
          </div>
          <div className="projectswrapper">
            <Link style={{ textDecoration: 'none' }} to="/aptitude" onMouseEnter={this.onHoverChangeTBaptit} onMouseLeave={this.onHoverLeave}><div className="projectitself">
              <p className="theprojectname">APTITUDE</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">01/07/2020</p>
            </div></Link>
          </div>
          <div className="projectswrapper">
            <Link style={{ textDecoration: 'none' }} to="/aspiredom" onMouseEnter={this.onHoverChangeTBaspir} onMouseLeave={this.onHoverLeave}><div className="projectitself">
              <p className="theprojectname">ASPIREDOM</p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">01/07/2020</p>
            </div></Link>
          </div>
          <div className="projectswrapper" style={{zIndex:'-1'}}>
            <div className="projectitself">
              <p className="theprojectname"></p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears">Last updated</p>
            </div>
          </div>
          <div className="projectswrapper" style={{zIndex:'-1'}}>
            <div className="projectitself">
              <p className="theprojectname"></p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears"></p>
            </div>
          </div>
          <div className="projectswrapper" style={{zIndex:'-1'}}>
            <div className="projectitself">
              <p className="theprojectname"></p>
            </div>
            <div className="projectyears">
            <p className="theprojectyears"></p>
            </div>
          </div>
          <div className="projectswrapper" style={{zIndex:'-1'}}>
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

