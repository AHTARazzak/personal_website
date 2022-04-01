import React, { Component } from "react"

export default class Resumeme extends Component {
   constructor(props) {
    super(props);
    this.onHoverChangeTBresumedet = this.onHoverChangeTBresumedet.bind(this)
    this.onHoverChangeTBCV = this.onHoverChangeTBCV.bind(this)
    this.onHoverLeave = this.onHoverLeave.bind(this)
  }

  onHoverChangeTBresumedet() {
        var tb = <div className="headlinebox"><p className="headlinetext">Why you need me</p></div>;
        this.props.onSelectTBdetbox(tb);
}

  onHoverChangeTBCV() {
        var tb = <div className="headlinebox"><p className="headlinetext">Find out more</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTBdetbox(tb);
}
  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename">Resume</p>
          </div>
        </div>
        <div className="detcontextbox">
            <div className="aboutboxwrap">
              <div className="resumebox" onMouseEnter={this.onHoverChangeTBresumedet} onMouseLeave={this.onHoverLeave}>
              <p className="aboutdescriptionfinal">Currently <b>EMPLOYED (taking proposals)</b>.</p>
                <p className="resumedescription">I have worked as a structural bioinformatician for over six years.
                My passion lies in employing a myriad of advanced data-driven techniques to meet biomedical and pharmaceutical objectives & enhance the therapeutic landscape for all.
                This includes developing innovative pipelines that streamline Bioinformatic analysis &/or constructing online Bioinformatic resources.
                As a Computational Biologist I thrive in interdisciplinary settings where members collaboratively contribute their expertise towards resolving biomolecular phenomena.
                What has remained true to my practice is my thirst for immersive challenging environments and the subsequent learning experience entailed.
                I am always on the lookout for opportunities where I can utilise my expertise.</p>
                 <span className="controlCV"><a href='https://www.dropbox.com/s/j995o7vxubu94wg/Ali_CV_01042022.pdf?dl=0' style={{ textDecoration: 'none'}} target="_blank" rel="noopener noreferrer"><p className="resumelink" style={{ color : '#90006A', fontWeight: "bold"}}  onMouseEnter={this.onHoverChangeTBCV} onMouseLeave={this.onHoverLeave}>CV (tech)</p></a><p className="resumelinkfill" style={{ color : '#90006A', fontWeight: "bold", fontSize: "0.15em" }}> &nbsp;&nbsp;|&nbsp;&nbsp; </p>
                 <a href='https://www.dropbox.com/s/668ukw2iii7onxm/CV_Gen_16062020.pdf?dl=0' style={{ textDecoration: 'none'}} target="_blank" rel="noopener noreferrer"><p className="resumelink" style={{ color : '#90006A', fontWeight: "bold" }}  onMouseEnter={this.onHoverChangeTBCV} onMouseLeave={this.onHoverLeave}>CV (gen)</p></a></span>

              </div>
            </div>
        </div>
      </div>
  )
}
}

