import MovieSearch from './apiService.js';
import modalMovieTemplate from '../templates/modalMovieTemplate.hbs';

const movieSearch = new MovieSearch();
const GENRES = [];
let movieDetailsGlobal = null;
const refs = {
  filmCard: document.querySelector('.movie-card'),
  movieCardContainer: document.querySelector('.gallery'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
  backdropMoviecard: document.querySelector('.backdrop-movie-card'),

  btnWatched: document.querySelector('#add-to-watched'),
  btnQueue: document.querySelector('#add-to-queue'),
};

refs.movieCardContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  refs.filmCard.innerHTML = '';
  const isGallery = event.target.classList.contains('gallery');

  if (isGallery) {
    return;
  }

  openModal();
  const isMovieId = event.target.closest('li').getAttribute('data-id');
  movieSearch.fetchDetailsMovie(isMovieId).then(renderModalMovie);
}

function openModal() {
  refs.modal.classList.remove('backdrop-hidden');
  refs.body.classList.add('modal-open');
  refs.closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', onKeyPress);
  refs.backdropMoviecard.addEventListener('click', onBackdropClick);
}

function closeModal() {
  refs.modal.classList.add('backdrop-hidden');
  refs.body.classList.remove('modal-open');
  refs.closeModalBtn.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', onKeyPress);
  refs.backdropMoviecard.removeEventListener('click', onBackdropClick);
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function renderModalMovie(movie) {
  movieDetailsGlobal = movie;
  const movieDetails = movie;
  movieDetails.popularity = movieDetails.popularity.toFixed(1);
  movieDetails.genres = movieDetails.genres.map(genre => {
    return ` ` + genre.name;
  });
  const cardMarkup = modalMovieTemplate(movieDetails);
  refs.filmCard.insertAdjacentHTML('beforeend', cardMarkup);
}

const addWatchedByIdClick = evt => {
  if (evt.target.classList.contains('js-add-to-watched')) {
    addWatchedById();
  }
};

addEventListener('click', addWatchedByIdClick);

const addQueueByIdClick = evt => {
  if (evt.target.classList.contains('js-add-to-queue')) {
    addQueueById();
  }
};

addEventListener('click', addQueueByIdClick);

function addWatchedById() {
  db.collection('watched')
    .get()
    .then(querySnapshot => {
      const ids = [];
      querySnapshot.forEach(doc => ids.push(doc.data().id));
      const isExist = ids.some(id => id === movieDetailsGlobal.id);
      if (!isExist) {
        db.collection('watched').add({
          id: movieDetailsGlobal.id,
          poster_path: movieDetailsGlobal.poster_path,
          backdrop_path: movieDetailsGlobal.backdrop_path,
          original_title: movieDetailsGlobal.original_title,
          genre_ids: movieDetailsGlobal.genres.map(a => a),
          release_date: movieDetailsGlobal.release_date,
          vote_average: movieDetailsGlobal.vote_average,
        });
      }
    });
  closeModal();
}

function addQueueById() {
  db.collection('queue')
    .get()
    .then(querySnapshot => {
      const ids = [];
      querySnapshot.forEach(doc => ids.push(doc.data().id));
      const isExist = ids.some(id => id === movieDetailsGlobal.id);
      if (!isExist) {
        db.collection('queue').add({
          id: movieDetailsGlobal.id,
          poster_path: movieDetailsGlobal.poster_path,
          backdrop_path: movieDetailsGlobal.backdrop_path,
          original_title: movieDetailsGlobal.original_title,
          genre_ids: movieDetailsGlobal.genres.map(a => a),
          release_date: movieDetailsGlobal.release_date,
          vote_average: movieDetailsGlobal.vote_average,
        });
      }
    });
  closeModal();
}
