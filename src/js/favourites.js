const STORAGE_KEY = 'favorite-cocktail';

export function buttonSwitcher(event) {
  // console.dir(event.target);
  let { classList, dataset } = event.target;
  // console.log(dataset);
  if (!classList.contains('btn-add')) {
    return;
  }
  classList.toggle('btn-remove');
  event.target.textContent = classList.contains('btn-remove')
    ? 'Remove'
    : 'Add to';

  // console.log('data-set' , dataset.card)
  const localCocktails = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const eventCard = JSON.parse(dataset.card);

  if (classList.contains('btn-remove')) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...localCocktails, eventCard])
    );
  } else {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        localCocktails.filter(cocktail => cocktail.id !== eventCard.id)
      )
    );
  }
  // console.log(localCocktails);
  // console.log(eventCard);
}

export function buttonSwitcherModal(event) {
  // console.dir(event.target);
  let { classList, dataset } = event.target;
  // console.log(dataset);
  if (!classList.contains('modal__button-add')) {
    return;
  }
  const src = event.target.parentElement.querySelector('img').src;
  const alt = event.target.parentElement.querySelector('img').alt;
  const text = event.target.parentElement.querySelector('h1').textContent;

  classList.toggle('btn-remove-mod');
  event.target.textContent = classList.contains('btn-remove-mod')
    ? 'Remove'
    : 'Add to favorite';

  // console.log('data-set' , dataset.card)
  const localCocktails = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  // const eventCard = JSON.parse(dataset.card);
  const eventCard = {
    src,
    alt,
    text,
  };

  if (classList.contains('btn-remove-mod')) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...localCocktails, eventCard])
    );
  } else {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        localCocktails.filter(cocktail => cocktail.id !== eventCard.id)
      )
    );
  }
  // console.log(localCocktails);
  // console.log(eventCard);
}

// function renderFavCard () {
//     const localCocktails = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
//     const markUp = localCocktails.map(cocktail => (
//         `<div class="cocktails__card">
//                 <div>
//                     <img width="280" class="cocktails__img" src=${cocktail.src} alt= ${cocktail.alt.replaceAll('_', ' ')} />
//                     </div>
//                     <p class="cocktail-info" data-cocktailID=${cocktail.id}>
//                         ${cocktail.text.replaceAll('_', ' ')}</p>
//                     <div class="button-wrapper">
//                     <button class="btn-lm" type="button">Learn more</button>
//                     <button class="btn-add" type="button">Add to</button>
//                   </div>
//                 </div>`
//     )).join('');
// console.log(document.querySelector('.coctails__list'))
//     document.querySelector('.coctails__list').insertAdjacentHTML('beforeend', markUp)
// }
// renderFavCard();
