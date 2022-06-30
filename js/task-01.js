const categoriesEl = document.querySelector('#categories');
calculateNumberOfCategories(categoriesEl);

function calculateNumberOfCategories(categories) {
  return console.log(`Number of categories: ${categories.children.length}`);
}

/* _______________________________________________ */

const categoriesItems = document.querySelectorAll('#categories .item');

categoriesItems.forEach(item => {
  const categoryTitle = item.firstElementChild;
  const categoryItemList = categoryTitle.nextElementSibling;

  console.log(`Category: ${categoryTitle.textContent}
Elements: ${categoryItemList.children.length}`);
});
