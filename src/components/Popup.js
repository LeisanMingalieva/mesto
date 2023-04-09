export default class Popup {
    constructor(popupSelector){
        this._popupSelector = document.querySelector(popupSelector);
        this._popupList = document.querySelectorAll('.popup');
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if(evt.key === 'Escape')
            this.close();
    }

    setEventListeners() {
        this._popupList.forEach(popupElement => {
            popupElement.addEventListener('mousedown', (evt) => {
                if(evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
                    this.close(popupElement);
                }
            })
        })
    }
}