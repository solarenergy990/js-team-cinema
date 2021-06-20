// export default class SingInBtn {
//   constructor({ selector, hidden = false }) {
//     this.refs = this.getRefs(selector);

//     hidden && this.removeModal();
//   }

//   getRefs(selector) {
//     const refs = {
//       singIn: document.querySelector(selector),
//     };

//     return refs;
//   }

//    () {
//     this.refs.singIn.classList.remove('is-hidden');
//     this.refs.singIn.disabled = false;
//   }

//   removeModal() {
//     this.refs.singIn.classList.add('is-hidden');
//     this.refs.singIn.disable = true;
//   }
// }
