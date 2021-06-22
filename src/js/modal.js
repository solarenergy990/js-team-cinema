import MovieSearch from './apiService.js';
import modalMovieTemplate from '../templates/modalMovieTemplate.hbs';

const movieSearch = new MovieSearch();
const GENRES = [];
const refs = {
  filmCard: document.querySelector('.movie-card'),
  movieCardContainer: document.querySelector('.gallery'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
  backdropMoviecard: document.querySelector('.backdrop-movie-card'),
};

refs.movieCardContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  refs.filmCard.innerHTML = '';
  const isGallery = event.target.classList.contains('gallery');

  if (isGallery) {
    return;
  };

  openModal();
  const isMovieId = event.target.closest('li').getAttribute('data-id');
  movieSearch.fetchDetailsMovie(isMovieId).then(renderModalMovie);
};

function openModal() {
  refs.modal.classList.remove('backdrop-hidden');
  refs.body.classList.add('modal-open');
  refs.closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', onKeyPress);
  refs.backdropMoviecard.addEventListener('click', onBackdropClick);
};

function closeModal() {
  refs.modal.classList.add('backdrop-hidden');
  refs.body.classList.remove('modal-open');
  refs.closeModalBtn.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', onKeyPress);
  refs.backdropMoviecard.removeEventListener('click', onBackdropClick);
};

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
};

function onKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
};

function renderModalMovie(movie) {
  const movieDetails = movie;
  console.log(movieDetails);
  movieDetails.popularity = movieDetails.popularity.toFixed(1);
  movieDetails.genres = movieDetails.genres.map(genre => {
    return ` ` + genre.name;
  });
   const cardMarkup = modalMovieTemplate(movieDetails);
  refs.filmCard.insertAdjacentHTML('beforeend', cardMarkup)
};
