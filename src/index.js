// index.js is for imports
// for every single task teammate creates appropriate js file in js folder
import './sass/main.scss';
import './js/header';
// import './js/gallery';
import './js/link-to-localstorage';
import './js/renderMovie';
import './js/modal';
import './js/pagination';
import './js/searchBtn';
import './js/add-watched';
import './js/add-queue';
import './js/watchedCollection';
import './js/queueCollection';
// import './js/auth';
import './js/theme';
import './js/engine';
import './js/to-top';
import './js/modalTeem';
import './js/collection-to-local';
import { savedLink } from "./js/link-to-localstorage";
savedLink();
import { savedQueueCollection } from "./js/add-queue";
savedQueueCollection();
import { savedWatchedCollection} from './js/add-watched';
savedWatchedCollection();