/** @format */

import React from "react";

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Loading"
    };
  }

  componentDidMount() {
    var stopper = this.state.text + "...";

    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState({ text: "Loading" })
        : this.setState(currentState => ({ text: currentState.text + "." }));
    }, 300);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
<<<<<<< HEAD
    return <p id="loading-message">{this.state.text}</p>;
=======
    return <p>{this.state.text}</p>;
>>>>>>> e9d80ae3ce884ebf0ed9f5d8f99e484125bd0fbc
  }
}

export default Loading;
