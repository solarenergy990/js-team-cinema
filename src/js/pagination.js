import getRefs from './getRefs.js';
import queryMovies from './queryMovies';
import MovieSearch from './apiService.js';
import { renderMovie, onSearchFilm } from './renderMovie';
import { debounce, throttle } from 'throttle-debounce';

const movieSearch = new MovieSearch();
const refs = getRefs();

let currPage = 1;
let currQuery = '';

refs.previous.hidden = true;
refs.dots1.hidden = true;

const onBtnClick = e => {
  if (e.target.tagName === 'BUTTON') {
    const activeBtn = e.target.dataset.index;
    currPage = Number(activeBtn);

    refs.previous.hidden = true;
    refs.dots1.hidden = true;

    const btn1 = refs.btnPage1;
    const btn2 = refs.btnPage2;
    const btn3 = refs.btnPage3;
    const btn4 = refs.btnPage4;
    const btn5 = refs.btnPage5;
    const previous = refs.previous;
    const next = refs.next;

    if (e.target.classList.contains('next') && currPage < 999) {
      btns.forEach(el => el.classList.remove('active'));
      btn1.classList.add('active');
      next.dataset.index = Number(next.dataset.index) + 5;
      btn1.textContent = Number(btn1.textContent) + 5;
      btn2.textContent = Number(btn2.textContent) + 5;
      btn3.textContent = Number(btn3.textContent) + 5;
      btn4.textContent = Number(btn4.textContent) + 5;
      btn5.textContent = Number(btn5.textContent) + 5;
      btn1.dataset.index = Number(btn1.dataset.index) + 5;
      btn2.dataset.index = Number(btn2.dataset.index) + 5;
      btn3.dataset.index = Number(btn3.dataset.index) + 5;
      btn4.dataset.index = Number(btn4.dataset.index) + 5;
      btn5.dataset.index = Number(btn5.dataset.index) + 5;
      currPage = Number(next.dataset.index);
      console.log(next.dataset.index);
      movieSearch.currentPage = currPage;
    }

    previous.dataset.index = currPage;

    if (e.target.classList.contains('previous') && currPage > 5) {
      next.dataset.index = Number(next.dataset.index) - 5;
      previous.dataset.index = Number(next.dataset.index);
      btn1.textContent = Number(btn1.textContent) - 5;
      btn2.textContent = Number(btn2.textContent) - 5;
      btn3.textContent = Number(btn3.textContent) - 5;
      btn4.textContent = Number(btn4.textContent) - 5;
      btn5.textContent = Number(btn5.textContent) - 5;
      btn1.dataset.index = Number(btn1.dataset.index) - 5;
      btn2.dataset.index = Number(btn2.dataset.index) - 5;
      btn3.dataset.index = Number(btn3.dataset.index) - 5;
      btn4.dataset.index = Number(btn4.dataset.index) - 5;
      btn5.dataset.index = Number(btn5.dataset.index) - 5;
      currPage = Number(previous.dataset.index);
      movieSearch.currentPage = currPage;
    }
    // console.log('currentPage>', currPage);
    if (e.target.classList.contains('btn')) {
      setBtnActiveStyle(e);
      console.log('currentPage>', currPage);
      movieSearch.currentPage = currPage;
    }

    queryMovies();
  }

  if (Number(currPage) > 5) {
    refs.previous.hidden = false;
    refs.dots1.hidden = false;
  }
  if (Number(currPage) > 995) {
    refs.next.hidden = true;
    refs.dots2.hidden = true;
  }
};

let btns = document.querySelectorAll('.btn');

function setBtnActiveStyle(event) {
  let btnEvent = event.target;
  btns.forEach(el => el.classList.remove('active'));
  if (btnEvent.classList.contains('btn')) {
    btnEvent.classList.add('active');
  }
}

const onButtonyClick = evt => {
  if (
    evt.target.classList.contains('js-watched-que') ||
    evt.target.classList.contains('js-watched-btn') ||
    evt.target.classList.contains('js-library')
  ) {
    refs.pagContainer.classList.add('visually-hidden');
  } else {
    refs.pagContainer.classList.remove('visually-hidden');
  }
};

refs.pagination.addEventListener('click', onBtnClick);
refs.header.addEventListener('click', onButtonyClick);

export { currPage };
