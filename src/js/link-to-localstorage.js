import {renderButton} from "./header";
import { renderWatchedBtn, renderQueueBtn } from "./engine";
import getRefs from "./getRefs";
// import { homeLinkIsActive, libraryLinkIsActive } from "./activeMenuLink";
// import renderSearchInput from "./renderSearchInput";

const refs = getRefs()

const Collection = {
  HOME: 'home-bgc-container',
  LIBRARY: 'library-bgc-container',
};

let collectionData = '';
const onChangeCollection = e => { 
    if (e.target.classList.contains('js-library')) {
        collectionData = Collection.LIBRARY;
        refs.homeBgcContainer.classList.replace(Collection.HOME, Collection.LIBRARY);
        
    } else {
        collectionData = Collection.HOME;
        refs.homeBgcContainer.classList.replace(Collection.LIBRARY, Collection.HOME);
    };
    
    localStorage.setItem('collection', collectionData);  
};

const savedCollection = () => {
    const currentCollection = localStorage.getItem('collection');
    refs.homeBgcContainer.classList.add(currentCollection);
    if (currentCollection === Collection.LIBRARY) {
        refs.filmGallery.innerHTML = '';
        refs.containerWatchedFilms.innerHTML = ' ';
        renderWatchedBtn()
        renderButton();
        refs.itemHome.classList.remove('current');
        refs.itemLibrary.classList.add('current');
    }
    else {
        refs.itemLibrary.classList.remove('current');
        refs.itemHome.classList.add('current');
    };
};

export { onChangeCollection, savedCollection };

