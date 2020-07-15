import React, { Component } from "react"

export default class Contactform extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
    email: '',
    message: ''
  }
  }
  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename">Contact</p>
          </div>
        </div>
        <div className="detcontextbox">
          <p className='contecttrial'><a className="detthumbnail" href="mailto:aliarazzak@hotmail.com">aliarazzak (AT) hotmail (DOT) com</a></p>
        </div>
      </div>
  )
}
}

