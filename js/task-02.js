const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

function createIngredientsListMarkup() {
  const ingredientsList = document.querySelector('#ingredients');

  ingredients.forEach(ingredient => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = ingredient;
    ingredientsItem.classList.add('item');

    ingredientsList.append(ingredientsItem);
  });
}

createIngredientsListMarkup();
