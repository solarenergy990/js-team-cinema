export const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
  backdropMoviecard: document.querySelector('.backdrop-movie-card'),
};

export function openModal() {
  refs.modal.classList.remove('backdrop-hidden');
  refs.body.classList.add('modal-open');
  refs.closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', onKeyPress);
  refs.backdropMoviecard.addEventListener('click', onBackdropClick);
}

export function closeModal() {
  refs.modal.classList.add('backdrop-hidden');
  refs.body.classList.remove('modal-open');
  refs.closeModalBtn.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', onKeyPress);
  refs.backdropMoviecard.removeEventListener('click', onBackdropClick);
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
