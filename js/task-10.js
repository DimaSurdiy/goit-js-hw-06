const controlInputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = controlInputEl.value;
  let boxWidthHeight = 30;

  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = boxWidthHeight + 'px';
    boxEl.style.height = boxWidthHeight + 'px';
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(boxEl);

    boxWidthHeight += 10;
  }

  controlInputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}
