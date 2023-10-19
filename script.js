const entrarBtn = document.getElementById('button');
const email = document.getElementById('email');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
// const textArea = document.getElementById('textarea');
// const characterCounter = document.getElementById('counter');
// const maxNumOfChars = 500;
const evaluationForm = document.getElementById('evaluation-form');
const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const modalName = document.getElementById('nome');
const modalEmail = document.getElementById('modal-email');
const select = document.getElementById('house');
const modalHouse = document.getElementById('modal-house');
const modalFamily = document.getElementById('modal-family');

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

// const countCharacters = () => {
//   const numOfEnteredChars = textArea.value.length;
//   const counter = maxNumOfChars - numOfEnteredChars;
//   characterCounter.textContent = counter + `/${maxNumOfChars}`;
// };

const sendToStorage = () => {
  localStorage.setItem('name', name.value);
  localStorage.setItem('lastName', lastName.value);
  localStorage.setItem('email', inputEmail.value);
  localStorage.setItem('house', select.value);
};

const getFromStorage = () => {
  const family = document.querySelector('[name="family"]:checked');
  const nameText = localStorage.getItem('name');
  const lastNameText = localStorage.getItem('lastName');
  modalName.innerText = `Nome: -${nameText}- -${lastNameText}-`;
  const emailText = localStorage.getItem('email');
  modalEmail.innerText = `Email: -${emailText}-`;
  const houseText = localStorage.getItem('house');
  modalHouse.innerText = `Casa: ${houseText}`;
  modalFamily.innerText = `Familia: ${family.value}`;
};

const formDisappear = (event) => {
  event.preventDefault();
  sendToStorage();
  getFromStorage();
  evaluationForm.style.display = 'none';
};

// select.style.backgroundColor = 'red';

window.onload = () => {
  entrarBtn.addEventListener('click', checkEmail);
  agreement.addEventListener('change', ableSubmit);
  // textArea.addEventListener('input', countCharacters);
  submitBtn.addEventListener('click', formDisappear);
};
