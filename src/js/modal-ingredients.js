const buttonCloseIngredients = document.querySelector(
  '.modal__close[ingredients-close]'
);
const refBackdrop = document.querySelector('.backdrop-ingredients');

buttonCloseIngredients.addEventListener('click', CloseModalIngredients);
refBackdrop.addEventListener('click', onBackdropClick);

function CloseModalIngredients() {
  document.querySelector('.mob-ing').innerHTML = `
          <div class="modal-ingredients">
          <button type="button" class="modal__close" ingredients-close>
          <svg class="modal-icon-close" width="32" Height="32">
            <use href="/sprite.6e20b4c5.svg#icon-close"></use>
          </svg>
        </button></div>`;
  const dataModal = document.querySelector('[data-modal=modal]');
  dataModal.classList.add('is-hidden-ing');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    CloseModalIngredients();
  }
}

export default function openModIngr(event) {
  const nameIngr = event.target.innerText.slice(2).toLowerCase();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${nameIngr}`)
    .then(res => res.json())
    .then(data => {
      const dataIngr = data.ingredients[0];
      let type = dataIngr.strType;
      let alko = dataIngr.strABV;
      let text = dataIngr.strDescription;
      if (!type) {
        type = '';
      }
      if (!alko) {
        alko = 0;
      }
      if (!text) {
        text = '';
      }

      const stingIng = `<div>
          <div class="modal-ingredients__border">
            <h1 class="modal-ingredients__title">${dataIngr.strIngredient}</h1>
            <h2 class="modal-ingredients__inst">${type}</h2>
          </div>

          <p class="modal-ingredients__text">${text}</p>
        </div>

        <ul class="modal-ingredients__ing-all">
          <li>
            <a href="#" class="modal-ingredients__ing-input">
              <span class="modal-ingredients-star">✶</span> Type:${type}
            </a>
          </li>
          <li>
            <a href="#" class="modal-ingredients__ing-input">
              <span class="modal-ingredients-star">✶</span> Alcohol by volume:
              ${alko}%
            </a>
          </li>
        </ul>

        <button type="submit" class="modal-ingredients__button-add">
          Add to favorite
        </button>`;
      document
        .querySelector('.modal-ingredients')
        .insertAdjacentHTML('beforeend', stingIng);
      document
        .querySelector('.modal__close[ingredients-close]')
        .addEventListener('click', CloseModalIngredients);
    });
}
