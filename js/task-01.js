function calculateNumberOfCategories(categories) {
  return console.log(`Number of categories: ${categories.children.length}`);
}

const categoriesListEl = document.querySelector('#categories');
calculateNumberOfCategories(categoriesListEl);

function logNumberOfItemsInCategory(categoriesItems) {
  categoriesItems.forEach(item => {
    const categoryTitle = item.firstElementChild;
    const categoryItemList = categoryTitle.nextElementSibling;

    console.log(
      `Category: ${categoryTitle.textContent} 
Elements: ${categoryItemList.children.length}`,
    );
  });
}

const categoriesItemsEl = document.querySelectorAll('#categories .item');
logNumberOfItemsInCategory(categoriesItemsEl);
