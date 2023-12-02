const feedbackForm = document.querySelector('.feedback-form');
const formInput = feedbackForm.elements.email;
const formMessage = feedbackForm.elements.message;
const localStorageKey = 'feedback-form-state';
const inputValues = {};

function formCurrentData(typeOfData) {
  if (
    JSON.parse(localStorage.getItem(localStorageKey)) != null &&
    typeOfData == 'email' &&
    JSON.parse(localStorage.getItem(localStorageKey)).email != undefined
  ) {
    return JSON.parse(localStorage.getItem(localStorageKey)).email;
  } else if (
    JSON.parse(localStorage.getItem(localStorageKey)) != null &&
    typeOfData == 'message' &&
    JSON.parse(localStorage.getItem(localStorageKey)).message != undefined
  ) {
    return JSON.parse(localStorage.getItem(localStorageKey)).message;
  } else {
    return '';
  }
}

formInput.value = formCurrentData('email');
formMessage.value = formCurrentData('message');

feedbackForm.addEventListener('input', evt => {
  inputValues[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(inputValues));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  feedbackForm.reset();
});

const testtest = () => {
  const notNeedConst = localStorage.getItem(localStorageKey);
  console.log(JSON.parse(notNeedConst).message);
};
