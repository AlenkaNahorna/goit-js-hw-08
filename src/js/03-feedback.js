import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let data = {};
const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

// feedbackForm.elements.email.value = formData.email ?? '';
// feedbackForm.elements.message.value = formData.message ?? '';

const inputHandler = e => {
  data[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

const submitHandler = e => {
  e.preventDefault();

  if (feedbackForm.elements.email.value == '' || feedbackForm.elements.message.value == '') {
    return;
  }
  localStorage.removeItem(LOCALSTORAGE_KEY);

  e.currentTarget.reset();
  console.log(formData);
};

const savedData = () => {
  if (formData) {
    Object.keys(formData).forEach(item => (form[item].value = formData[item]));
  }
};
savedData();

feedbackForm.addEventListener('input', throttle(inputHandler, 500));
feedbackForm.addEventListener('submit', submitHandler);
