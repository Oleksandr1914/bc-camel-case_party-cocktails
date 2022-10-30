export function drinkMarkup(arr) {
  return arr
    .map(({ strDrink, strDrinkThumb }) => {
      return `<li class="cocktail__card">
                <div>
                  <img class="cocktail__img" src="${strDrinkThumb}" alt="${strDrink}" width="280">
                </div>
                <p class="cocktail__name">${strDrink}</p>
                <div class="button__container">
                  <button class="button__container-learnmore" type="button">Learn more</button>
                  <button class="button__container-add" type="button">Add to</button>
                </div>
              </li>`;
    })
    .join('');
}
