import React, { Component } from "react"
import '../App.css';

import streetsymphspdf from '../portlinks/allposters14072020.pdf';

export default class StreetSymphonies extends Component {
  render() {
  return (
      <div className="portfoliosmalldetwrap">
        <div className="portdescwrap">
          <div className="portdesc">
            <p className="portdesctitle">Street Symphonies</p>
            <p className="portdesctext">Collection of posters that occasionally find themselves lining streets. Integrate my photography alongside my writing composed using PhotoShop and Illustrator. Dedicated venue in the works. Working on site.</p>
          </div>
        </div>
        <div className="portlinkwrap">
          <a href= {streetsymphspdf} target= "_blank" rel="noopener noreferrer"><p className="linktext">Street Symph.</p></a>
        </div>
      </div>
  )
}
}

