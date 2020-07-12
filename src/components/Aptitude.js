import React, { Component } from "react"
import '../App.css';

import Films from "./aptitfilms"
import Albums from "./aptitalbums"
import Books from "./aptitbooks"
import Anime from "./aptitanime"

export default class Aptitude extends Component {
    constructor(props) {
    super(props);
    this.state = {
      portcomp : <Films />,
    }
    this.onClickFilms = this.onClickFilms.bind(this);
    this.onClickAlbums = this.onClickAlbums.bind(this);
    this.onClickBooks = this.onClickBooks.bind(this);
    this.onClickAnime = this.onClickAnime.bind(this);

}
  onClickFilms() {
    this.setState({
      portcomp:<Films />
    })
  }

  onClickAlbums() {
    this.setState({
      portcomp:<Albums />
    })
  }

  onClickBooks() {
    this.setState({
      portcomp:<Books />
    })
  }

  onClickAnime() {
    this.setState({
      portcomp:<Anime />
    })
  }


  render() {
  return (
      <div className="changecontentbox">
        <div className="detheaderbox">
          <div className="namebox">
            <p className="thename">Aptitude</p>
          </div>
        </div>
        <div className="detcontextbox">
          <div className="aptitbox">
            <div className="aptitcatawarp">
              <div className="aptitcata">
                <p className="aptitcatatitle" onClick={this.onClickFilms}>Films</p>
              </div>
            </div>
            <div className="aptitcatawarp">
              <div className="aptitcata">
                <p className="aptitcatatitle" onClick={this.onClickAlbums}>Albums</p>
              </div>
            </div>
            <div className="aptitcatawarp">
              <div className="aptitcata">
                <p className="aptitcatatitle" onClick={this.onClickBooks}>Books</p>
              </div>
            </div>
            <div className="aptitcatawarp">
              <div className="aptitcata">
                <p className="aptitcatatitle" onClick={this.onClickAnime}>Anime</p>
              </div>
            </div>
          </div>
          <div className="aptitoptionswrap">
            {this.state.portcomp}
          </div>
        </div>
      </div>
  )
}
}

