import MovieSearch from './apiService.js';
import filmCardTemplate from '../templates/filmCardTemplate.hbs';
import getRefs from './getRefs.js';
import Spinner from './spinner.js';

const refs = getRefs();
const spinner = new Spinner({
  selector: '.spinner',
});

const movieSearch = new MovieSearch();

const renderMovie = async movies => {
  const films = movies.results;
  const genres = await movieSearch.fetchGenresMovie();
  spinner.enable();
  films.map(film => {
    if (film.release_date !== undefined) {
      film.release_date = film.release_date.slice(0, 4);
    }
  });
  films.map(film => {
    film.genre_ids = film.genre_ids.map(
      idSearch => ` ` + genres.find(genre => genre.id === idSearch).name,
    );
  });
  spinner.disable();
  refs.filmGallery.insertAdjacentHTML('beforeend', filmCardTemplate(films));
  // refs.firstPage.textContent = 1;
  refs.prevPage.textContent = movieSearch.page - 2;
  refs.currentPage.textContent = movieSearch.page - 1;
  refs.nextPage.textContent = movieSearch.page;
  refs.lastPage.textContent = movies.total_pages;
};

const onSearchFilm = async e => {
  e.preventDefault();
  movieSearch.query = e.target.elements.query.value;
  console.log(movieSearch.query);
  if (movieSearch.query === '') {
    movieSearch.resetPage();
    movieSearch.fetchPopularMovie().then(renderMovie);
  }
  refs.filmGallery.innerHTML = '';
  movieSearch.resetPage();
  await movieSearch.fetchMovieSearch().then(renderMovie);
};

const onTrendingFilm = e => {
  refs.filmGallery.innerHTML = '';
  movieSearch.resetPage();
  movieSearch.fetchPopularMovie().then(renderMovie);
};

const onNextPage = async e => {
  e.preventDefault();
  refs.filmGallery.innerHTML = '';
  refs.header.scrollIntoView({ behavior: 'smooth' });
  await movieSearch.fetchPopularMovie().then(renderMovie);
};

const onPreviousPage = async e => {
  e.preventDefault();
  movieSearch.page = movieSearch.page - 2;
  refs.filmGallery.innerHTML = '';
  refs.header.scrollIntoView({ behavior: 'smooth' });
  await movieSearch.fetchPopularMovie().then(renderMovie);
};

console.log(movieSearch.page);
movieSearch.fetchPopularMovie().then(renderMovie);
refs.searchFilm.addEventListener('submit', onSearchFilm);
refs.btnHome.addEventListener('click', onTrendingFilm);
refs.arrowRight.addEventListener('click', onNextPage);
refs.arrowLeft.addEventListener('click', onPreviousPage);
