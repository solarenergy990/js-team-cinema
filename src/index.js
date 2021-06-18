// index.js is for imports
// for every single task teammate creates appropriate js file in js folder
import './sass/main.scss';
import './js/header';
import galleryItemTbs from './templates/gallery-item.hbs';

const refs = {
  filmGallery: document.querySelector('.gallery'),
};
// console.log(refs.filmGallery);
// function appendGridGalleryMarkUp() {
//   refs.filmGallery.insertAdjacentHTML('beforeend', gridItemTbs);
// }

refs.filmGallery.insertAdjacentHTML('beforeend', galleryItemTbs());

