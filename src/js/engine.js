import filmCard from '../templates/filmCardFirebase.hbs';
import getRefs from './getRefs';
import { successNotificationWatchedRemove, successNotificationQueueRemove } from './pnotify';

const refs = getRefs();

const onWatchedLibraryClick = evt => {
  if (evt.target.classList.contains('js-watched-btn')) {
    renderWatchedBtn();
    const btnRefs = onBtnDelete();
    btnRefs.watched.classList.add('button-active');
    btnRefs.queue.classList.remove('button-active');
  }
};

addEventListener('click', onWatchedLibraryClick);

const onQueueLibraryClick = evt => {
  if (evt.target.classList.contains('js-watched-que')) {
    renderQueueBtn();
    const btnRefs = onBtnDelete();
    btnRefs.queue.classList.add('button-active');
    btnRefs.watched.classList.remove('button-active');
  }
};

addEventListener('click', onQueueLibraryClick);

refs.btnMyLibrary.addEventListener('click', () => {
  refs.containerWatchedFilms.innerHTML = ' ';
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

function onBtnDelete(id, collection) {
  const refs = {
    btnDelete: document.querySelector(`[data-film="${id}"]`),
    watched: document.querySelector('.js-watched-btn'),
    queue: document.querySelector('.js-watched-que'),
  };
  return refs;
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
  const addDeleteWatchedByIdClick = e => {
    if (e.target.classList.value === 'watched btnremove') {
      addDeleteWatchedById();
    } else if (e.target.classList.value === 'queue btnremove') {
      addDeleteQueueById();
    }
  };

  function addDeleteWatchedById() {
    db.collection('watched')
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        renderWatchedBtn();
        successNotificationWatchedRemove();
      })
      .catch(error => console.log('error doc', error));
  }

  function addDeleteQueueById() {
    db.collection('queue')
      .doc(`${doc.id}`)
      .delete()
      .then(() => {
        renderQueueBtn();
        successNotificationQueueRemove();
      })
      .catch(error => console.log('error doc', error));
  }
  btnRefs.btnDelete.addEventListener('click', addDeleteWatchedByIdClick);
};

export { renderWatchedBtn, renderQueueBtn };
