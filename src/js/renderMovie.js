import MovieSearch from './apiService.js';
import filmCardTemplate from '../templates/filmCardTemplate.hbs';
const refs = {
  filmGallery: document.querySelector('.gallery'),
};
const GENRES = [];
const movieSearch = new MovieSearch();

const renderImg = movies => {

  const markupMovie = movies.results.map(movies => filmCardTemplate(movies)).join('');


  refs.filmGallery.insertAdjacentHTML('beforeend', markupMovie);
};
const genres = movieSearch.fetchGenresMovie().then(genre => GENRES.push(...genre.genres));
console.log(GENRES);
const movie = movieSearch.fetchPopularMovie().then(renderImg);
