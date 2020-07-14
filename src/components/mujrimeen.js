import React, { Component } from "react"
import '../App.css';


export default class Mujrimeen extends Component {
  render() {
  return (
      <div className="portfoliosmalldetwrap">
        <div className="portdescwrap">
          <div className="portdesc">
            <p className="portdesctitle">Mujrimeen</p>
            <p className="portdesctext">Digital playground for testing out different JavaScript tools & showcasing weird animations I think are cool.</p>
          </div>
        </div>
        <div className="portlinkwrap">
          <a href="https://www.mujrimeen.com/" target="_blank" rel="noopener noreferrer"><p className="linktext">Mujrimeen</p></a>
        </div>
      </div>
  )
}
}

