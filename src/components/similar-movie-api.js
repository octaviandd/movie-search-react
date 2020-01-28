/** @format */

var APIKEY = "b940697ef71b1bf05d8c3d3282d547bf";

const fetchSimilarMovies = movies_id => {
  var encodedURI = encodeURI(
    `https://api.themoviedb.org/3/movie/${movies_id}/similar?api_key=${APIKEY}&language=en-US&page=1`
  );

  return fetch(encodedURI)
    .then(data => data.json())
    .then(data => data.results)
    .catch(error => {
      console.log(error);
    });
};

export default fetchSimilarMovies;
