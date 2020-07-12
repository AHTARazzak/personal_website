import React, { Component } from "react"
import '../App.css';


export default class CutThwice extends Component {
  render() {
  return (
      <div className="portfoliosmalldetwrap">
        <div className="portdescwrap">
          <div className="portdesc">
            <p className="portdesctitle">Cut Thwice</p>
            <p className="portdesctext">Online personal blog combining my fashion writing, photography, and things I am selling. Created using the LAMP stack and taught myself web development through this website.</p>
          </div>
        </div>
        <div className="portlinkwrap">
          <a href="https://www.cutthwice.com/" target="_blank" rel="noopener noreferrer"><p className="linktext">Cut Thwice</p></a>
        </div>
      </div>
  )
}
}

