/** @format */
import React from "react";
import "./App.css";
import fetchMovie from "./components/api";
import Loading from "./components/loading";
import MovieList from "./movie-info";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: "avengers",
      loading: false,
      allMovies: []
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.activeMovie);
  }

  getData(movie) {
    this.setState({
      loading: true
    });

    fetchMovie(movie).then(data => {
      this.setState({
        allMovies: data,
        loading: false
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeMovie !== this.state.activeMovie) {
      this.getData(this.state.activeMovie);
    }
  }

  handleChangeMovie(newMovie) {
    this.setState({
      activeMovie: newMovie
    });
  }

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    }
    return (
      <div>
        <MovieList movies={this.state.allMovies} />
      </div>
    );
  }
}

export default App;
