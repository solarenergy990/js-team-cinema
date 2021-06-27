export default function getRefs() {
  return {
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    btnRegisterIn: document.querySelector('[data-action="registerIn"]'),
    btnRegisterUp: document.querySelector('[data-action="registerUp"]'),
    modalBtn: document.querySelector('[data-action="Sind-In"]'),
    modalSingIn: document.querySelector('.formRegistr'),

    // btnWatched: document.querySelector('[data-action="add-to-watched"]'),
    // btnQueue: document.querySelector('[data-action="add-to-queue"]'),
    btnMyLibrary: document.querySelector('.js-library'),
    btnHome: document.querySelector('.js-home'),
    containerWatchedFilms: document.querySelector('.gallery'),
    watched: document.querySelector('#Watched'),
    queue: document.querySelector('#que'),

    header: document.querySelector('.page-header'),
    scrollToTop: document.querySelector('#scrollTop'),
    filmGallery: document.querySelector('.gallery'),
    searchFilm: document.querySelector('.form-container'),

    arrowLeft: document.querySelector('.page-prev'),
    arrowRight: document.querySelector('.page-next'),
    firstPage: document.querySelector('.page-item-first'),
    prevPage: document.querySelector('.page-item-prev'),
    currentPage: document.querySelector('.page-item-current'),
    nextPage: document.querySelector('.page-item-next'),
    lastPage: document.querySelector('.page-item-last'),
  };
}
