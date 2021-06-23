export default class Spinner {
  constructor({ selector }) {
    this.ref = this.getRef(selector);
  }

  getRef(selector) {
    return document.querySelector('.spinner');
  }

  enable() {
    this.ref.classList.add('visually-hidden');
  }

  disable() {
    this.ref.classList.remove('visually-hidden');
  }
}
