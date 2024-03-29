import React, { Component } from "react"

export default class Threadbare extends Component {
  render() {
  return (
      <div className="portfoliosmalldetwrap">
        <div className="portdescwrap">
          <div className="portdesc">
            <p className="portdesctitle">Threadbare</p>
            <p className="portdesctext">Bot that dynamically scrapes several secondhand vendors for luxury brands & updates new listings to Discord.</p>
          </div>
        </div>
        <div className="portlinkwrap">
          <a href="https://discord.gg/YSsK4qtU" target="_blank" rel="noopener noreferrer"><p className="linktext">Discord</p></a>
        </div>
      </div>
  )
}
}

