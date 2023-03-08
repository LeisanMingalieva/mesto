//включение валидации вызовом enableValidation
const formValidationConfig = {
  formSelector: '.popup__form-container',
  inputSelector: '.popup__form-item',
  errorClass: 'popup__form-item_type_error',
  buttonSelector: '.popup__form-save',
  buttonDisabledClass: 'popup__form-save_disabled',
  errorSelector: '.popup__form-item-error',
};

function disableSubmit (evt) {
  evt.preventDefault();
}
//функция валидаци форм
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', disableSubmit);
    form.addEventListener('input', () => {
      toggleButton(form,config);
  });
    addInputListener(form, config);
    toggleButton(form,config)
  });
}
//показывает текст ошибки
function showInputError(input, config, errorElement) {
  input.classList.add(config.errorClass);
  errorElement.textContent = input.validationMessage;
}
//убирает текст ошибки
function hideInputError(input, config, errorElement) {
  input.classList.remove(config.errorClass);
  errorElement.textContent = '';
}
//валидация при заполнении инпутов
function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);
  if(input.validity.valid) {
    hideInputError(input, config, errorElement);
  } else {
    showInputError(input, config, errorElement);
  }
}
//состояние кнопки сабмита
function toggleButton(form,config) {
  const buttonSubmit = form.querySelector(config.buttonSelector);
  const isFormValid = form.checkValidity();//проверка формы на валидность
  buttonSubmit.disabled = !isFormValid;//блокирует кнопку при невалидных данных
  buttonSubmit.classList.toggle(config.buttonDisabledClass,!isFormValid);
}

function addInputListener(form, config) {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', (event) => {
      handleFormInput(event,config)
    })
});
}

enableValidation(formValidationConfig);