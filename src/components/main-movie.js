/** @format */
var APIKEY = "b940697ef71b1bf05d8c3d3282d547bf";

const fetchMovie = movie => {
  var encodedURI = encodeURI(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&query=${movie}`
  );

  return fetch(encodedURI)
    .then(res => res.json())
    .then(movies => movies.results)
    .catch(error => {
      console.log(error);
    });
};

export default fetchMovie;
