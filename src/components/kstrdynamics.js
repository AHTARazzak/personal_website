import React, { Component } from "react"
import '../App.css';

import kstrdynamicspdf from '../portlinks/master_thesis.pdf';

export default class KstRDynamics extends Component {
  render() {
  return (
      <div className="portfoliosmalldetwrap">
        <div className="portdescwrap">
          <div className="portdesc">
            <p className="portdesctitle">KstR Dynamics</p>
            <p className="portdesctext">Identified the molecular mechanism of KstR, a Mycobacterium tuberculosis transcriptional regulator. Worked alongsite structural biologists to elucidate the proeins behaviour in complex with DNA or ligand.</p>
          </div>
        </div>
        <div className="portlinkwrap">
          <a href={kstrdynamicspdf} target="_blank" rel="noopener noreferrer"><p className="linktext">KstR Dynamics</p></a>
        </div>
      </div>
  )
}
}

