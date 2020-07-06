import React, { Component } from "react"

export default class Clocktick extends Component {
      constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString()
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
      }
      render() {
        return (
          <p className="thelcock">
            {this.state.time}
          </p>
        );
      }
    }
