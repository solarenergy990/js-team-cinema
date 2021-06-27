import getRefs from './getRefs.js';
// import fetchMovies from './fetchMovies';
import MovieSearch from './apiService.js';
import { renderMovie, onSearchFilm } from './renderMovie';

const movieSearch = new MovieSearch();
const refs = getRefs();

function queryMovies() {
  refs.gallery.innerHTML = '';
  console.log('this is moviesearch query');

  if (movieSearch.query != '') {
    // refs.searchBtn.click();

    console.log('this is moviesearch query', movieSearch.query);
    movieSearch.onSearchFilm();
  } else {
    movieSearch.fetchPopularMovie().then(renderMovie);
  }
}

export default queryMovies;
