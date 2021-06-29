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
  renderWatchedBtn();
});

async function renderWatchedBtn() {
  refs.containerWatchedFilms.innerHTML = ' ';
  await db
    .collection('watched')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        renderWatched(doc);
      });
    });
}

function onBtnDelete(id) {
  const btnDelete = document.querySelector(`[data-film="${id}"]`);
  return btnDelete;
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
// let btnId = '';
const renderWatched = async doc => {
  const li = await filmCard(doc.data());
  await refs.containerWatchedFilms.insertAdjacentHTML('beforeend', li);
  const id = await doc.data().id;
  const btnRefs = onBtnDelete(id);

  const addDeleteByIdClick = evt => {
    addDeleteByIdWatched();
    addDeleteByIdQueue();
  };
  function addDeleteByIdWatched() {
    db.collection('watched')
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        console.log('delete doc');
        renderWatchedBtn();
      })
      .catch(error => console.log('error doc', error));
    console.log('delete');
  }
  function addDeleteByIdQueue() {
    db.collection('queue')
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        console.log('delete doc');
        renderQueueBtn();
      })
      .catch(error => console.log('error doc', error));
    console.log('delete');
  }
  btnRefs.addEventListener('click', addDeleteByIdClick);
};
