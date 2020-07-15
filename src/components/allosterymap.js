import React, { Component } from "react"

import allosterymappdf from '../portlinks/Computational_Biology_Project.pdf';


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
          <a href={allosterymappdf} target="_blank" rel="noopener noreferrer"><p className="linktext">PDF (savelink)</p></a>
        </div>
      </div>
  )
}
}

