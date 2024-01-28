const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => {
  document.body.classList.toggle('modal-open');
  mobileMenu.classList.toggle('is-open');
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');

// function onOpenModalr() {
//   addListenerBtn.addEventListener('Click', () => {
//     addListenerBtn.classList('js-open-modal');
//   });
// }

// function onCloseModal() {
//   removeListenerBtn.removeEventListener('Click', () => {
//     removeListenerBtn.classList('js-open-modal');
//   });
// }
