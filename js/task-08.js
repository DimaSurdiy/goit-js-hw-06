const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены :)');
  }

  console.log({
    email: email.value,
    password: password.value,
  });

  event.currentTarget.reset();
}
