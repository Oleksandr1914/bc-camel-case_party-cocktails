import openMod from './favor-modal';
const STORAGE_KEY = 'favorite-cocktail';

function renderFavCard() {
  const localCocktails = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const markUp = localCocktails
    .map(
      cocktail =>
        `<div class="cocktails__card">
                <div>
                    <img width="280" class="cocktails__img" src=${
                      cocktail.src
                    } alt= ${cocktail.alt.replaceAll('_', ' ')} />
                    </div>
                    <p class="cocktail-info" data-cocktailID=${cocktail.id}>
                        ${cocktail.text.replaceAll('_', ' ')}</p>
                    <div class="button-wrapper">
                    <button class="btn-lm" type="button">Learn more</button>
                    <button class="btn-add" type="button">Add to</button>
                  </div>
                </div>`
    )
    .join('');
  console.log('hi');
  document
    .querySelector('.coctails__list')
    .insertAdjacentHTML('beforeEnd', markUp);
  document.querySelector('.coctails__list').addEventListener('click', event => {
    console.dir(event.target);
    if (event.target.textContent === 'Learn more') {
      openMod(event);
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
