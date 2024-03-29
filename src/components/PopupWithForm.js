import Popup from "./Popup.js";

 export default class PopupWithForm extends Popup {
    constructor(popupSelector, {handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form-container');
        this._inputList = this._form.querySelectorAll('.popup__form-item');
        this._button = this._form.querySelector('.popup__form-save');
        this._submitBtnText = this._button.textContent
    }

    close() {
        this._form.reset();
        super.close()
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value
        })
        return this._inputValues;
    }

    setInputValues(data) {
        this._inputList.forEach((item) => {
            item.value = data[item.name]
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues())
        })
        
    }

    renderLoading(isLoading, loadingText='Сохранение...') {
        if(isLoading) {
            this._button.textContent = loadingText;
        } else {
            this._button.textContent = this._submitBtnText;
        }
    }
}