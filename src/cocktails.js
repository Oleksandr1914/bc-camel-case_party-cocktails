import './js/header';
import './js/theme-switcher';

import './js/modal-ingredients';
import './js/modal-cocktails';
import './js/pagination';
import './js/favourites';
import './js/favor-markup';
// import './js/fetch-cocktails';
// const STORAGE_KEY = 'favorite-cocktail';

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
//     document.querySelector('.coctails__list').insertAdjacentHTML('beforeEnd', markUp)
// }
// renderFavCard();
