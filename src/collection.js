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
      thewords: ["THERE WAS A LIGHT AT THE END OF THIS TUNNEL", "MOURNING GOWN & ALL", "WITH A GOD DAMN FROWN", "& HERE I THOUGHT IT WAS ALL FUN & GAMES", "ANOTHER NIGHT SPENT BY CANDLE LIGHT", "A QUICK STROLL IN THE RAIN", "LOVE PILES OF FALLEN LEAVES & WET GRASS", "SPEAK UP - SAY WHAT - NOT SURE - ANOTHER DAY", "HARD TO REMEMBER & EASY TO FORGET", "LIKE AN ALLEY WHERE REFUSE IS DISCARDED", "HALLOWED GROUND FOR THOSE WHO WANT, FOR THOSE WHO NEED", "DOVES OF A FLOCK ALL LOOK THE SAME SPICED & STEWED", "LONG NIGHTS SPENT, LONG NIGHTS PENT, LONG NIGHTS NEED A TENT", "IF YOU ASK ME ETERNITY WOULD HAVE BEEN KINDER", "LOOKING FOR KIND & RESERVED CATS : CAN PROVIDE COMPANY", "HAIR LIKE PIANO WIRE, FACE LIKE WORN TYRES"],

    }
    this.getThumbText = this.getThumbText.bind(this)
}

  getThumbText = (theTB) => {
        this.setState({newheadline: theTB});
    }


componentWillMount() {
  this.setState({thep1 : <p className="bgweirdtextbw" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrapbw', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep2 : <p className="bgweirdtextbw" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrapbw', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep3 : <p className="bgweirdtextbw" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrapbw', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep4 : <p className="bgweirdtextbw" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrapbw', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep5 : <p className="bgweirdtextbw" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrapbw', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep6 : <p className="bgweirdtextbw" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrapbw', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep7 : <p className="bgweirdtextbw" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrapbw', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep8 : <p className="bgweirdtext" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrap', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep9 : <p className="bgweirdtext" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrap', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep10 : <p className="bgweirdtextbw" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrapbw', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep11 : <p className="bgweirdtext" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrap', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep12 : <p className="bgweirdtext" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrap', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep13 : <p className="bgweirdtext" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrap', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep14 : <p className="bgweirdtext" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrap', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>,
    thep15 : <p className="bgweirdtext" style={{lineHeight:(Math.random() * (1)).toFixed(2)+'em', animationName: 'parentwrap', animationDuration: (Math.random() * (15-2)+2).toFixed(2)+'s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', animationDelay: (Math.random() * (7)).toFixed(2)+'s',fontSize: (Math.random() * (8-3)+3).toFixed(3)+'em', opacity: (Math.random() * (0.7-0.3)+0.3).toFixed(3), top:(Math.random() * (105-5)+5)+'%' }}>{this.state.thewords[Math.floor(Math.random() * Math.floor(this.state.thewords.length))]}</p>

});

          if(window.innerHeight <800 ) {
            require('./Apph700.css');
         } else if (window.innerHeight <900 ) {
            require('./Apph800.css');
          } else if (window.innerHeight <1000 ) {
            require('./Apph900.css');
          } else {
            require('./App.css');
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

  return (
  <DocumentMeta {...meta}>
  <div className="parentwrap">
  {this.state.thep1}
  {this.state.thep2}
  {this.state.thep3}
  {this.state.thep4}
  {this.state.thep5}
  {this.state.thep6}
  {this.state.thep7}
  {this.state.thep8}
  {this.state.thep9}
  {this.state.thep10}
  {this.state.thep11}
  {this.state.thep12}
  {this.state.thep13}
  {this.state.thep14}
  {this.state.thep15}
    <div className="parent">
      <Router>
        <div className="bodyfake">
          <div className="headline">
            <div className="headlineboxwrap">
              {this.state.newheadline}
            </div>
          </div>
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
