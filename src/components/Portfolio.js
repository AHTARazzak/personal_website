import React, { Component } from "react"

import Getgot from "./getgot"
import Mujrimeen from "./mujrimeen"
import Screenscrying from "./screenscrying"
import Allosterymap from "./allosterymap"
import SelfHarm from "./selfharm"
import KstRDynamics from "./kstrdynamics"
import StreetSymphonies from "./streetsymphonies"
import CutThwice from "./cutthwice"

export default class Portfoliohere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portcomp : <Getgot />,
    }
    this.onClickGetgot = this.onClickGetgot.bind(this);
    this.onClickMujrimeen = this.onClickMujrimeen.bind(this);
    this.onClickScreenscrying = this.onClickScreenscrying.bind(this);
    this.onClickAllosteryMap = this.onClickAllosteryMap.bind(this);
    this.onClickSelfHarm = this.onClickSelfHarm.bind(this);
    this.onClickKstRDynamics = this.onClickKstRDynamics.bind(this);
    this.onClickStreetSymphonies = this.onClickStreetSymphonies.bind(this);
    this.onClickCutThwice = this.onClickCutThwice.bind(this);
    this.onHoverChangeTBportokay = this.onHoverChangeTBportokay.bind(this)
    this.onHoverLeave = this.onHoverLeave.bind(this)
  }

  onHoverChangeTBportokay() {
        var tb = <div className="headlinebox"><p className="headlinetext">Things I am working on (aside from this site)</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTBdetbox(tb);
}

  onClickGetgot() {
    this.setState({
      portcomp:<Getgot />
    })
  }

  onClickMujrimeen() {
    this.setState({
      portcomp:<Mujrimeen />
    })
  }

  onClickScreenscrying() {
    this.setState({
      portcomp:<Screenscrying />
    })
  }

  onClickAllosteryMap() {
    this.setState({
      portcomp:<Allosterymap />
    })
  }

  onClickSelfHarm() {
    this.setState({
      portcomp:<SelfHarm />
    })
  }

  onClickKstRDynamics() {
    this.setState({
      portcomp:<KstRDynamics />
    })
  }

  onClickStreetSymphonies() {
    this.setState({
      portcomp:<StreetSymphonies />
    })
  }

  onClickCutThwice() {
    this.setState({
      portcomp:<CutThwice />
    })
  }



  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename" >Projects</p>
          </div>
        </div>
        <div className="detcontextbox"  onMouseEnter={this.onHoverChangeTBportokay} onMouseLeave={this.onHoverLeave}>
          <div className="portfoliodetwrap">
            <div className="portfoliolistwrap">
              <div className="portfoliooption" onClick={this.onClickGetgot}>
                <div className="portfolioopttitle">
                  <p className="porttitle">GetGot</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">07/2020 - ongoing</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickMujrimeen}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Mujrimeen</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">05/2020 - ongoing</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickScreenscrying}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Screen Scrying</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">04/2020 - 05/2020</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickAllosteryMap}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Allostery Map</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">6/2019 - 06/2020</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickSelfHarm}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Self Harm</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">03/2018 - ongoing</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickKstRDynamics}>
                <div className="portfolioopttitle">
                  <p className="porttitle">KstR Dynamics</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">10/2016 - 03/2018</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickStreetSymphonies}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Street Symph.</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">06/2015 - ongoing</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickCutThwice}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Cut Thwice</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">02/2014 - 10/2019</p>
                </div>
              </div>
            </div>
            {this.state.portcomp}
          </div>
        </div>
      </div>
  )
}
}

