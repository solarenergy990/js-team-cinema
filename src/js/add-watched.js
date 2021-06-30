import WatchedCollection from "./watchedCollection";
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
const watchedCollection = new WatchedCollection()
const movieSearch = new MovieSearch();

const onBtnWatchedClick = () => {
    const movieId = getMovieId()
    watchedCollection.addMovie(movieId)
    watchedCollectionToLocal()
    successNotificationWatched()
    closeModal()
}
let isMovieId=''
const onBtnDelete = e => {
    isMovieId = event.target.closest('li').getAttribute('data-id');
    // const id = getMovieId()
    watchedCollection.deleteMovie(isMovieId);
    watchedCollectionToLocal()
    savedWatchedCollection()
}

function renderWatchedCollection() {
    refs.containerWatchedFilms.innerHTML = ' ';
    const watched = watchedCollection.getWatchedCollection().map(film => movieSearch.fetchDetailsMovie(film).then(renderMovie));
    
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
    const btnDelete = getBtnDelete(movie.id)
    console.log(btnDelete)
    btnDelete.addEventListener('click', onBtnDelete);
}

function getBtnDelete(id) {
  const btnDelete = document.querySelector(`[data-film="${id}"]`)
  return btnDelete;
}

let watchedData = []
function watchedCollectionToLocal() {
    
    watchedData = [...watchedCollection.getWatchedCollection()]
    const watched = JSON.stringify(watchedData)
    localStorage.setItem('watchedCollection', watched);
}

function renderWatchedCollectionFromLocal(watchedData) {
    if (watchedData === null) {
        return
    }
    refs.containerWatchedFilms.innerHTML = ' ';
    const watchedCol = JSON.parse(watchedData).map(film => movieSearch.fetchDetailsMovie(film).then(renderMovie));  
}

function savedWatchedCollection() {
    refs.containerWatchedFilms.innerHTML = ' ';
    const currentCollection = localStorage.getItem('watchedCollection');
    renderWatchedCollectionFromLocal(currentCollection);

};

export {onBtnWatchedClick, onBtnDelete, renderWatchedCollection, savedWatchedCollection}