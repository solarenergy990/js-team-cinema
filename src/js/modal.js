const refs = {
  movieCardContainer: document.querySelector('.gallery'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

refs.movieCardContainer.addEventListener('click', onGalleryClick);

function onGalleryClick() {
  openModal();
};

function openModal() {
  refs.modal.classList.remove('backdrop-hidden');
  refs.body.classList.add('modal-open');
  refs.closeModalBtn.addEventListener('click', onCloseBtnClick);
  window.addEventListener('keydown', onKeyPress);
};

function onCloseBtnClick() {
  refs.modal.classList.add('backdrop-hidden');
  refs.body.classList.remove('modal-open');
  refs.closeModalBtn.removeEventListener('click', onCloseBtnClick);
  window.removeEventListener('keydown', onKeyPress);
};

function onKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseBtnClick();
  }
};
