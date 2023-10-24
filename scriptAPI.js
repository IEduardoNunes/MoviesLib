const d = (el) => document.querySelector(el);
let results = '';
const API_KEY = 'api_key=0569077113f9f104381ad9bdb756be8a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;
const area = d('.area-movies .film');

getMovies(API_URL);

function getMovies(url) {
  fetch(url).then(res => res.json()).then(data => {
    results = data.results;
    showMovies()
  })
}