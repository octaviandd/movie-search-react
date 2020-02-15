/** @format */
<<<<<<< HEAD
var APIKEY = "b940697ef71b1bf05d8c3d3282d547bf";

const fetchMovie = movie => {
=======

const fetchMovie = movie => {
  var APIKEY = "b940697ef71b1bf05d8c3d3282d547bf";
>>>>>>> e9d80ae3ce884ebf0ed9f5d8f99e484125bd0fbc
  var encodedURI = encodeURI(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&query=${movie}`
  );

  return fetch(encodedURI)
    .then(res => res.json())
<<<<<<< HEAD
    .then(movies => movies.results)
=======
    .then(movies => console.log(movies.results[0]) || movies.results[0])
>>>>>>> e9d80ae3ce884ebf0ed9f5d8f99e484125bd0fbc
    .catch(error => {
      console.log(error);
    });
};

export default fetchMovie;
