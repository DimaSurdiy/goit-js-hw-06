const refs = {
  value: document.querySelector('#value'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
let counterValue = 0;

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  changeValue();
}

function onIncrementBtnClick() {
  counterValue += 1;
  changeValue();
}

function changeValue() {
  refs.value.textContent = counterValue;
}
