// import { currPage } from './pagination';
const API_KEY = '5a9486e7363af1432b87b7a7303a7852';

let currP = 1;

export default class MovieSearch {
  constructor() {
    this.page = 1;
    this.query = '';
  }

  fetchPopularMovie() {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${currP}`,
    ).then(response => {
      if (response.ok) {
        // console.log(page);
        this.page = currP;
        console.log('this.page-', this.page);
        return response.json();
      }
      throw new Error('Error fetching data');
    });
  }

  fetchMovieSearch() {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=${currP}&query=${this.query}`,
    ).then(response => {
      if (response.ok) {
        // console.log(page);
        this.page += 1;
        return response.json();
      }
      throw new Error('Error fetching data');
    });
  }

  fetchDetailsMovie(movie_id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
    ).then(response => {
      if (response.ok) {
        // console.log(page);
        this.page += 1;
        return response.json();
      }
      throw new Error('Error fetching data');
    });
  }

  fetchGenresMovie() {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(({ genres }) => genres);
  }

  resetPage() {
    this.page = 1;
    // console.log(page);
  }

  incrementPage() {
    this.page += 1;
    // currentPage();
  }

  decrementPage() {
    this.page -= 1;
  }

  get pageQuery() {
    return this.query;
  }

  set pageQuery(newQuery) {
    this.query = newQuery;
  }

  get currentPage() {
    return this.page;
  }

  set currentPage(newPage) {
    // console.log('setter page', newPage);
    this.page = newPage;
    currP = newPage;
    return newPage;
  }
}
