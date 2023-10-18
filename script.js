const entrarBtn = document.getElementById('button');
const email = document.getElementById('email');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

const checkEmail = () => {
  const emailText = 'tryber@teste.com';
  const passwordText = '123456';
  if (email.value === emailText && password.value === passwordText) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};

const ableSubmit = () => {
  submitBtn.disabled = !agreement.checked;
};

window.onload = () => {
  entrarBtn.addEventListener('click', checkEmail);
  agreement.addEventListener('change', ableSubmit);
};
