export default class Spinner {
  constructor({ selector }) {
    this.ref = this.getRef(selector);
  }

  getRef(selector) {
    return document.querySelector('.spinner');
  }

  disable() {
    this.ref.classList.add('visually-hidden');
  }

  enable() {
    this.ref.classList.remove('visually-hidden');
  }
}
