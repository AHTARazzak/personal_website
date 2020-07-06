import React, { Component } from "react"
import {BrowserRouter as Router, Route } from "react-router-dom";
import { View } from 'react-native';
import '../App.css';
import face from '../ech.png';
import emailicon from '../email.png';
import emailiconhover from '../emailhover.png';

import Aboutme from "./About"
import Portfoliohere from "./Portfolio"

export default class Detailbox extends Component {
  render() {
  return (
    <div className="contextbox">
        <Aboutme />
      <div className="detlinksbox">
      </div>
    </div>
  )
}
}

