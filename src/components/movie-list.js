/** @format */

import React from "react";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allSimilarMovies: this.props.movies,
      activeMovie: this.props.movies[0],
      count: 1
    };
  }

  increaseCount = () => {
    this.setState(currentState => {
      return {
        count:
          currentState.count >= 19
            ? (this.state.count = 1)
            : currentState.count + 1
      };
    });
  };

  decreaseCount = () => {
    this.setState(currentState => {
      return {
        count:
          currentState.count === 0
            ? (this.state.count = 19)
            : currentState.count - 1
      };
    });
  };

  handlePreviousMovie = () => {
    this.setState(currentState => {
      return {
        activeMovie: this.props.movies[this.state.count]
      };
    });
    this.decreaseCount();
  };

  handleNextMovie = () => {
    this.setState(currentState => {
      return {
        activeMovie: this.props.movies[this.state.count]
      };
    });
    this.increaseCount();
  };

  render() {
    return (
      <div id="main-movie">
        <div id="main-movie-2">
          <h1>{this.props.movie.original_title}</h1>
          <img
            src={`http://image.tmdb.org/t/p/w342/${this.props.movie.poster_path}`}
            alt="movie poster"
          ></img>
          <table>
            <thead>
              <tr>
                <th>Popularity</th>
                <th>Votes</th>
                <th>IMDB Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Math.floor(this.props.movie.popularity)} %</td>
                <td>{this.props.movie.vote_count}</td>
                <td>{this.props.movie.vote_average}</td>
              </tr>
            </tbody>
          </table>
          <h3>Overview:</h3>
          <h4>{this.props.movie.overview}</h4>
        </div>

        <div id="suggested-movies">
          <h2>Similar Movies</h2>
          <div id="suggested-movies-2">
            <div>
              <i
                onClick={() => this.handlePreviousMovie()}
                className="far fa-arrow-alt-circle-left"
              ></i>
            </div>
            <img
              style={{ position: "relative", left: "220px", opacity: 0.3 }}
              src={`http://image.tmdb.org/t/p/w154/${
                this.props.movies[Math.floor(Math.random() * 18)].poster_path
              }`}
              alt="suggested"
            ></img>
            <img
              style={{ position: "relative", zIndex: 10 }}
              src={`http://image.tmdb.org/t/p/w185/${this.state.activeMovie.poster_path}`}
              alt="suggested"
            ></img>
            <img
              style={{ position: "relative", right: "220px", opacity: 0.3 }}
              src={`http://image.tmdb.org/t/p/w154/${
                this.props.movies[Math.floor(Math.random() * 18)].poster_path
              }`}
              alt="suggested"
            ></img>
            <div>
              <i
                onClick={() => this.handleNextMovie()}
                className="far fa-arrow-alt-circle-right"
              ></i>
            </div>
          </div>
          <div>
            <h3 id="suggested-movie-title">
              {this.state.activeMovie.original_title}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
