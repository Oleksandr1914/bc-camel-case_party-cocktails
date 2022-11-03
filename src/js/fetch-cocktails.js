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
import openModIngr from '../js/modal-ingredients';

const submit = document.querySelector('#submit');
const search = document.querySelector('#search');
const random = document.querySelector('#random');
const cocktailsElement = document.querySelector('#cocktails');
const resultHeading = document.querySelector('#result-heading');
// const selectedCocktail = document.querySelector('#selected-cocktail');
const learnmore = document.querySelector('.btn-lm');

// Берем коктейли из API
const searchCocktail = e => {
  e.preventDefault();

  // Очищаем поиск предыдущих коктейлей
  cocktailsElement.innerHTML = '';
  // selectedCocktail.innerHTML = '';

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

          paginatiomOn(data.drinks);
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
        paginatiomOn(data.drinks);
        document.querySelector('.btn-lm').addEventListener('click', openMod);
      }
    })
    .catch(error => console.log(error));
}

export default function addMarcupOnLetterMobil(lett) {
  // console.log(lett);
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
        paginatiomOn(data.drinks);
      }
      document.querySelector('.btn-lm').addEventListener('click', openMod);
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
        cocktailsElement.addEventListener('click', openMod);
      })
      .catch(error => console.log(error));
  }
}

// ---------> відкриття модалки <--------

function openMod(event) {
  if (event.target.textContent == 'Learn more') {
    document.querySelector('.backdrop').classList.remove('is-hidden');
    document.body.classList.toggle('_lock');
    // document
    //   .querySelector('.backdrop')
    //   .addEventListener('click', onClickCallModalIng);
    // document
    //   .querySelector('.backdrop')
    //   .addEventListener('click', CloseModalCocktails);
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
  // if (event.target.nodeName === 'svg' || event.target.nodeName === 'use') {
  //   document.querySelector('.mod').innerHTML = `<div class="modal">
  //         <button type="button" class="modal__close" cocktails-close>
  //           <svg class="modal-icon-close" width="32" Height="32">
  //             <use href="/sprite.6e20b4c5.svg#icon-close"></use>
  //           </svg>
  //         </button>`;
  //   document
  //     .querySelector('[data-modal=modal-cocktails]')
  //     .classList.add('is-hidden');
  // }
  console.log('mod', document.querySelector('.mod'));
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
  // if (event.target.nodeName === 'A') {
  //   document
  //     .querySelector('[data-modal=modal]')
  //     .classList.remove('is-hidden-ing');
  // }
  document
    .querySelector('[data-modal=modal]')
    .classList.remove('is-hidden-ing');
  // document.body.classList.add('_lock');
  openModIngr(event);
}

// --------->  pagination  <---------
function paginatiomOn(arrData) {
  const pagin = document.querySelector('.pagin');

  const arrLi = [];
  // -----------> створюємо динамічно li <----------

  let notesOnPage = 3;
  widthControl();
  const counterLi = Math.ceil(arrData.length / notesOnPage);
  for (let i = 1; i <= counterLi; i += 1) {
    arrLi.push(`<li class="pagin__item">${i}</li>`);
  }
  const stringLi = arrLi.join('');
  pagin.innerHTML = stringLi;
  markupCardPaginStart(arrData);
  const items = document.querySelectorAll('.pagin__item');

  for (const item of items) {
    item.addEventListener('click', markupCardPagin);
  }

  // ---------->Визначаєм розмір екрана<-----------

  function widthControl() {
    if (window.innerWidth <= 768) {
      notesOnPage = 3;
      return notesOnPage;
    } else if (window.innerWidth > 768 && window.innerWidth <= 1280) {
      notesOnPage = 6;
      return notesOnPage;
    } else {
      notesOnPage = 9;
      return notesOnPage;
    }
  }
  // ----------> додає картки при кліку на цифру <--------------

  function markupCardPagin(event) {
    // console.log(event.target.textContent);
    const pageNum = event.target.textContent;
    const start = (pageNum - 1) * notesOnPage;
    const end = start + notesOnPage;
    const notes = arrData.slice(start, end);
    cocktailsElement.innerHTML = notes
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

  // ---------------->  додає картки при кліку на букву <---------

  function markupCardPaginStart(arrData) {
    // const pageNum = event.target.textContent;
    const start = 0;
    const end = start + notesOnPage;
    const notes = arrData.slice(start, end);

    cocktailsElement.innerHTML = notes
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
}
