import React, { Component } from "react"

export default class LuckyStars extends Component {
  render() {
  return (
      <div className="portfoliosmalldetwrap">
        <div className="portdescwrap">
          <div className="portdesc">
            <p className="portdesctitle">seaslug.se</p>
            <p className="portdesctext">Founding member of Stockholm Art Calendar responsible for full stack web development, design, technical solutions & database management.</p>
          </div>
        </div>
        <div className="portlinkwrap">
          <a href="https://www.seaslug.se/" target="_blank" rel="noopener noreferrer"><p className="linktext">Site</p></a>
        </div>
      </div>
  )
}
}

