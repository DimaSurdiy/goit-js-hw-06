const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', () => {
  const amountBoxes = refs.input.value;
  createBoxes(amountBoxes);

  refs.input.value = '';
});

refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxesArray = [];
  let boxProportions = 30;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxProportions}px`;
    box.style.height = `${boxProportions}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxProportions += 10;
    boxesArray.push(box);
  }

  refs.boxesContainer.append(...boxesArray);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}
