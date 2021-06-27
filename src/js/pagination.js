// // fetch(
// //   'https://api.themoviedb.org/4/list/20?page=1&api_key=5a9486e7363af1432b87b7a7303a7852&language=en',
// // ).then(response => {
// //   console.log(response);
// // });
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

// const initPagination = () => {
//   const container = document.querySelector('#pagination');

//   const pagination = new Pagination(container, {
//     totalItems: 60,
//     itemsPerPage: 20,
//     visiblePages: 5,
//     centerAlign: true,
//   });

//   pagination.on('beforeMove', function (eventData) {
//     const params = new URLSearchParams(window.location.search);
//     params.set('page', eventData.page);
//     history.pushState(null, null, '?' + params.toString());
//   });

//   pagination.on('afterMove', function (eventData) {
//     if (pagination._options.totalItems <= 20) {
//       container.innerHTML = '';
//     }
//   });

//   return pagination;
// };

// export { initPagination as default };
