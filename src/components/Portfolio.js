import React, { Component } from "react"

import AbuMoola from "./abumoola"
import Makhanik from "./makhanik"
import Weltformat from "./weltformat"
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
      portcomp : <AbuMoola />,
      page1appearance: 'flex',
      page2appearance: 'none'
    }
    this.onClickAbuMoola = this.onClickAbuMoola.bind(this);
    this.onClickMakhanik = this.onClickMakhanik.bind(this);
    this.onClickWeltformat = this.onClickWeltformat.bind(this);
    this.onClickGetgot = this.onClickGetgot.bind(this);
    this.onClickMujrimeen = this.onClickMujrimeen.bind(this);
    this.onClickScreenscrying = this.onClickScreenscrying.bind(this);
    this.onClickAllosteryMap = this.onClickAllosteryMap.bind(this);
    this.onClickSelfHarm = this.onClickSelfHarm.bind(this);
    this.onClickKstRDynamics = this.onClickKstRDynamics.bind(this);
    this.onClickStreetSymphonies = this.onClickStreetSymphonies.bind(this);
    this.onClickCutThwice = this.onClickCutThwice.bind(this);
    this.onHoverChangeTBportokay = this.onHoverChangeTBportokay.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
    this.onClickpage1click = this.onClickpage1click.bind(this);
    this.onClickpage2click = this.onClickpage2click.bind(this);
  }

  onHoverChangeTBportokay() {
        var tb = <div className="headlinebox"><p className="headlinetext">Things I am working on (aside from this site)</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTBdetbox(tb);
}

  onClickAbuMoola() {
    this.setState({
      portcomp:<AbuMoola />
    })
  }

  onClickMakhanik() {
    this.setState({
      portcomp:<Makhanik />
    })
  }

  onClickWeltformat() {
    this.setState({
      portcomp:<Weltformat />
    })
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

  onClickpage1click() {
  this.setState({
  page1appearance:"flex",
  page2appearance:"none"
});this.onClickMakhanik()
}

  onClickpage2click() {
  this.setState({
  page1appearance:"none",
  page2appearance:"flex"
});this.onClickKstRDynamics()
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
            <div className="portfoliolistwrap" style={{display:this.state.page1appearance}}>
              <div className="portfoliooption" onClick={this.onClickAbuMoola}>
              <div className="portfolioopttitle">
                  <p className="porttitle">AbuMoola</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">01/2021 - 02/2021</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickMakhanik}>
              <div className="portfolioopttitle">
                  <p className="porttitle">Makanik Khalid</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">08/2020 - ongoing</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickWeltformat}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Weltformat</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">07/2020 - 08/2020</p>
                </div>
              </div>
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
                  <p className="portdate">06/2019 - 06/2020</p>
                </div>
              </div>
              <div className="portfoliooption">
                <div className="pagesarea">
                  <p className="pagetext"><span>1</span><span onClick={this.onClickpage2click}>2</span></p>
                </div>
              </div>
            </div>
            <div className="portfoliolistwrap" style={{display:this.state.page2appearance }}>
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
                  <p className="portdate">06/2015 - 07/2019</p>
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
              <div className="portfoliooption">
              </div>
              <div className="portfoliooption">
              </div>
              <div className="portfoliooption">
              </div>
              <div className="portfoliooption">
                <div className="pagesarea">
                  <p className="pagetext"><span onClick={this.onClickpage1click}>1</span><span>2</span></p>
                </div>
              </div>
            </div>
          </div>
          {this.state.portcomp}
        </div>
      </div>
  )
}
}

