import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, {handleSubmitForm}) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form-container');
    }

    open(cardId, card) {
        console.log(card, 'card in open')
        this._card = card
        this._cardId = cardId
        super.open()
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._cardId, this._card);
        })
    }
}