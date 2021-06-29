import MovieSearch from './apiService.js';
import filmCardTemplate from '../templates/filmCardTemplate.hbs';
import getRefs from './getRefs.js';
import Spinner from './spinner.js';
import { debounce } from 'throttle-debounce';

const refs = getRefs();
const spinner = new Spinner({
  selector: '.spinner',
});
const movieSearch = new MovieSearch();

const renderMovie = async movies => {
  const films = movies.results;
  if (films.length < 20) {
    refs.loadMoreBtn.classList.add('visually-hidden');
  }
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
  // e.preventDefault();

  movieSearch.query = e.target.value.trim();

  if (movieSearch.query === '') {
    movieSearch.resetPage();
    movieSearch.fetchPopularMovie().then(renderMovie);
    refs.searchResField.textContent = `You forgot to make a request :)`;
    refs.searchResField.style.color = '#ff0000';
    setTimeout(() => {
      refs.searchResField.textContent = '';
    }, 3000);

    return;
  }
  const request = await movieSearch.fetchMovieSearch();
  // console.log(request);
  refs.pagContainer.classList.add('visually-hidden');


  if (request.total_pages > 1) {
    // console.log(refs.gallery.textContent);
    // refs.pagContainer.classList.add('visually-hidden');
    refs.loadMoreBtn.classList.remove('visually-hidden');
  } else {
    // refs.pagContainer.classList.add('visually-hidden');
    // refs.pagContainer.classList.remove('visually-hidden');
    refs.loadMoreBtn.classList.add('visually-hidden');
  }


  if (request.results.length === 0) {
    refs.searchResField.textContent = `Sorry, there no results found. Try searching for something else!`;
    refs.searchResField.style.color = '#ff0000';
    // refs.loadMoreBtn.classList.remove('visually-hidden');
    // refs.searchInput.value = '';
  } else {
    refs.searchResField.textContent = `Successful! We found films by your request "${movieSearch.query}"!`;
    refs.searchResField.style.color = '#48d610';
    refs.filmGallery.innerHTML = '';
    // refs.searchInput.value = '';
    movieSearch.resetPage();
    await movieSearch.fetchMovieSearch().then(renderMovie);
  }

  setTimeout(() => {
    refs.searchResField.textContent = '';
  }, 3000);
};

const onTrendingFilm = e => {
  refs.searchInput.value = '';
  refs.filmGallery.innerHTML = '';
  movieSearch.resetPage();
  movieSearch.fetchPopularMovie().then(renderMovie);
};

movieSearch.fetchPopularMovie().then(renderMovie);
refs.searchFilm.addEventListener('input', debounce(1000, onSearchFilm));
refs.btnHome.addEventListener('click', onTrendingFilm);

export { renderMovie, onSearchFilm };
