/** @format */

const axios = require("axios");

const fetchMovie = movie => {
  var APIKEY = "b940697ef71b1bf05d8c3d3282d547bf";
  var API2 =
    "https://api.themoviedb.org/3/search/movie?api_key=b940697ef71b1bf05d8c3d3282d547bf&language=en-US&page=1&include_adult=false&query=avengers";
  var API = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&query=${movie}`;

  axios
    .get(API)
    .then(function(response) {
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(function(error) {
      console.log(error);
    });
};

export default fetchMovie;
