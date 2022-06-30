const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const length = Number(event.currentTarget.dataset.length);
  console.log(length);

  if (length !== event.currentTarget.value.length) {
    addInputInvalidClass();
    return;
  }

  removeInputInvalidClass();
  addInputValidClass();
}

function addInputValidClass() {
  inputEl.classList.add('valid');
}

function addInputInvalidClass() {
  inputEl.classList.add('invalid');
}

function removeInputInvalidClass() {
  inputEl.classList.remove('invalid');
}
