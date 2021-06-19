import axios from 'axios';

const refs = {
  firstName: document.querySelector('fitstName'),
  lastName: document.querySelector('lastName'),
  btnRegisterIn: document.querySelector('[data-action="registerIn"]'),
  btnRegisterUp: document.querySelector('[data-action="registerUp"]'),
};

const KEY_API = 'AIzaSyAY117Vq2U0EBD0gCvjldU0m1QtGVSMetY';
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1';

refs.btnRegisterUp.addEventListener('click', createRegister);

async function createRegister() {
  const option = {
    email: 'sahsa@mail.com',
    password: '123456',
    returnSecureToken: true,
  };
  try {
    const response = await axios.post(`${BASE_URL}/accounts:signUp?key=${KEY_API}`, option);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
