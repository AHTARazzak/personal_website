import React, { Component } from "react"
import {BrowserRouter as Router, Route } from "react-router-dom";
import { View } from 'react-native';
import '../App.css';
import face from '../ech.png';
import emailicon from '../email.png';
import emailiconhover from '../emailhover.png';


export default class Aboutme extends Component {
  state = {
    on: true,
  }

  toggle = () =>{
    this.setState({
      on: !this.state.on
    })
  }
  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename">About</p>
          </div>
          <div className="headbox">
            <img className="thehead" src={face}/>
          </div>
        </div>
        <div className="detcontextbox">
          <div className="detcontextwrap">
          <p className="descriptionone">HOME FOR SHIPWRECKED PROJECTS MAROONED BETWEEN 2300 & 0500 BY MULTIDISCIPLINARY STRUCTURAL BIOINFORMATICIAN.</p>
          </div>
        </div>
      </div>
  )
}
}

