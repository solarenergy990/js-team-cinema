import MovieSearch from './apiService.js';
import filmCardTemplate from '../templates/filmCardTemplate.hbs';
const GENRES = [];
const movieSearch = new MovieSearch();

const renderImg = movies => {
  //   const id = movies.results.map(movies => movies.genre_ids);
  const markup = movies.results
    .map(movies => {
      // console.log(movies.genre_ids);
      filmCardTemplate(movies);
    })
    .join('');

  //   console.log(id);
};
const genres = movieSearch.fetchGenresMovie().then(genre => GENRES.push(...genre.genres));
// console.log(GENRES);
const movie = movieSearch.fetchPopularMovie().then(renderImg);
