import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
    //constructor(popupSelector, {handleSubmitForm})
    constructor(popupSelector) {
        super(popupSelector);
        //this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form-container');
    }

    close() {
        super.close()
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            //this._handleSubmitForm(this._getInputValues())
            this.close();
        })
        
    }
}