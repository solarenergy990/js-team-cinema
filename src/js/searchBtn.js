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
  // console.log('elem', e.target.value);
  query = e.target.value;
  //   currQuery = e.target;

  queryArr.push(query);

  // console.log(queryArr);
  if (queryArr[0] !== query) {
    refs.gallery.innerHTML = '';
    page = 1;
    movieSearch.currentPage = page;
  }
  queryArr.reverse();

  // if (query.length > 0 && request.total_pages > 1) {
  //   // console.log(refs.gallery.textContent);
  //   refs.pagContainer.classList.add('visually-hidden');
  //   refs.loadMoreBtn.classList.remove('visually-hidden');
  // } else {
  //   refs.pagContainer.classList.add('visually-hidden');
  //   // refs.pagContainer.classList.remove('visually-hidden');
  //   refs.loadMoreBtn.classList.add('visually-hidden');
  // }

  if (page === 1) {
    refs.gallery.innerHTML = '';
  }
  // console.log(refs.searchField.value);
  if (refs.searchField.value === '') {
    refs.gallery.innerHTML = '';
    refs.pagContainer.classList.remove('visually-hidden');
    refs.loadMoreBtn.classList.add('visually-hidden');
    return;
  }
  // if(movieSearch.fetchMovieSearch())
  // console.log(
  //   movieSearch.fetchMovieSearch().then(e => {
  //     return e;
  //   }),
  // );
};

const onLoadMore = e => {
  e.preventDefault();

  page += 1;
  // console.log('page', page);

  refs.filmGallery.innerHTML = '';
  movieSearch.currentPage = page;
  movieSearch.query = query;
  // onSearchFilm(movieSearch.query);
  movieSearch.fetchMovieSearch().then(renderMovie);
  refs.header.scrollIntoView({ behavior: 'smooth' });
};

// const moveTo = () => {
//   element.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start',
//     inline: 'start',
//   });
// };

refs.searchFilm.addEventListener('input', debounce(500, onSearchInput));
refs.loadMoreBtn.addEventListener('click', onLoadMore);
