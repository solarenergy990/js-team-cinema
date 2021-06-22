export default function getRefs() {
  return {
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    btnRegisterIn: document.querySelector('[data-action="registerIn"]'),
    btnRegisterUp: document.querySelector('[data-action="registerUp"]'),
    modalBtn: document.querySelector('[data-action="Sind-In"]'),
    modalSingIn: document.querySelector('.formRegistr'),
    header: document.querySelector('.page-header'),
    scrollToTop: document.querySelector('#scrollTop'),
  };
}
