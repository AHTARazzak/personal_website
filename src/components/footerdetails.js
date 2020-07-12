import React, { Component } from "react"
import '../App.css';


export default class Footdetail extends Component {
    constructor(props) {
    super(props);
    this.state = {
      thewords : ["LIKE AN ALLEY WHERE REFUSE IS DISCARDED.", "HOLLOWED GROUND FOR THOSE WHO WANT, FOR THOSE WHO NEED.", "DOVES OF A FLOCK ALL LOOK THE SAME SPICED & STEWED.", "LONG NIGHTS SPENT, LONG NIGHTS PENT, LONG NIGHTS NEED A TENT.", "IF YOU ASK ME ETERNITY WOULD HAVE BEEN KINDER.", "LOOKING FOR KIND & RESERVED CATS : CAN PROVIDE COMPANY.", "HAIR LIKE PIANO WIRE, FACE LIKE WORN TYRES."],
    }

    this.state['theprint'] = this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]
}

componentDidMount() {
  this.interval = setInterval(() => this.setState({ theprint: this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))] }), 10000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}

  render() {
  return (
      <div className="footertext">
        <p>{this.state.theprint}</p>
      </div>
  )
}
}

