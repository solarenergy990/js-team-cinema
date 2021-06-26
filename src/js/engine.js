import filmCard from '../templates/filmCardFirebase.hbs';
import getRefs from './getRefs';

const refs = getRefs();
let checkID = null;
//create element and render library 'watched' films

const onWatchedLibraryClick = evt => {
  if (evt.target.classList.contains('js-watched-btn')) {
    renderWatchedBtn();
  }
};

addEventListener('click', onWatchedLibraryClick);

const onQueueLibraryClick = evt => {
  if (evt.target.classList.contains('js-watched-que')) {
    renderQueueBtn();
  }
};

addEventListener('click', onQueueLibraryClick);

refs.btnMyLibrary.addEventListener('click', () => {
  refs.containerWatchedFilms.innerHTML = ' ';
});

function renderWatchedBtn() {
  refs.containerWatchedFilms.innerHTML = ' ';
  db.collection('watched')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        renderWatched(doc);
      });
    });
}

function renderQueueBtn() {
  refs.containerWatchedFilms.innerHTML = ' ';
  db.collection('queue')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        renderWatched(doc);
      });
    });
}

const renderWatched = doc => {
  console.log(doc.id);
  const addDeleteByIdClick = evt => {
    if (evt.target.classList.contains(`js-add-to-delete`)) {
      addDeleteById();
    }
  };
  addEventListener('click', addDeleteByIdClick);
  function addDeleteById() {
    console.log('delete');
  }
  const li = filmCard(doc.data());
  refs.containerWatchedFilms.insertAdjacentHTML('beforeend', li);
};
