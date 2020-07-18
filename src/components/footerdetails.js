import React, { Component } from "react"

export default class Footdetail extends Component {
    constructor(props) {
    super(props);
    this.state = {
      thewords : ["THERE WAS A LIGHT AT THE END OF THIS TUNNEL", "MOURNING GOWN & ALL", "WITH A GOD DAMN FROWN", "& HERE I THOUGHT IT WAS ALL FUN & GAMES", "ANOTHER NIGHT SPENT BY CANDLE LIGHT", "A QUICK STROLL IN THE RAIN", "LOVE PILES OF FALLEN LEAVES & WET GRASS", "SPEAK UP - SAY WHAT - NOT SURE - ANOTHER DAY", "HARD TO REMEMBER & EASY TO FORGET", "LIKE AN ALLEY WHERE REFUSE IS DISCARDED", "HALLOWED GROUND FOR THOSE WHO WANT, FOR THOSE WHO NEED", "DOVES OF A FLOCK ALL LOOK THE SAME SPICED & STEWED", "LONG NIGHTS SPENT, LONG NIGHTS PENT, LONG NIGHTS NEED A TENT", "IF YOU ASK ME ETERNITY WOULD HAVE BEEN KINDER", "LOOKING FOR KIND & RESERVED CATS : CAN PROVIDE COMPANY", "HAIR LIKE PIANO WIRE, FACE LIKE WORN TYRES"],
      newheadline : <div className="headlinebox"><p className="headlinetext">At your service</p></div>,
    }

    this.state['theprint'] = this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]
    this.onHoverChangeTB = this.onHoverChangeTB.bind(this)
    this.onHoverLeave = this.onHoverLeave.bind(this)
}

componentDidMount() {
  this.interval = setInterval(() => this.setState({ theprint: this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))] }), 10000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}

  onHoverChangeTB() {
        var tb = <div className="headlinebox"><p className="headlinetext">Notes on nothing much</p></div>;
        this.props.onSelectTB(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTB(tb);
}

  render() {
  return (
      <div onMouseEnter={this.onHoverChangeTB} onMouseLeave={this.onHoverLeave} className="footertext">
        <p>{this.state.theprint}</p>
      </div>
  )
}
}

