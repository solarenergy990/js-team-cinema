import libraryHeaderTpl from '../templates/libraryHeaderTpl.hbs';
import { chooseRefs } from './libraryBtnRefs';
const libraryPage = document.querySelector('.js-library');

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
  const libraryHeaderMarkUp = homeContainer.insertAdjacentHTML('beforeend', libraryHeaderTpl());
  itemHome.classList.remove('current');
  itemLibrary.classList.add('current');
  const btnRefs = chooseRefs();
  btnRefs.watchedBtn.addEventListener('click', e => console.log(e));
  // navLink.classList.add('disabled');
}

libraryPage.addEventListener('click', onLibraryPageClick);
