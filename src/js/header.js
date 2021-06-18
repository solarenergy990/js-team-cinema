import libraryHeaderTpl from '../templates/libraryHeaderTpl.hbs';
import '../sass/main.scss';
const libraryPage = document.querySelector('.js-library');
const pageHeader = document.querySelector('.page-header');

libraryPage.addEventListener('click', onLibraryPageClick);

function onLibraryPageClick(e) {
  e.preventDefault();
  const homeBgcContainer = document.getElementById('home');
  home.remove();
  pageHeader.insertAdjacentHTML('beforeend', libraryHeaderTpl());
}
