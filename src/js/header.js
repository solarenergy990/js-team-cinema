import libraryHeaderTpl from '../templates/libraryHeaderTpl.hbs';
const libraryPage = document.querySelector('.js-library');

// const signIn = document.querySelector('[data-action="registerIn"]');
// const headerBtnSignIn = document.querySelector('[data-action="Sind-In"]');
// const headerBtnSignUp = document.querySelector('[data-action="registerUp"]');

// const pageHeader = document.querySelector('.page-header');

// function onLibraryPageClick(e) {
//   e.preventDefault();

//   const homeBgcContainer = document.getElementById('home');
//   homeBgcContainer.remove();
//   pageHeader.insertAdjacentHTML('beforeend', libraryHeaderTpl());
// }

// вариант #2
const homeBgcContainer = document.getElementById('home');
const homeContainer = document.getElementById('home-container');
const formContainer = document.querySelector('.form-container');
// const navLink = document.querySelector('.nav-link');
const itemHome = document.querySelector('.item-home');
const itemLibrary = document.querySelector('.item-library');

function onLibraryPageClick(e) {
  e.preventDefault();
  homeContainer.classList.replace('home-container', 'library-container');
  homeBgcContainer.classList.replace('home-bgc-container', 'library-bgc-container');

  if (!document.body.contains(formContainer)) {
    return;
  }
  formContainer.remove();
  homeContainer.insertAdjacentHTML('beforeend', libraryHeaderTpl());
  // navLink.classList.add('disabled');
  itemHome.classList.remove('current');
  itemLibrary.classList.add('current');
}

// function onSignInBtnClick(e) {
//   libraryPage.classList.remove('visually-hidden');
//   headerBtnSignIn.classList.add('visually-hidden');
// }
// function onSignUpBtnClick(e) {
//   libraryPage.classList.remove('visually-hidden');
//   headerBtnSignIn.classList.add('visually-hidden');
// }

libraryPage.addEventListener('click', onLibraryPageClick);
// signIn.addEventListener('click', onSignInBtnClick);
// headerBtnSignUp.addEventListener('click', onSignUpBtnClick);
