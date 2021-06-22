import MovieSearch from './apiService.js';
import filmCardTemplate from '../templates/filmCardTemplate.hbs';
const refs = {
  filmGallery: document.querySelector('.gallery'),
};
const GENRES = [];
const movieSearch = new MovieSearch();


const renderMovie = async movies => {
  const films = movies.results;
  const genres = await movieSearch.fetchGenresMovie();
  films.map(film => {
    film.release_date = film.release_date.slice(0, 4);
  });
  films.map(film => {
    film.genre_ids = film.genre_ids.map(
      idSearch => ` ` + genres.find(genre => genre.id === idSearch).name,
    );
  });

  refs.filmGallery.insertAdjacentHTML('beforeend', filmCardTemplate(films));
};
const movie = movieSearch.fetchPopularMovie().then(renderMovie);
