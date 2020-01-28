/** @format */
import React from "react";
import "./App.css";
import fetchMovie from "./components/main-movie";
import Loading from "./components/loading";
import MovieList from "./components/movie-list";
import Navbar from "./components/navbar";
import GithubLogo from "./components/github";
import fetchSimilarMovies from "./components/similar-movie-api";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: "avengers",
      loading: true,
      mainMovie: [],
      id: [],
      similarMovies: []
    };

    this.getData = this.getData.bind(this);
    this.handleChangeMovie = this.handleChangeMovie.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.activeMovie);
  }

  async getData(movie) {
    this.setState({
      loading: true
    });

    await fetchMovie(movie).then(data => {
      this.setState({
        mainMovie: data,
        loading: true,
        id: data[0].id
      });
    });

    await fetchSimilarMovies(this.state.id).then(data => {
      this.setState({
        similarMovies: data,
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
        <GithubLogo />
        <Navbar
          activeMovie={this.state.activeMovie}
          changeMovie={this.handleChangeMovie}
        />
        <MovieList
          id={this.state.id}
          movie={this.state.mainMovie[0]}
          movies={this.state.similarMovies}
        />
      </div>
    );
  }
}

export default App;
