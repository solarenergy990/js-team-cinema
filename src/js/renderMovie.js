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
};

const onSearchFilm = async e => {
  e.preventDefault();
  movieSearch.query = e.target.elements.query.value;
  console.log(movieSearch.query);
  if (movieSearch.query === '') {
    movieSearch.resetPage();
    movieSearch.fetchPopularMovie().then(renderMovie);
    refs.warningField.textContent = `You forgot to make a request :)`;
    refs.searchResField.textContent = '';
    return;
  }
  // if () {
  //   refs.warningField.textContent = `Sorry, there no results found. Try searching for something else!`;
  // refs.searchResField.textContent = '';
  // }

  refs.searchResField.textContent = `Successful! We found films by your request "${movieSearch.query}"!`;
  refs.searchResField.style.color = '#48d610';
  refs.warningField.textContent = '';

  refs.filmGallery.innerHTML = '';
  movieSearch.resetPage();

  await movieSearch.fetchMovieSearch().then(renderMovie);
};

const onTrendingFilm = e => {
  refs.filmGallery.innerHTML = '';
  movieSearch.resetPage();
  movieSearch.fetchPopularMovie().then(renderMovie);
};

movieSearch.fetchPopularMovie().then(renderMovie);
refs.searchFilm.addEventListener('submit', onSearchFilm);
refs.btnHome.addEventListener('click', onTrendingFilm);

export { renderMovie };
