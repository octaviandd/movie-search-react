/** @format */

import React from "react";
import "./App.css";
import fetchMovie from "./components/api";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: "Avengers",
      loading: true,
      allMovies: []
    };
  }

  componentDidMount() {
    this.getData(this.state.activeMovie);
  }

  componentDidUpdate(prevState) {
    if (prevState.activeMovie !== this.state.activeMovie) {
      this.getData(this.state.activeMovie);
    }
  }

  getData(movie) {
    this.setState({
      loading: true
    });

    this.setState({
      allMovies: fetchMovie(movie),
      loading: false
    });
  }

  render() {
    return <div></div>;
  }
}

export default App;
