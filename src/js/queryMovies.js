import getRefs from './getRefs.js';
// import fetchMovies from './fetchMovies';
import MovieSearch from './apiService.js';
import { renderMovie, onSearchFilm } from './renderMovie';
// import { debounce, throttle } from 'throttle-debounce';

const movieSearch = new MovieSearch();
const refs = getRefs();
const element = refs.containerWatchedFilms;

function queryMovies(e) {
  console.log('this is moviesearch query');

  if (movieSearch.query != '') {
    // movieSearch.resetPage();
    // refs.filmGallery.innerHTML = '';
    // console.log('this is moviesearch query', movieSearch.query);
    // onSearchFilm();
  } else {
    // e.preventDefault();
    refs.filmGallery.innerHTML = '';
    // movieSearch.resetPage();
    movieSearch.fetchPopularMovie().then(renderMovie);
  }
}

export default queryMovies;
