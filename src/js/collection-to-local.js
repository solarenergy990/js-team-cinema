import {  } from "./watchedCollection";

const Link = {
  HOME: 'home-bgc-container',
  LIBRARY: 'library-bgc-container',
};

let linkData = '';
const filmsCollection = e => { 
    if (e.target.classList.contains('js-library')) {
        linkData = Link.LIBRARY;
        refs.homeBgcContainer.classList.replace(Link.HOME, Link.LIBRARY);
        
    } else {
        linkData = Link.HOME;
        refs.homeBgcContainer.classList.replace(Link.LIBRARY, Link.HOME);
    };
    
    localStorage.setItem('link', linkData);  
};

const savedCollection = () => {
    const currentLink = localStorage.getItem('link');
    refs.homeBgcContainer.classList.add(currentLink);
    if (currentLink === Link.LIBRARY) {
        refs.filmGallery.innerHTML = '';
        refs.containerWatchedFilms.innerHTML = ' ';
        // renderWatchedBtn()
        renderButton();
        renderWatchedCollection()
        refs.itemHome.classList.remove('current');
        refs.itemLibrary.classList.add('current');
    }
    else {
        refs.itemLibrary.classList.remove('current');
        refs.itemHome.classList.add('current');
    };
};

export { filmsCollection, savedCollection };