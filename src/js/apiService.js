const API_KEY = '5a9486e7363af1432b87b7a7303a7852';

export default class MovieSearch {
  constructor() {
    this.page = 2;
    this.query = '';
  }
  fetchPopularMovie() {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`,
    ).then(response => {
      if (response.ok) {
        // console.log(page);
        this.page += 1;
        return response.json();
      }
      throw new Error('Error fetching data');
    });
  }

  fetchMovieSearch() {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.query}`,
    ).then(response => {
      if (response.ok) {
        // console.log(page);
        this.page += 1;
        return response.json();
      }
      throw new Error('Error fetching data');
    });
  }

  fetchDetailsMovie() {
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
    this.page = 2;
    // console.log(page);
  }
}
