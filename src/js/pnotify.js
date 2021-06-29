import * as Pnotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

// const notificationSpecific = () => {
//   Pnotify.error({
//     text: 'Too many matches found. Please enter a more specific query!',
//     delay: 1500,
//   });
// };

// const errorNotification = () => {
//   Pnotify.error({
//     text: 'Country is not found.',
//     delay: 1500,
//   });
// };
const successNotificationWatched = () => {
  Pnotify.success({
    text: 'The movie has been added to your Watched collection',
    delay: 1500,
  });
};
const successNotificationQueue = () => {
  Pnotify.success({
    text: 'The movie has been added to your Queue collection',
    delay: 1500,
  });
};
const successNotificationWatchedRemove = () => {
  Pnotify.success({
    text: 'Movie successfully removed from your Watched collection',
    delay: 1500,
  });
};
const successNotificationQueueRemove = () => {
  Pnotify.success({
    text: 'Movie successfully removed from your Queue collection',
    delay: 1500,
  });
};
const errorNotificationRepeatFilm = () => {
  Pnotify.error({
    text: 'Oops, this movie is already in your collection.',
    delay: 1500,
  });
};

export {
  successNotificationWatched,
  successNotificationQueue,
  successNotificationWatchedRemove,
  successNotificationQueueRemove,
  errorNotificationRepeatFilm,
};
