import getRefs from './getRefs.js';
// import fetchMovies from './fetchMovies';
import MovieSearch from './apiService.js';
import { renderMovie } from './renderMovie';

const movieSearch = new MovieSearch();
const refs = getRefs();

function queryMovies() {
  refs.gallery.innerHTML = '';

  if (movieSearch.pageQuery.length > 0) {
    // refs.searchBtn.click();
  } else {
    movieSearch.fetchPopularMovie().then(renderMovie);
  }
}

export default queryMovies;
