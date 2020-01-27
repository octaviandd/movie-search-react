/** @format */

import React from "react";

class Navbar extends React.Component {
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
    console.log(this.state.input);
  }

  //   getInputByKey(e) {
  //     if (e.keyCode === 13) {
  //       this.getInput;
  //     }
  //   }

  getInput() {
    let title = this.state.input;
    this.props.getLanguage(title);
  }

  render() {
    return (
      <div id="nav">
        <input
          placeholder="Search a repository"
          onChange={this.checkInput.bind(this)}
          value={this.state.input}
        ></input>
        <button
          onKeyDown={e => this.getInputByKey}
          onClick={this.getInput.bind(this)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Navbar;
