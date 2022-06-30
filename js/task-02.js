const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

const createIngredientsItems = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add('item');

  return ingredientsItem;
});

ingredientsListEl.append(...createIngredientsItems);
