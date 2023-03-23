class FormValidator {
    constructor(config, formElement) {      
      this._inputSelector = config.inputSelector,
      this._errorClass = config.errorClass,
      this._buttonSelector = config.buttonSelector,
      this._buttonDisabledClass = config.buttonDisabledClass,
      this._errorSelector = config.errorSelector,
      this._formElement = formElement;
    }
    //функция валидаци форм
    enableValidation() {      
      this._formElement.addEventListener('submit', this._disableSubmit);
      this._formElement.addEventListener('input', () => {
        this._toggleButton();
      });
      this._addInputListener();
      this._toggleButton()
    }    
    _disableSubmit(evt) {
      evt.preventDefault();
    }
    //показывает текст ошибки
    _showInputError(input, errorElement) {
        input.classList.add(this._errorClass);
        errorElement.textContent = input.validationMessage;
    }
    //убирает текст ошибки
    _hideInputError(input, errorElement) {
        input.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }
    //валидация при заполнении инпутов
    _handleFormInput(event) {
        const input = event.target;
        const inputId = input.id;
        const errorElement = this._formElement.querySelector(`#${inputId}-error`);
        if(input.validity.valid) {
          this._hideInputError(input, errorElement);
        } else {
          this._showInputError(input, errorElement);
        }
    }
    //состояние кнопки сабмита
    _toggleButton() {
        const buttonSubmit = this._formElement.querySelector(this._buttonSelector);
        const isFormValid = this._formElement.checkValidity(); //проверка формы на валидность
        buttonSubmit.disabled = !isFormValid; //блокирует кнопку при невалидных данных
        buttonSubmit.classList.toggle(this._buttonDisabledClass,!isFormValid);
  }
    _addInputListener() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', (evt) => {
            this._handleFormInput(evt);
          });
        });
    }
}

export default FormValidator;