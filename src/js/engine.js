import filmCard from '../templates/filmCardFirebase.hbs';
import getRefs from './getRefs';

const refs = getRefs();

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

async function renderWatchedBtn() {
  refs.containerWatchedFilms.innerHTML = ' ';
  await db.collection('watched')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        renderWatched(doc);
      });
    });
}

function onBtnDelete(id, collection) {
  const btnDelete = document.querySelector(`[data-film="${id}"]`)
  return btnDelete
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

const renderWatched = async doc => {
  const li = await filmCard(doc.data());
  await refs.containerWatchedFilms.insertAdjacentHTML('beforeend', li);
  const id = await doc.data().id;
  const btnRefs = onBtnDelete(id, doc.collection);
  const addDeleteWatchedByIdClick = (e) => {
    if (e.target.classList.value === 'watched btnremove') {
      addDeleteWatchedById();
    } else if (e.target.classList.value === 'queue btnremove') {
      addDeleteQueueById()
    };
  };

  function addDeleteWatchedById() {
    db.collection('watched')
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        renderWatchedBtn()
      })
      .catch(error => console.log('error doc', error));
  }

  function addDeleteQueueById() {
    db.collection('queue')
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        renderQueueBtn()
      })
      .catch(error => console.log('error doc', error));
  }
  btnRefs.addEventListener('click', addDeleteWatchedByIdClick)
};
