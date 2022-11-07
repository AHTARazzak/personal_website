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
import BABAABP from "./babaabp"
import LuckyStars from "./luckystars"
import OOP from "./oop"
import TOM from "./tom"
import ANIM10 from "./anim10"
import Ollies from "./ollies"
import CBH21 from "./cbh21"
import TOCsb from "./tocsb"
import SeaSlug from "./seaslug"
import Threadbare from "./threadbare"
import Sweetstain from "./sweetstain"

export default class Portfoliohere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portcomp : <Sweetstain />,
      page1appearance: 'flex',
      page2appearance: 'none',
      page3appearance: 'none',
    }
    this.onClickSweetstain = this.onClickSweetstain.bind(this);
    this.onClickThreadbare = this.onClickThreadbare.bind(this);
    this.onClickSeaSlug = this.onClickSeaSlug.bind(this);
    this.onClickTOCsb = this.onClickTOCsb.bind(this);
    this.onClickOllies = this.onClickOllies.bind(this);
    this.onClickCBH21 = this.onClickCBH21.bind(this);
    this.onClickANIM10 = this.onClickANIM10.bind(this);
    this.onClickTOM = this.onClickTOM.bind(this);
    this.onClickLuckyStars = this.onClickLuckyStars.bind(this);
    this.onClickOOP = this.onClickOOP.bind(this);
    this.onClickBABAABP = this.onClickBABAABP.bind(this);
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
    this.onClickpage3click = this.onClickpage3click.bind(this);
  }

  onHoverChangeTBportokay() {
        var tb = <div className="headlinebox"><p className="headlinetext">Things I am working on (aside from this site)</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTBdetbox(tb);
}

  onClickTOCsb() {
    this.setState({
      portcomp:<TOCsb />
    })
  }

  onClickCBH21() {
    this.setState({
      portcomp:<CBH21 />
    })
  }

  onClickOllies() {
    this.setState({
      portcomp:<Ollies />
    })
  }

  onClickANIM10() {
    this.setState({
      portcomp:<ANIM10 />
    })
  }

  onClickLuckyStars() {
    this.setState({
      portcomp:<LuckyStars />
    })
  }

  onClickBABAABP() {
    this.setState({
      portcomp:<BABAABP />
    })
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

  onClickOOP() {
    this.setState({
      portcomp:<OOP />
    })
  }

  onClickTOM() {
    this.setState({
      portcomp:<TOM />
    })
  }

  onClickSeaSlug() {
    this.setState({
      portcomp:<SeaSlug />
    })
  }

  onClickThreadbare() {
    this.setState({
      portcomp:<Threadbare />
    })
  }

  onClickSweetstain() {
    this.setState({
      portcomp:<Sweetstain />
    })
  }

  onClickpage1click() {
  this.setState({
  page1appearance:"flex",
  page2appearance:"none",
  page3appearance:"none"
});this.onClickSweetstain()
}

  onClickpage2click() {
  this.setState({
  page1appearance:"none",
  page2appearance:"flex",
  page3appearance:"none"
});this.onClickTOM()
}

  onClickpage3click() {
  this.setState({
  page1appearance:"none",
  page2appearance:"none",
  page3appearance:"flex"
});this.onClickMujrimeen()
}

  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename" >Projects <span role="img" aria-label="black cloud">☁</span></p>
          </div>
        </div>
        <div className="detcontextbox"  onMouseEnter={this.onHoverChangeTBportokay} onMouseLeave={this.onHoverLeave}>
          <div className="portfoliodetwrap">
            <div className="portfoliolistwrap" style={{display:this.state.page1appearance}}>
              <div className="portfoliooption" onClick={this.onClickSweetstain}>
              <div className="portfolioopttitle">
                  <p className="porttitle">Sweet Stain</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">10/2022 - present</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickThreadbare}>
              <div className="portfolioopttitle">
                  <p className="porttitle">Threadbare</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">02/2022 - present</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickSeaSlug}>
                <div className="portfolioopttitle">
                  <p className="porttitle">seaslug.se</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">10/2021 - present</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickTOCsb}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Tools of Relation</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">08/2021 - 10/2021</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickOllies}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Ollies</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">05/2021 - 07/2021</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickCBH21}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Bioinf. Hackathon</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">04/2021 - 04/2021</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickANIM10}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Bric-a-ack</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">04/2021 - 04/2021</p>
                </div>
              </div>
              <div className="portfoliooption">
                <div className="pagesarea">
                  <p className="pagetext"><span>1</span><span onClick={this.onClickpage2click}>2</span><span onClick={this.onClickpage3click}>3</span></p>
                </div>
              </div>
            </div>
            <div className="portfoliolistwrap" style={{display:this.state.page2appearance }}>
              <div className="portfoliooption" onClick={this.onClickTOM}>
                <div className="portfolioopttitle">
                  <p className="porttitle">LIBERTY</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">03/2021 - 04/2021</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickLuckyStars}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Lucky Stars</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">03/2021 - 03/2021</p>
                </div>
              </div>
              <div className="portfoliooption" onClick={this.onClickBABAABP}>
                <div className="portfolioopttitle">
                  <p className="porttitle">BABAABP</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">02/2021 - 02/2021</p>
                </div>
              </div>
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
                  <p className="porttitle">Makanak Khalee</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">08/2020 - 05/2021</p>
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
              <div className="portfoliooption" onClick={this.onClickWeltformat}>
                <div className="portfolioopttitle">
                  <p className="porttitle">Weltformat</p>
                </div>
                <div className="portfoliooptdate">
                  <p className="portdate">07/2020 - 08/2020</p>
                </div>
              </div>
              <div className="portfoliooption">
                <div className="pagesarea">
                  <p className="pagetext"><span onClick={this.onClickpage1click}>1</span><span>2</span><span onClick={this.onClickpage3click}>3</span></p>
                </div>
              </div>
            </div>
            <div className="portfoliolistwrap" style={{display:this.state.page3appearance}}>
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
                  <p className="portdate">06/2015 - present</p>
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
                <div className="pagesarea">
                  <p className="pagetext"><span onClick={this.onClickpage1click}>1</span><span onClick={this.onClickpage2click}>2</span><span>3</span></p>
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

