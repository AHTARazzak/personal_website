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
            <p className="thename">About</p>
          </div>
        </div>
        <div className="detcontextbox">
            <div className="aboutboxwrap">
              <div className="aboutbox" onMouseEnter={this.onHoverChangeTBaboutdet} onMouseLeave={this.onHoverLeave}>
                <p className="aboutdescription">I'm Ali, a multidisciplinary Structural Bioinformatician. I built this space to concisely shipwreck things forsaken, caught between wheat paste, & whatever else meets the cut.
                <br/>Born Iraq, grew up New Zealand, bounced around a bunch and am currently residing in Switzerland. Professional gig-hitter, footage head, web mujrim, & maker on the best & worst days.<br/></p>
                <p className="aboutdescriptionfinal">I get things done & am always logged on. contact me if you're up for it.</p>
                <p className="aboutdescriptionfinal">Can't disguise mediocrity.
                <br/><Link style={{ textDecoration: 'none', color : '#90006A', fontWeight: 'bold'}} to="/aptitude" onMouseEnter={this.onHoverChangeTBtick} onMouseLeave={this.onHoverLeave}><span className="betterimpres">A better impression</span></Link></p>
              </div>
            </div>
        </div>
      </div>
  )
}
}

