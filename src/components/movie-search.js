/** @format */

import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  checkInput(e) {
    var value = e.target.value;
    this.setState({
      input: value
    });
  }

  newMovie() {
    let movie = this.state.input;
    this.props.changeMovie(movie);
  }

  render() {
    return (
      <div id="nav">
        <div id="nav2">
          <input
            placeholder="Search a movie"
            onChange={this.checkInput.bind(this)}
            value={this.state.input}
          ></input>
          <button onClick={this.newMovie.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}
