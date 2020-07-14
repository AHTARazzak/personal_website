import React, { Component } from "react"
import '../App.css';

export default class Titlebox extends Component {
  constructor(props){
    super(props);
    this.state = {
      newheadline : <div className="headlinebox"><p className="headlinetext">At your service</p></div>,
    }
    this.onHoverChangeTB = this.onHoverChangeTB.bind(this)
    this.onHoverLeave = this.onHoverLeave.bind(this)
  }

  onHoverChangeTB() {
        var tb = <div className="headlinebox"><p className="headlinetext">GET GOT BLOOD RUSH TO MY HEAD LIT LOCK</p></div>;
        this.props.onSelectTB(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTB(tb);
}

  render() {
  return (
    <div className="textbox">
      <div className="titleitselfwrap">
        <div className="titleitself">
        <p className="bigtitletext" onMouseEnter={this.onHoverChangeTB} onMouseLeave={this.onHoverLeave}>GETGOT</p>
        </div>
      </div>
    </div>
  )
}
}

