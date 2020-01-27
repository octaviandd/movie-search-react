/** @format */
import React from "react";
import "./App.css";
import fetchMovie from "./components/api";
import Loading from "./components/loading";
import MovieList from "./movie-info";
import Navbar from "./components/navbar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: "avengers",
      loading: true,
      allMovies: []
    };

    this.getData = this.getData.bind(this);
    this.handleChangeMovie = this.handleChangeMovie.bind(this);
  }

  componentDidMount() {
    console.log(this.state.allMovies);
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
        <Navbar
          activeMovie={this.state.activeMovie}
          changeMovie={this.handleChangeMovie}
        />
        <MovieList movies={this.state.allMovies[0]} />
      </div>
    );
  }
}

export default App;
