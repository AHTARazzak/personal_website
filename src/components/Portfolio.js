import React, { Component } from "react"
import '../App.css';
import face from '../ech.png';


export default class Portfoliohere extends Component {
  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename">Portfolio</p>
          </div>
          <div className="headbox">
            <img className="thehead" src={face} alt="nopic"/>
          </div>
        </div>
        <div className="detcontextbox">
          <div className="detcontextwrap">
          <p className="descriptionone">NICEEEEE</p>
          </div>
        </div>
      </div>
  )
}
}

