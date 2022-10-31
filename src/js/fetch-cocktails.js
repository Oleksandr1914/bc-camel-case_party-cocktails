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

const submit = document.querySelector('#submit');
const search = document.querySelector('#search');
const random = document.querySelector('#random');
const cocktailsElement = document.querySelector('#cocktails');
const resultHeading = document.querySelector('#result-heading');
const selectedCocktail = document.querySelector('#selected-cocktail');
const learnmore = document.querySelector('.btn-lm')

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
          cocktailsElement.innerHTML = '';
        
          // Отображаем результат поиска
        } else {
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
      });
    // Очищаем поиск
    search.value = '';
  }
};
submit.addEventListener('click', searchCocktail);


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

// Get cocktails by ID
const getCocktailById = cocktailID => {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`
  )
    .then(res => res.json())
    .then(data => {
      const cocktail = data.drinks[0];
      addSelectedCocktailToDOM(cocktail);
    });
};

const addSelectedCocktailToDOM = cocktail => {
  const ingredients = [];

  for (let i = 1; i <= 9; i++) {
    if (cocktail[`strIngredient${i}`]) {
      // пушим ингридиенты в массив
      ingredients.push(
        `${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  cocktailsElement.innerHTML = '';
  // Добавляем разметку
  selectedCocktail.innerHTML = `
    <div class="selected-cocktail">
    <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" />
      <h1>${cocktail.strDrink}</h1>
      <h2>Ingredients</h2>
      <ul>
      ${ingredients
        .map(ingredientMeasurement => `<li>${ingredientMeasurement}</li>`)
        .join('')}
    </ul>
      <div class="main">
        <p>${cocktail.strInstructions}</p>
      </div>
    </div>
  `;
};
// // Get random cocktail from API
// const getRandomCocktail = () => {
//   // clear DOM
//   cocktailsElement.innerHTML = '';
//   resultHeading.innerHTML = `<h2>Random Cocktail:</h2>`;

//   // random coctail finder
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
//     .then((res) => res.json())
//     .then((data) => {
//       const randomCocktail = data.drinks[0];

//       addSelectedCocktailToDOM(randomCocktail);
//     });
// };
// // Event listener
// random.addEventListener('click', getRandomCocktail);
