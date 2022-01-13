const changeColorBtnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
