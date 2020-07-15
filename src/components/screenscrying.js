import React, { Component } from "react"

import screenscrypdf from '../portlinks/screen_scrying.pdf';

export default class Screenscrying extends Component {
  render() {
  return (
      <div className="portfoliosmalldetwrap">
        <div className="portdescwrap">
          <div className="portdesc">
            <p className="portdesctitle">Screen Scrying</p>
            <p className="portdesctext">This project examined how using data driven techniques to address catastrophies can recapitulate hysteria instead of resolving it. To communicate this I utilised data mining, sentiment analysis, and bioinformatics.</p>
          </div>
        </div>
        <div className="portlinkwrap">
          <a href = {screenscrypdf} target = "_blank" rel="noopener noreferrer"><p className="linktext">PDF (savelink)</p></a>
        </div>
      </div>
  )
}
}

