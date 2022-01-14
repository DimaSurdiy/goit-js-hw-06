const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

function createIngredientsListMarkup() {
  const ingredientsList = document.querySelector('#ingredients');
  const ingredientsItemsArray = [];

  ingredients.forEach(ingredient => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = ingredient;
    ingredientsItem.classList.add('item');

    ingredientsItemsArray.push(ingredientsItem);
  });

  ingredientsList.append(...ingredientsItemsArray);
}

createIngredientsListMarkup();
