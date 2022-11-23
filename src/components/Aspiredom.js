import React, { Component } from "react"

export default class Aspiredom extends Component {
     constructor(props) {
    super(props);
    this.onHoverChangeTBSites = this.onHoverChangeTBSites.bind(this)
    this.onHoverLeave = this.onHoverLeave.bind(this)
  }

  onHoverChangeTBSites() {
        var tb = <div className="headlinebox"><p className="headlinetext">Wicked sites</p></div>;
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
            <p className="thename">Aspiredom <span role="img" aria-label="hole emoji">🕳</span></p>
          </div>
        </div>
        <div className="detcontextbox">
            <div className="sitewrap" onMouseEnter={this.onHoverChangeTBSites} onMouseLeave={this.onHoverLeave}>
              <div className="site1">
                <a href="https://cass.si/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >cass.si</p></a>
                <a href="https://sixey.es/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >sixey.es</p></a>
                <a href="https://obys.agency/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >obys.agency</p></a>
                <a href="https://shards.lectronice.com/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >shards.lectronice.com</p></a>
                <a href="https://ricky.codes/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >ricky.codes</p></a>
                <a href="https://simone.computer/#/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >simone.computer</p></a>
                <a href="https://elliott.computer/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >elliott.computer</p></a>
                <a href="https://wwwtxt.org/tagged/txt" target="_blank" rel="noopener noreferrer"><p className="siteentry" >wwwtxt.org</p></a>
                <a href="https://ertdfgcvb.xyz/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >ertdfgcvb.xyz</p></a>
                <a href="https://www.strml.net/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >strml.net</p></a>
                <a href="https://matthewrayfield.com/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >matthewrayfield.com</p></a>
                <a href="https://expensive.toys/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >expensive.toys</p></a>
              </div>
              <div className="site1">
                <a href="https://cyber.dabamos.de/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >cyber.dabamos.de</p></a>
                <a href="https://nadim.computer/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >nadim.computer</p></a>
                <a href="http://aem1k.com/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >aem1k.com</p></a>
                <a href="https://brauliobarahona.com/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >brauliobarahona.com</p></a>
                <a href="https://cirosantilli.com/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >cirosantilli.com</p></a>
                <a href="https://vikkio.me/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >vikkio.me</p></a>
                <a href="https://www.jwz.org/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >jwz.org</p></a>
                <a href="https://phse.net/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >phse.net</p></a>
                <a href="https://ellugar.co/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >ellugar.co</p></a>
                <a href="https://tom.so/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >tom.so</p></a>
                <a href="https://parkimminent.com/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >parkimminent.com</p></a>
                <a href="https://isthisa.com/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >isthisa.com</p></a>
              </div>
              <div className="site1">
                <a href="http://laurelschwulst.com/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >laurelschwulst.com</p></a>
                <a href="https://awge.com/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >awge.com</p></a>
                <a href="https://matildepark.ca/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >matildepark.ca</p></a>
                <a href="https://notapipe.today/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >notapipe.today</p></a>
                <a href="https://constantvzw.org/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >constantvzw.org</p></a>
                <a href="http://pluslorem.wiki/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >pluslorem.wiki</p></a>
                <a href="https://rezmason.net/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >rezmason.net</p></a>
                <a href="https://teddavis.org/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >teddavis.org</p></a>
                <a href="https://magoz.studio/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >magoz.studio</p></a>
                <a href="https://drisc.io/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >drisc.io</p></a>
                <a href="https://alex.zyzhang.me/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >alex.zyzhang.me</p></a>
                <a href="https://dataswamp.org/" target="_blank" rel="noopener noreferrer"><p className="siteentry" >dataswamp.org</p></a>
              </div>
            </div>
        </div>
      </div>
  )
}
}

