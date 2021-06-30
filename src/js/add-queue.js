import QueueCollection from "./queueCollection";
import { getMovieId,closeModal } from "./modal"
import filmCardFireBase from "../templates/filmCardFireBase.hbs";
// import { renderMovie } from "./renderMovie";
import getRefs from "./getRefs";
import MovieSearch from './apiService.js';
import {
  successNotificationWatched,
  successNotificationQueue,
  errorNotificationRepeatFilm,
} from './pnotify';

const refs = getRefs()
const queueCollection = new QueueCollection()
const movieSearch = new MovieSearch();

const onBtnQueueClick = () => {
    const movieId = getMovieId()
    queueCollection.addMovieQueue(movieId)
    successNotificationQueue()
    queueCollectionToLocal()
    closeModal()
}
let isMovieId=''
const onBtnDeleteQueue = e => {
    isMovieId = event.target.closest('li').getAttribute('data-id');
    // const id = getMovieId()
    console.log('queue')
    queueCollection.deleteMovieQueue(isMovieId);
    queueCollectionToLocal()
    savedQueueCollection()
}

function renderQueueCollection() {
    refs.containerWatchedFilms.innerHTML = ' ';
    const queue = queueCollection.getQueueCollection().map(film => movieSearch.fetchDetailsMovie(film).then(renderMovie));  
}

let filmValue=null
async function renderMovie(movie) {
    filmValue = movie
    const movieDetails = movie;
    movieDetails.release_date = movieDetails.release_date.slice(0, 4);
    const genres = movieDetails.genres
    movieDetails.genre_ids = genres.map(genre => {
        return ` ` + genre.name;
    } 
    );
  const cardMarkup = await filmCardFireBase(movieDetails);
  await refs.containerWatchedFilms.insertAdjacentHTML('beforeend', cardMarkup);
    const btnDelete = getBtnDeleteQueue(movie.id)
    console.log(btnDelete)
    btnDelete.addEventListener('click', onBtnDeleteQueue);
}

function getBtnDeleteQueue(id) {
  const btnDelete = document.querySelector(`[data-film="${id}"]`)
  return btnDelete;
}

let queueData = []
function queueCollectionToLocal() {
    
    queueData = [...queueCollection.getQueueCollection()]
    const queue = JSON.stringify(queueData)
    localStorage.setItem('queueCollection', queue);
}

function renderQueueCollectionFromLocal(queueData) {
    if (queueData === null) {
        return
    }
    refs.containerWatchedFilms.innerHTML = ' ';
    const queueCol = JSON.parse(queueData).map(film => movieSearch.fetchDetailsMovie(film).then(renderMovie));  
}

function savedQueueCollection() {
    refs.containerWatchedFilms.innerHTML = ' ';
    const currentCollection = localStorage.getItem('queueCollection');
    renderQueueCollectionFromLocal(currentCollection);
};

export {onBtnQueueClick, onBtnDeleteQueue, renderQueueCollection, savedQueueCollection}