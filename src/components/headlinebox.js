import React, { Component } from "react"
import {BrowserRouter as Router, Route } from "react-router-dom";
import { View } from 'react-native';
import '../App.css';

export default class Headline extends Component {
  render() {
  return (
    <div className="headlineboxwrap">
      <div className="headlinebox">
        <p className="headlinetext">Ali is a multidisciplinary Structural Bioinformatician. Meander through & let me know if anything grips.</p>
      </div>
    </div>
  )
}
}

