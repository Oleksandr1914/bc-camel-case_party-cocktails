const buttonCloseIngredients = document.querySelector(
  '.modal__close[ingredients-close]'
);
console.dir(buttonCloseIngredients);
buttonCloseIngredients.addEventListener('click', CloseModalIngredients);

function CloseModalIngredients() {
  const dataModal = document.querySelector('[data-modal=modal]');

  dataModal.classList.add('is-hidden');
}
