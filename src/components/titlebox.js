import React, { Component } from "react"
import {BrowserRouter as Router, Route } from "react-router-dom";
import { View } from 'react-native';
import '../App.css';

export default class Titlebox extends Component {
  render() {
  return (
    <div className="textbox">
      <div className="titleitselfwrap">
        <div className="titleitself">
        <p className="bigtitletext">GETGOT</p>
        </div>
      </div>
    </div>
  )
}
}

