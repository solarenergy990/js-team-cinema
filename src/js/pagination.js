fetch(
  'https://api.themoviedb.org/4/list/20?page=1&api_key=5a9486e7363af1432b87b7a7303a7852&language=en',
).then(response => {
  console.log(response);
});
