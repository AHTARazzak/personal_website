import React, { Component } from "react"
import { Link } from 'react-router-dom';

export default class Aboutme extends Component {
   constructor(props) {
    super(props);
    this.onHoverChangeTBtick = this.onHoverChangeTBtick.bind(this)
    this.onHoverChangeTBaboutdet = this.onHoverChangeTBaboutdet.bind(this)
    this.onHoverLeave = this.onHoverLeave.bind(this)
  }

  onHoverChangeTBtick() {
        var tb = <div className="headlinebox"><p className="headlinetext">Things I like</p></div>;
        this.props.onSelectTBdetbox(tb);
}

  onHoverChangeTBaboutdet() {
        var tb = <div className="headlinebox"><p className="headlinetext">Read all about it</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTBdetbox(tb);
}
  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename">About ♟</p>
          </div>
        </div>
        <div className="detcontextbox">
            <div className="aboutboxwrap">
              <div className="aboutbox" onMouseEnter={this.onHoverChangeTBaboutdet} onMouseLeave={this.onHoverLeave}>
                <p className="aboutdescription">This site is dedicated to consolidating & documenting projects I have worked on or am working on. Born Iraq, grew up New Zealand, worked five years between Switzerland, United Kingdom, & Sweden as a Structural Bioinformatician, Full Stack Developer, & Data Scientist. On my best & woorst days I can be found hitting gigs, shooting footage, doodling, coding, cycling & pasting posters.<br/></p>
                <p className="aboutdescriptionfinal"><br/>I get things done & am always logged on. Feel free to contact me.</p>
                <p className="aboutdescriptionfinal"><br/></p>
                <p className="aboutdescriptionfinal"><Link style={{ textDecoration: 'none', color : '#90006A', fontWeight: 'bold'}} to="/aptitude" onMouseEnter={this.onHoverChangeTBtick} onMouseLeave={this.onHoverLeave}><span className="betterimpres">A better impression</span></Link></p>
              </div>
            </div>
        </div>
      </div>
  )
}
}

