export function getCocktailName(name) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}

export function getCocktailLetter(letter) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  ).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}
