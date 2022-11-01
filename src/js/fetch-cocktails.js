// export async function getCocktailName(name) {
//   const response = await fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
//   );
//   if (!response.ok)
//     throw new Error(response.status);
//   return await response.json();
// }

// export async function getCocktailLetter(letter) {
//   const response = await fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
//   );
//   if (!response.ok)
//     throw new Error(response.status);
//   return await response.json();
// }

// export async function getIngName(ingName) {
//   const response = await fetch(
//     `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingName}`
//   );
//   if (!response.ok)
//     throw new Error(response.status);
//   return await response.json();
// }
import image from '../images/hero/desktop/group-desktop-min.png';

const submit = document.querySelector('#submit');
const search = document.querySelector('#search');
const random = document.querySelector('#random');
const cocktailsElement = document.querySelector('#cocktails');
const resultHeading = document.querySelector('#result-heading');
const selectedCocktail = document.querySelector('#selected-cocktail');
const learnmore = document.querySelector('.btn-lm');

// Берем коктейли из API
const searchCocktail = e => {
  e.preventDefault();

  // Очищаем поиск предыдущих коктейлей
  cocktailsElement.innerHTML = '';
  selectedCocktail.innerHTML = '';

  // Значение ввода
  const searchInput = search.value;

  // Fetch data from thecocktaildb API
  if (searchInput.trim()) {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
    )
      .then(res => res.json())
      .then(data => {
        // Очищаем предыдущее значение и добавляем, если коктейль не найден
        if (data.drinks === null) {
          document
            .querySelector('.gallery-title')
            .classList.add('hidden-title');
          cocktailsElement.innerHTML = `  <div class="hero__contein container">
    <p class="hero__contain-text">Sorry, we didn't find any cocktail for you</p>

      <img
        src=${image}
        alt="dinner"
        class="hero__contein-img"
      />
  </div>`;

          // Отображаем результат поиска
        } else {
          document
            .querySelector('.gallery-title')
            .classList.remove('hidden-title');
          cocktailsElement.innerHTML = data.drinks
            .map(
              cocktail => `
                <div class="cocktails__card">
                <div>
                    <img width="280" class="cocktails__img" src="${cocktail.strDrinkThumb}" alt= "${cocktail.strDrink}" />
                    </div>
                    <p class="cocktail-info" data-cocktailID="${cocktail.idDrink}">
                        ${cocktail.strDrink}</p>
                   
                    <div class="button-wrapper">
                    <button class="btn-lm" type="button">Learn more</button>
                    <button class="btn-add" type="button">Add to</button>
                  </div>
                </div>
                `
            )
            .join('');
        }
      })
      .catch(error => console.log(error));
    // Очищаем поиск
    search.value = '';
  }
};
submit.addEventListener('submit', searchCocktail);

// Инфо о коктейле
const getCocktailInfo = e => {
  const cocktailInfo = e.path.find(item => {
    if (item.classList) {
      return item.classList.contains('cocktail-info');
    } else {
      return false;
    }
  });
  if (cocktailInfo) {
    const cocktailID = cocktailInfo.getAttribute('data-cocktailID');
    getCocktailById(cocktailID);
  }
};
cocktailsElement.addEventListener('click', getCocktailInfo);

// Click letters ---------------

document.querySelector('.hero__box-lists').addEventListener('click', ev => {
  const elemLetter = document.querySelectorAll('.hero__box-letter');
  const arrLet = [...elemLetter].find(e => e.classList.contains('let'));
  const elemNumb = document.querySelectorAll('.hero__box-numb');
  const arrNumb = [...elemNumb].find(e => e.classList.contains('let'));
  if (arrLet) {
    arrLet.classList.remove('let');
  } else if (arrNumb) {
    arrNumb.classList.remove('let');
  }
  const targ = ev.target;
  targ.classList.add('let');
  const clickContent = targ.textContent;
  addMarcupOnLetter(clickContent.toLowerCase());
  // sel.onSelect(item);
});

function addMarcupOnLetter(letter) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(res => res.json())
    .then(data => {
      if (data.drinks === null) {
        document.querySelector('.gallery-title').classList.add('hidden-title');
        cocktailsElement.innerHTML = `  <div class="hero__contein container">
    <p class="hero__contain-text">Sorry, we didn't find any cocktail for you</p>

      <img
        src=${image}
        alt="dinner"
        class="hero__contein-img"
      />
  </div>`;
      } else {
        document
          .querySelector('.gallery-title')
          .classList.remove('hidden-title');
        cocktailsElement.innerHTML = data.drinks
          .map(
            cocktail => `
                <div class="cocktails__card">
                <div>
                    <img width="280" class="cocktails__img" src=${cocktail.strDrinkThumb} alt= ${cocktail.strDrink} />
                    </div>
                    <p class="cocktail-info" data-cocktailID=${cocktail.idDrink}>
                        ${cocktail.strDrink}</p>
                   
                    <div class="button-wrapper">
                    <button class="btn-lm" type="button">Learn more</button>
                    <button class="btn-add" type="button">Add to</button>
                  </div>
                </div>
                `
          )
          .join('');
      }
    })
    .catch(error => console.log(error));
}

export default function addMarcupOnLetterMobil(lett) {
  console.log(lett);
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${lett}`)
    .then(res => res.json())
    .then(data => {
      if (data.drinks === null) {
        document.querySelector('.gallery-title').classList.add('hidden-title');
        cocktailsElement.innerHTML = `  <div class="hero__contein container">
    <p class="hero__contain-text">Sorry, we didn't find any cocktail for you</p>

      <img
        src=${image}
        alt="dinner"
        class="hero__contein-img"
      />
  </div>`;
      } else {
        document
          .querySelector('.gallery-title')
          .classList.remove('hidden-title');
        cocktailsElement.innerHTML = data.drinks
          .map(
            cocktail => `
                <div class="cocktails__card">
                <div>
                    <img width="280" class="cocktails__img" src=${cocktail.strDrinkThumb} alt= ${cocktail.strDrink} />
                    </div>
                    <p class="cocktail-info" data-cocktailID=${cocktail.idDrink}>
                        ${cocktail.strDrink}</p>
                   
                    <div class="button-wrapper">
                    <button class="btn-lm" type="button">Learn more</button>
                    <button class="btn-add" type="button">Add to</button>
                  </div>
                </div>
                `
          )
          .join('');
      }
    })
    .catch(error => console.log(error));
}

function addRandLetter() {
  const stringLetter = 'abcdefghijklmnopqrstvwyz';
  const arrLetter = stringLetter.split('');
  const randomNumb = Math.floor(Math.random() * arrLetter.length);
  const randomLetter = arrLetter[randomNumb];
  return randomLetter;
}

addMercupRandomCocktails();

function addMercupRandomCocktails() {
  for (let i = 0; i < 9; i += 1) {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${addRandLetter()}`
    )
      .then(res => res.json())
      .then(data => {
        const marcup = `<div class="cocktails__card">
                <div>
                    <img width="280" class="cocktails__img" src=${data.drinks[0].strDrinkThumb} alt= ${data.drinks[0].strDrink} />
                    </div>
                    <p class="cocktail-info" data-cocktailID=${data.drinks[0].idDrink}>
                        ${data.drinks[0].strDrink}</p>
                    <div class="button-wrapper">
                    <button class="btn-lm" type="button">Learn more</button>
                    <button class="btn-add" type="button">Add to</button>
                  </div>
                </div>`;
        cocktailsElement.insertAdjacentHTML('beforeend', marcup);
      })
      .catch(error => console.log(error));
  }
}
