import React, { Component } from "react"

export default class AbTaniwha extends Component {
  render() {
  return (
      <div className="portfoliosmalldetwrap">
        <div className="portdescwrap">
          <div className="portdesc">
            <p className="portdesctitle">AbTaniwha</p>
            <p className="portdesctext">Monsterous script that takes antibody sequences (conventional, fc-fusion, scFv, partial), scores, annotates & formats to popular numbering schemes.</p>
          </div>
        </div>
        <div className="portlinkwrap">
          <a href="https://github.com/ternlef11/AbTaniwha" target="_blank" rel="noopener noreferrer"><p className="linktext">Repo</p></a>
        </div>
      </div>
  )
}
}

