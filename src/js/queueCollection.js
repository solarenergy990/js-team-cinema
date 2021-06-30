import { successNotificationQueueRemove,errorNotificationRepeatFilm } from './pnotify';

export default class QueueCollection {
    constructor() {
        this.queueCollection = [];
    };

    addMovieQueue(movieId) {
        if (this.queueCollection.includes(movieId)) {
        errorNotificationRepeatFilm()
        return;
    };
        this.queueCollection.push(movieId);
        console.log(this.queueCollection)
    };
    
    deleteMovieQueue(movieId) {
    if (this.queueCollection.includes(movieId)) {
        const index = this.queueCollection.indexOf(movieId)
        successNotificationQueueRemove()
        this.queueCollection.splice(index, 1);
        }
        console.log(this.queueCollection)
    };

    getQueueCollection() {
        return this.queueCollection;
    }

};


