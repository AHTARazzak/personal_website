import React, {Component} from "react"
import {BrowserRouter as Router} from "react-router-dom";
import DocumentMeta from 'react-document-meta';

import Titlebox from "./components/titlebox"
import DetandToolbox from "./components/detailandtoolbox"
import Footdetail from "./components/footerdetails"



export default class Collection extends Component {
    constructor(props) {
    super(props);
    this.state = {
      newheadline : <div className="headlinebox"><p className="headlinetext">Under construction!</p></div>,
    }
    this.getThumbText = this.getThumbText.bind(this)
}

  getThumbText = (theTB) => {
        this.setState({newheadline: theTB});
    }


componentWillMount() {
         if(window.innerWidth>1900 && window.innerHeight >1000 ) {
            require('./App.css');
         } else if (window.innerHeight >900 ) {
            require('./Apph900.css');
          }
    }

  render() {

const meta = {
      title: "A's space",
      description: 'Where Ali Razzak demonstrates what he spends his time doing as a artist and bioinformatician in hopes of impressing you.',
      canonical: 'https://alirazzak.info',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'bioinformatician,structural,biochemist,web developer, underground fashion, weird music, graphic design, machine learning, digital malpropriation, experimental, biomedical, biostatistician,'
        }
      }
    };

console.log(window.innerWidth);
console.log(window.innerHeight);

  return (
  <DocumentMeta {...meta}>
  <div className="parentwrap">
    <div className="parent">
      <Router>
        <div className="bodyfake">
          <header className="headline">
            <div className="headlineboxwrap">
              {this.state.newheadline}
            </div>
          </header>
          <div className="flexbody">
            <div className="leftbox">
              <Titlebox onSelectTB={this.getThumbText} />
            </div>
            <DetandToolbox onSelectTB={this.getThumbText} />
          </div>
          <div className="footer">
            <Footdetail onSelectTB={this.getThumbText} />
          </div>
        </div>
      </Router>
    </div>
  </div>
  </DocumentMeta>
  );
}
}
