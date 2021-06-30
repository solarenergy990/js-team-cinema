import { successNotificationWatchedRemove, errorNotificationRepeatFilm } from './pnotify';

export default class WatchedCollection {
    constructor() {
        this.watchedCollection = [];
    };

    addMovie(movieId) {
        if (this.watchedCollection.includes(movieId)) {
        errorNotificationRepeatFilm()
        return;
    };
        this.watchedCollection.push(movieId);
        console.log(this.watchedCollection)
    };
    
    deleteMovie(movieId) {
    if (this.watchedCollection.includes(movieId)) {
        const index = this.watchedCollection.indexOf(movieId)
        successNotificationWatchedRemove()
        this.watchedCollection.splice(index, 1);
        }
        console.log(this.watchedCollection)
    };

    getWatchedCollection() {
        return this.watchedCollection;
    }

};


