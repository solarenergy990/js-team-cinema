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
    watched: document.querySelector('.js-watched-que'),
    queue: document.querySelector('.js-watched-button'),
    headerBtn: document.querySelector('.btn-container'),

    header: document.querySelector('.page-header'),

    scrollToTop: document.querySelector('#scrollTop'),
    filmGallery: document.querySelector('.gallery'),
    searchFilm: document.querySelector('.form-container'),
    searchInput: document.querySelector('.js-input'),
    searchResField: document.querySelector('.js-search-results'),
    gallery: document.querySelector('#gallery'),
    // pagination refs
    pagination: document.querySelector('.pagination'),
    btnPage1: document.querySelector('.btn-page1'),
    btnPage2: document.querySelector('.btn-page2'),
    btnPage3: document.querySelector('.btn-page3'),
    btnPage4: document.querySelector('.btn-page4'),
    btnPage5: document.querySelector('.btn-page5'),
    previous: document.querySelector('.previous'),
    next: document.querySelector('.next'),
    dots1: document.querySelector('.js-dots1'),
    dots2: document.querySelector('.js-dots2'),
    btnMore: document.querySelector('.btn-load-more'),
  };
}
