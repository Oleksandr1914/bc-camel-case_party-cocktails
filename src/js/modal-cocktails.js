const ref = {
  buttonCloseCocktails: document.querySelector(
    '.modal__close[cocktails-close]'
  ),
  hidden: document.querySelector('.backdrop'),
  callModalIng: document.querySelector('.modal__ing-all'),
};

ref.buttonCloseCocktails.addEventListener('click', CloseModalCocktails);
ref.hidden.addEventListener('click', onClickBackdrop);
ref.callModalIng.addEventListener('click', onClickCallModalIng);

function CloseModalCocktails() {
  document
    .querySelector('[data-modal=modal-cocktails]')
    .classList.add('is-hidden');
}

function onClickBackdrop(event) {
  if (event.currentTarget === event.target) {
    CloseModalCocktails();
  }
}

function onClickCallModalIng() {
  document
    .querySelector('[data-modal=modal]')
    .classList.remove('is-hidden-ing');
}
