/** @format */

import React from "react";

class GithubLogo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      link: "https://github.com/octaviandd"
    };
  }

  render() {
    return (
      <div id="logo">
        <a href={this.state.link}>
          <i className="fab fa-github"></i>
        </a>
      </div>
    );
  }
}

export default GithubLogo;
