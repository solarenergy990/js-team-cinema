import teemList from './teemList.json';
import teemListTpl from '../templates/teemListTpl.hbs';

const refs = {
  closeModalBtn: document.querySelector('[data-close-btn]'),
  modalTeemLink: document.querySelector('.footer__link'),
  modalTeem: document.querySelector('[data-modal-teem]'),
  body: document.querySelector('body'),
  backdrop: document.querySelector('.backdrop-teem'),
  teem: document.querySelector('.teem-members-list'),
};

const teemListMarkup = renderTeemList(teemList);
refs.teem.insertAdjacentHTML('beforeend', teemListMarkup);

refs.modalTeemLink.addEventListener('click', onTeemLinkClick);

function onTeemLinkClick(event) {
  event.preventDefault();

  openModal();
}

function openModal() {
  refs.modalTeem.classList.remove('backdrop-hidden');
  refs.body.classList.add('modal-open');
  refs.closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', onKeyPress);
  refs.backdrop.addEventListener('click', onBackdropClick);
}

function closeModal() {
  refs.modalTeem.classList.add('backdrop-hidden');
  refs.body.classList.remove('modal-open');
  refs.closeModalBtn.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', onKeyPress);
  refs.backdrop.removeEventListener('click', onBackdropClick);
}

export function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

export function onKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function renderTeemList(teemList) {
  return teemListTpl(teemList);
}
