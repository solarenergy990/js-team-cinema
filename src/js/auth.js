import axios from 'axios';
import SingInBtn from './singIn';
import getRefs from './getRefs';

const refs = getRefs();

const KEY_API = 'AIzaSyAY117Vq2U0EBD0gCvjldU0m1QtGVSMetY';
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1';

refs.btnRegisterUp.addEventListener('click', registerHendler);
refs.btnRegisterIn.addEventListener('click', loginHendler);
refs.modalBtn.addEventListener('click', addModal);

function addModal() {
  refs.modalSingIn.classList.add('is-hidden-register');
}

function removeModal() {
  refs.modalSingIn.classList.remove('is-hidden-register');
}

// function getEmail(e) {
//   email = e.currentTarget.value;
// }
// function getPassword(e) {
//   if (e.currentTarget.value.length <= 6) {
//     console.log('Error');
//     return;
//   }
//   password = e.currentTarget.value;
// }

async function loginHendler() {
  removeModal();
  const authData = {
    email: refs.email.value,
    password: refs.password.value,
    returnSecureToken: true,
  };
  try {
    const response = await axios.post(
      `${BASE_URL}/accounts:signInWithPassword?key=${KEY_API}`,
      authData,
    );
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}

async function registerHendler() {
  const authData = {
    email: refs.email.value,
    password: refs.password.value,
    returnSecureToken: true,
  };
  try {
    const response = await axios.post(`${BASE_URL}/accounts:signUp?key=${KEY_API}`, authData);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}
