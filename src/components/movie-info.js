/** @format */

import React from "react";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-movie">
        <div id="main-movie-2">
          <h1>{this.props.movies.original_title}</h1>
          <img
            src={`http://image.tmdb.org/t/p/w342/${this.props.movies.poster_path}`}
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
                <td>{Math.floor(this.props.movies.popularity)} / 100</td>
                <td>{this.props.movies.vote_count}</td>
                <td>{this.props.movies.vote_average}</td>
              </tr>
            </tbody>
          </table>
          <h3>Overview:</h3>
          <h4>{this.props.movies.overview}</h4>
        </div>
      </div>
    );
  }
}

export default MovieList;
