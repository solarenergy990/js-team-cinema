import { refs, openModal, closeModal, onBackdropClick, onKeyPress } from './modalNew';

const modalTeem = document.querySelector('.footer__link');

modalTeem.addEventListener('click', onTeemLinkClick);

function onTeemLinkClick(event) {
  event.preventDefault();
  openModal();
}
