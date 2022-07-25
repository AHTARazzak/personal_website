import React, { Component } from "react"

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
    this.onHoverChangeTBfilms = this.onHoverChangeTBfilms.bind(this)
    this.onHoverChangeTBAlbums = this.onHoverChangeTBAlbums.bind(this)
    this.onHoverChangeTBBooks = this.onHoverChangeTBBooks.bind(this)
    this.onHoverChangeTBAnime = this.onHoverChangeTBAnime.bind(this)
    this.onHoverLeave = this.onHoverLeave.bind(this)
  }

  onHoverChangeTBfilms() {
        var tb = <div className="headlinebox"><p className="headlinetext">Fims I like</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverChangeTBAlbums() {
        var tb = <div className="headlinebox"><p className="headlinetext">Albums I like</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverChangeTBBooks() {
        var tb = <div className="headlinebox"><p className="headlinetext">Books I like</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverChangeTBAnime() {
        var tb = <div className="headlinebox"><p className="headlinetext">Anime I like</p></div>;
        this.props.onSelectTBdetbox(tb);
}

onHoverLeave() {
        var tb = "";
        this.props.onSelectTBdetbox(tb);
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
            <p className="thename">Aptitude <span role="img" aria-label="yum food">🍙</span></p>
          </div>
        </div>
        <div className="detcontextbox">
          <div className="aptitbox">
            <div className="aptitcatawarp" onMouseEnter={this.onHoverChangeTBfilms} onMouseLeave={this.onHoverLeave}>
              <div className="aptitcata">
                <p className="aptitcatatitle" onClick={this.onClickFilms}>Films</p>
              </div>
            </div>
            <div className="aptitcatawarp" onMouseEnter={this.onHoverChangeTBAlbums} onMouseLeave={this.onHoverLeave}>
              <div className="aptitcata">
                <p className="aptitcatatitle" onClick={this.onClickAlbums}>Albums</p>
              </div>
            </div>
            <div className="aptitcatawarp" onMouseEnter={this.onHoverChangeTBBooks} onMouseLeave={this.onHoverLeave}>
              <div className="aptitcata">
                <p className="aptitcatatitle" onClick={this.onClickBooks}>Books</p>
              </div>
            </div>
            <div className="aptitcatawarp" onMouseEnter={this.onHoverChangeTBAnime} onMouseLeave={this.onHoverLeave}>
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

