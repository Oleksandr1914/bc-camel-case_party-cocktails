const buttonCloseIngredients = document.querySelector(
  '.modal__close[ingredients-close]'
);
const refBackdrop = document.querySelector('.backdrop-ingredients');

buttonCloseIngredients.addEventListener('click', CloseModalIngredients);
refBackdrop.addEventListener('click', onBackdropClick);

function CloseModalIngredients() {
  const dataModal = document.querySelector('[data-modal=modal]');
  dataModal.classList.add('is-hidden-ing');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    CloseModalIngredients();
  }
}
