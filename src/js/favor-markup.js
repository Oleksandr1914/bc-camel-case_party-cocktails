import openMod from './favor-modal';
import { buttonSwitcher } from './favourites';
const STORAGE_KEY = 'favorite-cocktail';

export default function renderFavCard() {
  const localCocktails = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  // const markUp =
  document.querySelector('.coctails__list').innerHTML = localCocktails
    .map(
      cocktail =>
        `<div class="cocktails__card">
                <div>
                    <img width="280" class="cocktails__img" src=${
                      cocktail.src
                    } alt= ${cocktail.alt.replaceAll('_', ' ')} />
                    </div>
                    <p class="cocktail-info" >
                        ${cocktail.text.replaceAll('_', ' ')}</p>
                    <div class="button-wrapper">
                    <button class="btn-lm" type="button">Learn more</button>
                    <button class="btn-remove" type="button">remove</button>
                  </div>
                </div>`
    )
    .join('');
  //   document
  //     .querySelector('.coctails__list')
  //     .insertAdjacentHTML('beforeEnd', markUp);
  document.querySelector('.coctails__list').addEventListener('click', event => {
    if (event.target.textContent === 'Learn more') {
      openMod(event);
    } else if (event.target.textContent === 'remove') {
      onRemoveBtn(event);
    }
  });
  if (
    !document
      .querySelector('.favorite__text')
      .classList.contains('is-hidden-title')
  ) {
    document.querySelector('.favorite__text').classList.add('is-hidden-title');
  }
}
renderFavCard();

function onRemoveBtn(event) {
  const STORAGE_KEY = 'favorite-cocktail';
  const localCocktails = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  const eventCard = event.path[2].childNodes[3].innerText.replaceAll(' ', '_');

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      localCocktails.filter(cocktail => cocktail.text !== eventCard)
    )
  );
  renderFavCard();
}
