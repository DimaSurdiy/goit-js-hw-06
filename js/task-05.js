const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value;

  refs.name.textContent = inputValue;

  if (!inputValue) {
    refs.name.textContent = 'Anonymous';
  }
}
