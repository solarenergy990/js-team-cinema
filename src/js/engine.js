const refs = {
  btnWatched: document.querySelector('[data-action="add-to-watched"]'),
  btnQueue: document.querySelector('[data-action="add-to-queue"]'),
  btnMyLibrary: document.querySelector('.js-library'),
  containerWatchedFilms: document.querySelector('.gallery'),
  watched: document.querySelector('#Watched'),
  queue: document.querySelector('#que'),
};
//create element and render library 'watched' films
let exampleCounter = 0;

const onLibraryClick = evt => {
  if (
    evt.target.classList.contains('js-watched-btn') ||
    evt.target.classList.contains('js-watched-que')
  ) {
    exampleCounter += 1;
    console.log(evt.target);
    console.log(exampleCounter);
  }
};

addEventListener('click', onLibraryClick);

const renderWatched = doc => {
  const li = `
  <li class="gallery-item-card" data-id="${doc.data().id}">
    <div class="poster-container">
      <img
        class="poster"
        src="${doc.data().poster_path}"
        data-source="https://image.tmdb.org/t/p/w500%7B%7Bbackdrop_path%7D%7D"
        alt="Poster-film"
      />
    </div>
    <div class="text-container">
      <h2 class="text-title">${doc.data().title}</h2>
      <div class="text-details">
        <p class="text-ganre">${doc.data().genre_ids} | ${doc.data().release_date}</p>
        <p class="text-rating">${doc.data().vote_average}</p>
      </div>
    </div>
  </li>
  `;
  refs.containerWatchedFilms.insertAdjacentHTML('beforeend', li);
};
//click button and add modal

//get watched films

// refs.btnWatched.addEventListener('click', addWatchedById);
// refs.btnQueue.addEventListener('click', addQueueById);
// refs.watched.addEventListener('click', renderWatchedBtn);
// refs.queue.addEventListener('click', renderQueueBtn);
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
    id: '123456',
    poster_path: 'https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
    backdrop_path: 'my films',
    title: 'new film in VS',
    genre_ids: '1111',
    release_date: '999',
    vote_average: '999',
  });
}

function addQueueById() {
  //   refs.containerWatchedFilms.innerHTML = '';
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
