import throttle from 'lodash.throttle';

const selectors = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const valuesLS = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  email: '',
  message: '',
};

selectors.input.value = valuesLS.email;
selectors.textarea.value = valuesLS.message;

selectors.form.addEventListener('input', throttle(handlerValue, 500));

function handlerValue(evt) {
  const values = {
    email: selectors.input.value,
    message: selectors.textarea.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(values));
}

selectors.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  console.log(
    JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
      email: '',
      message: '',
    }
  );

  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}
