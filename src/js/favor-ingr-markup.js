const INGREDIENTS_KEY = 'Ingredients';

function renderIngrCard() {
  const localCocktails =
    JSON.parse(localStorage.getItem(INGREDIENTS_KEY)) || [];
  console.log(localCocktails);
  document.querySelector('.ingredient__card-list').innerHTML = localCocktails
    .map(
      cocktail => `<li class="ingredient__card">
        <div>
          <h2 class="ingredient__card-title">${cocktail.name}</h2>
          <p class="ingredient__card-text">${cocktail.nameTwo}</p>
          <div class="btn__list">
            <button type="button" class="btn__learn-more">Learn more</button>
            <button type="button" class="btn__remove">
              Remove
              <svg class="btn__icon" width="21" height="19">
                <use href="/sprite.6e20b4c5.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`
    )
    .join('');
  document
    .querySelector('.ingredient__card-list')
    .addEventListener('click', clickLearn);
}
renderIngrCard();
function clickLearn(event) {
  if (event.target.textContent === 'Learn more') {
    openModI(event);
  }
}

function openModI() {}
