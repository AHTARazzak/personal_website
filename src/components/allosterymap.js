import React, { Component } from "react"

export default class Allosterymap extends Component {
  render() {
  return (
      <div className="portfoliosmalldetwrap">
        <div className="portdescwrap">
          <div className="portdesc">
            <p className="portdesctitle">Allostery Map</p>
            <p className="portdesctext">This explored a systeamtic method for analysing biomolecuar dynamics data to map the allostery of protein-ligand system. Kinetic and thermodynamic features are quantified and then assessed using AI to highlight critical residues</p>
          </div>
        </div>
        <div className="portlinkwrap">
          <a href='https://www.dropbox.com/s/cnfw89ow2bn06yr/Computational_Biology_Project.pdf?dl=0' target="_blank" rel="noopener noreferrer"><p className="linktext">PDF</p></a>
        </div>
      </div>
  )
}
}

