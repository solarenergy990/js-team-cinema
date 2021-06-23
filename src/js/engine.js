import filmCard from '../templates/filmCardTemplate.hbs';
import getRefs from './getRefs';

const refs = getRefs();

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

const renderWatched = doc => {
  console.log(doc.data());
  const { id, title, genre_ids, poster_path, backdrop_path, vote_average, release_date } =
    doc.data();
  const li = `
  <li class="gallery-item-card" data-id="${id}">
    <div class="poster-container">
      <img
        class="poster"
        src="${poster_path}"
        data-source="${backdrop_path}"
        alt="Poster-film"
      />
    </div>
    <div class="text-container">
      <h2 class="text-title">${title}</h2>
      <div class="text-details">
        <p class="text-ganre">${genre_ids} | ${release_date}</p>
        <p class="text-rating">${vote_average}</p>
      </div>
    </div>
  </li>
  `;
  refs.containerWatchedFilms.insertAdjacentHTML('beforeend', li);
};

//get watched films


refs.btnWatched.addEventListener('click', addWatchedById);
refs.btnQueue.addEventListener('click', addQueueById);

refs.btnMyLibrary.addEventListener('click', () => {
  refs.containerWatchedFilms.innerHTML = ' ';
});

function renderWatchedBtn() {
  db.collection('watched')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        renderWatched(doc);
      });
    });
}

function renderQueueBtn() {
  db.collection('queue')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        renderWatched(doc);
      });
    });
}

function addWatchedById() {
  db.collection('watched').add({
    id: myCollection.id,
    poster_path: dataBase.poster_path,
    backdrop_path: dataBase.backdrop_path,
    title: dataBase.title,
    genre_ids: dataBase.genre_ids,
    release_date: dataBase.release_date,
    vote_average: dataBase.vote_average,
  });
}

function addQueueById() {
  db.collection('queue').add({
    id: '123456',
    poster_path: 'https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
    backdrop_path: 'my films',
    title: 'new film in VS',
    genre_ids: '1111',
    release_date: '999',
    vote_average: '999',
  });
}
