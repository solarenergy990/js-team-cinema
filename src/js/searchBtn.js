import getRefs from './getRefs.js';
import queryMovies from './queryMovies';
import MovieSearch from './apiService.js';
import { renderMovie, onSearchFilm } from './renderMovie';
import { debounce, throttle } from 'throttle-debounce';

const movieSearch = new MovieSearch();
const refs = getRefs();

let query = '';
let page = 1;
const queryArr = [];

const onSearchInput = e => {
  e.preventDefault();
  //   console.log(movieSearch.fetchMovieSearch().then(e => console.log(e)));
  //   if (page != 1) {
  //     page = 1;
  //     movieSearch.currentPage = page;
  //   }

  movieSearch.currentPage = page;
  //   console.log('elem', e.currentTarget.elements.query.value);
  query = e.currentTarget.elements.query.value;
  //   currQuery = e.target;

  queryArr.push(query);

  console.log(queryArr);
  if (queryArr[0] !== query) {
    refs.gallery.innerHTML = '';
    page = 1;
    movieSearch.currentPage = page;
  }
  queryArr.reverse();
  if (query.length > 0) {
    refs.pagContainer.classList.add('visually-hidden');
    refs.loadMoreBtn.classList.remove('visually-hidden');
  } else {
    refs.pagContainer.classList.remove('visually-hidden');
    refs.loadMoreBtn.classList.add('visually-hidden');
  }

  if (page === 1) {
    refs.gallery.innerHTML = '';
  }

  if (refs.searchField.value === '') {
    refs.gallery.innerHTML = '';
    refs.pagContainer.classList.add('visually-hidden');
    refs.loadMoreBtn.classList.add('visually-hidden');
    return;
  }
};

const onLoadMore = e => {
  e.preventDefault();

  page += 1;
  console.log('page', page);

  //   refs.filmGallery.innerHTML = '';
  movieSearch.currentPage = page;
  movieSearch.query = query;
  movieSearch.fetchMovieSearch().then(renderMovie);
};

// const moveTo = () => {
//   element.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//     inline: 'start',
//   });
// };

refs.searchFilm.addEventListener('submit', onSearchInput);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
