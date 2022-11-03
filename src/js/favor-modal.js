import openModIngr from './modal-ingredients';

export default function openMod(event) {
  if (event.target.textContent == 'Learn more') {
    document.querySelector('.backdrop').classList.remove('is-hidden');
    document.body.classList.toggle('_lock');
    const nameCocktail =
      event.path[2].childNodes[3].attributes[1].ownerElement.innerText;
    console.dir(event);
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameCocktail}`
    )
      .then(res => res.json())
      .then(data => {
        const markup = Object.keys(data.drinks[0])
          .filter(el => el.includes('strIngredient') && data.drinks[0][el])
          .map(
            elem => `<li>
                <a href="#" class="modal__ing-input">
                  <span class="modal-star">✶</span> ${data.drinks[0][elem]}
                </a>
              </li>`
          )
          .join('');
        const string = `
        <div class="modal-flex">
          <h1 class="modal__title">${data.drinks[0].strDrink}</h1>

          <div class="modal-order">
            <h2 class="modal__inst">INSTRACTIONS:</h2>
            <p class="modal__text">${data.drinks[0].strInstructions}</p>
          </div>
          <div>
            <img src=${data.drinks[0].strDrinkThumb} class="modal__img" />
          </div>

          <div class="modal__block-ing">
            <h1 class="modal__title-tablet">${data.drinks[0].strDrink}</h1>
            <h2 class="modal__ing">INGREDIENTS</h2>
            <p class="modal__per-cocktail">Per cocktail</p>

            <ul class="modal__ing-all">
              ${markup}
            </ul>
          </div>
        </div>
        <button type="submit" class="modal__button-add">Add to favorite</button>
      </div>`;
        document
          .querySelector('.modal')
          .insertAdjacentHTML('beforeend', string);
        document
          .querySelector('.modal__ing-all')
          .addEventListener('click', onClickCallModalIng);
        document
          .querySelector('.modal-icon-close')
          .addEventListener('click', CloseModalCocktails);
      });

    ref.hidden.addEventListener('click', onClickBackdrop);
  }
}

const ref = {
  buttonCloseCocktails: document.querySelector('.modal__close'),
  hidden: document.querySelector('.backdrop'),
  callModalIng: document.querySelector('.modal__ing-all'),
};

function CloseModalCocktails(event) {
  document.querySelector('.mod').innerHTML = `<div class="modal">
          <button type="button" class="modal__close" cocktails-close>
            <svg class="modal-icon-close" width="32" Height="32">
              <use href="/sprite.6e20b4c5.svg#icon-close"></use>
            </svg>
          </button></div>`;
  document
    .querySelector('[data-modal=modal-cocktails]')
    .classList.add('is-hidden');
  document.body.classList.remove('_lock');
}

function onClickBackdrop(event) {
  if (event.currentTarget === event.target) {
    CloseModalCocktails();
    document.body.classList.remove('_lock');
  }
}

function onClickCallModalIng(event) {
  document
    .querySelector('[data-modal=modal]')
    .classList.remove('is-hidden-ing');
  openModIngr(event);
}
