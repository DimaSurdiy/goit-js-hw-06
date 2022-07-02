const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  bgColor: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  refs.bgColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
