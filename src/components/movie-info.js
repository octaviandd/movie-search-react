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
        count: currentState.count + 1
      };
    });
    console.log(this.state.count);
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
                onClick={() => this.handleNextMovie()}
                className="far fa-arrow-alt-circle-left"
              ></i>
            </div>
            <img
              src={`http://image.tmdb.org/t/p/w185/${this.state.activeMovie.poster_path}`}
              alt="suggested"
            ></img>
            <div>
              <i className="far fa-arrow-alt-circle-right"></i>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
