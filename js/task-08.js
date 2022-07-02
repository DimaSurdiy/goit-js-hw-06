const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    return alert('Все поля формы должны быть заполнены :)');
  }

  console.log({ email, password });

  e.currentTarget.reset();
}
