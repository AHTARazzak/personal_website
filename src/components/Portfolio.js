import React, { Component } from "react"
import {BrowserRouter as Router, Route } from "react-router-dom";
import { View } from 'react-native';
import '../App.css';
import face from '../ech.png';
import emailicon from '../email.png';
import emailiconhover from '../emailhover.png';


export default class Portfoliohere extends Component {
  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename">Portfolio</p>
          </div>
          <div className="headbox">
            <img className="thehead" src={face}/>
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

