import React, { Component } from "react"
import { Link } from 'react-router-dom';
import '../App.css';


export default class Aboutme extends Component {
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
              <div className="aboutbox">
                <p className="aboutdescription">I'm Ali, a multidisciplinary Structural Bioinformatician. I built this space to concisely shipwreck things forsaken, caught between wheat paste, & whatever else meets the cut.
                <br/>Born Iraq, grew up New Zealand, bounced around a bunch but currently residing in Switzerland. Professional gig-hitter, footage head, web mujrim, & maker on the best & worst days.<br/></p>
                <p className="aboutdescriptionfinal">I get things done & am always logged on. contact me if you're up for it.</p>
                <p className="aboutdescriptionfinal">Can't disguise mediocrity.
                <br/><Link to="/aptitude">A better impression.</Link></p>
              </div>
            </div>
        </div>
      </div>
  )
}
}

