import React, { Component } from "react"

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
          <a href = 'https://www.dropbox.com/s/qcn36jozqhw0ta8/screen_scrying.pdf?dl=0' target = "_blank" rel="noopener noreferrer"><p className="linktext">PDF</p></a>
        </div>
      </div>
  )
}
}

